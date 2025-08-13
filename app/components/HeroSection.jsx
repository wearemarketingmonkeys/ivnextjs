import React from "react";

const HeroSection = ({
  text,
  textLight1,
  textLight2,
  textItalic1,
  textItalic2,
  img,
  desc
}) => {
  return (
    <div className="hero-section">
      <img className="hero-img" src={img} alt="hero-img" />
      <div className="hero-wrapper">
        <div className="container">
          <div className="hero-wrap">
            {text && <h1>{text}</h1>}
            {textLight1 && <span className="text-light">{textLight1}</span>}
            {textItalic1 && <span className="text-italic">{textItalic1}</span>}
            {textLight2 && <span className="text-light">{textLight2}</span>}
            {textItalic2 && <span className="text-italic">{textItalic2}</span>}
          </div>
          {desc && <p>{desc}</p>}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
