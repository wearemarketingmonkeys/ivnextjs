// app/packages/page.jsx  (SERVER COMPONENT – no "use client")

import ivPackageData from '../mocks/ivPackageData.json';
import HeroSection from '../components/HeroSection';
import IvPackageCard from '../components/IvPackageCard'; // ok if this is client

export const metadata = {
  title: 'Wellness Packages in Dubai | IV Wellness Lounge Clinic',
  description: 'Select premium wellness packages at IV Wellness Lounge Clinic Dubai. Combine IV drips and treatments for enhanced results and value. Book your package today.',
  alternates: { canonical: 'https://ivhub.com/packages' },
  openGraph: {
    title: 'Wellness Packages in Dubai | IV Wellness Lounge Clinic',
    description: 'Select premium wellness packages at IV Wellness Lounge Clinic Dubai. Combine IV drips and treatments for enhanced results and value. Book your package today.',
    url: 'https://ivhub.com/packages',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wellness Packages in Dubai | IV Wellness Lounge Clinic',
    description: 'Select premium wellness packages at IV Wellness Lounge Clinic Dubai. Combine IV drips and treatments for enhanced results and value. Book your package today.',
    images: ['https://ivhub.com/og.png'],
  },
};

export default function IvPackages() {
  // Build the list at render time (SSR)
  const ivPackages = ivPackageData.ivPackageData.map((p) => ({
    ...p,
    img: `/assets/img/ivPackage/${p.img}`, // make sure files exist in /public/assets/img/ivPackage/
  }));

  return (
    <>
      <div className="ivPackage-hero">
        <HeroSection img="/assets/img/ivPackage/hero.webp" text="OFFER FOR PACKAGES" />
      </div>

      <div className="ivPackage-card-wrapper">
        <div className="container">
          <div className="ivPackage-card-wrap">
            {ivPackages.map((x, index) => (
              <div className="card" key={index}>
                <IvPackageCard
                  img={x.img}
                  title={x.title}
                  descBrif={x.desc.brif}
                  descUl={x.desc.ul}
                  newBadge={x.newBadge}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
