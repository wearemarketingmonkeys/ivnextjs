// app/contact-us/page.jsx  (NO "use client")

import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact Us | IV Wellness Lounge',
  description:
    'Have a question? Contact IV Wellness Lounge for appointments, inquiries, and support.',
  openGraph: {
    title: 'Contact IV Wellness Lounge',
    description:
      'Reach out to IV Wellness Lounge for bookings and questions.',
    images: [{ url: '/assets/img/contact/hero.webp', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <ContactClient />;
}
