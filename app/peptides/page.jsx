// app/peptides/page.jsx
import PeptidesClient from './PeptidesClient';
import peptidesData from '../mocks/peptidesData.json';


export const metadata = {
  title: 'Peptide Therapy Clinic in Dubai | Anti-Aging & Recovery Peptides | IV Wellness Lounge',
  description:
    "Clinic-supervised peptide therapy for longevity, recovery, and anti-aging. Available at IVHUB DIFC & Palm Jumeirah clinics.",
  alternates: { canonical: 'https://ivhub.com/peptides' },
  keywords: "peptide therapy dubai, peptides clinic dubai, medical grade peptides, anti aging peptides dubai, recovery peptides, longevity clinic dubai, DIFC peptide clinic, palm jumeirah peptide therapy",
  openGraph: {
    title: 'Peptide Therapy Clinic in Dubai | Anti-Aging & Recovery Peptides | IV Wellness Lounge',
    description:
      "Clinic-supervised peptide therapy for longevity, recovery, and anti-aging. Available at IVHUB DIFC & Palm Jumeirah clinics.",
    url: 'https://ivhub.com/peptides',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Therapy Clinic in Dubai | Anti-Aging & Recovery Peptides | IV Wellness Lounge',
    description:
      "Clinic-supervised peptide therapy for longevity, recovery, and anti-aging. Available at IVHUB DIFC & Palm Jumeirah clinics.",
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

  const faq = peptidesData?.faq || [];

  return <PeptidesClient initialPeptides={initialPeptides} faq={faq} />;
}
