import { useState } from "react";
import { Link } from "react-router-dom";

const OfferCard = ({ img, title, descBrif, descUl, newBadge }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="offer-card">
      <div className="offer-card__image">
        <img src={img} alt={title} />
        {newBadge && <div className="new-badge">New</div>}
      </div>

      <div className="offer-card__content">
        <div className="offer-card__header" onClick={toggleExpand}>
          <h3 className="offer-card__title">{title}</h3>
          <button className="offer-card__toggle">
            {isExpanded ? "−" : "+"}
          </button>
        </div>

        {isExpanded && (
          <div className="offer-card__details">
            <p>{descBrif}</p>
            {descUl && (
              <ul>
                <ul>
                  {descUl.map((item, index) => (
                    <li key={index}>
                      <p>{item.liTitle}</p>
                      {item.subLi && (
                        <ul>
                          {item.subLi.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <p>{subItem}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </ul>
            )}
            <div className="btn-wrap">
              <Link to={"/booking"} className="btn">
                BOOK TREATMENT
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferCard;
