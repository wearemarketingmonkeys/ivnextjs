// app/page.jsx
import HomeClient from './components/HomeClient'; // client component below

export const metadata = {
  title: 'IV Wellness Lounge in Dubai | DIFC & Palm Jumeirah | IV Drips & Aesthetics',
  description: 'Leading IV therapy and aesthetics clinic in Dubai with branches in DIFC and Palm Jumeirah. Offering IV drips, NAD+, facials, skin boosters, Hydrafacial, and wellness treatments.',
  alternates: { canonical: 'https://ivhub.com/' },
  openGraph: {
    title: 'IV Wellness Lounge in Dubai | DIFC & Palm Jumeirah | IV Drips & Aesthetics',
    description: 'Leading IV therapy and aesthetics clinic in Dubai with branches in DIFC and Palm Jumeirah. Offering IV drips, NAD+, facials, skin boosters, Hydrafacial, and wellness treatments.',
    url: 'https://ivhub.com/',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IV Wellness Lounge in Dubai | DIFC & Palm Jumeirah | IV Drips & Aesthetics',
    description: 'Leading IV therapy and aesthetics clinic in Dubai with branches in DIFC and Palm Jumeirah. Offering IV drips, NAD+, facials, skin boosters, Hydrafacial, and wellness treatments.',
    images: ['https://ivhub.com/og.png'],
  },
};

export default function Page() {
  return <HomeClient />; // render the interactive client component
}
