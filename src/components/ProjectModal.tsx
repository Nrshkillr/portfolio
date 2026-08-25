"use client";
import { Project } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        <div onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div initial={{ y: 20, scale: 0.98, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 10, opacity: 0 }} className="relative w-full max-w-[760px] max-h-[90vh] overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a12] flex flex-col">
          <div className="relative h-[260px] shrink-0 overflow-hidden">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`} />
            <button onClick={onClose} className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/60 border border-white/15 grid place-items-center text-white backdrop-blur"><X size={16} /></button>
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs tracking-wide text-white/70">{project.category} • {project.year}</p>
              <h3 className="text-2xl font-bold font-display">{project.title}</h3>
              <p className="text-sm text-white/70 mt-1">{project.description}</p>
            </div>
          </div>
          <div className="overflow-auto p-6 space-y-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">{t}</span>
              ))}
            </div>
            {project.problem && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <h4 className="text-xs font-semibold tracking-wide text-violet-300">PROBLEM</h4>
                  <p className="text-sm text-white/70 mt-2 leading-6">{project.problem}</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <h4 className="text-xs font-semibold tracking-wide text-cyan-300">SOLUTION</h4>
                  <p className="text-sm text-white/70 mt-2 leading-6">{project.solution}</p>
                </div>
              </div>
            )}
            <div>
              <h4 className="text-sm font-semibold">Features</h4>
              <ul className="mt-2 grid md:grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <li key={f} className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white/70">• {f}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 pt-2">
              {project.links.live && <a href={project.links.live} className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-700">Live Demo <ExternalLink size={14} /></a>}
              {project.links.github && <a href={project.links.github} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium">GitHub <Github size={14} /></a>}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
