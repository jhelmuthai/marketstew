import { getActiveStocks } from '@/lib/stocks';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://marketstew.com';
  const stocks = getActiveStocks();
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: baseUrl, lastModified: today, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/stocks`, lastModified: today, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/sectors`, lastModified: today, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/newsletter`, lastModified: today, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: today, changeFrequency: 'monthly' as const, priority: 0.5 },
  ];

  const stockPages = stocks.map(stock => ({
    url: `${baseUrl}/stocks/${stock.ticker.toLowerCase()}`,
    lastModified: today,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...stockPages];
}
