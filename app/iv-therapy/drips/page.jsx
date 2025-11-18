// app/iv-therapy/drips/page.jsx

export const metadata = {
  title: "IV Drips in Dubai | Custom Formulations | IV Wellness Lounge",
  description: "Receive bespoke IV drips at IV Wellness Lounge Clinic Dubai. Restore hydration, boost immunity, and support recovery. Book your tailored IV drip session now.",
  alternates: { canonical: "http://ivhub.com/iv-therapy/drips" },
  openGraph: {
    title: "IV Drips in Dubai | Custom Formulations | IV Wellness Lounge",
    description: "Receive bespoke IV drips at IV Wellness Lounge Clinic Dubai. Restore hydration, boost immunity, and support recovery. Book your tailored IV drip session now.",
    url: "http://ivhub.com/iv-therapy/drips",
    type: "website",
    images: [{ url: "http://ivhub.com/og.png", width: 1200, height: 630, alt: "IV Wellness Lounge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IV Drips in Dubai | Custom Formulations | IV Wellness Lounge",
    description: "Receive bespoke IV drips at IV Wellness Lounge Clinic Dubai. Restore hydration, boost immunity, and support recovery. Book your tailored IV drip session now.",
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