# MarketStew

AI Infrastructure Investing Intelligence — stock analysis, market intelligence, and daily insights for the AI infrastructure supply chain.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel
- **Fonts**: Playfair Display + Source Sans 3 (Google Fonts)

## Getting Started

This project auto-deploys via Vercel from GitHub. No local development setup needed.

## Project Structure

```
marketstew/
├── app/
│   ├── layout.tsx          # Root layout (header + footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + Tailwind
│   ├── stocks/
│   │   ├── page.tsx        # All stocks listing
│   │   └── [ticker]/
│   │       └── page.tsx    # Individual stock page
│   ├── sectors/
│   │   └── page.tsx        # Sectors overview
│   ├── newsletter/
│   │   └── page.tsx        # Newsletter signup
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── Header.tsx          # Nav + ticker tape
│   ├── Footer.tsx          # Footer
│   ├── StockCard.tsx       # Stock card component
│   └── EmailSignup.tsx     # Email capture form
├── lib/
│   └── stocks.ts           # Stock data + sector definitions
└── public/                 # Static assets
```

## Roadmap

- [ ] Connect Supabase for live data
- [ ] Alpha Vantage / yfinance data pipelines
- [ ] Interactive stock charts
- [ ] Email newsletter integration (Brevo)
- [ ] Claude API content generation
- [ ] SEO sitemap + structured data
