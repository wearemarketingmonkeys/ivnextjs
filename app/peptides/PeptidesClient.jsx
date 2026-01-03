'use client';

import { useMemo, useState, useEffect } from 'react';

function renderDosageList(items = []) {
  // These are headings inside the dosageProtocol array
  const HEADINGS = new Set([
    "Topical Application",
    "Injectable Protocol",
    "Administration Guidelines",
    "Typical Dosing Ranges",
    "Cycle Duration",
    "Timing Guidelines"
  ]);

  return (
    <div className="dosageList">
      {items.map((line, idx) => {
        const isHeading = HEADINGS.has(line);

        if (isHeading) {
          return (
            <div key={idx} className="dosageHeading">
              {line}
            </div>
          );
        }

        return (
          <div key={idx} className="dosageItem">
            <span className="dosageBullet" aria-hidden />
            <span className="dosageText">{line}</span>
          </div>
        );
      })}
    </div>
  );
}


export default function PeptidesClient({ initialPeptides = [] }) {
  const [query, setQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return initialPeptides;

    return initialPeptides.filter((p) => {
      const name = (p.name || '').toLowerCase();
      const type = (p.type || '').toLowerCase();
      const tags = (p.tags || []).join(' ').toLowerCase();
      return name.includes(q) || type.includes(q) || tags.includes(q);
    });
  }, [query, initialPeptides]);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  // Close on ESC
  useEffect(() => {
    if (!selectedProduct) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProduct]);

  // Optional: prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [selectedProduct]);

  // WhatsApp CTA (update number if needed)
  const buildWhatsAppLink = (productName) => {
    const phone = '97180048482'; // <-- replace with your WhatsApp number (no + sign)
    const msg = `Hi IV Wellness Lounge Clinic, I’d like to book a consultation for ${productName}.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <main className="peptidepage">
      <section className="wrap">
        <header className="pheader">
          <h1 className="title">Explore our Peptides</h1>
          <p className="subtitle">All orders will be delivered same day from our Clinic facility.</p>
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

                {/* ✅ Button now opens modal instead of navigation */}
                <button className="btn" type="button" onClick={() => openModal(item)}>
                  Learn More
                </button>

                <div className="imgWrap">
                  <img className="img" src={item.img} alt={item.name} loading="lazy" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty">No products match your search.</div>
        )}
      </section>

      {/* ✅ Modal */}
      {selectedProduct && (
        <div className="modalOverlay" onMouseDown={closeModal}>
          <div
            className="modal modalTwoCol"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProduct?.name} details`}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button className="modalClose" type="button" onClick={closeModal} aria-label="Close">
              ✕
            </button>

            <div className="modalGrid">
              {/* ✅ LEFT: Image */}
              <div className="modalLeft">
                <div className="modalLeftSticky">
                  <div className="modalImgWrap">
                    <img
                      src={selectedProduct.detailimg}
                      alt={selectedProduct.name}
                      className="modalImg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>


              {/* ✅ RIGHT: Content */}
              <div className="modalRight">
                <div className="modalHeader">
                  <div className="modalType">{selectedProduct.type || 'Compound'}</div>

                  <h2 className="modalTitle">
                    {selectedProduct.details?.headline || selectedProduct.name}
                  </h2>

                  <div className="modalPrice">
                    from <span>AED {selectedProduct.fromPrice}</span>
                  </div>
                </div>

                <div className="modalBody">
                  {selectedProduct.details?.overview && (
                    <Section title="Overview">
                      {Array.isArray(selectedProduct.details.overview) ? (
                        selectedProduct.details.overview.map((para, i) => (
                          <p key={i} style={{ marginBottom: i === selectedProduct.details.overview.length - 1 ? 0 : 12 }}>
                            {para}
                          </p>
                        ))
                      ) : (
                        <p>{selectedProduct.details.overview}</p>
                      )}
                    </Section>
                  )}


                  {!!selectedProduct.details?.uses?.length && (
                    <Section title="Uses and Indications">
                      {selectedProduct.details?.usesIntro && <p>{selectedProduct.details.usesIntro}</p>}
                      <ul>
                        {selectedProduct.details.uses.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </Section>
                  )}


                  {!!selectedProduct.details?.benefits?.length && (
                    <Section title="Key Benefits">
                      <ul>
                        {selectedProduct.details.benefits.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </Section>
                  )}

                  {!!selectedProduct.details?.dosageProtocol?.length && (
                    <Section title="Dosage Protocol">
                      {selectedProduct.details?.dosageIntro && <p>{selectedProduct.details.dosageIntro}</p>}
                      {renderDosageList(selectedProduct.details.dosageProtocol)}
                    </Section>
                  )}



                  {selectedProduct.details?.stackingText && (
                    <Section title={selectedProduct.details.stackingTitle}>
                      <p>{selectedProduct.details.stackingText}</p>
                    </Section>
                  )}

                  {selectedProduct.details?.safety && (
                    <Section title="Safety and Side Effects">
                      <p>{selectedProduct.details.safety}</p>
                    </Section>
                  )}

                  {selectedProduct.details?.timingTitle && (
                    <Section title={selectedProduct.details.timingTitle}>
                      <p>{selectedProduct.details.timingText}</p>
                    </Section>
                  )}

                  {!!selectedProduct.details?.contraindications?.length && (
                    <Section title="Contraindications">
                      {selectedProduct.details?.contraIntro && <p>{selectedProduct.details.contraIntro}</p>}
                      <ul>
                        {selectedProduct.details.contraindications.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                      {selectedProduct.details?.contraOutro && (
                        <p style={{ marginTop: 12 }}>{selectedProduct.details.contraOutro}</p>
                      )}
                    </Section>
                  )}


                  {selectedProduct.details?.bestFor && (
                    <Section title="Who This Peptide Is Best For">
                      <p>{selectedProduct.details.bestFor}</p>
                    </Section>
                  )}

                  {selectedProduct.details?.ctaText && (
                    <Section title={selectedProduct.details.ctaTitle}>
                      <p>{selectedProduct.details.ctaText}</p>
                    </Section>
                  )}
                </div>

                {/* ✅ WhatsApp CTA stays on right side */}
                <div className="modalFooter">
                  <a
                    href={buildWhatsAppLink(selectedProduct.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="whatsappBtn"
                  >
                    Book Now on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="modalSection">
      <h3 className="modalSectionTitle">{title}</h3>
      <div className="modalSectionContent">{children}</div>
    </section>
  );
}
