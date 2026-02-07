import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | RISD',
  description:
    'Get in touch with Rescue Initiative for Sustainable Development. We\'re here to help with any questions or support needs.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
