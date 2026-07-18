import { contact } from "@/lib/data";
import PeriodicElement from "./PeriodicElement";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--bb-border-subtle)] px-6 md:px-12 lg:px-20 py-10 bg-[var(--bb-darkest)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <a href="#top" className="flex items-center text-sm font-semibold">
          <PeriodicElement
            prefix="Ja"
            symbol="Mi"
            number={95}
            mass={243}
            name="Americium"
            suffix="l"
            size="sm"
          />
        </a>
        <p className="font-mono text-xs text-[var(--bb-text-muted)] text-center">
          © {new Date().getFullYear()} Jamil Ahmed. All rights reserved.
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="font-mono text-xs text-[var(--bb-text-secondary)] hover:text-[var(--bb-green-light)] transition-colors"
        >
          {contact.email}
        </a>
      </div>
    </footer>
  );
}
