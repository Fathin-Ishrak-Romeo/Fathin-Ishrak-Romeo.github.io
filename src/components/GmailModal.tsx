import React, { useState, useEffect } from 'react';
import { X, Copy, Check, ExternalLink, Mail } from 'lucide-react';

interface GmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  email?: string;
}

export const GmailModal: React.FC<GmailModalProps> = ({
  isOpen,
  onClose,
  email = 'robokitgarage@gmail.com',
}) => {
  const [copied, setCopied] = useState(false);

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

  const handleOpenGmail = () => {
    // Open Gmail web compose with recipient in the 'To' field
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Popup Dialog */}
      <div
        onClick={handleOpenGmail}
        className="relative z-50 w-full max-w-md bg-white dark:bg-[#131923] text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl transition-all duration-200 animate-in fade-in zoom-in-95 cursor-pointer hover:border-red-400 dark:hover:border-red-500 group"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Gmail Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/50 flex items-center justify-center shrink-0">
            <img
              src="assets/social/gmail.png"
              alt="Gmail Logo"
              className="w-7 h-7 object-contain"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Gmail Contact</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Click anywhere on this popup to open Gmail
            </p>
          </div>
        </div>

        {/* Email Address Display Box */}
        <div className="mt-5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Mail className="w-4 h-4 text-red-500 shrink-0" />
            <span className="font-mono text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 truncate select-all">
              {email}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="shrink-0 flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Action Button: Open in Gmail */}
        <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-colors shadow-sm">
          <span className="flex items-center gap-1.5">
            <ExternalLink className="w-4 h-4" />
            <span>Open in Gmail (To: {email})</span>
          </span>
          <span className="text-xs text-red-100">Click to compose ↗</span>
        </div>
      </div>
    </div>
  );
};
