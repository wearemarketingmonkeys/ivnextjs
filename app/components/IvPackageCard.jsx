'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function IvPackageCard({
  img,
  title,
  descBrif,
  descUl = [],
  newBadge,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="ivPackage-card">
      <div className="ivPackage-card__image">
        <img src={img} alt={title} />
        {newBadge && <div className="new-badge">New</div>}
      </div>

      <div className="ivPackage-card__content">
        <div
          className="ivPackage-card__header"
          onClick={() => setIsExpanded((v) => !v)}
          aria-expanded={isExpanded}
        >
          <h3 className="ivPackage-card__title">{title}</h3>
          <span className="ivPackage-card__toggle">{isExpanded ? '−' : '+'}</span>
        </div>

        {isExpanded && (
          <div className="ivPackage-card__details">
            {/* descBrif appears to contain HTML */}
            <div dangerouslySetInnerHTML={{ __html: descBrif }} />

            {Array.isArray(descUl) && descUl.length > 0 && (
              <ul>
                {descUl.map((item, index) => (
                  <li key={index}>
                    <p>{item.liTitle}</p>
                    {Array.isArray(item.subLi) && item.subLi.length > 0 && (
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

            {/* If /booking is an internal page, use Next's Link: */}
            {/* <div className="btn-wrap">
              <Link href="/booking" className="btn">BOOK TREATMENT</Link>
            </div> */}

            {/* If it’s an external booking URL, use a normal <a>: */}
            {/* <div className="btn-wrap">
              <a href="https://book.ivhub.com/" target="_blank" rel="noopener noreferrer" className="btn">
                BOOK TREATMENT
              </a>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
