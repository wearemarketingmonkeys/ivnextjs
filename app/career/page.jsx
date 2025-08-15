// app/contact-us/page.jsx  (NO "use client")

import CareerClient from './CareerClient';

export const metadata = {
  title: 'Careers | IV Wellness Lounge',
  description:
    "Ready to build your career with IV Wellness Lounge? Apply now—upload your CV and optional license/certification. We'll get back to you soon.",
  alternates: { canonical: 'https://ivhub.com/career' },
  openGraph: {
    title: 'Careers | IV Wellness Lounge',
    description:
      "Ready to build your career with IV Wellness Lounge? Apply now—upload your CV and optional license/certification.",
    url: 'https://ivhub.com/career',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | IV Wellness Lounge',
    description:
      "Ready to build your career with IV Wellness Lounge? Apply now—upload your CV and optional license/certification.",
    images: ['https://ivhub.com/og.png'],
  },
};

export default function Page() {
  return <CareerClient />;
}