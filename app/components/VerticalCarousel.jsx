import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const VerticalCarousel = ({ steps }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : steps.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < steps.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="vertical-carousel">
      <div className="left">
        <img src={steps[currentIndex].img} alt={`Step ${currentIndex + 1}`} />
      </div>
      <div className="right">
        <h1>How It Works</h1>
        <button className="arrow up" onClick={handlePrev}>
        <BsChevronUp  />
        </button>
        <div className="step-content">
          <h3>{`Step ${currentIndex + 1}: ${steps[currentIndex].title}`}</h3>
          <p>{steps[currentIndex].desc}</p>
        </div>
        <button className="arrow down" onClick={handleNext}>
        <BsChevronDown />
        </button>
      </div>
    </div>
  );
};

export default VerticalCarousel;
