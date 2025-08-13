'use client';

import { useState } from "react";

const SpecialOfferCard = ({ img, title, descBrif, descUl, newBadge }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((v) => !v);

  return (
    <div className="specialOffer-card">
      <div className="specialOffer-card__image">
        <img src={img} alt={title} />
        {newBadge && <div className="new-badge">New</div>}
      </div>

      <div className="specialOffer-card__content">
        <div
          className="specialOffer-card__header"
          onClick={toggleExpand}
          aria-expanded={isExpanded}
        >
          <h3 className="specialOffer-card__title">{title}</h3>
          <span className="specialOffer-card__toggle">{isExpanded ? "−" : "+"}</span>
        </div>

        {isExpanded && (
          <div className="specialOffer-card__details">
            <p>{descBrif}</p>

            {descUl && Array.isArray(descUl) && (
              <ul>
                {descUl.map((item, index) => (
                  <li key={index}>
                    <p>{item.liTitle}</p>
                    {item.subLi && Array.isArray(item.subLi) && (
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
            )}

            <div className="btn-wrap">
              <a
                href="https://wa.me/97180048482"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Offer
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialOfferCard;
