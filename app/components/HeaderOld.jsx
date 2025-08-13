import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo/logo.png";
import mblLogo from "../assets/img/logo/small-logo.png";
import waIcon from "../assets/icons/wa.png";
import hamburger from "../assets/icons/hamburger.png";
import MobileMenu from "./MobileMenu";
import Modal from "react-minimal-modal";
import caretBlack from "../assets/icons/caret-black.png";
import { GoArrowUpRight } from "react-icons/go";
import wellnessImg from "../assets/img/iv-therapy/wellness.webp";
import energyBoosterImg from "../assets/img/iv-therapy/energy-boosters.webp";

const menuItems = [
  {
    label: "The Clinic",
    submenu: [
      { label: "ABOUT US", to: "/about-us" },
      { label: "OFFERS", to: "/explore-us/offers" },
      { label: "PACKAGES", to: "/packages" },
      { label: "Blogs", to: "/blogs" },
      { label: "CONTACT US", to: "/contact-us" },
    ],
  },
  {
    label: "AESTHETIC",
    to: "/aesthetic",
    submenu: [
      { label: "Mesotherapy", to: "/aesthetic/mesotherapy" },
      { label: "HydraFacial", to: "/aesthetic/hydra-facial" },
      { label: "Chemical Peel", to: "/aesthetic/chemical-peel" },
      { label: "Anti Aging", to: "/aesthetic/anti-aging" },
      { label: "Dermal Fillers", to: "/aesthetic/dermal-fillers" },
      { label: "Collagen Stimulation", to: "/aesthetic/collagen-stimulation" },
      { label: "Skin Boosters", to: "/aesthetic/skin-boosters" },
      { label: "Lipo Sculpt", to: "/aesthetic/lipo-sculpt" },
      { label: "Collagen Threads", to: "/aesthetic/collagen-threads" },
      { label: "Body Contouring", to: "/aesthetic/body-contouring" },
    ],
  },
  { label: "IV Therapy", modal: true },
  { label: "Laser hair removal", to: "/laser-hair-removal" },
  { label: "Morpheus8", to: "/morpheus" },
];

const ivTherapyItems = [
  {
    img: wellnessImg,
    drips: 23,
    title: "Wellness Drips",
    btnTxt: "Explore Drips",
    btnUrl: "/iv-therapy/drips",
    items: [
      { dripsName: "Beauty Hub", dripsUrl: "/iv-therapy/drips/beauty-hub" },
      { dripsName: "Boost Hub", dripsUrl: "/iv-therapy/drips/boost-hub" },
      { dripsName: "Cleanse Hub", dripsUrl: "/iv-therapy/drips/cleanse-hub" },
      { dripsName: "Enerygy Hub", dripsUrl: "/iv-therapy/drips/enerygy-hub" },
      { dripsName: "Fitness Hub", dripsUrl: "/iv-therapy/drips/fitness-hub" },
      {
        dripsName: "Fitness Hub Express",
        dripsUrl: "/iv-therapy/drips/fitness-hub-express",
      },
      { dripsName: "Glow Hub", dripsUrl: "/iv-therapy/drips/glow-hub" },
      {
        dripsName: "Glow Hub Express",
        dripsUrl: "/iv-therapy/drips/glow-hub-express",
      },
      {
        dripsName: "Hairfall Defense",
        dripsUrl: "/iv-therapy/drips/hairfall-defense",
      },
      { dripsName: "Immune Hub", dripsUrl: "/iv-therapy/drips/immune-hub" },
      {
        dripsName: "Women's Health Hub",
        dripsUrl: "/iv-therapy/drips/womens-health-hub",
      },
      { dripsName: "Youth Hub", dripsUrl: "/iv-therapy/drips/youth-hub" },
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
      {
        dripsName: "Hydration Hub Express",
        dripsUrl: "/iv-therapy/drips/hydration-hub-express",
      },
      { dripsName: "NAD+ 100mg", dripsUrl: "/iv-therapy/drips/nad-plus" },
      { dripsName: "NAD+ 250mg", dripsUrl: "/iv-therapy/drips/nad-plus" },
      { dripsName: "NAD+ 500mg", dripsUrl: "/iv-therapy/drips/nad-plus" },
    ],
  },
  {
    img: energyBoosterImg,
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

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <Link to="/">
                <img src={logo} alt="logo" className="desk-logo" />
                <img src={mblLogo} alt="logo" className="mbl-logo" />
              </Link>
              <div className="header-right">
                <ul className="menu-wrap">
                  {menuItems.map((item, index) => (
                    <li className="menu-item" key={index}>
                      {item.submenu ? (
                        <>
                          <Link to={item.to} className="menu-single-item">
                            <span>{item.label}</span>
                            <img src={caretBlack} alt="caret" />
                          </Link>
                          <div className="submenu-wrap">
                            <ul className="submenu">
                              {item.submenu.map((sub, subIndex) => (
                                <li key={subIndex}>
                                  <Link to={sub.to}>{sub.label}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : item.modal ? (
                        <div
                          className="menu-single-item"
                          onClick={() => setIsOpen(true)}
                        >
                          <span>{item.label}</span>
                        </div>
                      ) : (
                        <Link to={item.to}>{item.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="phone-wrap">
                  <NavLink className="tel" to={"tel:+97180048482"}>
                  +971 800 48482
                  </NavLink>
                  <NavLink
                    className="whatsapp"
                    to={"https://wa.me/97180048482"}
                  >
                    <img src={waIcon} className="wa-icon" alt="WhatsApp" />
                  </NavLink>
                </div>
              </div>
              <button
                className="hamburger-btn"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <img src={hamburger} alt="hamburger" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mbl-header">
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
      <Modal
        open={isOpen}
        onOpenChange={setIsOpen}
        position="top"
        animation="slide"
        blur
        width={"100vw"}
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
                <Link onClick={() => setIsOpen(false)} to={"/iv-therapy/drips"}>
                  <span>Wellness Drips</span>
                  <GoArrowUpRight />
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  to={"/iv-therapy/boosters"}
                >
                  <span>Energy Boosters</span>
                  <GoArrowUpRight />
                </Link>
              </div>
            </div>

            {ivTherapyItems.map((x, index) => (
              <div className="drips-items-wrap" key={index}>
                <div className="left">
                  <img src={x.img} alt="" />
                </div>
                <div className="right">
                  <div className="drips-qnt">{x.drips} Drips</div>
                  <div className="drips-name-wrap">
                    <h2>{x.title}</h2>
                    <div className="btn-wrap">
                      <Link
                        onClick={() => setIsOpen(false)}
                        className="btn"
                        to={x.btnUrl}
                      >
                        {x.btnTxt}
                      </Link>
                    </div>
                  </div>

                  {x.desc && <p>{x.desc}</p>}

                  <div className="drips-items">
                    {x.items.map((y, yIndex) => (
                      <Link
                        onClick={() => setIsOpen(false)}
                        to={y.dripsUrl}
                        key={yIndex}
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
};

export default Header;
