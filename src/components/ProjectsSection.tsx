import React from 'react';
import {
  ExternalLink,
  FlaskConical,
  Code,
  Gamepad2,
  Cpu,
  Binary,
  Layers,
} from 'lucide-react';
import { Project, ProjectCategory } from '../types/portfolio';

interface ProjectsSectionProps {
  projects: Project[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  categoryCounts: Record<string, number>;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  const filterTabs = [
    { label: 'All', value: 'All', count: categoryCounts['All'] || 20 },
    { label: 'Research', value: 'Research', count: categoryCounts['Research'] || 2 },
    {
      label: 'Software & Web Development',
      value: 'Software & Web Development',
      count: categoryCounts['Software & Web Development'] || 4,
    },
    {
      label: 'Game Development',
      value: 'Game Development',
      count: categoryCounts['Game Development'] || 2,
    },
    {
      label: 'Robotics & IoT',
      value: 'Robotics & IoT',
      count: categoryCounts['Robotics & IoT'] || 8,
    },
    {
      label: 'Digital Logic Design',
      value: 'Digital Logic Design',
      count: categoryCounts['Digital Logic Design'] || 4,
    },
  ];

  const categoryHeaders: Record<
    ProjectCategory,
    { title: string; count: number; icon: React.ReactNode; color: string; badgeColor: string }
  > = {
    Research: {
      title: 'Research',
      count: 2,
      icon: <FlaskConical className="w-5 h-5" />,
      color: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-900',
      badgeColor: 'bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300',
    },
    'Software & Web Development': {
      title: 'Software & Web Development',
      count: 4,
      icon: <Code className="w-5 h-5" />,
      color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900',
      badgeColor: 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300',
    },
    'Game Development': {
      title: 'Game Development',
      count: 2,
      icon: <Gamepad2 className="w-5 h-5" />,
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900',
      badgeColor: 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300',
    },
    'Robotics & IoT': {
      title: 'Robotics & IoT',
      count: 8,
      icon: <Cpu className="w-5 h-5" />,
      color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900',
      badgeColor: 'bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300',
    },
    'Digital Logic Design': {
      title: 'Digital Logic Design',
      count: 4,
      icon: <Binary className="w-5 h-5" />,
      color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-900',
      badgeColor: 'bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300',
    },
  };

  // Group displayed projects by category
  const categoriesToRender: ProjectCategory[] =
    selectedCategory === 'All'
      ? [
          'Research',
          'Software & Web Development',
          'Game Development',
          'Robotics & IoT',
          'Digital Logic Design',
        ]
      : [selectedCategory as ProjectCategory];

  return (
    <section
      id="section-projects"
      className="bg-white dark:bg-[#131923] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs scroll-mt-20 transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 space-y-6"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-5 rounded-full bg-blue-600 dark:bg-blue-500" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Projects
          </h2>
        </div>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          {projects.length} Showing
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {filterTabs.map((tab) => {
          const isSelected = selectedCategory === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => onSelectCategory(tab.value)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-xs scale-105'
                  : 'bg-slate-100 dark:bg-[#18212e] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-transparent hover:scale-105'
              }`}
            >
              <span>{tab.label}</span>{' '}
              <span className={`text-[11px] ${isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                ({tab.count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects List Rendered by Category */}
      <div className="space-y-8 pt-2">
        {categoriesToRender.map((catKey) => {
          const catInfo = categoryHeaders[catKey];
          const catProjects = projects.filter((p) => p.category === catKey);

          if (catProjects.length === 0) return null;

          return (
            <div key={catKey} className="space-y-4">
              {/* Category Header Banner */}
              <div
                className={`flex items-center justify-between p-3.5 rounded-xl border ${catInfo.color} transition-all duration-300 hover:shadow-xs`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded-lg bg-white/80 dark:bg-slate-900/80 shadow-2xs">
                    {catInfo.icon}
                  </div>
                  <h3 className="text-sm font-bold tracking-tight">
                    {catInfo.title}
                  </h3>
                </div>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${catInfo.badgeColor}`}
                >
                  {catProjects.length} Projects
                </span>
              </div>

              {/* Project Cards inside this category */}
              <div className="space-y-4">
                {catProjects.map((project) => (
                  <div
                    key={project.id}
                    id={project.id}
                    className="group p-5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-[#151c27]/60 hover:bg-gradient-to-r hover:from-blue-50/90 hover:via-indigo-50/30 hover:to-white dark:hover:from-[#182338] dark:hover:via-[#171f2e] dark:hover:to-[#131b26] hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-1 hover:shadow-xl active:bg-gradient-to-r active:from-blue-50/90 active:via-indigo-50/30 active:to-white dark:active:from-[#182338] dark:active:via-[#171f2e] dark:active:to-[#131b26] active:border-blue-400 dark:active:border-blue-500 active:-translate-y-1 active:shadow-xl transition-all duration-300 ease-out cursor-default"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 group-active:text-blue-600 dark:group-active:text-blue-400 transition-colors leading-snug">
                          {project.title}
                        </h4>
                        <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* GitHub Link Button with accurate black/white GitHub mark */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-200 shadow-2xs group/btn shrink-0 cursor-pointer"
                        >
                          {/* Accurate GitHub Icon: Black in light mode, white in dark mode */}
                          <svg
                            className="w-4 h-4 fill-[#181717] dark:fill-white text-[#181717] dark:text-white group-hover/btn:scale-110 transition-transform"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          <span className="text-blue-600 dark:text-blue-400">GitHub Link</span>
                          <span className="text-[10px] text-blue-500 dark:text-blue-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">↗</span>
                        </a>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-white dark:bg-[#1a2332] text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs group-hover:border-blue-300 dark:group-hover:border-blue-800 group-active:border-blue-300 dark:group-active:border-blue-800 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
