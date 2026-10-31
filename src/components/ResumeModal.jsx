import React from 'react';
import { X, Download, ExternalLink, FileText, GraduationCap } from 'lucide-react';

const DOCS = {
  resume: {
    id: 'resume',
    label: 'Resume',
    title: 'James Clarence D. Cantre — Resume',
    subtitle: 'Software Engineer & Full Stack Developer (1-Page Resume)',
    file: '/resume.pdf',
    downloadName: 'James_Clarence_Cantre_Resume.pdf',
    badge: '1-Page Industry Resume',
    icon: FileText
  },
  cv: {
    id: 'cv',
    label: 'Curriculum Vitae',
    title: 'James Clarence D. Cantre — Curriculum Vitae (CV)',
    subtitle: 'PLSP Student Intern Curriculum Vitae (COPE Academic & Training Format)',
    file: '/cv.pdf',
    downloadName: 'James_Clarence_Cantre_CV.pdf',
    badge: '2-Page Academic & Intern CV',
    icon: GraduationCap
  }
};

export const ResumeModal = ({ isOpen, onClose, activeType = 'resume', onTypeChange }) => {
  if (!isOpen) return null;

  const currentDoc = DOCS[activeType] || DOCS.resume;
  const ActiveIcon = currentDoc.icon;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[92vh] sm:h-[88vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 shrink-0">
          
          {/* Document Title & Badge */}
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
              <ActiveIcon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white truncate">
                  {currentDoc.title}
                </h3>
                <span className="hidden md:inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-zinc-200/70 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-300/50 dark:border-zinc-700/50">
                  {currentDoc.badge}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 truncate">
                {currentDoc.subtitle}
              </p>
            </div>
          </div>

          {/* Toggle Button + Actions */}
          <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
            
            {/* Toggle Switch between Resume and CV */}
            <div className="inline-flex items-center p-1 rounded-xl bg-zinc-200/70 dark:bg-zinc-800 border border-zinc-300/60 dark:border-zinc-700/60">
              <button
                type="button"
                onClick={() => onTypeChange?.('resume')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeType === 'resume'
                    ? 'bg-white dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

              <button
                type="button"
                onClick={() => onTypeChange?.('cv')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeType === 'cv'
                    ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>CV</span>
              </button>
            </div>

            {/* Download Button */}
            <a
              href={currentDoc.file}
              download={currentDoc.downloadName}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm active:scale-95 cursor-pointer"
              title={`Download ${currentDoc.label} PDF`}
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Open in New Tab */}
            <a
              href={currentDoc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors cursor-pointer"
              title="Open document in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Embedded PDF View */}
        <div className="flex-1 w-full h-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden relative">
          <object
            key={activeType}
            data={`${currentDoc.file}#toolbar=1&navpanes=0`}
            type="application/pdf"
            className="w-full h-full border-0"
          >
            <iframe
              key={activeType}
              src={`${currentDoc.file}#toolbar=1&navpanes=0`}
              title={currentDoc.title}
              className="w-full h-full border-0"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                <ActiveIcon className="w-12 h-12 text-zinc-400" />
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                    Preview Not Supported Directly
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm">
                    Your device does not support inline PDF preview. You can download or view {currentDoc.label} in a new tab below.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={currentDoc.file}
                    download={currentDoc.downloadName}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold"
                  >
                    <Download className="w-4 h-4" />
                    Download {currentDoc.label}
                  </a>
                  <a
                    href={currentDoc.file}
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
