import React from "react";
import { RoastIssue, Severity } from "@/types/roast";

interface IssueCardProps {
  index: number;
  issue: RoastIssue;
}

const severityConfig: Record<
  Severity,
  {
    badgeClass: string;
    stripeClass: string;
  }
> = {
  "FATAL BUG": {
    badgeClass: "text-[#D94826] border-[#D94826] bg-[#D94826]/10",
    stripeClass: "border-l-4 border-[#D94826]",
  },
  "CODE SMELL": {
    badgeClass: "text-[#E69500] border-[#E69500] bg-[#E69500]/10",
    stripeClass: "border-l-4 border-[#E69500]",
  },
  OPTIMIZATION: {
    badgeClass: "text-[#2E7D32] border-[#2E7D32] bg-[#2E7D32]/10",
    stripeClass: "border-l-4 border-[#2E7D32]",
  },
};

export function IssueCard({ index, issue }: IssueCardProps) {
  const paddedIndex = String(index).padStart(2, "0");
  const styling =
    severityConfig[issue.severity] || severityConfig["FATAL BUG"];

  return (
    <div className="border border-[var(--color-frame)] bg-[var(--color-panel)] p-3 shadow-[2px_2px_0px_#111111] flex flex-col gap-2 font-mono">
      {/* Top Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-subtle)] pb-2">
        <div className="flex items-center gap-2">
          <span className="bg-[var(--color-frame)] text-[var(--color-panel)] text-[10px] font-bold px-1.5 py-0.5">
            {paddedIndex}
          </span>
          <span className="text-xs font-bold uppercase text-[var(--color-frame)]">
            LINE {issue.line}
          </span>
          <span
            className={`text-[10px] font-bold px-1.5 py-0.5 border ${styling.badgeClass}`}
          >
            {issue.severity}
          </span>
        </div>
        <div className="text-[11px] text-[var(--color-frame)]/70 text-right font-medium max-w-full break-words">
          {issue.title}
        </div>
      </div>

      {/* Code Snippet */}
      {issue.codeSnippet && (
        <div
          className={`p-2 text-xs font-mono bg-[var(--color-canvas)] border-r border-t border-b border-[var(--color-subtle)] overflow-x-auto ${styling.stripeClass}`}
        >
          <pre className="m-0">
            <code>{issue.codeSnippet}</code>
          </pre>
        </div>
      )}

      {/* Diagnosis & Expected */}
      <div className="text-xs flex flex-col gap-1 text-[var(--color-frame)]">
        <div className="flex items-start gap-1.5 text-[#D94826]">
          <span className="font-bold">✕</span>
          <span>
            <strong>Diagnosis:</strong> {issue.diagnosis}
          </span>
        </div>
        <div className="flex items-start gap-1.5 text-[#2E7D32]">
          <span className="font-bold">✓</span>
          <span>
            <strong>Expected:</strong> {issue.expected}
          </span>
        </div>
      </div>
    </div>
  );
}
