import React, { useState } from "react";
import { Link, Links } from "react-router-dom";
import logo from "../assets/img/logo/logo.svg";
import caret from "../assets/icons/caret.png";
import home from "../assets/icons/home.png";
import exploreUs from "../assets/icons/explore.png";
import aesthetic from "../assets/icons/aesthetic.png";
import ivTherapy from "../assets/icons/iv-therapy.png";
import wellnessDrip from "../assets/icons/wellness-drips.png";
import energyBooster from "../assets/icons/energy-booster.png";

const MobileMenu = ({ isOpen, onClose }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (menuItem) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menuItem]: !prev[menuItem],
    }));
  };

  return (
    <>
      <div
        className={`mobile-menu-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
        <nav className="mobile-menu-nav">
          <ul>
            <li className="mobile-menu-item">
              <Link to="/" onClick={onClose}>
                <img src={home} alt="home" />
                <span>Home</span>
              </Link>
            </li>
            <li className="mobile-menu-item">
              <div
                className="menu-title"
                onClick={() => toggleSubmenu("ivTherapy")}
              >
                <img src={ivTherapy} className="left-icon" alt="iv therapy" />
                <span>IV THERAPY</span>
                <span
                  className={`arrow ${openSubmenus.ivTherapy ? "up" : "down"}`}
                >
                  <img src={caret} alt="caret" />
                </span>
              </div>
              <ul
                className={`mobile-submenu ${
                  openSubmenus.ivTherapy ? "open" : ""
                }`}
              >
                <li>
                  <Link to="/iv-therapy/drips" onClick={onClose}>
                    <img src={wellnessDrip} className="left-img-icon" alt="wellness" />
                    <span>WELLNESS DRIPS</span>
                  </Link>
                </li>
                <li>
                  <Link to="/iv-therapy/boosters" onClick={onClose}>
                    <img src={energyBooster} className="left-img-icon" alt="energy booster" />
                    <span>ENERGY BOOSTER</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mobile-menu-item">
              <Link to="/aesthetic" onClick={onClose}>
                <img src={aesthetic} alt="home" />
                <span>AESTHETIC</span>
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/laser-hair-removal" onClick={onClose}>
                LASER HAIR REMOVAL
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/morpheus" onClick={onClose}>
                MORPHEUS8
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/offers" onClick={onClose}>
                OFFERS
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/packages" onClick={onClose}>
                PACKAGES
              </Link>
            </li>
            <li className="mobile-menu-item">
              <div
                className="menu-title"
                onClick={() => toggleSubmenu("explore")}
              >
                <img src={exploreUs} className="left-icon" alt="explore" />
                <span>EXPLORE US</span>
                <span
                  className={`arrow ${openSubmenus.explore ? "up" : "down"}`}
                >
                  <img src={caret} alt="caret" />
                </span>
              </div>
              <ul
                className={`mobile-submenu ${
                  openSubmenus.explore ? "open" : ""
                }`}
              >
                <li>
                  <Link to="/about-us" onClick={onClose}>
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" onClick={onClose}>
                    BLOGS
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" onClick={onClose}>
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
