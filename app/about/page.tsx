import type { Metadata } from 'next';
import WhoWeAre from '@/components/sections/WhoWeAre';
import VisionMissionValues from '@/components/sections/VisionMissionValues';
import OurTeam from '@/components/sections/OurTeam';
import { WHO_WE_ARE, VISION_MISSION_VALUES, OUR_TEAM } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'About Us | RISD',
  description:
    'Building pathways out of poverty for women, youth, and children. Learn about Rescue Initiative for Sustainable Development (RISD).',
};

/**
 * About Us page – reuses the Who We Are section.
 * Content is driven by WHO_WE_ARE in site-data.ts; CTA is overridden here
 * so it’s relevant on the about page (e.g. Contact / Partner instead of "Learn more").
 */
export default function AboutPage() {
  return (
    <main>
      <WhoWeAre
        {...WHO_WE_ARE}
        cta={{
          label: 'Contact Us',
          href: '/contact',
        }}
      />
      <VisionMissionValues {...VISION_MISSION_VALUES} />
      <OurTeam {...OUR_TEAM} />
    </main>
  );
}
