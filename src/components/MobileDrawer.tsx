import React, { useState } from 'react';
import { X, ChevronRight, ChevronDown, Download, Moon, Sun, FolderGit2 } from 'lucide-react';
import { ProjectCategory } from '../types/portfolio';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  categoryCounts: Record<string, number>;
  onOpenCV: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  darkMode,
  setDarkMode,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  onOpenCV,
}) => {
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(true);
  const [hasProfileImg, setHasProfileImg] = useState(false);

  React.useEffect(() => {
    const imgProf = new Image();
    imgProf.src = 'profile.png';
    imgProf.onload = () => setHasProfileImg(true);
    imgProf.onerror = () => setHasProfileImg(false);
  }, []);

  if (!isOpen) return null;

  const navItems = [
    { label: 'About', target: 'section-about' },
    { label: 'Education', target: 'section-education' },
    { label: 'Experience', target: 'section-experience' },
    { label: 'Skills', target: 'section-skills' },
    { label: 'Current Work', target: 'section-current-work' },
    { label: 'Research Interests', target: 'section-research-interests' },
  ];

  const projectCategories = [
    { label: 'All', value: 'All', count: categoryCounts['All'] || 20 },
    { label: 'Research', value: 'Research', count: categoryCounts['Research'] || 2 },
    { label: 'Software', value: 'Software & Web Development', count: categoryCounts['Software & Web Development'] || 4 },
    { label: 'Game Development', value: 'Game Development', count: categoryCounts['Game Development'] || 2 },
    { label: 'Robotics & IoT', value: 'Robotics & IoT', count: categoryCounts['Robotics & IoT'] || 8 },
    { label: 'Digital Logic Design', value: 'Digital Logic Design', count: categoryCounts['Digital Logic Design'] || 4 },
  ];

  const handleNavTo = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleSelectProj = (catValue: string) => {
    onSelectCategory(catValue);
    handleNavTo('section-projects');
  };

  return (
    <div className="fixed inset-0 z-50 flex xl:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-xs bg-white dark:bg-[#111722] text-slate-900 dark:text-white h-full shadow-2xl flex flex-col z-50 overflow-y-auto border-r border-slate-200 dark:border-slate-800 animate-in slide-in-from-left duration-200">
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-2.5">
            {hasProfileImg ? (
              <img
                src="profile.png"
                alt="Profile"
                className="w-8 h-8 rounded-lg object-cover shadow-xs"
              />
            ) : (
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                FI
              </div>
            )}
            <div>
              <h2 className="text-sm font-bold leading-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Fathin Ishrak
              </h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Portfolio &amp; CV</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 px-3 py-4 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500">
            Navigation Menu
          </div>

          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleNavTo(item.target)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors text-left"
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}

          {/* Projects expandable group */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span>Projects</span>
                <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold">
                  20
                </span>
              </div>
              {isProjectsExpanded ? (
                <ChevronDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              )}
            </button>

            {isProjectsExpanded && (
              <div className="pl-4 pr-1 py-1 space-y-1">
                {projectCategories.map((cat) => {
                  const isSelected = selectedCategory === cat.value;
                  return (
                    <button
                      key={cat.value}
                      type="button"
                      onClick={() => handleSelectProj(cat.value)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors text-left ${
                        isSelected
                          ? 'bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 font-bold'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <FolderGit2 className="w-3.5 h-3.5 text-blue-500" />
                        <span>{cat.label}</span>
                      </span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                        ({cat.count})
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2 bg-slate-50/50 dark:bg-[#0e141e]/50">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-102 active:scale-98 transition-all cursor-pointer shadow-xs"
          >
            {darkMode ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Switch to Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-slate-600" />
                <span>Switch to Dark Mode</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenCV();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white hover:scale-102 hover:shadow-lg active:scale-98 transition-all duration-200 shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
