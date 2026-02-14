import type { Metadata } from 'next';
import { CAREERS } from '@/data/site-data';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | RISD',
  description:
    'Join RISD and build a career that makes a difference. Explore opportunities in community development and social impact.',
};

export default function CareersPage() {
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
            {CAREERS.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            {CAREERS.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <p className="text-lg text-gray-700 leading-relaxed">
          {CAREERS.intro}
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            Why Work With Us
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {CAREERS.whyWork.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 p-6 sm:p-8 hover:border-[#2F5C4B]/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-[#2F5C4B] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Current Openings
        </h2>
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            {CAREERS.openings}
          </p>
          <a
            href={`mailto:${CAREERS.contactEmail}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-opacity hover:opacity-90 text-[#2F5C4B] bg-[#9BDC51]"
          >
            <Mail className="w-5 h-5" />
            {CAREERS.contactEmail}
          </a>
        </div>
      </section>
    </main>
  );
}
