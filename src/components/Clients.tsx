import React from 'react';
import { CLIENT_LOGOS_35, MEDIA, MEDIA_BASE_URL } from '../data/content.ts';

interface ClientsProps {
  onOpenLightbox: (src: string, title: string) => void;
}

const CANDIDATE_EXTENSIONS = ['.png', '.webp', '.svg', '.jpg', '.jpeg'];

const ClientLogoBox: React.FC<{
  client: typeof CLIENT_LOGOS_35[0];
  onOpenLightbox: (src: string, title: string) => void;
}> = ({ client, onOpenLightbox }) => {
  const [extIndex, setExtIndex] = React.useState(0);
  const [allFailed, setAllFailed] = React.useState(false);

  // If custom URL provided in CLIENT_CUSTOM_LOGOS, use it directly
  const isCustom = Boolean(client.logoUrl && !client.logoUrl.includes(`/client-${client.id}.`));

  const currentSrc = isCustom
    ? client.logoUrl
    : `${MEDIA_BASE_URL}/client-${client.id}${CANDIDATE_EXTENSIONS[extIndex]}`;

  const handleError = () => {
    if (isCustom) {
      setAllFailed(true);
    } else if (extIndex < CANDIDATE_EXTENSIONS.length - 1) {
      setExtIndex((prev) => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  return (
    <div
      style={{ aspectRatio: '188.3903 / 97.2219' }}
      className="group bg-white rounded-lg hover:ring-2 hover:ring-[#E5192D] shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-0 overflow-hidden relative"
      title={client.name}
    >
      {!allFailed ? (
        <img
          loading="lazy"
          decoding="async"
          key={currentSrc}
          src={currentSrc}
          alt={client.name}
          onError={handleError}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform"
        />
      ) : (
        <span className="font-extrabold text-slate-800 text-sm sm:text-base tracking-tight group-hover:text-[#E5192D] transition-colors text-center px-2">
          {client.name}
        </span>
      )}
    </div>
  );
};

export const Clients: React.FC<ClientsProps> = ({ onOpenLightbox }) => {
  return (
    <section
      id="clients"
      className="py-24 sm:py-32 bg-[#050B14] border-t border-white/5"
      data-purpose="clients-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-5xl sm:text-7xl text-[#E5192D] tracking-tight">
            Our Clients
          </h2>
          <div className="h-1.5 w-24 bg-[#E5192D] mx-auto mt-4 rounded-full" />
        </div>

        {/* 7x5 Logo Board (35 Clean Boxes Ready for Image Placing) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4">
          {CLIENT_LOGOS_35.map((client) => (
            <ClientLogoBox
              key={client.id}
              client={client}
              onOpenLightbox={onOpenLightbox}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
