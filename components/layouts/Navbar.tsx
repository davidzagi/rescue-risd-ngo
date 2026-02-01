'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CONFIG } from '@/data/site-data';

// ============================================
// TYPES - Reusable component props
// ============================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  /** Logo image source */
  logoSrc?: string;
  /** Logo alt text */
  logoAlt?: string;
  /** Brand text next to logo */
  logoText?: string;
  /** Logo/home link URL */
  logoHref?: string;
  /** Navigation links */
  links?: NavLink[];
  /** CTA button label */
  ctaLabel?: string;
  /** CTA button URL */
  ctaHref?: string;
}

// ============================================
// STYLES - Match design: white bg, dark green (#2F5C4B), gray links (#5A5A5A)
// ============================================

const BRAND = {
  darkGreen: '#2F5C4B',
  navGray: '#5A5A5A',
};

const STYLES = {
  // Main header bar - white background, generous height
  header: 'sticky top-0 z-50 bg-white',
  headerScrolled: 'shadow-sm',
  
  // Container - grid for true centering: logo | nav (center) | cta
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  nav: 'grid grid-cols-[1fr_auto_1fr] items-center h-20 gap-4',
  
  // Logo (left) - circular emblem + brand text
  logoWrapper: 'flex items-center gap-3 justify-self-start',
  logoIcon: 'w-14 h-14 rounded-full object-cover',
  logoText: 'text-2xl font-bold',
  
  // Desktop links (center) - truly centered in viewport
  desktopNav: 'hidden lg:flex items-center justify-center gap-8 justify-self-center',
  navLink: 'font-medium transition-colors py-2',
  navLinkActive: 'text-[#2F5C4B]',
  navLinkInactive: 'text-[#5A5A5A] hover:text-[#2F5C4B]',
  
  // CTA Button (right) - pill-shaped, dark green
  ctaWrapper: 'flex items-center gap-4 justify-self-end col-start-3',
  ctaButton: 'hidden lg:inline-flex items-center justify-center px-8 py-3 text-white font-medium rounded-full transition-all duration-200 hover:opacity-90',
  
  // Mobile menu button
  mobileMenuBtn: 'lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-100',
  
  // Mobile menu overlay
  mobileOverlay: 'fixed inset-0 bg-black/20 z-40 lg:hidden transition-opacity duration-300',
  mobileOverlayHidden: 'opacity-0 pointer-events-none',
  mobileOverlayVisible: 'opacity-100',
  
  // Mobile menu panel
  mobilePanel: 'fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 lg:hidden transition-transform duration-300 ease-out',
  mobilePanelHidden: 'translate-x-full',
  mobilePanelVisible: 'translate-x-0',
  
  mobileCloseBtn: 'p-2 rounded-full transition-colors hover:bg-gray-100',
  mobileLink: 'relative block px-4 py-3 rounded-xl font-medium transition-colors hover:bg-gray-50',
  mobileLinkActive: '',
  mobileLinkIndicator: 'absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full transition-all duration-300',
  mobileLinkIndicatorHidden: 'opacity-0 scale-y-0',
  mobileLinkIndicatorVisible: 'opacity-100 scale-y-100',
  
  mobileCta: 'block w-full py-3 px-6 text-center text-white font-medium rounded-full transition-colors hover:opacity-90',
};


// ============================================
// ICONS - Simple SVG icons
// ============================================

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ============================================
// MAIN NAVBAR COMPONENT
// ============================================

export default function Navbar(props: NavbarProps = {}) {
  const {
    logoSrc = '/risd-logo.jpg',
    logoAlt = 'RISD Logo',
    logoText = CONFIG.logo.text,
    logoHref = CONFIG.logo.href,
    links = CONFIG.links,
    ctaLabel = CONFIG.cta.label,
    ctaHref = CONFIG.cta.href,
  } = props;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const currentPath = usePathname();

  // Handle scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      {/* Header - white background, matches design */}
      <header className={`${STYLES.header} ${isScrolled ? STYLES.headerScrolled : ''}`}>
        <div className={STYLES.container}>
          <nav className={STYLES.nav}>
            
            {/* Logo - Left: circular emblem + brand text */}
            <Link href={logoHref} className={STYLES.logoWrapper}>
              <Image 
                src={logoSrc} 
                alt={logoAlt} 
                width={56} 
                height={56} 
                className={STYLES.logoIcon}
              />
              <span className={STYLES.logoText} style={{ color: BRAND.darkGreen }}>
                {logoText}
              </span>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className={STYLES.desktopNav}>
              {links.map((link) => {
                const isActive = currentPath === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${STYLES.navLink} ${isActive ? STYLES.navLinkActive : STYLES.navLinkInactive}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle - Right */}
            <div className={STYLES.ctaWrapper}>
              <Link 
                href={ctaHref} 
                className={STYLES.ctaButton}
                style={{ backgroundColor: BRAND.darkGreen }}
              >
                {ctaLabel}
              </Link>
              
              <button
                onClick={() => setIsMobileOpen(true)}
                className={STYLES.mobileMenuBtn}
                style={{ color: BRAND.navGray }}
                aria-label="Open menu"
              >
                <MenuIcon />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`${STYLES.mobileOverlay} ${isMobileOpen ? STYLES.mobileOverlayVisible : STYLES.mobileOverlayHidden}`}
        onClick={() => setIsMobileOpen(false)} 
      />
      
      <div className={`${STYLES.mobilePanel} ${isMobileOpen ? STYLES.mobilePanelVisible : STYLES.mobilePanelHidden}`}>
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileOpen(false)}
            className={STYLES.mobileCloseBtn}
            style={{ color: BRAND.navGray }}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>
        
        <nav className="px-6 py-4">
          <ul className="space-y-2">
            {links.map((link, index) => {
              const isActive = currentPath === link.href;
              return (
                <li 
                  key={link.href}
                  className="transition-all duration-300"
                  style={{ 
                    transitionDelay: isMobileOpen ? `${index * 50}ms` : '0ms',
                    opacity: isMobileOpen ? 1 : 0,
                    transform: isMobileOpen ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={STYLES.mobileLink}
                    style={{ 
                      color: isActive ? BRAND.darkGreen : BRAND.navGray,
                      backgroundColor: isActive ? 'rgba(47, 92, 75, 0.08)' : undefined,
                    }}
                  >
                    <span 
                      className={`${STYLES.mobileLinkIndicator} ${isActive ? STYLES.mobileLinkIndicatorVisible : STYLES.mobileLinkIndicatorHidden}`}
                      style={{ backgroundColor: BRAND.darkGreen }}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div 
            className="mt-8 px-4 transition-all duration-300"
            style={{ 
              transitionDelay: isMobileOpen ? `${links.length * 50 + 100}ms` : '0ms',
              opacity: isMobileOpen ? 1 : 0,
              transform: isMobileOpen ? 'translateY(0)' : 'translateY(10px)'
            }}
          >
            <Link
              href={ctaHref}
              onClick={() => setIsMobileOpen(false)}
              className={STYLES.mobileCta}
              style={{ backgroundColor: BRAND.darkGreen }}
            >
              {ctaLabel}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}