import React from "react";

interface ErrorStateProps {
  error?: string | null;
  onRetry: () => void;
}

export function ErrorState({ error, onRetry }: ErrorStateProps) {
  const displayError =
    error && error.trim()
      ? error
      : "An unknown error occurred during code evaluation.";

  return (
    <div className="flex-1 p-6 flex flex-col items-center justify-center text-center font-mono">
      <div className="w-16 h-16 border-2 border-[var(--color-accent)] bg-[var(--color-panel)] flex items-center justify-center text-3xl font-bold text-[var(--color-accent)] mb-4 shadow-[2px_2px_0px_#D94826]">
        !
      </div>
      <h3 className="text-base uppercase font-bold tracking-tight text-[var(--color-accent)] mb-2 font-sans">
        Analysis Failed
      </h3>
      <p className="text-xs text-[var(--color-frame)]/70 max-w-[340px] leading-relaxed mb-4 break-words">
        {displayError}
      </p>
      <button
        onClick={onRetry}
        type="button"
        className="px-4 py-2 text-xs font-bold uppercase border-2 border-[var(--color-accent)] bg-[var(--color-panel)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-panel)] transition-none shadow-[2px_2px_0px_#D94826] cursor-pointer"
      >
        RETRY ANALYSIS ↵
      </button>
    </div>
  );
}
