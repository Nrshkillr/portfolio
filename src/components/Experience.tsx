"use client";
import { timeline } from "@/data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#050508] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-violet-400">MY JOURNEY</p>
          <h2 className="mt-2 font-display text-[26px] md:text-[30px] font-semibold leading-tight">Experience <br/><span className="text-violet-400">& Journey</span></h2>

          <div className="mt-8 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-violet-600 via-violet-600/40 to-transparent" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative pl-7">
                  <span className={`absolute left-0 top-1 h-[14px] w-[14px] rounded-full border-2 ${item.active ? "bg-violet-600 border-violet-600 shadow-[0_0_14px_rgba(109,40,217,0.8)]" : "bg-[#0a0a12] border-white/20"}`} />
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur p-4">
                    <p className="font-mono text-[10px] tracking-wide text-violet-400">{item.year}</p>
                    <h3 className="text-sm font-semibold mt-1">{item.title}</h3>
                    <p className="text-xs leading-5 text-white/55 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* planet visual */}
        <div className="relative h-[420px] md:h-[520px] rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 grid-bg opacity-[0.03]" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-violet-500/15" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/8" style={{ transform: "translate(-50%,-50%) rotateX(65deg)" }} />
          </motion.div>
          <div className="relative">
            <div className="h-[180px] w-[180px] rounded-full bg-gradient-to-br from-violet-600 via-indigo-700 to-[#1a0a3a] shadow-[0_0_60px_rgba(109,40,217,0.6), inset_0_0_40px_rgba(255,255,255,0.12)] relative overflow-hidden">
              <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 55%)"}} />
              <div className="absolute -right-6 top-6 h-10 w-16 rounded-full bg-white/10 blur-[6px]" />
              <div className="absolute left-6 bottom-8 h-6 w-10 rounded-full bg-black/20 blur-[4px]" />
            </div>
            {/* orbiting dots */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
              <div className="absolute -top-6 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_10px_#8b5cf6]" />
            </motion.div>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute inset-[-40px]">
              <div className="absolute top-1/2 -right-2 h-2 w-2 rounded-full bg-cyan-400" />
            </motion.div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] font-mono text-white/30">
            <span>2021 → 2026</span>
            <span>◉ JOURNEY MODE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
