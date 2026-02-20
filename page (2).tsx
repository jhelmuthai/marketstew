import Link from 'next/link';
import EmailSignup from '@/components/EmailSignup';
import { SAMPLE_STOCKS, SECTORS, getActiveStocks, getSectorStats } from '@/lib/stocks';

export default function Home() {
  const active = getActiveStocks();
  const topMovers = [...active].sort((a, b) => Math.abs(b.changePct) - Math.abs(a.changePct));
  const gainers = active.filter(s => s.change > 0).sort((a, b) => b.changePct - a.changePct);
  const losers = active.filter(s => s.change < 0).sort((a, b) => a.changePct - b.changePct);
  const topByMarketCap = [...active].sort((a, b) => {
    const parse = (s: string) => { const n = parseFloat(s.replace(/[$,]/g, '')); if (s.includes('T')) return n * 1000; return n; };
    return parse(b.marketCap) - parse(a.marketCap);
  });

  return (
    <>
      {/* Compact Hero — editorial, not marketing */}
      <section className="border-b border-ink-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-ink font-serif leading-tight mb-3">
                AI Infrastructure Stock Analysis<br />
                <span className="text-stew">&amp; Market Intelligence</span>
              </h1>
              <p className="text-sm text-ink-40 leading-relaxed max-w-lg mb-5">
                Tracking the entire AI supply chain — semiconductors, data centers, networking, power, cooling, and construction. {active.length} stocks analyzed. Updated daily.
              </p>
              <EmailSignup variant="hero" />
            </div>

            {/* Market snapshot panel */}
            <div className="lg:col-span-2 bg-ink-05 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-[11px] font-semibold text-ink-40 uppercase tracking-wider">Market Snapshot</h2>
                <span className="text-[10px] text-ink-20 font-mono">
                  {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'America/New_York' })}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Sectors', value: '7' },
                  { label: 'Stocks', value: `${active.length}` },
                  { label: 'Updated', value: 'Daily' },
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <div className="text-lg font-bold text-ink font-serif">{stat.value}</div>
                    <div className="text-[10px] text-ink-40 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-ink-10 mt-3 pt-3">
                <h3 className="text-[10px] font-semibold text-ink-40 uppercase tracking-wider mb-2">Top Movers Today</h3>
                {topMovers.slice(0, 4).map(s => (
                  <Link key={s.ticker} href={`/stocks/${s.ticker.toLowerCase()}`}>
                    <div className="flex items-center justify-between py-1.5 data-row px-1 rounded text-sm">
                      <span className="font-mono font-medium text-ink text-[13px]">{s.ticker}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-ink-60 text-[13px]">${s.price.toFixed(2)}</span>
                        <span className={`font-mono text-[12px] font-semibold w-16 text-right ${s.change >= 0 ? 'text-up' : 'text-down'}`}>
                          {s.change >= 0 ? '+' : ''}{s.changePct.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left column — main content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Stock Table */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-ink font-serif">AI Infrastructure Stocks</h2>
                <Link href="/stocks" className="text-[12px] font-semibold text-stew hover:text-stew-dark transition-colors">
                  View All →
                </Link>
              </div>

              <div className="bg-white rounded-lg border border-ink-10 overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-ink-05 text-[10px] font-semibold text-ink-40 uppercase tracking-wider border-b border-ink-10">
                  <div className="col-span-3">Stock</div>
                  <div className="col-span-3">Sector</div>
                  <div className="col-span-2 text-right">Price</div>
                  <div className="col-span-2 text-right">Change</div>
                  <div className="col-span-2 text-right">MCap</div>
                </div>

                {topByMarketCap.slice(0, 12).map((stock, i) => (
                  <Link key={stock.ticker} href={`/stocks/${stock.ticker.toLowerCase()}`}>
                    <div className={`grid grid-cols-12 gap-2 px-4 py-3 data-row cursor-pointer ${
                      i < 11 ? 'border-b border-ink-05' : ''
                    }`}>
                      <div className="col-span-3">
                        <span className="font-mono font-semibold text-ink text-sm">{stock.ticker}</span>
                        <span className="text-[11px] text-ink-40 ml-2 hidden sm:inline">{stock.name.split(' ')[0]}</span>
                      </div>
                      <div className="col-span-3">
                        <span className="text-[11px] text-ink-40">
                          {SECTORS.find(s => s.id === stock.sector)?.name}
                        </span>
                      </div>
                      <div className="col-span-2 text-right font-mono text-sm text-ink">
                        ${stock.price.toFixed(2)}
                      </div>
                      <div className={`col-span-2 text-right font-mono text-sm font-medium ${stock.change >= 0 ? 'text-up' : 'text-down'}`}>
                        {stock.change >= 0 ? '+' : ''}{stock.changePct.toFixed(2)}%
                      </div>
                      <div className="col-span-2 text-right text-[12px] text-ink-40 font-mono">
                        {stock.marketCap}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Latest Analysis placeholder */}
            <section>
              <h2 className="text-lg font-bold text-ink font-serif mb-4">Latest Analysis</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'NVIDIA\'s B200 Ramp Creates $8B Cooling Opportunity',
                    sector: 'Power & Cooling',
                    date: 'Feb 17, 2026',
                    summary: 'As GPU power density crosses 1,000W per chip, liquid cooling transitions from optional to mandatory. Three companies are positioned to capture the lion\'s share.',
                  },
                  {
                    title: 'Data Center Construction Backlogs Hit All-Time High',
                    sector: 'Construction',
                    date: 'Feb 16, 2026',
                    summary: 'Quanta Services and MYR Group report record backlogs as hyperscalers race to bring new AI-capable facilities online across North America.',
                  },
                  {
                    title: 'Broadcom\'s Custom Silicon Push: Who Wins, Who Loses',
                    sector: 'Semiconductors',
                    date: 'Feb 14, 2026',
                    summary: 'Google\'s latest TPU order signals a structural shift in AI chip procurement. We map the supply chain implications across 12 companies.',
                  },
                ].map(article => (
                  <article key={article.title} className="bg-white rounded-lg border border-ink-10 p-5 card-lift cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-semibold text-stew uppercase tracking-wider">{article.sector}</span>
                      <span className="text-ink-10">·</span>
                      <span className="text-[11px] text-ink-20 font-mono">{article.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-ink font-serif leading-snug mb-2">{article.title}</h3>
                    <p className="text-sm text-ink-40 leading-relaxed">{article.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">

            {/* Sector Performance */}
            <div className="bg-white rounded-lg border border-ink-10 p-4">
              <h3 className="text-[11px] font-semibold text-ink-40 uppercase tracking-wider mb-3">Sectors</h3>
              <div className="space-y-2">
                {SECTORS.map(sector => {
                  const { count, avgChange } = getSectorStats(sector.id);
                  if (count === 0) return null;
                  const up = avgChange >= 0;

                  return (
                    <Link key={sector.id} href="/sectors">
                      <div className="flex items-center justify-between py-2 px-2 data-row rounded">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{sector.icon}</span>
                          <span className="text-sm text-ink-60">{sector.name}</span>
                        </div>
                        <span className={`text-[12px] font-mono font-semibold ${up ? 'text-up' : 'text-down'}`}>
                          {up ? '+' : ''}{avgChange.toFixed(2)}%
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link href="/sectors" className="block text-center text-[12px] font-semibold text-stew hover:text-stew-dark mt-3 pt-3 border-t border-ink-05 transition-colors">
                All Sectors →
              </Link>
            </div>

            {/* Gainers / Losers */}
            <div className="bg-white rounded-lg border border-ink-10 p-4">
              <h3 className="text-[11px] font-semibold text-ink-40 uppercase tracking-wider mb-3">Gainers &amp; Losers</h3>

              {gainers.length > 0 && (
                <div className="mb-3">
                  <div className="text-[10px] font-semibold text-up uppercase tracking-wider mb-1.5">▲ Top Gainers</div>
                  {gainers.slice(0, 3).map(s => (
                    <Link key={s.ticker} href={`/stocks/${s.ticker.toLowerCase()}`}>
                      <div className="flex items-center justify-between py-1.5 px-1 data-row rounded">
                        <span className="text-[13px] font-mono font-medium text-ink">{s.ticker}</span>
                        <span className="text-[12px] font-mono font-semibold text-up">+{s.changePct.toFixed(2)}%</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {losers.length > 0 && (
                <div>
                  <div className="text-[10px] font-semibold text-down uppercase tracking-wider mb-1.5">▼ Top Losers</div>
                  {losers.slice(0, 3).map(s => (
                    <Link key={s.ticker} href={`/stocks/${s.ticker.toLowerCase()}`}>
                      <div className="flex items-center justify-between py-1.5 px-1 data-row rounded">
                        <span className="text-[13px] font-mono font-medium text-ink">{s.ticker}</span>
                        <span className="text-[12px] font-mono font-semibold text-down">{s.changePct.toFixed(2)}%</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Newsletter sidebar CTA */}
            <div className="bg-ink rounded-lg p-5">
              <h3 className="text-sm font-bold text-white font-serif mb-1">The AI Infrastructure Brief</h3>
              <p className="text-[12px] text-white/50 mb-3 leading-relaxed">
                Daily stock analysis and supply chain intelligence. Free.
              </p>
              <EmailSignup variant="dark" />
            </div>

            {/* Coverage universe note */}
            <div className="border-l-2 border-stew pl-4 py-1">
              <p className="text-[12px] text-ink-40 leading-relaxed">
                <span className="font-semibold text-ink-60">Coverage universe:</span> {active.length} companies across semiconductors, data center REITs, networking, power &amp; cooling, construction, servers, and hyperscalers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom newsletter bar — restrained */}
      <section className="border-t border-ink-10 bg-ink-05">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-ink font-serif">Get the AI Infrastructure Brief</h2>
            <p className="text-sm text-ink-40">Daily market intelligence for self-directed investors.</p>
          </div>
          <EmailSignup variant="hero" />
        </div>
      </section>
    </>
  );
}
