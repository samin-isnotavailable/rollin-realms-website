import React from 'react';
import { MEDIA } from '../data/content.ts';

export const Mission: React.FC = () => {
  return (
    <section
      id="mission"
      className="relative min-h-[85vh] py-28 flex items-center overflow-hidden border-t border-white/10"
      data-purpose="mission-section"
    >
      {/* Full-Bleed Background Image (Slide 3) */}
      <div className="absolute inset-0 z-0">
        <img
          loading="lazy"
          decoding="async"
          src={MEDIA.missionVisual}
          alt="Misty river boat scene - Mission backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Vignette & Legibility Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/90 via-[#050B14]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-[#050B14]/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <h2 className="font-black text-4xl sm:text-6xl text-[#E5192D] tracking-tight mb-8 drop-shadow-md">
            Mission
          </h2>
          <div className="space-y-6 text-slate-100 text-s sm:text-xl font-normal leading-relaxed drop-shadow">
            <p>
              Our mission is to bring stories to life through collaboration, craft,
              and a shared passion for visual storytelling. We believe in combining
              creativity, technology, and teamwork to produce films and content that
              are visually strong, emotionally engaging, and meaningful to audiences.
            </p>
            <p className="text-slate-200">
              We are committed to building a production culture rooted in open
              communication, trust, and collective excellence. Through every project,
              we aim to work closely with our clients, collaborators, and creative
              teams to deliver thoughtful, cinematic, and professionally executed stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
