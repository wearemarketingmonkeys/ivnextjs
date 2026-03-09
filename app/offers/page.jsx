import OffersClient from './OffersClient';

export const metadata = {
  title: "Monthly IV Drips & Aesthetic Offers in Dubai | Hydrafacial, Botox Deals | IVHUB",
  description:
    "Discover monthly offers on IV therapy, Hydrafacial, Botox, skin boosters, laser hair removal and aesthetic treatments at IVHUB Dubai. Premium wellness treatments at special prices.",
  alternates: {
    canonical: 'https://ivhub.com/offers',
  },
  keywords:
    "Women's day dubai, women's day wellness dubai, women's day spa dubai, women's day hydrafacial dubai, women's day self care dubai, women's wellness experience dubai, IV Wellness Lounge women's day",

  openGraph: {
    title: "Exclusive Monthly Wellness & Aesthetic Offers | IVHUB Dubai",
    description:
      "Explore monthly deals on IV therapy, Hydrafacial, Botox, skin boosters and laser hair removal at IVHUB Dubai.",
    url: 'https://ivhub.com/offers',
    type: 'website',
    images: [
      {
        url: 'https://ivhub.com/og.png',
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Exclusive Monthly Wellness & Aesthetic Offers | IVHUB Dubai",
    description:
      "Explore monthly deals on IV therapy, Hydrafacial, Botox, skin boosters and laser hair removal at IVHUB Dubai.",
    images: ['https://ivhub.com/og.png'],
  },
};

export default function WomensdayPage() {
  return <OffersClient />;
}