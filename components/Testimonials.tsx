"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import PeriodicElement from "./PeriodicElement";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-pad border-t border-[var(--bb-border-subtle)] relative">
      <div className="bb-dot-grid absolute inset-0 opacity-10 pointer-events-none" />

      <div className="mb-14 text-left">
        <p className="eyebrow mb-4">Feedback</p>
        <h2 className="text-3xl md:text-4xl font-semibold flex items-center">
          <PeriodicElement
            prefix=""
            symbol="Te"
            number={52}
            mass={127.6}
            name="Tellurium"
            suffix="stimonials &amp; Reviews"
            size="xl"
          />
        </h2>
      </div>

      <div className="max-w-2xl card p-8 md:p-10 relative z-10">
        <Quote className="w-8 h-8 text-[var(--bb-green-light)]/20 mb-4" />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg text-white leading-relaxed mb-6">
              "{t.quote}"
            </p>
            <p className="font-display font-semibold text-white">{t.name}</p>
            <p className="text-sm text-[var(--bb-text-secondary)]">{t.role}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-2 rounded-full border border-[var(--bb-border-subtle)] hover:border-[var(--bb-green-light)] hover:text-[var(--bb-green-glow)] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-2 rounded-full border border-[var(--bb-border-subtle)] hover:border-[var(--bb-green-light)] hover:text-[var(--bb-green-glow)] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
