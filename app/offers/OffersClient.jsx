'use client';

import { useEffect, useMemo, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';


export default function OffersClient() {

  const audioRef = useRef(null);

  // useEffect(() => {
  //   const audio = audioRef.current;

  //   // Try autoplay
  //   audio.play().catch(() => {
  //     console.log("Autoplay with sound blocked — waiting for user interaction.");

  //     const handleClick = () => {
  //       audio.play();
  //     };

  //     document.addEventListener("click", handleClick, { once: true });
  //   });
  // }, []);

  return (
    <>

      <div className="home-hero womensday">
        <video
          className="hero-video"
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="/assets/img/womens-day/wvid.mp4"
            type="video/mp4"
          />
        </video>
        {/*<audio ref={audioRef} id="bgAudio" loop>
            <source src="/assets/img/womens-day/women-day-video.mp3" type="audio/mpeg" />
        </audio>*/}
        {/*<div className="hero-overlay" />*/}
        <div className="hero-txt-wrapper">
          <div className="spin-wrap">
            {/*<img
              className="spinner-text"
              src="/assets/img/womens-day/womens-day-text.png"
              alt="spinner"
            />*/}
            <h1>Monthly Offers</h1>
          </div>
        </div>
      </div>

      <main className="womensday-page">
        <section className="womensday-hero">
          <div className="container">
            <div className="wd-grid">

              {/* LEFT IMAGE */}
              <div className="wd-image">
                <img src="/assets/img/womens-day/wday-1.jpeg" alt="Women's Month" />
              </div>

              {/* RIGHT CONTENT */}
              <div className="wd-content">
                {/*<h2>To the Women Who Do It All</h2>*/}

                <p className="wd-subtitle">
                  This month, we’re celebrating you the way we know best, with wellness
                </p>

                <div className="wd-offers-grid">

                  {/* IV THERAPY */}
                  <div className="wd-offer-card">
                    <h4>IV Therapy Offers</h4>

                    <p>•  Enjoy 20% off your next multi-vitamin/ NAD+ IV Drip</p>
                    <p className="wd-plus">+</p>
                    <p>•  One complimentary add-on from below of your choice:
                        <ul style={{ listStyle: 'none' }}>
                          <li>- CoQ10 Booster</li>
                          <li>- Quick Energy Boost Shot</li>
                          <li>- Vitamin D Supershot</li>
                        </ul>
                    </p>
                  </div>

                  {/* AESTHETIC */}
                  <div className="wd-offer-card">
                    <h4>Aesthetic & Beauty Offers</h4>

                    <ul>
                      <li>Lip fillers @AED 899</li>
                      <li>Full face Botox @AED 1199</li>
                      <li>Skin Booster + free Hydrafacial @AED 699</li>
                      <li>Fat dissolving injections @AED 120/ml</li>
                      <li>HIFU Full Face OR Double Chin and Neck @AED 899</li>
                      <li>HIFU Full Face + Double Chin and Neck @AED 1499</li>
                      <li>Carbon Laser @AED 499 (Down from AED 699)</li>
                    </ul>
                  </div>

                  <div className="wd-offer-card">
                    <h4>Peptides</h4>

                    <ul>
                      <li>1 complimentary Peptide Cycle with 3 Peptide STACK Cycles</li>
                    </ul>
                  </div>

                </div>

                <p className="wd-footer">Because strength deserves support.</p>

                <div className="wd-btn-wrap">
                  <a href="http://wa.me/97180048482?text=Hello!%20I%20would%20like%20to%20avail%20the%20offer%20and%20the%20service%20that%20i%20am%20looking%20for%20is" className="wd-btn">PAMPER ME</a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
