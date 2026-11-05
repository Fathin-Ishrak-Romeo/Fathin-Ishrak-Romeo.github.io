import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experienceList } from '../data/portfolioData';

interface ExperienceSectionProps {
  onOpenGmailModal?: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onOpenGmailModal,
}) => {
  const socialLogos: Record<string, string> = {
    facebook: 'assets/social/facebook.png',
    instagram: 'assets/social/instagram.png',
    whatsapp: 'assets/social/whatsapp.png',
    gmail: 'assets/social/gmail.png',
    youtube: 'assets/social/youtube.png',
  };

  return (
    <section
      id="section-experience"
      className="bg-white dark:bg-[#131923] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs scroll-mt-20 transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 active:shadow-md active:border-slate-300 dark:active:border-slate-700"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-5 rounded-full bg-blue-600 dark:bg-blue-500" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Experience
          </h2>
        </div>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          2 Positions
        </span>
      </div>

      <div className="space-y-6">
        {experienceList.map((exp) => (
          <div
            key={exp.id}
            id={exp.id}
            className="group flex items-start gap-4 p-5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#151c27]/60 hover:bg-gradient-to-r hover:from-blue-50/90 hover:via-sky-50/40 hover:to-white dark:hover:from-[#182338] dark:hover:via-[#152332] dark:hover:to-[#131b26] hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg active:bg-gradient-to-r active:from-blue-50/90 active:via-sky-50/40 active:to-white dark:active:from-[#182338] dark:active:via-[#152332] dark:active:to-[#131b26] active:border-blue-400 dark:active:border-blue-500 active:-translate-y-1 active:shadow-lg transition-all duration-300 ease-out cursor-default"
          >
            {/* Logo Placeholder */}
            <div className="shrink-0 mt-0.5 group-hover:scale-105 group-active:scale-105 transition-transform duration-300">
              {exp.logoType === 'skf' ? (
                <img
                  src="./skf.png"
                  alt="SK+F"
                  className="w-11 h-11 rounded-xl object-contain bg-white p-1 border border-blue-200 dark:border-blue-900 shadow-xs"
                />
              ) : (
                <img
                  src="./robokit.png"
                  alt="RoboKit Garage"
                  className="w-11 h-11 rounded-xl object-contain bg-white p-1 border border-slate-700 shadow-xs"
                />
              )}
            </div>

            {/* Content with Interchanging Colors on Hover/Touch */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 group-active:text-blue-600 dark:group-active:text-blue-400 transition-colors leading-snug">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:text-slate-900 dark:group-hover:text-white group-active:text-slate-900 dark:group-active:text-white transition-colors mt-0.5">
                    {exp.company}
                  </div>
                </div>
              </div>

              {/* Metadata tags */}
              <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
                <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {exp.period}
                </span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium group-hover:bg-white/80 dark:group-hover:bg-slate-700 group-active:bg-white/80 dark:group-active:bg-slate-700 transition-colors">
                  {exp.employmentType}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {exp.location}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {exp.description}
              </p>

              {/* Social links with uniform logos & Gmail popup */}
              {exp.socialLinks && (
                <div className="flex flex-wrap gap-2 mt-3.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
                  {exp.socialLinks.map((s) => {
                    let badgeClass =
                      'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200';
                    if (s.color === 'facebook') {
                      badgeClass =
                        'border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400';
                    } else if (s.color === 'instagram') {
                      badgeClass =
                        'border-pink-200 dark:border-pink-900 bg-pink-50/70 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400';
                    } else if (s.color === 'whatsapp') {
                      badgeClass =
                        'border-emerald-200 dark:border-emerald-900 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400';
                    } else if (s.color === 'gmail' || s.color === 'youtube') {
                      badgeClass =
                        'border-red-200 dark:border-red-900 bg-red-50/70 dark:bg-red-950/40 text-red-600 dark:text-red-400';
                    }

                    const logoSrc = socialLogos[s.color];
                    const isGmail = s.color === 'gmail';

                    if (isGmail) {
                      return (
                        <button
                          key={s.name}
                          type="button"
                          onClick={onOpenGmailModal}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-transform hover:scale-105 active:scale-95 cursor-pointer ${badgeClass}`}
                          title="Click to view email address"
                        >
                          {logoSrc && (
                            <img
                              src={logoSrc}
                              alt={s.name}
                              className="w-4 h-4 object-contain shrink-0"
                            />
                          )}
                          <span>{s.name}</span>
                          <span className="text-[10px]">↗</span>
                        </button>
                      );
                    }

                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-transform hover:scale-105 active:scale-95 ${badgeClass}`}
                      >
                        {logoSrc && (
                          <img
                            src={logoSrc}
                            alt={s.name}
                            className="w-4 h-4 object-contain shrink-0"
                          />
                        )}
                        <span>{s.name}</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
