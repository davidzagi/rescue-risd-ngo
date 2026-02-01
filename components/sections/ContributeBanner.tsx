'use client';

import Image from 'next/image';
import Link from 'next/link';

// ============================================
// TYPES - Editable via site-data (no code changes needed)
// ============================================

export interface ContributeBannerProps {
  /** Main heading over the image */
  heading: string;
  /** Primary CTA (e.g. Partner With Us) - light green button */
  primaryCta: { label: string; href: string };
  /** Secondary CTA (e.g. Support Our Work) - outlined button */
  secondaryCta: { label: string; href: string };
  /** Background image - replace file in public/assets/ContributeBanner/ */
  backgroundImage: {
    src: string;
    alt: string;
  };
  /** Optional overlay (e.g. dark green/teal) - default uses brand overlay */
  overlay?: string;
}

// ============================================
// STYLES
// ============================================

const BRAND = {
  borderBlue: '#4299E1',
  primaryButton: '#BADF75', // light olive green
  overlay: 'linear-gradient(to bottom, rgba(31, 71, 62, 0.75) 0%, rgba(31, 71, 62, 0.65) 100%)',
};

const STYLES = {
  section: 'py-16 lg:py-24 px-4 sm:px-6 lg:px-8',
  container: 'max-w-5xl mx-auto',
  wrapper:
    'relative rounded-2xl overflow-hidden border-4 min-h-[320px] sm:min-h-[380px] flex flex-col items-center justify-center text-center px-6 sm:px-12 py-16 sm:py-20',
  image: 'object-cover',
  overlay: 'absolute inset-0',
  content: 'relative z-10 max-w-2xl',
  heading: 'text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight',
  buttons: 'flex flex-wrap items-center justify-center gap-4 mt-8',
  primaryButton:
    'inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-white transition-opacity hover:opacity-90',
  secondaryButton:
    'inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold bg-white text-gray-900 border-2 border-gray-900 transition-colors hover:bg-gray-100',
};

// ============================================
// COMPONENT
// ============================================

export default function ContributeBanner({
  heading,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlay = BRAND.overlay,
}: ContributeBannerProps) {
  return (
    <section className={STYLES.section}>
      <div className={STYLES.container}>
        <div
          className={STYLES.wrapper}
          style={{ borderColor: BRAND.borderBlue }}
        >
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            className={STYLES.image}
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority={false}
          />
          <div
            className={STYLES.overlay}
            style={{ background: overlay }}
            aria-hidden
          />
          <div className={STYLES.content}>
            <h2 className={STYLES.heading}>{heading}</h2>
            <div className={STYLES.buttons}>
              <Link
                href={primaryCta.href}
                className={STYLES.primaryButton}
                style={{ backgroundColor: BRAND.primaryButton }}
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className={STYLES.secondaryButton}
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
