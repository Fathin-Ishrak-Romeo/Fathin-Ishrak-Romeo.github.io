import React, { useState, useEffect } from 'react';
import { X, Download, Printer, FileText, AlertCircle } from 'lucide-react';
import { profileData } from '../data/portfolioData';

// 1. Profile Picture & Banner Photo Lightbox Modal (Shows only the whole photo nothing else)
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  type: 'avatar' | 'banner';
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  type,
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

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox Container - Only the whole photo is shown */}
      <div className="relative z-50 max-h-[90vh] max-w-[95vw] flex items-center justify-center animate-in fade-in zoom-in-95 duration-150">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo"
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 p-2.5 rounded-full bg-slate-900/90 text-white hover:bg-slate-800 border border-white/20 shadow-xl transition-all cursor-pointer z-50 hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'avatar' ? (
          hasProfileImg ? (
            <img
              src="profile.png"
              alt="Profile"
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          ) : (
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white font-black text-7xl sm:text-8xl shadow-2xl ring-4 ring-white/20">
              FI
            </div>
          )
        ) : hasBannerImg ? (
          <img
            src="banner.png"
            alt="Banner"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/10"
          />
        ) : (
          <div className="w-[85vw] max-w-3xl h-60 sm:h-80 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-400 shadow-2xl border border-white/20" />
        )}
      </div>
    </div>
  );
};

// 2. CV Download & Printable Resume Preview Modal
interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextCV = () => {
    const cvText = `
===================================================================
FATHIN ISHRAK - CURRICULUM VITAE
Email: ${profileData.email} | Location: ${profileData.location}
GitHub: ${profileData.githubUrl} | LinkedIn: ${profileData.linkedinUrl}
===================================================================

PROFILE SUMMARY
-------------------------------------------------------------------
Computer Science & Engineering graduate from BRAC University passionate about QC,
AI, robotics, and embedded systems. Founder & CEO of RoboKit Garage. Over 20 robotics,
IoT, and software projects developed.

EDUCATION
-------------------------------------------------------------------
* B.Sc. in Computer Science & Engineering (CSE) | BRAC University (2025)
* H.S.C. in Science | Birshreshtha Munshi Abdur Rouf Public College (2019)
* S.S.C. in Science | Patuakhali Govt. Jubilee High School (2017)

EXPERIENCE
-------------------------------------------------------------------
* Intern, IT Operations | Eskayef Pharmaceuticals Ltd. (SK+F) (Oct 2026 - Present)
  - Enterprise IT infrastructure management, networking, and technical support.
  - Exposure to Cisco and Meraki networking solutions, LAN/WAN administration,
    Starlink connectivity, network tunneling, Windows Server, Active Directory.
  - User and shared-folder access control, Synology NAS, backup & recovery, cybersecurity.
  - IT infrastructure evaluation, PoC research, budgeting and procurement planning.

* Founder & CEO | RoboKit Garage (Jul 2025 - Present)
  - Technology startup specializing in robotics, IoT, software, and electronics.
  - Established Bangladesh's first dedicated Robotics & IoT project rental service.
  - Custom engineering project delivery, embedded programming, product development.

CORE TECHNICAL SKILLS
-------------------------------------------------------------------
* Programming: HTML, SQL, C, C++, Python
* Assembly: x86 Assembly, RISC-V
* Software Engineering: Agile, DevOps, MVC, SDLC, Testing, Waterfall, V-Model
* Systems & Tools: Linux, Windows, Git, GitHub
* AI & ML: Machine Learning, Neural Networks, Deep Learning
* Robotics & Embedded: Arduino, ESP32, STM, Raspberry Pi, ROS
* VLSI: DSCH, Microwind, Verilog
* Quantum Computing: Quantum Computing, Quantum Machine Learning

NOTABLE PROJECTS
-------------------------------------------------------------------
* Multi-Level Deep Generative Model with Poisson VAE & Reinforcement Learning (Thesis)
* FIR-DEC: Deep Embedding Clustering Model on MNIST (PyTorch)
* PCGenixAI: AI-Powered PC Builder Web App (React, TypeScript, Node.js, Express, Supabase)
* BuX: Online Learning Platform (Laravel, MySQL, Tailwind)
* TESLA Prototype: Arduino UNO & ESP32-CAM Robotic Car with RFID & Voice Control
* Mars Rover Prototype: 4-DOF Arm, ESP32-CAM, Pan-Tilt Camera, Weather Station
* Dual IR Array LFR: High-speed autonomous line follower with 90° turn without PID
* Autonomous Vacuum Cleaner: Ultrasonic + IR cliff detection & servo scanner
* 1-bit ALU & Elevator Logic Controller: Discrete logic gates & 7400 series ICs
===================================================================
`.trim();

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Fathin_Ishrak_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl z-50 bg-white dark:bg-[#111722] text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="p-4 sm:px-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-[#131923]">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Curriculum Vitae — Fathin Ishrak
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              aria-label="Print CV"
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              title="Print CV"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleDownloadTextCV}
              aria-label="Download CV file"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV dialog"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content - Printable Resume View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans print:text-black print:p-0">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h1 className="text-2xl font-black text-slate-900 dark:text-white">
              Fathin Ishrak
            </h1>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
              Computer Science &amp; Engineering Graduate | Robotics &amp; AI
            </p>
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap gap-x-4 gap-y-1">
              <span>{profileData.location}</span>
              <span>•</span>
              <a href={`mailto:${profileData.email}`} className="text-blue-600 dark:text-blue-400">
                {profileData.email}
              </a>
              <span>•</span>
              <a href={profileData.githubUrl} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400">
                github.com/fathin-ishrak-romeo
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>B.Sc. in Computer Science &amp; Engineering (CSE)</span>
                  <span>2025</span>
                </div>
                <div className="text-slate-600 dark:text-slate-400">BRAC University</div>
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>H.S.C. in Science</span>
                  <span>2019</span>
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  Birshreshtha Munshi Abdur Rouf Public College
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>S.S.C. in Science</span>
                  <span>2017</span>
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  Patuakhali Govt. Jubilee High School
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Experience
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>Intern, IT Operations</span>
                  <span>Oct 2026 - Present</span>
                </div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">
                  Eskayef Pharmaceuticals Ltd. (SK+F)
                </div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  Enterprise IT infrastructure management, Cisco &amp; Meraki solutions, LAN/WAN administration, Starlink connectivity, network tunneling, Windows Server, Active Directory, Synology NAS, backup &amp; cybersecurity practices.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>Founder &amp; CEO</span>
                  <span>Jul 2025 - Present</span>
                </div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">RoboKit Garage</div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  Leading a robotics and IoT venture. Established Bangladesh's first dedicated robotics rental service and engineering project consulting.
                </p>
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Key Projects
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <li>
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Multi-Level Poisson VAE &amp; RL Intrusion Detection
                </strong>{' '}
                — 89.17% accuracy on NF-UQ-NIDS-v2 dataset.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white font-semibold">
                  PCGenixAI: AI-Powered PC Builder Web App
                </strong>{' '}
                — Full-stack React, TypeScript, Node.js, Express &amp; Supabase.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white font-semibold">
                  TESLA Prototype &amp; Mars Rover Prototype
                </strong>{' '}
                — Arduino UNO, ESP32-CAM, pan-tilt camera, 4-DOF arm &amp; IoT control.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Autonomous Vacuum Cleaner with Obstacle &amp; Fall Avoidance
                </strong>{' '}
                — Ultrasonic obstacle detection, IR cliff detection &amp; servo scanner.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. CV Unavailable Popup Modal ("Sorry! CV is not available right now.")
interface CVUnavailableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVUnavailableModal: React.FC<CVUnavailableModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-md bg-white dark:bg-[#131923] text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 z-50 animate-in fade-in zoom-in-95 duration-150">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-3.5">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 shadow-xs">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
              Curriculum Vitae
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Download status
            </span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 flex items-start gap-2.5 my-2">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="text-sm font-bold text-amber-900 dark:text-amber-200 leading-snug">
            Sorry! CV is not available right now.
          </p>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          The PDF document (<code className="text-blue-600 dark:text-blue-400 font-mono font-semibold">fathin_ishrak_cv.pdf</code>) has not been uploaded to the repository yet. It will become downloadable immediately once placed in the repository.
        </p>

        <div className="mt-5 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
