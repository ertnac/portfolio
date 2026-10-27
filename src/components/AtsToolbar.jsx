import React from 'react';
import { Search, X, CheckCircle, Printer, Copy, FileText, Sparkles } from 'lucide-react';

export const AtsToolbar = ({
  searchQuery,
  setSearchQuery,
  matchCount,
  onCopyPlainText,
  hasCopiedPlainText
}) => {
  return (
    <div className="no-print max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Recruiter Keyword Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Recruiter keyword test: e.g. React, Node.js, CRUD, TypeScript..."
            className="w-full pl-10 pr-16 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 border border-zinc-200 dark:border-zinc-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* ATS Quality indicator & Quick Actions */}
        <div className="flex items-center justify-between md:justify-end gap-2 shrink-0">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span>ATS Standard Format</span>
          </div>

          <button
            onClick={onCopyPlainText}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-semibold transition-colors border border-zinc-200 dark:border-zinc-700"
          >
            {hasCopiedPlainText ? (
              <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Copy Plaintext</span>
              </>
            )}
          </button>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print PDF</span>
          </button>
        </div>

      </div>

      {/* Suggested Quick Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2 text-xs text-zinc-500 dark:text-zinc-400">
        <span className="font-medium text-[11px]">Filter keywords:</span>
        {['React', 'TypeScript', 'Node.js', 'Laravel', 'React Native', 'MySQL', 'Firebase', 'CRUD', 'Electron'].map((tag) => (
          <button
            key={tag}
            onClick={() => setSearchQuery(searchQuery === tag ? '' : tag)}
            className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
              searchQuery.toLowerCase() === tag.toLowerCase()
                ? 'bg-indigo-600 text-white font-bold'
                : 'bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};
