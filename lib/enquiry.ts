import { settings } from '@/data/content';
export function whatsappUrl(message = 'Hi Harshi, I would like to enquire about makeup availability.') {
  const phone = settings.phone?.replace(/[\s()+-]/g, '');
  return phone && /^[1-9]\d{7,14}$/.test(phone) ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : null;
}
export function enquiryMessage(service: string, date?: string, location?: string) {
  return `Hi Harshi, I would like to enquire about ${service.toLowerCase()}${date ? ` for ${date}` : ''}${location?.trim() ? ` in ${location.trim()}` : ''}. Please share availability and details.`;
}
