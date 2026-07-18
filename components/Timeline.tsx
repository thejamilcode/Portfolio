"use client";

import { motion } from "framer-motion";
import { GitCommit } from "lucide-react";
import { timeline } from "@/lib/data";
import PeriodicElement from "./PeriodicElement";

export default function Timeline() {
  return (
    <section className="section-pad border-t border-[var(--bb-border-subtle)] relative bg-[var(--bb-dark-1)]/40 overflow-hidden">
      <div className="bb-dot-grid absolute inset-0 opacity-15 pointer-events-none" />
      
      <div className="mb-14 text-left">
        <p className="eyebrow mb-4">Academic &amp; Learning Growth</p>
        <h2 className="text-3xl md:text-4xl font-semibold flex items-center">
          <PeriodicElement
            prefix=""
            symbol="Co"
            number={27}
            mass={58.9}
            name="Cobalt"
            suffix="mmit History &amp; Milestones"
            size="xl"
          />
        </h2>
      </div>

      <div className="card p-6 md:p-8 max-w-3xl relative z-10">
        <p className="font-mono text-xs text-[var(--bb-text-muted)] mb-6 bg-[var(--bb-darkest)]/50 p-3 rounded border border-[var(--bb-border-subtle)]">
          $ git log --pretty="%ad %h %s" --date=format:"%Y"
        </p>
        <div className="space-y-0 relative">
          {/* Vertical joining timeline bar */}
          <div className="absolute left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-[var(--bb-green-2)] via-[var(--bb-green-1)] to-transparent pointer-events-none" />

          {timeline.map((entry, i) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-5 py-5 border-b border-[var(--bb-border-subtle)] last:border-0 relative z-10"
            >
              <div className="flex flex-col items-center justify-start pt-1">
                <div className="timeline-dot-active flex items-center justify-center w-5 h-5 rounded-full border border-[var(--bb-green-light)] bg-[var(--bb-dark-1)] relative z-20">
                  <GitCommit className="w-3 h-3 text-[var(--bb-darkest)]" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
                  <span className="text-[var(--bb-amber)] font-bold">{entry.year}</span>
                  <span className="text-[var(--bb-green-light)] bg-[var(--bb-dark-3)]/40 px-2 py-0.5 rounded border border-[var(--bb-border-subtle)] text-xs">
                    {entry.commit}
                  </span>
                </div>
                <p className="text-[var(--bb-text-secondary)] text-sm mt-2 leading-relaxed">
                  {entry.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
