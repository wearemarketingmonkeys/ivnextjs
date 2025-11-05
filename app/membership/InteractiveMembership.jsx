'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveMembership({ memberships = [] }) {
  const [activeId, setActiveId] = useState(null);

  const toggleCard = (id) => {
    // Accordion behavior: open one at a time
    setActiveId(activeId === id ? null : id);
  };

  if (!memberships.length) return null;

  return (
    <section className="interactive-membership">
      <h2 className="membership-heading">
        Exclusive access, curated rewards, and personalized care
        <br />
        Designed for those who glow with us year-round.
      </h2>
      <div className="membership-wrapper">
      <div className="cards-container">
        {memberships.map((m) => (
          <motion.div
            key={m.id}
            layout
            className={`card ${m.color} ${activeId === m.id ? 'active' : ''}`}
            onClick={() => toggleCard(m.id)}
            whileHover={{ scale: activeId === m.id ? 1 : 1.02 }}
            transition={{
              type: 'tween',
              ease: [0.25, 0.1, 0.25, 1],
              duration: 0.3,
            }}
          >
            {/* Membership image */}
            <div className="cardimg">
              <img src={m.image} alt={m.name} />
            </div>

            {/* Header */}
            <div className="card-header">
              <h3>{m.name}</h3>
            </div>

            {/* Price + tag */}
            <p className="price">
              {m.price}
              {m.tag && <span className="tag">{m.tag}</span>}
            </p>

            {/* Plus icon */}
            <span className="card-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="plus-icon"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>

            {/* Animated description inside card */}
            <AnimatePresence>
              {activeId === m.id && (
                <motion.div
                  className={`mobile-desc ${m.color}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    type: 'tween',
                    ease: [0.25, 0.1, 0.25, 1],
                    duration: 0.6,
                  }}
                >
                  <ul>
                    {m.perks.map((perk, idx) => (
                      <li key={idx}>{perk}</li>
                    ))}
                  </ul>

                  <a
                    className="consult-btn"
                    href="https://wa.me/97180048482?text=Hello, I’m interested in joining IV Wellness Lounge’s membership program. Could you share more details about the 365 Access and Glow Circle?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Know More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="arrow-icon"
                    >
                      <path d="M18.7506 6V15.75C18.7506 15.9489 18.6716 16.1397 18.531 16.2803C18.3903 16.421 18.1996 16.5 18.0006 16.5C17.8017 16.5 17.611 16.421 17.4703 16.2803C17.3297 16.1397 17.2506 15.9489 17.2506 15.75V7.81L6.53064 18.53c-.51.53-1.36.54-1.88.03-.53-.51-.54-1.36-.03-1.88L16.19 6.75H8.25A1.5 1.5 0 0 1 8.25 3.75h9.75A.75.75 0 0 1 18.75 4.5V6z" />
                    </svg>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
