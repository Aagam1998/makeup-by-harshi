'use client';

import Link from 'next/link';
import { MessageIcon } from './icons';
import { useRef, useState } from 'react';
import { portfolio, portfolioCollections } from '@/data/content';
import { Photo } from './ui';

export default function OccasionExplorer() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const collection = portfolioCollections[selected];
  const related = portfolio.find(item => item.id === collection.coverId)!;

  function selectTab(index: number) {
    const next = (index + portfolioCollections.length) % portfolioCollections.length;
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return <section className="occasion-explorer" id="find-your-look" aria-labelledby="occasion-heading">
    <div className="home-container">
      <div className="home-section-heading"><div><p className="eyebrow">EXPLORE THE COLLECTIONS</p><h2 id="occasion-heading">Find <em>your look.</em></h2></div><p className="occasion-hint">From bridal detail to softer finishes.<br />Explore Harshi’s work.</p></div>
      <div className="occasion-tabs" role="tablist" aria-label="Portfolio collection">
        {portfolioCollections.map((item, index) => <button type="button" role="tab" key={item.id} id={`occasion-tab-${item.id}`} aria-selected={selected === index} aria-controls="occasion-panel" tabIndex={selected === index ? 0 : -1} ref={element => { tabs.current[index] = element; }} onClick={() => setSelected(index)} onKeyDown={event => {
          if (event.key === 'ArrowRight') { event.preventDefault(); selectTab(index + 1); }
          if (event.key === 'ArrowLeft') { event.preventDefault(); selectTab(index - 1); }
          if (event.key === 'Home') { event.preventDefault(); selectTab(0); }
          if (event.key === 'End') { event.preventDefault(); selectTab(portfolioCollections.length - 1); }
        }}>{item.id === 'soft-minimal-elegance' ? 'Soft & Minimal' : item.title}</button>)}
      </div>
      <div className="occasion-panel" role="tabpanel" id="occasion-panel" aria-labelledby={`occasion-tab-${collection.id}`} tabIndex={0}>
        <div className="occasion-preview"><Photo src={related.image} alt={related.alt} focalPoint={related.focalPoint} /></div>
        <div className="occasion-details" key={collection.id}>
          <p className="eyebrow">MAKEUP BY HARSHI · AHMEDABAD</p>
          <h3>{collection.title}</h3><p>{collection.description}</p>
          
          <Link className="button" href={`/contact?${new URLSearchParams({ service: collection.enquiryService, look: related.id }).toString()}`}><MessageIcon /><span>Discuss this look</span></Link>
          <Link className="text-link" href="/portfolio">View all looks</Link>
        </div>
      </div>
    </div>
  </section>;
}
