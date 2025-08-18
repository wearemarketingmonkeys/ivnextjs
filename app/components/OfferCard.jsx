// app/components/OfferCard.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OfferCard({
  img,
  title,
  descBrif,
  descUl = [],
  newBadge,
  bookingHref = 'https://api.whatsapp.com/send/?phone=97180048482&text=Hello&type=phone_number&app_absent=0', // set to "https://book.ivhub.com/" if you want external booking
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => setIsExpanded((v) => !v);

  return (
    <article className={`offer-card${isExpanded ? ' expanded' : ''}`}>
      <div
        className="offer-card__image"
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => e.key === 'Enter' && toggle()}
      >
        {img ? <img src={img} alt={title || 'Offer image'} /> : null}
        {newBadge ? <div className="new-badge">New</div> : null}
      </div>

      <div className="offer-card__content">
        <header className="offer-card__header" onClick={toggle}>
          <h3 className="offer-card__title">{title}</h3>
          <button type="button" aria-expanded={isExpanded} className="offer-card__toggle">
            {isExpanded ? '−' : '+'}
          </button>
        </header>

        {isExpanded && (
          <div className="offer-card__details">
            {descBrif ? <p>{descBrif}</p> : null}

            {!!descUl?.length && (
              <ul>
                {descUl.map((item, i) => (
                  <li key={i}>
                    <p>{item.liTitle}</p>
                    {!!item.subLi?.length && (
                      <ul>
                        {item.subLi.map((s, j) => (
                          <li key={j}>
                            <p>{s}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}

            <div className="btn-wrap">
              <Link className="btn" href={bookingHref}>
                  BOOK TREATMENT
                </Link>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
