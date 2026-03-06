'use client';

import { useEffect, useMemo, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';


export default function OffersClient() {

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // Try autoplay
    audio.play().catch(() => {
      console.log("Autoplay with sound blocked — waiting for user interaction.");

      const handleClick = () => {
        audio.play();
      };

      document.addEventListener("click", handleClick, { once: true });
    });
  }, []);

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
        <audio ref={audioRef} id="bgAudio" loop>
            <source src="/assets/img/womens-day/women-day-video.mp3" type="audio/mpeg" />
        </audio>
        {/*<div className="hero-overlay" />*/}
        <div className="hero-txt-wrapper">
          <div className="spin-wrap">
            <img
              className="spinner-text"
              src="/assets/img/womens-day/womens-day-text.png"
              alt="spinner"
            />
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
                <h2>To the Women Who Do It All</h2>
                <p className="wd-subtitle">
                  This Women’s Month, we’re celebrating you the way we know best, with wellness.
                </p>

                <div className="wd-offer">
                  <h4>IV Therapy Offers : </h4>
                  <p>Enjoy 15% off your next multi-vitamin/ NAD+ IV Drip</p>
                  <p className="wd-plus">+</p>
                  <p>One complimentary add-on from below of your choice:</p>

                  <p>CoQ10 Booster</p>
                  <p>Quick Energy Boost Shot</p>
                  <p>Vitamin D Supershot</p>

                  <br />
                  <h4>Aesthetic & Beauty Offers : </h4>
                  <p>Lip fillers 899</p>
                  <p>Full face Botox - AED 1899</p>
                  <p>Korean Glass Skin Booster + free Hydrafacial @AED 999</p>
                  <p>Fat dissolving injections @AED 120/ml</p>
                </div>

                <p className="wd-footer">Because strength deserves support.</p>

                <div className="wd-btn-wrap">
                  <a href="http://wa.me/97180048482?text=Hello!%20I%20would%20like%20to%20avail%20the%20women%27s%20day%20offer%20and%20the%20service%20that%20i%20am%20looking%20for%20is" className="wd-btn">PAMPER ME</a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
