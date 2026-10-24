import type { MetadataRoute } from 'next';
import { settings } from '@/data/content';
export default function sitemap():MetadataRoute.Sitemap { if(!settings.url)return [];return ['','/portfolio','/services','/academy','/about','/contact'].map(path=>({url:new URL(path,settings.url).href})); }
