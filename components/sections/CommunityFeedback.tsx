'use client';

import Image from 'next/image';
import { useState } from 'react';

// ============================================
// TYPES - Editable via site-data (no code changes needed)
// ============================================

export interface TestimonialItem {
  quote: string;
  authorName: string;
  authorTitle: string;
  image: { src: string; alt: string };
}

export interface CommunityFeedbackProps {
  sectionLabel: string;
  title: string;
  testimonials: TestimonialItem[];
}

// ============================================
// STYLES
// ============================================

const BRAND = {
  darkGreen: '#2F5C4B',
  labelGray: '#6B7280',
  quoteGray: '#D1D5DB',
  textGray: '#4B5563',
  cardShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
};

const STYLES = {
  section: 'py-16 lg:py-24 bg-white',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  header: 'flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10',
  label: 'flex items-center gap-3 text-sm font-semibold uppercase tracking-wider',
  labelLine: 'w-8 h-0.5 shrink-0',
  title: 'text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight',
  nav: 'flex items-center gap-2 shrink-0',
  navButton:
    'flex items-center justify-center w-10 h-10 rounded-full border transition-colors shadow-sm',
  viewport: 'overflow-hidden w-full',
  track: 'flex transition-transform duration-300 ease-out',
  card:
    'flex-shrink-0 min-w-0 rounded-xl border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 flex flex-col shadow-sm',
  quoteMark: 'text-5xl sm:text-6xl font-serif leading-none text-gray-200 select-none',
  quoteText: 'text-gray-600 leading-relaxed mt-2 flex-1',
  author: 'flex items-center gap-4 mt-6',
  avatar:
    'w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0',
  authorName: 'font-semibold text-gray-900',
  authorTitle: 'text-sm text-gray-500',
};

// Get initials from full name (e.g. "Mason Brooks" -> "MB")
function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((s) => s[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Simple hash for consistent avatar color from name
function avatarColor(name: string) {
  const colors = [
    '#2F5C4B', // dark green
    '#094C3B', // primary
    '#4A7C59',
    '#3D6B4F',
  ];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h << 5) - h + name.charCodeAt(i);
  return colors[Math.abs(h) % colors.length];
}

// ============================================
// COMPONENT
// ============================================

export default function CommunityFeedback({
  sectionLabel,
  title,
  testimonials,
}: CommunityFeedbackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = testimonials.length;
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < count - 1;

  const goPrev = () => {
    if (canGoPrev) setActiveIndex((i) => i - 1);
  };

  const goNext = () => {
    if (canGoNext) setActiveIndex((i) => i + 1);
  };

  return (
    <section className={STYLES.section}>
      <div className={STYLES.container}>
        <header className={STYLES.header}>
          <div>
            <p
              className={STYLES.label}
              style={{ color: BRAND.labelGray }}
            >
              <span
                className={STYLES.labelLine}
                style={{ backgroundColor: BRAND.darkGreen }}
                aria-hidden
              />
              {sectionLabel}
            </p>
            <h2 className={STYLES.title}>{title}</h2>
          </div>
          <div className={STYLES.nav} aria-label="Carousel navigation">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label="Previous testimonial"
              className={`${STYLES.navButton} border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Next testimonial"
              className={`${STYLES.navButton} border-transparent text-white disabled:opacity-50 disabled:cursor-not-allowed`}
              style={{ backgroundColor: BRAND.darkGreen }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className={STYLES.viewport}>
          <div
            className={STYLES.track}
            style={{
              width: `${count * 100}%`,
              transform: `translateX(-${activeIndex * (100 / count)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <article
                key={i}
                className={STYLES.card}
                style={{ width: `${100 / count}%` }}
                aria-hidden={i !== activeIndex}
              >
                <span
                  className={STYLES.quoteMark}
                  style={{ color: BRAND.quoteGray }}
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className={STYLES.quoteText}>{t.quote}</p>
                <div className={STYLES.author}>
                  {t.image?.src ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={t.image.src}
                        alt={t.image.alt}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div
                      className={STYLES.avatar}
                      style={{ backgroundColor: avatarColor(t.authorName) }}
                      aria-hidden
                    >
                      {getInitials(t.authorName)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className={STYLES.authorName}>{t.authorName}</p>
                    <p className={STYLES.authorTitle}>{t.authorTitle}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
