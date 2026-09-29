"use client";

import React, { useCallback, useEffect, useState } from "react";
import { DEFAULTS, SAMPLE } from "@/config/app.config";
import { requestRoast } from "@/lib/api";
import {
  LanguageId,
  ReportState,
  RoastLevel,
  RoastResult,
} from "@/types/roast";
import { TopBar } from "./TopBar";
import { RoastControls } from "./RoastControls";
import { ErrorMessageInput } from "./ErrorMessageInput";
import { CodeEditor } from "./CodeEditor";
import { RoastReport } from "./RoastReport";
import { StatusBar } from "./StatusBar";

export function Workspace() {
  const [roastLevel, setRoastLevel] = useState<RoastLevel>(DEFAULTS.roastLevel);
  const [language, setLanguage] = useState<LanguageId>(DEFAULTS.language);
  const [code, setCode] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorDrawerOpen, setErrorDrawerOpen] = useState<boolean>(false);
  const [reportState, setReportState] = useState<ReportState>("empty");
  const [roastResult, setRoastResult] = useState<RoastResult | null>(null);
  const [roastedCode, setRoastedCode] = useState<string>("");
  const [apiError, setApiError] = useState<string | null>(null);

  const isRoasting = reportState === "loading";

  const handleRoast = useCallback(async () => {
    if (isRoasting) return;

    if (!code.trim()) {
      setApiError("No code provided. I can't roast the void.");
      setReportState("error");
      return;
    }

    setReportState("loading");
    setApiError(null);
    setRoastResult(null);

    try {
      const result = await requestRoast({
        language,
        code,
        roastLevel,
        errorMessage: errorMessage.trim() || undefined,
      });

      setRoastResult(result);
      setRoastedCode(code);
      setReportState("results");
    } catch (err: any) {
      setApiError(err?.message || "An unexpected error occurred.");
      setReportState("error");
    }
  }, [code, errorMessage, isRoasting, language, roastLevel]);

  const handleLoadSample = useCallback(() => {
    setLanguage(SAMPLE.language);
    setCode(SAMPLE.code);
  }, []);

  const handleApplyFix = useCallback((fixedCode: string) => {
    setCode(fixedCode);
  }, []);

  // Global Ctrl+Enter / Cmd+Enter shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleRoast();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleRoast]);

  // Error line is only highlighted if the current code still exactly matches the roasted code
  const errorLine =
    reportState === "results" && code === roastedCode
      ? roastResult?.issues?.[0]?.line
      : undefined;

  return (
    <main className="w-full max-w-[1360px] bg-[var(--color-panel)] border-2 border-[var(--color-frame)] shadow-[4px_4px_0px_#111111] flex flex-col my-auto overflow-hidden">
      {/* Top Bar with Controls */}
      <TopBar>
        <RoastControls
          roastLevel={roastLevel}
          onRoastLevelChange={setRoastLevel}
          language={language}
          onLanguageChange={setLanguage}
          onRoast={handleRoast}
          isRoasting={isRoasting}
          errorDrawerOpen={errorDrawerOpen}
          onToggleErrorDrawer={() => setErrorDrawerOpen((prev) => !prev)}
        />
      </TopBar>

      {/* Collapsible Error Drawer */}
      {errorDrawerOpen && (
        <ErrorMessageInput
          value={errorMessage}
          onChange={setErrorMessage}
          onClose={() => setErrorDrawerOpen(false)}
        />
      )}

      {/* Main Two-Column Row */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        <CodeEditor
          code={code}
          onChange={setCode}
          language={language}
          errorLine={errorLine}
          onLoadSample={handleLoadSample}
        />
        <RoastReport
          state={reportState}
          roastLevel={roastLevel}
          language={language}
          result={roastResult}
          errorMsg={apiError}
          onRetry={handleRoast}
          onApplyFix={handleApplyFix}
        />
      </div>

      {/* Fixed Status Bar Footer */}
      <StatusBar isRoasting={isRoasting} />
    </main>
  );
}
