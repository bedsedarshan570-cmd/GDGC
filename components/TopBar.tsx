import React from "react";
import { APP } from "@/config/app.config";

interface TopBarProps {
  children: React.ReactNode;
}

export function TopBar({ children }: TopBarProps) {
  return (
    <header className="border-b-2 border-[var(--color-frame)] bg-[var(--color-panel)] px-4 lg:px-6 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
      {/* Left: App name + version tag */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl lg:text-2xl font-black uppercase tracking-widest text-[var(--color-frame)] font-sans leading-none">
          {APP.name}
        </h1>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[var(--color-canvas)] border border-[var(--color-frame)] px-1.5 py-0.5 text-[var(--color-frame)]">
          [{APP.version}]
        </span>
      </div>

      {/* Right: Controls */}
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
        {children}
      </div>
    </header>
  );
}
