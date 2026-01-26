'use client';

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const FaqAccordion = dynamic(() => import('./FaqAccordionClient'), { ssr: false });
import WellnessQuizModal from './WellnessQuizModal';

export default function PeptidesClient({ initialPeptides = [], faq = [] }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const list = Array.isArray(initialPeptides) ? initialPeptides : [];
    const q = query.trim().toLowerCase();
    if (!q) return list;

    return list.filter((p) => {
      const name = (p.name || '').toLowerCase();
      const type = (p.type || '').toLowerCase();
      const tags = (p.tags || []).join(' ').toLowerCase();
      return name.includes(q) || type.includes(q) || tags.includes(q);
    });
  }, [query, initialPeptides]);

  return (
    <>
      {/* ✅ Popup Quiz */}
      <WellnessQuizModal />

      <div className="home-hero peptidehero">
        <video className="hero-video" autoPlay muted playsInline loop>
          <source src="/assets/video/peptide-2.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-txt-wrapper">
          <div className="spin-wrap">
            <img
              className="spinner-text"
              src="/assets/img/peptides/peptide-header-text-1.png"
              alt="spinner"
            />
            <p>
              Peptide therapy at IV Wellness Lounge is designed to activate the body’s natural
              intelligence. Through precision-formulated amino acids, we support regeneration,
              balance, and longevity at a cellular level, with personalized treatments tailored to
              your unique wellness goals.
            </p>
          </div>
        </div>
      </div>

      <main className="peptidepage">
        <section className="wrap">
          <header className="pheader">
            <h1 className="title">Explore our Peptides</h1>
            <p className="subtitle">All orders will be delivered same day from our Clinic facility.</p>
            <p className="subtitle">Purity: 99% or higher. Third-party tested. For research purposes only.</p>
          </header>

          <div className="searchWrap">
            <span className="searchIcon" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L16.65 16.65M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <input
              className="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by product name or type"
            />
          </div>

          <div className="grid">
            {filtered.map((item) => (
              <article key={item.slug} className="card">
                <div className="cardInner">
                  <div className="type">{item.type || 'Compound'}</div>
                  <div className="name">{item.name}</div>

                  <div className="price">
                    from <span>AED {item.fromPrice}</span>
                  </div>

                  <Link
                    href={`/peptides/${item.slug}`}
                    className="btn"
                    aria-label={`Learn more about ${item.name}`}
                    title={`Learn more about ${item.name}`}
                    prefetch
                  >
                    +
                  </Link>

                  <div className="imgWrap">
                    <img className="img" src={item.img} alt={item.name} loading="lazy" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && <div className="empty">No products match your search.</div>}
        </section>

        <br />
        <br />
        <br />
        <br />

        <section className="wrap">
          <header className="pheader">
            <h1 className="title">Questions? We've Got Answers</h1>
          </header>
          <FaqAccordion items={faq} />
        </section>
      </main>
    </>
  );
}
