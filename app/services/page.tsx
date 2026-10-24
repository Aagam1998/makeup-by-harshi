import type { Metadata } from 'next';
import Link from 'next/link';
import { services, portfolio } from '@/data/content';
import { Enquire, Photo } from '@/components/ui';
import { enquiryMessage } from '@/lib/enquiry';
import './services.css';
export const metadata: Metadata = { title: 'Bridal & Occasion Makeup Services in Ahmedabad', description: 'Explore bridal, engagement, reception, party, guest makeup and hairstyling with Harshi in Ahmedabad.' };
const groups = [
  { title: 'Bridal & wedding', image: 'bridal-03', ids: ['01', '02', '03'], description: 'Makeup for your wedding day and the celebrations around it, shaped around your outfit and personal style.' },
  { title: 'Party & guest makeup', image: 'side-makeup-01', ids: ['04', '05'], description: 'From a soft, minimal finish to more definition, discuss a look for your next special occasion.' },
  { title: 'Hairstyling', image: 'hairstyling-02', ids: ['06'], description: 'Waves, twists and accessory details. Share your outfit and references to discuss your hairstyle.' },
];
export default function Services() {
  return <div className="services-page wrap">
    <header className="services-intro"><div><p className="eyebrow">SERVICES · AHMEDABAD</p><h1>Makeup for <em>your moment.</em></h1></div><p>Choose your occasion below to enquire directly with Harshi. Share your date, venue and any inspiration you’ve saved.</p></header>
    <div className="services-collection">{groups.map((group, index) => {
      const photo = portfolio.find(item => item.id === group.image)!;
      return <section className="service-edit" key={group.title} aria-labelledby={`service-group-${index}`}>
        <Photo src={photo.image} alt={photo.alt} focalPoint={photo.focalPoint} sizes="(max-width: 600px) 88vw, (max-width: 1000px) 42vw, 29vw" />
        <div className="service-edit-body"><span className="eyebrow">0{index + 1}</span><h2 id={`service-group-${index}`}>{group.title}</h2><p>{group.description}</p>
          <div className="service-options">{services.filter(service => group.ids.includes(service.id)).map(service => <Enquire key={service.id} className="service-option" message={enquiryMessage(service.name)}><span className="service-option-name">{service.name === 'Sider’s Makeup' ? 'Sider’s / Guest Makeup' : service.name}</span><span className="service-option-action">Enquire</span></Enquire>)}</div>
        </div>
      </section>;
    })}</div>
    <aside className="services-help"><div><h2>Not sure where to start?</h2><p>Send your outfit or a saved look. Harshi can discuss the right service with you.</p></div><Link href="/contact" className="button">Plan your look</Link></aside>
    <p className="services-note">Availability, pricing, travel and service inclusions are confirmed personally before booking.</p>
  </div>;
}
