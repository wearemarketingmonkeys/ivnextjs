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
    triggerConfetti();
  }, [paramName]);

  const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 4 + 6 + 's';
    document.getElementById('confetti-container').appendChild(heart);
    // setTimeout(() => heart.remove(), 5000);
  };

  const triggerConfetti = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(createHeart, i * 700);
    }
  };

  return (
    <div>
      <div id="confetti-container"></div>
    </div>
  );
}
