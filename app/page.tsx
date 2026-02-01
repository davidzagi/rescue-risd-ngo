import Hero from '@/components/sections/Hero';
import WhoWeAre from '@/components/sections/WhoWeAre';
import WhatWeDo from '@/components/sections/WhatWeDo';
import MeasureLastingChange from '@/components/sections/MeasureLastingChange';
import CommunityFeedback from '@/components/sections/CommunityFeedback';
import ContributeBanner from '@/components/sections/ContributeBanner';
import {
  HERO,
  WHO_WE_ARE,
  WHAT_WE_DO,
  MEASURE_LASTING_CHANGE,
  COMMUNITY_FEEDBACK,
  CONTRIBUTE_BANNER,
} from '@/data/site-data';

export default function Home() {
  return (
    <main>
      <Hero {...HERO} />
      <WhoWeAre {...WHO_WE_ARE} />
      <WhatWeDo {...WHAT_WE_DO} />
      <MeasureLastingChange {...MEASURE_LASTING_CHANGE} />
      <CommunityFeedback {...COMMUNITY_FEEDBACK} />
      <ContributeBanner {...CONTRIBUTE_BANNER} />
    </main>
  );
}
