"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PeriodicElement from "./PeriodicElement";
import TechIcon from "./TechIcons";

type Category = "Frontend" | "Backend" | "DevOps" | "Utilities" | "AI Tools";

interface Tech {
  name: string;
  category: Category;
}

const technologies: Tech[] = [
  // Frontend — 10
  { name: "JavaScript", category: "Frontend" },
  { name: "ReactJS",    category: "Frontend" },
  { name: "CSS3",       category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Redux",      category: "Frontend" },
  { name: "SASS",       category: "Frontend" },
  { name: "VueJS",      category: "Frontend" },
  { name: "jQuery",     category: "Frontend" },
  { name: "ES6",        category: "Frontend" },
  { name: "Markdown",   category: "Frontend" },

  // Backend — 7
  { name: "Python",     category: "Backend" },
  { name: "Django",     category: "Backend" },
  { name: "PHP",        category: "Backend" },
  { name: "MySQL",      category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "WordPress",  category: "Backend" },
  { name: "WooCommerce", category: "Backend" },

  // DevOps — 11
  { name: "Git",        category: "DevOps" },
  { name: "GitHub",     category: "DevOps" },
  { name: "Docker",     category: "DevOps" },
  { name: "Vercel",     category: "DevOps" },
  { name: "Netlify",    category: "DevOps" },
  { name: "Heroku",     category: "DevOps" },
  { name: "Linux",      category: "DevOps" },
  { name: "Bash",       category: "DevOps" },
  { name: "NPM",        category: "DevOps" },
  { name: "AWS",        category: "DevOps" },
  { name: "CI/CD",      category: "DevOps" },

  // Utilities — 7
  { name: "VS Code",         category: "Utilities" },
  { name: "Figma",           category: "Utilities" },
  { name: "Postman",         category: "Utilities" },
  { name: "Chrome DevTools", category: "Utilities" },
  { name: "Prettier",        category: "Utilities" },
  { name: "StackShare",      category: "Utilities" },
  { name: "GitHub Copilot",  category: "Utilities" },

  // AI Tools — 4
  { name: "ChatGPT",        category: "AI Tools" },
  { name: "Gemini",         category: "AI Tools" },
  { name: "GitHub Copilot", category: "AI Tools" },
  { name: "Cursor",         category: "AI Tools" },
];

const categories: Category[] = ["Frontend", "Backend", "DevOps", "Utilities", "AI Tools"];

function countByCategory(cat: Category) {
  return technologies.filter((t) => t.category === cat).length;
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<Category>("Frontend");

  const filtered = technologies.filter((t) => t.category === activeTab);

  return (
    <section
      id="stack"
      className="section-pad border-t border-[var(--bb-border-subtle)] relative bg-[var(--bb-dark-1)]/20 overflow-hidden"
    >
      {/* Background dot grid */}
      <div className="bb-dot-grid absolute inset-0 opacity-10 pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(46,204,136,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* ── Heading ── */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-1 flex-wrap">
            <PeriodicElement
              symbol="Te"
              number={52}
              mass={127.6}
              name="Tellurium"
              suffix="chnologies"
              size="xl"
            />
          </h2>
          <p className="mt-4 text-[var(--bb-text-secondary)] text-sm md:text-base tracking-wide">
            Tools and technologies I work with on a daily basis
          </p>
        </div>

        {/* ── Tab Bar ── */}
        <div className="flex flex-wrap justify-center gap-1 mt-10 mb-10">
          <div className="flex flex-wrap justify-center gap-1 bg-[var(--bb-dark-2)]/60 border border-[var(--bb-border-subtle)] rounded-full px-2 py-1.5 backdrop-blur-sm">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--bb-green-1)] text-white shadow-[0_0_12px_rgba(46,204,136,0.3)]"
                      : "text-[var(--bb-text-secondary)] hover:text-[var(--bb-text-main)]"
                  }`}
                >
                  {cat}
                  <span
                    className={`inline-flex items-center justify-center text-[10px] font-bold rounded-full min-w-[18px] h-[18px] px-1 transition-all duration-300 ${
                      isActive
                        ? "bg-[var(--bb-green-light)]/30 text-[var(--bb-green-glow)]"
                        : "bg-[var(--bb-dark-3)] text-[var(--bb-text-muted)]"
                    }`}
                  >
                    {countByCategory(cat)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Tech Card Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
          >
            {filtered.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.25, ease: "easeOut" }}
                className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border border-[var(--bb-border-subtle)] bg-[var(--bb-dark-3)]/30 backdrop-blur-sm cursor-default hover:border-[var(--bb-green-2)]/70 hover:bg-[var(--bb-dark-2)]/60 hover:shadow-[0_0_20px_rgba(34,128,90,0.18)] transition-all duration-300"
              >
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-full bg-[var(--bb-dark-2)]/80 border border-[var(--bb-border-subtle)] flex items-center justify-center group-hover:border-[var(--bb-green-2)]/50 group-hover:shadow-[0_0_12px_rgba(46,204,136,0.12)] transition-all duration-300">
                  <TechIcon
                    name={tech.name}
                    className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Name */}
                <span className="text-xs font-medium text-[var(--bb-text-secondary)] group-hover:text-[var(--bb-text-main)] text-center leading-tight transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
