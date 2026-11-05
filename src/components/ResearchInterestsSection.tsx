import React from 'react';
import { researchInterestsData } from '../data/portfolioData';

export const ResearchInterestsSection: React.FC = () => {
  return (
    <section
      id="section-research-interests"
      className="bg-white dark:bg-[#131923] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs scroll-mt-20 transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
    >
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-1.5 h-5 rounded-full bg-blue-600 dark:bg-blue-500" />
        <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          Research Interests
        </h2>
      </div>

      <div className="space-y-4">
        {/* Recent Research */}
        <div>
          <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
            Recent Research:
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {researchInterestsData.recentResearch}
          </p>
        </div>

        {/* Other Interests */}
        <div className="pt-2">
          <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2.5">
            Other Interests:
          </h3>
          <div className="flex flex-wrap gap-2">
            {researchInterestsData.topics.map((topic) => (
              <span
                key={topic}
                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-[#18212e] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
