import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TechIcon } from './TechIcon';

const ProjectLogo = ({ projectId }) => {
  if (projectId === 'saulado') {
    return (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/80 p-1.5 flex items-center justify-center shadow-md shadow-emerald-500/10 overflow-hidden shrink-0">
        <img
          src="/saulado-logo.png"
          alt="Saulado App Logo"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  if (projectId === 'mapos-catering') {
    return (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/80 p-1.5 flex items-center justify-center shadow-md shadow-orange-500/10 overflow-hidden shrink-0">
        <img
          src="/mapos-logo.png"
          alt="Mapos Catering Logo"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // virtu-gallery
  return (
    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-zinc-950 dark:bg-zinc-900 border border-amber-500/30 p-1 flex items-center justify-center shadow-md shadow-amber-500/10 overflow-hidden shrink-0">
      <img
        src="/virtu-logo.svg"
        alt="Virtu Gallery Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="py-12 sm:py-16 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Featured Projects
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-zinc-500 dark:text-zinc-400 mt-1 max-w-2xl">
                A selection of production-grade systems, cross-platform apps, and full-stack architectures.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-400 self-start sm:self-auto">
              {projects.length} Systems Shipped
            </span>
          </div>
        </div>

        {/* Responsive Project Cards Grid: 
            Mobile (<768px): 1 col
            Tablet (768px-1023px): 2 cols, with 1st card spanning 2 cols for complete balance (no orphan card)
            Desktop (>=1024px): 3 cols evenly balanced
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 xl:gap-8 items-stretch">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => {
                if (project.links?.live) {
                  window.open(project.links.live, '_blank', 'noopener,noreferrer');
                }
              }}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && project.links?.live) {
                  e.preventDefault();
                  window.open(project.links.live, '_blank', 'noopener,noreferrer');
                }
              }}
              tabIndex={0}
              role="link"
              aria-label={`Open ${project.title} live website in a new tab`}
              className={`group flex flex-col justify-between rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800/80 p-5 sm:p-6 md:p-7 xl:p-8 hover:border-zinc-400/80 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-zinc-950/80 hover:-translate-y-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50 h-full ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1' : 'md:col-span-1'
              }`}
            >
              {/* Card Top Details */}
              <div className="space-y-4 flex-1">
                
                {/* Clean Logo Header */}
                <div className="flex items-center justify-between">
                  <ProjectLogo projectId={project.id} />
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60">
                    {project.year}
                  </span>
                </div>

                {/* Title & Role */}
                <div className="pt-1">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {project.subtitle}
                  </p>
                  <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1 font-mono">
                    {project.role}
                  </p>
                </div>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Implementation Highlights */}
                <div className="bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl p-3.5 sm:p-4 border border-zinc-200/60 dark:border-zinc-850 space-y-2">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block">
                    Key Contributions
                  </span>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                    {project.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech Stack with Icons & Action Link */}
              <div className="pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-zinc-100 dark:border-zinc-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2 pt-1 border-t border-zinc-100/60 dark:border-zinc-800/40">
                  <span 
                    className="text-[11px] sm:text-xs font-mono text-zinc-400 dark:text-zinc-500 truncate"
                    title={project.stats}
                  >
                    {project.stats}
                  </span>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all group/btn cursor-pointer shrink-0 whitespace-nowrap shadow-2xs hover:shadow-xs active:scale-95"
                  >
                    <span>Visit Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 shrink-0" />
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
