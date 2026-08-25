"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onDone }: { onDone?: () => void }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 18;
      });
    }, 120);
    const timer = setTimeout(() => {
      setLoading(false);
      onDone?.();
    }, 1600);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050508] flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 grid-bg opacity-[0.03]" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-display font-bold text-3xl shadow-[0_0_60px_rgba(109,40,217,0.5)]">
                N
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 border border-violet-500/20 rounded-[22px] border-t-violet-500/60"
              />
            </div>
            <div className="text-center space-y-3">
              <p className="font-mono text-[11px] tracking-[0.3em] text-white/50">LOADING EXPERIENCE</p>
              <div className="w-[200px] h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-600 to-cyan-400"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <p className="font-mono text-xs text-white/30">{Math.min(Math.round(progress), 100)}%</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
