'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';


import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const arrowTopRight = '/assets/icons/arrow-top-right.png';
const logo = '/assets/img/logo/logo-white.png';

const seenIcons = [
  '/assets/img/home/yahoo.png',
  '/assets/img/home/KT.png',
  '/assets/img/home/gulf-times.png',
  '/assets/img/home/vogue-arabia.png',
];

const partnerIcons = [
  '/assets/img/home/emirates-platinum.jpg',
  '/assets/img/home/emirates-group.png',
  '/assets/img/home/dewa.png',
  '/assets/img/home/fazaa-logo.png',
  '/assets/img/home/NBD-logo.png',
  '/assets/img/home/HSBC-Logo.png',
];

const seenLinks = [
  'https://finance.yahoo.com/news/iv-wellness-lounge-announces-luxurious-011500479.html',
  'https://www.khaleejtimes.com/kt-network/iv-wellness-lounge-a-symphony-of-luxurious-wellness-in-dubai',
  'https://www.gulf-times.com/article/670101/qatar/iv-wellness-lounge-unveiling-dubais-premier-wellness-oasis',
  'https://www.voguearabia.com/article/the-best-time-to-get-a-mini-facelift'
];

const partnerLinks = [
  '',
  '',
  '',
  'https://www.fazaa.ae/offers/view/iv-wellness-lounge',
  'https://www.emiratesnbd.com/en/deals/live-well/iv-wellness-lounge-clinic?source=ivhub.com',
  'https://ivhub.com/hsbc'
];


const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const useIsMobile = (breakpoint = 767) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
};

const LogoCarouselSmooth = ({
  icons = [],
  links = [],
  itemsPerSlide = 3,
  autoPlay = true,
  interval = 3000,
}) => {
  const isMobile = useIsMobile();
  const perSlide = isMobile ? 1 : itemsPerSlide;

  const slides = useMemo(() => chunk(icons, perSlide), [icons, perSlide]);
  const total = slides.length;

  if (total <= 1) {
    return (
      <div className="logo-carousel">
        <div className="carousel-viewport">
          <div className="carousel-track no-anim" style={{ transform: "translateX(0%)" }}>
            <div className="carousel-slide">
              {(slides[0] || []).map((src, i) => {
                const href = links?.[i] || "#";
                return (
                  <div className="img-wrap" key={i}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <img src={src} alt="logo" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const loopSlides = [slides[total - 1], ...slides, slides[0]];

  const [index, setIndex] = useState(1);
  const [animating, setAnimating] = useState(true);
  const trackRef = useRef(null);

  const next = () => setIndex((p) => p + 1);
  const prev = () => setIndex((p) => p - 1);

  useEffect(() => {
    if (!autoPlay || total <= 1) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [autoPlay, interval, total]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onEnd = () => {
      if (index === total + 1) {
        setAnimating(false);
        setIndex(1);
      }
      if (index === 0) {
        setAnimating(false);
        setIndex(total);
      }
    };

    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [index, total]);

  useEffect(() => {
    if (!animating) {
      const r = requestAnimationFrame(() => setAnimating(true));
      return () => cancelAnimationFrame(r);
    }
  }, [animating]);

  return (
    <div className="logo-carousel">
      <button className="carousel-btn prev" onClick={prev} aria-label="Previous">
        ‹
      </button>

      <div className="carousel-viewport">
        <div
          ref={trackRef}
          className={`carousel-track ${animating ? "anim" : "no-anim"}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {loopSlides.map((slideGroup, slidePos) => {
            let realSlide = slidePos - 1;
            if (slidePos === 0) realSlide = total - 1;
            if (slidePos === total + 1) realSlide = 0;

            const start = realSlide * perSlide;

            return (
              <div className="carousel-slide" key={slidePos}>
                {slideGroup.map((src, i) => {
                  const realIndex = start + i;
                  const href = links?.[realIndex] || "#";
                  return (
                    <div className="img-wrap" key={`${slidePos}-${i}`}>
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <img src={src} alt="logo" />
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <button className="carousel-btn next" onClick={next} aria-label="Next">
        ›
      </button>
    </div>
  );
};


const Footer = () => {
  const socialIcons = [
    { title: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/ivwellnessdifc' },
    { title: 'Linkedin',  icon: <FaLinkedin />,  link: 'https://www.linkedin.com/company/iv-hub-wellness-lounge' },
    // { title: 'Youtube', icon: <FaYoutube />, link: 'https://www.youtube.com/@IVWellnessLoungeClinic' },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Drips',        path: '/iv-therapy/drips' },
        { label: 'Boosters',     path: '/iv-therapy/boosters' },
        { label: 'Aesthetics',   path: '/aesthetic' },
        { label: 'News',         path: '/blogs' },
        { label: 'Business Enquiries', path: '/contact-us' },
        { label: 'Careers', path: '/career' },
        { label: 'Health Checkups', path: 'https://health-checkups.ivhub.com/' },
      ],
    },
    {
      title: 'Explore',
      links: [
        { label: 'Who We Are',          path: '/about-us' },
        { label: 'IV Packages',         path: '/packages' },
        { label: 'Cancellation Policy', path: '/cancellation-policy' },
        { label: 'Terms & Conditions',  path: '/terms-conditions' },
        { label: 'Have Questions?',     path: '/contact-us' },
        { label: 'Privacy Policy',      path: '/privacy-policy' },
        { label: 'Sitemap',             path: '/sitemap' },
      ],
    },
  ];

  const renderLinks = (links) =>
    links.map(({ label, path }) => (
      <li key={label}>
        {/* Internal links use Next.js Link with href */}
        <Link href={path}>{label.toUpperCase()}</Link>
      </li>
    ));

  return (
    <>
      {/* Footer Top Section */}
      {/* <div className="footer-top">
        <div className="container">
          <div className="top-wrapper">
            <div className="left">
              <h1>
                Not Sure- <br />
                Which IV Drip or Treatment is Right For You?
              </h1>
              <p>
                Talk with one of our expert providers to ask questions and
                determine which IV Drip or Treatment is right for you.
              </p>
            </div>
            <div className="right">
              <div className="container">
                <a
                  href="https://wa.me/97180048482"
                  className="btn btn-big"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Schedule <br /> A Consultation
                  </span>
                  <img src={arrowTopRight} alt="Arrow Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="logosection">
          <div className="left">
                {/* As Seen */}
                <div className="as-seen">
                  <div className="container">
                    <div className="as-seen-wrapper">
                      <h1>As Seen On</h1>
                      <LogoCarouselSmooth
  icons={seenIcons}
  links={seenLinks}
  itemsPerSlide={3}
  autoPlay={true}
  interval={3000}
/>
                    </div>
                  </div>
                </div>
          </div>
          <div className="right">
                {/* partners */}
                <div className="as-seen">
                  <div className="container">
                    <div className="as-seen-wrapper">
                      <h1>Our Partners</h1>
                      <LogoCarouselSmooth
  icons={partnerIcons}
  links={partnerLinks}
  itemsPerSlide={3}
  autoPlay={true}
  interval={3000}
/>
                    </div>
                  </div>
                </div>
          </div>
      </div>

      {/* Elfsight */}
      <div className="testimonial">
        <div className="container">
          <div className="elfsight-app-f8470afc-7998-4690-b029-8b07167ad89c" data-elfsight-app-lazy />
        </div>
      </div>

      {/* Footer Bottom Section */}
      <footer className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper">
            {/* Left Column */}
            <div className="footer-wrapper__col social-wrap">
              <img src={logo} alt="IV Wellness Lounge" />
              <div className="btn-wrap footerlocations">
                <Link href="https://share.google/z7Y2tm9a9Ln3ly88N" className="btn btn-light">DIFC <svg
                    className="external-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg></Link>
                <Link href="https://share.google/HWI0lHKteP0dIP5mF" className="btn btn-light">PALM
                <svg
                  className="external-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg></Link>
              </div>
              <a href="tel:+97180048482">+971 800 48482</a>
              <p>Ⓒ IV Wellness Lounge Clinic Limited. {new Date().getFullYear()}. All rights reserved.</p>
              <p>MOHAP License: DITAYQOL-210524</p>
            </div>

            {/* Dynamic Footer Links */}
            {footerLinks.map(({ title, links }) => (
              <div key={title} className="footer-wrapper__col">
                <ul>{renderLinks(links)}</ul>
              </div>
            ))}

            {/* Follow Us */}
            <div className="footer-wrapper__col footer-wrapper__social">
              <div className="wrap">
                <p>Follow Us</p>
                {socialIcons.map((x) => (
                  <a
                    key={x.title}
                    href={x.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={x.title}
                  >
                    <span>{x.icon}</span>
                    {x.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;