'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageIcon } from './icons';
import { portfolio, services, settings, workshops } from '@/data/content';
import { enquiryMessage, whatsappUrl } from '@/lib/enquiry';

export default function EnquiryForm() {
  const serviceSelection = useRef<HTMLSelectElement>(null);
  const lookSelection = useRef<HTMLSelectElement>(null);
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const available = !!whatsappUrl();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const selectedService = query.get('service');
    if (selectedService && (selectedService === 'Makeup Enquiry' || services.some(service => service.name === selectedService)) && serviceSelection.current) serviceSelection.current.value = selectedService;
    const selectedLook = query.get('look');
    if (selectedLook && portfolio.some(item => item.id === selectedLook) && lookSelection.current) lookSelection.current.value = selectedLook;
  }, []);

  return <form className="enquiry-form" onSubmit={event => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const look = portfolio.find(item => item.id === fields.get('look'));
    const reference = look ? ` My inspiration is “${look.title}”${look.placeholder ? ' (a sample photograph on your website, not your client work)' : ''}.` : '';
    const text = enquiryMessage(String(fields.get('service')), String(fields.get('date')), String(fields.get('location'))) + reference;
    setMessage(text);
    setCopied(false);
    const url = whatsappUrl(text);
    if (url) window.location.assign(url);
  }}>
    <div className="form-heading"><p className="eyebrow">YOUR ENQUIRY</p><h2>Tell me about your occasion.</h2><p>Select a service and add any details you know.</p></div>
    <label>I’m interested in<select ref={serviceSelection} name="service" defaultValue="Bridal Makeup"><option>Makeup Enquiry</option>{services.map(service => <option key={service.id}>{service.name}</option>)}{workshops.map(workshop => <option key={workshop.id}>{workshop.title} — learning interest</option>)}</select></label>
    <div className="form-row"><label><span className="field-label">Event date <span>(optional)</span></span><input name="date" type="date" /></label><label><span className="field-label">Event location <span>(optional)</span></span><input name="location" placeholder="City or venue" maxLength={200} /></label></div>
    <label><span className="field-label">Inspiration reference <span>(optional)</span></span><select ref={lookSelection} name="look" defaultValue=""><option value="">No reference selected</option>{portfolio.map(item => <option key={item.id} value={item.id}>{item.title}{item.placeholder ? ' — sample photo' : ''}</option>)}</select></label>
    <p className="small">{available ? 'This opens WhatsApp with your details. Nothing is stored on this website.' : 'Create your message, then copy it into an Instagram message to Harshi.'}</p>
    <button className="button" type="submit"><MessageIcon /><span>{available ? 'Open WhatsApp' : 'Create enquiry message'}</span></button>
    {message && !available && <div className="prepared-message" role="status"><p>{message}</p><button className="text-link" type="button" onClick={async () => { try { await navigator.clipboard.writeText(message); setCopied(true); } catch { setCopied(false); } }}>{copied ? 'Copied ✓' : 'Copy message'}</button><a className="text-link" href={settings.instagram} target="_blank" rel="noopener noreferrer">Open Instagram </a></div>}
  </form>;
}
