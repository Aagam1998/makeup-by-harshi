'use client';

import Image from 'next/image';
import Link from 'next/link';
import './booking-faq.css';
import { CloseIcon, ExpandIcon, MessageIcon } from './icons';
import './portfolio-images.css';
import { useRef, useState } from 'react';
import type { PortfolioItem } from '@/types/content';
import { Photo } from './ui';

export default function PortfolioImages({ items, editorial = false }: { items: PortfolioItem[]; editorial?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const [index, setIndex] = useState(0);
  const item = items[index];

  function close() { dialog.current?.close(); }
  function change(direction: number) { setIndex(current => (current + direction + items.length) % items.length); }

  return <>
    <div className={editorial ? 'beauty-gallery' : 'editorial-grid'}>
      {items.map((photo, position) => (
        <figure className={editorial ? 'beauty-gallery-item' : undefined} key={photo.id}>
          <button type="button" className="portfolio-open" aria-label={`View ${photo.title}${photo.placeholder ? ' — sample photograph' : ''}`} onClick={event => {
            opener.current = event.currentTarget;
            setIndex(position);
            dialog.current?.showModal();
          }}>
            <Photo src={photo.image} alt={photo.alt} focalPoint={photo.focalPoint} aspectRatio={editorial ? undefined : photo.aspectRatio} sizes={editorial ? '(max-width: 600px) 50vw, 33vw' : '(max-width: 600px) 50vw, 33vw'} />
            <span className="photo-expand" aria-hidden="true"><ExpandIcon /></span>
          </button>
          <figcaption className={editorial ? 'beauty-gallery-caption' : 'tile-caption'}>
            <div><p className="eyebrow">{photo.placeholder ? 'SAMPLE' : photo.category.toUpperCase()} / 0{position + 1}</p>
              {editorial ? <h3>{photo.title}</h3> : <h2>{photo.title}</h2>}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
    <dialog ref={dialog} className="look-viewer" aria-labelledby="look-title" onClose={() => opener.current?.focus()} onClick={event => { if (event.target === event.currentTarget) close(); }} onKeyDown={event => {
      if (event.key === 'ArrowRight') { event.preventDefault(); change(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); change(-1); }
    }}>
      {item && <div className="look-viewer-panel">
        <div className="look-viewer-top"><span>{index + 1} / {items.length}</span><button type="button" className="viewer-close" aria-label="Close photograph" onClick={close} autoFocus><CloseIcon /></button></div>
        <div className="look-viewer-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 90vw, 65vw" /></div>
        <div className="look-viewer-bottom"><button type="button" aria-label="Previous photograph" onClick={() => change(-1)}>←</button><div><h2 id="look-title">{item.title}</h2>{item.placeholder && <p>Sample photography · Not Harshi’s work</p>}</div><button type="button" aria-label="Next photograph" onClick={() => change(1)}>→</button></div>
        <div className="look-reference"><p>{item.placeholder ? 'A visual reference to discuss with Harshi.' : 'Have a similar occasion in mind?'}</p><Link href={`/contact?${new URLSearchParams({ service: item.enquiryService, look: item.id }).toString()}`} onClick={close}><MessageIcon /><span>{item.placeholder ? 'Use as inspiration' : 'Discuss this look'}</span></Link></div>
      </div>}
    </dialog>
  </>;
}
