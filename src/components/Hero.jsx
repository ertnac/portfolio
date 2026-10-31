import React from 'react';
import { Mail, Phone, MapPin, Copy, Check, FileText, GraduationCap, Sun, Moon } from 'lucide-react';

export const Hero = ({
  personal,
  onOpenResume,
  onOpenDocument,
  activeDocType = 'resume',
  onCopy,
  copiedField,
  isDarkMode,
  toggleDarkMode
}) => {
  return (
    <section className="relative w-full pt-12 sm:pt-20 pb-12 sm:pb-16">

      {/* ===== FULL-WIDTH PROFILE HEADER SECTION ===== */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-12">

        {/* Top Profile Header: Avatar + Name/Role on left, Buttons on right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-zinc-200/80 dark:border-zinc-800/80">

          {/* Left: Round Avatar + Name & Role ALWAYS in one single row */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-7 min-w-0">

            {/* Round Avatar with User's Photo */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full border-3 sm:border-4 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden flex items-center justify-center relative">
                <img
                  src="/profile.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Name & Role */}
            <div className="space-y-1 pb-0.5 min-w-0 flex-1">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
                {personal.name}
              </h1>

              <p className="text-xs sm:text-base md:text-lg font-medium text-zinc-600 dark:text-zinc-400">
                {personal.title}
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-end pb-1">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>

            {/* Unified Resume / CV Toggle Button */}
            <div className="inline-flex items-center p-1 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:border-zinc-300 dark:hover:border-zinc-700">
              <button
                type="button"
                onClick={() => onOpenDocument ? onOpenDocument('resume') : onOpenResume()}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeDocType === 'resume'
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
                title="View Software Engineer Resume"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

              <span className="w-px h-4 bg-zinc-200 dark:bg-zinc-800 mx-0.5" />

              <button
                type="button"
                onClick={() => onOpenDocument ? onOpenDocument('cv') : onOpenResume()}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeDocType === 'cv'
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
                title="View Academic & Intern Curriculum Vitae (CV)"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>CV</span>
              </button>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 transition-all active:scale-90 shadow-sm cursor-pointer"
              aria-label="Toggle theme"
              title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-90" />
              ) : (
                <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-45" />
              )}
            </button>
          </div>

        </div>

        {/* Narrative & Contact Details */}
        <div className="pt-6 space-y-5">
          {/* Bio paragraph */}
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl font-normal">
            {personal.bio}
          </p>

          {/* Quick contact tags */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
              <span>{personal.location}</span>
            </div>

            {/* Email quick copy */}
            <button
              onClick={() => onCopy(personal.contact.email, 'hero-email')}
              className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors group cursor-pointer"
            >
              <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
              <span>{personal.contact.email}</span>
              {copiedField === 'hero-email' ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>

            {/* Phone quick copy */}
            <button
              onClick={() => onCopy(personal.contact.phone, 'hero-phone')}
              className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors group cursor-pointer"
            >
              <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
              <span>{personal.contact.phone}</span>
              {copiedField === 'hero-phone' ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
