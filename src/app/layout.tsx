import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SkipToContent } from '@/components/layout/SkipToContent';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://solargenius.ng'),
  title: {
    default: 'SolarGenius Renewables | Solar Installation Lagos',
    template: '%s | SolarGenius',
  },
  description:
    "Lagos's leading solar panel installation company. Residential & commercial solar systems with battery backup. Get a free site assessment today.",
  keywords: [
    'solar installation Lagos',
    'solar panels Nigeria',
    'residential solar Lagos',
    'commercial solar Lagos',
    'inverter installation Lagos',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'SolarGenius Renewables',
    title: 'SolarGenius Renewables | Solar Installation Lagos',
    description:
      "Lagos's leading solar panel installation company. Residential & commercial solar systems with battery backup.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolarGenius Renewables | Solar Installation Lagos',
    description:
      "Lagos's leading solar panel installation company. Residential & commercial solar systems with battery backup.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
