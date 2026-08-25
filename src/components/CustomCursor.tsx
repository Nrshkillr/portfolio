"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(touch);
    if (touch) return;

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const enter = (e: Event) => {
      const target = e.target as HTMLElement;
      const el = target.closest("a, button, [data-cursor]");
      if (el) {
        setHover(true);
        setLabel(el.getAttribute("data-cursor") || "");
      }
    };
    const leave = () => { setHover(false); setLabel(""); };

    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", stiffness: 1500, damping: 80, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden lg:flex items-center justify-center border border-white/30 text-[10px] tracking-widest text-white mix-blend-difference"
        animate={{
          x: pos.x - (hover ? 36 : 14),
          y: pos.y - (hover ? 36 : 14),
          width: hover ? 72 : 28,
          height: hover ? 72 : 28,
          opacity: 1,
          backgroundColor: hover ? "rgba(255,255,255,0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {label && <span className="font-bold">{label}</span>}
      </motion.div>
    </>
  );
}
