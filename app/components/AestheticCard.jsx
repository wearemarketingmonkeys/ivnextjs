import { useState } from "react";
import { Link } from "react-router-dom";

const AestheticCard = ({
  img,
  title,
  subHeading,
  desc,
  howItWorks,
  treatableArea,
  treatableConcerns,
  duration,
  startingAmount,
  bookingBtn,
  discount,
  fullDetailsUrl
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="aesthetic-card">
      {/* <div className="aesthetic-card__image">
        <img src={img} alt={title} />
        <h3 className="aesthetic-card__title">{title}</h3>
      </div> */}

      <h1 className="aesthetic-card__title">{title}</h1>
      <hr/>

      <div className="aesthetic-card__content">
        <div className="aesthetic-card__header" onClick={toggleExpand}>
          <h3 className="aesthetic-card__sub-title">{subHeading}</h3>
          <p>{desc}</p>
          <button className="aesthetic-card__toggle">
            {isExpanded ? "−" : "+"}
          </button>
        </div>

        {isExpanded && (
          <div className="aesthetic-card__details">
            <p>
              <strong>How it works:</strong> <br /> {howItWorks}
            </p>
            <p>
              <strong>Treatable Area:</strong>
              <br />
              {treatableArea}
            </p>
            <div className="concern-wrap">
              <p>
                <strong>Treatable Concerns:</strong>
              </p>
              <div className="single-concern-wrap">
                {treatableConcerns.map((x, index) => (
                  <div className="single-concern" key={index}>
                    <img src={x.icons} alt="concern icon" />
                    <span>{x.txt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="duration-cost-wrap">
                <div className="duration-cost">
                    <span>{duration} Min Duration</span>
                    <span>|</span>
                    <span>Starting At AED{startingAmount}</span>
                </div>
                {/* <p className="discount"><strong>{discount}% discount on 3 or more sessions</strong></p> */}
            </div>
            <div className="btn-wrap">
              <Link to={bookingBtn} className="btn">
                BOOK Now
              </Link>
              <Link to={fullDetailsUrl} className="btn btn-stroke">
                View Full Details
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AestheticCard;
