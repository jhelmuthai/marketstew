export interface Stock {
  ticker: string;
  name: string;
  sector: string;
  price: number;
  change: number;
  changePct: number;
  marketCap: string;
  peRatio: number | null;
  yearHigh: number;
  yearLow: number;
  aiRelevance: string;
  description: string;
}

export const SECTORS = [
  { id: 'semiconductors', name: 'Semiconductors', icon: '⚡', count: 2 },
  { id: 'data-center-reits', name: 'Data Center REITs', icon: '🏢', count: 2 },
  { id: 'networking', name: 'Networking', icon: '🔗', count: 1 },
  { id: 'power-cooling', name: 'Power & Cooling', icon: '🔋', count: 2 },
  { id: 'construction', name: 'Construction', icon: '🏗️', count: 1 },
  { id: 'servers', name: 'Servers & Systems', icon: '🖥️', count: 0 },
  { id: 'hyperscalers', name: 'Hyperscalers', icon: '☁️', count: 0 },
] as const;

export const SAMPLE_STOCKS: Stock[] = [
  {
    ticker: 'NVDA', name: 'NVIDIA Corporation', sector: 'semiconductors',
    price: 138.25, change: 3.42, changePct: 2.54, marketCap: '$3.38T', peRatio: 54.2, yearHigh: 153.13, yearLow: 75.61,
    aiRelevance: 'Dominant AI GPU supplier. Controls ~80% of data center AI accelerator market. Every major hyperscaler depends on NVIDIA GPUs for AI training and inference workloads.',
    description: 'NVIDIA designs and sells graphics processing units (GPUs) and system-on-chip units. The company is the undisputed leader in AI accelerator hardware, with its H100 and B200 GPUs powering the vast majority of AI training infrastructure globally.',
  },
  {
    ticker: 'AVGO', name: 'Broadcom Inc.', sector: 'semiconductors',
    price: 228.50, change: -1.30, changePct: -0.57, marketCap: '$1.07T', peRatio: 38.1, yearHigh: 251.88, yearLow: 122.34,
    aiRelevance: 'Critical supplier of custom AI accelerators (XPUs) for Google and Meta. Also provides networking chips essential for connecting GPU clusters in AI data centers.',
    description: 'Broadcom is a global technology leader that designs, develops, and supplies semiconductor and infrastructure software solutions.',
  },
  {
    ticker: 'VRT', name: 'Vertiv Holdings', sector: 'power-cooling',
    price: 118.75, change: 4.20, changePct: 3.67, marketCap: '$44.5B', peRatio: 45.8, yearHigh: 132.00, yearLow: 52.30,
    aiRelevance: 'Leading provider of liquid cooling and power management for AI data centers. Direct beneficiary of the surge in GPU power density requiring advanced thermal solutions.',
    description: 'Vertiv designs and builds critical digital infrastructure technologies for data centers, communication networks, and commercial/industrial environments.',
  },
  {
    ticker: 'ANET', name: 'Arista Networks', sector: 'networking',
    price: 98.50, change: 1.85, changePct: 1.91, marketCap: '$120.3B', peRatio: 42.6, yearHigh: 115.00, yearLow: 62.10,
    aiRelevance: 'Dominant supplier of high-speed ethernet switches for AI/ML clusters. Hyperscalers use Arista switches to connect thousands of GPUs in AI training networks.',
    description: 'Arista Networks provides cloud networking solutions for large data center, campus, and routing environments.',
  },
  {
    ticker: 'DLR', name: 'Digital Realty Trust', sector: 'data-center-reits',
    price: 172.30, change: -0.90, changePct: -0.52, marketCap: '$55.2B', peRatio: null, yearHigh: 185.50, yearLow: 128.75,
    aiRelevance: 'Largest pure-play data center REIT. Provides the physical buildings housing AI infrastructure. Growing demand for AI workloads is driving record leasing activity.',
    description: 'Digital Realty Trust owns, acquires, develops, and operates data centers worldwide.',
  },
  {
    ticker: 'ETN', name: 'Eaton Corporation', sector: 'power-cooling',
    price: 325.40, change: 2.10, changePct: 0.65, marketCap: '$130.1B', peRatio: 34.5, yearHigh: 355.00, yearLow: 230.50,
    aiRelevance: 'Leading supplier of electrical power distribution equipment for data centers. Provides UPS systems, switchgear, and power distribution units essential for AI infrastructure.',
    description: 'Eaton Corporation is a diversified power management company providing energy-efficient solutions.',
  },
  {
    ticker: 'EQIX', name: 'Equinix Inc.', sector: 'data-center-reits',
    price: 895.20, change: 5.60, changePct: 0.63, marketCap: '$85.7B', peRatio: null, yearHigh: 960.00, yearLow: 693.40,
    aiRelevance: 'World\'s largest data center and colocation provider. Strategic interconnection points where AI workloads, cloud services, and enterprise networks converge.',
    description: 'Equinix operates as a global digital infrastructure company creating a platform for digital leadership.',
  },
  {
    ticker: 'PWR', name: 'Quanta Services', sector: 'construction',
    price: 312.80, change: 1.45, changePct: 0.47, marketCap: '$46.2B', peRatio: 28.3, yearHigh: 340.00, yearLow: 215.60,
    aiRelevance: 'Largest electrical infrastructure contractor. Builds the power transmission lines and substations needed to deliver massive electricity loads to new AI data centers.',
    description: 'Quanta Services provides specialty contracting services for electric power, underground utility, and infrastructure industries.',
  },
];

export function getStockByTicker(ticker: string): Stock | undefined {
  return SAMPLE_STOCKS.find(s => s.ticker === ticker.toUpperCase());
}

export function getStocksBySector(sectorId: string): Stock[] {
  return SAMPLE_STOCKS.filter(s => s.sector === sectorId);
}
