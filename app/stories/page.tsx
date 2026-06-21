import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Quote } from 'lucide-react';
import { STORIES } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Stories of Change | RISD',
  description:
    'Real voices from the women and communities RISD serves. Stories of resilience, dignity, and lasting change, grouped by program and partner.',
};

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#094C3B] text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #B8DC7C 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, #B8DC7C 0%, transparent 40%)`,
            }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {STORIES.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            {STORIES.subtitle}
          </p>
        </div>
      </section>

      {/* Program navigation (jump links, grouped by partner/program) */}
      <nav
        aria-label="Stories by program"
        className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-[#094C3B]/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 pt-4 pb-3 overflow-x-auto scrollbar-hide">
            {STORIES.programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap text-gray-600 hover:bg-[#094C3B]/10 hover:text-[#094C3B] transition-all duration-200"
              >
                {program.partner}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Program groups */}
      {STORIES.programs.map((program) => (
        <section
          key={program.id}
          id={program.id}
          className="scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
        >
          {/* Group header */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#2F5C4B]">
              <span className="w-8 h-0.5 bg-[#2F5C4B]" />
              {program.partner}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">
              {program.program}
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Story cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {program.stories.map((story) => (
              <Link
                key={story.slug}
                href={`/stories/${story.slug}`}
                className="group flex flex-col rounded-2xl bg-white border border-[#094C3B]/10 shadow-sm hover:shadow-lg hover:border-[#094C3B]/25 transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#094C3B] focus:ring-offset-2 focus:ring-offset-[#f5f3ef]"
              >
                <div className="p-6 flex flex-col flex-1">
                  {/* Avatar + name */}
                  <div className="flex items-center gap-4">
                    {story.image.src ? (
                      <Image
                        src={story.image.src}
                        alt={story.image.alt}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <span className="w-14 h-14 rounded-full bg-[#094C3B] text-white flex items-center justify-center text-lg font-semibold shrink-0">
                        {initials(story.name)}
                      </span>
                    )}
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {story.name}
                      </h3>
                      <p className="text-sm text-[#2F5C4B] font-medium truncate">
                        {story.theme}
                      </p>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div className="relative mt-5 flex-1">
                    <Quote
                      className="absolute -top-1 -left-1 w-7 h-7 text-[#9BDC51]/40"
                      aria-hidden
                    />
                    <p className="relative pl-6 text-gray-600 leading-relaxed line-clamp-4">
                      {story.excerpt}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400">
                      {story.location} · {story.reference}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#094C3B] group-hover:gap-2 transition-all">
                      Read story
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
