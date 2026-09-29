"use client";

import React, { useRef, useState } from "react";
import { LANGUAGES } from "@/config/app.config";
import { LanguageId } from "@/types/roast";

interface CodeEditorProps {
  code: string;
  onChange: (val: string) => void;
  language: LanguageId;
  errorLine?: number;
  onLoadSample: () => void;
}

export function CodeEditor({
  code,
  onChange,
  language,
  errorLine,
  onLoadSample,
}: CodeEditorProps) {
  const [cursor, setCursor] = useState({ line: 1, col: 1 });
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const gutterRef = useRef<HTMLDivElement>(null);

  const lines = code.split("\n");
  const lineCount = Math.max(lines.length, 10);

  const langConfig = LANGUAGES.find((l) => l.id === language);
  const languageLabel = langConfig?.label ?? language;

  const handleSelect = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    const textBefore = target.value.substring(0, target.selectionStart);
    const linesBefore = textBefore.split("\n");
    setCursor({
      line: linesBefore.length,
      col: linesBefore[linesBefore.length - 1].length + 1,
    });
  };

  const handleScroll = () => {
    if (textareaRef.current && gutterRef.current) {
      gutterRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      target.setRangeText("    ", start, end, "end");
      onChange(target.value);
    }
  };

  const handleClear = () => {
    onChange("");
    setCursor({ line: 1, col: 1 });
  };

  return (
    <div className="w-full lg:w-[55%] border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--color-frame)] flex flex-col bg-[var(--color-panel)] min-h-[500px] relative">
      {/* 40px Header Strip */}
      <div className="h-10 bg-[var(--color-surface-low)] border-b border-[var(--color-frame)] px-4 flex items-center justify-between text-xs font-mono uppercase tracking-wider">
        <span className="text-[var(--color-frame)]/70 font-semibold">
          INPUT // SRC
        </span>
        <span className="font-bold text-[var(--color-frame)]">Your Code</span>
        <div className="flex items-center gap-3">
          <button
            onClick={onLoadSample}
            type="button"
            className="text-[11px] font-bold text-[var(--color-frame)]/80 hover:text-[var(--color-frame)] underline cursor-pointer"
          >
            SAMPLE BUG
          </button>
          <span className="text-[var(--color-subtle)]">|</span>
          <button
            onClick={handleClear}
            type="button"
            className="text-[11px] font-bold text-[var(--color-frame)]/80 hover:text-[#D94826] underline cursor-pointer"
          >
            CLEAR
          </button>
        </div>
      </div>

      {/* Editor Surface: Gutter + Textarea */}
      <div className="flex-1 flex overflow-hidden relative font-mono text-[13px] leading-[22px]">
        {/* Line Number Gutter */}
        <div
          ref={gutterRef}
          className="w-12 py-3 select-none text-right pr-2 bg-[var(--color-canvas)] border-r border-[var(--color-subtle)] text-[var(--color-frame)]/40 overflow-hidden flex flex-col font-mono"
        >
          {Array.from({ length: lineCount }).map((_, idx) => {
            const lineNum = idx + 1;
            const isError = lineNum === errorLine;
            return (
              <span
                key={lineNum}
                className={`h-[22px] px-1 ${
                  isError
                    ? "bg-[#D94826]/15 text-[#D94826] font-bold"
                    : ""
                }`}
              >
                {String(lineNum).padStart(2, "0")}
              </span>
            );
          })}
        </div>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => onChange(e.target.value)}
          onSelect={handleSelect}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          placeholder="// Paste your code here..."
          className="flex-1 p-3 bg-transparent text-[var(--color-frame)] outline-none resize-none font-mono text-[13px] leading-[22px] whitespace-pre overflow-x-auto overflow-y-auto"
        />
      </div>

      {/* Bottom Status Strip */}
      <div className="border-t border-[var(--color-frame)] bg-[var(--color-surface-low)] px-4 py-1.5 hidden sm:flex items-center justify-between text-[11px] font-mono text-[var(--color-frame)]/70">
        <div>
          Ln {cursor.line}, Col {cursor.col} · {languageLabel}
        </div>
        <div>UTF-8 · Tab Size: 4</div>
      </div>
    </div>
  );
}
