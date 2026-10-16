import React from 'react';
import { ArrowUp } from 'lucide-react';
import { MEDIA } from '../data/content.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#050B14] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <img
            src={MEDIA.brandLogoMark}
            alt="Rollin Realms Logo"
            onError={(e) => {
              (e.target as HTMLImageElement).src = MEDIA.brandLogoMarkFallback;
            }}
            className="h-full w-auto max-h-7 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src={MEDIA.heroLogotype}
            alt="ROLLIN REALMS"
            onError={(e) => {
              (e.target as HTMLImageElement).src = MEDIA.heroLogotypeFallback;
            }}
            className="h-full w-auto max-h-7 object-contain object-left"
          />
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-xs text-slate-400 font-mono">
            © 2022–2026 Rollin Realms. All Rights Reserved.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-[#E5192D] bg-[#0B1728] rounded border border-white/10 hover:border-[#E5192D] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-xs text-slate-500 font-mono">
          Designed &amp; Built by{' '}
          <a
            href="https://github.com/samin-isnotavailable"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#E5192D] transition-colors"
          >
            Mubarrat Ahmed Samin
          </a>
        </p>
      </div>
    </footer>
  );
};
