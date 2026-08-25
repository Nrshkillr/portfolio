"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false, loading: () => <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10" /> });

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const handler = (e: MouseEvent) => setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section ref={ref} id="home" className="relative min-h-[100vh] overflow-hidden bg-[#050508]">
      {/* bg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a18] via-[#050508] to-[#050508]" />
        <div className="absolute inset-0 grid-bg opacity-[0.035]" />
        <div className="absolute -top-[30%] right-[-15%] w-[800px] h-[800px] bg-violet-600/25 blur-[140px] rounded-full" />
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/12 blur-[130px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 pt-28 md:pt-32 pb-10 grid lg:grid-cols-[1.12fr_0.88fr] gap-8 items-center min-h-[100vh]">
        {/* left */}
        <motion.div style={{ y, opacity }} className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] tracking-[0.18em] font-mono text-white/70">WELCOME TO MY PORTFOLIO</span>
          </motion.div>

          <h1 className="mt-6 font-display font-bold leading-[0.9] tracking-tight">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="block text-[34px] md:text-[46px] lg:text-[52px] text-white">I BUILD THE <span className="text-gradient">WEB.</span></motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="block text-[34px] md:text-[46px] lg:text-[52px] text-white">I BUILD <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">SOFTWARE.</span></motion.span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-5 max-w-[520px] text-[14px] leading-6 text-white/55">
            I&apos;m <span className="text-white font-medium">Naresh</span>, a Web & Software Developer focused on creating modern, scalable, and practical digital experiences.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" data-cursor="VIEW" className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(109,40,217,0.45)] hover:bg-[#7c3aed] transition will-change-transform hover:scale-[1.02]">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition backdrop-blur">
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-14 hidden items-center gap-2 md:flex text-white/40">
            <span className="h-6 w-6 rounded-full border border-white/15 grid place-items-center"><ArrowRight size={10} className="rotate-90" /></span>
            <span className="font-mono text-[10px] tracking-[0.18em]">SCROLL DOWN</span>
          </motion.div>
        </motion.div>

        {/* right 3D */}
        <div className="relative h-[420px] md:h-[560px] lg:h-[620px] overflow-hidden rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent">
          <Hero3D mouse={mouse} />
          {/* floating badges */}
          <div className="pointer-events-none absolute left-4 top-6 hidden md:flex flex-col gap-2">
            <div className="glass rounded-xl px-3 py-2 text-xs font-medium text-white/80">⚡ Fast & Modern</div>
          </div>
          <div className="pointer-events-none absolute bottom-6 right-4 hidden md:block">
            <div className="glass rounded-xl px-3 py-2 text-[11px] font-mono text-white/60">◉ 60fps · WebGL</div>
          </div>
        </div>
      </div>

      {/* stats bar */}
      <div className="relative mx-auto max-w-[1200px] px-6 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 rounded-[18px] border border-white/[0.07] bg-white/[0.02] backdrop-blur overflow-hidden">
          {siteConfig.stats.map((s) => (
            <div key={s.label} className="px-6 py-5 border-r border-white/[0.06] last:border-0 border-b md:border-b-0">
              <div className="text-2xl font-bold text-violet-400 font-display">{s.value}</div>
              <div className="text-[11px] leading-tight text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
