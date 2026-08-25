"use client";
import { skillCategories } from "@/data/skills";
import { motion } from "framer-motion";

export default function SkillsGrid() {
  return (
    <section className="relative bg-[#050508] pb-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="rounded-[18px] border border-white/[0.07] bg-white/[0.02] backdrop-blur p-5"
            >
              <h3 className="font-display font-semibold text-sm text-violet-300">{cat.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span key={s} className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] text-white/70 hover:text-white hover:bg-white/10 transition">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
