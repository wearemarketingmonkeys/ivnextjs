// app/peptides/page.jsx
import WellnessescapeClient from './WellnessescapeClient';


export const metadata = {
  title: 'The Wellness Escape | Private Beach Spa Experience in Dubai | IV Wellness Lounge',
  description:
    "Unwind with The Wellness Escape at IV Wellness Lounge. Enjoy private beach and pool access, Hydrafacial treatment, salt room therapy, and seaside refreshments for a truly unhurried wellness experience in Dubai.",
  alternates: { canonical: 'https://ivhub.com/wellness-escape' },
  keywords:
    "wellness escape dubai, private beach spa dubai, hydrafacial dubai, salt room therapy dubai, beach wellness experience, luxury spa day dubai, IV Wellness Lounge beach access, pool and spa dubai",
  openGraph: {
    title: 'The Wellness Escape | Private Beach Spa Experience in Dubai | IV Wellness Lounge',
    description:
      "Private beach and pool access, Hydrafacial, optional salt room therapy, and refreshments by the sea. Discover wellness, unhurried at IV Wellness Lounge Dubai.",
    url: 'https://ivhub.com/wellness-escape',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wellness Escape | Private Beach Spa Experience in Dubai | IV Wellness Lounge',
    description:
      "A luxury beachside wellness experience featuring Hydrafacial, salt room therapy, private pool access, and seaside relaxation in Dubai.",
    images: ['https://ivhub.com/og.png'],
  },
};

export default function WellnessescapePage() {

  return <WellnessescapeClient/>;
}
