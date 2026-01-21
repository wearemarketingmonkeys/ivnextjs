'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { AiFillCaretDown } from 'react-icons/ai';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

// adjust these import paths to where your files actually live:
import { useOutsideClick } from '../hooks/useOutsideClick';
import SpecialOfferCard from '../components/SpecialOfferCard';
import PromoPopup from '../components/PromoPopup';
import specialOffersData from '../mocks/specialOffersData.json';

// Client-only lib:
const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });
import 'react-multi-carousel/lib/styles.css';

import LogoMarquee from '../components/LogoMarquee';

const difcimg = [
  '/assets/img/difc/7.jpg',
  '/assets/img/difc/8.jpg',
  '/assets/img/difc/9.jpg',
  '/assets/img/difc/10.jpg',
  '/assets/img/difc/11.jpg',
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 992 }, items: 3 },
  tablet:  { breakpoint: { max: 992,  min: 768 }, items: 2 },
  mobile:  { breakpoint: { max: 768,  min: 0   }, items: 1 },
};

const palmimg = [
  '/assets/img/palm/1.jpg',
  '/assets/img/palm/2.jpg',
  '/assets/img/palm/3.jpg',
  '/assets/img/palm/4.jpg',
  '/assets/img/palm/5.jpg',
  '/assets/img/palm/6.jpg',
];

const difclinks = [
  'https://finance.yahoo.com/news/iv-wellness-lounge-announces-luxurious-011500479.html',
  'https://www.khaleejtimes.com/kt-network/iv-wellness-lounge-a-symphony-of-luxurious-wellness-in-dubai',
  'https://www.gulf-times.com/article/670101/qatar/iv-wellness-lounge-unveiling-dubais-premier-wellness-oasis',
];

const palmlinks = [
  '',
  '',
  'https://www.fazaa.ae/offers/view/iv-wellness-lounge',
  'https://www.emiratesnbd.com/en/deals/live-well/iv-wellness-lounge-clinic?source=ivhub.com',
];

const gotDetails = [
  "Crow's Feet", 'Dark Spot', 'Dullness', 'Loss of Firmness', 'Loss of Elasticity',
  'Dryness', 'Unwanted Hair', 'Breakouts', 'Love Handles', 'Redness', 'Winter-Bod', 'Fatigue', 'Low Energy', 'Brainfog', 'Hangover', 'Weak Strands', 'Weak Immunity', 'Burnout', 'Slow recovery', 'Low Stamina',
];

const weveGotDetails = [
  'Line & Wrinkle Relaxer','Mesotherapy','Skin Booster','Dermal Filter','Chemical Peel',
  'Laser Hair Removal','Lipo Sculpt','Lipo Zero','Hydrafacial', 'Boost Hub IV Drip', 'Energy Hub IV Drip', 'NAD+ IV Drip', 'Post Party IV Drip', 'Hairfall defense IV Drip', 'Immune Hub IV Drip', 'Supreme IV Drip', 'Fitness Hub IV Drip', 'Performance Support IV Drip',
];

export default function HomeClient() {
  const [offers, setOffers] = useState([]);
  const [selectedGot, setSelectedGot] = useState(gotDetails[0]);
  const [got, setGot] = useState(gotDetails.filter((e) => e !== selectedGot));
  const [showGotDropdown, setShowGotDropdown] = useState(false);

  const [selectedWeveGot, setSelectedWeveGot] = useState(weveGotDetails[0]);
  const [weveGot, setWeveGot] = useState(weveGotDetails.filter((e) => e !== selectedWeveGot));
  const [showWeveGotDropdown, setShowWeveGotDropdown] = useState(false);

  const carouselRef = useRef();
  const gotDropdownRef = useRef(null);
  const weveDropdownRef = useRef(null);

  // map filenames to /public paths
  useEffect(() => {
    const updatedOffer = specialOffersData.specialOffersData.map((offer) => ({
      ...offer,
      img: `/assets/img/offer/${offer.img}`,
    }));
    setOffers(updatedOffer);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * gotDetails.length);
      setSelectedGot(gotDetails[randomIndex]);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setGot(gotDetails.filter((e) => e !== selectedGot));
  }, [selectedGot]);

  useEffect(() => {
    setWeveGot(weveGotDetails.filter((e) => e !== selectedWeveGot));
  }, [selectedWeveGot]);

  useEffect(() => {
    selectedGot === gotDetails[0] ? setSelectedWeveGot(weveGotDetails[0])
    : selectedGot === gotDetails[1] ? setSelectedWeveGot(weveGotDetails[1])
    : selectedGot === gotDetails[2] ? setSelectedWeveGot(weveGotDetails[2])
    : selectedGot === gotDetails[3] ? setSelectedWeveGot(weveGotDetails[3])
    : selectedGot === gotDetails[4] ? setSelectedWeveGot(weveGotDetails[3])
    : selectedGot === gotDetails[5] ? setSelectedWeveGot(weveGotDetails[8])
    : selectedGot === gotDetails[6] ? setSelectedWeveGot(weveGotDetails[5])
    : selectedGot === gotDetails[7] ? setSelectedWeveGot(weveGotDetails[4])
    : selectedGot === gotDetails[8] ? setSelectedWeveGot(weveGotDetails[6])
    : selectedGot === gotDetails[9] ? setSelectedWeveGot(weveGotDetails[1])
    : selectedGot === gotDetails[10] ? setSelectedWeveGot(weveGotDetails[7])
    : selectedGot === gotDetails[11] ? setSelectedWeveGot(weveGotDetails[9])
    : selectedGot === gotDetails[12] ? setSelectedWeveGot(weveGotDetails[10])
    : selectedGot === gotDetails[13] ? setSelectedWeveGot(weveGotDetails[11])
    : selectedGot === gotDetails[14] ? setSelectedWeveGot(weveGotDetails[12])
    : selectedGot === gotDetails[15] ? setSelectedWeveGot(weveGotDetails[13])
    : selectedGot === gotDetails[16] ? setSelectedWeveGot(weveGotDetails[14])
    : selectedGot === gotDetails[17] ? setSelectedWeveGot(weveGotDetails[15])
    : selectedGot === gotDetails[18] ? setSelectedWeveGot(weveGotDetails[16])
    : selectedGot === gotDetails[19] ? setSelectedWeveGot(weveGotDetails[17])
    : null;
  }, [selectedGot]);

  useOutsideClick(gotDropdownRef, () => setShowGotDropdown(false));
  useOutsideClick(weveDropdownRef, () => setShowWeveGotDropdown(false));

  const goNext = () => carouselRef.current?.next?.();
  const goPrev = () => carouselRef.current?.previous?.();

  return (
    <>
      {/* <PromoPopup /> */}

      {/* Hero */}
      <div className="home-hero">
        <video className="hero-video" autoPlay muted playsInline loop>
          <source src="/assets/img/home/home-vid2.mov" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-txt-wrapper">
          <div className="spin-wrap">
            <img className="spinner-text" src="/assets/img/home/h1-2.png" alt="spinner" />
          </div>
          <div className="btn-wrap">
            <Link href="/iv-therapy/drips" className="btn btn-light">IV Drips</Link>
            <Link href="/aesthetic" className="btn btn-light">Aesthetic</Link>
            <Link href="/peptides" className="btn btn-light">Peptides</Link>
          </div>
          <div className="locations">
            <span>DIFC</span> | <span>PALM JUMEIRAH</span> | <span>At Home IV Drips</span>
          </div>
          <div className="hero-bar-wrap"><div className="hero-bar" /></div>
        </div>
      </div>

      {/* Welcome */}
      <div className="home-welcome">
        <div className="container">
          <div className="welcome-wrapper">
            <h1>Begin Your Journey into Wellness, Longevity, and Beauty</h1>
            <p>IV Wellness Lounge is Dubai’s private destination for elevated wellness, longevity-focused care, and refined beauty. Created as a boutique sanctuary, our space blends medical science with understated luxury, offering an experience that feels restorative, personal, and discreet.</p>
            <p>At the core of everything we do are our signature IV drips. Each formulation is carefully designed to support cellular wellness, enhance longevity, and restore balance from within. Whether the goal is sustained energy, improved vitality, or radiant skin, our IV drips work at a deeper level to nourish the body and elevate overall wellbeing.</p>
            <p>Our approach to beauty is holistic. From advanced aesthetic treatments to personalized IV drips, every service is guided by medical expertise and delivered in an environment designed for calm and comfort. Our team of experienced healthcare professionals ensures each treatment supports both inner health and visible refinement.</p>
            <p>For those who value privacy and flexibility, our IV drips at home service brings the same level of care into your personal space. Enjoy customized IV drips for hydration, recovery, longevity, or glow, delivered with the discretion and attention of a five-star experience.</p>
            <p>IV Wellness Lounge is where wellness, longevity, beauty, and IV drips come together seamlessly. Discover a more thoughtful standard of luxury wellness in Dubai, in our lounge or in the comfort of your home.</p>
            <div className="btn-wrap">
              <Link href="/about-us" className="btn">About US</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="home-steps" id="specialoffers">
        <div className="container">
          <div className="home-step-wrapper">
            <div className="heading-wrap"><h1>Special Offers</h1></div>

            <Carousel
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                showDots={false}
                pauseOnHover
                arrows   // built-in arrows
              >
                {offers.map((x, i) => (
                  <div className="card" key={i}>
                    <SpecialOfferCard
                      img={x.img}
                      title={x.title}
                      bookingBtn={x.bookingBtn}
                      descBrif={x.desc.brif}
                      descUl={x.desc.ul}
                      newBadge={x.newBadge}
                    />
                  </div>
                ))}
              </Carousel>

          </div>
        </div>
      </div>

      {/* <h1 className="sanctuarytxt">Step into Our Sanctuary</h1>
      <div className="logosection sanctuaryimg">
          <div className="left">
                <div className="as-seen">
                  <div className="container">
                    <div className="as-seen-wrapper">
                      <h1>DIFC</h1>
                      <LogoMarquee icons={difcimg} links={""} speed={100} minItems={20} />
                    </div>
                  </div>
                </div>
          </div>
          <div className="right">
                <div className="as-seen">
                  <div className="container">
                    <div className="as-seen-wrapper">
                      <h1>Palm Jumeirah</h1>
                      <LogoMarquee icons={palmimg} links={""} speed={100} minItems={20} />
                    </div>
                  </div>
                </div>
          </div>
      </div> */}

      {/* Winter-bod */}
      <div className="winter-bod">
        <div className="container">
          <div className="winter-bod-wrapper">
            <div className="left">
              <div className="spin-wrap">
                <img className="spinner-text" src="/assets/img/home/spinner.png" alt="spinner" />
                <img className="small-logo" src="/assets/img/logo/small-logo.png" alt="small logo" />
              </div>
            </div>

            <div className="right">
              <div>
                <div ref={gotDropdownRef}>
                  <h1>
                    <span>Got</span>
                    <div
                      onClick={() => setShowGotDropdown(!showGotDropdown)}
                      className="select-head"
                    >
                      {selectedGot}
                      <span>
                        <AiFillCaretDown />
                      </span>
                    </div>
                    <span>?</span>
                    <ul className={`${showGotDropdown && "show"}`}>
                      {got.map((x, index) => (
                        <li
                          onClick={() => {
                            setShowGotDropdown(false);
                            setSelectedGot(x);
                          }}
                          key={index}
                        >
                          {x}
                        </li>
                      ))}
                    </ul>
                  </h1>
                </div>
                <div ref={weveDropdownRef}>
                  <h1 className="mt-4 mt-lg-3">
                    <span>We've got</span>
                    <div
                      onClick={() =>
                        setShowWeveGotDropdown(!showWeveGotDropdown)
                      }
                      className="select-head"
                    >
                      {selectedWeveGot}
                      <span>
                        <AiFillCaretDown />
                      </span>
                    </div>
                    <ul className={`${showWeveGotDropdown && "weveShow"}`}>
                      {weveGot.map((x, index) => (
                        <li
                          onClick={() => {
                            setShowWeveGotDropdown(false);
                            setSelectedGot(
                              x === weveGotDetails[0]
                                ? gotDetails[0]
                                : x === weveGotDetails[1]
                                ? gotDetails[1]
                                : x === weveGotDetails[2]
                                ? gotDetails[2]
                                : x === weveGotDetails[3]
                                ? gotDetails[3]
                                : x === weveGotDetails[4]
                                ? gotDetails[5]
                                : x === weveGotDetails[5]
                                ? gotDetails[6]
                                : x === weveGotDetails[6]
                                ? gotDetails[8]
                                : x === weveGotDetails[7]
                                ? gotDetails[10]
                                : x === weveGotDetails[9]
                                ? gotDetails[11]
                                : x === weveGotDetails[10]
                                ? gotDetails[12]
                                : x === weveGotDetails[11]
                                ? gotDetails[13]
                                : x === weveGotDetails[12]
                                ? gotDetails[14]
                                : x === weveGotDetails[13]
                                ? gotDetails[15]
                                : x === weveGotDetails[14]
                                ? gotDetails[16]
                                : x === weveGotDetails[15]
                                ? gotDetails[17]
                                : x === weveGotDetails[16]
                                ? gotDetails[18]
                                : x === weveGotDetails[17]
                                ? gotDetails[19]
                                : null
                            );
                          }}
                          key={index}
                        >
                          {x}
                        </li>
                      ))}
                    </ul>
                  </h1>
                </div>
              </div>
              <div className="btn-wrap">
                <Link href="/aesthetic" className="btn">Explore more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
