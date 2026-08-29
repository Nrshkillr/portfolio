"use client";
import { siteConfig } from "@/data/site";
import { GraduationCap, Cuboid } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationAndBuilding() {
  return (
    <section className="relative bg-[#050508] pb-16">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-3 gap-4">
        {/* education */}
        <div className="md:col-span-1 rounded-[20px] border border-white/[0.07] bg-white/[0.03] backdrop-blur p-5">
          <p className="font-mono text-[10px] tracking-[0.16em] text-violet-400">EDUCATION</p>
          <h3 className="font-display font-semibold mt-1">Education</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {siteConfig.education.map((e) => (
              <div key={e.degree} className="rounded-xl border border-white/10 bg-black/20 p-3">
                <GraduationCap size={14} className="text-violet-400" />
                <div className="text-xs font-semibold mt-2 leading-tight">{e.degree}</div>
                <div className="text-[11px] text-white/50 mt-1 leading-tight">{e.school}</div>
                <div className="text-[10px] font-mono text-white/30 mt-2">{e.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* currently building */}
        <div className="md:col-span-1 rounded-[20px] border border-white/[0.07] bg-white/[0.03] backdrop-blur p-5 flex flex-col">
          <p className="font-mono text-[10px] tracking-[0.16em] text-violet-400">CURRENTLY BUILDING</p>
          <h3 className="font-display font-semibold mt-1 text-[18px]">{siteConfig.currentlyBuilding.name}</h3>
          <p className="text-xs leading-5 text-white/55 mt-2">{siteConfig.currentlyBuilding.description}</p>
          <div className="mt-4 flex items-center gap-2 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
            <span className="rounded-full bg-emerald-500/15 border border-emerald-500/20 px-2.5 py-1 text-emerald-300 font-medium">● In Progress</span>
          </div>
          <div className="mt-auto pt-6 flex justify-end">
            <div className="relative h-20 w-20">
              <motion.div animate={{ rotate: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 grid grid-cols-3 gap-1 opacity-80">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-[4px] bg-gradient-to-br from-violet-600 to-cyan-500 shadow-md" style={{ opacity: 0.7 + Math.random() * 0.3 }} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* github */}
        <div className="md:col-span-1 rounded-[20px] border border-white/[0.07] bg-white/[0.03] backdrop-blur p-5">
          <p className="font-mono text-[10px] tracking-[0.16em] text-violet-400">GITHUB ACTIVITY</p>
          <h3 className="font-display font-semibold mt-1">Latest from GitHub</h3>
          <div className="mt-4 flex gap-4">
            <div className="flex-1">
              <div className="flex gap-1 text-[9px] font-mono text-white/30 mb-2">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
              <div className="grid grid-cols-12 gap-[3px]">
                {Array.from({ length: 84 }).map((_, i) => {
                  const intensity = Math.random();
                  const bg = intensity > 0.7 ? "bg-violet-600" : intensity > 0.45 ? "bg-violet-500/60" : intensity > 0.25 ? "bg-emerald-500/50" : "bg-white/10";
                  return <div key={i} className={`h-[6px] w-[6px] rounded-[2px] ${bg}`} />;
                })}
              </div>
            </div>
            <div className="w-[110px] shrink-0 rounded-xl border border-white/10 bg-black/30 p-3">
              <div className="flex items-center gap-2">
                <img src="/profile.jpg?w=100&q=80" className="h-7 w-7 rounded-full object-cover" alt="avatar" />
                <div>
                  <div className="text-xs font-semibold leading-none">Naresh</div>
                  <div className="text-[10px] text-white/50">@naresh-dev</div>
                </div>
              </div>
              <div className="mt-3 text-[11px]">
                <div className="text-white/50">Public Repos</div>
                <div className="font-semibold">25+</div>
              </div>
              <a href={siteConfig.links.github} target="_blank" className="mt-3 block rounded-full bg-white text-black text-center text-[11px] font-medium py-1.5">View GitHub Profile</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
