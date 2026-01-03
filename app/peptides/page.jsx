// app/peptides/page.jsx
import PeptidesClient from './PeptidesClient';
import peptidesData from '../mocks/peptidesData.json';

export const metadata = {
  title: 'Peptides | IV Wellness Lounge Clinic',
  description:
    "Explore IV Wellness Lounge Clinic's peptide offerings designed to support recovery, performance, and overall wellness.",
  alternates: { canonical: 'https://ivhub.com/peptides' },
  openGraph: {
    title: 'Peptides | IV Wellness Lounge Clinic',
    description:
      "Explore IV Wellness Lounge Clinic's peptide offerings designed to support recovery, performance, and overall wellness.",
    url: 'https://ivhub.com/peptides',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides | IV Wellness Lounge Clinic',
    description:
      "Explore IV Wellness Lounge Clinic's peptide offerings designed to support recovery, performance, and overall wellness.",
    images: ['https://ivhub.com/og.png'],
  },
};

// Map images to /public so SSR is safe
const toPublic = (p) => (p ? (p.startsWith('/') ? p : `/assets/img/peptides/${p}`) : '');

export default function PeptidesPage() {
  const initialPeptides = (peptidesData?.peptidesData || []).map((p) => ({
    ...p,
    img: toPublic(p.img),
  }));

  return <PeptidesClient initialPeptides={initialPeptides} />;
}
