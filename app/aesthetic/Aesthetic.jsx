import React, { useState, useEffect } from "react";
import aestheticData from "../../mocks/aestheticData.json";
import aestheticHero from "../../assets/img/blog/blog-hero.webp";
import HeroSection from "../../components/HeroSection";
import { Link } from "react-router-dom";
import AestheticCard from "../../components/AestheticCard";

const Aesthetic = () => {
  const [aesthetics, setAesthetics] = useState([]);
  const [randomSubHeadings, setRandomSubHeadings] = useState({});

  const images = import.meta.glob("../../assets/img/aesthetic/*.webp", {
    eager: true,
  });
  const icons = import.meta.glob("../../assets/img/aesthetic/*.png", { eager: true });

  useEffect(() => {
    const updatedAesthetic = aestheticData.aestheticData.map((aesthetic) => ({
      ...aesthetic,
      img: images[`../../assets/img/aesthetic/${aesthetic.img}`]?.default || "",
      treatableConcerns: aesthetic.treatableConcerns.map((concern) => ({
        ...concern,
        icons: icons[`../../assets/img/aesthetic/${concern.icons}`]?.default || "",
      })),
    }));
    setAesthetics(updatedAesthetic);
  }, []);

  // Random subheading rotation logic
  useEffect(() => {
    const updateRandomSubHeadings = () => {
      const newRandoms = {};
      aesthetics.forEach((aesthetic) => {
        const subHeadingsArray = aesthetic.subHeading?.split("|").map(str => str.trim()) || [];
        if (subHeadingsArray.length > 0) {
          const randomIndex = Math.floor(Math.random() * subHeadingsArray.length);
          newRandoms[aesthetic.id] = subHeadingsArray[randomIndex];
        }
      });
      setRandomSubHeadings(newRandoms);
    };

    if (aesthetics.length > 0) {
      updateRandomSubHeadings(); // Initial random subheadings
      const intervalId = setInterval(updateRandomSubHeadings, 1500);
      return () => clearInterval(intervalId);
    }
  }, [aesthetics]);

  return (
    <div className="aesthetic">
      <div className="hero-bottom">
        <div className="container">
          <div className="hero-bottom-wrap">
            <div className="">
              <h1>
                Rediscover Your Natural Beauty <br /> with Our Advanced Aesthetic Treatments
              </h1>
              <p>
                At IV Wellness, we believe in enhancing your natural beauty
                through state-of-the-art aesthetic treatments tailored to meet
                your individual needs. Our expert team of licensed practitioners
                is dedicated to helping you look and feel your best in a
                luxurious, relaxing environment.
              </p>
            </div>
            <div className="btn-wrap">
              <Link to={"/booking"} className="btn btn-light-stroke">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Cards */}
      <div className="aesthetic-cards">
        <div className="container">
          <div className="aesthetic-wrapper">
            <h2>RECOMMENDED TREATMENTS</h2>
            <div className="aesthetic-wrap">
              {aesthetics.map((x, index) => (
                <div className="card" key={index}>
                  <AestheticCard
                    img={x.img}
                    title={x.title}
                    subHeading={randomSubHeadings[x.id] || ""}
                    desc={x.desc}
                    howItWorks={x.howItWorks}
                    treatableArea={x.treatableArea}
                    treatableConcerns={x.treatableConcerns}
                    duration={x.duration}
                    startingAmount={x.startingAmount}
                    discount={x.discount}
                    fullDetailsUrl={x.fullDetailsUrl}
                    bookingBtn={x.bookingBtn}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aesthetic;