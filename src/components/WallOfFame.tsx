import React from 'react';
import { AWARDS, MEDIA } from '../data/content.ts';

export const WallOfFame: React.FC = () => {
  ;

  return (
    <section
      id="awards"
      className="py-24 sm:py-32 bg-[#050B14] border-t border-white/5 relative"
    >
      {/* Ambient Red Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E5192D]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-extrabold text-5xl sm:text-7xl text-[#E5192D] tracking-tight">
            Wall of Fame
          </h2>
          <p className="text-slate-400 mt-3 text-lg font-light">
            Honors, festival laurels &amp; marketing accolades received by Rollin Realms
          </p>
          <div className="h-1.5 w-24 bg-[#E5192D] mx-auto mt-4 rounded-full" />
        </div>

        {/* Awards Grid (Exact 6 Laurels from Slide 18) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AWARDS.map((award) => (
            <div
              key={award.title}
              className="laurel-card bg-[#0B1728]/70 border border-white/10 hover:border-[#E5192D]/60 rounded-xl p-8 text-center flex flex-col items-center justify-center transition-all duration-300 shadow-xl group"
            >
              <div className="w-28 h-28 mb-4 relative flex items-center justify-center">
                <img
                  loading="lazy"
                  decoding="async"
                  src={MEDIA.laurelIcon}
                  alt="Laurel Award"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = MEDIA.laurelIconFallback;
                  }}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <span className="text-[11px] font-mono text-[#E5192D] font-bold mb-1">
                {award.year}
              </span>
              <h3 className="font-bold text-xl text-white">
                {award.title}
              </h3>
              <p className="text-xs text-slate-400 mt-2 font-mono">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
