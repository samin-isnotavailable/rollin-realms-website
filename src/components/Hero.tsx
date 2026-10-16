import React from 'react';
import { MEDIA } from '../data/content.ts';

interface HeroProps {
  onOpenLightbox: (src: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLightbox }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-24 pb-16 flex items-center overflow-hidden bg-[#07101E]"
    >
      {/* Ambient Atmosphere */}
      <div
        className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-[#E5192D]/10 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Overlapping Red-Framed Cinematic Photography Stills (Exact Slide 1 Composition) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Main Framed Film Portrait: Ascetic with Red Sunglasses */}
              <div

                className="relative red-offset-frame p-2 bg-[#0B1728]/80 border border-[#E5192D]/40 rounded shadow-2xl transition-all duration-300 hover:border-[#E5192D]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded bg-slate-900">
                  <img
                    src={MEDIA.heroStill1}
                    alt="Ascetic man with red sunglasses"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-middle-top scale-105 hover:scale-100 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Overlapping Secondary Cinema Still: Train Window Couple */}
              <div
                className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-6 w-3/5 border-2 border-[#E5192D]/70 shadow-2xl rounded overflow-hidden bg-[#050B14] z-20 hover:scale-105 transition-transform duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={MEDIA.heroStill2}
                    alt="Cinematic train scene"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Strictly "ROLLIN REALMS" High-Impact Display Mark & Tagline */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-6">
            <div className="flex items-center gap-4 sm:gap-6 mb-4">
              {/* Signature Striped Cinematic R Mark */}
              <div className="w-16 sm:w-20 md:w-28 shrink-0">
                <img
                  src={MEDIA.brandLogoMark}
                  alt="Rollin Realms Logo"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = MEDIA.brandLogoMarkFallback;
                  }}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Bold Brand Logotype Image */}
              <div className="flex-1 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                <img
                  src={MEDIA.heroLogotype}
                  alt="ROLLIN REALMS"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = MEDIA.heroLogotypeFallback;
                  }}
                  className="w-full h-auto max-h-24 sm:max-h-32 md:max-h-36 object-contain object-left"
                />
              </div>
            </div>
            {/* Tagline & Red Horizontal Progress Bars (Exact Slide 1 layout) */}
            <div className="mt-6 max-w-xl">
              <p className="text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight leading-snug">
                Crafting Stories,
                <br />
                Transcending Boundaries.
              </p>

              {/* Signature Red Horizontal Rhythm Blocks */}
              <div className="flex items-center gap-3 mt-6">
                <div className="h-6 sm:h-8 w-44 bg-[#E5192D] shadow-lg shadow-[#E5192D]/30" />
                <div className="h-6 sm:h-8 w-9 bg-[#E5192D] opacity-80" />
                <div className="h-6 sm:h-8 w-9 bg-[#E5192D] opacity-60" />
                <div className="h-6 sm:h-8 w-9 bg-[#E5192D] opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
