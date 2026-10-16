import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxItem {
  src: string;
  title: string;
}

interface MediaLightboxProps {
  isOpen: boolean;
  items: LightboxItem[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({
  isOpen,
  items,
  index,
  onIndexChange,
  onClose,
}) => {
  const touchStartX = useRef<number | null>(null);
  const total = items.length;
  const hasNav = total > 1;

  const go = (dir: 1 | -1) => {
    if (!hasNav) return;
    onIndexChange((index + dir + total) % total);
  };

  // Keyboard: Esc closes, arrows navigate. Also locks page scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  });

  // Preload neighbours so next/prev feels instant.
  useEffect(() => {
    if (!isOpen || !hasNav) return;
    [(index + 1) % total, (index - 1 + total) % total].forEach((i) => {
      const img = new Image();
      img.src = items[i].src;
    });
  }, [isOpen, index, items, total, hasNav]);

  if (!isOpen || !items[index]) return null;
  const current = items[index];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  const navBtn =
    'absolute top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#E5192D] text-white transition-colors';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {hasNav && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Previous image"
            className={`${navBtn} left-3 sm:left-6`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Next image"
            className={`${navBtn} right-3 sm:right-6`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div
        className="flex flex-col items-center max-w-[92vw] px-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.title}
          referrerPolicy="no-referrer"
          draggable={false}
          className="lb-fade max-h-[78vh] max-w-full w-auto object-contain rounded border border-[#E5192D]/40 shadow-2xl bg-[#050B14] select-none"
        />
        <div className="mt-4 flex items-center gap-3 text-xs sm:text-sm font-mono text-slate-300">
          <span>{current.title}</span>
          {hasNav && (
            <>
              <span className="text-slate-600">|</span>
              <span className="text-[#E5192D] font-bold">
                {index + 1} / {total}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
