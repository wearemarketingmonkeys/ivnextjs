'use client';

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';


export default function WellnessescapeClient() {

  return (
    <>

      <div className="home-hero wellnesshero">
        <img
          className="hero-video"
          src="/assets/img/wellness-escape/wellness-bg.jpg"
          alt="spinner"
        />
        {/*<div className="hero-overlay" />*/}
        <div className="hero-txt-wrapper">
          <div className="spin-wrap">
            <img
              className="spinner-text"
              src="/assets/img/wellness-escape/wellness-text.png"
              alt="spinner"
            />
            <p>
              Designed to Slow Down
            </p>
            <div className="btn-wrap">
              <a href="https://wa.me/97180048482?text=Hello!%20I%27d%20love%20to%20book%20your%20wellness%20escape%20by%20the%20beach,%20could%20you%20help%20me%20with%20the%20available%20slots" className="btn btn-light">Book Your Escape</a>
              <Link href="#shore-section" className="btn btn-light">View The Experience</Link>
            </div>
          </div>
        </div>
      </div>

      <main className="wellnesspage">

        <section className="wellness-escape-section">
          <div className="container">
            <div className="wellness-grid">

              {/* LEFT CONTENT */}
              <div className="wellness-content">
                <h2>The Wellness Escape</h2>

                <p>
                  From the moment you arrive, everything slows down.
                </p>

                <p>
                  Private beach access. Ocean air. A salt room session to reset your system,
                  Hydrafacial for luminous skin and Refreshments served by the water.
                </p>

                <p className="tagline">This is wellness, unhurried.</p>

                <ul className="wellness-list">
                  <li>Private Beach and Pool Access</li>
                  <li>Refreshments by the Sea</li>
                  <li>Hydrafacial</li>
                  <li>Add on Salt Room Therapy</li>
                  <li>Bathrobes and Beach Towels</li>
                </ul>
              </div>

              {/* RIGHT IMAGE */}
              <div className="wellness-image">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                >
                  {/* Desktop */}
                  <source
                    src="/assets/img/wellness-escape/wellness-video.mp4"
                    type="video/mp4"
                    media="(min-width: 501px)"
                  />
                </video>
              </div>

            </div>
          </div>
        </section>

        <section className="indulgence-carousel">
          <div className="container">

            <h2>Experience a full day of indulgence</h2>

            <div className="marquee">
              <div className="marquee-track">

                {/* first set */}
                <img src="/assets/img/wellness-escape/s1.png" alt="" />
                <img src="/assets/img/wellness-escape/s2.png" alt="" />
                <img src="/assets/img/wellness-escape/s3.jpg" alt="" />
                <img src="/assets/img/wellness-escape/s5.jpg" alt="" />
                <img src="/assets/img/wellness-escape/s4.jpg" alt="" />
                <img src="/assets/img/wellness-escape/s6.jpg" alt="" />
                <img src="/assets/img/wellness-escape/s7.jpg" alt="" />
                <img src="/assets/img/wellness-escape/single-room.png" alt="" />
                
                {/* duplicated set for seamless loop */}
                <img src="/assets/img/wellness-escape/s1.png" alt="" />
                <img src="/assets/img/wellness-escape/s2.png" alt="" />
                <img src="/assets/img/wellness-escape/s3.jpg" alt="" />
                <img src="/assets/img/wellness-escape/s5.jpg" alt="" />
                <img src="/assets/img/wellness-escape/s4.jpg" alt="" />
                <img src="/assets/img/wellness-escape/s6.jpg" alt="" />
                <img src="/assets/img/wellness-escape/s7.jpg" alt="" />
                <img src="/assets/img/wellness-escape/single-room.png" alt="" />

              </div>
            </div>

          </div>
        </section>

        <section id="shore-section" className="shore-section">
          <img className="shore-bg" src="/assets/img/wellness-escape/wellness-bg.jpg" alt="" />

          <div className="shore-overlay" />

          <div className="shore-inner container">
            {/* LEFT TEXT */}
            <div className="shore-left">
              <h2>Wellness by the Shore</h2>
              <p>Exclusively at IV Wellness Lounge Clinic</p>
              <p>Palm Jumeirah</p>
            </div>

            {/* RIGHT CARDS */}
            <div className="shore-right">
              <div className="shore-card">
                <h3>Solo Escape</h3>
                <p className="sub">
                  For those who want a day of stillness
                </p>

                <div className="includes">
                  <h4>Includes:</h4>
                  <ul>
                    <li>full-day beach access</li>
                    <li>Hydrafacial</li>
                    <li>Refreshments</li>
                    <li>Beach Towels &amp; Bathrobes</li>
                  </ul>
                </div>

                <a className="shore-btn" href="http://wa.me/97180048482?text=Hello!%20I%27d%20love%20to%20book%20the%20Solo%20Wellness%20Escape%20by%20the%20Sea%20(AED%20199).%20Could%20you%20please%20share%20the%20available%20slots">BOOK NOW</a>
              </div>

              <div className="shore-card">
                <h3>Couple’s Getaway</h3>
                <p className="sub">
                  For couples who want to slow down, reconnect, and unwind together
                </p>

                <div className="includes">
                  <h4>Includes:</h4>
                  <ul>
                    <li>full-day beach access for 2</li>
                    <li>Hydrafacial for 2</li>
                    <li>Refreshments for 2</li>
                    <li>Beach Towels &amp; Bathrobes for 2</li>
                  </ul>
                </div>

                <a className="shore-btn" href="http://wa.me/97180048482?text=Hello!%20I%27d%20love%20to%20book%20the%20Couples%20Wellness%20Escape%20by%20the%20Sea%20(AED%20399).%20Could%20you%20please%20share%20the%20available%20slots%20for%20two">BOOK NOW</a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
