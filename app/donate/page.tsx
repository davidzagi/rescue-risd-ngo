import type { Metadata } from 'next';
import Link from 'next/link';
import { DONATE } from '@/data/site-data';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Donate | RISD',
  description:
    'Donate to RISD and help us reach more communities. Your generosity funds education, health, and sustainable development programs.',
};

export default function DonatePage() {
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
            {DONATE.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            {DONATE.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <p className="text-lg text-gray-700 leading-relaxed">
          {DONATE.intro}
        </p>
      </section>

      {/* Impact Examples */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Your Donation at Work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DONATE.impactExamples.map((item) => (
              <div
                key={item.amount}
                className="rounded-xl border border-gray-200 p-6 text-center hover:border-[#2F5C4B]/30 transition-colors"
              >
                <div className="text-3xl font-bold text-[#2F5C4B] mb-2">
                  {item.amount}
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Donate */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          {DONATE.howToDonate.title}
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {DONATE.howToDonate.methods.map((method) => (
            <div
              key={method.title}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <h3 className="text-lg font-bold text-[#2F5C4B] mb-3">{method.title}</h3>
              <p className="text-gray-600 leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Note */}
      <section className="bg-[#2F5C4B] text-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to give?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            {DONATE.contactNote}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:rescuerisd@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-opacity hover:opacity-90 text-[#2F5C4B] bg-[#9BDC51]"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
