"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { contact } from "@/lib/data";
import PeriodicElement from "./PeriodicElement";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad border-t border-[var(--bb-border-subtle)] bg-[var(--bb-darkest)] relative overflow-hidden">
      <div className="bb-dot-grid absolute inset-0 opacity-15 pointer-events-none" />
      
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 max-w-7xl mx-auto w-full relative z-10">
        <div>
          <p className="eyebrow mb-4">Contact Info</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 flex items-center">
            <PeriodicElement
              prefix=""
              symbol="Co"
              number={27}
              mass={58.9}
              name="Cobalt"
              suffix="ntact &amp; Hire"
              size="xl"
            />
          </h2>
          <p className="text-[var(--bb-text-secondary)] mb-10 max-w-md leading-relaxed">
            I am open to new career opportunities, freelance jobs, or remote software engineering roles. Let's discuss your project database schema, custom API flow, or WordPress requirements!
          </p>

          <div className="space-y-4 font-mono text-sm">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-[var(--bb-text-secondary)] hover:text-[var(--bb-green-light)] transition-colors py-1.5"
            >
              <Mail className="w-4.5 h-4.5 text-[var(--bb-green-light)]" /> {contact.email}
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-3 text-[var(--bb-text-secondary)] hover:text-[var(--bb-green-light)] transition-colors py-1.5"
            >
              <Phone className="w-4.5 h-4.5 text-[var(--bb-green-light)]" /> {contact.phone}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[var(--bb-text-secondary)] hover:text-[var(--bb-green-light)] transition-colors py-1.5"
            >
              <Linkedin className="w-4.5 h-4.5 text-[var(--bb-green-light)]" /> LinkedIn Profile
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[var(--bb-text-secondary)] hover:text-[var(--bb-green-light)] transition-colors py-1.5"
            >
              <Github className="w-4.5 h-4.5 text-[var(--bb-green-light)]" /> GitHub Portfolio
            </a>
            <p className="flex items-center gap-3 text-[var(--bb-text-secondary)] py-1.5">
              <MapPin className="w-4.5 h-4.5 text-[var(--bb-green-light)]" /> {contact.location}
            </p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="card p-8 space-y-6 bg-[var(--bb-dark-3)]/30 border border-[var(--bb-border-subtle)] relative"
        >
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-[var(--bb-text-muted)]">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-2 w-full bg-[var(--bb-darkest)] border border-[var(--bb-border-subtle)] rounded-lg px-4 py-3 text-sm focus:border-[var(--bb-green-light)] text-white outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-[var(--bb-text-muted)]">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full bg-[var(--bb-darkest)] border border-[var(--bb-border-subtle)] rounded-lg px-4 py-3 text-sm focus:border-[var(--bb-green-light)] text-white outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-[var(--bb-text-muted)]">
              Project Details &amp; Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full bg-[var(--bb-darkest)] border border-[var(--bb-border-subtle)] rounded-lg px-4 py-3 text-sm focus:border-[var(--bb-green-light)] text-white outline-none transition-colors resize-none"
              placeholder="Tell me about your product requirements, stack, or schedule."
            />
          </div>

          {/* Error banner */}
          {status === "error" && (
            <p className="text-red-400 text-xs font-mono text-center bg-red-500/10 border border-red-500/30 rounded-lg py-2 px-3">
              ⚠ Something went wrong. Please try again or email me directly.
            </p>
          )}

          <button
            type={status === "error" ? "button" : "submit"}
            onClick={status === "error" ? () => setStatus("idle") : undefined}
            disabled={status === "sending" || status === "sent"}
            className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-lg transition-all disabled:opacity-60 cursor-pointer border ${
              status === "error"
                ? "bg-red-500/20 border-red-500/50 text-red-300 hover:bg-red-500/30"
                : "bg-gradient-to-r from-[var(--bb-amber)] to-[var(--bb-amber-light)] text-[var(--bb-darkest)] hover:shadow-[0_8px_24px_rgba(212,168,67,0.2)] border-[var(--bb-amber-muted)]"
            }`}
          >
            {status === "idle" && (<>Send Message <Send className="w-4 h-4" /></>)}
            {status === "sending" && "Sending Message…"}
            {status === "sent" && "✓ Message sent successfully!"}
            {status === "error" && "⚠ Failed — Click to try again"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
