import Link from 'next/link';
import peptidesJson from '../../mocks/peptidesData.json';
import WellnessQuizModal from '../WellnessQuizModal';
import ShippingCalculator from "../../components/ShippingCalculator";

const SITE_URL = 'https://ivhub.com';

const peptidesList = Array.isArray(peptidesJson)
  ? peptidesJson
  : (peptidesJson.peptides || peptidesJson.peptidesData || []);

const toAbsoluteUrl = (src) => {
  if (!src) return `${SITE_URL}/og.png`;
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  return `${SITE_URL}${src.startsWith('/') ? '' : '/'}${src}`;
};

function renderDosageList(items = []) {
  const HEADINGS = new Set([
    'Topical Application',
    'Injectable Protocol',
    'Administration Guidelines',
    'Typical Dosing Ranges',
    'Cycle Duration',
    'Timing Guidelines',
    'Typical Protocol Structure'
  ]);

  return (
    <div className="dosageList">
      {items.map((line, idx) => {
        const isHeading = HEADINGS.has(line);
        if (isHeading) return <div key={idx} className="dosageHeading">{line}</div>;

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

function Section({ title, children }) {
  return (
    <section className={`modalSection ${title === 'Key Benefits' ? 'keybenefits' : ''}`}>
      <h3 className="modalSectionTitle">{title}</h3>
      <div className="modalSectionContent">{children}</div>
    </section>
  );
}

/** ✅ Server-safe accordion (no JS) */
function AccordionSection({ title, children }) {
  return (
    <details className="modalAccordion">
      <summary className="modalAccordionSummary">
        <span className="modalAccordionTitle">{title}</span>
        <span className="modalAccordionChevron" aria-hidden>⌄</span>
      </summary>

      <div className="modalAccordionContent">
        <div className="modalAccordionInner">{children}</div>
      </div>
    </details>
  );
}

export function generateMetadata({ params }) {
  const peptide = peptidesList.find((p) => p.slug === params.slug);

  if (!peptide) {
    const title = 'Peptides | IV Wellness Lounge Clinic';
    const description = 'Peptide therapy details.';
    const url = `${SITE_URL}/peptides`;

    return {
      title,
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        url,
        type: 'website',
        images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630 }]
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [`${SITE_URL}/og.png`]
      }
    };
  }

  const title = peptide.details?.headline || `${peptide.name} | IV Wellness Lounge Clinic`;
  const description = peptide.metadesc || peptide.details?.overview?.[0] || 'Peptide therapy details.';
  const url = `${SITE_URL}/peptides/${peptide.slug}`;
  const image = toAbsoluteUrl(peptide.detailimg || peptide.img);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'IV Wellness Lounge Clinic',
      images: [{ url: image, width: 1200, height: 630, alt: peptide.name || 'Peptide therapy' }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}

export default function PeptideSlugPage({ params }) {
  const peptide = peptidesList.find((p) => p.slug === params.slug);
  if (!peptide) return null;

  const buildWhatsAppLink = (productName) => {
    const phone = '97180048482';
    const msg = `Hi IV Wellness Lounge Clinic, I’d like to book a consultation for ${productName}.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  const d = peptide.details || {};

  return (
    <>
      <WellnessQuizModal />

      <main className="peptidepage peptideDetailPage">
        <div className="wrap">
          <div className="detailShell">
            <Link className="modalClose" href="/peptides" aria-label="Back to peptides">
              ✕
            </Link>

            <div className="modalGrid">
              {/* LEFT */}
              <div className="modalLeft">
                <div className="modalLeftSticky">
                  <div className="modalImgWrap">
                    <img
                      src={peptide.detailimg || peptide.img}
                      alt={peptide.name}
                      className="modalImg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="modalRight">
                <div className="modalHeader">
                  <div className="modalType">{peptide.type || 'Compound'}</div>
                  <h1 className="modalTitle">{d.headline || peptide.name}</h1>

                  <div className="modalType subline">
                    Purity: 99% or higher. Third-party tested. For research purposes only.
                  </div>

                  <div className="modalPrice">
                    from <span>AED {peptide.fromPrice}</span>
                  </div>
                </div>

                <div className="modalBody">
                  {/* ✅ Always visible */}
                  {!!d.overview && (
                    <Section title="Overview">
                      {Array.isArray(d.overview) ? (
                        d.overview.map((para, i) => (
                          <p key={i} style={{ marginBottom: i === d.overview.length - 1 ? 0 : 12 }}>
                            {para}
                          </p>
                        ))
                      ) : (
                        <p>{d.overview}</p>
                      )}
                    </Section>
                  )}

                  {/* ✅ Always visible */}
                  {!!d.benefits?.length && (
                    <Section title="Key Benefits">
                      {typeof d.benefits[0] === 'string' ? (
                        <ul>
                          {d.benefits.map((x, i) => <li key={i}>{x}</li>)}
                        </ul>
                      ) : (
                        <div className="benefitsStatGrid">
                          {d.benefits.map((b, i) => (
                            <div className="benefitsStatItem" key={i}>
                              <div className="benefitsStatIcon">{b.icon}</div>
                              <div className="benefitsStatValue">{b.value}</div>
                              <div className="benefitsStatLabel">{b.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </Section>
                  )}

                  {/* ✅ Everything below = Accordion */}
                  {!!d.uses?.length && (
                    <AccordionSection title="Uses and Indications">
                      {d.usesIntro && <p>{d.usesIntro}</p>}
                      <ul>
                        {d.uses.map((x, i) => <li key={i}>{x}</li>)}
                      </ul>
                    </AccordionSection>
                  )}

                  {!!d.dosageProtocol?.length && (
                    <AccordionSection title="Dosage Protocol">
                      {d.dosageIntro && <p>{d.dosageIntro}</p>}
                      {renderDosageList(d.dosageProtocol)}
                    </AccordionSection>
                  )}

                  {!!d.stackingText && (
                    <AccordionSection title={d.stackingTitle || 'Combination and Stacking'}>
                      <p>{d.stackingText}</p>
                    </AccordionSection>
                  )}

                  {!!d.safety && (
                    <AccordionSection title="Safety and Side Effects">
                      <p>{d.safety}</p>
                    </AccordionSection>
                  )}

                  {!!d.timingTitle && (
                    <AccordionSection title={d.timingTitle}>
                      <p>{d.timingText}</p>
                    </AccordionSection>
                  )}

                  {!!d.contraindications?.length && (
                    <AccordionSection title={d.contraTitle || 'Contraindications'}>
                      {d.contraIntro && <p>{d.contraIntro}</p>}
                      <ul>
                        {d.contraindications.map((x, i) => <li key={i}>{x}</li>)}
                      </ul>
                      {d.contraOutro && <p style={{ marginTop: 12 }}>{d.contraOutro}</p>}
                    </AccordionSection>
                  )}

                  {!!d.bestFor && (
                    <AccordionSection title="Who This Peptide Is Best For">
                      <p>{d.bestFor}</p>
                    </AccordionSection>
                  )}

                  {!!d.ctaText && (
                    <AccordionSection title={d.ctaTitle || 'Book a Peptide Consultation in Dubai'}>
                      <p>{d.ctaText}</p>
                    </AccordionSection>
                  )}
                </div>

                <div className="modalFooter">
                  <a
                    href={buildWhatsAppLink(peptide.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="whatsappBtn"
                  >
                    Get Started
                  </a>
                </div>

                <ShippingCalculator basePrice={Number(peptide.fromPrice || 0)} baseCurrency="AED" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}