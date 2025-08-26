// app/iv-therapy/drips/[slug]/page.jsx
import dynamic from 'next/dynamic';


import { notFound } from 'next/navigation';
import Link from 'next/link';
import dripsData from '../../../mocks/wellnessDrips.json';

const ExtrasCarousel = dynamic(() => import('./ExtrasCarouselClient'), { ssr: false });
const FaqAccordion  = dynamic(() => import('./FaqAccordionClient'),  { ssr: false });


// ----------------- helpers -----------------
const toPublic = (p) => {
  if (!p) return '';
  return p.startsWith('/') ? p : `/assets/img/drips/${p}`;
};

const normButton = (b = {}) => ({
  ...b,
  // normalize txt/title, price, and image path
  title: b.title || b.txt || '',
  img: toPublic(b.img || b.icon),
  price: b.price ?? null,
});

const normSession = (s = {}) => ({
  txt: s.txt || '',
  price: s.price ?? null,
});

const pickSession = (drip, sessionTxt) => {
  if (!sessionTxt || !drip.sessionprice?.length) return null;
  const s = drip.sessionprice.find(
    (x) => (x.txt || '').trim().toLowerCase() === sessionTxt.trim().toLowerCase()
  );
  return s || null;
};


// derive slug from `slug` or from last segment of `moreDetailsUrl`
const normalizeDrip = (d) => {
  const slug =
    d.slug ||
    (typeof d.moreDetailsUrl === 'string'
      ? d.moreDetailsUrl.split('/').filter(Boolean).pop()
      : null);

  return {
    ...d,
    slug,
    img: toPublic(d.img),
    benifitImg: toPublic(d.benifitImg),
    benifitList: Array.isArray(d.benifitList)
      ? d.benifitList.map((x) => ({ ...x, icon: toPublic(x.icon) }))
      : [],
    buttonslist: Array.isArray(d.buttonslist) ? d.buttonslist.map(normButton) : [],
    sessionprice: Array.isArray(d.sessionprice) ? d.sessionprice.map(normSession) : [],
  };

};

const allDrips = () => (dripsData?.dripsData || []).map(normalizeDrip);
const bySlug = (slug) => allDrips().find((d) => d.slug === slug) || null;

const pickVariant = (drip, variantName) => {
  if (!variantName || !drip.buttonslist?.length) return null;
  // match by title (case-insensitive)
  const v = drip.buttonslist.find(
    (b) => (b.title || '').trim().toLowerCase() === variantName.trim().toLowerCase()
  );
  return v || null;
};

// ----------------- static gen -----------------
export function generateStaticParams() {
  return allDrips()
    .filter((d) => !!d.slug)
    .map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params, searchParams }) {
  const drip = bySlug(params.slug);
  if (!drip) return {};

  const active = pickVariant(drip, searchParams?.variant);
  const titleCore = active?.title || drip.title;
  const description = drip.metadesc || drip.desc || 'Personalized IV therapy.';
  const canonical = `http://ivhub.com/iv-therapy/drips/${drip.slug}${
    searchParams?.variant ? `?variant=${encodeURIComponent(searchParams.variant)}` : ''
  }`;

  return {
    title: `${titleCore} | IV Therapy Drips | IV Wellness Lounge Dubai`,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${titleCore} | IV Therapy Drips | IV Wellness Lounge Dubai`,
      description,
      url: canonical,
      type: 'website',
      images: [{ url: 'http://ivhub.com/og.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${titleCore} | IV Therapy Drips | IV Wellness Lounge Dubai`,
      description,
      images: ['http://ivhub.com/og.png'],
    },
  };
}

// ----------------- page -----------------
export default function DripDetailPage({ params, searchParams }) {
  const drip = bySlug(params.slug);
  if (!drip) return notFound();

  // variant selected via query: /iv-therapy/drips/beauty-hub?variant=Glow
  const active = pickVariant(drip, searchParams?.variant);

  const heroImg = active?.img || drip.img;
  const heroTitle = active?.title || drip.title;

  // session selected via query: /iv-therapy/drips/[slug]?session=One%20Session
  const activeSession = pickSession(drip, searchParams?.session);

  // base price from variant (or drip)…
  const heroBasePrice =
    active && active.price !== null && active.price !== '' ? active.price : drip.price;

  // …but if a session is chosen, it overrides the hero price
  const heroPrice = activeSession?.price ?? heroBasePrice;


  // for SEO and UX, expose the same “buttonslist” choices as links that toggle the query param
  const buttons = drip.buttonslist || [];

  // build rich paragraphs (para1..para6)
  const paras = [drip.para1, drip.para2, drip.para3, drip.para4, drip.para5, drip.para6].filter(
    (p) => typeof p === 'string' && p.trim() !== ''
  );

  // Breadcrumb LD+JSON
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'IV Therapy', item: 'http://ivhub.com/iv-therapy' },
      { '@type': 'ListItem', position: 2, name: 'Drips', item: 'http://ivhub.com/iv-therapy/drips' },
      { '@type': 'ListItem', position: 3, name: heroTitle, item: `http://ivhub.com/iv-therapy/drips/${drip.slug}` },
    ],
  };

  return (
    <main className="drips-details">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ===== HERO / VARIANTS (buttonslist) ===== */}
      <section className="details-hero">
        <div className="container">
          <div className="details-wrap">
            {/* LEFT image */}
            <div className="left">
              {heroImg ? <img src={heroImg} alt={heroTitle} /> : null}
            </div>

            {/* RIGHT content */}
            <div className="right">
              <h1>{heroTitle}</h1>

              {/* Inline Buttons as server links (SSR, no client state needed) */}
              {buttons.length > 0 && (
                <div
                  className="buttons-list"
                  style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '10px 0' }}
                >
                  {buttons.map((btn, i) => {
                    const isActive =
                      (active?.title || '').toLowerCase() === (btn.title || '').toLowerCase() ||
                      (!active && i === 0 && !searchParams?.variant); // show first as active when no variant chosen
                    const href =
                        `/iv-therapy/drips/${drip.slug}` +
                        `?variant=${encodeURIComponent(btn.title || '')}` +
                        (searchParams?.session ? `&session=${encodeURIComponent(searchParams.session)}` : '');


                    return (
                      <Link
                        key={`${btn.title}-${i}`}
                        href={href}
                        className="variant-link"
                        style={{
                          whiteSpace: 'nowrap',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          border: '1px solid #ccc',
                          background: isActive ? '#000' : 'transparent',
                          color: isActive ? '#fff' : '#000',
                        }}
                        aria-current={isActive ? 'true' : undefined}
                      >
                        {btn.title}
                      </Link>
                    );
                  })}
                </div>
              )}

              {drip.sessionprice?.length > 0 && (
                <div
                  className="session-buttons"
                  style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '10px 0' }}
                >
                  {drip.sessionprice.map((sp, i) => {
                    const isActive =
                      (activeSession?.txt || '').toLowerCase() === (sp.txt || '').toLowerCase() ||
                      (!activeSession && i === 0 && !searchParams?.session);

                    const href =
                      `/iv-therapy/drips/${drip.slug}` +
                      (searchParams?.variant
                        ? `?variant=${encodeURIComponent(searchParams.variant)}&session=${encodeURIComponent(sp.txt || '')}`
                        : `?session=${encodeURIComponent(sp.txt || '')}`);

                    return (
                      <Link
                        key={`${sp.txt}-${i}`}
                        href={href}
                        className="session-link"
                        style={{
                          whiteSpace: 'nowrap',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          border: '1px solid #ccc',
                          background: isActive ? '#000' : 'transparent',
                          color: isActive ? '#fff' : '#000',
                        }}
                        aria-current={isActive ? 'true' : undefined}
                      >
                        {sp.txt}
                      </Link>
                    );
                  })}
                </div>
              )}


              {/* Price */}
              {heroPrice != null && heroPrice !== '' && (
                <h2>
                  <i>AED {heroPrice}</i>
                </h2>
              )}

              {/* Discount + offers */}
              {(drip.discount || drip.discount === 0) && (
                <p className="discount">
                  <span>{drip.discount}% discount on 3 or more sessions.</span>
                  <Link href="/explore-us/offers">Explore more offers</Link>
                </p>
              )}

              {/* Rich paragraphs */}
              {paras.length > 0 && (
                <div className="para">
                  {paras.map((para, idx) => (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: `${para}<br />` }} />
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="btn-wrap">
                {drip.bookingBtn ? (
                  /^https?:\/\//i.test(drip.bookingBtn) ? (
                    <a href={drip.bookingBtn} className="btn" target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  ) : (
                    <Link href={drip.bookingBtn} className="btn">
                      Book Now
                    </Link>
                  )
                ) : null}
                <Link href="/iv-therapy/drips" className="btn btn-stroke">
                  Explore other drips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="benifit">
        <div className="container">
          <div className="benifit-wrap">
            <div className="right">
              {/* <h2>{data?.benifitTitle}</h2> */}
              <h2>Key Benefits :</h2>
              <ul className="benifit-item">
                {drip.benifits?.map((x, index) => (
                  <li key={index}>{x}</li>
                ))}
              </ul>
              <h4>Recommended for:</h4>
              <div className="benifit-list">
                {drip.benifitList?.map((x, index) => (
                  <div className="single-list" key={index}>
                    <img src={x.icon} alt={x.txt} />
                    <p>{x.txt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {drip?.extraData?.length > 0 && (
        <section className="drips-extras">
          <div className="container">
            <div className="benifit-wrap">
              <div className="right">
                <h2 className="section-title text-center">
                  What’s Inside the {heroTitle} IV Drip?
                </h2>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            {/* ⬇️ runs on client, keeps your Carousel + TiltCard exactly */}
            <ExtrasCarousel items={drip.extraData} />
          </div>
        </section>
      )}

      {drip?.faq?.length > 0 && (
        <section className="drips-faq">
          <div className="container">
            <div className="benifit-wrap">
              <div className="right">
                <h2 className="section-title">Frequently Asked Questions (FAQ)</h2>
              </div>
            </div>
          </div>

          <div className="container">
            {/* ⬇️ runs on client, keeps your Accordion exactly */}
            <FaqAccordion items={drip.faq} />
          </div>
        </section>
      )}
    </main>
  );
}
