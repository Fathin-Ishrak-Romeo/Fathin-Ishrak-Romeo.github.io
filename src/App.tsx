import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { MobileDrawer } from './components/MobileDrawer';
import { ProfileSidebar } from './components/ProfileSidebar';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { CurrentWorkSection } from './components/CurrentWorkSection';
import { ResearchInterestsSection } from './components/ResearchInterestsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { ImageModal, CVModal, CVUnavailableModal } from './components/Modals';
import { GmailModal } from './components/GmailModal';
import { profileData, projectsList } from './data/portfolioData';
import { filterProjects, getCategoryCounts } from './utils/filter';
import { useStickySidebar } from './hooks/useStickySidebar';

export default function App() {
  // Theme state: defaults to light mode as initial frame of video, with persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return false; // Default light mode matching video start
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isCVUnavailableOpen, setIsCVUnavailableOpen] = useState(false);
  const [isGmailModalOpen, setIsGmailModalOpen] = useState(false);

  // Download CV handler: attempts to download fathin_ishrak_cv.pdf, shows modal if not yet uploaded
  const handleDownloadCV = async () => {
    try {
      const res = await fetch('fathin_ishrak_cv.pdf', { method: 'HEAD' });
      const contentType = res.headers.get('content-type') || '';
      if (res.ok && (contentType.includes('pdf') || (!contentType.includes('html') && res.status === 200))) {
        const link = document.createElement('a');
        link.href = 'fathin_ishrak_cv.pdf';
        link.download = 'fathin_ishrak_cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setIsCVUnavailableOpen(true);
      }
    } catch {
      setIsCVUnavailableOpen(true);
    }
  };

  // Two-way sticky sidebar hook: stops at bottom when scrolling down, stops at top when scrolling up
  const sidebarRef = useStickySidebar({ topOffset: 84, bottomOffset: 24 });

  // Sync dark class on document root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  const categoryCounts = useMemo(() => getCategoryCounts(projectsList), []);

  const displayedProjects = useMemo(() => {
    return filterProjects(projectsList, selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#f1f5f9] dark:bg-[#0c1017] text-slate-800 dark:text-slate-100 transition-colors duration-200 antialiased selection:bg-blue-600 selection:text-white">
      {/* Top Fixed / Sticky Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categoryCounts={categoryCounts}
      />

      {/* Mobile Slide-out Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categoryCounts={categoryCounts}
        onOpenCV={handleDownloadCV}
      />

      {/* Main Page Layout Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-8">
          {/* Left Column: Profile Card, Stats & Startup Card with two-way sticky scrolling */}
          <div className="w-full lg:w-[350px] shrink-0 relative">
            <div ref={sidebarRef} className="w-full">
              <ProfileSidebar
                profile={profileData}
                onOpenAvatarModal={() => setIsAvatarModalOpen(true)}
                onOpenBannerModal={() => setIsBannerModalOpen(true)}
                onOpenCV={handleDownloadCV}
                onOpenGmailModal={() => setIsGmailModalOpen(true)}
              />
            </div>
          </div>

          {/* Right Column: Scrollable Content Sections */}
          <div className="flex-1 min-w-0 w-full space-y-6">
            <AboutSection />
            <EducationSection />
            <ExperienceSection onOpenGmailModal={() => setIsGmailModalOpen(true)} />
            <SkillsSection />
            <CurrentWorkSection />
            <ResearchInterestsSection />
            <ProjectsSection
              projects={displayedProjects}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              categoryCounts={categoryCounts}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox / Modals */}
      <ImageModal
        isOpen={isAvatarModalOpen}
        onClose={() => setIsAvatarModalOpen(false)}
        title="Profile Picture"
        type="avatar"
      />

      <ImageModal
        isOpen={isBannerModalOpen}
        onClose={() => setIsBannerModalOpen(false)}
        title="Banner Photo"
        type="banner"
      />

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      <CVUnavailableModal
        isOpen={isCVUnavailableOpen}
        onClose={() => setIsCVUnavailableOpen(false)}
      />

      <GmailModal
        isOpen={isGmailModalOpen}
        onClose={() => setIsGmailModalOpen(false)}
      />
    </div>
  );
}
