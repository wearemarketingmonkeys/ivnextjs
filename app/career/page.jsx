// app/contact-us/page.jsx  (NO "use client")

import CareerClient from './CareerClient';

export const metadata = {
  title: 'Careers at IV Wellness Lounge Clinic | Join Our Dubai Team',
  description: "Explore career opportunities at IV Wellness Lounge Clinic. Apply your medical or therapy skills in a luxury wellness environment. Submit your application today.",
  alternates: { canonical: 'https://ivhub.com/career' },
  openGraph: {
    title: 'Careers at IV Wellness Lounge Clinic | Join Our Dubai Team',
    description: "Explore career opportunities at IV Wellness Lounge Clinic. Apply your medical or therapy skills in a luxury wellness environment. Submit your application today.",
    url: 'https://ivhub.com/career',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at IV Wellness Lounge Clinic | Join Our Dubai Team',
    description: "Explore career opportunities at IV Wellness Lounge Clinic. Apply your medical or therapy skills in a luxury wellness environment. Submit your application today.",
    images: ['https://ivhub.com/og.png'],
  },
};

export default function Page() {
  return <CareerClient />;
}