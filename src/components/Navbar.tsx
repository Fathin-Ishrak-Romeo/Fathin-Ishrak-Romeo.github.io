import React, { useState, useRef, useEffect } from 'react';
import { Search, Moon, Sun, ChevronDown, Menu, X, ArrowUpRight, FolderGit2, Briefcase, GraduationCap, Wrench } from 'lucide-react';
import { SearchMatch, ProjectCategory } from '../types/portfolio';
import { searchPortfolio } from '../utils/search';
import {
  projectsList,
  experienceList,
  educationList,
  skillCategories,
  researchInterestsData,
} from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenMobileMenu: () => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  categoryCounts: Record<string, number>;
}

// Blue Highlighter component to track exact keywords inside search results
export const HighlightKeyword: React.FC<{ text: string; query: string; className?: string }> = ({
  text,
  query,
  className = '',
}) => {
  if (!query || !query.trim() || !text) {
    return <span className={className}>{text}</span>;
  }
  const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.toLowerCase() === query.trim().toLowerCase() ? (
          <mark
            key={i}
            className="bg-blue-600/20 text-blue-600 dark:bg-blue-400/30 dark:text-blue-300 font-bold px-1 py-0.5 rounded-sm ring-1 ring-blue-500/40"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenMobileMenu,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [hasProfileImg, setHasProfileImg] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const projectsDropdownRef = useRef<HTMLDivElement>(null);

  // Probe profile.png so header logo automatically displays profile pic when uploaded
  useEffect(() => {
    const imgProf = new Image();
    imgProf.src = 'profile.png';
    imgProf.onload = () => setHasProfileImg(true);
    imgProf.onerror = () => setHasProfileImg(false);
  }, []);

  const searchResults: SearchMatch[] = searchQuery.trim()
    ? searchPortfolio(searchQuery, {
        projects: projectsList,
        experiences: experienceList,
        educations: educationList,
        skills: skillCategories,
        researchTopics: researchInterestsData.topics,
      })
    : [];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
      if (
        projectsDropdownRef.current &&
        !projectsDropdownRef.current.contains(e.target as Node)
      ) {
        setIsProjectsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectSearchResult = (match: SearchMatch) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    if (match.projectCategory) {
      onSelectCategory(match.projectCategory);
    }
    const elem = document.getElementById(match.targetElementId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      elem.classList.add('ring-4', 'ring-blue-500', 'bg-blue-50/60', 'dark:bg-blue-950/40', 'transition-all', 'duration-500');
      setTimeout(() => {
        elem.classList.remove('ring-4', 'ring-blue-500', 'bg-blue-50/60', 'dark:bg-blue-950/40');
      }, 2500);
    }
  };

  const projectCategories: { label: string; value: string; count: number; icon: string }[] = [
    { label: 'All', value: 'All', count: categoryCounts['All'] || 20, icon: 'all' },
    { label: 'Research', value: 'Research', count: categoryCounts['Research'] || 2, icon: 'research' },
    { label: 'Software', value: 'Software & Web Development', count: categoryCounts['Software & Web Development'] || 4, icon: 'software' },
    { label: 'Game Development', value: 'Game Development', count: categoryCounts['Game Development'] || 2, icon: 'game' },
    { label: 'Robotics & IoT', value: 'Robotics & IoT', count: categoryCounts['Robotics & IoT'] || 8, icon: 'robotics' },
    { label: 'Digital Logic Design', value: 'Digital Logic Design', count: categoryCounts['Digital Logic Design'] || 4, icon: 'logic' },
  ];

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors duration-200 bg-white/95 dark:bg-[#131923]/95 border-slate-200 dark:border-slate-800 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Left: Brand Monogram & Name */}
        <div className="flex items-center gap-3">
          {/* Mobile menu hamburger toggle - Visible on tablet, mobile, and any screen under xl */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Open navigation menu"
            className="xl:hidden flex items-center justify-center p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>

          <a href="#" className="flex items-center gap-2.5 group">
            {hasProfileImg ? (
              <img
                src="profile.png"
                alt="Profile"
                className="w-9 h-9 rounded-xl object-cover shadow-sm group-hover:scale-105 group-hover:ring-2 group-hover:ring-blue-500 transition-all duration-200"
              />
            ) : (
              <div className="w-9 h-9 rounded-xl bg-blue-600 dark:bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 group-hover:ring-2 group-hover:ring-blue-400 transition-all duration-200">
                FI
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Fathin Ishrak
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Portfolio &amp; CV
              </span>
            </div>
          </a>
        </div>

        {/* Center-Left: Global Search Input with hover effect */}
        <div ref={searchContainerRef} className="relative flex-1 max-w-xs sm:max-w-sm">
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              placeholder="Search entire site..."
              aria-label="Search entire site"
              className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm rounded-full border border-slate-200 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-900/80 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 hover:border-blue-400 dark:hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-900 hover:shadow-xs transition-all duration-200"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:scale-110 active:scale-95 transition-transform"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Search Results Dropdown with Blue Highlighter */}
          {isSearchOpen && searchQuery.trim() && (
            <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-[#151c28] border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-xl overflow-hidden z-50 max-h-96 overflow-y-auto">
              <div className="px-3.5 py-2 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-50/70 dark:bg-slate-900/70">
                <span>MATCHES ACROSS PORTFOLIO</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">Click to jump</span>
              </div>

              {searchResults.length === 0 ? (
                <div className="p-4 text-center text-xs text-slate-500 dark:text-slate-400">
                  No matching results found for "{searchQuery}".
                </div>
              ) : (
                <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
                  {searchResults.map((item) => (
                    <button
                      key={`${item.section}-${item.id}`}
                      type="button"
                      onClick={() => handleSelectSearchResult(item)}
                      className="w-full text-left p-3 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="mt-0.5 text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                        {item.section === 'PROJECTS' && <FolderGit2 className="w-4 h-4" />}
                        {item.section === 'EXPERIENCE' && <Briefcase className="w-4 h-4" />}
                        {item.section === 'EDUCATION' && <GraduationCap className="w-4 h-4" />}
                        {item.section === 'SKILLS' && <Wrench className="w-4 h-4" />}
                        {item.section === 'RESEARCH' && <ArrowUpRight className="w-4 h-4" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded">
                            {item.section}
                          </span>
                          {item.category && (
                            <span className="text-[10px] text-slate-500 dark:text-slate-400">
                              • {item.category}
                            </span>
                          )}
                        </div>
                        <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate mt-0.5">
                          <HighlightKeyword text={item.title} query={searchQuery} />
                        </p>
                        {item.subtitle && (
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            <HighlightKeyword text={item.subtitle} query={searchQuery} />
                          </p>
                        )}
                        {item.snippet && (
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 italic">
                            <HighlightKeyword text={item.snippet} query={searchQuery} />
                          </p>
                        )}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.tags.slice(0, 4).map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                              >
                                <HighlightKeyword text={tag} query={searchQuery} />
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Center-Right: Navigation Links (Desktop: hidden on tablet and smaller screens) */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
          <button
            type="button"
            onClick={() => handleNavClick('section-about')}
            className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:scale-105 active:scale-95 rounded-lg transition-all duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('section-education')}
            className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:scale-105 active:scale-95 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Education
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('section-experience')}
            className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:scale-105 active:scale-95 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Experience
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('section-skills')}
            className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:scale-105 active:scale-95 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('section-current-work')}
            className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:scale-105 active:scale-95 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Current Work
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('section-research-interests')}
            className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:scale-105 active:scale-95 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Research Interests
          </button>

          {/* Projects with Dropdown */}
          <div ref={projectsDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:scale-105 active:scale-95 rounded-lg transition-all duration-200 cursor-pointer"
            >
              <span>Projects</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
            </button>

            {isProjectsDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#151c28] border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between bg-slate-50/70 dark:bg-slate-900/70">
                  <span>FILTER PROJECTS</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Click to jump</span>
                </div>
                <div className="p-1 space-y-0.5">
                  {projectCategories.map((cat) => {
                    const isSelected = selectedCategory === cat.value;
                    return (
                      <button
                        key={cat.value}
                        type="button"
                        onClick={() => {
                          onSelectCategory(cat.value);
                          setIsProjectsDropdownOpen(false);
                          handleNavClick('section-projects');
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold shadow-xs'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <FolderGit2 className="w-3.5 h-3.5 text-blue-500" />
                          <span>{cat.label}</span>
                        </span>
                        <span
                          className={`text-[11px] px-1.5 py-0.2 rounded-full font-medium ${
                            isSelected
                              ? 'bg-blue-200 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          ({cat.count})
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right: Dark / Light Mode Switch with Hover Effects */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-xs"
          >
            {darkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-slate-600" />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
