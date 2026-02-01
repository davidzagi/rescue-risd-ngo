

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
  