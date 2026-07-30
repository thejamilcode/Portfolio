"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ── Typewriter lines matching the reference ──────────────────────────────────
// Each line is either a raw string (typed as-is) or structured into parts.
// We type character by character like the original site does.

const aboutLines = [
  { raw: "const developer = {" },
  { raw: "    name: 'Jamil Ahmed'," },
  { raw: "    role: 'Backend & WordPress Dev'," },
  { raw: "    territory: 'Sylhet (UTC+6)'," },
  { raw: "    codeQuality: '99.1%'," },
  { raw: "    ingredients: [" },
  { raw: "      'Python', 'Django'," },
  { raw: "      'WordPress (WooCommerce)'," },
  { raw: "      'MySQL'" },
  { raw: "    ]" },
  { raw: "};" },
];

// ── Syntax-colour a single line ──────────────────────────────────────────────
function colourLine(line: string): React.ReactNode {
  // Pattern: key: 'value'  OR  const x = {  OR plain brackets/strings
  const keyMatch = line.match(/^(\s*)(\w+)(\s*:\s*)(.*)$/);
  if (keyMatch) {
    const [, indent, key, colon, rest] = keyMatch;
    return (
      <>
        <span>{indent}</span>
        <span style={{ color: "#9cdcfe" }}>{key}</span>
        <span style={{ color: "#d4d4d4" }}>{colon}</span>
        <ColourValue value={rest} />
      </>
    );
  }

  // const keyword
  if (line.trimStart().startsWith("const ")) {
    const parts = line.split(/(const\s)/);
    return (
      <>
        {parts.map((p, i) =>
          p.startsWith("const") ? (
            <span key={i} style={{ color: "#c586c0" }}>{p}</span>
          ) : (
            <span key={i} style={{ color: "#d4d4d4" }}>{p}</span>
          )
        )}
      </>
    );
  }

  // Color string literals even on array lines
  if (line.includes("'")) {
    return <ColourValue value={line} />;
  }

  return <span style={{ color: "#d4d4d4" }}>{line}</span>;
}

function ColourValue({ value }: { value: string }) {
  // string literals in single quotes
  const parts = value.split(/('(?:[^'\\]|\\.)*')/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("'") ? (
          <span key={i} style={{ color: "#4ec994" }}>{p}</span>
        ) : (
          <span key={i} style={{ color: "#d4d4d4" }}>{p}</span>
        )
      )}
    </>
  );
}

export default function Hero() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineText, setCurrentLineText] = useState("");
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let currentLineIdx = 0;
    let currentCharIdx = 0;
    let timer: ReturnType<typeof setTimeout>;

    function typeNext() {
      if (currentLineIdx >= aboutLines.length) return;

      const fullLine = aboutLines[currentLineIdx].raw;

      if (currentCharIdx <= fullLine.length) {
        setCurrentLineText(fullLine.slice(0, currentCharIdx));
        currentCharIdx++;
        timer = setTimeout(typeNext, 28);
      } else {
        // Line done — pause then move to next
        setDisplayedLines((prev) => [...prev, fullLine]);
        setCurrentLineText("");
        currentLineIdx++;
        currentCharIdx = 0;
        timer = setTimeout(typeNext, 60);
      }
    }

    timer = setTimeout(typeNext, 400);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom of typewriter content
  useEffect(() => {
    if (preRef.current) {
      preRef.current.scrollTop = preRef.current.scrollHeight;
    }
  }, [displayedLines, currentLineText]);

  return (
    <section
      id="top"
      className="relative h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-[var(--bb-darkest)]"
    >
      {/* Visually hidden H1 for SEO compliance */}
      <h1 className="sr-only">Jamil Ahmed — Backend Developer (Django) & WordPress Expert</h1>

      {/* ── Site-palette background — greens + amber, no external image ─ */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          background: [
            /* amber top-right glow */
            "radial-gradient(ellipse 55% 40% at 80% 10%, rgba(212,168,67,0.18) 0%, transparent 70%)",
            /* primary green centre-left glow */
            "radial-gradient(ellipse 60% 50% at 20% 55%, rgba(34,128,90,0.28) 0%, transparent 65%)",
            /* deep green bottom glow */
            "radial-gradient(ellipse 50% 40% at 50% 95%, rgba(26,92,58,0.30) 0%, transparent 70%)",
            /* base darkest */
            "var(--bb-darkest)",
          ].join(", "),
          filter: "blur(32px)",
        }}
      />

      {/* dot grid overlay */}
      <div className="bb-dot-grid absolute inset-0 opacity-20 pointer-events-none" />

      {/* ── Dark gradient overlay — same as reference ─────────────────── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,14,8,0.55) 0%, rgba(6,26,18,0.75) 40%, var(--bb-darkest) 100%)",
        }}
      />

      {/* ── Vapor particles — same positions as reference ─────────────── */}
      <div className="smoke-container hidden md:block absolute inset-0 pointer-events-none z-0">
        {[12, 35, 58, 75].map((left, i) => (
          <div
            key={i}
            className="vapor"
            style={{ left: `${left}%`, animationDelay: `${-i * 1.5}s` } as React.CSSProperties}
          />
        ))}
      </div>

      {/* ── Centered code editor card ─────────────────────────────────── */}
      <div className="container mx-auto flex justify-center items-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          className="bg-[var(--bb-dark-3)]/90 backdrop-blur-xl border border-[var(--bb-border-medium)] rounded-lg shadow-2xl p-3 md:p-6 w-full max-w-2xl h-96 mx-4 flex flex-col"
        >
          {/* Window chrome */}
          <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-[var(--bb-border-subtle)] flex-none">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="text-[var(--bb-text-muted)] text-sm ml-4">about.js</div>
          </div>

          {/* Typewriter output */}
          <pre
            ref={preRef}
            id="typewriter"
            className="text-sm md:text-base text-gray-300 leading-6 font-mono overflow-y-auto w-full flex-1 whitespace-pre-wrap select-none"
          >
            {displayedLines.map((line, idx) => (
              <div key={idx} className="min-h-[1.5rem]">
                {colourLine(line)}
              </div>
            ))}
            {(currentLineText || displayedLines.length < aboutLines.length) && (
              <div className="min-h-[1.5rem]">
                {colourLine(currentLineText)}
                <span className="text-[var(--bb-green-light)] fast-blink ml-0.5">█</span>
              </div>
            )}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
