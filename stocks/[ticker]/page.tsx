import Link from 'next/link';
import { SAMPLE_STOCKS, SECTORS } from '@/lib/stocks';
import { notFound } from 'next/navigation';
import EmailSignup from '@/components/EmailSignup';

export function generateStaticParams() {
  return SAMPLE_STOCKS.map(stock => ({ ticker: stock.ticker.toLowerCase() }));
}

export default function StockPage({ params }: { params: { ticker: string } }) {
  const stock = SAMPLE_STOCKS.find(s => s.ticker.toLowerCase() === params.ticker.toLowerCase());
  if (!stock) notFound();

  const sector = SECTORS.find(s => s.id === stock.sector);
  const up = stock.change >= 0;
  const related = SAMPLE_STOCKS.filter(s => s.sector === stock.sector && s.ticker !== stock.ticker);
  const pctOfHigh = ((stock.price / stock.yearHigh) * 100).toFixed(1);
  const pctOfLow = ((stock.price / stock.yearLow) * 100 - 100).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-20 mb-5">
        <Link href="/" className="hover:text-ink-60">Home</Link>
        <span>/</span>
        <Link href="/stocks" className="hover:text-ink-60">Stocks</Link>
        <span>/</span>
        <span className="text-ink-60 font-medium">{stock.ticker}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
        <div className="lg:col-span-2 space-y-5">

          {/* Price header */}
          <div className="bg-white rounded-lg border border-ink-10 p-5">
            <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold text-ink font-mono">{stock.ticker}</h1>
                  <span className="px-2 py-0.5 bg-ink-05 text-ink-40 text-[11px] font-medium rounded">{sector?.name}</span>
                </div>
                <p className="text-sm text-ink-40 mt-0.5">{stock.name}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-ink font-mono">${stock.price.toFixed(2)}</div>
                <div className={`text-sm font-semibold font-mono ${up ? 'text-up' : 'text-down'}`}>
                  {up ? '▲' : '▼'} {up ? '+' : ''}{stock.change.toFixed(2)} ({up ? '+' : ''}{stock.changePct.toFixed(2)}%)
                </div>
              </div>
            </div>

            {/* Chart placeholder */}
            <div className="h-40 bg-ink-05 rounded flex items-center justify-center text-[12px] text-ink-20 border border-ink-10 border-dashed">
              Interactive chart — powered by live data (coming soon)
            </div>
          </div>

          {/* Key data grid */}
          <div className="bg-white rounded-lg border border-ink-10 p-5">
            <h2 className="text-[11px] font-semibold text-ink-40 uppercase tracking-wider mb-3">Key Statistics</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Market Cap', value: stock.marketCap },
                { label: 'P/E Ratio', value: stock.peRatio?.toFixed(1) ?? 'N/A (REIT)' },
                { label: '52-Week High', value: `$${stock.yearHigh.toFixed(2)}` },
                { label: '52-Week Low', value: `$${stock.yearLow.toFixed(2)}` },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-[10px] text-ink-20 uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-sm font-semibold text-ink font-mono">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* 52-week range bar */}
            <div className="mt-4 pt-4 border-t border-ink-05">
              <div className="text-[10px] text-ink-20 uppercase tracking-wider mb-2">52-Week Range</div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-ink-40">${stock.yearLow.toFixed(0)}</span>
                <div className="flex-1 h-1.5 bg-ink-05 rounded-full relative">
                  <div
                    className="absolute h-3 w-3 bg-stew rounded-full top-1/2 -translate-y-1/2 shadow-sm"
                    style={{ left: `${((stock.price - stock.yearLow) / (stock.yearHigh - stock.yearLow)) * 100}%` }}
                  />
                </div>
                <span className="text-[11px] font-mono text-ink-40">${stock.yearHigh.toFixed(0)}</span>
              </div>
              <p className="text-[11px] text-ink-20 mt-1">
                {pctOfHigh}% of 52W high · +{pctOfLow}% above 52W low
              </p>
            </div>
          </div>

          {/* AI Relevance */}
          <div className="bg-white rounded-lg border border-ink-10 p-5">
            <h2 className="text-[11px] font-semibold text-ink-40 uppercase tracking-wider mb-3">AI Infrastructure Thesis</h2>
            <div className="border-l-2 border-stew pl-4">
              <p className="text-sm text-ink-60 leading-relaxed">{stock.aiRelevance}</p>
            </div>
          </div>

          {/* Company overview */}
          <div className="bg-white rounded-lg border border-ink-10 p-5">
            <h2 className="text-[11px] font-semibold text-ink-40 uppercase tracking-wider mb-3">Company Overview</h2>
            <p className="text-sm text-ink-40 leading-relaxed">{stock.description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">

          {/* Newsletter */}
          <div className="bg-ink rounded-lg p-5">
            <h3 className="text-sm font-bold text-white font-serif mb-1">Get {stock.ticker} Updates</h3>
            <p className="text-[12px] text-white/50 mb-3">Daily analysis on {stock.name} and the AI infrastructure supply chain.</p>
            <EmailSignup variant="dark" />
          </div>

          {/* Related stocks */}
          {related.length > 0 && (
            <div className="bg-white rounded-lg border border-ink-10 p-4">
              <h3 className="text-[11px] font-semibold text-ink-40 uppercase tracking-wider mb-3">
                Also in {sector?.name}
              </h3>
              {related.map(s => (
                <Link key={s.ticker} href={`/stocks/${s.ticker.toLowerCase()}`}>
                  <div className="flex items-center justify-between py-2 px-1 data-row rounded">
                    <div>
                      <span className="font-mono font-semibold text-ink text-[13px]">{s.ticker}</span>
                      <span className="text-[11px] text-ink-20 ml-2">{s.name.split(' ')[0]}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[13px] text-ink">${s.price.toFixed(2)}</div>
                      <div className={`text-[11px] font-mono font-semibold ${s.change >= 0 ? 'text-up' : 'text-down'}`}>
                        {s.change >= 0 ? '+' : ''}{s.changePct.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Quick data */}
          <div className="bg-white rounded-lg border border-ink-10 p-4">
            <h3 className="text-[11px] font-semibold text-ink-40 uppercase tracking-wider mb-3">Quick Data</h3>
            <dl className="space-y-2 text-sm">
              {[
                ['Sector', sector?.name],
                ['Market Cap', stock.marketCap],
                ['P/E', stock.peRatio?.toFixed(1) ?? 'N/A'],
                ['52W Range', `$${stock.yearLow.toFixed(0)} – $${stock.yearHigh.toFixed(0)}`],
              ].map(([label, value]) => (
                <div key={label as string} className="flex justify-between">
                  <dt className="text-ink-20">{label}</dt>
                  <dd className="font-mono text-ink-60 font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
