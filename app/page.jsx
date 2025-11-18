// app/page.jsx
import HomeClient from './components/HomeClient'; // client component below

export const metadata = {
  title: 'IV Wellness Lounge Clinic in Dubai | IV Drips & Aesthetics',
  description: 'Advanced IV drips and aesthetics by medical experts in a luxury setting or at home. Boost energy, hydration, and recovery. Book your personalized session now.',
  alternates: { canonical: 'https://ivhub.com/' },
  openGraph: {
    title: 'IV Wellness Lounge Clinic in Dubai | IV Drips & Aesthetics',
    description: 'Advanced IV drips and aesthetics by medical experts in a luxury setting or at home. Boost energy, hydration, and recovery. Book your personalized session now.',
    url: 'https://ivhub.com/',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IV Wellness Lounge Clinic in Dubai | IV Drips & Aesthetics',
    description: 'Advanced IV drips and aesthetics by medical experts in a luxury setting or at home. Boost energy, hydration, and recovery. Book your personalized session now.',
    images: ['https://ivhub.com/og.png'],
  },
};

export default function Page() {
  return <HomeClient />; // render the interactive client component
}
