import React from 'react';
import { MEDIA, EVENTS_DATA } from '../data/content.ts';
import { Users, HeartHandshake } from 'lucide-react';
import type { LightboxItem } from './MediaLightbox.tsx';

interface EventsProps {
  onOpenLightbox: (src: string, title: string, group?: LightboxItem[]) => void;
}

export const Events: React.FC<EventsProps> = ({ onOpenLightbox }) => {
  const items: LightboxItem[] = EVENTS_DATA.snapshots.map((s) => ({
    src: s.image,
    title: s.title,
  }));

  return (
    <section
      id="events"
      className="py-24 sm:py-32 relative bg-[#07101E] overflow-hidden border-t border-white/5"
      data-purpose="events-section"
    >
      {/* One Full Background Image (Slide 10 Reference) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          loading="lazy"
          decoding="async"
          src={MEDIA.eventsBackdrop}
          alt="Events Stage Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07101E] via-[#07101E]/80 to-[#07101E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-5xl sm:text-7xl text-[#E5192D] tracking-tight">
            Events
          </h2>
          <div className="h-1.5 w-24 bg-[#E5192D] mx-auto mt-4 rounded-full shadow-lg shadow-[#E5192D]/40" />
        </div>

        {/* 4 Snapshots Grid (Exact Slide 10 Layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {EVENTS_DATA.snapshots.map((snap) => (
            <div
              key={snap.id}
              onClick={() => onOpenLightbox(snap.image, snap.title, items)}
              className="cursor-pointer group relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#0B1728] shadow-xl hover:border-[#E5192D] hover:shadow-2xl hover:shadow-[#E5192D]/20 hover:scale-[1.02] transition-all duration-300"
            >
              <img
                loading="lazy"
                decoding="async"
                src={snap.image}
                alt={snap.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                <span className="text-xs text-white font-mono font-medium truncate">
                  {snap.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* The Two Text Boxes (Matching Slide 10 Presentation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EVENTS_DATA.eventCards.map((card) => (
            <div
              key={card.id}
              className="p-7 sm:p-9 rounded-2xl bg-[#0B1728]/85 backdrop-blur-md border border-white/10 border-t-4 border-t-[#E5192D] shadow-2xl space-y-4 hover:border-white/20 transition-all"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-extrabold text-2xl sm:text-3xl text-white">
                  <span className="text-[#E5192D]">{card.accent}</span>
                  {card.rest}
                </h3>
                <span className="px-3.5 py-1 text-xs font-mono bg-[#E5192D]/20 text-[#E5192D] border border-[#E5192D]/30 rounded-full font-bold flex items-center gap-1.5 shrink-0">
                  {card.id.includes('anjan') ? (
                    <Users className="w-3.5 h-3.5" />
                  ) : (
                    <HeartHandshake className="w-3.5 h-3.5" />
                  )}
                  {card.badge}
                </span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
