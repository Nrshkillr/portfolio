"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <div
            className={`flex items-center justify-between rounded-full px-2 sm:px-3 py-2 transition-all duration-500 ${
              scrolled
                ? "glass-strong shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
                : "bg-transparent border border-transparent"
            }`}
          >
            <a href="#home" className="flex items-center gap-3 pl-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm tracking-widest">
                N
              </div>
              <span className="hidden sm:block font-display font-bold tracking-[0.2em] text-sm">NARESH</span>
            </a>

            <div className="hidden md:flex items-center gap-1 bg-black/20 rounded-full p-1 border border-white/[0.06]">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setActive(l.label)}
                  className={`px-4 py-1.5 rounded-full text-[12px] tracking-wide transition-all ${
                    active === l.label
                      ? "bg-white text-black font-medium"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 pr-1">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 bg-[#6d28d9] hover:bg-[#7c3aed] text-white text-xs font-medium px-5 py-2.5 rounded-full transition-colors shadow-[0_4px_20px_rgba(109,40,217,0.4)]"
              >
                Let&apos;s Talk <span aria-hidden>→</span>
              </a>
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden h-9 w-9 grid place-items-center rounded-full bg-white/10 border border-white/10 text-white"
                aria-label="Toggle menu"
              >
                {open ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 md:hidden pt-[88px] px-4"
          >
            <div className="glass-strong rounded-[24px] p-6 flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium py-3 border-b border-white/5 last:border-0 text-white/90"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-4 bg-violet-600 text-white rounded-full py-3 text-center font-medium">
                Let&apos;s Talk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
