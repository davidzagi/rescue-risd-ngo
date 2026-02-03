'use client';

import Image from 'next/image';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

// ============================================
// TYPES – Editable via site-data (no code changes needed)
// ============================================

export interface TeamMemberSocial {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  image: { src: string; alt: string };
  social: TeamMemberSocial;
}

export interface OurTeamProps {
  title: string;
  description?: string;
  members: TeamMember[];
}

// ============================================
// STYLES
// ============================================

const STYLES = {
  section: 'py-16 lg:py-24 bg-[#FAFAF9]',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  header: 'text-center max-w-2xl mx-auto mb-12 lg:mb-16',
  title: 'text-3xl sm:text-4xl font-bold text-gray-900 mb-4',
  description: 'text-lg text-gray-600 leading-relaxed',
  grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8',
  card: 'bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col',
  imageWrapper: 'relative aspect-square w-full',
  image: 'object-cover w-full h-full',
  body: 'p-5 flex-1 flex flex-col',
  name: 'text-lg font-bold text-gray-900',
  role: 'text-gray-500 text-sm mt-0.5',
  social: 'flex items-center gap-3 mt-4',
  socialLink:
    'text-gray-500 hover:text-[#2F5C4B] transition-colors rounded-full p-1.5 hover:bg-gray-100',
};

// ============================================
// COMPONENT
// ============================================

export default function OurTeam({ title, description, members }: OurTeamProps) {
  return (
    <section className={STYLES.section} aria-labelledby="our-team-heading">
      <div className={STYLES.container}>
        <header className={STYLES.header}>
          <h2 id="our-team-heading" className={STYLES.title}>
            {title}
          </h2>
          {description && (
            <p className={STYLES.description}>{description}</p>
          )}
        </header>

        <div className={STYLES.grid}>
          {members.map((member, index) => (
            <article
              key={`${member.name}-${index}`}
              className={STYLES.card}
            >
              <div className={STYLES.imageWrapper}>
                <Image
                  src={member.image.src}
                  alt={member.image.alt}
                  fill
                  className={STYLES.image}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className={STYLES.body}>
                <h3 className={STYLES.name}>{member.name}</h3>
                <p className={STYLES.role}>{member.title}</p>
                <div className={STYLES.social}>
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={STYLES.socialLink}
                      aria-label={`${member.name} on Facebook`}
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={STYLES.socialLink}
                      aria-label={`${member.name} on Twitter`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={STYLES.socialLink}
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
