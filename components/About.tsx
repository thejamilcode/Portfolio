"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { contact } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-pad bg-[var(--bb-darkest)] relative text-white overflow-hidden border-t border-[var(--bb-border-subtle)]">
      <div className="bb-dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[var(--bb-green-1)] rounded-full opacity-[0.03] blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Image with premium glowing borders and social profiles */}
          <div className="flex flex-col items-center gap-6 shrink-0">
            <div className="relative group">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[var(--bb-green-2)] via-[var(--bb-green-1)] to-[var(--bb-amber-muted)] opacity-25 group-hover:opacity-45 blur-md transition-opacity duration-700" />
              <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-[var(--bb-green-1)]/60 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <img
                  src="/images/jamil.jpg"
                  alt="Jamil Ahmed"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bb-darkest)]/30 to-transparent" />
              </div>
            </div>

            {/* Social Icons list */}
            <div className="flex items-center gap-3">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--bb-dark-3)] border border-[var(--bb-border-subtle)] text-[var(--bb-text-muted)] hover:text-[var(--bb-green-glow)] hover:border-[var(--bb-green-light)] hover:shadow-[0_0_12px_var(--bb-green-1)] active:scale-95 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 rounded-xl bg-[var(--bb-green-light)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--bb-dark-3)] border border-[var(--bb-border-subtle)] text-[var(--bb-text-muted)] hover:text-[var(--bb-green-glow)] hover:border-[var(--bb-green-light)] hover:shadow-[0_0_12px_var(--bb-green-1)] active:scale-95 transition-all duration-300"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 rounded-xl bg-[var(--bb-green-light)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--bb-dark-3)] border border-[var(--bb-border-subtle)] text-[var(--bb-text-muted)] hover:text-[var(--bb-green-glow)] hover:border-[var(--bb-green-light)] hover:shadow-[0_0_12px_var(--bb-green-1)] active:scale-95 transition-all duration-300"
                aria-label="Email"
              >
                <div className="absolute inset-0 rounded-xl bg-[var(--bb-green-light)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Bio Details and CV preview links */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-white mb-1">Jamil Ahmed</h3>
            <p className="text-[var(--bb-green-light)] font-semibold mb-6 tracking-wide text-xs uppercase font-mono">
              Web Designer &amp; Developer • Sylhet, Bangladesh
            </p>
            
            <div className="space-y-4 text-[var(--bb-text-secondary)] leading-relaxed text-sm md:text-base">
              <p>
                I am a motivated and self-driven <span className="text-white font-medium">Computer Science &amp; Engineering</span> student with a high degree of confidence in custom WordPress development and a strong focus on backend engineering.
              </p>
              <p>
                My technical journey is centered around building secure, fast, database-driven web platforms. I specialize in designing structured relational schemas, implementing secure user authentication, and writing clean, query-optimized <span className="text-[var(--bb-green-light)] font-semibold">Python/Django REST API backend</span> applications.
              </p>
              <p>
                I enjoy taking full ownership of projects, coordinating details between database integrity layers and interactive frontend views. I am passionate about leveraging software and clean code to solve complex, real-world problems for founders, teams, and local businesses.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
              <a
                href="/cv.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg border-2 border-[var(--bb-green-2)] text-[var(--bb-green-light)] bg-transparent hover:bg-[var(--bb-green-2)] hover:text-white transform hover:scale-[1.03] transition-all duration-300"
              >
                <FileText className="w-4 h-4" /> Preview CV
              </a>
              <a
                href="#contact"
                className="book-call-btn rounded-lg text-[var(--bb-darkest)] bg-gradient-to-r from-[var(--bb-amber)] to-[var(--bb-amber-light)] hover:from-[var(--bb-amber-light)] hover:to-[var(--bb-amber)] transform hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-[0_8px_24px_rgba(212,168,67,0.25)] border border-[var(--bb-amber-muted)] px-6 py-2.5 font-semibold"
              >
                ✉ &nbsp; Get In Touch
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
