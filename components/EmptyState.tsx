import React from "react";

export function EmptyState() {
  return (
    <div className="flex-1 p-6 flex flex-col items-center justify-center text-center font-mono">
      <div className="w-16 h-16 border-2 border-dashed border-[var(--color-frame)]/40 bg-[var(--color-panel)] flex items-center justify-center text-2xl text-[var(--color-frame)]/60 font-bold mb-4 shadow-[2px_2px_0px_#111111]">
        &#123;&#125;
      </div>
      <h3 className="text-base uppercase font-bold tracking-tight text-[var(--color-frame)] mb-2 font-sans">
        Awaiting Code Submission
      </h3>
      <p className="text-xs text-[var(--color-frame)]/70 max-w-[280px] leading-relaxed">
        Paste your code on the left, then click &quot;ROAST MY CODE&quot; or press
        Ctrl+Enter (&#8984;+Enter on Mac).
      </p>
    </div>
  );
}
