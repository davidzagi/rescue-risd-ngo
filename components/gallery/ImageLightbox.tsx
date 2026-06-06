'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryImage = { src: string; alt: string };

type ImageLightboxProps = {
  images: GalleryImage[];
  index: number;
  onIndexChange: (newIndex: number) => void;
  onClose: () => void;
};

export default function ImageLightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: ImageLightboxProps) {
  const total = images.length;
  const current = images[index];
  const hasMultiple = total > 1;

  const goPrev = useCallback(
    () => onIndexChange((index - 1 + total) % total),
    [index, total, onIndexChange]
  );
  const goNext = useCallback(
    () => onIndexChange((index + 1) % total),
    [index, total, onIndexChange]
  );

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft' && hasMultiple) goPrev();
      else if (e.key === 'ArrowRight' && hasMultiple) goNext();
    },
    [onClose, goPrev, goNext, hasMultiple]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Close lightbox"
      >
        <X className="w-7 h-7" strokeWidth={2} />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full text-white/90 hover:text-white bg-black/30 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full text-white/90 hover:text-white bg-black/30 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9" strokeWidth={2} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white/80 text-sm font-medium px-3 py-1 rounded-full bg-black/40">
            {index + 1} / {total}
          </div>
        </>
      )}

      <div
        className="relative max-w-[92vw] max-h-[92vh] w-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={1600}
          height={1067}
          className="max-h-[88vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          sizes="92vw"
          priority
        />
      </div>
    </div>
  );
}
