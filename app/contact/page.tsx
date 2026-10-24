import type { Metadata } from 'next';
import { Enquire } from '@/components/ui';
import EnquiryForm from '@/components/enquiry-form';
import { InstagramIcon } from '@/components/icons';
import { settings } from '@/data/content';

export const metadata: Metadata = {
  title: 'Contact & Makeup Booking Enquiries in Ahmedabad',
  description: 'Contact Harshi for bridal and event makeup enquiries in Ahmedabad. Share your event date, location, and service interest.',
};

export default function Contact() {
  return <div className="contact-page">
    <section className="wrap contact-layout" aria-label="Contact Harshi">
      <div className="contact-overview">
        <p className="eyebrow">CONTACT HARSHI</p>
        <h1>Let’s plan<br /><em>your look.</em></h1>
        <p className="contact-summary">Bridal, occasion makeup or hairstyling — share your date, venue and the look you have in mind.</p>
        <Enquire>Chat with Harshi</Enquire>
        <p className="contact-alternative">Or prepare your enquiry using the form.</p>
      </div>
      <EnquiryForm />
        <div className="contact-details">
          <div><p className="eyebrow">BASED IN</p><p>Ahmedabad, Gujarat</p><p className="small">For nearby locations, share your venue to confirm travel availability.</p></div>
          <div><p className="eyebrow">EXPLORE & CONNECT</p>
            <a href={settings.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon /><span>Makeup & client work</span></a>
            <a href={settings.educationInstagram} target="_blank" rel="noopener noreferrer"><InstagramIcon /><span>Makeup education</span></a>
          </div>
        </div>
    </section>
  </div>;
}
