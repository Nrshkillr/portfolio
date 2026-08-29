import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";
import { siteConfig } from "@/data/site";

// Node.js runtime for Supabase + Nodemailer
export const runtime = "nodejs";

const CONTACT_TO = process.env.CONTACT_TO_EMAIL || siteConfig.email; // nrsh.devop@gmail.com
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL || `Portfolio <onboarding@resend.dev>`; // change to verified domain

async function sendEmail({ name, email, subject, message }: { name: string; email: string; subject?: string; message: string }) {
  const html = `
    <div style="font-family:Inter,sans-serif;line-height:1.6;color:#111">
      <h2 style="margin:0 0 8px">New portfolio message</h2>
      <p style="margin:0 0 16px;color:#555">From portfolio contact form — ${new Date().toLocaleString()}</p>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px 12px;background:#f5f5f7;font-weight:600;width:120px">Name</td><td style="padding:8px 12px;border:1px solid #eee">${name}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f7;font-weight:600">Email</td><td style="padding:8px 12px;border:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f7;font-weight:600">Subject</td><td style="padding:8px 12px;border:1px solid #eee">${subject || "(no subject)"}</td></tr>
      </table>
      <div style="margin:16px 0;padding:16px;background:#fafafa;border:1px solid #eee;border-radius:8px;white-space:pre-wrap">${message}</div>
      <p style="font-size:12px;color:#888">Reply directly to ${email}</p>
    </div>
  `;
  const text = `New portfolio message\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "(no subject)"}\n\n${message}`;

  // 1) Resend (recommended, easiest on Vercel)
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: CONTACT_FROM,
        to: CONTACT_TO,
        replyTo: email,
        subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
        html,
        text,
      });
      if (error) throw error;
      console.log("[contact] email sent via Resend to", CONTACT_TO);
      return { sent: true, provider: "resend" };
    } catch (e: any) {
      console.error("[contact] Resend failed:", e?.message || e);
      throw e;
    }
  }

  // 2) SMTP via Nodemailer (Gmail / any provider)
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: String(process.env.SMTP_SECURE || "false") === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || CONTACT_FROM,
        to: CONTACT_TO,
        replyTo: email,
        subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
        text,
        html,
      });
      console.log("[contact] email sent via SMTP to", CONTACT_TO);
      return { sent: true, provider: "smtp" };
    } catch (e: any) {
      console.error("[contact] SMTP failed:", e?.message || e);
      throw e;
    }
  }

  // No provider configured — log and continue (so Supabase still saves)
  console.warn("[contact] No email provider configured (RESEND_API_KEY or SMTP_*). Skipping email, only DB saved. To:", CONTACT_TO);
  return { sent: false, provider: "none" };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const clean = {
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 320),
      subject: subject ? String(subject).slice(0, 300) : null,
      message: String(message).slice(0, 5000),
    };

    // Save to Supabase (if configured)
    let dbSaved = false;
    let dbMocked = false;
    if (!isSupabaseConfigured || !supabaseAdmin) {
      console.warn("[contact] Supabase not configured - mock saving", { name: clean.name, email: clean.email });
      dbMocked = true;
    } else {
      const { error } = await supabaseAdmin.from("contacts").insert([clean]);
      if (error) {
        console.error("[supabase insert error]", error);
        if (error.code === "42P01") {
          return NextResponse.json({ error: "Supabase table 'contacts' not found. Run supabase.sql" }, { status: 500 });
        }
        return NextResponse.json({ error: "Database error: " + error.message }, { status: 500 });
      }
      dbSaved = true;
    }

    // Send email to you (always try, even if DB mocked)
    let emailResult: any = { sent: false };
    try {
      emailResult = await sendEmail({ name: clean.name, email: clean.email, subject: clean.subject || undefined, message: clean.message });
    } catch (emailErr: any) {
      // Don't fail request if email fails but DB saved — return partial success
      console.error("[contact] email error but DB status:", { dbSaved, dbMocked }, emailErr);
      return NextResponse.json(
        {
          success: true,
          warning: "Message saved but email failed to send. Check RESEND_API_KEY / SMTP settings.",
          dbSaved,
          dbMocked,
          emailSent: false,
          error: emailErr.message || String(emailErr),
        },
        { status: 202 }
      );
    }

    return NextResponse.json({
      success: true,
      message: emailResult.sent ? "Message sent and emailed!" : "Message saved!",
      dbSaved,
      dbMocked,
      emailSent: emailResult.sent,
      provider: emailResult.provider,
    });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: "Server error: " + (e.message || "unknown") }, { status: 500 });
  }
}

export async function GET() {
  const hasResend = Boolean(process.env.RESEND_API_KEY);
  const hasSmtp = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
  return NextResponse.json({
    status: "contact api up",
    supabase: isSupabaseConfigured,
    to: CONTACT_TO,
    emailProvider: hasResend ? "resend" : hasSmtp ? "smtp" : "none",
  });
}
