import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | RISD',
  description:
    'Explore moments from our initiatives—community, impact, and the people we serve.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
