import React from 'react';
import { currentWorkData } from '../data/portfolioData';

export const CurrentWorkSection: React.FC = () => {
  return (
    <section
      id="section-current-work"
      className="bg-white dark:bg-[#131923] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs scroll-mt-20 transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-5 rounded-full bg-blue-600 dark:bg-blue-500" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            {currentWorkData.title}
          </h2>
        </div>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
          {currentWorkData.status}
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
        Currently developing an{' '}
        <strong className="text-slate-900 dark:text-white font-semibold">
          AI-integrated humanoid robot
        </strong>{' '}
        capable of autonomous movement, gesture-based interaction (e.g., hand greetings),
        and engaging in basic conversational exchanges. The system leverages AI to
        respond to user queries and address intellectually oriented questions,
        demonstrating applications in human-robot interaction and intelligent
        assistance.
      </p>
    </section>
  );
};
