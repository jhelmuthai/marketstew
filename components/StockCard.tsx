import Link from 'next/link';
import { Stock } from '@/lib/stocks';

export default function StockCard({ stock }: { stock: Stock }) {
  const up = stock.change >= 0;

  return (
    <Link href={`/stocks/${stock.ticker.toLowerCase()}`}>
      <div className="card-lift bg-white rounded border border-ink-10 p-4 cursor-pointer">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-base font-bold text-ink font-mono">{stock.ticker}</span>
            <p className="text-[11px] text-ink-40 mt-0.5 truncate max-w-[140px]">{stock.name}</p>
          </div>
          <div className="text-right">
            <div className="text-base font-semibold text-ink font-mono">${stock.price.toFixed(2)}</div>
            <div className={`text-[11px] font-semibold font-mono ${up ? 'text-up' : 'text-down'}`}>
              {up ? '+' : ''}{stock.changePct.toFixed(2)}%
            </div>
          </div>
        </div>

        {/* Mini data row */}
        <div className="flex items-center gap-3 text-[11px] text-ink-40 border-t border-ink-05 pt-2 mt-2">
          <span>MCap <span className="text-ink-60 font-medium">{stock.marketCap}</span></span>
          <span className="text-ink-10">|</span>
          <span>P/E <span className="text-ink-60 font-medium">{stock.peRatio ?? '—'}</span></span>
        </div>

        <p className="mt-2 text-[12px] text-ink-40 leading-relaxed line-clamp-2">
          {stock.aiRelevance}
        </p>
      </div>
    </Link>
  );
}
