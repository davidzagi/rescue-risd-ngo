import type { Metadata } from 'next';
import Link from 'next/link';
import { OUR_STORY, VISION_MISSION_VALUES } from '@/data/site-data';
import VisionMissionValues from '@/components/sections/VisionMissionValues';

export const metadata: Metadata = {
  title: 'Our Story | RISD',
  description:
    'The journey of Rescue Initiative for Sustainable Development\u2014from a shared vision to a movement creating change across 55+ communities.',
};

export default function OurStoryPage() {
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
            {OUR_STORY.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            {OUR_STORY.subtitle}
          </p>
        </div>
      </section>

      {/* Story Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="space-y-12">
          {OUR_STORY.story.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl sm:text-2xl font-bold text-[#2F5C4B] mb-4">
                {section.heading}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Our Milestones
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-[#2F5C4B]/20" />

            <div className="space-y-8">
              {OUR_STORY.milestones.map((milestone) => (
                <div key={milestone.year} className="relative flex items-start gap-6 pl-12 sm:pl-16">
                  {/* Dot */}
                  <div className="absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full bg-[#9BDC51] border-2 border-[#2F5C4B]" />
                  <div>
                    <span className="inline-block text-sm font-bold text-[#2F5C4B] bg-[#2F5C4B]/10 px-3 py-1 rounded-full mb-2">
                      {milestone.year}
                    </span>
                    <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <VisionMissionValues {...VISION_MISSION_VALUES} />

      {/* CTA */}
      <section className="bg-[#2F5C4B] text-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Be part of our story
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Join us in building pathways out of poverty for communities across Nigeria.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partner"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-opacity hover:opacity-90 text-[#2F5C4B] bg-[#9BDC51]"
            >
              Partner With Us
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
