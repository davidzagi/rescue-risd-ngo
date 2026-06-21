import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ImageIcon, Quote } from 'lucide-react';
import { getAllStories, getStoryBySlug } from '@/data/site-data';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: 'Story Not Found | RISD' };
  return {
    title: `${story.name}, ${story.theme} | RISD`,
    description: story.excerpt,
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const { program } = story;
  const paragraphs = story.quote.split('\n\n');

  // Other stories from the same program (for the "More stories" section)
  const related = program.stories
    .filter((s) => s.slug !== story.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f5f3ef]">
      {/* Header */}
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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All stories
          </Link>
          <span className="mt-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#9BDC51]">
            {program.partner}
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {story.name}
          </h1>
          <p className="mt-3 text-lg text-white/90">{story.theme}</p>
          <p className="mt-2 text-sm text-white/60">
            {program.program} · {story.location} · {story.reference}
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Image section — drop a photo in public/assets/Stories/ and set
            image.src in site-data.ts to replace this placeholder. */}
        <figure className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#094C3B]/5 border border-[#094C3B]/10">
          {story.image.src ? (
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#094C3B]/40">
              <ImageIcon className="w-12 h-12" aria-hidden />
              <span className="text-sm font-medium">Photo coming soon</span>
            </div>
          )}
        </figure>

        {/* Story body */}
        <div className="mt-10">
          <Quote className="w-10 h-10 text-[#9BDC51]" aria-hidden />
          <div className="mt-4 space-y-5 text-lg text-gray-700 leading-relaxed">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Attribution */}
          <div className="mt-8 flex items-center gap-3 border-t border-[#094C3B]/10 pt-6">
            <span className="w-10 h-10 rounded-full bg-[#094C3B] text-white flex items-center justify-center text-sm font-semibold shrink-0">
              {story.name
                .split(' ')
                .map((p) => p[0])
                .slice(0, 2)
                .join('')
                .toUpperCase()}
            </span>
            <div>
              <p className="font-semibold text-gray-900">{story.name}</p>
              <p className="text-sm text-gray-500">
                Beneficiary · {program.partner}
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* More stories from the same program */}
      {related.length > 0 && (
        <section className="border-t border-[#094C3B]/10 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              More stories from {program.partner}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/stories/${s.slug}`}
                  className="group rounded-2xl bg-[#f5f3ef] border border-[#094C3B]/10 p-6 hover:shadow-lg hover:border-[#094C3B]/25 transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-900">{s.name}</h3>
                  <p className="mt-1 text-sm text-[#2F5C4B] font-medium">
                    {s.theme}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {s.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#094C3B] group-hover:gap-2 transition-all">
                    Read story
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#2F5C4B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Help write the next story of change
          </h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">
            Your partnership and support empower more women like {story.name.split(' ')[0]} to
            build lasting livelihoods.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/partner"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-[#2F5C4B] bg-[#9BDC51] transition-opacity hover:opacity-90"
            >
              Partner With Us
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white border border-white/40 transition-colors hover:bg-white/10"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// Pre-render all known story slugs; reject unknown ones.
export const dynamicParams = false;
