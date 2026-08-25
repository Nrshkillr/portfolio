"use client";
import { motion } from "framer-motion";

const orbitTechs = [
  { name: "React", color: "from-cyan-400 to-blue-500", top: "12%", left: "74%" },
  { name: "Next.js", color: "from-white to-zinc-300", top: "18%", left: "88%" },
  { name: "TypeScript", color: "from-blue-600 to-blue-400", top: "38%", left: "92%" },
  { name: "JavaScript", color: "from-yellow-400 to-amber-500", top: "58%", left: "88%" },
  { name: "Python", color: "from-yellow-300 to-blue-500", top: "71%", left: "78%" },
  { name: "MySQL", color: "from-sky-400 to-blue-600", top: "78%", left: "60%" },
  { name: "PostgreSQL", color: "from-blue-400 to-indigo-600", top: "76%", left: "26%" },
  { name: "Node.js", color: "from-emerald-400 to-green-600", top: "62%", left: "12%" },
  { name: "Git", color: "from-orange-500 to-red-500", top: "42%", left: "9%" },
  { name: "OpenCV", color: "from-sky-400 to-cyan-400", top: "24%", left: "16%" },
];

export default function TechSphere() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#050508] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-violet-400">MY SKILLS</p>
            <h2 className="mt-2 font-display text-[22px] md:text-[28px] font-semibold leading-tight">
              Technologies <br /> <span className="text-violet-400">I work with</span>
            </h2>
          </div>
        </div>

        <div className="relative mt-8 md:mt-4">
          {/* desktop orb */}
          <div className="hidden md:block relative h-[520px] overflow-hidden rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent">
            <div className="absolute inset-0 grid-bg opacity-[0.03]" />
            {/* central glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -inset-16 bg-violet-600/20 blur-[40px] rounded-full" />
                {/* rings */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-violet-500/20" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-cyan-400/15" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-white/8" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px]"
                >
                  <div className="absolute left-0 top-1/2 h-1 w-1 bg-violet-400 rounded-full shadow-[0_0_10px_#8b5cf6]" />
                </motion.div>

                <div className="relative h-[112px] w-[112px] rotate-[-8deg] rounded-[18px] bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[1px] shadow-[0_10px_40px_rgba(109,40,217,0.5)]">
                  <div className="h-full w-full rounded-[17px] bg-[#0a0a18] grid place-items-center">
                    <div className="text-center">
                      <div className="text-[10px] tracking-[0.18em] text-white/60">MY</div>
                      <div className="font-display font-bold leading-none text-[16px]">STACK</div>
                      <div className="mt-1 mx-auto h-1 w-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {orbitTechs.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="absolute"
                style={{ top: t.top, left: t.left }}
              >
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0f0f1a]/80 backdrop-blur px-3 py-2 text-xs font-medium shadow-lg">
                  <span className={`h-6 w-6 rounded-full bg-gradient-to-br ${t.color} grid place-items-center text-[10px] text-white font-bold`}>
                    {t.name[0]}
                  </span>
                  {t.name}
                </div>
              </motion.div>
            ))}

            {/* connecting lines svg */}
            <svg className="absolute inset-0 pointer-events-none">
              <ellipse cx="50%" cy="50%" rx="190" ry="140" fill="none" stroke="rgba(139,92,246,0.18)" strokeDasharray="6 8" />
              <ellipse cx="50%" cy="50%" rx="150" ry="110" fill="none" stroke="rgba(6,182,214,0.12)" />
            </svg>
          </div>

          {/* mobile grid */}
          <div className="md:hidden grid grid-cols-2 gap-3 mt-6">
            {orbitTechs.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 flex items-center gap-2">
                <span className={`h-8 w-8 rounded-lg bg-gradient-to-br ${t.color} grid place-items-center text-xs font-bold text-white`}>{t.name[0]}</span>
                <span className="text-sm font-medium">{t.name}</span>
              </div>
            ))}
            <div className="col-span-2 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 p-[1px]">
              <div className="rounded-2xl bg-[#050508] py-4 text-center font-display font-bold">MY STACK</div>
            </div>
          </div>

          {/* bottom tools */}
          <div className="mt-6">
            <p className="text-xs text-white/50 mb-3">And more tools & technologies</p>
            <div className="flex flex-wrap gap-2">
              {["Tailwind", "Django", "Docker", "GitHub", "Vercel", "Figma", "Supabase"].map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
