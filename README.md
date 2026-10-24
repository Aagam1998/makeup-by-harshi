# Makeup by Harshi

A six-page, mobile-first Next.js App Router website for bridal and occasion makeup in Ahmedabad. TypeScript, Tailwind CSS 4, locally hosted fonts through next/font, and optimized next/image photography. No animation dependency or CMS is required.

## Run

- `npm run dev` — local development
- `npm run lint` — ESLint
- `npx tsc --noEmit` — type check
- `npm run build` — production build with webpack (avoids the local Turbopack CSS worker port restriction)
- `npm run build:turbopack` — default Turbopack production build where supported
- `npm start` — serve the production build

## Before launch

Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to Harshi’s verified international phone number, digits only. Until configured, enquiry buttons accurately say Instagram and link to her supplied account. The contact form can prepare and copy a message; it does not submit or store personal data. Once configured, it opens WhatsApp with an encoded enquiry. Restart or rebuild after changing public environment variables.

Set `NEXT_PUBLIC_SITE_URL` to the confirmed HTTPS production origin. The sitemap remains empty without this value; no production canonical is guessed. Open Graph branding is included, but absolute social image URLs require this setting. Add canonical metadata only after domain confirmation.

The website portfolio uses 12 user-supplied originals in four categories: Bridal, Hairstyling, Sider’s Makeup, and Soft and Minimal Elegance. Originals and category manifests are preserved under `public/images/portfolio/`. Next.js serves responsive optimized derivatives; CSS focal points control crops without modifying originals. Harshi’s own portrait is still pending. Review the first-person about copy with Harshi. Proposed learning areas remain future plans. No testimonials, ratings, pricing, certifications, course dates, or outcomes are invented.

## Content & future Sanity integration

`types/content.ts` defines portfolio, service, workshop, testimonial, homepage and settings records. `data/content.ts` is the current content source. Replace this source with a server-side Sanity repository when integrating the CMS. Keep the public portfolio restricted to approved assets; retain alt text and focal points. Only publish verified testimonials. Contact settings and social links are centralized; the phone number is intentionally public configuration.

`lib/enquiry.ts` validates the configured phone and builds encoded WhatsApp links. Small client components handle navigation, filtering, and enquiry preparation. All other page content renders on the server. Reduced-motion preferences are respected.

## Photography

All active portfolio images were supplied by the project owner and categorized by them. Historical stock assets are no longer referenced by the site. Category manifests record integration status.

Fonts: Cormorant Garamond and Manrope, distributed under the SIL Open Font License; license files are in `public/fonts`.
