'use client';

// ============================================
// TYPES – Editable via site-data (no code changes needed)
// ============================================

export interface VisionMissionValuesProps {
  vision: {
    title: string;
    description: string;
  };
  mission: {
    title: string;
    description: string;
  };
  values: {
    title: string;
    /** Each string is one line (e.g. "Accountability • Transparency • Integrity") */
    items: string[];
  };
}

// ============================================
// BACKGROUND ICONS – Subtle, bottom-right
// ============================================

function VisionIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M40 20v40M20 40h40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function MissionIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M40 18c-12 0-22 10-22 22 0 14 22 32 22 32s22-18 22-32c0-12-10-22-22-22z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ValuesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M40 55V25M28 37l12-12 12 12M28 43l12 12 12-12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 58h32M30 50h20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ============================================
// STYLES
// ============================================

const STYLES = {
  section: 'py-16 lg:py-24 bg-[#FAFAF9]',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  grid: 'grid md:grid-cols-3 gap-6 lg:gap-8',
  card: 'relative rounded-xl overflow-hidden min-h-[220px] flex flex-col p-6 lg:p-8',
  cardVision: 'bg-[#2F5C4B] text-white',
  cardLight: 'bg-white text-gray-900 border border-gray-100',
  title: 'text-xl lg:text-2xl font-bold leading-tight mb-3',
  description: 'text-base leading-relaxed',
  list: 'space-y-2 text-base leading-relaxed',
  listItem: 'flex items-start gap-2',
  bullet: 'shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2F5C4B]',
  iconWrapper: 'absolute bottom-0 right-0 w-24 h-24 lg:w-28 lg:h-28 opacity-[0.12] pointer-events-none',
  iconWrapperLight: 'absolute bottom-0 right-0 w-24 h-24 lg:w-28 lg:h-28 opacity-20 pointer-events-none text-[#2F5C4B]',
};

// ============================================
// COMPONENT
// ============================================

export default function VisionMissionValues({
  vision,
  mission,
  values,
}: VisionMissionValuesProps) {
  return (
    <section className={STYLES.section}>
      <div className={STYLES.container}>
        <h2 className="sr-only">Our Vision, Mission and Values</h2>
        <div className={STYLES.grid}>
          {/* Our Vision – dark green */}
          <div className={`${STYLES.card} ${STYLES.cardVision}`}>
            <div className={STYLES.iconWrapper} style={{ color: 'rgba(255,255,255,0.4)' }}>
              <VisionIcon className="w-full h-full" />
            </div>
            <h3 className={STYLES.title}>
              {vision.title}
            </h3>
            <p className={`${STYLES.description} flex-1`}>{vision.description}</p>
          </div>

          {/* Our Mission – white */}
          <div className={`${STYLES.card} ${STYLES.cardLight}`}>
            <div className={STYLES.iconWrapperLight}>
              <MissionIcon className="w-full h-full" />
            </div>
            <h3 className={STYLES.title}>{mission.title}</h3>
            <p className={`${STYLES.description} text-gray-600 flex-1`}>
              {mission.description}
            </p>
          </div>

          {/* Our Values – white */}
          <div className={`${STYLES.card} ${STYLES.cardLight}`}>
            <div className={STYLES.iconWrapperLight}>
              <ValuesIcon className="w-full h-full" />
            </div>
            <h3 className={STYLES.title}>{values.title}</h3>
            <ul className={STYLES.list}>
              {values.items.map((item, i) => (
                <li key={i} className={STYLES.listItem}>
                  <span className={STYLES.bullet} aria-hidden />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
