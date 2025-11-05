import HeroSection from '../components/HeroSection';
import InteractiveMembership from './InteractiveMembership';

export const metadata = {
  title: 'Membership Plans | IV Wellness Lounge',
  description:
    'Explore holistic membership programs for aesthetics and wellness at IV Wellness Lounge Dubai.',
  alternates: { canonical: 'https://ivhub.com/membership' },
  openGraph: {
    title: 'Membership Plans | IV Wellness Lounge',
    description:
      'Dubai’s most holistic aesthetic programs. Only for the discerning.',
    url: 'https://ivhub.com/membership',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
};

export default function MembershipPage() {
  const memberships = [
    {
      id: 'silver',
      name: 'The 365 Access Pass : Silver',
      image: '/assets/img/silver.jpg',
      price: 'AED 2,999 / year',
      tag: '',
      color: 'silver',
      perks: [
        '20% off IV drips and 10% off aesthetic treatments',
        'Free monthly doctor & therapist consultation',
        'AED 499 welcome credit',
        'Welcome gift',
        'Free annual health checkup',
        'Access to dedicated wellness partner via WhatsApp',
        'Invites to exclusive events and early access to new launches',
      ],
    },
    {
      id: 'gold',
      name: 'The 365 Access Pass : Gold',
      image: '/assets/img/gold.jpg',
      price: 'AED 8,999 / year',
      tag: 'Most Popular',
      color: 'gold',
      perks: [
        '30% off IV drips and 20% off aesthetic treatments',
        'Unlimited doctor & therapist consultation',
        'AED 999 welcome credit',
        'Wellness gift hamper',
        'Ultrahuman Ring / Whoop',
        'Free annual comprehensive health checkup',
        'Discount on DNA testing',
        'Access to dedicated wellness partner via WhatsApp or call',
        'Quarterly perks, invites to exclusive events, and early access to new launches',
      ],
    },
    {
      id: 'bronze',
      name: 'The Glow Circle',
      image: '/assets/img/bronze.jpg',
      price: 'By Invite Only',
      tag: '',
      color: 'bronze',
      perks: [
        'An exclusive, invite-only membership',
        'Free of cost and reserved for our most trusted clients',
      ],
    },
  ];

  return (
    <>
      <div className="membership-hero">
        <h1>THE MEMBERSHIP EDIT</h1>
        <h2>Where Loyalty Meets Luxury</h2>
      </div>

      <InteractiveMembership memberships={memberships} />
    </>
  );
}
