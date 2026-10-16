import React from 'react';
import { MEDIA, COMMERCIAL_SNAPS_32 } from '../data/content.ts';
import type { LightboxItem } from './MediaLightbox.tsx';

interface CommercialSnapsProps {
  onOpenLightbox: (src: string, title: string, group?: LightboxItem[]) => void;
}

export const CommercialSnaps: React.FC<CommercialSnapsProps> = ({ onOpenLightbox }) => {
  const items: LightboxItem[] = COMMERCIAL_SNAPS_32.map((x) => ({
    src: x.image,
    title: `Commercial Snap #${x.id}`,
  }));

  return (
    <section
      id="commercial-snaps"
      className="py-20 sm:py-28 relative bg-[#07101E] overflow-hidden border-t border-white/5"
      data-purpose="commercial-snaps"
    >
      {/* Background Image with Gradient from Top */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          loading="lazy"
          decoding="async"
          src={MEDIA.commercialSnapsBackdrop}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07101E] via-[#07101E]/80 to-[#07101E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-5xl sm:text-7xl text-[#E5192D] tracking-tight">
            Commercial Snaps
          </h2>
          <div className="h-1.5 w-24 bg-[#E5192D] mx-auto mt-4 rounded-full" />
        </div>

        {/* Clean 4x8 Image Gallery (32 Pure Images, No Text, No Overlays, No Extra Buttons) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {COMMERCIAL_SNAPS_32.map((snap) => (
            <div
              key={snap.id}
              onClick={() => onOpenLightbox(snap.image, `Commercial Snap #${snap.id}`, items)}
              className="cursor-pointer group relative aspect-[16/9] rounded-lg overflow-hidden border border-white/10 bg-[#0B1728] shadow-md transition-all duration-300 hover:border-[#E5192D] hover:shadow-xl hover:shadow-[#E5192D]/20 hover:scale-[1.02]"
            >
              <img
                loading="lazy"
                decoding="async"
                src={snap.image}
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
