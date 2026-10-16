import React from 'react';
import { MEDIA, SHOWREELS, BTS_GALLERY_27 } from '../data/content.ts';
import { Play, ExternalLink } from 'lucide-react';
import type { LightboxItem } from './MediaLightbox.tsx';

interface PortfolioProps {
  onOpenLightbox: (src: string, title: string, group?: LightboxItem[]) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenLightbox }) => {
  const galleryItems: LightboxItem[] = BTS_GALLERY_27.map((g) => ({
    src: g.image,
    title: `Production Stills #${g.id}`,
  }));

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 bg-[#050B14] border-t border-white/5"
      data-purpose="portfolio-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#E5192D] text-xs font-mono uppercase tracking-[0.25em] font-bold">
            Showreels &amp; Archive
          </span>
          <h2 className="font-extrabold text-5xl sm:text-7xl text-[#E5192D] tracking-tight mt-1">
            Portfolio
          </h2>
          <p className="text-slate-400 mt-3 text-lg font-light">
            Director showreels and our dedicated video archive
          </p>
          <div className="h-1.5 w-24 bg-[#E5192D] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Showreel Cards (Exact layout from Slide 14) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          {SHOWREELS.map((reel) => {
            if (reel.isChannel) {
              return (
                <a
                  key={reel.id}
                  href="https://tinyurl.com/rollinrealms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#0B1728] rounded-xl p-5 border border-white/10 shadow-2xl transition-all duration-300 hover:border-[#E5192D] flex flex-col justify-between"
                >
                  <div className="relative red-offset-frame mb-6 overflow-hidden rounded">
                    <div className="aspect-video w-full bg-[#07101E] flex items-center justify-center relative p-6">
                      <div className="w-24 sm:w-28 h-auto">
                        <img
                          loading="lazy"
                          decoding="async"
                          src={MEDIA.brandLogoMark}
                          alt="Rollin Realms Logo"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = MEDIA.brandLogoMarkFallback;
                          }}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent flex items-center justify-center transition-colors" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-[#E5192D] font-bold flex items-center gap-1.5">
                      OFFICIAL YOUTUBE
                      <ExternalLink className="w-3 h-3" />
                    </span>
                    <h3 className="font-extrabold text-2xl text-white mt-1">
                      ROLLIN REALMS
                    </h3>
                  </div>
                </a>
              );
            }

            return (
              <a
                key={reel.id}
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#0B1728] rounded-xl p-5 border border-white/10 shadow-2xl transition-all duration-300 hover:border-[#E5192D]"
              >
                <div className="relative red-offset-frame mb-6 overflow-hidden rounded">
                  <div className="aspect-video w-full bg-slate-900 relative overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={reel.image}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                      <div className="w-14 h-14 rounded-full bg-[#E5192D]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#FF283C] transition-all">
                        <Play className="w-6 h-6 ml-1 fill-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#E5192D] font-bold">
                    {reel.role}
                  </span>
                  <h3 className="font-extrabold text-2xl text-white mt-1">
                    {reel.title}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>

        {/* BEHIND-THE-SCENES PRODUCTION GALLERY (#gallery) */}
        {/* Strict 3-Column × 9-Row Image Grid (27 Snaps, Zero Text Clutter, No Options Switcher) */}
        <div id="gallery" className="pt-8">
          <div className="text-center mb-14">
            <span className="text-[#E5192D] text-xs font-mono uppercase tracking-[0.25em] font-bold">
              Behind The Scenes
            </span>
            <h3 className="font-extrabold text-4xl sm:text-6xl text-[#E5192D] tracking-tight mt-1">
              Gallery
            </h3>
            <div className="h-1.5 w-24 bg-[#E5192D] mx-auto mt-4 rounded-full" />
          </div>

          {/* 3x9 Grid (3 Columns, 9 Rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {BTS_GALLERY_27.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item.image, `Production Stills #${item.id}`, galleryItems)}
                className="cursor-pointer group relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#0B1728] shadow-lg hover:border-[#E5192D] hover:shadow-xl hover:shadow-[#E5192D]/20 hover:scale-[1.02] transition-all duration-300"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={item.image}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
