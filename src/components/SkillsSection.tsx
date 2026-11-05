import React from 'react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="section-skills"
      className="bg-white dark:bg-[#131923] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs scroll-mt-20 transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-5 rounded-full bg-blue-600 dark:bg-blue-500" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Skills
          </h2>
        </div>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          9 Categories
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((cat) => (
          <div
            key={cat.id}
            id={cat.id}
            className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#151c27]/60 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-white dark:hover:from-[#182338] dark:hover:to-[#131b26] hover:border-blue-300 dark:hover:border-blue-600/80 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ease-out"
          >
            <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2.5">
              {cat.name}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white dark:bg-[#1a2332] text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
