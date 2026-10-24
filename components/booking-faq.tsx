import { bookingQuestions } from '@/data/content';
import './booking-faq.css';

export default function BookingFaq() {
  return <section className="booking-faq home-container" aria-labelledby="faq-heading">
    <div><p className="eyebrow">BEFORE YOU ENQUIRE</p><h2 id="faq-heading">Before <em>you book.</em></h2><p>Start here, then ask Harshi about the details of your occasion.</p></div>
    <div className="booking-faq-list">{bookingQuestions.map(item => <details key={item.id} name="booking-faq"><summary>{item.question}<span className="faq-symbol" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
  </section>;
}
