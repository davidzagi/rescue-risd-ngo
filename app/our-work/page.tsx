import type { Metadata } from 'next';
import Link from 'next/link';
import { OUR_WORK } from '@/data/site-data';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Work | RISD',
  description:
    'Discover RISD\u2019s programs across education, health, environment, and governance\u2014creating sustainable impact in vulnerable communities.',
};

const AREA_COLORS = [
  { bg: 'bg-[#2F5C4B]/5', border: 'border-[#2F5C4B]/20', accent: 'text-[#2F5C4B]' },
  { bg: 'bg-[#094C3B]/5', border: 'border-[#094C3B]/20', accent: 'text-[#094C3B]' },
  { bg: 'bg-[#2F5C4B]/5', border: 'border-[#2F5C4B]/20', accent: 'text-[#2F5C4B]' },
  { bg: 'bg-[#094C3B]/5', border: 'border-[#094C3B]/20', accent: 'text-[#094C3B]' },
];

export default function OurWorkPage() {
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
            {OUR_WORK.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            {OUR_WORK.subtitle}
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="space-y-10">
          {OUR_WORK.programs.map((program, i) => {
            const color = AREA_COLORS[i % AREA_COLORS.length];
            return (
              <div
                key={program.title}
                className={`rounded-xl border ${color.border} ${color.bg} p-6 sm:p-8 lg:p-10`}
              >
                <h2 className={`text-xl sm:text-2xl font-bold ${color.accent} mb-4`}>
                  {program.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
                  {program.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#9BDC51] shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-[#2F5C4B] text-white py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">
            {OUR_WORK.impact.title}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {OUR_WORK.impact.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-[#9BDC51]">
                  {stat.value}
                </div>
                <div className="text-white/80 mt-1 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/partner"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-opacity hover:opacity-90 text-[#2F5C4B] bg-[#9BDC51]"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
