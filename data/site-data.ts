

export const CONFIG = {
  logo: {
    text: 'RISD',
    href: '/',
  },
  links: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
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

/**
 * GALLERY – Initiatives and image sets. Images live in public/gallery/{initiativeId}/image{N}.webp
 */
export const GALLERY = {
  title: 'Our Gallery',
  subtitle:
    'Moments from our initiatives—community, impact, and the people we serve.',
  initiatives: [
    { id: 'initiative1', label: 'Initiative 1', imageCount: 22 },
    { id: 'initiative2', label: 'Initiative 2', imageCount: 10 },
  ],
};

/**
 * PARTNER PAGE – Partnership information and how to collaborate with RISD.
 */
export const PARTNER = {
  title: 'Partner With Us',
  subtitle:
    'Together, we can create sustainable change. Join hands with RISD to empower communities and build a brighter future.',
  intro:
    'RISD partners with governments, NGOs, corporate organizations, faith-based groups, and individuals who share our vision of a poverty-free society. Through collaboration, we amplify impact and create lasting change.',
  partnershipTypes: [
    {
      title: 'Corporate Partnerships',
      description:
        'Align your CSR goals with meaningful community impact. We work with businesses to design initiatives that benefit both communities and your organization.',
    },
    {
      title: 'Institutional Partnerships',
      description:
        'We collaborate with government agencies, international organizations, and NGOs to scale evidence-based programs across education, health, and governance.',
    },
    {
      title: 'Community Partnerships',
      description:
        'Faith-based organizations, community groups, and local leaders are at the heart of our work. Together, we co-create solutions that are locally owned and sustained.',
    },
    {
      title: 'Individual Champions',
      description:
        'Passionate individuals can partner with us as advocates, mentors, or resource mobilizers to drive change in their networks and communities.',
    },
  ],
  whyPartner: [
    'Proven track record across 55+ communities',
    'Community-led, evidence-based approach',
    'Transparent reporting and accountability',
    'Multi-sectoral expertise in education, health, environment, and governance',
    'Strong local presence and community trust',
  ],
  cta: {
    label: 'Get In Touch',
    href: '/contact',
  },
};

/**
 * SUPPORT PAGE – Ways to support RISD's mission.
 */
export const SUPPORT = {
  title: 'Support Our Work',
  subtitle:
    'Your support helps us reach more communities, train more youth, and empower more women. Every contribution makes a difference.',
  ways: [
    {
      title: 'Make a Donation',
      description:
        'Financial contributions fund our programs in education, health, environment, and governance. Whether a one-time gift or recurring support, your donation creates lasting impact.',
      cta: { label: 'Donate Now', href: '/donate' },
    },
    {
      title: 'Volunteer Your Time',
      description:
        'Share your skills and expertise with communities that need them. We welcome volunteers for fieldwork, training, mentoring, and administrative support.',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      title: 'Spread the Word',
      description:
        'Follow us on social media, share our stories, and help raise awareness about the issues affecting vulnerable communities. Your voice amplifies our reach.',
      cta: null,
    },
    {
      title: 'In-Kind Support',
      description:
        'Donate supplies, equipment, or professional services. From learning materials to agricultural tools, in-kind contributions directly support our programs.',
      cta: { label: 'Learn More', href: '/contact' },
    },
  ],
};

/**
 * OUR WORK PAGE – Detailed overview of RISD's programs and focus areas.
 */
export const OUR_WORK = {
  title: 'Our Work',
  subtitle:
    'We design and implement evidence-based, community-led programs that create sustainable impact across four key areas.',
  programs: [
    {
      title: 'Education & Literacy',
      description:
        'We expand access to quality education through literacy programs, school support initiatives, and youth mentorship. Over 1,500 youth have been mentored and 240+ people trained in literacy and vocational skills.',
      highlights: [
        '1,500+ youth mentored',
        '240+ trained in literacy & vocational skills',
        'School enrollment support programs',
        'After-school learning centers',
      ],
    },
    {
      title: 'Health & Well-being',
      description:
        'Our health programs promote quality healthcare access, sexual and reproductive health rights (SRHR), nutrition support, and community health education—especially for women and children.',
      highlights: [
        'Community health outreach programs',
        'SRHR awareness and services',
        'Maternal and child nutrition support',
        'Health worker capacity building',
      ],
    },
    {
      title: 'Environment & Sustainability',
      description:
        'We support climate-smart agriculture, environmental conservation, and sustainable livelihood initiatives that help communities adapt to environmental challenges while improving food security.',
      highlights: [
        'Climate-smart agricultural training',
        'Agricultural value-chain support',
        'Environmental conservation awareness',
        'Sustainable livelihood programs',
      ],
    },
    {
      title: 'Good Governance & Inclusion',
      description:
        'We advocate for rights, accountability, and inclusion—empowering communities to participate in governance processes and ensuring marginalized voices are heard in decision-making.',
      highlights: [
        'Community advocacy and rights education',
        'Gender inclusion initiatives',
        'Leadership development for women',
        'Accountability and transparency programs',
      ],
    },
  ],
  impact: {
    title: 'Our Impact in Numbers',
    stats: [
      { value: '2,730+', label: 'People Supported' },
      { value: '55+', label: 'Communities Reached' },
      { value: '1,500+', label: 'Youth Mentored' },
      { value: '1,700+', label: 'Women Empowered' },
    ],
  },
};

/**
 * OUR STORY PAGE – History and journey of RISD.
 */
export const OUR_STORY = {
  title: 'Our Story',
  subtitle:
    'From a shared vision to a movement for change—the journey of Rescue Initiative for Sustainable Development.',
  story: [
    {
      heading: 'How It Started',
      text: 'Rescue Initiative for Sustainable Development (RISD) was founded in 2017 by a group of passionate individuals who saw the urgent need to address poverty, inequality, and exclusion in Nigerian communities. What began as a small grassroots effort has grown into a recognized nonprofit organization making real impact.',
    },
    {
      heading: 'Our Growth',
      text: 'Over the years, RISD has expanded its reach from a few local communities to over 55 communities across Nigeria. We have partnered with global organizations, government agencies, and local leaders to deliver sustainable programs in education, health, environment, and governance.',
    },
    {
      heading: 'Where We Are Today',
      text: 'Today, RISD is a trusted partner in community development, with a proven track record of delivering measurable results. We have supported over 2,730 people, mentored 1,500+ youth, and empowered 1,700+ women with income, health, and leadership skills. Our work continues to grow as we expand into new communities and deepen our impact.',
    },
  ],
  milestones: [
    { year: '2017', event: 'RISD founded with a mission to fight poverty and inequality' },
    { year: '2018', event: 'First community programs launched in Bauchi State' },
    { year: '2019', event: 'Expanded to 20+ communities with education and health programs' },
    { year: '2020', event: 'COVID-19 response: emergency relief for vulnerable communities' },
    { year: '2021', event: 'Reached 40+ communities, 1,000+ youth mentored' },
    { year: '2022', event: 'Launched agricultural value-chain and women empowerment programs' },
    { year: '2023', event: 'Expanded to 55+ communities, 2,730+ people supported' },
    { year: '2024', event: 'Strengthened partnerships with international organizations' },
  ],
};

/**
 * DONATE PAGE – Donation information and impact of contributions.
 */
export const DONATE = {
  title: 'Donate',
  subtitle:
    'Your generosity fuels our mission. Every donation helps us reach more communities and change more lives.',
  intro:
    'RISD relies on the generosity of individuals, organizations, and partners to fund life-changing programs. Your donation directly supports education, health, environmental sustainability, and governance initiatives across vulnerable communities.',
  impactExamples: [
    { amount: '$25', description: 'provides learning materials for 5 children' },
    { amount: '$50', description: 'supports a community health outreach session' },
    { amount: '$100', description: 'funds vocational training for 2 young people' },
    { amount: '$250', description: 'empowers a woman with income-generating skills' },
    { amount: '$500', description: 'sponsors a full community workshop' },
  ],
  howToDonate: {
    title: 'How to Donate',
    methods: [
      {
        title: 'Bank Transfer',
        description: 'Contact us for bank account details to make a direct transfer.',
      },
      {
        title: 'Online Payment',
        description: 'Reach out to us via email or phone and we will guide you through the online donation process.',
      },
      {
        title: 'In Person',
        description: 'Visit our office in Bauchi, Nigeria to make a donation in person.',
      },
    ],
  },
  contactNote: 'For donation inquiries, please contact us at rescuerisd@gmail.com or call 08027322220.',
};

/**
 * CAREERS PAGE – Working at RISD.
 */
export const CAREERS = {
  title: 'Careers',
  subtitle:
    'Join a team dedicated to creating lasting change. Build your career while making a difference.',
  intro:
    'At RISD, we believe that the right team makes all the difference. We are always looking for passionate, skilled individuals who are committed to empowering communities and driving sustainable development.',
  whyWork: [
    {
      title: 'Meaningful Work',
      description: 'Every role at RISD directly contributes to improving lives and building stronger communities.',
    },
    {
      title: 'Growth & Learning',
      description: 'We invest in our team with training, mentorship, and opportunities for professional development.',
    },
    {
      title: 'Collaborative Culture',
      description: 'We work as a team—sharing ideas, supporting each other, and celebrating impact together.',
    },
    {
      title: 'Community Impact',
      description: 'See the direct results of your work in the communities we serve across Nigeria.',
    },
  ],
  openings:
    'We currently don\u2019t have open positions, but we\u2019re always interested in hearing from talented individuals. Send your CV and a cover letter to the email below.',
  contactEmail: 'rescuerisd@gmail.com',
};

/**
 * INTERNSHIPS PAGE – Internship programs at RISD.
 */
export const INTERNSHIPS = {
  title: 'Internships',
  subtitle:
    'Gain hands-on experience in community development while making a real impact.',
  intro:
    'RISD offers internship opportunities for students and young professionals who want to gain practical experience in nonprofit work, community development, and social impact. Our internship program provides mentorship, real-world project exposure, and a chance to contribute to meaningful change.',
  benefits: [
    {
      title: 'Hands-On Experience',
      description: 'Work directly on community programs in education, health, environment, and governance.',
    },
    {
      title: 'Mentorship',
      description: 'Learn from experienced professionals who are passionate about sustainable development.',
    },
    {
      title: 'Networking',
      description: 'Connect with development professionals, community leaders, and partner organizations.',
    },
    {
      title: 'Certificate of Completion',
      description: 'Receive a certificate recognizing your contribution and experience at RISD.',
    },
  ],
  areas: [
    'Program Management & Implementation',
    'Monitoring, Evaluation & Learning',
    'Communications & Media',
    'Finance & Administration',
    'Community Mobilization & Engagement',
  ],
  howToApply:
    'Send your CV, a cover letter, and your area of interest to the email below. Internship opportunities are available on a rolling basis.',
  contactEmail: 'rescuerisd@gmail.com',
};
