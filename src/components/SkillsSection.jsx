import React from 'react';
import { 
  Copy, 
  Check, 
  Layout, 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Sparkles 
} from 'lucide-react';
import { TechIcon } from './TechIcon';

const BENTO_CONFIG = {
  Frontend: {
    title: "Frontend & Mobile",
    description: "Reactive web apps, cross-platform mobile, and design systems",
    icon: Layout,
    span: "lg:col-span-2 md:col-span-2",
    accent: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 border-cyan-200/50 dark:border-cyan-800/40",
    glow: "bg-cyan-500/10",
    badge: "Primary Specialization",
    footerNote: "Specializing in React, React Native Expo, Zustand, and Tailwind CSS ecosystems."
  },
  Languages: {
    title: "Languages",
    description: "Strong typing, scripting, and backend paradigms",
    icon: Code2,
    span: "lg:col-span-1 md:col-span-1",
    accent: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200/50 dark:border-amber-800/40",
    glow: "bg-amber-500/10",
    badge: "Core Logic"
  },
  Backend: {
    title: "Backend & APIs",
    description: "Server architecture, RESTful routing, and ORM schemas",
    icon: Server,
    span: "lg:col-span-1 md:col-span-1",
    accent: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200/50 dark:border-emerald-800/40",
    glow: "bg-emerald-500/10",
    badge: "Server & Logic"
  },
  Databases: {
    title: "Databases & Storage",
    description: "Relational SQL models, offline SQLite, and cloud documents",
    icon: Database,
    span: "lg:col-span-1 md:col-span-1",
    accent: "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 border-sky-200/50 dark:border-sky-800/40",
    glow: "bg-sky-500/10",
    badge: "Persistence"
  },
  "DevOps & Tools": {
    title: "DevOps & Systems",
    description: "Containerization, Git workflows, build pipelines, and desktop tools",
    icon: Terminal,
    span: "lg:col-span-1 md:col-span-1",
    accent: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200/50 dark:border-indigo-800/40",
    glow: "bg-indigo-500/10",
    badge: "Toolchain"
  }
};

export const SkillsSection = ({ skills, onCopy, copiedField }) => {
  // Ensure ordered bento cards layout: Frontend (large), Languages, Backend, Databases, DevOps
  const orderedKeys = ['Frontend', 'Languages', 'Backend', 'Databases', 'DevOps & Tools'];
  
  // Also collect any unforeseen categories if present
  const allKeys = [
    ...orderedKeys.filter(k => skills[k]),
    ...Object.keys(skills).filter(k => !orderedKeys.includes(k))
  ];

  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <span>02 // Technologies & Stack</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Technical Competencies
              </h2>
              <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-1 max-w-2xl">
                Modern programming languages, frameworks, state systems, and databases I employ to engineer scalable applications.
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 text-xs font-mono border border-zinc-200/60 dark:border-zinc-700/60 shrink-0 self-start sm:self-auto">
              <Copy className="w-3.5 h-3.5 text-zinc-400" />
              <span>Click chip to copy</span>
            </div>
          </div>
        </div>

        {/* Bento Box Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allKeys.map((key) => {
            const items = skills[key] || [];
            const config = BENTO_CONFIG[key] || {
              title: key,
              description: "Specialized tools and software",
              icon: Terminal,
              span: "lg:col-span-1 md:col-span-1",
              accent: "text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800",
              glow: "bg-zinc-500/10",
              badge: "General"
            };

            const Icon = config.icon;

            return (
              <div
                key={key}
                className={`relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800/80 p-7 sm:p-8 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-zinc-950/80 group ${config.span}`}
              >
                {/* Ambient Bento Glow Effect */}
                <div 
                  className={`absolute -top-16 -right-16 w-44 h-44 rounded-full ${config.glow} blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
                />

                <div className="space-y-6 relative z-10">
                  {/* Bento Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
                    <div className="flex items-start gap-3.5">
                      <div className={`p-2.5 rounded-2xl border ${config.accent} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-zinc-950 dark:text-white tracking-tight flex items-center gap-2">
                          {config.title}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                          {config.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60">
                        {items.length} tools
                      </span>
                      {config.badge && (
                        <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                          {config.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bento Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {items.map((skill) => {
                      const isCopied = copiedField === skill;
                      return (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => onCopy(skill, skill)}
                          aria-label={`Copy ${skill}`}
                          className="group/chip inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800/70 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
                        >
                          <TechIcon name={skill} className="w-3.5 h-3.5 shrink-0" />
                          <span>{skill}</span>
                          {isCopied ? (
                            <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                          ) : (
                            <Copy className="w-3 h-3 text-zinc-400 opacity-0 group-hover/chip:opacity-100 transition-opacity shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Bento Footer Note for Large Cards */}
                {config.footerNote && (
                  <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono relative z-10">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span>{config.footerNote}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
