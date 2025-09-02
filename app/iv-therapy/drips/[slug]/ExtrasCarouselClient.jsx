'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function ExtrasCarouselClient({ items = [] }) {
  const listRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const [itemW, setItemW] = useState(0);
  const [cols, setCols] = useState(1);

  // Observe size changes to keep step width in sync
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const measure = () => {
      const first = list.querySelector('li');
      if (!first) return;

      const firstRect = first.getBoundingClientRect();
      const gap = parseFloat(getComputedStyle(list).columnGap || getComputedStyle(list).gap || '0') || 0;
      setItemW(firstRect.width + gap);

      // how many cards currently fit in viewport width
      const c = Math.max(1, Math.round(list.clientWidth / firstRect.width));
      setCols(c);
    };

    const ro = new ResizeObserver(measure);
    ro.observe(list);
    measure();

    return () => ro.disconnect();
  }, []);

  // Update active index on scroll (snaps, so rounding works well)
  useEffect(() => {
    const list = listRef.current;
    if (!list || !itemW) return;
    const onScroll = () => setIdx(Math.round(list.scrollLeft / itemW));
    list.addEventListener('scroll', onScroll, { passive: true });
    return () => list.removeEventListener('scroll', onScroll);
  }, [itemW]);

  const maxIndex = Math.max(0, (items.length || 0) - cols);

  const scrollToIndex = (i) => {
    const list = listRef.current;
    if (!list || !itemW) return;
    const clamped = Math.min(Math.max(i, 0), maxIndex);
    list.scrollTo({ left: clamped * itemW, behavior: 'smooth' });
    setIdx(clamped);
  };

  const prev = () => scrollToIndex(idx - 1);
  const next = () => scrollToIndex(idx + 1);

  if (!items.length) return null;

  return (
    <section className="extras-snap" aria-label="Extras">
      <div className="extras-snap__viewport">
        <button
          className="extras-snap__arrow extras-snap__arrow--left"
          onClick={prev}
          aria-label="Previous"
          disabled={idx <= 0}
        >
          ‹
        </button>

        <ul ref={listRef} className="extras-snap__list" tabIndex={0} aria-live="polite">
          {items.map((x, i) => (
            <li key={i} className="extras-snap__item">
              <article className="extras-card">
                <h2 className="extras-card__title">{x.name}</h2>
                <p className="extras-card__body">{x.txt}</p>
              </article>
            </li>
          ))}
        </ul>

        <button
          className="extras-snap__arrow extras-snap__arrow--right"
          onClick={next}
          aria-label="Next"
          disabled={idx >= maxIndex}
        >
          ›
        </button>
      </div>

      {/* Dots (optional) */}
      {/*<div className="extras-snap__dots" role="tablist" aria-label="Slide dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            role="tab"
            className={`extras-snap__dot ${i === idx ? 'is-active' : ''}`}
            aria-selected={i === idx}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>*/}
    </section>
  );
}
