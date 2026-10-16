import React, { useState } from 'react';
import { MEDIA, SERVICES } from '../data/content.ts';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const [activeServiceModal, setActiveServiceModal] = useState<string | null>(null);

  const selectedService = SERVICES.find((s) => s.id === activeServiceModal);

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-[#050B14] border-t border-white/5"
      data-purpose="services-showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title (Slide 5 Header) */}
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-5xl sm:text-7xl text-[#E5192D] tracking-tight">
            Services
          </h2>
          <p className="text-slate-400 mt-3 text-lg font-light max-w-2xl mx-auto">
            Full-spectrum cinematic capabilities tailored for broadcast, digital platforms, festivals, and live audiences.
          </p>
          <div className="h-1.5 w-24 bg-[#E5192D] mx-auto mt-4 rounded-full" />
        </div>

        {/* Core 8 Services Grid (Exact layout from Slide 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-purpose="services-banner-grid">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveServiceModal(service.id)}
              className="cursor-pointer group flex items-stretch bg-[#0B1728] border border-white/10 rounded overflow-hidden hover:border-[#E5192D] transition-all duration-300 shadow-lg"
            >
              {service.align === 'left' ? (
                <>
                  <div className="w-32 sm:w-40 h-28 relative shrink-0 overflow-hidden bg-slate-900">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={service.image}
                      alt={service.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = service.fallbackImage;
                      }}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-[#E5192D]/90 to-[#E5192D]/30 group-hover:from-[#E5192D] group-hover:to-[#E5192D]/60 transition-all flex items-center justify-between px-6">
                    <h3 className="font-bold text-lg sm:text-xl text-white">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-all shrink-0 ml-2" />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1 bg-gradient-to-l from-[#E5192D]/90 to-[#0B1728]/90 group-hover:from-[#E5192D] transition-all flex items-center justify-between px-6 text-left">
                    <h3 className="font-bold text-lg sm:text-xl text-white">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-all shrink-0 ml-2" />
                  </div>
                  <div className="w-32 sm:w-40 h-28 relative shrink-0 overflow-hidden bg-slate-900">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={service.image}
                      alt={service.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = service.fallbackImage;
                      }}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveServiceModal(null)}
          >
            <div
              className="bg-[#0B1728] border border-[#E5192D]/70 rounded-xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-[#E5192D] font-bold">
                  {selectedService.category}
                </span>
                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="text-slate-400 hover:text-white text-xl p-1"
                >
                  ✕
                </button>
              </div>
              <h3 className="font-extrabold text-2xl text-white mb-3">
                {selectedService.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {selectedService.description}
              </p>
              <div className="p-4 rounded bg-[#050B14] border border-white/5 mb-6 text-xs text-slate-400 font-mono space-y-1">
                <div>• Turnaround: 2–4 Weeks standard</div>
                <div>• Deliverables: 4K Master, DCI Cinema Package, Social Cuts</div>
                <div>• Crew: In-house Direction, Cinematography, Color Grading</div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Close
                </button>
                <a
                  href="#booking-form"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveServiceModal(null);
                    window.dispatchEvent(
                      new CustomEvent('rr:book', { detail: { projectType: selectedService.title } })
                    );
                  }}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#E5192D] text-white hover:bg-[#FF283C] rounded transition-colors"
                >
                  Book This Service
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
