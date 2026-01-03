'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Modal from 'react-minimal-modal';
import { GoArrowUpRight } from 'react-icons/go';

import MobileMenu from './MobileMenu';
import { menuItems } from '../mocks/menuItems';

const paths = {
  logo: "/assets/img/logo/logo_white.png",       // normal (non-sticky)
  logoBlack: "/assets/img/logo/logo.png",  // sticky
  mblLogo: '/assets/img/logo/logo.png',
  waIcon: '/assets/icons/wa.png',
  hamburger: '/assets/icons/hamburger.png',
  caretBlack: '/assets/icons/caret-black.png',
  caretWhite: '/assets/icons/caret-white.png',
  wellnessImg: '/assets/img/iv-therapy/ivtherapymenu2.webp',
  energyBoosterImg: '/assets/img/iv-therapy/ivtherapymenu1.webp',
};

// helper to safely extract a URL from a menu item
function hrefOf(x) {
  return x?.to ?? x?.href ?? x?.dripsUrl ?? null;
}

const ivTherapyItems = [
  {
    img: paths.wellnessImg,
    drips: 25,
    title: "Wellness Drips",
    btnTxt: "Explore Drips",
    btnUrl: "/iv-therapy/drips",
    items: [
      { dripsName: "Beauty Hub", dripsUrl: "/iv-therapy/drips/beauty-hub" },
      { dripsName: "Boost Hub", dripsUrl: "/iv-therapy/drips/boost-hub" },
      { dripsName: "Cleanse Hub", dripsUrl: "/iv-therapy/drips/cleanse-hub" },
      { dripsName: "Energy Hub", dripsUrl: "/iv-therapy/drips/energy-hub" },
      { dripsName: "Fitness Hub", dripsUrl: "/iv-therapy/drips/fitness-hub" },
      // { dripsName: "Ramadan Hub", dripsUrl: "/iv-therapy/drips/ramadan-hub" },
      { dripsName: "Glow Hub", dripsUrl: "/iv-therapy/drips/glow-hub" },
      {
        dripsName: "Hairfall Defense",
        dripsUrl: "/iv-therapy/drips/hairfall-defense",
      },
      { dripsName: "Immune Hub", dripsUrl: "/iv-therapy/drips/immune-hub" },
      {
        dripsName: "Women's Health Hub",
        dripsUrl: "/iv-therapy/drips/womens-health-hub",
      },
      // { dripsName: "Youth Hub", dripsUrl: "/iv-therapy/drips/youth-hub" },
      { dripsName: "IV Wellness Supreme", dripsUrl: "/iv-therapy/drips/iv-wellness-supreme" },
      { dripsName: "Zeus Drip", dripsUrl: "/iv-therapy/drips/zeus-drip" },
      {
        dripsName: "Queen Victoria Drip",
        dripsUrl: "/iv-therapy/drips/queen-victoria-drip",
      },
      {
        dripsName: "Chelation Therapy",
        dripsUrl: "/iv-therapy/drips/chelation-therapy",
      },
      {
        dripsName: "Performance support",
        dripsUrl: "/iv-therapy/drips/performance-support",
      },
      {
        dripsName: "Royal Cleanse",
        dripsUrl: "/iv-therapy/drips/royal-cleanse",
      },
      {
        dripsName: "Recovery Hub (Anti-stress",
        dripsUrl: "/iv-therapy/drips/recovery-hub-anti-stress",
      },
      { dripsName: "Post Party Hub", dripsUrl: "/iv-therapy/drips/hangover-iv-drip" },
      // { dripsName: "Hydration Hub Express", dripsUrl: "/iv-therapy/drips/hydration-hub-express"},
      { dripsName: "NAD+", dripsUrl: "/iv-therapy/drips/nad-plus" },
      { dripsName: "Methylene Blue IV Drip", dripsUrl: "/iv-therapy/drips/methylene-blue-IV-drip" },
    ],
  },
  {
    img: paths.energyBoosterImg,
    drips: 5,
    title: "Energy Boosters",
    btnTxt: "Explore Boosters",
    btnUrl: "/iv-therapy/boosters",
    desc: "Give your health an instant upgrade with our targeted IV Boosters. These quick, nutrient-rich infusions are designed to provide rapid relief and support, helping you feel your best in no time. Perfect for an on-the-go energy lift!",
    items: [
      {
        dripsName: "Vitamin C Booster",
        dripsUrl: "/iv-therapy/boosters#vitaminCBooster",
      },
      {
        dripsName: "Super B's Booster",
        dripsUrl: "/iv-therapy/boosters#superBBooster",
      },
      {
        dripsName: "Co-Enzyme Q10 Booster",
        dripsUrl: "/iv-therapy/boosters#coq10Booster",
      },
      {
        dripsName: "MIC Booster",
        dripsUrl: "/iv-therapy/boosters#micBooster",
      },
      {
        dripsName: "Vitamin D Booster",
        dripsUrl: "/iv-therapy/boosters#vitamindBooster",
      },
    ],
  },
];

export default function Header() {

  const pathname = usePathname();

  const isHome = pathname === "/" || pathname === "/peptides";

  const [isConcernsOpen, setConcernsOpen] = useState(false);
  const megaRef = useRef(null);

  // Close whenever the route changes
  useEffect(() => {
    setConcernsOpen(false);
  }, [pathname]);

  // Close on outside click / Esc
  useEffect(() => {
    if (!isConcernsOpen) return;
    const onKey = (e) => e.key === 'Escape' && setConcernsOpen(false);
    const onClickOutside = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setConcernsOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [isConcernsOpen]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // simple modal flag
  const [isSticky, setIsSticky] = useState(false);
  const [menuClosed, setMenuClosed] = useState(false);

  const handleSubmenuClick = () => {
    setMenuClosed(true);
    requestAnimationFrame(() => setTimeout(() => setMenuClosed(false), 100));
  };

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/*<div className="top-nav text-center py-2 bg-dark text-light">
        <Link href="/iv-therapy/drips" className="text-light">
          In-Clinic & At-Home IV Therapy – Wellness your way, anytime, anywhere.
        </Link>
      </div>*/}

      <div
        className={`header ${isSticky ? 'sticky' : ''} ${isHome ? 'home' : ''} ${menuClosed ? 'hide-submenu' : ''}`}
        onMouseLeave={() => setMenuClosed(false)}
      >
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(true)}>
                <img src={paths.hamburger} alt="hamburger" />
              </button>

              <Link href="/" className="logo-wrap" aria-label="Go to homepage">
                <img
                  src={isHome ? (isSticky ? paths.logoBlack : paths.logo) : paths.logoBlack}
                  alt="logo"
                  className="desk-logo"
                />
                <img
                  src={isHome ? (isSticky ? paths.logoBlack : paths.logo) : paths.logoBlack}
                  alt="logo"
                  className="mbl-logo"
                />
              </Link>


              <div className="header-right">
                <ul className="menu-wrap">
                  {menuItems.map((item, index) => {
                    // item with modal (no link)
                    if (item?.modal) {
                      return (
                        <li className="menu-item" key={index}>
                          <span className="menu-single-item" onClick={() => setIsOpen(true)}>
                            <span>{item.label}</span>
                          </span>
                        </li>
                      );
                    }

                    // item with nested submenuWrapper
                    if (Array.isArray(item?.submenuWrapper)) {
                      return (
                        <li className="menu-item" key={index}>
                          <span className="menu-single-item" onClick={handleSubmenuClick}>
                            <span>{item.label}</span>
                            <img src={isHome ? (isSticky ? paths.caretBlack : paths.caretWhite) : paths.caretBlack} alt="caret"/>
                          </span>

                          <div className="submenu-wrapper">
                            {item.submenuWrapper.map((group, gIdx) => (
                              <div className="submenu-wrap" key={gIdx}>
                                {group.submenuWrap?.map((wrap, wIdx) => (
                                  <div key={wIdx}>
                                    <div className="submenu-title">{wrap.submenuTitle}</div>
                                    <ul className="submenu">
                                      {(wrap.submenu ?? []).map((sub, sIdx) => {
                                        const href = hrefOf(sub);
                                        if (!href) {
                                          console.warn('[Header submenu] Missing href for item:', sub);
                                          return null;
                                        }
                                        const text = sub.label ?? sub.dripsName ?? 'Untitled';
                                        return (
                                          <li key={sIdx}>
                                            <Link href={href} onClick={() => setMenuClosed(true)}>
                                              {text}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </li>
                      );
                    }

                    // plain link item
                    const href = hrefOf(item);
                    if (!href) {
                      // render non-clickable label if no URL
                      console.warn('[Header] Missing href for item:', item);
                      return (
                        <li className="menu-item" key={index}>
                          <span className="menu-single-item">{item.label ?? 'Untitled'}</span>
                        </li>
                      );
                    }
                    return (
                      <li className="menu-item" key={index}>
                        <Link className="menu-single-item" href={href}>
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="phone-wrap">
                  <a href="https://book.ivhub.com/cart.php" className="btn" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                  <a className="whatsapp" href="https://wa.me/97180048482" target="_blank" rel="noopener noreferrer">
                    <img src={paths.waIcon} className="wa-icon" alt="WhatsApp" />
                  </a>
                </div>
              </div>

              <div className="btn-wrap">
                <a href="https://book.ivhub.com/cart.php" className="btn" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="mbl-header">
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </div>

      <Modal
      open={isOpen}
      onOpenChange={setIsOpen}
      position="top"
      animation="slide"
      blur
      width="100vw"
      wrapperClassName="header-popup"
      title="Iv therapy"
    >
      <div className="container">
        <div className="iv-popup-wrap">
          <div className="top">
            <h1>
              Discover the Power of <br /> Personalized IV Therapy
            </h1>

            <div className="button-wrap">
              <Link href="/iv-therapy/drips" onClick={() => setIsOpen(false)}>
                <span>Wellness Drips</span>
                <GoArrowUpRight />
              </Link>

              <Link href="/iv-therapy/boosters" onClick={() => setIsOpen(false)}>
                <span>Energy Boosters</span>
                <GoArrowUpRight />
              </Link>
            </div>
          </div>

          {ivTherapyItems.map((x, index) => (
            <div className="drips-items-wrap" key={index}>
              <div className="left">
                <img src={x.img} alt={x.title || 'IV Therapy'} />
              </div>

              <div className="right">
                <div className="drips-qnt">{x.drips} Drips</div>

                <div className="drips-name-wrap">
                  <h2>{x.title}</h2>
                  <div className="btn-wrap">
                    <Link
                      href={x.btnUrl || '#'}
                      className="btn"
                      onClick={() => setIsOpen(false)}
                    >
                      {x.btnTxt}
                    </Link>
                  </div>
                </div>

                {x.desc && <p>{x.desc}</p>}

                <div className="drips-items">
                  {(x.items || []).map((y, yIndex) => (
                    <Link
                      key={yIndex}
                      href={y.dripsUrl || '#'}
                      onClick={() => setIsOpen(false)}
                    >
                      {y.dripsName}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
    </>
  );
}