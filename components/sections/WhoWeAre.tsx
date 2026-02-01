'use client';

import Link from 'next/link';
import Image from 'next/image';

// ============================================
// TYPES - Editable via site-data (no code changes needed)
// ============================================

export interface WhoWeAreProps {
  /** Small label above the title (e.g. "WHO WE ARE") */
  sectionLabel: string;
  /** Main heading */
  title: string;
  /** Description paragraph */
  description: string;
  /** CTA button */
  cta: {
    label: string;
    href: string;
  };
  /** Image - replace file in public/assets/About/ to update */
  image: {
    src: string;
    alt: string;
  };
}

// ============================================
// STYLES
// ============================================

const BRAND = {
  darkGreen: '#2F5C4B',
  lightGreen: '#9BDC51',
};

const STYLES = {
  section: 'py-16 lg:py-24 bg-[#FAFAF9]',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  grid: 'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center',
  content: 'space-y-6',
  label: 'flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-[#2F5C4B]',
  labelLine: 'w-8 h-0.5 bg-[#2F5C4B]',
  title: 'text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight',
  description: 'text-lg text-gray-600 leading-relaxed',
  ctaButton:
    'inline-flex items-center gap-2 px-6 py-4 rounded-full text-white font-medium transition-all duration-200 hover:opacity-90',
  imageWrapper: 'relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] rounded-lg overflow-hidden',
  image: 'object-cover w-full h-full',
  gradientOverlay:
    'absolute inset-0 bg-gradient-to-br from-[#2F5C4B]/40 via-transparent to-transparent',
  shapeOverlay: 'absolute pointer-events-none object-contain',
};

// ============================================
// COMPONENT
// ============================================

export default function WhoWeAre({
  sectionLabel,
  title,
  description,
  cta,
  image,
}: WhoWeAreProps) {
  return (
    <section className={STYLES.section}>
      <div className={STYLES.container}>
        <div className={STYLES.grid}>
          {/* Left: Content */}
          <div className={STYLES.content}>
            <div className={STYLES.label}>
              <span className={STYLES.labelLine} />
              {sectionLabel}
            </div>
            <h2 className={STYLES.title}>{title}</h2>
            <p className={STYLES.description}>{description}</p>
            <Link
              href={cta.href}
              className={STYLES.ctaButton}
              style={{ backgroundColor: BRAND.lightGreen }}
            >
              {cta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Right: Image with overlays */}
          <div className={STYLES.imageWrapper}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={STYLES.image}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
            <div className={STYLES.gradientOverlay} />
            {/* White splash shapes - use bottomleft.svg & middleright.svg to match design */}
            <img
              src="/assets/About/bottomleft.svg"
              alt=""
              className={`${STYLES.shapeOverlay} left-0 bottom-0 h-[55%] w-auto object-contain object-bottom-left`}
              aria-hidden
            />
            <img
              src="/assets/About/middleright.svg"
              alt=""
              className={`${STYLES.shapeOverlay} right-0 top-0 bottom-0 h-full w-auto max-w-[50%] object-contain object-right`}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
