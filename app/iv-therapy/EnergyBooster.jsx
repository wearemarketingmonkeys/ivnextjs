import React, { useState, useEffect } from "react";
import heroIcon from "../../assets/img/boosters/energy-boosters.jpg";
import boostersData from "../../mocks/energyBoosters.json";
import { Link } from "react-router-dom";

const EnergyBooster = () => {
  const [boosters, setBoosters] = useState([]);

  // Import all images with import.meta.glob
  const images = import.meta.glob("../../assets/img/boosters/*.png", {
    eager: true,
  }); /* more img */

  useEffect(() => {
    // Map boostersData with resolved image URLs
    const updatedBoosters = boostersData.boostersData.map((booster) => ({
      ...booster,
      img:
        images[`../../assets/img/boosters/${booster.img}`]?.default ||
        images[`../../assets/img/boosters/${booster.img}`] ||
        "",
    }));
    setBoosters(updatedBoosters);
  }, []);

  return (
    <div className="energy-boosters">
      <div className="energy-hero">
        <div className="container">
          <div className="hero-wrap">
            <div className="left">
              <h3>Book your next service today</h3>
              <h1>Energy Boosters</h1>
              <p>
                <i>20% discount on 3 or more sessions</i>
              </p>
            </div>
            <div className="right">
              <img src={heroIcon} alt="hero-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="boosters">
        <div className="container">
          <div className="boosters-wrap">
            {boosters.map((x, index) => (
              <div className="single-booster" id={x.scrollId} key={index}>
                <div className="left">
                  <h1>{x.title}</h1>
                  <h2>{x.category}</h2>
                  <p>{x.description}</p>
                  <div className="amount-wrap">
                    <div className="btn-wrap">
                      <Link to={"/booking"} className="btn">
                        Book now
                      </Link>
                    </div>
                    <div className="amount">
                      <span>AED</span>
                      <span>{x.price}</span>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <img src={x.img} alt={x.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyBooster;
