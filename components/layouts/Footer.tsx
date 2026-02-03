import Link from 'next/link';

// ============================================
// TYPES – Editable via site-data (no code changes needed)
// ============================================

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  logo: {
    src: string;
    alt: string;
    text: string;
    href: string;
  };
  mission: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  linkColumns: FooterLink[][];
  copyright: {
    year: number;
    organizationName: string;
    text?: string;
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
  main: 'bg-[#2F5C4B] text-white',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20',
  grid: 'grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16',
  left: 'max-w-xl space-y-6',
  logoWrapper: 'flex items-center gap-3',
  logoIcon: 'w-14 h-14 rounded-full border-2 border-[#9BDC51] bg-white/10 flex items-center justify-center overflow-hidden shrink-0',
  logoText: 'text-2xl font-bold text-white',
  mission: 'text-white/90 text-base leading-relaxed',
  buttons: 'flex flex-wrap gap-4 pt-2',
  primaryButton:
    'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 hover:opacity-90 text-[#2F5C4B] bg-[#9BDC51]',
  secondaryButton:
    'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 border-2 border-white text-white hover:bg-white/10',
  right: 'flex flex-wrap gap-12 lg:gap-16',
  column: 'space-y-4',
  columnLink: 'text-white hover:text-white/80 transition-colors block text-base',
  copyrightBar: 'bg-[#9BDC51] py-4',
  copyrightInner: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center',
  copyrightText: 'text-[#2F5C4B] text-sm font-medium',
};

// ============================================
// COMPONENT
// ============================================

export default function Footer({
  logo,
  mission,
  primaryCta,
  secondaryCta,
  linkColumns,
  copyright: copyrightConfig,
}: FooterProps) {
  const copyrightText =
    copyrightConfig.text ??
    `©Copyright ${copyrightConfig.year} ${copyrightConfig.organizationName}. All Right reserved.`;

  return (
    <footer role="contentinfo">
      {/* Main footer – dark green */}
      <div className={STYLES.main}>
        <div className={STYLES.container}>
          <div className={STYLES.grid}>
            {/* Left: Logo, mission, CTAs */}
            <div className={STYLES.left}>
              <Link href={logo.href} className={STYLES.logoWrapper}>
                <span className={STYLES.logoIcon}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain p-1.5"
                    width={56}
                    height={56}
                  />
                </span>
                <span className={STYLES.logoText}>{logo.text}</span>
              </Link>
              <p className={STYLES.mission}>{mission}</p>
              <div className={STYLES.buttons}>
                <Link href={primaryCta.href} className={STYLES.primaryButton}>
                  {primaryCta.label}
                </Link>
                <Link href={secondaryCta.href} className={STYLES.secondaryButton}>
                  {secondaryCta.label}
                </Link>
              </div>
            </div>

            {/* Right: Link columns */}
            <div className={STYLES.right}>
              {linkColumns.map((column, colIndex) => (
                <div key={colIndex} className={STYLES.column}>
                  {column.map((link) => {
                    const isExternal = link.href.startsWith('http');
                    return isExternal ? (
                      <a
                        key={link.href + link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={STYLES.columnLink}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href + link.label}
                        href={link.href}
                        className={STYLES.columnLink}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar – light green */}
      <div className={STYLES.copyrightBar}>
        <div className={STYLES.copyrightInner}>
          <p className={STYLES.copyrightText}>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
