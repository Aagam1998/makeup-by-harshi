import type { Metadata } from 'next';
import Gallery from '@/components/gallery';
import './portfolio.css';
import { Booking } from '@/components/ui';
import { settings } from '@/data/content';
export const metadata:Metadata={title:'Makeup & Hairstyling Portfolio',description:'Explore Harshi’s bridal makeup, hairstyling, sider’s makeup, and soft minimal looks in Ahmedabad.'};
export default function Portfolio(){return <div className="portfolio-page"><PageHeader/><Gallery/><Booking/></div>}
function PageHeader(){return <div className="page-intro wrap"><p className="eyebrow">THE PORTFOLIO</p><h1>Beauty, <em>in the details.</em></h1><p>Explore bridal makeup, hairstyling, sider’s makeup, and soft minimal looks by Harshi. Select a photograph to take a closer look or enquire.</p><a className="text-link" href={settings.instagram} target="_blank" rel="noopener noreferrer">More work on Instagram </a></div>}
