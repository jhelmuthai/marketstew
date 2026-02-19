import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MarketStew — AI Infrastructure Stock Analysis & Market Intelligence',
  description: 'Stock analysis, financial data, and market intelligence for the AI infrastructure supply chain. Track semiconductors, data centers, networking, power & cooling stocks.',
  keywords: 'AI stocks, NVIDIA stock, semiconductor investing, data center REITs, AI infrastructure, stock analysis, market intelligence',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
