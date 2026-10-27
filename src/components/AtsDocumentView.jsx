import React from 'react';
import { Mail, Phone, MapPin, Copy, ExternalLink, Sparkles, Printer, Check } from 'lucide-react';

export const AtsDocumentView = ({ resumeData, searchQuery, onCopy, copiedField }) => {
  // Helper function to highlight matching search keywords
  const highlightText = (text) => {
    if (!searchQuery || !searchQuery.trim()) return text;
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-amber-200 dark:bg-amber-500/40 text-inherit rounded-xs px-0.5 font-semibold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 print:p-0">
      {/* ATS Sheet Container - Mimics physical executive resume sheet */}
      <div className="ats-container bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-8 sm:p-12 md:p-16 text-zinc-900 dark:text-zinc-100 transition-colors">
        
        {/* ===== HEADER SECTION ===== */}
        <header className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-sans">
                {highlightText(resumeData.name)}
              </h1>
              <p className="text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-400 mt-1">
                {resumeData.title}
              </p>
            </div>
            
            {/* Quick print button inside sheet for convenience */}
            <div className="no-print self-start flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition-colors border border-zinc-200 dark:border-zinc-700"
                title="Print ATS Formatted Resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print PDF</span>
              </button>
            </div>
          </div>

          {/* Contact Details Line */}
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-700 dark:text-zinc-300 font-sans">
            {/* Phone */}
            <div className="flex items-center gap-1.5 group">
              <Phone className="w-4 h-4 text-zinc-400 shrink-0 print:hidden" />
              <span>{highlightText(resumeData.contact.phone)}</span>
              <button
                onClick={() => onCopy(resumeData.contact.phone, 'phone')}
                className="no-print opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-opacity"
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center gap-1.5 group">
              <Mail className="w-4 h-4 text-zinc-400 shrink-0 print:hidden" />
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {highlightText(resumeData.contact.email)}
              </a>
              <button
                onClick={() => onCopy(resumeData.contact.email, 'email')}
                className="no-print opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-opacity"
                title="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Address */}
            <div className="flex items-center gap-1.5 group w-full sm:w-auto">
              <MapPin className="w-4 h-4 text-zinc-400 shrink-0 print:hidden" />
              <span>{highlightText(resumeData.contact.address)}</span>
              <button
                onClick={() => onCopy(resumeData.contact.address, 'address')}
                className="no-print opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-opacity"
                title="Copy address"
              >
                {copiedField === 'address' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </header>

        {/* Divider */}
        <hr className="border-t-2 border-zinc-950 dark:border-zinc-300 mb-6" />

        {/* ===== OBJECTIVE SECTION ===== */}
        <section className="mb-8 avoid-break">
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-2">
            OBJECTIVE
          </h2>
          <div className="p-1 rounded-sm">
            <p className="text-sm sm:text-base leading-relaxed text-zinc-800 dark:text-zinc-200 text-justify">
              {highlightText(resumeData.objective)}
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t border-zinc-300 dark:border-zinc-700 mb-6" />

        {/* ===== PROJECTS SECTION ===== */}
        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-4">
            PROJECTS
          </h2>
          <div className="space-y-6">
            {resumeData.projects.map((project) => (
              <article key={project.id} className="avoid-break space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white flex items-center gap-2">
                    {highlightText(project.title)}
                  </h3>
                </div>
                <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  {highlightText(project.role)} <span className="font-normal text-zinc-500">| {project.year}</span>
                </div>

                <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm sm:text-base text-zinc-800 dark:text-zinc-200 pt-1">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {highlightText(bullet)}
                    </li>
                  ))}
                </ul>

                {/* Tech badges (subtle, ATS friendly and visible for recruiters) */}
                <div className="no-print pt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                    >
                      {highlightText(tech)}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t border-zinc-300 dark:border-zinc-700 mb-6" />

        {/* ===== EDUCATION SECTION ===== */}
        <section className="mb-8 avoid-break">
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-4">
            EDUCATION
          </h2>
          <div className="space-y-5">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white">
                    {highlightText(edu.degree)}
                  </div>
                  <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 sm:text-right shrink-0">
                    {edu.period}
                  </div>
                </div>
                <div className="text-sm text-zinc-700 dark:text-zinc-300">
                  {highlightText(edu.institution)}
                </div>
                {edu.honors && (
                  <ul className="list-disc list-outside ml-5 text-sm text-zinc-800 dark:text-zinc-200 pt-0.5">
                    <li className="font-medium text-emerald-700 dark:text-emerald-400">
                      {highlightText(edu.honors)}
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t border-zinc-300 dark:border-zinc-700 mb-6" />

        {/* ===== TECHNICAL SKILLS SECTION ===== */}
        <section className="avoid-break">
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-4">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-2.5 text-sm sm:text-base text-zinc-800 dark:text-zinc-200">
            {resumeData.skillCategories.map((cat) => (
              <div key={cat.name} className="leading-relaxed">
                <span className="font-bold text-zinc-950 dark:text-white">
                  {highlightText(cat.name)}:
                </span>{' '}
                <span className="text-zinc-700 dark:text-zinc-300">
                  {cat.skills.map((skill, sIdx) => (
                    <React.Fragment key={skill}>
                      <span className="inline-block">{highlightText(skill)}</span>
                      {sIdx < cat.skills.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
