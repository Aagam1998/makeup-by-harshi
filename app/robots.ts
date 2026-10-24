import type { MetadataRoute } from 'next';
import { settings } from '@/data/content';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},...(settings.url?{sitemap:new URL('/sitemap.xml',settings.url).href}:{})};}
