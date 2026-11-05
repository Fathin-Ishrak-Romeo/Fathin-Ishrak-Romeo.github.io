import React from 'react';
import { GraduationCap } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="section-education"
      className="bg-white dark:bg-[#131923] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs scroll-mt-20 transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 active:shadow-md active:border-slate-300 dark:active:border-slate-700"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-5 rounded-full bg-blue-600 dark:bg-blue-500" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Educational Qualification
          </h2>
        </div>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          3 Institutions
        </span>
      </div>

      <div className="space-y-4">
        {educationList.map((edu) => (
          <div
            key={edu.id}
            id={edu.id}
            className="group flex items-start gap-4 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#151c27]/60 hover:bg-gradient-to-r hover:from-blue-50/90 hover:via-indigo-50/40 hover:to-white dark:hover:from-[#182338] dark:hover:via-[#161f30] dark:hover:to-[#131b26] hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg active:bg-gradient-to-r active:from-blue-50/90 active:via-indigo-50/40 active:to-white dark:active:from-[#182338] dark:active:via-[#161f30] dark:active:to-[#131b26] active:border-blue-400 dark:active:border-blue-500 active:-translate-y-1 active:shadow-lg transition-all duration-300 ease-out cursor-default"
          >
            {/* Institution Crest */}
            <div className="shrink-0 mt-0.5 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
              {edu.crestType === 'bracu' && (
                <img
                  src="./bracu.png"
                  alt="BRAC University"
                  className="w-11 h-11 rounded-xl object-contain bg-white p-1 border border-blue-200 dark:border-blue-900/60 shadow-xs"
                />
              )}
              {edu.crestType === 'college' && (
                <img
                  src="./bmarpc.png"
                  alt="Birshreshtha Munshi Abdur Rouf Public College"
                  className="w-11 h-11 rounded-xl object-contain bg-white p-1 border border-amber-200 dark:border-amber-900/60 shadow-xs"
                />
              )}
              {edu.crestType === 'school' && (
                <img
                  src="./pgjhs.png"
                  alt="Patuakhali Govt. Jubilee High School"
                  className="w-11 h-11 rounded-xl object-contain bg-white p-1 border border-emerald-200 dark:border-emerald-900/60 shadow-xs"
                />
              )}
            </div>

            {/* Institution Info with Interchanging Colors */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 group-active:text-blue-600 dark:group-active:text-blue-400 transition-colors leading-snug">
                {edu.degree}
              </h3>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:text-slate-900 dark:group-hover:text-white group-active:text-slate-900 dark:group-active:text-white transition-colors mt-0.5">
                {edu.institution}
              </p>
              <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
                <span className="inline-flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Year : {edu.year}</span>
                </span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium group-hover:bg-white/80 dark:group-hover:bg-slate-700 group-active:bg-white/80 dark:group-active:bg-slate-700 transition-colors">
                  {edu.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
