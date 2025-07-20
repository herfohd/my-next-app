import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Dr. Sarah Mitchell - Medical Practice',
    template: '%s | Dr. Sarah Mitchell'
  },
  description: 'Providing exceptional healthcare services with a personal touch. Dr. Sarah Mitchell combines years of experience with cutting-edge medical practices.',
  keywords: ['healthcare', 'medical practice', 'doctor', 'physician', 'medical care'],
  authors: [{ name: 'Dr. Sarah Mitchell' }],
  creator: 'Dr. Sarah Mitchell',
  publisher: 'Dr. Sarah Mitchell Medical Practice',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Dr. Sarah Mitchell Medical Practice',
    title: 'Dr. Sarah Mitchell - Medical Practice',
    description: 'Providing exceptional healthcare services with a personal touch.',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Dr. Sarah Mitchell Medical Practice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Sarah Mitchell - Medical Practice',
    description: 'Providing exceptional healthcare services with a personal touch.',
    images: ['/og-image.jpg'], // Add your Twitter image
    creator: '@DrSarahMitchell', // Replace with actual Twitter handle
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a8a' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}