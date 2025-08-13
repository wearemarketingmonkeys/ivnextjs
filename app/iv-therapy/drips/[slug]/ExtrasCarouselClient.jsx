'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Inline TiltCard (your original logic)
function TiltCard({ children }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    const bounds = cardRef.current?.getBoundingClientRect?.();
    if (!bounds) return;
    const xPos = (e.clientX - bounds.left) / bounds.width - 0.5;
    const yPos = (e.clientY - bounds.top) / bounds.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: 'spring', stiffness: 150, damping: 20 });
    animate(y, 0, { type: 'spring', stiffness: 150, damping: 20 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 2000,
        transformStyle: 'preserve-3d',
        padding: '12px',
        minHeight: '100%',
        height: '100%',
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          background: '#fff',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          padding: '24px',
          minHeight: '100%',
          height: '100%',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 992 }, items: 3 },
  tablet:  { breakpoint: { max: 992,  min: 768 }, items: 2 },
  mobile:  { breakpoint: { max: 768,  min: 0   }, items: 1 },
};

export default function ExtrasCarousel({ items = [] }) {
  if (!items.length) return null;

  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      showDots={false}
      autoPlay
      infinite
      sliderClass="drips-extras-wrap"
      swipeable
      draggable
      keyBoardControl
    >
      {items.map((x, i) => (
        <TiltCard key={i}>
          <div className="extra-data-card">
            <h2>{x.name}</h2>
            <p>{x.txt}</p>
          </div>
        </TiltCard>
      ))}
    </Carousel>
  );
}
