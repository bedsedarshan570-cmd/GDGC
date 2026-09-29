"use client";

import React from "react";
import { LANGUAGES, ROAST_LEVELS } from "@/config/app.config";
import { LanguageId, RoastLevel } from "@/types/roast";

interface RoastControlsProps {
  roastLevel: RoastLevel;
  onRoastLevelChange: (level: RoastLevel) => void;
  language: LanguageId;
  onLanguageChange: (lang: LanguageId) => void;
  onRoast: () => void;
  isRoasting: boolean;
  errorDrawerOpen: boolean;
  onToggleErrorDrawer: () => void;
}

export function RoastControls({
  roastLevel,
  onRoastLevelChange,
  language,
  onLanguageChange,
  onRoast,
  isRoasting,
  errorDrawerOpen,
  onToggleErrorDrawer,
}: RoastControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs">
      {/* 1. Roast Level Radio Group */}
      <div className="flex items-center gap-1.5 border border-[var(--color-frame)] bg-[var(--color-canvas)] p-1">
        <span className="text-[10px] uppercase font-bold text-[var(--color-frame)]/70 px-1 hidden md:inline">
          Roast Level:
        </span>
        {ROAST_LEVELS.map((level) => {
          const isSelected = roastLevel === level.id;
          return (
            <label
              key={level.id}
              title={level.description}
              className={`flex items-center gap-1 px-2 py-0.5 text-[11px] font-bold uppercase cursor-pointer select-none border transition-none ${
                isSelected
                  ? "bg-[var(--color-accent)] text-[var(--color-panel)] border-[var(--color-frame)] shadow-[1px_1px_0px_#111111]"
                  : "bg-transparent text-[var(--color-frame)]/70 border-transparent hover:text-[var(--color-frame)]"
              }`}
            >
              <input
                type="radio"
                name="roastLevel"
                value={level.id}
                checked={isSelected}
                onChange={() => onRoastLevelChange(level.id)}
                className="hidden"
              />
              <span
                className={`w-2 h-2 rounded-full border border-[var(--color-frame)] inline-block ${
                  isSelected ? "bg-[var(--color-panel)]" : "bg-transparent"
                }`}
              />
              <span>{level.label}</span>
            </label>
          );
        })}
      </div>

      {/* 2. Language Selector */}
      <div className="flex items-center gap-1">
        <span className="text-[10px] uppercase font-bold text-[var(--color-frame)]/70 hidden lg:inline">
          Language:
        </span>
        <div className="relative">
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value as LanguageId)}
            className="appearance-none bg-[var(--color-panel)] border border-[var(--color-frame)] px-2.5 py-1 pr-6 text-xs font-mono uppercase font-bold text-[var(--color-frame)] cursor-pointer focus:outline-none hover:bg-[var(--color-canvas)]"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.label} (.{lang.extension})
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[10px] text-[var(--color-frame)]">
            ▾
          </span>
        </div>
      </div>

      {/* 3. Error Drawer Toggle Button */}
      <button
        onClick={onToggleErrorDrawer}
        type="button"
        className={`px-2.5 py-1 text-[11px] font-bold uppercase border border-dashed border-[var(--color-frame)] cursor-pointer transition-none ${
          errorDrawerOpen
            ? "bg-[var(--color-frame)] text-[var(--color-panel)]"
            : "bg-[var(--color-panel)] text-[var(--color-frame)] hover:bg-[var(--color-canvas)]"
        }`}
      >
        {errorDrawerOpen ? "− ERROR MESSAGE" : "+ ERROR MESSAGE"}
      </button>

      {/* 4. Primary Roast Button */}
      <button
        onClick={onRoast}
        disabled={isRoasting}
        type="button"
        className={`px-4 py-1.5 text-xs font-bold uppercase border-2 border-[var(--color-frame)] flex items-center gap-2 tracking-wider transition-none ${
          isRoasting
            ? "bg-[var(--color-frame)]/50 text-[var(--color-panel)] cursor-not-allowed animate-pulse shadow-none"
            : "bg-[var(--color-frame)] text-[var(--color-panel)] hover:bg-[var(--color-accent)] shadow-[2px_2px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none cursor-pointer"
        }`}
      >
        {isRoasting ? (
          <span>ANALYZING...</span>
        ) : (
          <>
            <span>ROAST MY CODE</span>
            <span className="text-[10px] bg-[var(--color-panel)] text-[var(--color-frame)] px-1 py-0.2 border border-[var(--color-frame)] font-mono">
              Ctrl ⏎
            </span>
          </>
        )}
      </button>
    </div>
  );
}
