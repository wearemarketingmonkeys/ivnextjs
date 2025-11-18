import Image from "next/image"
// import MyGallery from "./gallery"

export const metadata = {
  title: 'HSBC Dubai Fitness Challenge | IV Wellness Lounge Clinic',
  description:
    'Celebrate HSBC Dubai Fitness Challenge with exclusive wellness and aesthetic offers at IV Wellness Lounge Clinic. Special discounts on skin boosters, HIFU, hydrafacial packages, hair regeneration, IV drips, and more.',
  alternates: { canonical: 'https://ivhub.com/hsbc' },
  openGraph: {
    title: 'HSBC Dubai Fitness Challenge | IV Wellness Lounge Clinic',
    description:
      'Exclusive limited-time offers for HSBC Dubai Fitness Challenge at IV Wellness Lounge Clinic. Enjoy discounted treatments including skin boosters, HIFU, hydrafacials, exosomes glow packages, and IV drips.',
    url: 'https://ivhub.com/hsbc-customer-experience-week',
    type: 'website',
    images: [
      {
        url: 'https://ivhub.com/assets/img/offer/hsbc2.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HSBC Dubai Fitness Challenge | IV Wellness Lounge Clinic',
    description:
      'Discover special promotions for HSBC Dubai Fitness Challenge at IV Wellness Lounge Clinic, featuring premium skin, hair, and wellness treatments.',
    url: 'https://ivhub.com/hsbc',
    images: ['https://ivhub.com/assets/img/offer/hsbc2.jpg'],
  },
};


export default function HSBCPage() {
  return (
    <>
      <section className="mod-hero hsbc">
        <div className="mod-title">
          <h1>HSBC Dubai Fitness Challenge</h1>
          <div>
            Join us in celebrating HSBC Dubai Fitness Challenge with exclusive,
            limited-time wellness and aesthetic offers crafted to help you look and
            feel your best. Enjoy premium treatments at special prices only at
            IV Wellness Lounge Clinic.
          </div>
        </div>
        <div className="mod-media">
          <Image
            src="/assets/img/offer/hsbc2.jpg"
            alt="HSBC"
            width={1200}
            height={600}
          />
        </div>
      </section>

      <section className="mod-focus-area">
        <h2>Exclusive Offers</h2>
        <div className="item">
          <ul>
            <li>Glow and Hydrate with Skin Boosters AED 899 (down from AED 1499)</li>
            <li>HIFU small area - AED 999 DOWN FROM 1499</li>
            <li>Exosomes Glow Package (Hydrafacial + Exosomes) - AED 1,499 (DOWN FROM 2199)</li>
            <li>IV DRIPS - 15% OFF any Drip</li>
            <li>Advanced Hair Regeneration (PRP +Growth Factor) - starting AED 999 (DOWN FROM 1398)</li>
            <li>Face Glow Revival (2 Glutathione IV Drips + Glow Hydrafacial + Skin Booster) - AED 1,999 (DOWN FROM 2499)</li>
          </ul>
        </div>
      </section>

      <section className="mod-ctr hsbc">
        <a href="https://wa.me/97180048482?text=Hello, I’d like to redeem my coupon code HSBCIVWL for custom services as part of the HSBC Dubai Fitness Challenge event">Get Offer Now</a>
      </section>
    </>
  )
}