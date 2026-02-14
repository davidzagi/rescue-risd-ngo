import type { Metadata } from 'next';
import { INTERNSHIPS } from '@/data/site-data';
import { CheckCircle, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Internships | RISD',
  description:
    'Intern at RISD and gain hands-on experience in community development, social impact, and sustainable development.',
};

export default function InternshipsPage() {
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
            {INTERNSHIPS.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            {INTERNSHIPS.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <p className="text-lg text-gray-700 leading-relaxed">
          {INTERNSHIPS.intro}
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            What You&apos;ll Gain
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {INTERNSHIPS.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-gray-200 p-6 sm:p-8 hover:border-[#2F5C4B]/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-[#2F5C4B] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Areas */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Internship Areas
        </h2>
        <ul className="space-y-4">
          {INTERNSHIPS.areas.map((area) => (
            <li key={area} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#9BDC51] shrink-0 mt-0.5" strokeWidth={2} />
              <span className="text-gray-700 text-lg">{area}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How to Apply */}
      <section className="bg-[#2F5C4B] text-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            How to Apply
          </h2>
          <p className="text-white/85 text-lg mb-8">
            {INTERNSHIPS.howToApply}
          </p>
          <a
            href={`mailto:${INTERNSHIPS.contactEmail}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-opacity hover:opacity-90 text-[#2F5C4B] bg-[#9BDC51]"
          >
            <Mail className="w-5 h-5" />
            {INTERNSHIPS.contactEmail}
          </a>
        </div>
      </section>
    </main>
  );
}
