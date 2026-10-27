import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText } from 'lucide-react';

export const Navbar = ({ isDarkMode, toggleDarkMode, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-xs py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-end">
        
        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-zinc-950/90 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 backdrop-blur-sm transition-all shadow-md cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white bg-white/70 dark:bg-zinc-900/70 hover:bg-white dark:hover:bg-zinc-850 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 transition-colors cursor-pointer shadow-xs"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
