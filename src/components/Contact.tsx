"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Github, Linkedin, Twitter, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import ContactOrb from "./ContactOrb";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setMsg("Please fill all required fields."); setStatus("error"); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setStatus("success");
      setMsg("Message sent successfully! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setMsg(err.message || "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative bg-[#050508] py-16 md:py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a18] to-transparent" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-violet-600/15 blur-[100px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
        {/* left */}
        <div className="relative">
          <p className="font-mono text-[11px] tracking-[0.18em] text-violet-400">GET IN TOUCH</p>
          <h2 className="mt-2 font-display text-[28px] md:text-[34px] font-semibold leading-tight">
            Let&apos;s build <br /> something <br /> <span className="text-violet-400">amazing.</span>
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/55 max-w-[360px]">Have an idea, project, or opportunity? Let&apos;s talk and build something great together.</p>

          <div className="mt-8 space-y-3">
            <a href={siteConfig.links.email} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
              <Mail size={16} className="text-violet-400" />
              <div>
                <div className="text-xs text-white/50">Email</div>
                <div className="text-sm">{siteConfig.email}</div>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <MapPin size={16} className="text-violet-400" />
              <div>
                <div className="text-xs text-white/50">Location</div>
                <div className="text-sm">{siteConfig.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Clock size={16} className="text-violet-400" />
              <div>
                <div className="text-xs text-white/50">Availability</div>
                <div className="text-sm">{siteConfig.availability}</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <a href={siteConfig.links.github} target="_blank" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10"><Github size={16} /></a>
            <a href={siteConfig.links.linkedin} target="_blank" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10"><Linkedin size={16} /></a>
            <a href={siteConfig.links.twitter} target="_blank" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10"><Twitter size={16} /></a>
            <a href={siteConfig.links.email} className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10"><Mail size={16} /></a>
          </div>

          {/* 3D orb decoration - hidden on mobile */}
          <div className="hidden lg:block absolute -bottom-10 -right-6 w-[260px] h-[260px] pointer-events-none opacity-60">
            <ContactOrb />
          </div>
        </div>

        {/* form */}
        <motion.form onSubmit={submit} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[22px] border border-white/10 bg-white/[0.04] backdrop-blur p-6">
          <div className="grid gap-4">
            <div>
              <label className="text-xs text-white/60">Your Name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/30 focus:border-violet-500 focus:outline-none" />
            </div>
            <div>
              <label className="text-xs text-white/60">Your Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/30 focus:border-violet-500 focus:outline-none" />
            </div>
            <div>
              <label className="text-xs text-white/60">Subject</label>
              <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Project idea" className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/30 focus:border-violet-500 focus:outline-none" />
            </div>
            <div>
              <label className="text-xs text-white/60">Your Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Tell me about your project..." className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/30 focus:border-violet-500 focus:outline-none resize-none" />
            </div>
          </div>

          {msg && (
            <div className={`mt-4 rounded-xl px-4 py-3 text-sm border ${status === "success" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" : status === "error" ? "bg-red-500/10 border-red-500/20 text-red-300" : "bg-white/5 border-white/10"}`}>
              {msg}
            </div>
          )}

          <button type="submit" disabled={status === "loading"} className="mt-4 w-full rounded-xl bg-[#6d28d9] hover:bg-[#7c3aed] disabled:opacity-60 text-white font-medium py-3.5 flex items-center justify-center gap-2 transition">
            {status === "loading" ? "Sending..." : <>Send Message <Send size={16} /></>}
          </button>

          <p className="mt-3 text-center text-xs text-white/30">Node.js + Supabase backend · No secrets exposed</p>
        </motion.form>
      </div>
    </section>
  );
}
