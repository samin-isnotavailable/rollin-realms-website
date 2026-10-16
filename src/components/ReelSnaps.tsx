import React from 'react';
import { MEDIA, REEL_SNAPS_12 } from '../data/content.ts';
import type { LightboxItem } from './MediaLightbox.tsx';

interface ReelSnapsProps {
  onOpenLightbox: (src: string, title: string, group?: LightboxItem[]) => void;
}

export const ReelSnaps: React.FC<ReelSnapsProps> = ({ onOpenLightbox }) => {
  const items: LightboxItem[] = REEL_SNAPS_12.map((x) => ({
    src: x.image,
    title: `Reel Snap #${x.id}`,
  }));

  return (
    <section
      id="reel-snaps"
      className="py-20 sm:py-28 relative bg-[#050B14] overflow-hidden border-t border-white/5"
      data-purpose="reel-snaps"
    >
      {/* Background Image with Gradient from Top (Same Backdrop as Commercial Snaps) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          loading="lazy"
          decoding="async"
          src={MEDIA.commercialSnapsBackdrop}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-[#050B14]/80 to-[#050B14]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-5xl sm:text-7xl text-[#E5192D] tracking-tight">
            Reel Snaps
          </h2>
          <div className="h-1.5 w-24 bg-[#E5192D] mx-auto mt-4 rounded-full" />
        </div>

        {/* Clean 6x2 Gallery (12 Vertical 9:16 Snaps, No Text, No Viewfinders, No Hashtags) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {REEL_SNAPS_12.map((reel) => (
            <div
              key={reel.id}
              onClick={() => onOpenLightbox(reel.image, `Reel Snap #${reel.id}`, items)}
              className="cursor-pointer group relative aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-[#0B1728] shadow-lg hover:border-[#E5192D] hover:shadow-xl hover:shadow-[#E5192D]/20 hover:scale-[1.02] transition-all duration-300"
            >
              <img
                loading="lazy"
                decoding="async"
                src={reel.image}
                alt=""
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
