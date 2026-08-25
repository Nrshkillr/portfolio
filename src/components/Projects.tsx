"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === active);

  return (
    <section id="projects" className="relative bg-[#050508] py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#080813] to-[#050508]" />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-violet-400">MY WORK</p>
            <h2 className="mt-2 font-display text-[26px] md:text-[32px] font-semibold leading-none">Selected <br /><span className="text-violet-400">Projects</span></h2>
            <p className="mt-3 max-w-[360px] text-sm leading-6 text-white/55">Here are some of my recent projects. Each project is a unique solution to real problems.</p>
          </div>
          <a href="#" className="hidden md:inline-flex rounded-full bg-violet-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-700 transition">View All Projects</a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.03] backdrop-blur flex flex-col"
            >
              <div className="relative h-[170px] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.06] transition duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.color} opacity-20 group-hover:opacity-25 transition`} />
                <div className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur px-2.5 py-1 text-[11px] border border-white/10">{p.category} • {p.year}</div>
                <button onClick={() => setActive(p.id)} className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-white text-black grid place-items-center opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0" aria-label="Open">
                  <ArrowUpRight size={14} />
                </button>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-[15px]">{p.title}</h3>
                <p className="mt-1 text-[12px] leading-5 text-white/60 line-clamp-2">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.slice(0,3).map((t) => (
                    <span key={t} className="rounded-full bg-white/5 border border-white/10 px-2 py-1 text-[10px] text-white/60">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => setActive(p.id)} data-cursor="OPEN" className="flex-1 rounded-full bg-white text-black text-xs font-medium py-2 hover:bg-zinc-100 transition">View Project →</button>
                  {p.links.github && <a href={p.links.github} className="h-8 w-8 grid place-items-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"><Github size={14} /></a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* pinned cinematic feel strip */}
        <div className="mt-6 rounded-[18px] border border-white/[0.06] bg-white/[0.02] p-4 flex items-center justify-between">
          <span className="text-xs text-white/50 font-mono tracking-wide">0{projects.length} SELECTED WORKS · CINEMATIC SCROLL · 2024</span>
          <span className="hidden md:block text-xs text-white/30">Hover to preview → Click to explore</span>
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setActive(null)} />}
    </section>
  );
}
