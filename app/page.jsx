// app/page.jsx
import HomeClient from './components/HomeClient'; // client component below

export const metadata = {
  title: 'IV Wellness Lounge | IV Therapy & Aesthetic Services in-Clinic & At-Home – Dubai',
  description:
    'IV Wellness Lounge delivers premium IV therapy and aesthetic treatments both in-clinic and at-home across Dubai. Trusted wellness care with proven results, wherever you are.',
};

export default function Page() {
  return <HomeClient />; // render the interactive client component
}
