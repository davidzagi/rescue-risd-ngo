import type { Metadata } from 'next';
import Link from 'next/link';
import { SUPPORT } from '@/data/site-data';
import { Heart, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Support Our Work | RISD',
  description:
    'Support RISD through donations, volunteering, and advocacy. Every contribution helps us reach more communities.',
};

export default function SupportPage() {
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
            {SUPPORT.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            {SUPPORT.subtitle}
          </p>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid sm:grid-cols-2 gap-8">
          {SUPPORT.ways.map((way) => (
            <div
              key={way.title}
              className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2F5C4B]/10">
                  <Heart className="w-5 h-5 text-[#2F5C4B]" strokeWidth={1.8} />
                </span>
                <h2 className="text-lg font-bold text-gray-900">{way.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">{way.description}</p>
              {way.cta && (
                <Link
                  href={way.cta.href}
                  className="inline-flex items-center gap-2 text-[#2F5C4B] font-semibold hover:underline"
                >
                  {way.cta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#2F5C4B] text-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Every contribution counts
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Whether you give your time, resources, or voice—you help us create a future free from poverty.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-opacity hover:opacity-90 text-[#2F5C4B] bg-[#9BDC51]"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
