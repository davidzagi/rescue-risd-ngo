import type { Metadata } from 'next';
import FaqSection from '@/components/sections/FaqSection';
import { FAQ } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'FAQs | RISD',
  description:
    'Frequently asked questions about Rescue Initiative for Sustainable Development (RISD)—donations, volunteering, programs, and more.',
};

export default function FaqsPage() {
  return (
    <main>
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
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Find answers to common questions about our work, donations, volunteering, and more.
          </p>
        </div>
      </section>

      <FaqSection {...FAQ} />
    </main>
  );
}
