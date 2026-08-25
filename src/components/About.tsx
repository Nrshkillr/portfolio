"use client";
import { motion } from "framer-motion";
import { Code2, Lightbulb, Monitor, Rocket } from "lucide-react";

const items = [
  { icon: Monitor, title: "Web Development", desc: "Building fast, responsive and modern websites." },
  { icon: Code2, title: "Software Development", desc: "Creating robust software applications." },
  { icon: Lightbulb, title: "AI & Automation", desc: "Building smart systems and automation tools." },
  { icon: Rocket, title: "Problem Solving", desc: "Solving real-world problems with practical solutions." },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#050508] py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#070711] to-[#050508]" />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-violet-400">ABOUT ME</p>
            <h2 className="mt-3 font-display text-[28px] md:text-[34px] font-semibold leading-tight">
              A developer who <br /> likes <span className="text-violet-400">building things.</span>
            </h2>
            <p className="mt-4 max-w-[520px] text-sm leading-6 text-white/60">
              I enjoy turning ideas into real-world products. I love building web applications, software systems, and AI-powered solutions that make life easier.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><span className="h-5 w-5 rounded-full bg-violet-600/20 grid place-items-center text-violet-400 text-[11px]">✓</span> Clean Code</li>
              <li className="flex items-center gap-2"><span className="h-5 w-5 rounded-full bg-violet-600/20 grid place-items-center text-violet-400 text-[11px]">✓</span> Problem Solver</li>
              <li className="flex items-center gap-2"><span className="h-5 w-5 rounded-full bg-violet-600/20 grid place-items-center text-violet-400 text-[11px]">✓</span> Fast Learner</li>
              <li className="flex items-center gap-2"><span className="h-5 w-5 rounded-full bg-violet-600/20 grid place-items-center text-violet-400 text-[11px]">✓</span> Tech Explorer</li>
            </ul>

            <div className="mt-10">
              <h3 className="text-sm font-semibold mb-4">What I do</h3>
              <div className="grid grid-cols-2 gap-3">
                {items.map((it) => (
                  <motion.div key={it.title} whileHover={{ y: -3 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                    <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 grid place-items-center mb-3">
                      <it.icon size={16} className="text-violet-400" />
                    </div>
                    <div className="text-xs font-semibold">{it.title}</div>
                    <div className="text-[11px] leading-4 text-white/50 mt-1">{it.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* profile card */}
          <div className="relative lg:pl-8">
            <div className="relative mx-auto max-w-[360px]">
              <div className="absolute -inset-6 bg-gradient-to-br from-violet-600/20 via-cyan-500/10 to-fuchsia-600/10 blur-2xl rounded-[30px]" />
              <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-2 backdrop-blur">
                <div className="rounded-[22px] overflow-hidden bg-[#0a0a12] border border-white/10 p-3">
                  <div className="relative aspect-[3/3.6] overflow-hidden rounded-[18px] bg-gradient-to-br from-zinc-900 to-black">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop"
                      alt="Naresh"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 glass rounded-xl px-3 py-3">
                      <div className="text-sm font-semibold leading-none">Naresh</div>
                      <div className="text-[11px] text-white/60">Web & Software Developer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating cubes decoration */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-2 h-6 w-6 rotate-12 rounded-[6px] bg-gradient-to-br from-violet-600 to-indigo-600 border border-white/20 shadow-lg" />
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 -left-3 h-8 w-8 rotate-6 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 border border-white/15" />
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5.5, repeat: Infinity }} className="absolute bottom-16 -right-6 h-5 w-5 rounded-md bg-white/10 border border-white/10 backdrop-blur" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
