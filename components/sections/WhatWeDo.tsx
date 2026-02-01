'use client';

import Image from 'next/image';

// ============================================
// TYPES - Editable via site-data (no code changes needed)
// ============================================

export interface FocusArea {
  /** Icon key: education | health | environment | governance - or custom path in iconSrc */
  icon: 'education' | 'health' | 'environment' | 'governance';
  /** Optional: override with custom icon image path */
  iconSrc?: string;
  title: string;
  description: string;
}

export interface WhatWeDoProps {
  sectionLabel: string;
  title: string;
  /** Intro text before the focus areas list */
  intro: string;
  focusAreas: FocusArea[];
  /** Image - replace file to update */
  image: {
    src: string;
    alt: string;
  };
}

// ============================================
// ICONS - Green brand-colored SVGs
// ============================================

const ICON_COLOR = '#2F5C4B';

function EducationIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path
        d="M12 3L2 9l10 6 10-6-10-6zM2 15l10 6 10-6M2 15v2l10 6 10-6v-2"
        stroke={ICON_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HealthIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="12" cy="12" r="9" stroke={ICON_COLOR} strokeWidth="2" />
      <path d="M12 8v8M8 12h8" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EnvironmentIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path
        d="M4 14c1.5 0 3-1 4-2s2.5-2 4-2"
        stroke={ICON_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 18c2 0 4-1.5 6-3s4-3 6-3"
        stroke={ICON_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 10c1 0 2.5-1 4-2s3-2 4-2"
        stroke={ICON_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2 22h20M12 2v4M12 22V12"
        stroke={ICON_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GovernanceIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="12" cy="7" r="3" stroke={ICON_COLOR} strokeWidth="2" />
      <path
        d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2"
        stroke={ICON_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 14h4v4l-2-1-2 1v-4z"
        stroke={ICON_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FocusAreaIcon({ icon, iconSrc }: { icon: FocusArea['icon']; iconSrc?: string }) {
  if (iconSrc) {
    return (
      <img src={iconSrc} alt="" className="h-10 w-10 shrink-0 object-contain" aria-hidden />
    );
  }
  switch (icon) {
    case 'education':
      return <EducationIcon />;
    case 'health':
      return <HealthIcon />;
    case 'environment':
      return <EnvironmentIcon />;
    case 'governance':
      return <GovernanceIcon />;
    default:
      return <EducationIcon />;
  }
}

// ============================================
// STYLES
// ============================================

const STYLES = {
  section: 'py-16 lg:py-24 bg-[#FAFAF9]',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  grid: 'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center',
  /** Image column comes first (left) on desktop */
  imageOrder: 'lg:order-1',
  contentOrder: 'lg:order-2',
  content: 'space-y-6',
  label: 'flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-[#2F5C4B]',
  labelLine: 'w-8 h-0.5 bg-[#2F5C4B]',
  title: 'text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight',
  intro: 'text-lg text-gray-600 leading-relaxed',
  focusList: 'space-y-6 mt-8',
  focusItem: 'flex gap-4',
  focusContent: 'space-y-1',
  focusTitle: 'font-bold text-gray-900',
  focusDesc: 'text-gray-600',
  imageWrapper: 'relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] rounded-lg overflow-hidden',
  image: 'object-cover w-full h-full',
  gradientOverlay:
    'absolute inset-0 bg-gradient-to-bl from-[#2F5C4B]/40 via-transparent to-transparent',
  shapeOverlay: 'absolute pointer-events-none object-contain',
};

// ============================================
// COMPONENT
// ============================================

export default function WhatWeDo({
  sectionLabel,
  title,
  intro,
  focusAreas,
  image,
}: WhatWeDoProps) {
  return (
    <section className={STYLES.section}>
      <div className={STYLES.container}>
        <div className={STYLES.grid}>
          {/* Left: Image with overlays */}
          <div className={STYLES.imageOrder}>
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

          {/* Right: Content */}
          <div className={`${STYLES.content} ${STYLES.contentOrder}`}>
            <div className={STYLES.label}>
              <span className={STYLES.labelLine} />
              {sectionLabel}
            </div>
            <h2 className={STYLES.title}>{title}</h2>
            <p className={STYLES.intro}>{intro}</p>
            <ul className={STYLES.focusList}>
              {focusAreas.map((area, index) => (
                <li key={index} className={STYLES.focusItem}>
                  <FocusAreaIcon icon={area.icon} iconSrc={area.iconSrc} />
                  <div className={STYLES.focusContent}>
                    <h3 className={STYLES.focusTitle}>{area.title}</h3>
                    <p className={STYLES.focusDesc}>{area.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
