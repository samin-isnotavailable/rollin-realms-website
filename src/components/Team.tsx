import React from 'react';
import { FOUNDERS, TEAM_MEMBERS, MEDIA } from '../data/content.ts';

interface TeamProps {
  onOpenLightbox: (src: string, title: string) => void;
}

export const Team: React.FC<TeamProps> = ({ onOpenLightbox }) => {
  return (
    <section
      id="team"
      className="py-24 sm:py-32 bg-[#050B14] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FOUNDERS SUB-SECTION (Slide 12) */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="font-extrabold text-5xl sm:text-7xl text-[#E5192D] tracking-tight">
              Founders
            </h2>
            <p className="text-slate-400 mt-3 text-lg font-light">
              The visionaries steering the craft and business of Rollin Realms
            </p>
            <div className="h-1.5 w-24 bg-[#E5192D] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.name}
                onClick={() =>
                  onOpenLightbox(founder.image, `${founder.name} — ${founder.role}`)
                }
                className="cursor-pointer group relative bg-[#0B1728] rounded-lg p-6 border border-white/10 shadow-xl transition-all duration-300 hover:border-[#E5192D]"
              >
                <div className="relative red-offset-frame mb-8">
                  <div className="aspect-[4/5] overflow-hidden rounded bg-slate-900 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-extrabold text-2xl text-white">
                    {founder.name}
                  </h3>
                  <p className="text-xs uppercase font-mono tracking-widest text-[#E5192D] font-bold mt-1">
                    {founder.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 mt-3 font-light leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM SUB-SECTION (Slide 13) */}
        <div>
          <div className="text-center mb-16">
            <h2 className="font-extrabold text-5xl sm:text-7xl text-[#E5192D] tracking-tight">
              Team
            </h2>
            <p className="text-slate-400 mt-3 text-lg font-light">
              The dedicated producers, assistant directors, and production managers behind every take
            </p>
            <div className="h-1.5 w-24 bg-[#E5192D] mx-auto mt-4 rounded-full" />
          </div>

          {/* 8 Members Grid (Exact match with Slide 13) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, index) => {
              // Custom crop positions matching the 8 faces in Slide 13 grid
              const cropStyles = [
                'object-left-top',
                'object-[35%_10%]',
                'object-[65%_10%]',
                'object-right-top',
                'object-left-bottom',
                'object-[35%_90%]',
                'object-[65%_90%]',
                'object-right-bottom',
              ];

              return (
                <div
                  key={member.name}
                  onClick={() =>
                    onOpenLightbox(member.image, `${member.name} — ${member.role}`)
                  }
                  className="cursor-pointer group bg-[#0B1728]/70 p-4 rounded border border-white/10 hover:border-[#E5192D] transition-colors"
                >
                  <div className="relative red-offset-frame mb-4">
                    <div className="aspect-square overflow-hidden rounded bg-slate-900 grayscale group-hover:grayscale-0 transition-all duration-500">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="font-bold text-white text-base">
                    {member.name}
                  </h4>
                  <p className="text-[11px] font-mono uppercase text-[#E5192D] font-semibold">
                    {member.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
