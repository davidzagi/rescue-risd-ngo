'use client';

import { Mail, Phone, MapPin, Globe, User } from 'lucide-react';
import { CONTACT } from '@/data/site-data';
import { useState } from 'react';

const FORM_BG = '#2F5C4B';
const INPUT_BG = 'rgba(255,255,255,0.12)';
const BUTTON_BG = '#B8DC7C';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    // Placeholder: replace with your form handler (e.g. API route, Formspree, etc.)
    setTimeout(() => setStatus('sent'), 800);
  }

  const {
    title,
    intro,
    email,
    website,
    phones,
    contactPersons,
    headquarter,
    address,
    form,
    mapEmbedUrl,
  } = CONTACT;

  const fullAddress = [address.line1, address.line2, address.line3]
    .filter(Boolean)
    .join(', ');
  const mapUrl =
    mapEmbedUrl ||
    (fullAddress
      ? `https://www.google.com/maps?output=embed&q=${encodeURIComponent(fullAddress)}`
      : '');

  return (
    <main className="min-h-screen bg-[#f5f3ef]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Left: Contact info */}
          <div className="space-y-6 lg:pt-2">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {title}
            </h1>
            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              {intro}
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-gray-700 hover:text-[#2F5C4B] transition-colors"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shrink-0">
                  <Mail className="w-5 h-5 text-[#2F5C4B]" strokeWidth={1.8} />
                </span>
                <span>{email}</span>
              </a>
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#2F5C4B] transition-colors"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shrink-0">
                    <Globe className="w-5 h-5 text-[#2F5C4B]" strokeWidth={1.8} />
                  </span>
                  <span>{website.replace(/^https?:\/\//, '')}</span>
                </a>
              )}
              <div className="flex flex-col gap-2">
                {phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-[#2F5C4B] transition-colors"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shrink-0">
                      <Phone className="w-5 h-5 text-[#2F5C4B]" strokeWidth={1.8} />
                    </span>
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
              {contactPersons && (
                <div className="flex items-start gap-3 text-gray-700">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shrink-0">
                    <User className="w-5 h-5 text-[#2F5C4B]" strokeWidth={1.8} />
                  </span>
                  <span className="text-base">
                    <span className="font-medium text-gray-900">Contact persons: </span>
                    {contactPersons}
                  </span>
                </div>
              )}
            </div>
            <div className="pt-2">
              <h2 className="text-lg font-semibold text-[#2F5C4B] mb-2">
                {headquarter}
              </h2>
              <address className="flex items-start gap-3 text-gray-600 text-base not-italic">
                <MapPin
                  className="w-5 h-5 text-[#2F5C4B] shrink-0 mt-0.5"
                  strokeWidth={1.8}
                />
                <span className="block">
                  {address.line1}
                  <br />
                  {address.line2}
                  {address.line3 ? `, ${address.line3}` : ''}
                </span>
              </address>
            </div>
          </div>

          {/* Right: Form card */}
          <div
            className="rounded-2xl p-8 lg:p-10 shadow-xl text-white"
            style={{ backgroundColor: FORM_BG }}
          >
            <h2 className="text-2xl font-bold mb-1">{form.title}</h2>
            <p className="text-white/80 text-sm mb-8">{form.subtitle}</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  {form.fields.fullName}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder={form.fields.fullName}
                  required
                  className="w-full px-4 py-3 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  style={{ backgroundColor: INPUT_BG }}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  {form.fields.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder={form.fields.email}
                  required
                  className="w-full px-4 py-3 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  style={{ backgroundColor: INPUT_BG }}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">
                  {form.fields.phone}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder={form.fields.phone}
                  className="w-full px-4 py-3 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  style={{ backgroundColor: INPUT_BG }}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  {form.fields.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder={form.fields.message}
                  required
                  className="w-full px-4 py-3 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-y min-h-[120px]"
                  style={{ backgroundColor: INPUT_BG }}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-lg font-semibold text-gray-900 transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2F5C4B] focus:ring-white/50 disabled:opacity-70"
                style={{ backgroundColor: BUTTON_BG }}
              >
                {status === 'sending'
                  ? 'Sending…'
                  : status === 'sent'
                    ? 'Message sent'
                    : form.submitLabel}
              </button>
              {status === 'error' && (
                <p className="text-sm text-red-300">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Google Map */}
        {mapUrl && (
          <section className="mt-16 lg:mt-24">
            <h2 className="sr-only">Map</h2>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 aspect-video min-h-[280px] bg-gray-100">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
                className="absolute inset-0 w-full h-full min-h-[280px]"
              />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
