import React from "react";

interface ErrorMessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
}

export function ErrorMessageInput({
  value,
  onChange,
  onClose,
}: ErrorMessageInputProps) {
  return (
    <div className="border-b-2 border-[var(--color-frame)] bg-[var(--color-surface-low)] p-3 font-mono">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-frame)]">
          Attach Terminal Traceback / Compiler Error (Optional)
        </span>
        <button
          onClick={onClose}
          type="button"
          className="text-[11px] font-bold text-[var(--color-frame)]/70 hover:text-[#D94826] underline cursor-pointer"
        >
          Dismiss ✕
        </button>
      </div>
      <textarea
        rows={2}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="TypeError: unsupported operand type(s) for +=: 'int' and 'list' at line 5..."
        className="w-full p-2 text-xs font-mono bg-[var(--color-panel)] border border-[var(--color-frame)] text-[var(--color-frame)] focus:outline-none resize-none"
      />
    </div>
  );
}
