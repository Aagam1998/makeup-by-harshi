export type MakeupCategory = 'Bridal' | 'Engagement' | 'Reception' | 'Party' | 'Family / Guest' | 'Hairstyling' | 'Sider’s Makeup';
export type PortfolioCategory = 'Bridal' | 'Hairstyling' | 'Sider’s Makeup' | 'Soft and Minimal Elegance';
export interface PortfolioItem { id: string; title: string; category: PortfolioCategory; image: string; alt: string; placeholder: boolean; source: string; focalPoint?: string; aspectRatio?: string; enquiryService: string }
export interface Service { id: string; name: string; category: MakeupCategory; description: string }
export interface Workshop { id: string; title: string; description: string; status: 'planned' | 'open' | 'closed' }
export interface Testimonial { id: string; name: string; quote: string; verified: boolean }
export interface SiteSettings { name: string; founder: string; location: string; instagram: string; educationInstagram: string; phone?: string; url?: string }
export interface HomepageContent { headline: string; introduction: string }
export interface FrequentlyAskedQuestion { id: string; question: string; answer: string }

export interface PortfolioCollection { id: string; title: PortfolioCategory; description: string; enquiryService: string; coverId: string }
