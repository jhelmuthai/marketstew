'use client';

import Link from 'next/link';
import { useState } from 'react';

const TICKER_DATA = [
  { sym: 'NVDA', pct: '+2.54' }, { sym: 'AVGO', pct: '-0.57' },
  { sym: 'VRT', pct: '+3.67' }, { sym: 'ANET', pct: '+1.91' },
  { sym: 'DLR', pct: '-0.52' }, { sym: 'ETN', pct: '+0.65' },
  { sym: 'EQIX', pct: '+0.63' }, { sym: 'PWR', pct: '+0.47' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Ticker tape */}
      <div className="bg-ink text-[11px] py-1.5 overflow-hidden font-mono">
        <div className="ticker-animate whitespace-nowrap flex gap-8">
          {[...TICKER_DATA, ...TICKER_DATA].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-1.5">
              <span className="font-medium text-white/90">{t.sym}</span>
              <span className={t.pct.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}>
                {t.pct}%
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b border-ink-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo — clean wordmark */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 bg-stew rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold font-serif">M</span>
              </div>
              <span className="text-[19px] font-bold text-ink font-serif tracking-tight">
                Market<span className="text-stew">Stew</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {[
                { label: 'Stocks', href: '/stocks' },
                { label: 'Sectors', href: '/sectors' },
                { label: 'Newsletter', href: '/newsletter' },
                { label: 'About', href: '/about' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-ink-60 hover:text-ink transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/newsletter"
                className="ml-2 px-4 py-1.5 bg-ink hover:bg-ink-80 text-white text-[13px] font-semibold rounded transition-colors"
              >
                Subscribe
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-ink-60">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>

          {mobileOpen && (
            <div className="md:hidden pb-4 border-t border-ink-10 mt-1 pt-3 space-y-1">
              {['Stocks', 'Sectors', 'Newsletter', 'About'].map(label => (
                <Link
                  key={label}
                  href={`/${label.toLowerCase()}`}
                  className="block px-3 py-2 text-sm text-ink-60 hover:text-ink hover:bg-ink-05 rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/newsletter"
                className="block mx-3 mt-2 px-4 py-2 bg-ink text-white text-sm font-semibold rounded text-center"
                onClick={() => setMobileOpen(false)}
              >
                Subscribe
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
