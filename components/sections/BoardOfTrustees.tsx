import Image from 'next/image';

// ============================================
// TYPES – Editable via site-data (no code changes needed)
// ============================================

export interface Trustee {
  name: string;
  title: string;
  image: { src: string; alt: string };
}

export interface BoardOfTrusteesProps {
  /** Small label above the title (e.g. "GOVERNANCE") */
  sectionLabel?: string;
  title: string;
  description?: string;
  members: Trustee[];
}

// ============================================
// STYLES
// ============================================

const STYLES = {
  section: 'py-16 lg:py-24 bg-white',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  header: 'text-center max-w-2xl mx-auto mb-12 lg:mb-16',
  label:
    'inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#2F5C4B] mb-3',
  labelLine: 'w-8 h-0.5 bg-[#2F5C4B]',
  title: 'text-3xl sm:text-4xl font-bold text-gray-900 mb-4',
  description: 'text-lg text-gray-600 leading-relaxed',
  grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8',
  card: 'bg-[#FAFAF9] rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col',
  imageWrapper: 'relative aspect-[4/3] w-full bg-[#094C3B]/5',
  image: 'object-cover w-full h-full',
  placeholder:
    'absolute inset-0 flex items-center justify-center bg-[#094C3B] text-white text-3xl font-semibold',
  body: 'p-6 flex-1 flex flex-col',
  name: 'text-xl font-bold text-gray-900',
  role: 'text-[#2F5C4B] text-sm font-medium mt-0.5',
};

// ============================================
// HELPERS
// ============================================

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

// ============================================
// COMPONENT
// ============================================

export default function BoardOfTrustees({
  sectionLabel,
  title,
  description,
  members,
}: BoardOfTrusteesProps) {
  return (
    <section
      id="board"
      className={`${STYLES.section} scroll-mt-24`}
      aria-labelledby="board-heading"
    >
      <div className={STYLES.container}>
        <header className={STYLES.header}>
          {sectionLabel && (
            <span className={STYLES.label}>
              <span className={STYLES.labelLine} />
              {sectionLabel}
            </span>
          )}
          <h2 id="board-heading" className={STYLES.title}>
            {title}
          </h2>
          {description && <p className={STYLES.description}>{description}</p>}
        </header>

        <div className={STYLES.grid}>
          {members.map((member, index) => (
            <article key={`${member.name}-${index}`} className={STYLES.card}>
              <div className={STYLES.imageWrapper}>
                {member.image.src ? (
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    className={STYLES.image}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <span className={STYLES.placeholder} aria-hidden>
                    {initials(member.name)}
                  </span>
                )}
              </div>
              <div className={STYLES.body}>
                <h3 className={STYLES.name}>{member.name}</h3>
                <p className={STYLES.role}>{member.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
