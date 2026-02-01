'use client';

import Image from 'next/image';

// ============================================
// TYPES - Editable via site-data (no code changes needed)
// ============================================

export interface MeasureLastingChangeProps {
  /** Main heading */
  heading: string;
  /** List of achievements - use **text** for bold (e.g. "**55** communities") */
  achievements: string[];
  /** Photo on the right - replace file to update */
  image: {
    src: string;
    alt: string;
    /** Apply grayscale filter (default: true for B&W look) */
    grayscale?: boolean;
  };
}

// ============================================
// STYLES
// ============================================

const BRAND = {
  lightGreen: '#e5f9e9',
  darkGreen: '#2F5C4B',
};

const STYLES = {
  section: 'relative overflow-hidden',
  grid: 'grid lg:grid-cols-3 gap-0 min-h-[400px]',
  /** Left ~2/3 - light green with text */
  textColumn:
    'lg:col-span-2 relative flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 z-10',
  heading: 'text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight max-w-xl',
  list: 'mt-8 space-y-4',
  listItem: 'flex items-start gap-3 text-gray-600',
  bullet: 'mt-1.5 shrink-0 w-2 h-2 rounded-sm',
  /** Right ~1/3 - image clipped to SVG shape */
  imageColumn: 'relative lg:col-span-1 min-h-[300px] lg:min-h-0 overflow-hidden',
  image: 'object-cover w-full h-full',
};

// Parse simple **bold** markup in text
function parseBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-800">{part}</strong> : part
  );
}

// ============================================
// COMPONENT
// ============================================

export default function MeasureLastingChange({
  heading,
  achievements,
  image,
}: MeasureLastingChangeProps) {
  return (
    <section className={STYLES.section} style={{ backgroundColor: BRAND.lightGreen }}>
      <div className={STYLES.grid}>
        {/* Left: Light green background with text */}
        <div className={STYLES.textColumn}>
          <h2 className={STYLES.heading}>{heading}</h2>
          <ul className={STYLES.list}>
            {achievements.map((item, index) => (
              <li key={index} className={STYLES.listItem}>
                <span
                  className={STYLES.bullet}
                  style={{ backgroundColor: BRAND.darkGreen }}
                  aria-hidden
                />
                <span className="text-base lg:text-lg">{parseBold(item)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Photo */}
        <div className={STYLES.imageColumn}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={`${STYLES.image} ${image.grayscale !== false ? 'grayscale' : ''}`}
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
