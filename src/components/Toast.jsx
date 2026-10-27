import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export const Toast = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-3 rounded-xl shadow-2xl border border-zinc-700/50 dark:border-zinc-300 text-sm font-medium animate-in fade-in slide-in-from-bottom-5 duration-200">
      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-zinc-400 hover:text-white dark:text-zinc-500 dark:hover:text-zinc-900 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
