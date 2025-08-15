// app/aesthetic/page.jsx
import AestheticClient from './AestheticClient';
import aestheticData from '../mocks/aestheticData.json';

// ✅ SEO (server only)
export const metadata = {
  title: 'Aesthetic | IV Wellness Lounge',
  description:
    "Rediscover your natural beauty with IV Wellness's advanced aesthetic treatments. Tailored procedures for skin, hair, and overall rejuvenation in a luxury environment.",
  alternates: { canonical: 'https://ivhub.com/aesthetic' },
};

// Map images to /public so SSR is safe
const toPublic = (p) => (p ? (p.startsWith('/') ? p : `/assets/img/aesthetic/${p}`) : '');

export default function AestheticPage() {
  const initialAesthetics = (aestheticData?.aestheticData || []).map((a) => ({
    ...a,
    img: toPublic(a.img),
    treatableConcerns: (a.treatableConcerns || []).map((c) => ({
      ...c,
      icons: toPublic(c.icons),
    })),
  }));

  // Render the interactive list in a client component
  return <AestheticClient initialAesthetics={initialAesthetics} />;
}
