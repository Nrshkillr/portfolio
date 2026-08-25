import { siteConfig } from "@/data/site";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#050508]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-600/[0.04] to-transparent" />
        <svg className="absolute bottom-0 right-0 opacity-20 w-[600px] h-[300px]" viewBox="0 0 600 300">
          <ellipse cx="300" cy="300" rx="280" ry="120" fill="none" stroke="#6d28d9" strokeWidth="1" />
          <ellipse cx="300" cy="300" rx="220" ry="95" fill="none" stroke="#06b6d4" strokeWidth="1" />
          <ellipse cx="300" cy="300" rx="160" ry="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-[1200px] px-6 py-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        <div>
          <div className="font-display font-bold text-3xl tracking-[0.15em]">NARESH</div>
          <p className="text-sm text-white/50 mt-1">Building. Learning. Experimenting.</p>
          <p className="text-xs text-white/25 mt-4">© 2026 Naresh. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={siteConfig.links.github} target="_blank" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"><Github size={16} /></a>
          <a href={siteConfig.links.linkedin} target="_blank" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"><Linkedin size={16} /></a>
          <a href={siteConfig.links.email} className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"><Mail size={16} /></a>
          <a href={siteConfig.links.twitter} target="_blank" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"><Twitter size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
