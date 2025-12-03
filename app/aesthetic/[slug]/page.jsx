// app/aesthetic/[slug]/page.jsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import aestheticData from '../../mocks/aestheticData.json';

// Client islands (UI only, keep page SSR)
const FaqAccordion = dynamic(() => import('./FaqAccordionClient'), { ssr: false });
const TipsAccordion = dynamic(() => import('./TipsAccordionClient'), { ssr: false });

const CompareClient = dynamic(() => import('./CompareClient'), { ssr: false });

const VideoClient = dynamic(() => import('./VideoClient'), { ssr: false });

const toPublic = (p, base = '/assets/img/aesthetic/') =>
  p ? (p.startsWith('/') ? p : `${base}${p}`) : '';

function normalizeItem(a) {
  return {
    ...a,
    img: toPublic(a.img),
    beforeImg: toPublic(a.beforeImg),
    afterImg: toPublic(a.afterImg),
    // video lives in /public/assets/video/...
    video: a.video ? (a.video.startsWith('/') ? a.video : `/assets/video/${a.video}`) : '',
    treatableConcerns: (a.treatableConcerns || []).map(c => ({
      ...c,
      icons: toPublic(c.icons),
    })),
    treatmentsTips: (a.treatmentsTips || []).map(t => ({
      ...t,
      tips: (t.tips || []).map(s => ({ ...s, icon: toPublic(s.icon) })),
    })),
    slug:
      a.slug ||
      (typeof a.fullDetailsUrl === 'string'
        ? a.fullDetailsUrl.split('/').filter(Boolean).pop()
        : null),
  };
}

function allAesthetic() {
  return (aestheticData?.aestheticData || []).map(normalizeItem);
}

function bySlug(slug) {
  return allAesthetic().find(x => x.slug === slug) || null;
}

// -------- Static Generation --------
export function generateStaticParams() {
  return allAesthetic()
    .filter(x => !!x.slug)
    .map(x => ({ slug: x.slug }));
}

export function generateMetadata({ params }) {
  const item = bySlug(params.slug);
  if (!item) return {};
  const canonical = `https://ivhub.com/aesthetic/${item.slug}`;
  const title = `${item.title} | IV Wellness Lounge Clinic`;
  const description = item.metaDescription || item.desc || item.whyWeLoveIt || 'Advanced aesthetic treatment.';

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://ivhub.com/og.png'],
    },
  };
}

// -------- Page --------
export default function AestheticDetailsPage({ params }) {
  const service = bySlug(params.slug);
  if (!service) return notFound();

  // Breadcrumb JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Aesthetic', item: 'https://ivhub.com/aesthetic' },
      { '@type': 'ListItem', position: 2, name: service.title, item: `https://ivhub.com/aesthetic/${service.slug}` },
    ],
  };

  return (
    <main className="aesthetic-details">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="details-hero">
        <div className="container">
          <div className="details-wrap">
            {/* Left: video or image */}
            <div className="left">
              {service.video ? (
                <div className="imgVidBox" data-enhanced>
                  {/* remove controls on client, autoplay/loop muted */}
                  <VideoClient src={service.video} />
                </div>
              ) : (
                <div className="imgVidBox" data-fallback>
                  {service.img ? <img src={service.img} alt={service.title} /> : null}
                </div>
              )}
            </div>

            {/* Right: content */}
            <div className="right">
              <h1>{service.title}</h1>

              {(service.startingAmount || service.duration) && (
                <div className="dur-cost">
                  {service.startingAmount ? <span>Starting at AED {service.startingAmount}</span> : null}
                  {service.startingAmount && service.duration ? <span>|</span> : null}
                  {service.duration ? <span>{service.duration} min duration</span> : null}
                </div>
              )}

              {service.whyWeLoveIt ? <div className="why-love" dangerouslySetInnerHTML={{ __html: service.whyWeLoveIt }} /> : null}

              {service.treatableArea && (
                <div className="treatable-area">
                  <p><strong>Treatable Area</strong></p>
                  <p>{service.treatableArea}</p>
                </div>
              )}

              {Array.isArray(service.treatableConcerns) && service.treatableConcerns.length > 0 && (
                <div className="single-concern-wrap">
                  {service.treatableConcerns.map((x, i) => (
                    <div className="single-concern" key={i}>
                      {x.icons ? <img src={x.icons} alt="concern icon" /> : null}
                      <span>{x.txt}</span>
                    </div>
                  ))}
                </div>
              )}

              {service.discount != null && (
                <p className="discount"><strong>{service.discount}% discount on 3 or more sessions</strong></p>
              )}

              <div className="btn-wrap">
                {service.bookingBtn ? (
                  /^https?:\/\//i.test(service.bookingBtn) ? (
                    <a className="btn" href={service.bookingBtn} target="_blank" rel="noopener noreferrer">Book Now</a>
                  ) : (
                    <Link className="btn" href={service.bookingBtn}>Book Now</Link>
                  )
                ) : null}
              </div>

              {service?.benefits && service.benefits.length > 0 && (
                <div className="benefit">
                  <div className="benefit-wrap">
                    <div className="right">

                      {/* Key Benefits */}
                      <details className="accordion-block">
                        <summary className="accordion-summary">
                          <h2 className="section-title">Key Benefits</h2>
                          <span className="accordion-caret" aria-hidden>▾</span>
                        </summary>

                        <div className="accordion-content">
                          <div className="benefit-list keybenefit">
                            {service.benefits.map((x, index) => (
                              <div className="single-list" key={index}>
                                <p>{x}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </details>

                      {/* Recommended For */}
                      {service?.idealFor && service.idealFor.length > 0 && (
                        <details className="accordion-block">
                          <summary className="accordion-summary">
                            <h2>Recommended For</h2>
                            <span className="accordion-caret" aria-hidden>▾</span>
                          </summary>

                          <div className="accordion-content">
                            <p>{service.idealtitle}</p><br/>
                            <div className="benefit-list keybenefit">
                              {service.idealFor.map((x, index) => (
                                <div className="single-list" key={index}>
                                  <p>{x}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </details>
                      )}

                    </div>
                  </div>
                </div>
              )}


              {/* Price & Package OR othertext (HTML) */}
              {service?.othertext ? (
                <h2 dangerouslySetInnerHTML={{ __html: service.othertext }} />
              ) : (
                (Array.isArray(service.treatments) && service.treatments.length > 0) && (
                  <div className="pricesection">
                    <h1>Price &amp; Package</h1>
                    <br />
                    {/* SSR fallback list for View Source */}
                    <div className="price-package-accordion" style={{ display: 'none' }} data-fallback>
                      {service.treatments.map((x, i) => (
                        <div className="single-treatment" key={i}>
                          <h3>{x.category}</h3>
                          <div className="treatment-services">
                            {(x.services || []).map((y, yi) => (
                              <div className="single-treatment-service" key={yi}>
                                <span>{y.name}</span>
                                <span>{y.price} AED</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Client enhanced accordion */}
                    <div data-enhanced>
                      <TipsAccordion type="price" treatments={service.treatments} />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {service?.safety && service.safety.length > 0 && (  
      <section>
        <div className="container">
            <h1>Safety and Recovery</h1>
            <br/>
            <div dangerouslySetInnerHTML={{ __html: service.safety }} />
        </div>  
      </section>
      )}

      {/* Pre/Post Tips */}
      {Array.isArray(service.treatmentsTips) && service.treatmentsTips.length > 0 && (
        <section className="pre-post">
          <div className="container">
            {/* SSR fallback: simple list */}
            <div className="pre-post-wrap" style={{ display: 'none' }} data-fallback>
              {service.treatmentsTips.map((x, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-q">{x.name}</summary>
                  <div className="tips-wrapper">
                    {(x.tips || []).map((y, yi) => (
                      <div className="tips-wrap" key={yi}>
                        {y.icon ? <img src={y.icon} alt="" /> : null}
                        <p>{y.txt}</p>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
            {/* Client enhanced accordion */}
            <div className="pre-post-wrap" data-enhanced>
              <TipsAccordion items={service.treatmentsTips} />
            </div>
          </div>
        </section>
      )}

      {/* Results + FAQ */}
      <section className="price-package">
        <div className="container">
          <div className="price-package-wrap">
            {/* Left: Results + Compare */}
            <div className="left">
              <div className="left-wrap">
                <h1>Results</h1>
                <p>{service?.resultTxt || 'No results available.'}</p>

                {/* SSR fallback: two images side by side */}
                {service?.beforeImg && service?.afterImg ? (
                    <>
                      <div className="compare-fallback" style={{ display: 'none' }} data-fallback>
                        {/* SSR fallback already there */}
                        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                          <div><img src={service.beforeImg} alt="Before" style={{ maxWidth: '100%', height: 'auto' }} /></div>
                          <div><img src={service.afterImg} alt="After" style={{ maxWidth: '100%', height: 'auto' }} /></div>
                        </div>
                      </div>
                      <div data-enhanced>
                        <CompareClient before={service.beforeImg} after={service.afterImg} />
                      </div>
                    </>
                  ) : (
                    <p>Image comparison not available.</p>
                  )}

              </div>
            </div>

            {/* Right: FAQ */}
            <div className="right">
              {Array.isArray(service.faq) && service.faq.length > 0 && (
                <div className="faq">
                  <div className="container">
                    <div className="faq-wrap">
                      <h1>Questions? We&apos;ve Got Answers</h1>

                      {/* SSR fallback: details/summary */}
                      <div className="faq-list" style={{ display: 'none' }} data-fallback>
                        {service.faq.map((q, i) => (
                          <details key={i} className="faq-item">
                            <summary className="faq-q">{q.question}</summary>
                            <div className="tips-wrapper">{q.answer}</div>
                          </details>
                        ))}
                      </div>

                      {/* Client-enhanced accordion */}
                      <div data-enhanced>
                        <FaqAccordion items={service.faq} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
