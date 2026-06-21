

export const CONFIG = {
  logo: {
    text: 'RISD',
    href: '/',
  },
  links: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Stories', href: '/stories' },
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
      { label: 'Stories of Change', href: '/stories' },
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
  heading: 'Empowering the Poor and Vulnerable for Sustainable Environment',
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
  backgroundImage: '/assets/Hero/community-gathering.jpeg',
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
    'Rescue Initiative for Sustainable Development (RISD) is a Non-Governmental Organization informed by a strong passion, zeal and commitment to salvage a larger part of the society that are trapped in the web of poverty, disease, hunger, lack or low level of education, poor hygiene and sanitation and misery. Such category of persons who constitute basically women, youth and children are highly vulnerable and voiceless. The aim of the NGO is to create and promote strategic and workable framework that will bring about change, development and progress that will entrench good governance through the life of dignity, respect, social inclusion and enhanced quality of life.',
  cta: {
    label: 'Learn more about RISD',
    href: '/about',
  },
  image: {
    /** Path to image - replace file in public/assets/About/ or change path */
    src: '/assets/About/training-session.jpeg',
    /** Alt text for accessibility - describe the photo */
    alt: 'Woman leading a training session for community women',
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
      'A Society Free from Poverty with Equal Opportunity',
  },
  mission: {
    title: 'Our Mission',
    description:
      'Improving the lives of the poor and vulnerable particularly women, youth and children through strategic and inclusive gender responsive approach for sustainable development',
  },
  values: {
    title: 'Thematic Areas',
    /** Each string is one line; use " • " or " & " for inline separators as needed */
    items: [
      'Education',
      'Health',
      'Environment and Agriculture',
      'Good Governance'
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
      image: { src: '/assets/Team/shedu-gar.jpeg', alt: 'Mrs Shedu Gar' },
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
      name: 'Itanola, Adegboyega Abbas',
      title: 'Finance Officer',
      image: {
        src: '/assets/Team/itanola-adegboyega-abbas.jpeg',
        alt: 'Itanola, Adegboyega Abbas',
      },
      social: { facebook: '', twitter: '', linkedin: '' },
    },
    {
      name: 'Rahila Bala Namadi',
      title: 'Head of Programmes',
      image: {
        src: '/assets/Team/rahila-bala-namadi.jpeg',
        alt: 'Rahila Bala Namadi',
      },
      social: { facebook: '', twitter: '', linkedin: '' },
    },
  ],
};

/**
 * BOARD OF TRUSTEES – "Our Board of Trustees" section (on the About page).
 * Each trustee has a name, role, and photo.
 *
 * To add a photo: drop a file in public/assets/Trustees/ and set image.src
 * (e.g. /assets/Trustees/jane-doe.jpg). Leave image.src empty ('') to show
 * the trustee's initials until a photo is available.
 */
export const BOARD_OF_TRUSTEES = {
  sectionLabel: 'GOVERNANCE',
  title: 'Our Board of Trustees',
  description:
    'Our trustees provide strategic direction, oversight, and accountability, guiding RISD’s mission to empower the poor and vulnerable for a sustainable future.',
  members: [
    {
      name: 'Prof. Haruna Danwanka',
      title: 'Chairman, Board of Trustees',
      image: {
        src: '/assets/Trustees/haruna-danwanka.jpeg',
        alt: 'Prof. Haruna Danwanka',
      },
    },
    {
      name: 'Mrs Lydia John Shehu',
      title: 'Member, Board of Trustees',
      image: {
        src: '/assets/Trustees/lydia-john-shehu.jpeg',
        alt: 'Mrs Lydia John Shehu',
      },
    },
    {
      name: 'Mr Bitrus David',
      title: 'Member, Board of Trustees',
      image: {
        src: '/assets/Trustees/bitrus-david.jpeg',
        alt: 'Mr Bitrus David',
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
    src: '/assets/WhatWeDo/community-education.jpeg',
    alt: 'Women reading educational materials in a community circle',
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
    src: '/assets/MeasureLastingChange/women-certificates.jpeg',
    alt: 'Women proudly holding certificates of participation',
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
    src: '/assets/About/workshop-speaker.jpeg',
    /** Describe the photo for accessibility */
    alt: 'Speaker presenting at a capacity building workshop',
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
    src: '/assets/About/women-partnership.jpeg',
    alt: 'Women group photo with RISD and US Embassy partnership banner',
  },
};

/**
 * GALLERY – Initiatives and image sets. Images live in public/gallery/{initiativeId}/image{N}.{imageExt}
 * imageExt defaults to 'webp' if omitted.
 */
export const GALLERY = {
  title: 'Our Gallery',
  subtitle:
    'Moments from our initiatives—community, impact, and the people we serve.',
  initiatives: [
    {
      id: 'women-for-women-international',
      label: 'Women for Women International',
      imageCount: 32,
      program: 'Stronger Women, Stronger Nations Program',
      description: [
        'Implemented for 1,700 beneficiaries in Alkaleri LGA, improving women’s health, wellbeing, income generation, savings culture, decision-making capacity, and community support systems.',
        'Established 60 VSLA groups with 1700 active women beneficiaries in Gwaram, Alkaleri and Gar community of Alkaleri LGA Bauchi State Nigeria.',
      ],
    },
    {
      id: 'us-embassy',
      label: 'U.S. Embassy',
      imageCount: 7,
      program: 'Ambassadorial Small-Scale Project Fund',
      description: [
        'Implemented an agricultural value-addition project providing energy-saving processing machines such as rice polishers, de-stoners, threshers, and packaging units.',
        'Beneficiaries include 4 clusters of 25 members (youth, adolescents, and women) engaged in improved agricultural processing and VSLG activities.',
      ],
    },
    {
      id: 'aspire-project',
      label: 'PLAN International — ASPIRE Project',
      imageCount: 7,
      program: 'PLAN International (Global Affairs Canada) ASPIRE Project',
      description: [
        'Focused on improving Sexual and Reproductive Health and Rights (SRHR) for Adolescent Girls and Young Women, and advocating for the domestication of laws against human trafficking in Bauchi State.',
      ],
    },
    {
      id: 'bread-for-the-world',
      label: 'Bread for the World',
      imageCount: 100,
      program: 'Bread for the World (DEC-SSPF Program)',
      description: [
        'Trained 240 beneficiaries in literacy, numeracy, and value-added vocational skills.',
        'Established Village Savings and Loans Groups (VSLGs) for beneficiaries and improved livelihood outcomes.',
      ],
    },
  ],
};

/**
 * STORIES OF CHANGE – Beneficiary stories grouped by program/partner.
 *
 * Structure: STORIES.programs[] groups stories by the partner/program that
 * funded them (e.g. "Women for Women International"). Each story is rendered
 * as a card on /stories and gets its own page at /stories/<slug>.
 *
 * To add a story: append an entry to the relevant program's `stories` array
 * with a unique `slug`. To add a photo, drop a file in
 * public/assets/Stories/ and set `image.src` (leave blank to show initials).
 */
export const STORIES = {
  title: 'Stories of Change',
  subtitle:
    'Real voices from the women and communities we serve. Each story a testament to resilience, dignity, and lasting change.',
  programs: [
    {
      id: 'women-for-women-international',
      /** Partner / funder name (used as the navigation group label) */
      partner: 'Women for Women International',
      /** Program under which these stories were collected */
      program: 'Stronger Women, Stronger Nations Program',
      description:
        'Through 60 VSLA groups across Gwaram, Alkaleri, and Gar communities of Alkaleri LGA, Bauchi State, 1,700 women gained skills in income generation, savings, health, and decision-making. These are some of their stories.',
      stories: [
        {
          slug: 'sahura-salisu',
          name: 'Sahura Salisu',
          location: 'Gar',
          reference: 'Gar18',
          theme: 'Growing a trading business',
          excerpt:
            'After losing her parents in the crisis, Sahura grew a ₦30,000 rice and maize trade into a thriving business and now rears goats and hens while saving for her family.',
          quote:
            "My name is Sahura Salisu, and I was born in Yalwan, Shandam LGA, of Plateau State. I lost my parents during the crisis in our area, which forced us to migrate to Gar, where we stayed with my uncle. After my parents' passing, my mother distributed us among her relatives, as she couldn't care for all of us alone. I got married to Dahiru Usman at 17, and we've been blessed with four children, two boys and two girls, who are all in school.\n\nI started a small business selling rice and maize with an initial capital of ₦30,000. With the training stipend from RISD, I expanded my business to include palm oil, banana, and tiger nut. This expansion increased my profit by ₦15,000, allowing me to grow my capital to ₦60,000.\n\nI've also invested in rearing goats and hens at home. Additionally, I've developed a habit of saving money through my bank account and prioritizing personal and environmental cleanliness.",
          image: { src: '', alt: 'Sahura Salisu' },
        },
        {
          slug: 'tamida-arziki',
          name: 'Tamida Arziki',
          location: 'Gar',
          reference: 'Gar17',
          theme: 'From peanuts to land ownership',
          excerpt:
            'With her program allowance and a VSLA loan, Tamida expanded from selling peanuts to groundnut oil and vegetables, saved ₦20,000, and bought a plot of land to farm.',
          quote:
            'My name is Tamida Moresu, and I was born in Lusa community, Bogoro LGA, Bate. I completed my secondary education before marrying Mr. Yakubu Ahmadi at the age of 22. We have been blessed with five children, all of whom are currently in school.\n\nI engage in farming and sell peanuts, but with the allowance I receive from the program, I have expanded my business to include groundnut oil and vegetables. This expansion has enabled me to save ₦20,000. Using my savings and a loan from the VSLA group, I acquired a plot of land where I planted groundnuts this year. As a result, my family and I have been able to eat well and live in peace.',
          image: { src: '', alt: 'Tamida Arziki' },
        },
        {
          slug: 'rashida-haruna',
          name: 'Rashida Haruna',
          location: 'Gar',
          reference: 'Gar24',
          theme: 'Finding her voice',
          excerpt:
            'Once unable to speak up even when hurt, Rashida gained the confidence to resolve conflicts peacefully, and grew from running two businesses to four.',
          quote:
            'The changes I observed in myself are significant. Before enrolling in the program, I had great difficulty expressing myself. Whenever someone offended me, I didn’t have the confidence to respond or address the issue; I would just remain silent, even when it hurt me deeply. This affected my communication at home, especially with my husband. But through the teachings and support I received from this program, I have gained the confidence and skills to express myself effectively. Now, if someone offends me, I can boldly address the situation and work toward a peaceful resolution.\n\nIn terms of my household responsibilities, I used to neglect my chores. Sometimes I would just lie down and do nothing. But now, knowing that I need to attend class by 9:00 a.m. motivates me to wake up early and complete all my household tasks before leaving the house.\n\nWith regard to my business, I used to run only two, kunu and zobo. Thanks to the knowledge I have gained through the program, I now run four businesses at the same time.',
          image: { src: '', alt: 'Rashida Haruna' },
        },
        {
          slug: 'zuwaira-amadu',
          name: 'Zuwaira Amadu',
          location: 'Gar',
          reference: 'Gar22',
          theme: 'Bringing peace to her neighbours',
          excerpt:
            'Using the conflict-resolution lessons from her training manual, Zuwaira helped two quarrelling co-wives reconcile, and shared a meal with them in peace.',
          quote:
            'One day at home, one of my neighbors came to me. She said she heard that our manual has a lot of pictures and asked me to show her. I brought out the manual and showed her some pictures. She asked me to explain, so I opened the page on conflict resolution and explained what was happening in the picture.\n\nThen she asked if what she and her co-wife had been doing, frequent quarreling, was wrong. I told her yes, it’s wrong to always fight with neighbors or co-wives. She asked how to resolve it, and I told her to go and apologize to her co-wife and ask for forgiveness for any wrong she had done. She did it.\n\nThe next day, they both came to my house, and her co-wife asked who told her to come and apologize, because she knew she couldn’t have done it on her own. She pointed to me. The co-wife was very happy with me and said this training was very good and that she wished she could be enrolled. That evening, I cooked and gave food to both of them, and they ate together.',
          image: { src: '', alt: 'Zuwaira Amadu' },
        },
        {
          slug: 'shafaatu-danjuma',
          name: 'Shafaatu Danjuma',
          location: 'Gar',
          reference: 'Gar14',
          theme: 'Building a herd of goats',
          excerpt:
            'With the goat she received and one she bought, Shafaatu is steadily building her livestock and plans to buy more after harvest.',
          quote:
            'I have bought one goat, and added to the one given to me. I hope to buy more when I sell my farm produce after harvest.',
          image: { src: '', alt: 'Shafaatu Danjuma' },
        },
        {
          slug: 'hansatu-iliyasu',
          name: 'Hansatu Iliyasu',
          location: 'Gar',
          reference: 'Gar20',
          theme: 'Reviving her poultry farm',
          excerpt:
            'Once losing birds to disease, Hansatu learned proper poultry care from her vocational trainer, and now her compound is full of healthy, reproducing chickens.',
          quote:
            'I was into poultry farming, but my birds were dying one by one from fluids and other diseases. As a result of this program, I was able to learn more about poultry with the help of my vocational trainer. The chickens have reproduced and my compound is full of them. I intend to sell some of them during the festive period to buy a goat and add to the one given to me.',
          image: { src: '', alt: 'Hansatu Iliyasu' },
        },
        {
          slug: 'bridget-danladi',
          name: 'Bridget Danladi',
          location: 'Gar',
          reference: 'Gar19',
          theme: 'Earning through cosmetology',
          excerpt:
            'Trained in cosmetology, Bridget now produces and sells pomade and liquid soap, saving every bit of profit to expand into new products.',
          quote:
            'From my training in cosmetology, I produce pomade and sell it at the market on market days. I also sell liquid soap to bike riders in my community to wash their bikes, and I’ve been making a profit of ₦150 to ₦200 on each product. I’ve been saving all my interest to expand my business into other products.',
          image: { src: '', alt: 'Bridget Danladi' },
        },
        {
          slug: 'jummai-musa',
          name: 'Jummai Musa',
          location: 'Gar',
          reference: 'Gar22',
          theme: 'Toward a provision store',
          excerpt:
            'A carton of detergent from RISD became the seed of a growing shop, as Jummai reinvested her profits into soap, salt, and seasoning.',
          quote:
            'I used to give my children detergent to sell for me, but after RISD gave me cartons of detergent, I sold it and used the profit to add soap, salt, and Maggi to my business. I now sell them in front of our compound, which I hope to turn into a big provision store someday.',
          image: { src: '', alt: 'Jummai Musa' },
        },
        {
          slug: 'victoria-wani',
          name: 'Victoria Wani',
          location: 'Gar',
          reference: 'Gar17',
          theme: 'Peace, health, and savings',
          excerpt:
            'Victoria now lives in harmony with her co-wife, manages her earnings in three parts, saves with the VSLA, and chooses hospitals over self-medication.',
          quote:
            'I now live in peace with my co-wife, and I respect my husband the way I should. I take a bath regularly, cook food early, and help my husband with some of the household financial responsibilities when he lacks money. I can now resolve conflict between us in the family.\n\nI now calculate my expenses and income from my capital, and share my earnings into three parts: I save one part in the VSLA, use one part for my financial needs, and use one part to expand my business. I now go to the hospital when I am sick instead of self-medicating, and I advise my neighbors to stop using herbs to treat themselves and their children. One of them is now happy and goes to the hospital when she or her family members are sick.',
          image: { src: '', alt: 'Victoria Wani' },
        },
        {
          slug: 'rabiatu-abubakar',
          name: 'Rabiatu Abubakar',
          location: 'Gar',
          reference: 'Gar22',
          theme: 'Mastering business records',
          excerpt:
            'Rabiatu learned to separate profit from capital and keep records, skills that help her grow her trade and a profitable firewood resale business.',
          quote:
            'I didn’t know how to separate my profit from my capital. But now, I’ve learned how to do that properly, and also how to keep business records to know whether I’m making a profit or not. If I notice I’m not gaining, I now understand how to add more money to the business to make it grow and become more profitable. These skills have helped me better manage and improve my business.\n\nI also sell firewood that I buy from people who bring it from the bush. I resell it for ₦3,000, making a profit of ₦1,000 on each bunch.',
          image: { src: '', alt: 'Rabiatu Abubakar' },
        },
      ],
    },
  ],
};

/**
 * Helper: flat list of every story with its parent program attached.
 * Used by /stories/[slug] to look up a single story.
 */
export function getAllStories() {
  return STORIES.programs.flatMap((program) =>
    program.stories.map((story) => ({ ...story, program }))
  );
}

/** Helper: find one story (with its program) by slug, or undefined. */
export function getStoryBySlug(slug: string) {
  return getAllStories().find((story) => story.slug === slug);
}

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
    'From a vision of hope to a movement for sustainable development.',
  story: [
    {
      heading: 'A Vision Born from Concern',
      text: 'The story of Rescue Initiative for Sustainable Development (RISD) is rooted in a deep concern for the growing challenges faced by poor and vulnerable communities, particularly women, youth, and children who continue to struggle with poverty, poor health, limited access to education, and social exclusion. In the years leading up to 2017, a group of passionate development practitioners and community advocates working in Bauchi State, Nigeria, led by Lydia John Shehu, witnessed firsthand the realities of vulnerable populations: young girls forced out of school, women denied economic opportunities, communities lacking access to basic health information, and young people trapped in cycles of poverty.',
    },
    {
      heading: 'The Birth of RISD',
      text: 'Rather than accepting these challenges as inevitable, they envisioned a society where every individual, regardless of gender, social status, or economic background, could access opportunities to thrive. They believed that sustainable development could only be achieved when communities themselves were empowered to become agents of change. This vision led to the establishment of Rescue Initiative for Sustainable Development (RISD) on 14th March 2017.',
    },
    {
      heading: 'The Early Days',
      text: 'In its early days, RISD operated with limited resources but abundant commitment. Its activities were driven by volunteers, community mobilizers, and dedicated professionals who invested their time, knowledge, and personal resources to support vulnerable populations. Working directly within communities, RISD focused on listening to local voices, understanding grassroots challenges, and identifying practical solutions. Like many emerging civil society organizations, it faced obstacles of funding, institutional growth, and operational capacity. Yet, guided by accountability, transparency, honesty, integrity, hard work, resilience, gender inclusion, and teamwork, it steadily gained the trust of communities, government institutions, and development partners.',
    },
    {
      heading: 'A New Chapter: Formal Registration',
      text: 'Recognizing the need for a stronger institutional framework to expand its impact, RISD formally registered with the Corporate Affairs Commission (CAC) on 17th September 2019. This milestone marked the beginning of a new chapter in the organization’s growth and positioned it to engage more effectively with national and international development partners.',
    },
    {
      heading: 'Growing Impact',
      text: 'Since its formal registration, RISD has evolved into a respected community-based organization implementing evidence-driven and gender-responsive interventions across four strategic thematic areas: Education, Health, Environment, and Good Governance. Through collaborations with Women for Women International, PLAN International, MEDA, the Development Exchange Centre (DEC), the U.S. Embassy, and other development actors, RISD has empowered women economically, improved access to health information, strengthened youth leadership, promoted gender equality, expanded educational opportunities, and supported sustainable livelihoods. Whether helping women establish savings groups, mentoring adolescent girls and young women, advocating for the protection of vulnerable populations, or promoting agricultural value addition and entrepreneurship, RISD remains committed to development that is inclusive, sustainable, and community-driven.',
    },
    {
      heading: 'Where We Are Today',
      text: 'Today, RISD stands as a trusted development partner working alongside government ministries, community-based organizations, traditional institutions, donor agencies, and grassroots networks to address some of society’s most pressing challenges. What began as a small initiative driven by a shared passion for social justice has grown into an organization recognized for its commitment to sustainable development and community empowerment. Guided by its motto, “Empowering the Poor and Vulnerable for Sustainable Environment,” RISD continues to envision a society free from poverty with equal opportunity. Its story is still being written, one community, one family, and one transformed life at a time.',
    },
  ],
  milestones: [
    {
      year: '14 Mar 2017',
      event:
        'RISD founded in Bauchi State, Nigeria, by a team of development practitioners and community advocates led by Lydia John Shehu.',
    },
    {
      year: '17 Sep 2019',
      event:
        'RISD formally registered with the Corporate Affairs Commission (CAC), expanding its reach and institutional capacity.',
    },
    {
      year: 'Today',
      event:
        'Implementing evidence-based, gender-responsive programs across Education, Health, Environment, and Good Governance through partnerships with Women for Women International, PLAN International, MEDA, DEC, the U.S. Embassy, and others.',
    },
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
  /** Bank account details for direct transfers – update with real details when available */
  bankAccounts: [
    {
      bankName: 'Access Bank',
      accountName: 'Rescue Initiative for Sustainable Development',
      accountNumber: '1237460818',
      currency: 'NGN',
    },
    {
      bankName: 'comming ',
      accountName: 'Rescue Initiative for Sustainable Development',
      accountNumber: '----',
      currency: 'USD',
    },
  ],
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
