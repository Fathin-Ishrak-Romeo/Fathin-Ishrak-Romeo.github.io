import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Mail,
  Download,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Rocket,
  Code2,
  Briefcase,
  Layers,
} from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

interface ProfileSidebarProps {
  profile: ProfileInfo;
  onOpenAvatarModal: () => void;
  onOpenBannerModal: () => void;
  onOpenCV: () => void;
  onOpenGmailModal?: () => void;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  profile,
  onOpenAvatarModal,
  onOpenBannerModal,
  onOpenCV,
  onOpenGmailModal,
}) => {
  const [hasProfileImg, setHasProfileImg] = useState(false);
  const [hasBannerImg, setHasBannerImg] = useState(false);

  useEffect(() => {
    const imgProf = new Image();
    imgProf.src = 'profile.png';
    imgProf.onload = () => setHasProfileImg(true);
    imgProf.onerror = () => setHasProfileImg(false);

    const imgBan = new Image();
    imgBan.src = 'banner.png';
    imgBan.onload = () => setHasBannerImg(true);
    imgBan.onerror = () => setHasBannerImg(false);
  }, []);

  return (
    <aside className="w-full lg:w-[350px] shrink-0 space-y-5">
      {/* 1. Main Profile Card */}
      <div className="bg-white dark:bg-[#131923] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700">
        {/* Banner with non-clickable BRACU Alum badge */}
        <div
          onClick={onOpenBannerModal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onOpenBannerModal()}
          className="relative h-28 sm:h-32 w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 cursor-pointer group overflow-hidden"
          title="Click to view banner"
        >
          {hasBannerImg ? (
            <img
              src="banner.png"
              alt="Banner"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 group-hover:opacity-95 transition-opacity" />
          )}

          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />

          {/* BRACU Alum Badge (Fixed on top, graduation hat before text, non-clickable) */}
          <div
            className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 text-[11px] font-semibold shadow-sm backdrop-blur-xs border border-white/20 pointer-events-none select-none"
            aria-hidden="true"
          >
            <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>BRACU Alum</span>
          </div>
        </div>

        {/* Profile Content */}
        <div className="px-5 pb-5">
          {/* Avatar (Clickable to open modal) */}
          <div className="relative -mt-14 mb-3 flex items-end justify-between">
            <button
              type="button"
              onClick={onOpenAvatarModal}
              className="relative rounded-full p-1 bg-white dark:bg-[#131923] shadow-md group focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              title="Click to view profile picture"
            >
              {hasProfileImg ? (
                <img
                  src="profile.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white font-extrabold text-2xl tracking-wide group-hover:scale-105 transition-transform duration-200">
                  FI
                </div>
              )}
              <span className="sr-only">View full profile picture</span>
            </button>
          </div>

          {/* Name & Bio */}
          <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default select-text">
            {profile.name}
          </h1>
          <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {profile.bio}
          </p>

          {/* Location & Email */}
          <div className="mt-3.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors truncate"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* Social Links (GitHub, LinkedIn) */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
              <span className="text-[10px] text-slate-400">↗</span>
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/60 hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
              <span className="text-[10px] text-blue-400">↗</span>
            </a>
          </div>

          {/* Download CV Action Button */}
          <button
            type="button"
            onClick={onOpenCV}
            className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white hover:scale-102 hover:shadow-lg active:scale-98 transition-all duration-200 shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </button>
        </div>
      </div>

      {/* 2. PROFILE SNAPSHOT Card */}
      <div className="bg-white dark:bg-[#131923] rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700">
        <h2 className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
          Profile Snapshot
        </h2>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center divide-x divide-slate-100 dark:divide-slate-800/80">
          <div className="hover:bg-slate-50 dark:hover:bg-slate-800/50 p-1 rounded-xl transition-all duration-200 hover:scale-105 cursor-default">
            <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400">
              {profile.stats.projects}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
              Projects
            </div>
          </div>
          <div className="hover:bg-slate-50 dark:hover:bg-slate-800/50 p-1 rounded-xl transition-all duration-200 hover:scale-105 cursor-default">
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">
              {profile.stats.startup}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
              Startup
            </div>
          </div>
          <div className="hover:bg-slate-50 dark:hover:bg-slate-800/50 p-1 rounded-xl transition-all duration-200 hover:scale-105 cursor-default">
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">
              {profile.stats.skillSets}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
              Skill Sets
            </div>
          </div>
        </div>
      </div>

      {/* 3. Entrepreneurial Venture Card */}
      <div className="bg-white dark:bg-[#131923] rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs space-y-3 transition-all duration-300 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-800">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
          <Rocket className="w-3.5 h-3.5 text-blue-500" />
          <span>Entrepreneurial Venture</span>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">
            {profile.venture.name}
          </h2>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {profile.venture.description}
          </p>
        </div>

        {/* Social Badges with hover effects */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {profile.venture.socials.map((social) => {
            const socialLogos: Record<string, string> = {
              facebook: 'assets/social/facebook.png',
              instagram: 'assets/social/instagram.png',
              whatsapp: 'assets/social/whatsapp.png',
              gmail: 'assets/social/gmail.png',
              youtube: 'assets/social/youtube.png',
            };

            let badgeClass =
              'border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200';
            if (social.color === 'facebook') {
              badgeClass =
                'border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 hover:border-blue-400';
            } else if (social.color === 'instagram') {
              badgeClass =
                'border-pink-200 dark:border-pink-900 bg-pink-50/70 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 hover:border-pink-400';
            } else if (social.color === 'whatsapp') {
              badgeClass =
                'border-emerald-200 dark:border-emerald-900 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 hover:border-emerald-400';
            } else if (social.color === 'gmail' || social.color === 'youtube') {
              badgeClass =
                'border-red-200 dark:border-red-900 bg-red-50/70 dark:bg-red-950/40 text-red-600 dark:text-red-400 hover:border-red-400';
            }

            const logoSrc = socialLogos[social.color];
            const isGmail = social.color === 'gmail';

            if (isGmail) {
              return (
                <button
                  key={social.name}
                  type="button"
                  onClick={onOpenGmailModal}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-md active:scale-95 cursor-pointer shadow-2xs ${badgeClass}`}
                  title="Click to view email address"
                >
                  {logoSrc && (
                    <img
                      src={logoSrc}
                      alt={social.name}
                      className="w-4 h-4 object-contain shrink-0"
                    />
                  )}
                  <span>{social.name}</span>
                  <span className="text-[10px]">↗</span>
                </button>
              );
            }

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-md active:scale-95 shadow-2xs ${badgeClass}`}
              >
                {logoSrc && (
                  <img
                    src={logoSrc}
                    alt={social.name}
                    className="w-4 h-4 object-contain shrink-0"
                  />
                )}
                <span>{social.name}</span>
                <span className="text-[10px]">↗</span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
