'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SAMPLE_STOCKS, SECTORS, getActiveStocks } from '@/lib/stocks';

export default function StocksPage() {
  const [activeSector, setActiveSector] = useState<string>('all');
  const active = getActiveStocks();
  const filtered = activeSector === 'all'
    ? active
    : active.filter(s => s.sector === activeSector);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-ink font-serif">AI Infrastructure Stocks</h1>
        <p className="text-sm text-ink-40 mt-1">{active.length} companies tracked across the AI supply chain</p>
      </div>

      {/* Sector filters */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        <button
          onClick={() => setActiveSector('all')}
          className={`px-3 py-1.5 rounded text-[12px] font-medium transition-colors ${
            activeSector === 'all' ? 'bg-ink text-white' : 'bg-ink-05 text-ink-60 hover:bg-ink-10'
          }`}
        >All</button>
        {SECTORS.map(s => (
          <button
            key={s.id}
            onClick={() => setActiveSector(s.id)}
            className={`px-3 py-1.5 rounded text-[12px] font-medium transition-colors ${
              activeSector === s.id ? 'bg-ink text-white' : 'bg-ink-05 text-ink-60 hover:bg-ink-10'
            }`}
          >{s.icon} {s.name}</button>
        ))}
      </div>

      {/* Scrollable table wrapper */}
      <div className="bg-white rounded-lg border border-ink-10 overflow-x-auto">
        <div className="min-w-[800px]">

          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-2.5 bg-ink-05 text-[10px] font-semibold text-ink-40 uppercase tracking-wider border-b border-ink-10">
            <div className="col-span-2">Ticker</div>
            <div className="col-span-3">Company</div>
            <div className="col-span-2">Sector</div>
            <div className="col-span-1 text-right">Price</div>
            <div className="col-span-1 text-right">Chg%</div>
            <div className="col-span-1 text-right">MCap</div>
            <div className="col-span-1 text-right">P/E</div>
            <div className="col-span-1 text-right">52W Hi</div>
          </div>

          {/* Rows */}
          {filtered.map((stock, i) => (
            <Link key={stock.ticker} href={`/stocks/${stock.ticker.toLowerCase()}`}>
              <div className={`grid grid-cols-12 gap-4 px-4 py-3 data-row cursor-pointer ${
                i < filtered.length - 1 ? 'border-b border-ink-05' : ''
              }`}>
                <div className="col-span-2 font-mono font-semibold text-ink text-sm">{stock.ticker}</div>
                <div className="col-span-3 text-sm text-ink-60 truncate">{stock.name}</div>
                <div className="col-span-2 text-[11px] text-ink-40">{SECTORS.find(s => s.id === stock.sector)?.name}</div>
                <div className="col-span-1 text-right font-mono text-sm text-ink">${stock.price.toFixed(2)}</div>
                <div className={`col-span-1 text-right font-mono text-sm font-medium ${stock.change >= 0 ? 'text-up' : 'text-down'}`}>
                  {stock.change >= 0 ? '+' : ''}{stock.changePct.toFixed(2)}%
                </div>
                <div className="col-span-1 text-right text-[12px] text-ink-40 font-mono">{stock.marketCap}</div>
                <div className="col-span-1 text-right text-[12px] text-ink-40 font-mono">{stock.peRatio ?? '—'}</div>
                <div className="col-span-1 text-right text-[12px] text-ink-40 font-mono">${stock.yearHigh.toFixed(0)}</div>
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="py-12 text-center text-sm text-ink-20">No stocks in this sector yet.</div>
          )}

        </div>
      </div>
    </div>
  );
}
