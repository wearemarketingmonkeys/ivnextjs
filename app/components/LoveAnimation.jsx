'use client';

import { useEffect, useState } from 'react';
import '../styles/components/loveAnimation.scss'
import { usePathname } from "next/navigation"

export default function ValentinesConfetti() {
  const [name, setName] = useState('Someone Special');
  const [showMessage, setShowMessage] = useState(false);

  const paramName = usePathname();

  useEffect(() => {
    setShowMessage(true);

    const interval = setInterval(() => {
      triggerConfetti();
    }, 30000); // every 20 seconds ≈ 3 hearts per minute

    return () => clearInterval(interval);
  }, []); // <-- removed paramName dependency

  const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 8 + 8 + 's';
    document.getElementById('confetti-container')?.appendChild(heart);
  };

  const triggerConfetti = () => {
    for (let i = 0; i < 1; i++) {   // only 1 heart per trigger
      setTimeout(createHeart, i * 1000);
    }
  };

  return (
    <div>
      <div id="confetti-container"></div>
    </div>
  );
}