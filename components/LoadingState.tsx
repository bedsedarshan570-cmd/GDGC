"use client";

import React, { useEffect, useState } from "react";

const GLYPHS = ["/", "—", "\\", "|"];

export function LoadingState() {
  const [glyphIndex, setGlyphIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGlyphIndex((prev) => (prev + 1) % GLYPHS.length);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 p-6 flex flex-col items-center justify-center text-center font-mono">
      <div className="w-16 h-16 border-2 border-[var(--color-frame)] bg-[var(--color-panel)] flex items-center justify-center text-2xl font-bold text-[var(--color-frame)] mb-4 shadow-[2px_2px_0px_#111111]">
        {GLYPHS[glyphIndex]}
      </div>
      <h3 className="text-base uppercase font-bold tracking-tight text-[var(--color-frame)] mb-2 animate-pulse font-sans">
        Analyzing Code
      </h3>
      <p className="text-xs text-[var(--color-frame)]/70 max-w-[300px] leading-relaxed">
        Evaluating computational complexity and architectural purity...
      </p>
    </div>
  );
}
