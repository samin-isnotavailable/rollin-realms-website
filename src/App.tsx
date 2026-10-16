import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Mission } from './components/Mission.tsx';
import { Vision } from './components/Vision.tsx';
import { Services } from './components/Services.tsx';
import { CommercialSnaps } from './components/CommercialSnaps.tsx';
import { ReelSnaps } from './components/ReelSnaps.tsx';
import { Originals } from './components/Originals.tsx';
import { Events } from './components/Events.tsx';
import { Clients } from './components/Clients.tsx';
import { Team } from './components/Team.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { WallOfFame } from './components/WallOfFame.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { MediaLightbox, LightboxItem } from './components/MediaLightbox.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [lightbox, setLightbox] = useState<{ items: LightboxItem[]; index: number } | null>(null);

  // Pass a `group` to enable next/prev across a set of images (e.g. the gallery).
  const handleOpenLightbox = (src: string, title: string, group?: LightboxItem[]) => {
    if (group && group.length > 1) {
      const index = Math.max(0, group.findIndex((g) => g.src === src));
      setLightbox({ items: group, index });
    } else {
      setLightbox({ items: [{ src, title }], index: 0 });
    }
  };

  // ScrollSpy with IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'mission',
      'vision',
      'services',
      'commercial-snaps',
      'reel-snaps',
      'originals',
      'events',
      'clients',
      'team',
      'portfolio',
      'gallery',
      'awards',
      'contact',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            // Map sub-sections to primary navigation links
            if (id === 'commercial-snaps' || id === 'reel-snaps' || id === 'originals' || id === 'events') {
              setActiveSection('services');
            } else if (id === 'team') {
              setActiveSection('about');
            } else if (id === 'gallery' || id === 'awards') {
              setActiveSection('portfolio');
            } else {
              setActiveSection(id);
            }
          }
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#07101E] text-slate-100 flex flex-col font-sans selection:bg-[#E5192D] selection:text-white">
      {/* Sticky Header Navigation */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenLightbox={handleOpenLightbox} />
        <About onOpenLightbox={handleOpenLightbox} />
        <Mission />
        <Vision />
        <Services />
        <CommercialSnaps onOpenLightbox={handleOpenLightbox} />
        <ReelSnaps onOpenLightbox={handleOpenLightbox} />
        <Originals onOpenLightbox={handleOpenLightbox} />
        <Events onOpenLightbox={handleOpenLightbox} />
        <Clients onOpenLightbox={handleOpenLightbox} />
        <Team onOpenLightbox={handleOpenLightbox} />
        <Portfolio onOpenLightbox={handleOpenLightbox} />
        <WallOfFame />
        <Contact onOpenLightbox={handleOpenLightbox} />
      </main>

      {/* Site Footer */}
      <Footer />

      <MediaLightbox
        items={lightbox?.items ?? []}
        index={lightbox?.index ?? 0}
        isOpen={lightbox !== null}
        onIndexChange={(i) => setLightbox((prev) => (prev ? { ...prev, index: i } : prev))}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
