"use client";

import React, { useState } from "react";
import { LANGUAGES } from "@/config/app.config";
import { LanguageId } from "@/types/roast";
import { SectionHeader } from "./SectionHeader";

interface FixedCodeProps {
  sectionNumber: number;
  language: LanguageId;
  code: string;
  onApply: (code: string) => void;
}

export function FixedCode({
  sectionNumber,
  language,
  code,
  onApply,
}: FixedCodeProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle"
  );

  const langConfig = LANGUAGES.find((l) => l.id === language);
  const extension = langConfig?.extension ?? "txt";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
    setTimeout(() => {
      setCopyStatus("idle");
    }, 2000);
  };

  const copyLabel =
    copyStatus === "copied"
      ? "✓ COPIED TO CLIPBOARD"
      : copyStatus === "failed"
      ? "✕ COPY BLOCKED, SELECT MANUALLY"
      : "📋 COPY FIXED CODE";

  return (
    <div className="flex flex-col gap-2 font-mono">
      <SectionHeader number={sectionNumber} title="Fix">
        <span className="text-[11px] font-bold text-[#2E7D32] uppercase">
          CORRECTED CODE
        </span>
      </SectionHeader>

      <div className="border border-[var(--color-frame)] bg-[var(--color-panel)] shadow-[2px_2px_0px_#111111]">
        {/* Header strip */}
        <div className="bg-[var(--color-surface-low)] border-b border-[var(--color-frame)] px-3 py-1.5 flex items-center justify-between text-xs uppercase tracking-wider">
          <span className="font-bold text-[var(--color-frame)]">
            solution.{extension}
          </span>
          <span className="text-[10px] font-bold text-[#2E7D32]">
            READY TO APPLY
          </span>
        </div>

        {/* Code view */}
        <pre className="p-3 text-xs leading-relaxed overflow-x-auto m-0 bg-[var(--color-panel)] text-[var(--color-frame)]">
          <code>{code}</code>
        </pre>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 pt-1">
        <button
          onClick={handleCopy}
          type="button"
          className="px-3 py-1.5 text-xs font-bold uppercase border border-[var(--color-frame)] bg-[var(--color-panel)] text-[var(--color-frame)] hover:bg-[var(--color-frame)] hover:text-[var(--color-panel)] transition-none shadow-[1px_1px_0px_#111111] cursor-pointer"
        >
          {copyLabel}
        </button>
        <button
          onClick={() => onApply(code)}
          type="button"
          className="px-3 py-1.5 text-xs font-bold uppercase border border-[var(--color-frame)] bg-[var(--color-panel)] text-[var(--color-frame)] hover:bg-[var(--color-frame)] hover:text-[var(--color-panel)] transition-none shadow-[1px_1px_0px_#111111] cursor-pointer"
        >
          APPLY TO EDITOR ↵
        </button>
      </div>
    </div>
  );
}
