import React from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

const Toast = ({ message, type = "success", onClose }) => {
  if (!message) return null;

  const isSuccess = type === "success";

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-surface border border-border shadow-2xl rounded-2xl p-4 flex items-start gap-3 animate-fade-in transition-all"
    >
      <div className="flex-shrink-0 mt-0.5">
        {isSuccess ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        ) : (
          <AlertCircle className="w-5 h-5 text-red-500" />
        )}
      </div>

      <div className="flex-1 text-sm font-medium text-ink">
        {message}
      </div>

      <button
        onClick={onClose}
        className="flex-shrink-0 text-ink-faint hover:text-ink p-1 rounded-lg transition-colors cursor-pointer"
        aria-label="Dismiss message"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
