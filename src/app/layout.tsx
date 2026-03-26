import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

// Ch. 3 - Optimizing Fonts with next/font/google
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Ch. 15 - Adding Metadata
export const metadata: Metadata = {
  title: {
    template: '%s | TechPulse',
    default: 'TechPulse — Tech News Dashboard',
  },
  description:
    'Stay up to date with the latest in AI, Web Development, Mobile, Security, and Open Source.',
  keywords: ['tech news', 'AI', 'web development', 'open source', 'security', 'mobile'],
  openGraph: {
    title: 'TechPulse — Tech News Dashboard',
    description: 'Your daily source for developer news.',
    type: 'website',
  },
};

// Ch. 4 - Creating Layouts and Pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
