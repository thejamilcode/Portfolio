"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects, Project } from "@/lib/data";
import PeriodicElement from "./PeriodicElement";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) {
        setActiveDot(0);
        return;
      }
      const pct = scrollLeft / maxScroll;
      if (pct < 0.25) {
        setActiveDot(0);
      } else if (pct < 0.75) {
        setActiveDot(1);
      } else {
        setActiveDot(2);
      }
    }
  };

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = dir === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="section-pad border-t border-[var(--bb-border-subtle)] relative overflow-hidden">
      {/* Dot Grid Background */}
      <div className="bb-dot-grid absolute inset-0 opacity-15 pointer-events-none" />

      {/* Decorative SVGs from the reference image */}
      {/* Top-Left Chemical Bond */}
      <svg
        width="120"
        height="24"
        viewBox="0 0 120 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-12 left-8 md:left-16 opacity-30 text-[var(--bb-green-light)] pointer-events-none"
      >
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <line x1="16" y1="12" x2="44" y2="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="48" cy="12" r="4" fill="currentColor" />
        <line x1="52" y1="12" x2="80" y2="12" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="84" cy="12" r="4" fill="currentColor" />
        <line x1="88" y1="12" x2="104" y2="12" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="108" cy="12" r="4" fill="currentColor" />
      </svg>

      {/* Top-Right Atom Orbital */}
      <svg
        width="160"
        height="160"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="absolute top-8 right-8 opacity-25 text-[var(--bb-green-2)] hidden md:block pointer-events-none"
      >
        <circle cx="50" cy="50" r="5" fill="currentColor" className="text-[var(--bb-green-light)]" />
        <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(30 50 50)" />
        <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(150 50 50)" />
        <circle cx="15" cy="30" r="2.5" fill="currentColor" className="text-[var(--bb-green-light)]" />
        <circle cx="85" cy="70" r="2.5" fill="currentColor" className="text-[var(--bb-green-light)]" />
        <circle cx="50" cy="10" r="2.5" fill="currentColor" className="text-[var(--bb-green-light)]" />
        <circle cx="50" cy="90" r="2.5" fill="currentColor" className="text-[var(--bb-green-light)]" />
      </svg>

      {/* Middle-Left Code tag */}
      <svg
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 text-[var(--bb-green-light)] hidden xl:block pointer-events-none"
      >
        <path d="M8 6L2 12L8 18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6L22 12L16 18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Bottom-Left Chemistry stand / table */}
      <svg
        width="90"
        height="90"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="absolute bottom-8 left-12 opacity-20 text-[var(--bb-green-2)] hidden md:block pointer-events-none"
      >
        <path d="M3 21H21" strokeLinecap="round" />
        <path d="M6 21V4H10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 9H18" strokeLinecap="round" />
        <path d="M8 15H15" strokeLinecap="round" />
      </svg>

      {/* Section Header */}
      <div className="mb-14 text-center flex flex-col items-center justify-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">
          <PeriodicElement
            prefix="Pr"
            symbol="O"
            number={8}
            mass={16.0}
            name="Oxygen"
            suffix="jects"
            size="xl"
          />
        </h2>
        <p className="text-[var(--bb-text-secondary)] text-sm md:text-base max-w-lg mt-2">
          A selection of things I have designed, built, and shipped.
        </p>
      </div>

      {/* Projects Container (Horizontal scroll on mobile, Grid on desktop) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 px-1 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible"
        >
          {projects.map((project, idx) => {
            const hasImage = !!project.image;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onClick={() => setSelectedProject(project)}
                className="snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-auto card flex flex-col hover:border-[var(--bb-green-light)]/40 transition-all duration-300 shadow-xl group cursor-pointer overflow-hidden border border-[var(--bb-border-subtle)] bg-[rgba(13,35,26,0.35)] backdrop-blur-md"
              >
                {/* Media area at top of card */}
                {hasImage ? (
                  <div className="aspect-video w-full bg-[var(--bb-dark-1)]/60 rounded-t-xl flex flex-col items-center justify-center border-b border-[var(--bb-border-subtle)] relative overflow-hidden group-hover:bg-[var(--bb-dark-1)]/40 transition-colors duration-300 p-4">
                    <div className="relative w-[92%] max-w-[280px] mx-auto flex flex-col items-center shadow-2xl">
                      {/* Laptop Screen Bezel */}
                      <div className="w-full aspect-[16/10] bg-zinc-900 border-4 border-zinc-800 rounded-t-lg overflow-hidden relative shadow-inner">
                        {/* Webcam */}
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black z-10" />
                        {/* Screen Content */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      {/* Laptop Base */}
                      <div className="w-[110%] h-2 bg-zinc-700 rounded-b-md relative shadow-md">
                        {/* Finger notch to open */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-zinc-800 rounded-b-sm" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video w-full bg-[var(--bb-dark-1)]/60 rounded-t-xl flex items-center justify-center border-b border-[var(--bb-border-subtle)] relative overflow-hidden group-hover:bg-[var(--bb-dark-1)]/40 transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--bb-green-2)]/5 to-transparent opacity-50" />
                    <div className="w-16 h-16 rounded-full bg-[var(--bb-green-1)]/20 flex items-center justify-center border border-[var(--bb-green-2)]/30 shadow-[0_0_15px_rgba(34,128,90,0.15)] group-hover:border-[var(--bb-green-light)]/30 group-hover:shadow-[0_0_25px_rgba(46,204,136,0.25)] transition-all duration-300">
                      {project.title.toLowerCase().includes("event") ? (
                        /* Calendar Booking Icon */
                        <svg
                          className="w-8 h-8 text-[var(--bb-green-light)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeLinecap="round" />
                        </svg>
                      ) : (
                        /* Student Management Icon */
                        <svg
                          className="w-8 h-8 text-[var(--bb-green-light)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      )}
                    </div>
                  </div>
                )}

                {/* Card Content area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-semibold text-xl text-white mb-2 group-hover:text-[var(--bb-green-light)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--bb-text-secondary)] leading-relaxed mb-6 line-clamp-3">
                    {project.problem}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] px-3 py-0.5 rounded-full border border-[var(--bb-green-2)]/30 text-[var(--bb-green-glow)] bg-[var(--bb-dark-3)]/40"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Card footer details */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--bb-border-subtle)]">
                    <span className="font-mono text-[11px] text-[var(--bb-text-muted)]">
                      {project.date || "Jan 2026"}
                    </span>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[var(--bb-text-secondary)] hover:text-[var(--bb-green-light)] transition-colors"
                          title="Source Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[var(--bb-text-secondary)] hover:text-[var(--bb-green-light)] transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Carousel Pagination controls (Mobile view only) */}
        <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 rounded-full border border-[var(--bb-border-subtle)] flex items-center justify-center text-[var(--bb-text-secondary)] hover:text-white hover:border-[var(--bb-green-light)] transition-colors duration-300"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeDot === i ? "w-6 bg-[var(--bb-green-light)]" : "w-1.5 bg-[var(--bb-green-2)]/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 rounded-full border border-[var(--bb-border-subtle)] flex items-center justify-center text-[var(--bb-text-secondary)] hover:text-white hover:border-[var(--bb-green-light)] transition-colors duration-300"
            aria-label="Next Project"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[var(--bb-dark-1)] border border-[var(--bb-green-2)]/50 rounded-2xl p-6 md:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--bb-green-2)]/30"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-[var(--bb-text-secondary)] hover:text-white transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Tag */}
              <div className="mb-6 pr-6">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--bb-green-light)] bg-[var(--bb-dark-3)]/60 px-3 py-1 rounded border border-[var(--bb-border-subtle)] mb-2 inline-block">
                  {selectedProject.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-[var(--bb-text-muted)] mt-1">
                  Project Period: {selectedProject.date}
                </p>
              </div>

              {/* Body Content */}
              <div className="space-y-6 text-sm leading-relaxed">
                <div>
                  <h4 className="text-[var(--bb-amber-light)] font-mono text-[11px] uppercase tracking-wider block mb-2 font-semibold">
                    Problem Context
                  </h4>
                  <p className="text-[var(--bb-text-secondary)]">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="text-[var(--bb-amber-light)] font-mono text-[11px] uppercase tracking-wider block mb-2 font-semibold">
                    Solution Architecture
                  </h4>
                  <p className="text-[var(--bb-text-secondary)]">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="text-[var(--bb-amber-light)] font-mono text-[11px] uppercase tracking-wider block mb-2 font-semibold">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-[var(--bb-text-secondary)]">
                    {selectedProject.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <span className="text-[var(--bb-green-light)] mr-2 select-none">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[var(--bb-amber-light)] font-mono text-[11px] uppercase tracking-wider block mb-2 font-semibold">
                    Key Lessons
                  </h4>
                  <p className="text-[var(--bb-text-secondary)] italic bg-[var(--bb-dark-2)]/30 border-l-2 border-[var(--bb-amber)] p-3 rounded-r-md">
                    {selectedProject.lessons}
                  </p>
                </div>

                <div>
                  <h4 className="text-[var(--bb-amber-light)] font-mono text-[11px] uppercase tracking-wider block mb-2 font-semibold">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 rounded border border-[var(--bb-border-subtle)] text-[var(--bb-text-secondary)] bg-[var(--bb-dark-3)]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center mt-8 pt-5 border-t border-[var(--bb-border-subtle)]">
                {selectedProject.githubClient && (
                  <a
                    href={selectedProject.githubClient}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--bb-text-secondary)] hover:text-[var(--bb-green-light)] transition-colors py-1.5"
                  >
                    <Github className="w-4 h-4" /> Frontend Code
                  </a>
                )}
                {selectedProject.githubServer && (
                  <a
                    href={selectedProject.githubServer}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--bb-text-secondary)] hover:text-[var(--bb-green-light)] transition-colors py-1.5"
                  >
                    <Github className="w-4 h-4" /> Backend Code
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--bb-text-secondary)] hover:text-[var(--bb-green-light)] transition-colors py-1.5"
                  >
                    <Github className="w-4 h-4" /> Source Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--bb-green-light)] font-semibold hover:brightness-110 transition-all py-1.5 border border-[var(--bb-green-2)]/60 px-4 rounded bg-[var(--bb-dark-2)]/50 shadow-md ml-auto"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
