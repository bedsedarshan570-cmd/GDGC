import React from "react";

interface SectionHeaderProps {
  number: number;
  title: string;
  children?: React.ReactNode;
}

export function SectionHeader({ number, title, children }: SectionHeaderProps) {
  const paddedNumber = String(number).padStart(2, "0");

  return (
    <div className="border-b border-[var(--color-subtle)] pb-1.5 flex items-center justify-between text-xs font-mono">
      <span className="font-bold uppercase tracking-widest text-[var(--color-frame)]">
        {paddedNumber} // {title}
      </span>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  );
}
