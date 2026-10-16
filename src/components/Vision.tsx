import React from 'react';
import { MEDIA } from '../data/content.ts';

export const Vision: React.FC = () => {
  return (
    <section
      id="vision"
      className="relative min-h-[85vh] py-28 flex items-center overflow-hidden border-t border-white/10"
      data-purpose="vision-section"
    >
      {/* Full-Bleed Background Image (Slide 4) */}
      <div className="absolute inset-0 z-0">
        <img
          loading="lazy"
          decoding="async"
          src={MEDIA.visionVisual}
          alt="Toddler girl playing with bubbles - Vision backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/85 via-transparent to-[#050B14]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="min-h-[75vh] flex flex-col justify-between py-8 md:py-12">
          {/* Upper-Left: Crimson Title & Paragraph 1 */}
          <div className="max-w-xl">
            <h2 className="font-black text-4xl sm:text-6xl lg:text-6xl text-[#E5192D] tracking-tight mb-6 drop-shadow-md">
              Vision
            </h2>
            <p className="text-white text-base sm:text-s leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-normal">
              Our vision is to become a leading film and media production house,
              recognized for creating visually stunning, emotionally resonant, and
              culturally meaningful work. We aim to push the boundaries of visual
              storytelling by combining cinematic craft, fresh ideas, and innovative
              production approaches.
            </p>
          </div>

          {/* Lower-Right: Anchored to bottom-right leaving center open for the subject */}
          <div className="flex justify-end mt-16 sm:mt-24 lg:mt-32">
            <div className="max-w-xl text-left md:text-right">
              <p className="text-white text-base sm:text-lg leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-normal">
                We aspire to set a strong standard for excellence and creativity in the
                industry, while continuously growing as storytellers, collaborators,
                and creators. Through the power of film and visual communication, we
                hope to inspire audiences, represent culture, and contribute
                meaningfully to the world around us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
