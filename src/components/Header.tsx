import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { MEDIA } from '../data/content.ts';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Mission', href: '#mission', id: 'mission' },
    { label: 'Vision', href: '#vision', id: 'vision' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Clients', href: '#clients', id: 'clients' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07101E]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-[#07101E]/85 backdrop-blur-sm border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
      {/* Zone 1: Unified Brand Logo Element */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none"
        >
          {/* Logo Mark (Striped R) */}
          <div className="w-8 sm:w-9 h-7 sm:h-7 flex items-center justify-center relative shrink-0">
            <img
              src={MEDIA.brandLogoMark}
              alt="Rollin Realms Logo"
              onError={(e) => {
                (e.target as HTMLImageElement).src = MEDIA.brandLogoMarkFallback;
              }}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          { /* Logotype Image (ROLLIN REALMS) */ }
          <div className="h-6 sm:h-6 w-auto flex items-center">
            <img
              src={MEDIA.heroLogotype}
              alt="ROLLIN REALMS"
              onError={(e) => {
                (e.target as HTMLImageElement).src = MEDIA.heroLogotypeFallback;
              }}
              className="h-full w-auto max-h-7 object-contain object-left"
            />
          </div>
        </a>

        {/* Zone 2: Navigation Links (About, Mission, Vision, Services, Clients, Portfolio, Contact) */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold tracking-wide">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`nav-link flex items-center gap-1.5 py-1 whitespace-nowrap shrink-0 transition-colors ${
                  isActive ? 'text-[#E5192D] font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`text-[10px] text-[#E5192D] transition-all duration-200 ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'
                  }`}
                  aria-hidden="true"
                >
                  ◀
                </span>
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#booking-form"
            onClick={(e) => handleNavClick(e, '#booking-form')}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-widest bg-[#E5192D] text-white hover:bg-[#FF283C] transition-all rounded shadow-lg shadow-[#E5192D]/30 hover:shadow-[#E5192D]/50 active:scale-95 whitespace-nowrap"
          >
            <span>Book Service</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050B14]/98 border-b border-white/10 px-6 py-6 transition-all duration-300 backdrop-blur-xl">
          <div className="flex flex-col space-y-3.5 text-base font-bold">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`py-1.5 flex items-center justify-between border-b border-white/5 ${
                  activeSection === item.id ? 'text-[#E5192D]' : 'text-slate-200 hover:text-[#E5192D]'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#E5192D]">◀</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#booking-form"
                onClick={(e) => handleNavClick(e, '#booking-form')}
                className="w-full text-center py-3 text-xs font-bold uppercase tracking-widest bg-[#E5192D] text-white rounded"
              >
                Book Service →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
