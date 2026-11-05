import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-2">
        <p>
          © 2025{' '}
          <a
            href="https://github.com/fathin-ishrak-romeo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Fathin Ishrak
          </a>{' '}
          — Built with and hosted on{' '}
          <a
            href="https://pages.github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-600 dark:text-blue-400"
          >
            GitHub Pages
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
