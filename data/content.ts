import type { HomepageContent, PortfolioItem, Service, SiteSettings, Testimonial, Workshop } from '@/types/content';
export const settings: SiteSettings = {
  name: 'Makeup by Harshi', founder: 'Harshi', location: 'Ahmedabad, Gujarat',
  instagram: 'https://www.instagram.com/makeupbyharshi07/',
  educationInstagram: 'https://www.instagram.com/makeup_by_harshi/',
  phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  url: process.env.NEXT_PUBLIC_SITE_URL,
};
export const homepage: HomepageContent = { headline: 'Beautifully you. On your biggest days.', introduction: 'Thoughtful makeup for your wedding day, your celebrations, and everything worth dressing up for.' };
export const portfolio: PortfolioItem[] = [
  {
    "id": "bridal-01",
    "title": "Bridal in crimson",
    "category": "Bridal",
    "image": "/images/portfolio/bridal/bridal-01.jpg",
    "alt": "Bridal makeup with softly defined eyes and rose lips, styled with a red sari and gold jewellery",
    "placeholder": false,
    "source": "Supplied by Makeup by Harshi",
    "focalPoint": "50% 42%",
    "enquiryService": "Bridal Makeup",
    "aspectRatio": "1290 / 1939"
  },
  {
    "id": "bridal-02",
    "title": "Soft bridal radiance",
    "category": "Bridal",
    "image": "/images/portfolio/bridal/bridal-02.jpg",
    "alt": "Bridal makeup with defined lashes and muted pink lips, paired with emerald jewellery",
    "placeholder": false,
    "source": "Supplied by Makeup by Harshi",
    "focalPoint": "50% 35%",
    "enquiryService": "Bridal Makeup",
    "aspectRatio": "1290 / 869"
  },
  {
    "id": "bridal-03",
    "title": "The bridal close-up",
    "category": "Bridal",
    "image": "/images/portfolio/bridal/bridal-03.jpg",
    "alt": "Close-up of bridal makeup with rose eyeshadow, red lips, and a pink embroidered veil",
    "placeholder": false,
    "source": "Supplied by Makeup by Harshi",
    "focalPoint": "50% 32%",
    "enquiryService": "Bridal Makeup",
    "aspectRatio": "1290 / 1939"
  },
  {
    "id": "hairstyling-01",
    "title": "Twists with gold accents",
    "category": "Hairstyling",
    "image": "/images/portfolio/hairstyling/hairstyling-01.jpg",
    "alt": "Half-up twisted hairstyle with gold accessories and loose waves",
    "placeholder": false,
    "source": "Supplied by Makeup by Harshi",
    "focalPoint": "50% 50%",
    "enquiryService": "Hairstyling",
    "aspectRatio": "1290 / 1689"
  },
  {
    "id": "hairstyling-02",
    "title": "Curls and fresh flowers",
    "category": "Hairstyling",
    "image": "/images/portfolio/hairstyling/hairstyling-02.jpg",
    "alt": "Half-up curled hairstyle with pink flowers and delicate gold chains",
    "placeholder": false,
    "source": "Supplied by Makeup by Harshi",
    "focalPoint": "50% 48%",
    "enquiryService": "Hairstyling",
    "aspectRatio": "1290 / 1706"
  },
  {
    "id": "hairstyling-03",
    "title": "Pearl-detailed waves",
    "category": "Hairstyling",
    "image": "/images/portfolio/hairstyling/hairstyling-03.jpg",
    "alt": "Long half-up waves decorated with pearl accessories",
    "placeholder": false,
    "source": "Supplied by Makeup by Harshi",
    "focalPoint": "50% 50%",
    "enquiryService": "Hairstyling",
    "aspectRatio": "1290 / 1697"
  },
  {
    "id": "side-makeup-01",
    "title": "Warm neutral glow",
    "category": "Sider’s Makeup",
    "image": "/images/portfolio/side-makeup/side-makeup-01.jpg",
    "alt": "Warm neutral sider’s makeup with glossy lips and subtle eye definition",
    "placeholder": false,
    "source": "Supplied by Makeup by Harshi",
    "focalPoint": "50% 42%",
    "enquiryService": "Sider’s Makeup",
    "aspectRatio": "1290 / 1662"
  },
  {
    "id": "side-makeup-02",
    "title": "A touch of tradition",
    "category": "Sider’s Makeup",
    "image": "/images/portfolio/side-makeup/side-makeup-02.jpg",
    "alt": "Sider’s makeup with a soft rose lip, red bindi, and red patterned sari",
    "placeholder": false,
    "source": "Supplied by Makeup by Harshi",
    "focalPoint": "50% 35%",
    "enquiryService": "Sider’s Makeup",
    "aspectRatio": "1290 / 1703"
  },
  {
    "id": "side-makeup-03",
    "title": "Soft colour, gentle definition",
    "category": "Sider’s Makeup",
    "image": "/images/portfolio/side-makeup/side-makeup-03.jpg",
    "alt": "Sider’s makeup with softly defined eyes and rose lips, styled with a blue blouse and colourful sari",
    "placeholder": false,
    "source": "Supplied by Makeup by Harshi",
    "focalPoint": "50% 38%",
    "enquiryService": "Sider’s Makeup",
    "aspectRatio": "1290 / 1498"
  },
  {
    "id": "soft-minimal-01",
    "title": "Soft and luminous",
    "category": "Soft and Minimal Elegance",
    "image": "/images/portfolio/soft-minimal-elegance/soft-minimal-01.jpg",
    "alt": "Soft minimal makeup with rose eyeshadow and natural lips, paired with silver jewellery and an ivory outfit",
    "placeholder": false,
    "source": "Supplied by Makeup by Harshi",
    "focalPoint": "50% 35%",
    "enquiryService": "Makeup Enquiry",
    "aspectRatio": "1290 / 1915"
  },
  {
    "id": "soft-minimal-02",
    "title": "Understated elegance",
    "category": "Soft and Minimal Elegance",
    "image": "/images/portfolio/soft-minimal-elegance/soft-minimal-02.jpg",
    "alt": "Soft minimal makeup with a pink lip and softly defined eyes, styled with a magenta outfit",
    "placeholder": false,
    "source": "Supplied by Makeup by Harshi",
    "focalPoint": "50% 30%",
    "enquiryService": "Makeup Enquiry",
    "aspectRatio": "1290 / 1911"
  },
  {
    "id": "soft-minimal-03",
    "title": "Minimal, with definition",
    "category": "Soft and Minimal Elegance",
    "image": "/images/portfolio/soft-minimal-elegance/soft-minimal-03.jpg",
    "alt": "Minimal makeup with defined eyes and a muted lip, paired with silver jewellery and a violet outfit",
    "placeholder": false,
    "source": "Supplied by Makeup by Harshi",
    "focalPoint": "50% 38%",
    "enquiryService": "Makeup Enquiry",
    "aspectRatio": "1290 / 1918"
  }
];
export const portfolioCollections: import('@/types/content').PortfolioCollection[] = [
  {
    "id": "bridal",
    "title": "Bridal",
    "description": "Bridal makeup shaped around your outfit, jewellery, and the look you have in mind.",
    "enquiryService": "Bridal Makeup",
    "coverId": "bridal-03"
  },
  {
    "id": "hairstyling",
    "title": "Hairstyling",
    "description": "Explore twists, curls, floral accents, and pearl details from Harshi’s hairstyling work.",
    "enquiryService": "Hairstyling",
    "coverId": "hairstyling-01"
  },
  {
    "id": "side-makeup",
    "title": "Sider’s Makeup",
    "description": "Makeup for family and guests celebrating alongside the bride.",
    "enquiryService": "Sider’s Makeup",
    "coverId": "side-makeup-01"
  },
  {
    "id": "soft-minimal-elegance",
    "title": "Soft and Minimal Elegance",
    "description": "Explore softly defined eyes, gentle colour, and an understated makeup finish.",
    "enquiryService": "Makeup Enquiry",
    "coverId": "soft-minimal-01"
  }
];
export const heroLook = portfolio.find(item => item.id === 'bridal-03')!;
export const featuredLooks = ['bridal-01', 'soft-minimal-01', 'hairstyling-02', 'bridal-03', 'side-makeup-01', 'soft-minimal-03'].map(id => portfolio.find(item => item.id === id)!);
export const services: Service[] = [
  { id: '01', name: 'Bridal Makeup', category: 'Bridal', description: 'A look that brings your bridal outfit, jewellery, and personal style together.' },
  { id: '02', name: 'Engagement Makeup', category: 'Engagement', description: 'From soft definition to a little more glow, a look for your first celebration.' },
  { id: '03', name: 'Reception Makeup', category: 'Reception', description: 'An evening look that complements your reception outfit and the mood of your celebration.' },
  { id: '04', name: 'Party Makeup', category: 'Party', description: 'Makeup for birthdays, festive gatherings, and your next special occasion.' },
  { id: '05', name: 'Sider’s Makeup', category: 'Sider’s Makeup', description: 'Occasion makeup for the people celebrating right beside you.' },
];
services.push({ id: '06', name: 'Hairstyling', category: 'Hairstyling', description: 'Explore hairstyles with waves, twists, floral accessories, and pearl details. Discuss the styling you have in mind with Harshi.' });
export const workshops: Workshop[] = [
  { id: 'self', title: 'Self makeup', description: 'Interest in an everyday routine, skin preparation, and getting to know your makeup kit.', status: 'planned' },
  { id: 'beginner', title: 'Beginner classes', description: 'Interest in practical guidance on tools, products, and the foundations of application.', status: 'planned' },
  { id: 'professional', title: 'Professional training', description: 'Interest in taking your first steps towards working as a makeup artist.', status: 'planned' },
];
export const testimonials: Testimonial[] = [];

export const bookingQuestions: import('@/types/content').FrequentlyAskedQuestion[] = [
  { id: 'availability', question: 'How do I check availability for my date?', answer: 'Send your event date, location, and makeup service through the enquiry page. Harshi can then discuss availability and service details with you. Sending an enquiry does not reserve a date.' },
  { id: 'inspiration', question: 'Can I share a makeup look I like?', answer: 'Yes. Choose a photograph in the gallery and select “Enquire about this look”, or share your own reference when you contact Harshi. The selected look will be included in your enquiry.' },
  { id: 'travel', question: 'Can I enquire for a venue outside Ahmedabad?', answer: 'Harshi is based in Ahmedabad. Share the city and venue so travel availability and any related arrangements can be confirmed directly.' },
  { id: 'inclusions', question: 'What is included in a makeup booking?', answer: 'Ask Harshi to confirm the service inclusions and quote for your occasion. Details such as hairstyling, draping, preparation time, and any additional services should be discussed before booking.' },
];
