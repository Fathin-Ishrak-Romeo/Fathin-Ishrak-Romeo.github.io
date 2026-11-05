import React from 'react';
import { aboutParagraphs } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="section-about"
      className="bg-white dark:bg-[#131923] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs scroll-mt-20 transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-1.5 h-5 rounded-full bg-blue-600 dark:bg-blue-500" />
        <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          About
        </h2>
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
        <p>{aboutParagraphs[0]}</p>
        <p>
          Beyond academics, I founded{' '}
          <strong className="text-slate-900 dark:text-white font-semibold">
            RoboKit Garage
          </strong>
          , a robotics-focused startup that has grown into a profitable venture
          through the development and delivery of innovative robotics and IoT solutions.
          This entrepreneurial experience has strengthened my skills in product
          development, project management, client collaboration, and transforming
          technical ideas into market-ready products.
        </p>
        <p>{aboutParagraphs[2]}</p>
        <p>{aboutParagraphs[3]}</p>
      </div>
    </section>
  );
};
