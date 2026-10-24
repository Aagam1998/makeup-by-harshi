'use client';

import { useState } from 'react';
import { portfolio, portfolioCollections, settings } from '@/data/content';
import PortfolioImages from './portfolio-images';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...portfolioCollections.map(collection => collection.title)];
  const items = portfolio.filter(item => filter === 'All' || item.category === filter);
  return <div className="wrap">
    <div className="filters" aria-label="Filter portfolio">{categories.map(category => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div>
    <PortfolioImages key={filter} items={items} />
    {!items.length && <div className="empty-state"><h2>More looks to come.</h2><p>Approved {filter.toLowerCase()} photographs will appear here.</p><a className="text-link" href={settings.instagram} target="_blank" rel="noopener noreferrer">View current work on Instagram </a></div>}
  </div>;
}
