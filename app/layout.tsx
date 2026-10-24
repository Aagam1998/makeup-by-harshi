import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { settings } from '@/data/content';
import './globals.css';
import './palette.css';
import './controls.css';
import './inner-pages.css';
import './compact-header.css';
const serif=localFont({variable:'--font-serif',src:[{path:'../public/fonts/cormorant-regular.ttf',weight:'400',style:'normal'},{path:'../public/fonts/cormorant-italic.ttf',weight:'400',style:'italic'}],display:'swap'});
const sans=localFont({variable:'--font-body',src:[{path:'../public/fonts/manrope-regular.ttf',weight:'400',style:'normal'},{path:'../public/fonts/manrope-semibold.ttf',weight:'600',style:'normal'}],display:'swap'});
export const metadata: Metadata = { title:{default:'Makeup by Harshi | Bridal & Occasion Makeup in Ahmedabad',template:'%s | Makeup by Harshi'},description:'Bridal and occasion makeup by Harshi in Ahmedabad, Gujarat. Explore Harshi’s makeup and hairstyling portfolio, browse services, and enquire about your event.', ...(settings.url?{metadataBase:new URL(settings.url)}:{}),openGraph:{type:'website',locale:'en_IN',siteName:settings.name},twitter:{card:'summary_large_image'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth" className={`${serif.variable} ${sans.variable}`}><body><a href="#main" className="skip-link">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
