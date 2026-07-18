import React from "react";

interface PeriodicElementProps {
  prefix?: string;
  symbol: string;
  number: number;
  mass: number;
  name: string;
  suffix?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function PeriodicElement({
  prefix = "",
  symbol,
  number,
  mass,
  name,
  suffix = "",
  size = "md",
}: PeriodicElementProps) {
  const sizeClasses = {
    sm: "text-[11px] min-w-[1.5em] p-[0.12em]",
    md: "text-base min-w-[1.9em] p-[0.15em]",
    lg: "text-xl min-w-[2.1em] p-[0.18em]",
    xl: "text-2xl min-w-[2.3em] p-[0.2em]",
  };

  return (
    <span className="inline-flex items-baseline font-sans group/pe">
      {prefix && <span className="mr-[1px] font-bold">{prefix}</span>}
      <span
        className={`relative inline-flex flex-col items-center justify-center rounded-sm border border-[var(--bb-green-2)]/60 bg-gradient-to-br from-[var(--bb-dark-2)] to-[var(--bb-green-1)] text-white font-bold leading-none select-none aspect-square align-middle mx-[0.12em] shadow-[0_0_8px_rgba(34,128,90,0.2)] group-hover/pe:shadow-[0_0_14px_rgba(34,128,90,0.35)] group-hover/pe:border-[var(--bb-green-light)]/60 transition-all duration-300 ${sizeClasses[size]}`}
      >
        <span className="absolute bottom-[0.15em] left-[0.15em] text-[0.3em] text-white/50">
          {number}
        </span>
        <span className="text-[1em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
          {symbol}
        </span>
        <span className="absolute top-[0.15em] left-[0.15em] text-[0.3em] text-white/50">
          {mass}
        </span>
        <span
          className="absolute right-[0.15em] top-1/2 -translate-y-1/2 text-[0.2em] text-white/40 tracking-wide"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg) translateX(50%)",
          }}
        >
          {name}
        </span>
      </span>
      {suffix && <span className="font-bold">{suffix}</span>}
    </span>
  );
}
