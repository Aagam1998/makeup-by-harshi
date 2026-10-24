import Link from 'next/link';
import { CalendarIcon, GalleryIcon } from '@/components/icons';
import { featuredLooks, portfolio, settings } from '@/data/content';
import { Enquire, Photo } from '@/components/ui';
import PortfolioImages from '@/components/portfolio-images';
import OccasionExplorer from '@/components/occasion-explorer';
import BookingFaq from '@/components/booking-faq';
import './home.css';
import './home-journey.css';
import './atelier.css';
import './home-refinement.css';

export default function Home() {
  return (
    <div className="home-page">
      <section className="atelier-hero" aria-labelledby="hero-heading">
        <div className="atelier-copy">
          <p className="eyebrow">AHMEDABAD, GUJARAT · MAKEUP BY HARSHI</p>
          <h1 id="hero-heading">Your beauty.<br /><em>Your moment.</em></h1>
          <p className="atelier-subtitle">Bridal & occasion makeup, thoughtfully personal.</p>
          <p className="atelier-description">Makeup and hairstyling for your wedding celebrations, special occasions, and the look you have in mind.</p>
          <div className="atelier-actions"><a href="#selected-work" className="button"><GalleryIcon /><span>View selected looks</span></a><Enquire className="text-link" /></div>
          <div className="atelier-bottom"><span className="atelier-rule" /><p>Bridal · Sider’s makeup · Soft minimal · Hairstyling</p></div>
        </div>
        <div className="atelier-composition">
          <div className="atelier-main-photo"><Photo src={portfolio[0].image} alt={portfolio[0].alt} focalPoint="50% 47%" priority sizes="(max-width: 600px) 80vw, 45vw" /></div>
          <div className="atelier-detail-photo"><Photo src={portfolio[9].image} alt={portfolio[9].alt} focalPoint="50% 35%" sizes="(max-width: 600px) 40vw, 22vw" /><span>SOFT & MINIMAL</span></div>
          <span className="atelier-image-label">THE ART IS IN THE DETAILS</span>
        </div>
      </section>

      <nav className="home-explore" aria-label="Explore Makeup by Harshi">
        <div className="home-explore-inner"><p className="eyebrow">EXPLORE HARSHI’S WORLD</p><div className="home-explore-links">
          <a href="#selected-work"><span>Makeup & hair</span><small>Explore the work</small></a>
          <Link href="/about"><span>Meet Harshi</span><small>The artist behind your look</small></Link>
          <Link href="/academy"><span>Learn makeup</span><small>Future classes & workshops</small></Link>
        </div></div>
      </nav>

      <section id="selected-work" className="home-work home-container" aria-labelledby="work-heading">
        <div className="home-section-heading">
          <div><p className="eyebrow">SELECTED WORK</p><h2 id="work-heading">A few <em>favourite looks.</em></h2></div>
          <Link href="/portfolio" className="text-link">View all looks</Link>
        </div>
        <PortfolioImages items={[featuredLooks[0], featuredLooks[1], featuredLooks[2], featuredLooks[4]]} editorial />
        <p className="home-photo-note">Bridal makeup, hairstyling, and occasion looks by Harshi. <a href={settings.instagram} target="_blank" rel="noopener noreferrer">Follow the latest work on Instagram </a></p>
      </section>

      <OccasionExplorer />

      <section className="home-artist home-container" aria-labelledby="artist-heading">
        <Photo src="/images/artist/harshi.jpg" alt="Harshi, the makeup artist behind Makeup by Harshi" className="artist-portrait" focalPoint="50% 43%" sizes="(max-width: 650px) 88vw, 35vw" />
        <div><p className="eyebrow">MEET YOUR ARTIST · AHMEDABAD</p><h2 id="artist-heading">Meet <em>Harshi.</em></h2><p>The artist behind Makeup by Harshi, based in Ahmedabad. Share your outfit, inspiration, and event details to start planning your look together.</p><Link href="/about" className="text-link">Meet Harshi </Link></div>
      </section>

      <section className="home-learning home-container" aria-labelledby="learning-heading">
        <div className="home-learning-title"><p className="eyebrow">A NEW CHAPTER · EDUCATION</p><h2 id="learning-heading">Make room to <em>learn.</em></h2></div>
        <div className="home-learning-copy"><p>Learn for yourself, or explore your interest in becoming an artist. Tell Harshi what you’d like to learn.</p><span className="home-learning-status">Future classes & workshops · Details to be announced</span><Link href="/academy" className="text-link">Discover future classes</Link></div>
      </section>
      <BookingFaq />

      <section className="booking-invitation" aria-labelledby="booking-guide-heading">
        <div className="booking-invitation-inner">
          <div className="booking-invitation-top"><div><p className="eyebrow">YOUR NEXT OCCASION</p><h2 id="booking-guide-heading">Let’s plan <em>your look.</em></h2><p>Start with a few details. We’ll take it from there.</p></div><Link href="/contact" className="button"><CalendarIcon /><span>Check availability</span></Link></div>
          <div className="booking-details" aria-label="What to share with Harshi">
            <div><span className="booking-detail-number">01</span><div><h3>The occasion</h3><p>Your event date, city and venue.</p></div></div>
            <div><span className="booking-detail-number">02</span><div><h3>The inspiration</h3><p>Your outfit or a look you’ve saved.</p></div></div>
            <div><span className="booking-detail-number">03</span><div><h3>The conversation</h3><p>Discuss availability and service details.</p></div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
