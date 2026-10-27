import React from 'react';
import { X, Printer, Copy, Check, Download, FileText } from 'lucide-react';
import { AtsDocumentView } from './AtsDocumentView';
import { resumeData } from '../data/resumeData';

export const ResumeModal = ({ isOpen, onClose, onCopy, copiedField }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                ATS Formatted Resume Sheet
              </h3>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Machine-readable & formatted for corporate ATS scanners
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Scrollable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-zinc-100/60 dark:bg-zinc-950/60">
          <AtsDocumentView
            resumeData={resumeData}
            searchQuery=""
            onCopy={onCopy}
            copiedField={copiedField}
          />
        </div>
      </div>
    </div>
  );
};
