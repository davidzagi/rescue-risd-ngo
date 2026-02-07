'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { GALLERY } from '@/data/site-data';
import ImageLightbox from '@/components/gallery/ImageLightbox';

type GalleryImage = { src: string; alt: string };

function buildImages(initiativeId: string, imageCount: number): GalleryImage[] {
  return Array.from({ length: imageCount }, (_, i) => {
    const num = i + 1;
    return {
      src: `/gallery/${initiativeId}/image${num}.webp`,
      alt: `${GALLERY.initiatives.find((x) => x.id === initiativeId)?.label ?? initiativeId} — Image ${num}`,
    };
  });
}

export default function GalleryPage() {
  const [activeInitiative, setActiveInitiative] = useState(GALLERY.initiatives[0].id);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const initiative = useMemo(
    () => GALLERY.initiatives.find((i) => i.id === activeInitiative)!,
    [activeInitiative]
  );
  const images = useMemo(
    () => buildImages(initiative.id, initiative.imageCount),
    [initiative]
  );

  return (
    <main className="min-h-screen bg-[#f5f3ef]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#094C3B] text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #B8DC7C 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, #B8DC7C 0%, transparent 40%)`,
            }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {GALLERY.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            {GALLERY.subtitle}
          </p>
        </div>
      </section>

      {/* Initiative tabs */}
      <div className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-[#094C3B]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 pt-4 pb-3 overflow-x-auto scrollbar-hide">
            {GALLERY.initiatives.map((init) => (
              <button
                key={init.id}
                type="button"
                onClick={() => setActiveInitiative(init.id)}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200
                  ${
                    activeInitiative === init.id
                      ? 'bg-[#094C3B] text-white shadow-md'
                      : 'text-gray-600 hover:bg-[#094C3B]/10 hover:text-[#094C3B]'
                  }
                `}
              >
                {init.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry-style grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div
          className="columns-2 sm:columns-3 gap-4 space-y-4"
          style={{ columnFill: 'balance' }}
        >
          {images.map((img, index) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightboxImage(img)}
              className="block w-full break-inside-avoid mb-4 rounded-xl overflow-hidden bg-white/50 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#094C3B] focus:ring-offset-2 focus:ring-offset-[#f5f3ef] group"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </main>
  );
}
