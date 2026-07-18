"use client";

import { motion } from "framer-motion";
import { whyChooseMe } from "@/lib/data";
import PeriodicElement from "./PeriodicElement";

export default function WhyChooseMe() {
  return (
    <section className="section-pad border-t border-[var(--bb-border-subtle)] relative">
      <div className="bb-dot-grid absolute inset-0 opacity-10 pointer-events-none" />
      
      <div className="mb-14 text-left">
        <p className="eyebrow mb-4">Core Strengths</p>
        <h2 className="text-3xl md:text-4xl font-semibold flex items-center">
          <PeriodicElement
            prefix="Why "
            symbol="C"
            number={6}
            mass={12.0}
            name="Carbon"
            suffix="hoose Me"
            size="xl"
          />
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {whyChooseMe.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="card p-6 hover:border-[var(--bb-green-light)]/50 hover:shadow-[0_8px_24px_rgba(46,204,136,0.05)] transition-all duration-300 group"
          >
            <h3 className="font-display font-semibold text-lg text-white mb-3 group-hover:text-[var(--bb-green-glow)] transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-[var(--bb-text-secondary)] text-sm leading-relaxed">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
