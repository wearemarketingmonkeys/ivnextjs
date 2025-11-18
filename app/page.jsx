// app/page.jsx
import HomeClient from './components/HomeClient'; // client component below

export const metadata = {
  title: 'IV Wellness Lounge Clinic in Dubai | IV Drips & Aesthetics',
  description:
    'Advanced IV drips and aesthetics by medical experts in a luxury setting or at home. Boost energy, hydration, and recovery. Book your personalized session now.',
};

export default function Page() {
  return <HomeClient />; // render the interactive client component
}
