import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TechIcon } from './TechIcon';

const ProjectLogo = ({ projectId }) => {
  if (projectId === 'saulado') {
    return (
      <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/80 p-1.5 flex items-center justify-center shadow-md shadow-emerald-500/10 overflow-hidden shrink-0">
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
      <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/80 p-1.5 flex items-center justify-center shadow-md shadow-orange-500/10 overflow-hidden shrink-0">
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
    <div className="w-12 h-12 rounded-2xl bg-zinc-950 dark:bg-zinc-900 border border-amber-500/30 p-1 flex items-center justify-center shadow-md shadow-amber-500/10 overflow-hidden shrink-0">
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
    <section id="projects" className="py-16 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <span>01 // Selected Work</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Featured Projects
              </h2>
              <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-1 max-w-2xl">
                A selection of production-grade systems, cross-platform apps, and full-stack architectures.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              {projects.length} Systems Shipped
            </span>
          </div>
        </div>

        {/* Project Cards Grid (Full-Width Responsive 3-Column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
              className="group flex flex-col justify-between rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800/80 p-7 sm:p-8 hover:border-zinc-400/80 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-zinc-950/80 hover:-translate-y-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            >
              {/* Card Top Details */}
              <div className="space-y-4">
                
                {/* Clean Logo Header (AI-slop tags removed) */}
                <div className="flex items-center justify-between">
                  <ProjectLogo projectId={project.id} />
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60">
                    {project.year}
                  </span>
                </div>

                {/* Title & Role */}
                <div className="pt-1">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {project.subtitle}
                  </p>
                  <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1 font-mono">
                    {project.role}
                  </p>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Implementation Highlights */}
                <div className="bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl p-4 border border-zinc-200/60 dark:border-zinc-850 space-y-2">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block">
                    Key Contributions
                  </span>
                  <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                    {project.points.slice(0, 2).map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech Stack with Icons & Action Link */}
              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-mono text-zinc-400">
                    {project.stats}
                  </span>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all group/btn cursor-pointer"
                  >
                    <span>Visit Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
