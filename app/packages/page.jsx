// app/packages/page.jsx  (SERVER COMPONENT – no "use client")

import ivPackageData from '../mocks/ivPackageData.json';
import HeroSection from '../components/HeroSection';
import IvPackageCard from '../components/IvPackageCard'; // ok if this is client

export const metadata = {
  title: 'IV Packages | IV Wellness Lounge',
  description:
    'Explore our exclusive IV therapy packages designed to boost wellness, energy, and recovery. Book your package today at IV Wellness Lounge.',
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
