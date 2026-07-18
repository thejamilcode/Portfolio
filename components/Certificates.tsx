"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificates } from "@/lib/data";
import PeriodicElement from "./PeriodicElement";

export default function Certificates() {
  return (
    <section className="section-pad border-t border-[var(--bb-border-subtle)] relative">
      <div className="bb-dot-grid absolute inset-0 opacity-10 pointer-events-none" />

      <div className="mb-14 text-left">
        <p className="eyebrow mb-4">Credentials &amp; Studies</p>
        <h2 className="text-3xl md:text-4xl font-semibold flex items-center">
          <PeriodicElement
            prefix=""
            symbol="Ce"
            number={58}
            mass={140.1}
            name="Cerium"
            suffix="rtifications &amp; Degrees"
            size="xl"
          />
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="card p-6 flex items-start gap-4 hover:border-[var(--bb-green-light)]/40 transition-colors"
          >
            <Award className="w-5 h-5 text-[var(--bb-amber)] shrink-0 mt-1" />
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--bb-text-muted)] mb-1">
                {cert.category}
              </p>
              <h3 className="font-display font-semibold text-base text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-[var(--bb-text-secondary)]">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
