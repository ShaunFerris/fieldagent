import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Field Agent',
  description: 'Field Agent by Richmond Creative Agency LLC',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
