import React from "react";
import { AI, APP } from "@/config/app.config";

interface StatusBarProps {
  isRoasting: boolean;
}

export function StatusBar({ isRoasting }: StatusBarProps) {
  return (
    <footer className="border-t-2 border-[var(--color-frame)] bg-[var(--color-panel)] px-4 lg:px-6 py-2 flex flex-col gap-1 font-mono text-[11px] text-[var(--color-frame)]/70">
      {/* Top Status Row */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span>STATUS:</span>
          {isRoasting ? (
            <span className="font-bold text-[#E69500] animate-pulse">
              PROCESSING...
            </span>
          ) : (
            <span className="font-bold text-[#2E7D32] flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2E7D32]"></span>
              ONLINE ({AI.modelLabel.toUpperCase()})
            </span>
          )}
          <span className="hidden sm:inline text-[var(--color-subtle)]">|</span>
          <span className="hidden sm:inline">ENGINE: GOOGLE GEMINI</span>
        </div>

        <div className="uppercase tracking-widest font-semibold text-[var(--color-frame)]">
          {APP.name} {APP.version} // LIVE
        </div>
      </div>

      {/* Workshop Attribution Line */}
      <div className="text-[10px] text-center text-[var(--color-frame)]/50 tracking-wider pt-0.5 border-t border-[var(--color-subtle)]/50">
        Made at GDG Nashik Pre-DevFest Workshop
      </div>
    </footer>
  );
}
