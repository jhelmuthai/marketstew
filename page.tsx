import EmailSignup from '@/components/EmailSignup';

export default function NewsletterPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-ink font-serif mb-3">The AI Infrastructure Brief</h1>
        <p className="text-sm text-ink-40 leading-relaxed max-w-md mx-auto">
          Daily stock analysis and supply chain intelligence for the AI infrastructure market. Every weekday morning.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <EmailSignup variant="hero" />
      </div>

      {/* What to expect */}
      <div className="space-y-6 mb-12">
        <h2 className="text-lg font-bold text-ink font-serif">What you get</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Market Movers', desc: 'Top AI infrastructure stocks making moves, with context on why.' },
            { title: 'Supply Chain Signals', desc: 'Earnings, contracts, capacity expansions, and regulatory shifts.' },
            { title: 'Weekly Deep Dive', desc: 'In-depth analysis on a specific company, sector, or trend.' },
            { title: 'Data Snapshots', desc: 'Valuations, cross-sector comparisons, and key metrics.' },
          ].map(item => (
            <div key={item.title} className="border-l-2 border-ink-10 pl-4">
              <h3 className="text-sm font-semibold text-ink mb-0.5">{item.title}</h3>
              <p className="text-[13px] text-ink-40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sample preview */}
      <div className="mb-12">
        <h2 className="text-lg font-bold text-ink font-serif mb-4">Sample issue</h2>

        <div className="bg-white rounded-lg border border-ink-10 p-6 shadow-sm">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-ink-05">
            <div className="w-5 h-5 bg-stew rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-bold font-serif">M</span>
            </div>
            <span className="text-sm font-semibold text-ink">MarketStew</span>
            <span className="text-[11px] text-ink-20 font-mono ml-auto">Feb 17, 2026</span>
          </div>

          <h3 className="text-base font-bold text-ink font-serif leading-snug mb-2">
            NVIDIA&apos;s Next-Gen Cooling Problem Is Vertiv&apos;s Billion-Dollar Opportunity
          </h3>
          <p className="text-sm text-ink-40 leading-relaxed mb-3">
            As NVIDIA&apos;s B200 GPUs push power consumption above 1,000W per chip, the data center cooling supply chain is hitting an inflection point. Three stocks are positioned to capture this shift...
          </p>
          <span className="text-[12px] font-semibold text-stew">Continue reading →</span>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center border-t border-ink-10 pt-8">
        <p className="text-sm text-ink-40 mb-4">Takes 10 seconds. Unsubscribe anytime.</p>
        <div className="flex justify-center">
          <EmailSignup variant="hero" />
        </div>
      </div>
    </div>
  );
}
