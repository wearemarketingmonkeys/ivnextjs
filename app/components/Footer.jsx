'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const arrowTopRight = '/assets/icons/arrow-top-right.png';
const logo = '/assets/img/logo/logo-white.png';

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
      <div className="footer-top">
        <div className="container">
          <div className="top-wrapper">
            <div className="left">
              <h1>
                Not Sure- <br />
                Which Service is Right For You?
              </h1>
              <p>
                Talk with one of our expert providers to ask questions and
                determine what treatment is right for you.
              </p>
            </div>
            <div className="right">
              <div className="container">
                {/* External links use <a href> */}
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
      </div>

      {/* Footer Bottom Section */}
      <footer className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper">
            {/* Left Column */}
            <div className="footer-wrapper__col social-wrap">
              <img src={logo} alt="IV Wellness Lounge" />
              <p>GATE DISTRICT 2, DIFC, DUBAI.</p>
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