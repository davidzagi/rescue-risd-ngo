import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { FOOTER } from "@/data/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "Rescue Initiative for Sustainable Development (RISD) is a registered non-governmental and not for profit Organization dedicated to improving the lives of the poor and vulnerable particularly women, youth, and children that are trapped in poverty, poor health, low educational access, and social exclusion.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rescuerisd.org"),
  title: {
    default: "Rescue Initiative for Sustainable Development (RISD)",
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/assets/logo/risd-logo.svg",
  },
  openGraph: {
    type: "website",
    siteName: "RISD",
    title: "Rescue Initiative for Sustainable Development (RISD)",
    description: SITE_DESCRIPTION,
    url: "/",
    // og image is provided by app/opengraph-image.tsx (1200x630 branded card)
  },
  twitter: {
    card: "summary_large_image",
    title: "Rescue Initiative for Sustainable Development (RISD)",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        {children}
        <Footer {...FOOTER} />
      </body>
    </html>
  );
}
