// app/explore-us/offers/page.jsx
import Link from "next/link";
import offerData from "../../mocks/offerData.json";
import HeroSection from "../../components/HeroSection";
import OfferCard from "../../components/OfferCard";

// --- SEO ---
export const metadata = {
  title: "Offers | IV Wellness Lounge Clinic in Dubai",
  description:
    "Limited-time offers on IV therapy and aesthetic treatments. Save on packages and sessions at IV Wellness Lounge Clinic in Dubai.",
  alternates: { canonical: "https://ivhub.com/explore-us/offers" },
  openGraph: {
    title: "Offers | IV Wellness Lounge Clinic in Dubai",
    description:
      "Limited-time offers on IV therapy and aesthetic treatments. Save on packages and sessions.",
    url: "https://ivhub.com/explore-us/offers",
    type: "website",
    images: [{ url: "https://ivhub.com/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Offers | IV Wellness Lounge Clinic in Dubai",
    description:
      "Limited-time offers on IV therapy and aesthetic treatments. Save on packages and sessions.",
    images: ["https://ivhub.com/og.png"],
  },
};

// Map JSON → /public paths (no import.meta.glob in Next.js)
function getOffers() {
  const list = offerData?.offerData ?? [];
  return list.map((o) => ({
    ...o,
    img: o.img ? `/assets/img/offer/${o.img}` : "",
  }));
}

export default function OffersPage() {
  const offers = getOffers();

  return (
    <>
      <div className="offer-hero">
        {/* hero image should live at /public/assets/img/offer/hero.webp */}
        <HeroSection img="/assets/img/offer/hero.webp" text="OFFER FOR PACKAGES" />
      </div>

      <div className="offer-card-wrapper">
        <div className="container">
          <div className="offer-card-wrap">
            {offers.map((x, index) => (
              <div className="card" key={index}>
                <OfferCard
                  img={x.img}
                  title={x.title}
                  descBrif={x?.desc?.brif}
                  descUl={x?.desc?.ul}
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
