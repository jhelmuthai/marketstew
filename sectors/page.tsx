import Link from 'next/link';
import { SAMPLE_STOCKS, SECTORS } from '@/lib/stocks';

export default function SectorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-ink font-serif">AI Infrastructure Sectors</h1>
        <p className="text-sm text-ink-40 mt-1">Seven critical layers of the supply chain powering artificial intelligence.</p>
      </div>

      <div className="space-y-4">
        {SECTORS.map(sector => {
          const stocks = SAMPLE_STOCKS.filter(s => s.sector === sector.id);
          const avgChange = stocks.length > 0
            ? stocks.reduce((acc, s) => acc + s.changePct, 0) / stocks.length
            : 0;
          const up = avgChange >= 0;

          return (
            <div key={sector.id} className="bg-white rounded-lg border border-ink-10 p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{sector.icon}</span>
                  <div>
                    <h2 className="text-base font-bold text-ink font-serif">{sector.name}</h2>
                    <p className="text-[12px] text-ink-20">
                      {stocks.length} {stocks.length === 1 ? 'company' : 'companies'} tracked
                    </p>
                  </div>
                </div>
                {stocks.length > 0 && (
                  <div className={`text-sm font-mono font-semibold px-2 py-0.5 rounded ${
                    up ? 'text-up bg-green-50' : 'text-down bg-red-50'
                  }`}>
                    {up ? '+' : ''}{avgChange.toFixed(2)}%
                  </div>
                )}
              </div>

              {stocks.length > 0 ? (
                <div className="border-t border-ink-05 pt-3">
                  <div className="grid grid-cols-12 gap-2 text-[10px] font-semibold text-ink-20 uppercase tracking-wider mb-2 px-1">
                    <div className="col-span-3">Ticker</div>
                    <div className="col-span-4">Company</div>
                    <div className="col-span-2 text-right">Price</div>
                    <div className="col-span-3 text-right">Change</div>
                  </div>
                  {stocks.map(stock => (
                    <Link key={stock.ticker} href={`/stocks/${stock.ticker.toLowerCase()}`}>
                      <div className="grid grid-cols-12 gap-2 py-2 px-1 data-row rounded">
                        <div className="col-span-3 font-mono font-semibold text-ink text-sm">{stock.ticker}</div>
                        <div className="col-span-4 text-sm text-ink-40 truncate">{stock.name}</div>
                        <div className="col-span-2 text-right font-mono text-sm text-ink">${stock.price.toFixed(2)}</div>
                        <div className={`col-span-3 text-right font-mono text-sm font-medium ${stock.change >= 0 ? 'text-up' : 'text-down'}`}>
                          {stock.change >= 0 ? '+' : ''}{stock.changePct.toFixed(2)}%
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-[12px] text-ink-20 italic border-t border-ink-05 pt-3">Coverage coming soon</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
