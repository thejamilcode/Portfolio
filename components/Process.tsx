"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";
import PeriodicElement from "./PeriodicElement";

export default function Process() {
  return (
    <section id="process" className="section-pad border-t border-[var(--bb-border-subtle)] relative">
      <div className="bb-dot-grid absolute inset-0 opacity-10 pointer-events-none" />

      <div className="mb-14 text-left">
        <p className="eyebrow mb-4">How I work</p>
        <h2 className="text-3xl md:text-4xl font-semibold flex items-center">
          <PeriodicElement
            prefix=""
            symbol="Pr"
            number={59}
            mass={140.9}
            name="Praseodymium"
            suffix="ocess and Workflow"
            size="xl"
          />
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {process.map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="relative card p-6 border border-[var(--bb-border-subtle)] bg-[var(--bb-dark-3)]/10"
          >
            <p className="font-mono text-3xl text-[var(--bb-green-2)]/40 font-semibold mb-3">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display font-semibold mb-2 text-white">{item.step}</h3>
            <p className="text-sm text-[var(--bb-text-secondary)] leading-relaxed">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
