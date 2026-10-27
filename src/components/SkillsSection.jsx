import React from 'react';
import { Copy, Check } from 'lucide-react';
import { TechIcon } from './TechIcon';

export const SkillsSection = ({ skills, onCopy, copiedField }) => {
  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <span>02 // Technologies & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Technical Competencies
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Modern programming languages, frameworks, state systems, and databases I employ to engineer scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800/80 p-6 space-y-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                <h3 className="text-sm font-bold text-zinc-950 dark:text-white font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {category}
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  {items.length} tools
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => onCopy(skill, skill)}
                    className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-zinc-700/70 transition-all cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-500"
                  >
                    <TechIcon name={skill} className="w-3.5 h-3.5 shrink-0" />
                    <span>{skill}</span>
                    {copiedField === skill ? (
                      <Check className="w-3 h-3 text-emerald-500" />
                    ) : (
                      <Copy className="w-3 h-3 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
