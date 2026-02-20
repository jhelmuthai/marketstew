import EmailSignup from '@/components/EmailSignup';

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-ink font-serif mb-6">About MarketStew</h1>

      <div className="space-y-5 text-sm text-ink-60 leading-relaxed">
        <p className="text-base text-ink-80">
          MarketStew is a financial media platform focused on the AI infrastructure supply chain — the companies building the physical backbone of artificial intelligence.
        </p>

        <p>
          While most financial media covers AI at the software layer, we go deeper. We track the semiconductors, data center REITs, networking equipment, power systems, cooling technology, and construction firms that make AI physically possible.
        </p>

        <h2 className="text-xl font-bold text-ink font-serif pt-4">Why AI Infrastructure</h2>

        <p>
          Every dollar spent on AI eventually flows through physical infrastructure. Someone has to make the chips. Someone has to build the buildings. Someone has to keep them cool. The supply chain story is the most investable — and the most underreported — angle of the AI revolution.
        </p>

        <p>
          Our coverage universe spans 75 companies across 7 sectors, from trillion-dollar chipmakers to mid-cap specialists in liquid cooling and power distribution. We connect technology shifts to investment implications.
        </p>

        <h2 className="text-xl font-bold text-ink font-serif pt-4">Our Approach</h2>

        <p>
          We combine engineering depth with investment analysis. We don&apos;t just report that a stock moved — we explain the technology, the supply chain dynamics, and the cross-sector implications most analysts miss.
        </p>

        <p>
          We publish daily through our free newsletter, maintain updated stock analysis pages for our full coverage universe, and release weekly deep-dive reports on key themes and companies.
        </p>

        <h2 className="text-xl font-bold text-ink font-serif pt-4">Disclaimer</h2>

        <p className="text-[13px] text-ink-20">
          MarketStew provides financial information for educational and informational purposes only. Nothing on this site constitutes investment advice, a recommendation, or an offer to buy or sell securities. Always do your own research and consult a qualified financial advisor before making investment decisions. Past performance does not guarantee future results.
        </p>
      </div>

      <div className="mt-10 pt-8 border-t border-ink-10">
        <h2 className="text-base font-bold text-ink font-serif mb-2">Stay informed</h2>
        <p className="text-sm text-ink-40 mb-4">The AI Infrastructure Brief. Daily. Free.</p>
        <EmailSignup variant="hero" />
      </div>
    </div>
  );
}
