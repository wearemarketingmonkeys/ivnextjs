'use client';

import React from 'react';

const repeatUntilMin = (arr, minLength) => {
  if (!arr || arr.length === 0) return [];
  const out = [];
  while (out.length < minLength) out.push(...arr);
  return out;
};

const LogoMarquee = ({ icons = [], links = [], speed = 25, minItems = 12 }) => {
  const filledIcons = repeatUntilMin(icons, minItems);
  const filledLinks = repeatUntilMin(links, minItems);

  const items = [...filledIcons, ...filledIcons];

  return (
    <div className="logo-marquee">
      <div className="marquee-viewport">
        <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
          {items.map((src, i) => {
            const realIndex = i % filledIcons.length;
            const href = filledLinks?.[realIndex] || '#';

            return (
              <div className="marquee-item" key={i}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <img src={src} alt="logo" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;