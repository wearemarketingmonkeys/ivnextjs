'use client';

import React, { useEffect, useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DripsCard from '../../components/DripsCard';
import ButtonGroup from "./ButtonGroup";


const categoryIcons = {
  'All Drips': '/assets/icons/All-Drips.png',
  Wellness: '/assets/icons/Wellness.png',
  Recovery: '/assets/icons/Recovery.png',
  Beauty: '/assets/icons/Beauty.png',
  Fitness: '/assets/icons/Fitness.png',
  'NAD+': '/assets/icons/NAD.png',
};

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 992 }, items: 3 },
  tablet:  { breakpoint: { max: 992,  min: 768 }, items: 2 },
  mobile:  { breakpoint: { max: 768,  min: 0   }, items: 1 },
};


export default function DripsClient({ initialDrips = [] }) {
  const [drips, setDrips] = useState(initialDrips);
  const [filteredDrips, setFilteredDrips] = useState(initialDrips);
  const [activeFilter, setActiveFilter] = useState('All Drips');
  const [isMobile, setIsMobile] = useState(false);

  const carouselRef = useRef(null);

  const previous = () => {
    if (carouselRef.current) carouselRef.current.previous();
  };

  const next = () => {
    if (carouselRef.current) carouselRef.current.next();
  };

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const filterDrips = (category) => {
    setActiveFilter(category);
    setFilteredDrips(category === 'All Drips' ? drips : drips.filter(d => d.category === category));
  };

  return (
    <div className="wellness-drips">
      <div className="filter-menu">
        <div className="container">
          <div className="filter-menu-wrapper">
            {['All Drips', 'NAD+', 'Wellness', 'Recovery', 'Beauty', 'Fitness'].map((cat) => (
              <button
                key={cat}
                className={activeFilter === cat ? 'active' : ''}
                onClick={() => filterDrips(cat)}
              >
                <img src={categoryIcons[cat]} alt={`${cat} icon`} width={30} height={30} />
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>


      <div className="drips-cards">
        <div className="container">
          {isMobile ? (
            filteredDrips.map((drip) => (
              <DripsCard
                key={drip.id}
                dripsNumber={drip.id}
                dripsImg={drip.img}
                title={drip.title}
                desc={drip.desc}
                bookBtnUrl={drip.bookingBtn}
                moreDetailsUrl={drip.moreDetailsUrl}
                price={drip.price}
              />
            ))
          ) : (
            <Carousel
              ref={carouselRef}
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            keyBoardControl={true}
            customTransition="all 0.5s ease"
            transitionDuration={500}
            arrows={false}
            autoPlay={false}
            >
              {filteredDrips.reduce((acc, _, i, arr) => {
                if (i % 2 === 0) {
                  acc.push(
                    <div className="drip-pair" key={i}>
                      {arr[i] && (
                        <DripsCard
                          dripsNumber={arr[i].id}
                          dripsImg={arr[i].img}
                          title={arr[i].title}
                          desc={arr[i].desc}
                          bookBtnUrl={arr[i].bookingBtn}
                          moreDetailsUrl={arr[i].moreDetailsUrl}
                          price={arr[i].price}
                        />
                      )}
                      {arr[i + 1] && (
                        <DripsCard
                          dripsNumber={arr[i + 1].id}
                          dripsImg={arr[i + 1].img}
                          title={arr[i + 1].title}
                          desc={arr[i + 1].desc}
                          bookBtnUrl={arr[i + 1].bookingBtn}
                          moreDetailsUrl={arr[i + 1].moreDetailsUrl}
                          price={arr[i + 1].price}
                        />
                      )}
                    </div>
                  );
                }
                return acc;
              }, [])}
            </Carousel>
          )}
        </div>

        {!isMobile && (
        <ButtonGroup next={next} previous={previous} />
        )}
      </div>
    </div>
  );
}
