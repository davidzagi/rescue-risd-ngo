

export const CONFIG = {
  logo: {
    text: 'RISD',
    href: '/',
  },
  links: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: {
    label: 'Partner With Us',
    href: '/partner',
  },
};

/**
 * FOOTER – Main footer (dark green) + copyright bar (light green).
 * Edit logo, mission, CTAs, link columns, and copyright. No code changes needed.
 */
export const FOOTER = {
  logo: {
    /** Path to logo image – e.g. /assets/logo/risd-logo.svg */
    src: '/assets/logo/risd-logo.svg',
    alt: 'RISD Logo',
    /** Brand name next to logo */
    text: 'RISD',
    href: '/',
  },
  /** Mission/description paragraph – edit freely */
  mission:
    'Great futures are built with the support of small charities that create meaningful change in their communities. By addressing local needs with compassion, these organizations lay the foundation for brighter tomorrows and empower individuals and families to thrive.',
  primaryCta: {
    label: 'Partner With Us',
    href: '/partner',
  },
  secondaryCta: {
    label: 'Support Our Work',
    href: '/support',
  },
  /** Link columns (e.g. Our Work, Donate, Social). Add/remove columns or links in each. */
  linkColumns: [
    [
      { label: 'Our Work', href: '/our-work' },
      { label: 'Our Story', href: '/our-story' },
      { label: 'Partner with us', href: '/partner' },
    ],
    [
      { label: 'Donate', href: '/donate' },
      { label: 'Careers', href: '/careers' },
      { label: 'Internships', href: '/internships' },
    ],
    [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
    ],
  ],
  copyright: {
    /** Year in the notice – update each year or leave as-is */
    year: 2026,
    /** Organization name in the notice */
    organizationName: 'RISD',
    /** Full line override – if set, year and organizationName are ignored */
    text: undefined as string | undefined,
  },
};

export const HERO = {
  heading: 'Empowering the Poor and Vulnerable for a Sustainable Future',
  primaryCta: {
    label: 'Partner With Us',
    href: '/partner',
  },
  secondaryCta: {
    label: 'Support Our Work',
    href: '/support',
  },
  stats: [
    { value: '2730+', label: 'People Supported' },
    { value: '55', label: 'Communities Reached' },
  ],
  /** Add your image to public/hero-bg.jpg or use an external URL */
  backgroundImage: '/assets/Hero/USSS.jpeg',
  /** Dark teal gradient overlay - configurable for different pages */
  gradientOverlay:
    'linear-gradient(to bottom, rgba(31, 71, 62, 0.88) 0%, rgba(31, 71, 62, 0.75) 100%)',
};

/**
 * WHO WE ARE section (below hero)
 * Edit text and image path - no code changes needed.
 * To update the image: replace public/assets/About/children-eating.jpg
 * or add a new file and change image.src below.
 */
export const WHO_WE_ARE = {
  sectionLabel: 'WHO WE ARE',
  title: 'Building pathways out of poverty for women, youth, & children',
  description:
    'Rescue Initiative for Sustainable Development (RISD) is a nonprofit organization dedicated to improving the lives of people most affected by inequality, especially women, youth, and children. Since 2017, we have partnered with communities and global organizations to deliver sustainable, people-centered solutions.',
  cta: {
    label: 'Learn more about RISD',
    href: '/about',
  },
  image: {
    /** Path to image - replace file in public/assets/About/ or change path */
    src: '/assets/About/children-eating.jpg',
    /** Alt text for accessibility - describe the photo */
    alt: 'Children at a community meal',
  },
};

/**
 * VISION, MISSION, VALUES – Three-column section (e.g. on About page).
 * Edit titles and content; no code changes needed.
 */
export const VISION_MISSION_VALUES = {
  vision: {
    title: 'Our Vision',
    description:
      'A society free from poverty, where everyone has equal opportunity to thrive.',
  },
  mission: {
    title: 'Our Mission',
    description:
      'To improve the lives of the poor and vulnerable especially women, youth, and children through inclusive, strategic, and gender-responsive approaches that create sustainable environments and livelihoods.',
  },
  values: {
    title: 'Our Values',
    /** Each string is one line; use " • " or " & " for inline separators as needed */
    items: [
      'Accountability • Transparency • Integrity',
      'Honesty • Gender Inclusion • Resilience',
      'Collaboration & Teamwork',
    ],
  },
};

/**
 * OUR TEAM – "Meet our team" section (e.g. on About page).
 * Edit title, description, and members. Replace image.src with a photo in public/assets/Team/ (e.g. /assets/Team/leonard.jpg).
 * Leave social URLs empty to hide that icon.
 */
export const OUR_TEAM = {
  title: 'Meet our team',
  description:
    'The people behind Rescue Initiative for Sustainable Development—dedicated to building pathways out of poverty for women, youth, and children.',
  members: [
    {
      name: 'Mrs Shedu Gar',
      title: 'Cofounder, CEO',
      image: { src: '/teams/member1.png', alt: 'mrs shehu gar' },
      social: {
        facebook: '',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Suleiman',
      title: 'Program Director',
      image: { src: '/teams/member2.png', alt: 'Suleiman' },
      social: {
        facebook: 'https://facebook.com',
        twitter: '',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Kyla Obrien',
      title: 'Community Lead',
      image: { src: '/assets/Team/placeholder.svg', alt: 'Kyla Obrien' },
      social: {
        facebook: '',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Adrian Dixon',
      title: 'Operations',
      image: { src: '/assets/Team/placeholder.svg', alt: 'Adrian Dixon' },
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: '',
      },
    },
    {
      name: 'Freddy Busby',
      title: 'Partnerships',
      image: { src: '/assets/Team/placeholder.svg', alt: 'Freddy Busby' },
      social: { facebook: '', twitter: '', linkedin: 'https://linkedin.com' },
    },
    {
      name: 'Dale Banks',
      title: 'Finance',
      image: { src: '/assets/Team/placeholder.svg', alt: 'Dale Banks' },
      social: { facebook: 'https://facebook.com', twitter: '', linkedin: '' },
    },
    {
      name: 'Miriam Middleton',
      title: 'Communications',
      image: { src: '/assets/Team/placeholder.svg', alt: 'Miriam Middleton' },
      social: {
        facebook: '',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Ellen Walton',
      title: 'Advisory',
      image: { src: '/assets/Team/placeholder.svg', alt: 'Ellen Walton' },
      social: {
        facebook: '',
        twitter: '',
        linkedin: 'https://linkedin.com',
      },
    },
  ],
};

/**
 * WHAT WE DO section
 * Edit text, focus areas, and image - no code changes needed.
 * To update the image: replace public/assets/WhatWeDo/focus-areas.jpg
 * Icon options: education | health | environment | governance
 */
export const WHAT_WE_DO = {
  sectionLabel: 'WHAT WE DO',
  title: 'Dedicated to Everyone – Compassionate Service for ALL People Everywhere',
  intro:
    'We design and implement evidence-based, community-led programs across four focus areas:',
  focusAreas: [
    {
      icon: 'education' as const,
      title: 'Education',
      description: 'Expanding learning opportunities and literacy',
    },
    {
      icon: 'health' as const,
      title: 'Health benefits',
      description: 'Promoting quality healthcare and SRHR services',
    },
    {
      icon: 'environment' as const,
      title: 'Environment',
      description: 'Supporting sustainable and climate-smart initiatives',
    },
    {
      icon: 'governance' as const,
      title: 'Good Governance',
      description: 'Advocating for rights, accountability, and inclusion',
    },
  ],
  image: {
    src: '/assets/WhatWeDo/focus-areas.jpg',
    alt: 'Children in a community learning setting',
  },
};

/**
 * MEASURE LASTING CHANGE section
 * Edit heading, achievements list, and image. Uses measurelastingchangebg.svg for the organic shape.
 * Use **text** in achievements for bold (e.g. "**55** communities").
 */
export const MEASURE_LASTING_CHANGE = {
  heading: 'We measure success by real, lasting change.',
  achievements: [
    '1,500+ youth mentored across **55** communities',
    '240+ people trained in literacy & vocational skills',
    '1,700+ women supported with income, health & leadership skills',
    'Dozens of communities benefiting from agricultural value-chain support',
  ],
  image: {
    src: '/assets/MeasureLastingChange/children-bw.jpg',
    alt: 'Children in a classroom or learning environment',
    grayscale: true,
  },
};

/**
 * COMMUNITY FEEDBACK / TESTIMONIALS section
 * Edit sectionLabel, title, and testimonials. Add author images to public/assets/Testimonials/
 * and set image.src; omit image to show initials in a circle.
 */
export const COMMUNITY_FEEDBACK = {
  sectionLabel: 'TESTIMONIAL',
  title: 'Community Feedback on Our Mission',
  testimonials: [
    {
      quote:
        "The team's dedication to quality and excellence truly exceeded my expectations. From the initial consultation to the final deliverable, every detail was carefully managed, and they took the time to understand my unique needs and vision. Communication was clear and consistent, which made the entire process smooth and enjoyable. I could see their commitment to delivering not just a product but a complete, polished experience. It's rare to find such a blend of professionalism, creativity, and responsiveness, and I would highly recommend them to anyone looking for top-tier service.",
      authorName: 'Mason Brooks',
      authorTitle: 'Business Development Lead',
      image: { src: '', alt: 'Mason Brooks' },
    },
    {
      quote:
        "I am incredibly impressed by the professionalism and expertise demonstrated throughout our collaboration. The team demonstrated a deep understanding of our goals and delivered solutions that exceeded expectations. Not only did they deliver a high-quality product, but they also provided valuable insights and guidance along the way. Their attention to detail, responsiveness, and ability to transform our ideas into reality was outstanding. I look forward to working with them on future projects.",
      authorName: 'Noah Smith',
      authorTitle: 'Chief Operations Officer',
      image: { src: '', alt: 'Noah Smith' },
    },
    {
      quote:
        "RISD's community-led approach has made a real difference in our area. The programs are designed with local input, and the results speak for themselves—better literacy, stronger livelihoods, and more hope for the next generation.",
      authorName: 'Community Leader',
      authorTitle: 'Partner Community',
      image: { src: '', alt: 'Community Leader' },
    },
  ],
};

/**
 * CONTRIBUTE BANNER (below Community Feedback)
 * CTA section with image, heading, and two buttons. Replace background image in public/assets/ContributeBanner/ to customize.
 */
/**
 * FAQ section – accordion on the left, image on the right.
 * Edit sectionLabel, title, and the faqs array (question + answer). Replace image in public/assets/Faq/ to update.
 */
export const FAQ = {
  sectionLabel: 'WHAT WE DO',
  title: 'Have any question For Us?',
  faqs: [
    {
      question: 'How can I donate to your charity?',
      answer:
        'You can donate online through our website, by mailing a check, or through fundraising events. Every contribution, big or small, makes a difference!',
    },
    {
      question: 'How do I make my donation tax-deductible?',
      answer:
        'RISD is a registered nonprofit. You will receive a receipt for your donation that you can use for tax purposes. Consult your tax advisor for details applicable to your situation.',
    },
    {
      question: 'How do you ensure that donations are used effectively?',
      answer:
        'We use evidence-based programs, work with local communities, and report on outcomes. A significant portion of funds goes directly to program delivery and community support.',
    },
    {
      question: 'Can I volunteer with your charity?',
      answer:
        'Yes. We welcome volunteers for programs, events, and skills-based support. Contact us through the website to learn about current opportunities.',
    },
    {
      question: 'What types of programs does your charity support?',
      answer:
        'We focus on education, health, environment, and good governance—including literacy, vocational training, women’s empowerment, and sustainable livelihoods.',
    },
    {
      question: "How can I stay updated on your charity's activities?",
      answer:
        'Sign up for our newsletter on the website, follow us on social media, or visit our News and Stories pages for the latest updates.',
    },
  ],
  image: {
    /** Replace with your own: add image to public/assets/Faq/ and set src to e.g. '/assets/Faq/faq-supporting.jpg' */
    src: '/assets/About/children-eating.jpg',
    /** Describe the photo for accessibility */
    alt: 'Child in a thoughtful pose, community setting',
  },
};

/**
 * CONTACT PAGE – Left: intro, email, phone, headquarter address. Right: "Get In Touch" form.
 * Edit all text and contact details in site-data; no code changes needed.
 */
export const CONTACT = {
  title: 'Contact Us',
  intro:
    "We're here to help! Reach out with any questions or support needs, and our team will get back to you promptly. Let's connect!",
  email: 'rescuerisd@gmail.com',
  website: 'https://www.rescuerisd.org.ng',
  phones: ['08027322220', '08162607371'],
  contactPersons: 'Lydia J. Shehu, Suleiman Dasika',
  headquarter: 'Headquarter',
  address: {
    line1: 'No. 1 Behind WAEC Office, Along Dass/Tafawa Balewa Road, By Birshin Fulani Primary School',
    line2: 'Bauchi',
    line3: 'Nigeria',
  },
  form: {
    title: 'Get In Touch',
    subtitle: 'You can reach us any time.',
    fields: {
      fullName: 'Full Name',
      email: 'Enter your Email Address',
      phone: 'Enter your Phone Number',
      message: 'Type your message here',
    },
    submitLabel: 'Send',
  },
  /** Google Map: custom embed URL from Google Maps → Share → Embed. If empty, map is built from the address above. */
  mapEmbedUrl: '',
};

/**
 * CONTRIBUTE BANNER (below Community Feedback)
 * CTA section with image, heading, and two buttons. Replace background image in public/assets/ContributeBanner/ to customize.
 */
export const CONTRIBUTE_BANNER = {
  heading:
    'You can contribute to provide a place for children with special needs!',
  primaryCta: {
    label: 'Partner With Us',
    href: '/partner',
  },
  secondaryCta: {
    label: 'Support Our Work',
    href: '/support',
  },
  backgroundImage: {
    src: '/assets/About/children-eating.jpg',
    alt: 'Children in a community setting',
  },
};
  