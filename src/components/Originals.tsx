import React, { useState } from 'react';
import { MEDIA, ORIGINALS } from '../data/content.ts';
import { ArrowUpRight, Award, Film, X, Link as LinkIcon, Check } from 'lucide-react';

interface OriginalsProps {
  onOpenLightbox: (src: string, title: string) => void;
}

export const Originals: React.FC<OriginalsProps> = ({ onOpenLightbox }) => {
  const [activeFilmModal, setActiveFilmModal] = useState<typeof ORIGINALS[0] | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPermalink = (film: typeof ORIGINALS[0]) => {
    const url = `${window.location.origin}${window.location.pathname}#${film.id}`;
    navigator.clipboard?.writeText(url);
    setCopiedId(film.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="originals"
      className="py-24 sm:py-32 relative min-h-screen flex flex-col justify-center overflow-hidden border-t border-white/5"
      data-purpose="originals-section"
    >
      {/* Full Page Background Image (Slide 9 Exact Reference) */}
      <div className="absolute inset-0 z-0">
        <img
          loading="lazy"
          decoding="async"
          src={MEDIA.originalsBackdrop}
          alt="Originals Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic dark tint with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07101E]/90 via-[#07101E]/60 to-[#07101E]/95 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-5xl sm:text-7xl text-[#E5192D] tracking-tight drop-shadow-md">
            Originals
          </h2>
          <p className="text-slate-300 mt-3 text-lg font-light max-w-2xl mx-auto drop-shadow">
            Independent auteur films and musical cinema authored by Rollin Realms
          </p>
          <div className="h-1.5 w-24 bg-[#E5192D] mx-auto mt-4 rounded-full shadow-lg shadow-[#E5192D]/50" />
        </div>

        {/* The Three Images with On-Image Typography, Cool Hover Animation & Permalinks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ORIGINALS.map((film, index) => (
            <div
              key={film.id}
              id={film.id}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-[#0B1728]/80 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-[#E5192D] hover:shadow-2xl hover:shadow-[#E5192D]/25 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Image Frame with Aspect Ratio */}
              <div
                onClick={() => onOpenLightbox(film.image, `${film.title} (${film.bnTitle})`)}
                className="cursor-pointer relative aspect-[3/4] w-full overflow-hidden bg-slate-950"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={film.image}
                  alt={film.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Ambient Top & Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 opacity-80 group-hover:opacity-70 transition-opacity" />

                {/* Top Badge on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono z-10">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[#E5192D] font-bold border border-white/10 flex items-center gap-1.5">
                    <Film className="w-3 h-3" />
                    {film.category}
                  </span>
                  <span className="text-[11px] text-white/80 font-mono">
                    0{index + 1}
                  </span>
                </div>

                {/* Text Written Directly On Image (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 space-y-1.5">
                  <span className="text-xs font-mono text-[#E5192D] uppercase tracking-wider block font-semibold">
                    Dir: {film.director}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-[#E5192D] transition-colors drop-shadow">
                    {film.title}
                  </h3>
                  {film.bnTitle && (
                    <p className="text-sm font-medium text-slate-300 font-sans">
                      {film.bnTitle}
                    </p>
                  )}
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <Award className="w-3.5 h-3.5 text-[#E5192D] shrink-0" />
                    <span className="truncate">{film.status}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar: Permalink Details & Learn More */}
              <div className="p-4 bg-[#07101E]/95 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleCopyPermalink(film)}
                  title="Copy direct permalink"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors py-1 px-2.5 rounded bg-white/5 hover:bg-white/10"
                >
                  {copiedId === film.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <LinkIcon className="w-3.5 h-3.5" />
                      <span>Permalink</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilmModal(film)}
                  className="inline-flex items-center gap-1 text-xs font-bold font-mono uppercase tracking-wider text-[#E5192D] hover:text-white transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Film Details Modal */}
        {activeFilmModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveFilmModal(null)}
          >
            <div
              className="bg-[#0B1728] border border-[#E5192D]/70 rounded-2xl p-6 sm:p-8 max-w-xl w-full relative shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#E5192D] font-bold">
                  {activeFilmModal.category}
                </span>
                <button
                  onClick={() => setActiveFilmModal(null)}
                  className="text-slate-400 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-white">
                  {activeFilmModal.title}
                </h3>
                {activeFilmModal.bnTitle && (
                  <p className="text-base text-slate-300 mt-1">{activeFilmModal.bnTitle}</p>
                )}
              </div>

              <div className="p-3.5 rounded-lg bg-[#050B14] border border-white/5 text-xs font-mono space-y-2 text-slate-300">
                <div>• Written &amp; Directed by: <strong className="text-white">{activeFilmModal.director}</strong></div>
                {activeFilmModal.writers && <div>• Script: {activeFilmModal.writers}</div>}
                {activeFilmModal.cinematography && <div>• Cinematography: {activeFilmModal.cinematography}</div>}
                {activeFilmModal.editing && <div>• Editing: {activeFilmModal.editing}</div>}
                {activeFilmModal.music && <div>• Music: {activeFilmModal.music}</div>}
                <div>• Festival Recognition: <strong className="text-emerald-400">{activeFilmModal.status}</strong></div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {activeFilmModal.logline}
              </p>

              <div className="pt-3 flex justify-between items-center">
                <button
                  onClick={() => handleCopyPermalink(activeFilmModal)}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5"
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  <span>Copy Permalink</span>
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveFilmModal(null)}
                    className="px-4 py-2 text-xs font-mono text-slate-300 hover:text-white"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setActiveFilmModal(null)}
                    className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#E5192D] text-white hover:bg-[#FF283C] rounded transition-colors"
                  >
                    Inquire Film Rights
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
