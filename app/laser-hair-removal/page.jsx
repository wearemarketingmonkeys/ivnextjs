import LaserHairRemovalClient from './LaserHairRemovalClient';

// --- SEO ---
export const metadata = {
  title: 'Laser Hair Removal in Dubai | IV Wellness Lounge Clinic',
  description: 'Achieve smooth, hair-free skin at IV Wellness Lounge Clinic Dubai. Advanced laser technology ensures effective, comfortable results. Book your session today.',
  alternates: { canonical: 'https://ivhub.com/laser-hair-removal' },
  openGraph: {
    title: 'Laser Hair Removal in Dubai | IV Wellness Lounge Clinic',
    description: 'Achieve smooth, hair-free skin at IV Wellness Lounge Clinic Dubai. Advanced laser technology ensures effective, comfortable results. Book your session today.',
    url: 'https://ivhub.com/laser-hair-removal',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laser Hair Removal in Dubai | IV Wellness Lounge Clinic',
    description: 'Achieve smooth, hair-free skin at IV Wellness Lounge Clinic Dubai. Advanced laser technology ensures effective, comfortable results. Book your session today.',
    images: ['https://ivhub.com/og.png'],
  },
};


const faq = [
  { question: 'Who is Laser Hair Removal best for?', answer: "Our laser hair treatment is safe for all skin types & tones, from tanned to dark skin" },
  { question: 'Is Laser Hair Removal permanent?', answer: "While laser hair removal isn't a 100% permanent solution, it will significantly reduce future hair growth in treated areas. Hair that returns will be sparse, thinner, and possibly lighter. For best results, we recommend maintenance treatments once or twice a year, depending on your unique needs." },
  { question: 'What does it feel like?', answer: 'While some areas of the body are naturally more sensitive than others, Laser Hair Removal with soprano titanium is virtually painless, and often described as feeling like a hot stone massage.' },
  { question: "Can I get Laser Hair Removal if I'm pregnant?", answer: 'We recommend avoiding laser hair removal during pregnancy.' },
  { question: 'When will I see results?', answer: "With Soprano Titanium technology, you’ll start noticing results around 2 weeks after your first treatment. While you may experience smoother skin early on, it’s essential to complete the recommended number of sessions for lasting results. Laser hair removal generally requires 6–10 treatments, depending on hair growth, hair type and color, and the area of removal. For best results, appointments should be spaced about 3-4 weeks apart for the face and 4-6 weeks apart for the body." },
  { question: "What's the downtime?", answer: "There's virtually zero downtime—you can go back to work or your daily routine—but you may experience some redness afterward, and must stay out of direct sun for 48 hours" },
  { question: 'I have melanin-rich skin. Is this treatment safe for me?', answer: "We use the soprano titanium for melanin-rich skin (Nd:Yag|1064), which targets just the melanin in hair, not the skin specifically. Because of that, it's safe for all skin tones, but especially melanin-rich skin." },
];

export default function LaserHairRemovalPage() {
  return (
    <LaserHairRemovalClient
      faq={faq}
    />
  );
}
