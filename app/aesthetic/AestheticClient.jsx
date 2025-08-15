'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AestheticCard from '../components/AestheticCard';

export default function AestheticClient({ initialAesthetics = [] }) {
  const [aesthetics, setAesthetics] = useState(initialAesthetics);
  const [randomSubHeadings, setRandomSubHeadings] = useState({});

  // rotate subheadings every 1.5s
  useEffect(() => {
    const update = () => {
      const next = {};
      aesthetics.forEach((a) => {
        const arr = a.subHeading?.split('|').map((s) => s.trim()).filter(Boolean) || [];
        if (arr.length) next[a.id] = arr[Math.floor(Math.random() * arr.length)];
      });
      setRandomSubHeadings(next);
    };
    if (aesthetics.length) {
      update();
      const id = setInterval(update, 1500);
      return () => clearInterval(id);
    }
  }, [aesthetics]);

  return (
    <div className="aesthetic">
      {/* Hero */}
      <div className="hero-bottom">
        <div className="container">
          <div className="hero-bottom-wrap">
            <div>
              <h1>
                Rediscover Your Natural Beauty <br /> with Our Advanced Aesthetic Treatments
              </h1>
              <p>
                At IV Wellness, we enhance your natural beauty with state-of-the-art treatments
                tailored to your needs, delivered by licensed practitioners in a luxurious setting.
              </p>
            </div>
            <div className="btn-wrap">
              <Link href="/booking" className="btn btn-light-stroke">Book Now</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="aesthetic-cards">
        <div className="container">
          <div className="aesthetic-wrapper">
            <h2>RECOMMENDED TREATMENTS</h2>
            <div className="aesthetic-wrap">
              {aesthetics.map((x) => (
                <div className="card" key={x.id ?? x.title}>
                  <AestheticCard
                    img={x.img}
                    title={x.title}
                    subHeading={randomSubHeadings[x.id] || ''}
                    desc={x.desc}
                    howItWorks={x.howItWorks}
                    treatableArea={x.treatableArea}
                    treatableConcerns={x.treatableConcerns}
                    duration={x.duration}
                    startingAmount={x.startingAmount}
                    discount={x.discount}
                    fullDetailsUrl={x.fullDetailsUrl}
                    bookingBtn={x.bookingBtn}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
