import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BASE_URL, MAIN_IMAGE, SITE_TITLE } from '@/constants';
import MainHeader from '@/components/MainHeader';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: 'Find the best properties in San Antonio with us.',
  keywords: [
    'San Antonio property search',
    'San Antonio find properties',
    'find home',
    'find house',
    'find apartment',
    'find condo',
    'real estate',
    'San Antonio',
    'San Antonio, TX',
    'Downtown San Antonio',
    'properties',
    'buy',
    'rent',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_TITLE,
    description: 'Find the best properties in San Antonio with us.',
    images: [
      {
        url: MAIN_IMAGE,
        width: 1167,
        height: 778,
        alt: 'Tsang Real Estate',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} relative`}>
        <MainHeader />
        <main className='pt-20'>{children}</main>
      </body>
    </html>
  );
}
