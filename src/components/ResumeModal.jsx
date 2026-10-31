import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[88vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                James Clarence D. Cantre — Resume
              </h3>
              <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400">
                Official Curriculum Vitae & Resume (PDF)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Button */}
            <a
              href="/resume.pdf"
              download="James_Clarence_Cantre_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open in New Tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors cursor-pointer"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Tab</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Embedded PDF View */}
        <div className="flex-1 w-full h-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden relative">
          <object
            data="/resume.pdf#toolbar=1&navpanes=0"
            type="application/pdf"
            className="w-full h-full border-0"
          >
            <iframe
              src="/resume.pdf#toolbar=1&navpanes=0"
              title="James Clarence D. Cantre Resume PDF"
              className="w-full h-full border-0"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                <FileText className="w-12 h-12 text-zinc-400" />
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                    Preview Not Supported Directly
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm">
                    Your device does not support inline PDF preview. You can download or view it in a new tab below.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/resume.pdf"
                    download="James_Clarence_Cantre_Resume.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl text-xs font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in Tab
                  </a>
                </div>
              </div>
            </iframe>
          </object>
        </div>

      </div>
    </div>
  );
};
