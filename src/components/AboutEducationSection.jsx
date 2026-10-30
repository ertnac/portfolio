import React from 'react';
import { Award } from 'lucide-react';

export const AboutEducationSection = ({ education, personal }) => {
  return (
    <section id="education" className="py-16 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Education & Journey
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
            My foundational training in Information Technology, analytical problem solving, and technical leadership.
          </p>
        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800/80 p-6 sm:p-7 space-y-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 self-start">
                    {item.period}
                  </span>
                  {item.status.includes('Honors') && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 self-start">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.status}</span>
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="text-lg font-bold text-zinc-950 dark:text-white">
                    {item.degree}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {item.institution}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
