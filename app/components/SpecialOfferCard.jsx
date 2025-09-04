'use client';

import { useState } from 'react';

const SpecialOfferCard = ({ img, title, descBrif, descUl, newBadge }) => {
  // Tap-to-flip for touch devices & keyboard toggle
  const [isFlipped, setIsFlipped] = useState(false);

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped((v) => !v);
    }
  };

  return (
    <div
      className={`specialOffer-card flip-card ${isFlipped ? 'is-flipped' : ''}`}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={`${title} details`}
      onClick={() => setIsFlipped((v) => !v)}      // tap on mobile
      onKeyDown={handleKey}                        // keyboard accessibility
    >
      <div className="flip-card__inner" aria-hidden={false}>
        {/* FRONT */}
        <div className="flip-card__face flip-card__face--front">
          <div className="specialOffer-card__image">
            <img src={img} alt={title} />
            {newBadge && <div className="new-badge">New</div>}
          </div>

          <div className="specialOffer-card__content">
            <h3 className="specialOffer-card__title">{title}</h3>
            <div className="flip-hint">+</div>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card__face flip-card__face--back">
          <div className="specialOffer-card__content">
            <h3 className="specialOffer-card__title">{title}</h3>

            {descUl && Array.isArray(descUl) && descUl.length > 0 ? (
              <ul className="specialOffer-card__list">
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
            ) : (
              descBrif && <p>{descBrif}</p>
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
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferCard;