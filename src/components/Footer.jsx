import React from 'react';
import { ArrowUp, FileText } from 'lucide-react';

export const Footer = ({ personal, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="no-print border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/50 py-12 text-zinc-500 dark:text-zinc-400 text-xs">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-semibold text-zinc-900 dark:text-zinc-200 text-sm">
            {personal.name}
          </span>
          <p>© {new Date().getFullYear()} — Designed & Built with React & Tailwind CSS</p>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={onOpenResume}
            className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>ATS Resume Sheet</span>
          </button>

          <button
            onClick={scrollToTop}
            className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 font-medium cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
