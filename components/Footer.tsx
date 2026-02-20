import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-ink-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="text-lg font-bold text-ink font-serif tracking-tight">
              Market<span className="text-stew">Stew</span>
            </span>
            <p className="text-xs text-ink-40 mt-2 leading-relaxed">
              AI infrastructure investing intelligence. 75 stocks across 7 sectors powering the AI supply chain.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-ink-40 uppercase tracking-wider mb-3">Sectors</h4>
            <ul className="space-y-1.5">
              {['Semiconductors', 'Data Center REITs', 'Networking', 'Power & Cooling', 'Construction'].map(s => (
                <li key={s}><Link href="/sectors" className="text-sm text-ink-60 hover:text-stew transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-ink-40 uppercase tracking-wider mb-3">Resources</h4>
            <ul className="space-y-1.5">
              <li><Link href="/stocks" className="text-sm text-ink-60 hover:text-stew transition-colors">All Stocks</Link></li>
              <li><Link href="/newsletter" className="text-sm text-ink-60 hover:text-stew transition-colors">Daily Brief</Link></li>
              <li><Link href="/about" className="text-sm text-ink-60 hover:text-stew transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-ink-40 uppercase tracking-wider mb-3">Newsletter</h4>
            <p className="text-sm text-ink-60 mb-3">The AI Infrastructure Brief. Every weekday.</p>
            <Link
              href="/newsletter"
              className="inline-block px-4 py-2 bg-ink hover:bg-ink-80 text-white text-sm font-medium rounded transition-colors"
            >
              Subscribe Free →
            </Link>
          </div>
        </div>

        <div className="border-t border-ink-10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-ink-20">© {new Date().getFullYear()} MarketStew. Not financial advice.</p>
          <div className="flex gap-4">
            {['Privacy', 'Terms', 'Disclaimer'].map(link => (
              <Link key={link} href="/about" className="text-[11px] text-ink-20 hover:text-ink-40 transition-colors">{link}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
