// app/peptides/page.jsx
import WellnessescapeClient from './WellnessescapeClient';


export const metadata = {
  title: 'One Day Wellness Escape Dubai | IV Drip, Hydrafacial & Private Beach Access',
  description:
    "Enjoy a luxury 1-day wellness escape in Dubai for couples or groups. Includes IV drip therapy, Hydrafacial treatment and full-day private beach access. Recharge your body and mind with our premium wellness experience.",
  alternates: { canonical: 'https://ivhub.com/wellness-escape' },
  keywords:
    "wellness escape Dubai, couples wellness Dubai, group wellness retreat Dubai, IV drip therapy Dubai, Hydrafacial Dubai, luxury wellness experience Dubai, private beach access Dubai",
  openGraph: {
    title: 'One Day Wellness Escape Dubai | IV Drip, Hydrafacial & Private Beach Access',
    description:
      "Enjoy a luxury 1-day wellness escape in Dubai for couples or groups. Includes IV drip therapy, Hydrafacial treatment and full-day private beach access. Recharge your body and mind with our premium wellness experience.",
    url: 'https://ivhub.com/wellness-escape',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Day Wellness Escape Dubai | IV Drip, Hydrafacial & Private Beach Access',
    description:
      "Enjoy a luxury 1-day wellness escape in Dubai for couples or groups. Includes IV drip therapy, Hydrafacial treatment and full-day private beach access. Recharge your body and mind with our premium wellness experience.",
    images: ['https://ivhub.com/og.png'],
  },
};

export default function WellnessescapePage() {

  return <WellnessescapeClient/>;
}
