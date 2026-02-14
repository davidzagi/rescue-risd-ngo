import type { Metadata } from 'next';
import Link from 'next/link';
import { PARTNER } from '@/data/site-data';
import { Handshake, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partner With Us | RISD',
  description:
    'Partner with RISD to create sustainable change. Collaborate with us across education, health, environment, and governance.',
};

export default function PartnerPage() {
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
            {PARTNER.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            {PARTNER.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          {PARTNER.intro}
        </p>
      </section>

      {/* Partnership Types */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            How You Can Partner
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {PARTNER.partnershipTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-xl border border-gray-200 p-6 sm:p-8 hover:border-[#2F5C4B]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2F5C4B]/10">
                    <Handshake className="w-5 h-5 text-[#2F5C4B]" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Why Partner With RISD?
        </h2>
        <ul className="space-y-4">
          {PARTNER.whyPartner.map((reason) => (
            <li key={reason} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#9BDC51] shrink-0 mt-0.5" strokeWidth={2} />
              <span className="text-gray-700 text-lg">{reason}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-[#2F5C4B] text-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to make an impact together?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Reach out to discuss partnership opportunities and how we can collaborate for lasting change.
          </p>
          <Link
            href={PARTNER.cta.href}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-opacity hover:opacity-90 text-[#2F5C4B] bg-[#9BDC51]"
          >
            {PARTNER.cta.label}
          </Link>
        </div>
      </section>
    </main>
  );
}
