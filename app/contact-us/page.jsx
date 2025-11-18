// app/contact-us/page.jsx  (NO "use client")

import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact IV Wellness Lounge Clinic | Dubai Wellness Care',
  description: 'Reach out to IV Wellness Lounge Clinic in Dubai for bookings, enquiries, or at-home IV drip services. Our team responds quickly, submit your request today.',
  openGraph: {
    title: 'Contact IV Wellness Lounge Clinic | Dubai Wellness Care',
    description: 'Reach out to IV Wellness Lounge Clinic in Dubai for bookings, enquiries, or at-home IV drip services. Our team responds quickly, submit your request today.',
    images: [{ url: '/assets/img/contact/hero.webp', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <ContactClient />;
}
