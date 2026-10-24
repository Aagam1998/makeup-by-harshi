import type { Metadata } from 'next';
import { settings, workshops } from '@/data/content';
import { Enquire, Photo } from '@/components/ui';
import { InstagramIcon } from '@/components/icons';
import './academy.css';

export const metadata: Metadata = {
  title: 'Makeup Classes & Workshop Interest in Ahmedabad',
  description: 'Share your interest in future makeup education with Harshi in Ahmedabad. Class formats, dates, and fees are yet to be confirmed.',
};
const audience: Record<string, string> = {
  self: 'FOR YOUR EVERYDAY',
  beginner: 'START WITH THE BASICS',
  professional: 'EXPLORE A CREATIVE PATH',
};
export default function Academy() {
  return <div className="learning-page wrap">
    <header className="academy-hero">
      <div className="academy-hero-copy"><p className="eyebrow">LEARN WITH HARSHI · AHMEDABAD</p><h1>Your curiosity.<br /><em>A creative beginning.</em></h1><p>For the makeup you do for yourself.<br />For the artist you’d love to become.</p><div className="academy-hero-status"><span aria-hidden="true" /><div><strong>Future classes & workshops</strong><p>In planning. Share what you’d like to learn.</p></div></div><a href="#learning-interests-title" className="text-link">Find your starting point</a></div>
      <figure className="academy-hero-image"><Photo src="/images/portfolio/soft-minimal-elegance/soft-minimal-01.jpg" alt="Soft makeup by Harshi with rose eyeshadow and a natural lip" focalPoint="50% 0%" priority sizes="(max-width: 600px) 88vw, 40vw" /><figcaption><span>THE DETAILS MAKE THE DIFFERENCE</span><span>MAKEUP BY HARSHI</span></figcaption></figure>
    </header>
    <section className="learning-interests" aria-labelledby="learning-interests-title">
      <div className="learning-section-title"><h2 id="learning-interests-title">What interests you?</h2><p>Choose a starting point for your conversation.</p></div>
      <div className="learning-options">{workshops.map((workshop, index) => <article className="learning-option" key={workshop.id}>
        <div className="learning-option-top"><span className="learning-number">0{index + 1}</span><p className="eyebrow">{audience[workshop.id]}</p></div>
        <h3>{workshop.title}</h3><p className="learning-description">{workshop.description}</p>
        <Enquire className="text-link" message={`Hi Harshi, I am interested in future makeup education (${workshop.title.toLowerCase()}). Please share details when available.`}>Discuss my interest</Enquire>
      </article>)}</div>
    </section>
    <aside className="learning-plans" aria-labelledby="learning-plans-title"><div><p className="eyebrow">CURRENTLY IN PLANNING</p><h2 id="learning-plans-title">Good things take <em>practice.</em></h2></div><p>Classes, dates, fees and formats are yet to be confirmed. Sharing your interest starts a conversation; it doesn’t reserve a place or enrol you in a course.</p></aside>
    <div className="learning-follow"><div><h2>Stay connected.</h2><p>Visit Harshi’s education Instagram for her makeup learning content.</p></div><a className="text-link" href={settings.educationInstagram} target="_blank" rel="noopener noreferrer"><InstagramIcon /><span>Education on Instagram</span></a></div>
  </div>;
}
