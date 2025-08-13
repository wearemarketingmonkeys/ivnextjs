import React, { useState, useEffect } from "react";
import offerData from "../../mocks/offerData.json";
import HeroSection from "../../components/HeroSection";
import offerHero from "../../assets/img/offer/hero.webp";
import OfferCard from "../../components/OfferCard";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const images = import.meta.glob("../../assets/img/offer/*.webp", {
    eager: true,
  });
  /* for image */

  useEffect(() => {
    const updatedOffers = offerData.offerData.map((offer) => ({
      ...offer,
      img: images[`../../assets/img/offer/${offer.img}`]?.default || "",
    }));
    setOffers(updatedOffers);
  }, [offerData]);

  return (
    <>
      <div className="offer-hero">
        <HeroSection img={offerHero} text={"OFFER FOR PACKAGES"} />
      </div>
      <div className="offer-card-wrapper">
        <div className="container">
          <div className="offer-card-wrap">
            {offers.map((x, index) => (
              <div className="card" key={index}>
                <OfferCard
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
};

export default Offers;
