"use client";

import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import PeriodicElement from "./PeriodicElement";
import { Menu, X } from "lucide-react";

const navItems = [
  { symbol: "Se", number: 34, mass: 78.97, name: "Selenium",     suffix: "rvices",    href: "#services" },
  { symbol: "S",  number: 16, mass: 32.06, name: "Sulfur",       suffix: "tack",      href: "#stack"    },
  { symbol: "Pr", number: 59, mass: 140.9, name: "Praseodymium", suffix: "ojects",    href: "#projects" },
  { symbol: "Pr", number: 59, mass: 140.9, name: "Praseodymium", suffix: "ocess",     href: "#process"  },
  { symbol: "Co", number: 27, mass: 58.93, name: "Cobalt",       suffix: "ntact",     href: "#contact"  },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[var(--bb-dark-2)]/95 backdrop-blur-md border-b border-[var(--bb-border-subtle)] shadow-md">
      {/* Scroll progress bar */}
      <motion.div
        className="h-[2px] bg-[var(--bb-green-light)] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <nav className="container mx-auto flex justify-between items-center px-4 py-4 max-w-7xl">

        {/* ── Logo: Ja[Mi]l ── */}
        <a href="#top" className="flex items-center text-xl font-bold text-white">
          <PeriodicElement
            prefix="Ja"
            symbol="Mi"
            number={95}
            mass={243}
            name="Americium"
            suffix="l"
            size="lg"
          />
        </a>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden md:flex space-x-1 items-center">
          {navItems.map((item) => (
            <a
              key={item.symbol}
              href={item.href}
              className="btn btn-ghost text-[var(--bb-text-secondary)] hover:text-white hover:bg-[var(--bb-dark-3)]/60 px-3 py-2 rounded-lg transition-all duration-200"
            >
              <PeriodicElement
                symbol={item.symbol}
                number={item.number}
                mass={item.mass}
                name={item.name}
                suffix={item.suffix}
                size="sm"
              />
            </a>
          ))}

          {/* Book a Call button — matches reference exactly */}
          <a
            href="https://app.cal.com/jamilcode"
            target="_blank"
            rel="noreferrer"
            className="book-call-btn rounded-lg text-[var(--bb-darkest)] bg-gradient-to-r from-[var(--bb-amber)] to-[var(--bb-amber-light)] hover:from-[var(--bb-amber-light)] hover:to-[var(--bb-amber)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_8px_24px_rgba(212,168,67,0.3)] border border-[var(--bb-amber-muted)] px-6 py-2 font-semibold ml-2"
          >
            📞 &nbsp;Book a Call
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden btn btn-square btn-ghost text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen
            ? <X className="w-6 h-6" />
            : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
        </button>
      </nav>

      {/* ── Mobile Dropdown ── */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[var(--bb-dark-2)] border-b border-[var(--bb-border-subtle)] px-6 py-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <a
              key={item.symbol}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center text-[var(--bb-text-secondary)] hover:text-white py-1"
            >
              <PeriodicElement
                symbol={item.symbol}
                number={item.number}
                mass={item.mass}
                name={item.name}
                suffix={item.suffix}
                size="sm"
              />
            </a>
          ))}
          <a
            href="https://app.cal.com/jamilcode"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center book-call-btn rounded-lg text-[var(--bb-darkest)] bg-gradient-to-r from-[var(--bb-amber)] to-[var(--bb-amber-light)] py-2.5 font-semibold mt-2"
          >
            📞 &nbsp;Book a Call
          </a>
        </motion.div>
      )}
    </header>
  );
}
