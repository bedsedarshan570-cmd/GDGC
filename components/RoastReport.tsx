import React from "react";
import { LanguageId, ReportState, RoastLevel, RoastResult } from "@/types/roast";
import { EmptyState } from "./EmptyState";
import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";
import { SectionHeader } from "./SectionHeader";
import { IssueCard } from "./IssueCard";
import { FixedCode } from "./FixedCode";

interface RoastReportProps {
  state: ReportState;
  roastLevel: RoastLevel;
  language: LanguageId;
  result: RoastResult | null;
  errorMsg: string | null;
  onRetry: () => void;
  onApplyFix: (code: string) => void;
}

export function RoastReport({
  state,
  roastLevel,
  language,
  result,
  errorMsg,
  onRetry,
  onApplyFix,
}: RoastReportProps) {
  const issuesCount = result?.issues?.length ?? 0;
  const issueLabel = issuesCount === 1 ? "1 ISSUE" : `${issuesCount} ISSUES`;

  const hasFixedCode = Boolean(result?.correctedCode && result.correctedCode.trim());
  const hasTakeaway = Boolean(result?.takeaway && result.takeaway.trim());
  const takeawaySectionNumber = hasFixedCode ? 4 : 3;

  return (
    <div className="w-full lg:w-[45%] flex flex-col bg-[var(--color-panel)] min-h-[500px]">
      {/* 40px Header Strip */}
      <div className="h-10 bg-[var(--color-surface-low)] border-b border-[var(--color-frame)] px-4 flex items-center justify-between text-xs font-mono uppercase tracking-wider">
        <span className="text-[var(--color-frame)]/70 font-semibold">
          AUDIT // REPORT
        </span>
        <span className="font-bold text-[var(--color-frame)]">Roast Report</span>
        <span className="w-12"></span>
      </div>

      {/* State Renderers */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {state === "empty" && <EmptyState />}
        {state === "loading" && <LoadingState />}
        {state === "error" && <ErrorState error={errorMsg} onRetry={onRetry} />}

        {state === "results" && result && (
          <div className="p-4 lg:p-5 flex flex-col gap-5 overflow-y-auto">
            {/* Section 1: Roast */}
            <div className="flex flex-col gap-2 font-mono">
              <SectionHeader number={1} title="Roast">
                <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase">
                  STYLE: {roastLevel}
                </span>
              </SectionHeader>
              <div className="p-3 bg-[var(--color-canvas)] border-l-4 border-[var(--color-accent)] border-t border-r border-b border-[var(--color-subtle)] text-xs leading-relaxed italic text-[var(--color-frame)]">
                &quot;{result.roast}&quot;
              </div>
            </div>

            {/* Section 2: What's Wrong */}
            <div className="flex flex-col gap-3 font-mono">
              <SectionHeader number={2} title="What's Wrong">
                <span className="text-[10px] font-bold text-[var(--color-frame)]/70 uppercase">
                  {issueLabel}
                </span>
              </SectionHeader>

              {issuesCount === 0 ? (
                <div className="p-3 border border-[#2E7D32] bg-[#2E7D32]/5 text-[#2E7D32] text-xs font-bold">
                  ✓ No issues found. Suspiciously clean.
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {result.issues.map((issue, idx) => (
                    <IssueCard key={`${issue.line}-${idx}`} index={idx + 1} issue={issue} />
                  ))}
                </div>
              )}
            </div>

            {/* Section 3: Fix (only if correctedCode is non-empty) */}
            {hasFixedCode && (
              <FixedCode
                sectionNumber={3}
                language={language}
                code={result.correctedCode}
                onApply={onApplyFix}
              />
            )}

            {/* Section 4 or 3: Takeaway (only if takeaway is non-empty) */}
            {hasTakeaway && (
              <div className="flex flex-col gap-2 font-mono">
                <SectionHeader number={takeawaySectionNumber} title="Takeaway" />
                <div className="p-3 border border-[var(--color-frame)] bg-[var(--color-canvas)] text-xs leading-relaxed text-[var(--color-frame)]">
                  {result.takeaway}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
