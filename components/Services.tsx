"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import PeriodicElement from "./PeriodicElement";

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="section-pad border-t border-[var(--bb-border-subtle)] relative">
      <div className="bb-dot-grid absolute inset-0 opacity-10 pointer-events-none" />

      <div className="mb-14 text-left">
        <p className="eyebrow mb-4">Services</p>
        <h2 className="text-3xl md:text-4xl font-semibold flex items-center">
          <PeriodicElement
            prefix=""
            symbol="Se"
            number={34}
            mass={78.9}
            name="Selenium"
            suffix="rvices Offered"
            size="xl"
          />
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 relative z-10">
        {services.map((service, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.05, duration: 0.4 }}
              className="card p-6 cursor-pointer hover:border-[var(--bb-green-light)]/50 transition-colors duration-300"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display font-semibold text-lg text-white group-hover:text-[var(--bb-green-glow)] transition-colors duration-300">
                  {service.title}
                </h3>
                <span className="font-mono text-[var(--bb-green-light)] text-xl leading-none select-none">
                  {isOpen ? "–" : "+"}
                </span>
              </div>
              <p className="text-[var(--bb-text-secondary)] text-sm mt-3">{service.problem}</p>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-[var(--bb-border-subtle)] space-y-4"
                >
                  <div>
                    <p className="font-mono text-xs text-[var(--bb-amber)] uppercase tracking-wider mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-white leading-relaxed">{service.solution}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[var(--bb-amber)] uppercase tracking-wider mb-1">
                      Benefits
                    </p>
                    <ul className="text-sm text-[var(--bb-text-secondary)] space-y-1.5 list-none pl-1">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start">
                          <span className="text-[var(--bb-green-light)] mr-2">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[var(--bb-amber)] uppercase tracking-wider mb-1">
                      Expected Outcome
                    </p>
                    <p className="text-sm text-[var(--bb-green-light)] font-semibold">{service.outcome}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
