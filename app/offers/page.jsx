import OffersClient from './OffersClient';

export const metadata = {
  title: "Women's Day Wellness Experience | IV Wellness Lounge Dubai",
  description:
    "Celebrate Women's Day at IV Wellness Lounge Dubai with exclusive wellness experiences, Hydrafacial treatments, IV therapy, and luxury self-care packages designed to empower and rejuvenate women.",
  alternates: {
    canonical: 'https://ivhub.com/offers',
  },
  keywords:
    "Women's day dubai, women's day wellness dubai, women's day spa dubai, women's day hydrafacial dubai, women's day self care dubai, women's wellness experience dubai, IV Wellness Lounge women's day",

  openGraph: {
    title: "Women's Day Wellness Experience | IV Wellness Lounge Dubai",
    description:
      "Celebrate women with a luxury wellness experience at IV Wellness Lounge Dubai. Enjoy Hydrafacial, IV therapy, and exclusive Women's Day treatments designed for relaxation, beauty, and rejuvenation.",
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
    title: "Women's Day Wellness Experience | IV Wellness Lounge Dubai",
    description:
      "Celebrate Women's Day with luxury wellness treatments, Hydrafacial, IV therapy, and exclusive self-care experiences at IV Wellness Lounge Dubai.",
    images: ['https://ivhub.com/og.png'],
  },
};

export default function WomensdayPage() {

  return <OffersClient />;
  
}