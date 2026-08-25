import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";

// Node.js runtime for Supabase
export const runtime = "nodejs";

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

    // If Supabase not configured, store in mock and return success (dev mode)
    if (!isSupabaseConfigured || !supabaseAdmin) {
      console.warn("[contact] Supabase not configured - mock saving", { name, email });
      // simulate latency
      await new Promise((r) => setTimeout(r, 400));
      return NextResponse.json({ success: true, mocked: true, message: "Message received (mock - configure Supabase env)." });
    }

    const { error } = await supabaseAdmin.from("contacts").insert([
      {
        name: String(name).slice(0, 200),
        email: String(email).slice(0, 320),
        subject: subject ? String(subject).slice(0, 300) : null,
        message: String(message).slice(0, 5000),
        // ip could be added via headers
      },
    ]);

    if (error) {
      console.error("[supabase insert error]", error);
      // fallback: if table missing, try to give helpful error
      if (error.code === "42P01") {
        return NextResponse.json({ error: "Supabase table 'contacts' not found. Run the SQL in supabase.sql" }, { status: 500 });
      }
      return NextResponse.json({ error: "Database error: " + error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: "Server error: " + (e.message || "unknown") }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "contact api up", supabase: isSupabaseConfigured });
}
