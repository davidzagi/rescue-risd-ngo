'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';

// ============================================
// TYPES – Editable via site-data (no code changes needed)
// ============================================

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  /** Small label above the title (e.g. "WHAT WE DO") */
  sectionLabel: string;
  /** Main heading */
  title: string;
  /** List of question/answer pairs – add, remove, or reorder in site-data */
  faqs: FaqItem[];
  /** Image on the right – replace file or change image.src in site-data */
  image: {
    src: string;
    alt: string;
  };
}

// ============================================
// STYLES
// ============================================

const BRAND = {
  darkGreen: '#2F5C4B',
  darkGreenRgb: '47, 92, 75',
  lightGreenAnswer: 'rgba(255, 255, 255, 0.9)',
};

const STYLES = {
  section: 'py-16 lg:py-24 bg-[#FAFAF9]',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  grid: 'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center',
  content: 'space-y-6',
  label: 'flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-[#2F5C4B]',
  labelLine: 'w-8 h-0.5 bg-[#2F5C4B]',
  title: 'text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight',
  accordion: 'space-y-3 mt-8',
  item: 'rounded-lg overflow-hidden border border-gray-200 transition-colors duration-200',
  itemExpanded: 'border-[#2F5C4B]',
  itemCollapsed: 'bg-white hover:border-gray-300',
  button:
    'w-full flex items-center justify-between gap-4 text-left px-5 py-4 rounded-lg transition-colors duration-200',
  buttonExpanded: 'bg-[#2F5C4B] text-white',
  buttonCollapsed: 'bg-white text-gray-900',
  question: 'font-semibold text-base sm:text-lg pr-2',
  answerWrapper: 'overflow-hidden transition-all duration-200',
  answer: 'px-5 pb-4 text-[#2F5C4B]/95 text-base leading-relaxed',
  answerExpanded: 'bg-[#2F5C4B]',
  icon: 'shrink-0 rounded-full p-1',
  iconExpanded: 'bg-white/20 text-white',
  iconCollapsed: 'bg-gray-100 text-[#2F5C4B]',
  imageWrapper: 'relative w-full aspect-[4/5] lg:aspect-[3/4] lg:min-h-[480px]',
  imageClip:
    'absolute inset-0 object-cover w-full h-full',
  gradientOverlay:
    'absolute inset-0 bg-gradient-to-l from-[#2F5C4B]/80 via-[#2F5C4B]/20 to-transparent pointer-events-none',
};

/** Jagged right-edge clip path (organic / distressed look) */
const JAGGED_CLIP =
  'polygon(0 0, 100% 0, 100% 8%, 97% 15%, 100% 22%, 98% 30%, 100% 38%, 97% 45%, 100% 52%, 98% 60%, 100% 68%, 97% 75%, 100% 82%, 98% 90%, 100% 100%, 0 100%)';

// ============================================
// COMPONENT
// ============================================

export default function FaqSection({
  sectionLabel,
  title,
  faqs,
  image,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className={STYLES.section} aria-labelledby="faq-heading">
      <div className={STYLES.container}>
        <div className={STYLES.grid}>
          {/* Left: FAQ content */}
          <div className={STYLES.content}>
            <div className={STYLES.label}>
              <span className={STYLES.labelLine} aria-hidden />
              {sectionLabel}
            </div>
            <h2 id="faq-heading" className={STYLES.title}>
              {title}
            </h2>

            <div
              className={STYLES.accordion}
              role="region"
              aria-label="Frequently asked questions"
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`${STYLES.item} ${isOpen ? STYLES.itemExpanded : STYLES.itemCollapsed}`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        className={`${STYLES.button} ${isOpen ? STYLES.buttonExpanded : STYLES.buttonCollapsed}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        id={`faq-question-${index}`}
                      >
                        <span className={STYLES.question}>{faq.question}</span>
                        <span
                          className={`${STYLES.icon} ${isOpen ? STYLES.iconExpanded : STYLES.iconCollapsed}`}
                          aria-hidden
                        >
                          {isOpen ? (
                            <Minus className="w-5 h-5" strokeWidth={2.5} />
                          ) : (
                            <Plus className="w-5 h-5" strokeWidth={2.5} />
                          )}
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className={STYLES.answerWrapper}
                      style={{
                        maxHeight: isOpen ? 800 : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div
                        className={`${STYLES.answer} ${isOpen ? STYLES.answerExpanded : ''}`}
                        style={
                          isOpen
                            ? { color: BRAND.lightGreenAnswer }
                            : undefined
                        }
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image with gradient and jagged edge */}
          <div className={STYLES.imageWrapper}>
            <div
              className="absolute inset-0 rounded-l-lg overflow-hidden"
              style={{ clipPath: JAGGED_CLIP }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={STYLES.imageClip}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className={STYLES.gradientOverlay} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
