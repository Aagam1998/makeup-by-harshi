import Image from 'next/image';
import { InstagramIcon, MessageIcon } from './icons';
import Link from 'next/link';
import { settings } from '@/data/content';
import { whatsappUrl } from '@/lib/enquiry';
export function Enquire({ message, children, className = 'button' }: { message?: string; children?: React.ReactNode; className?: string }) {
  const url = whatsappUrl(message);
  return <a className={`${className} contact-action`} href={url || settings.instagram} target="_blank" rel="noopener noreferrer">{url ? <MessageIcon /> : <InstagramIcon />}<span>{children || (url ? 'Message on WhatsApp' : 'Message on Instagram')}</span></a>;
}
export function Photo({ src, alt, priority = false, className = '', focalPoint = '50% 40%', aspectRatio, sizes = '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 45vw' }: { src: string; alt: string; priority?: boolean; className?: string; focalPoint?: string; aspectRatio?: string; sizes?: string }) {
  return <div className={`photo ${className}`} style={{ aspectRatio }}><Image src={src} alt={alt} fill sizes={sizes} preload={priority} style={{ objectPosition: focalPoint }} /></div>;
}
export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) { return <div className="page-intro wrap"><p className="eyebrow">{label}</p><h1>{title}</h1><p>{description}</p></div>; }
export function Booking() { return <section className="booking wrap"><div><p className="eyebrow">LET’S PLAN YOUR LOOK</p><h2>Your occasion.<br /><em>Your kind of beautiful.</em></h2><p>Share your event date, location, and the look you have in mind.</p></div><div className="booking-action"><Enquire /><Link className="text-link" href="/contact">Plan your booking</Link><span className="small">AHMEDABAD, GUJARAT</span></div></section>; }
