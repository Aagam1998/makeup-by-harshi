import type { Metadata } from 'next';
import Link from 'next/link';
import { Enquire, Photo } from '@/components/ui';
import './about.css';

export const metadata: Metadata = {
  title: 'Meet Harshi | Makeup Artist in Ahmedabad',
  description: 'Meet Harshi, founder of Makeup by Harshi in Ahmedabad, offering bridal and occasion makeup and hairstyling.',
};

export default function About() {
  return <div className="about-page wrap">
    <section className="about-introduction" aria-labelledby="about-title">
      <div className="about-title"><p className="eyebrow">THE ARTIST · AHMEDABAD</p><h1 id="about-title">Hi, I’m <em>Harshi.</em></h1><p>Makeup, hairstyling, and a look that feels like you.</p></div>
      <figure className="about-portrait"><Photo src="/images/artist/harshi.jpg" alt="Harshi, founder of Makeup by Harshi, wearing a lavender outfit outdoors" focalPoint="50% 47%" priority sizes="(max-width: 600px) 88vw, 42vw" /><figcaption>HARSHI · FOUNDER & MAKEUP ARTIST</figcaption></figure>
      <div className="about-copy"><h2>Your look starts<br /><em>with you.</em></h2><p>I’m a makeup artist based in Ahmedabad, offering bridal and occasion makeup and hairstyling.</p><p>Tell me about your outfit, your celebration, and the makeup you love. We’ll use your ideas as the starting point for discussing your look.</p><div className="about-actions"><Enquire>Chat with Harshi</Enquire><Link href="/portfolio" className="text-link">Explore my work</Link></div></div>
    </section>
    <section className="about-learning" aria-labelledby="about-learning-title"><div><p className="eyebrow">ALSO IN THE MAKING</p><h2 id="about-learning-title">A space to <em>learn.</em></h2></div><p>I’m planning future makeup classes and workshops. Share what you’d like to learn, whether it’s for yourself or your first steps as an artist.</p><Link href="/academy" className="text-link">Explore learning interests</Link></section>
  </div>;
}
