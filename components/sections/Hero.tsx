'use client';

import Link from 'next/link';

// ============================================
// TYPES - Reusable Hero component props
// ============================================

export interface HeroButton {
  label: string;
  href: string;
  /** Optional: 'primary' | 'secondary' - inferred from prop name if omitted */
  variant?: 'primary' | 'secondary';
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroProps {
  /** Main heading text */
  heading: string;
  /** Primary CTA - filled lime-green button */
  primaryCta?: HeroButton;
  /** Secondary CTA - outlined white button */
  secondaryCta?: HeroButton;
  /** Stats displayed at bottom */
  stats?: HeroStat[];
  /** Background image URL */
  backgroundImage?: string;
  /** Gradient overlay - rgba or CSS gradient. Default: dark teal overlay */
  gradientOverlay?: string;
  /** Minimum height (e.g. 'min-h-[70vh]') */
  minHeight?: string;
}

// ============================================
// DEFAULTS - Brand-aligned hero styling
// ============================================

const BRAND = {
  overlay: 'linear-gradient(to bottom, rgba(31, 71, 62, 0.88) 0%, rgba(31, 71, 62, 0.75) 100%)',
  primaryButtonBg: '#9BDC51',
};

const STYLES = {
  wrapper: 'relative flex flex-col justify-end overflow-hidden',
  background: 'absolute inset-0 bg-cover bg-center bg-no-repeat',
  overlay: 'absolute inset-0',
  content: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 pt-32',
  heading: 'text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl',
  buttons: 'flex flex-wrap gap-4 mt-8',
  primaryButton:
    'inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-medium transition-all duration-200 hover:opacity-90',
  secondaryButton:
    'inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-200 border-2 border-white text-white hover:bg-white/10',
  stats: 'mt-16 pt-8 border-t border-white/30 flex flex-wrap gap-8 sm:gap-12',
  stat: 'text-white text-lg sm:text-xl font-medium',
};

// ============================================
// HERO COMPONENT
// ============================================

export default function Hero({
  heading,
  primaryCta,
  secondaryCta,
  stats = [],
  backgroundImage,
  gradientOverlay = BRAND.overlay,
  minHeight = 'min-h-[70vh]',
}: HeroProps) {
  return (
    <section
      className={`${STYLES.wrapper} ${minHeight}`}
      role="banner"
    >
      {/* Background image with solid fallback when image fails/loads */}
      <div
        className={STYLES.background}
        style={{
          backgroundColor: '#1F473E',
          ...(backgroundImage && {
            backgroundImage: `url(${backgroundImage})`,
          }),
        }}
        aria-hidden
      />

      {/* Gradient overlay - ensures text readability over images */}
      <div
        className={STYLES.overlay}
        style={{ background: gradientOverlay }}
        aria-hidden
      />

      {/* Content */}
      <div className={STYLES.content}>
        <h1 className={STYLES.heading}>{heading}</h1>

        {(primaryCta || secondaryCta) && (
          <div className={STYLES.buttons}>
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className={STYLES.primaryButton}
                style={{ backgroundColor: BRAND.primaryButtonBg }}
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className={STYLES.secondaryButton}>
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}

        {stats.length > 0 && (
          <div className={STYLES.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={STYLES.stat}>
                {stat.value} {stat.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
