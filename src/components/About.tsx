import React from 'react';
import { MEDIA } from '../data/content.ts';

interface AboutProps {
  onOpenLightbox: (src: string, title: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenLightbox }) => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative bg-[#050B14] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-extralight text-1xl sm:text-1xl text-white tracking-tight">
            <span className="font-extrabold text-4xl sm:text-6xl text-[#E5192D]">About </span><span > Rollin Realms</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#E5192D] mt-4 rounded-full" />
        </div>

        {/* 3-Column Asymmetric Storytelling Layout (Slide 2 Aesthetic) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Column 1: Origin & Founders Image */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Established in <strong className="text-white font-semibold">2022</strong>,
              Rollin Realms is a Bangladesh-based media production house founded by{' '}
              <strong className="text-white font-medium">Ahmed Hasan Sunny</strong>,{' '}
              <strong className="text-white font-medium">Khalid H. Rakib</strong>, and{' '}
              <strong className="text-white font-medium">Sibat Tazwar</strong>. Built by a
              young team of filmmakers, we began our journey through commercials,
              online video content, music videos, and socially driven productions,
              creating work for brands, institutions, and audiences with a strong focus
              on cinematic storytelling.
            </p>
            <div className="pt-2">
              <div
                onClick={() =>
                  onOpenLightbox(
                    MEDIA.aboutFounders,
                    'Rollin Realms Founders — Ahmed Hasan Sunny, Khalid H. Rakib, Sibat Tazwar'
                  )
                }
                className="cursor-pointer overflow-hidden rounded border border-white/10 group shadow-xl bg-[#0B1728] transition-all hover:border-[#E5192D]/60"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={MEDIA.aboutFounders}
                  alt="Founders of Rollin Realms"
                  referrerPolicy="no-referrer"
                  className="w-full h-72 object-cover object-left-bottom group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-[#0B1728]/95 border-t border-white/5 text-xs text-slate-400 text-center font-mono">
                  Founders • Dhaka, Bangladesh
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Independent Breakthrough & Film Poster */}
          <div className="space-y-6">
            <div
              onClick={() =>
                onOpenLightbox(
                  MEDIA.aboutPoster,
                  'Song from the South — Official Selection Lisboa Indie Film Festival'
                )
              }
              className="cursor-pointer overflow-hidden rounded border border-white/10 shadow-xl bg-white p-2 group transition-all hover:border-[#E5192D]"
            >
              <img
                loading="lazy"
                decoding="async"
                src={MEDIA.aboutPoster}
                alt="Song from the South Poster"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover object-center rounded group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              In just a few years, our work has travelled across both commercial and
              independent spaces. In <strong className="text-white font-semibold">2025</strong>,
              Rollin Realms made its debut in the independent film space with{' '}
              <em className="text-white font-semibold">Song from the South</em>, which
              was selected at the{' '}
              <strong className="text-[#E5192D] font-medium">
                Lisboa Indie Film Festival
              </strong>. Our commercial work has also been recognized at the{' '}
              <strong className="text-white font-medium">Digital Marketing Award 2024</strong>,{' '}
              <strong className="text-white font-medium">Commward 2023</strong>, and{' '}
              <strong className="text-white font-medium">Digital Marketing Award 2022</strong>.
            </p>
          </div>

          {/* Column 3: The Ambition & Gratitude */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              While advertising and branded content remain an important part of our
              craft, our larger ambition has always been rooted in filmmaking.
              Through short films, experimental narratives, and upcoming long-form
              projects, Rollin Realms continues to move toward stories that are more
              personal, cinematic, and emotionally lasting.
            </p>
            <div
              onClick={() =>
                onOpenLightbox(
                  MEDIA.aboutCommercialShot,
                  'Rollin Realms — Commercial Craft'
                )
              }
              className="cursor-pointer overflow-hidden rounded border border-white/10 shadow-xl group bg-[#0B1728] transition-all hover:border-[#E5192D]/60"
            >
              <img
                loading="lazy"
                decoding="async"
                src={MEDIA.aboutCommercialShot}
                alt="Cinematic commercial shot"
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover object-right group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 rounded bg-[#0B1728]/80 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#E5192D]" />
              <p className="text-sm sm:text-base text-slate-300 italic leading-relaxed pl-2">
                "We are thankful for the trust our clients and collaborators have
                placed in us. With passion, persistence, and a belief in honest
                storytelling, we aim to keep creating work that connects with people
                — on screen, across platforms, and beyond borders."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
