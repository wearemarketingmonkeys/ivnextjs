// app/iv-therapy/drips/page.jsx

export const metadata = {
  title: "Drips | IV Wellness Lounge",
  description:
    "Tailored IV drip therapy for your well-being. Choose, schedule, consult, and rejuvenate. Feel your best with our personalized nutrient infusions.",
  alternates: { canonical: "http://ivhub.com/iv-therapy/drips" },
  openGraph: {
    title: "Drips | IV Wellness Lounge",
    description:
      "Tailored IV drip therapy for your well-being. Choose, schedule, consult, and rejuvenate. Feel your best with our personalized nutrient infusions.",
    url: "http://ivhub.com/iv-therapy/drips",
    type: "website",
    images: [{ url: "http://ivhub.com/og.png", width: 1200, height: 630, alt: "IV Wellness Lounge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drips | IV Wellness Lounge",
    description:
      "Tailored IV drip therapy for your well-being. Choose, schedule, consult, and rejuvenate. Feel your best with our personalized nutrient infusions.",
    images: ["http://ivhub.com/og.png"],
  },
};

import DripsClient from './DripsClient';
import dripsData from '../../mocks/wellnessDrips.json';

export default function Page() {
  // Build image URLs on the server for SSR-safe HTML
  const drips = dripsData.dripsData.map(d => ({
    ...d,
    img: `/assets/img/drips/${d.img}`,
  }));

  return <DripsClient initialDrips={drips} />;
}