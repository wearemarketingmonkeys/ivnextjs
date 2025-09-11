// app/iv-therapy/drips/[slug]/page.jsx
import dynamic from 'next/dynamic';


import { notFound } from 'next/navigation';
import Link from 'next/link';
import dripsData from '../../../mocks/wellnessDrips.json';
import DripsCard from "../../../components/DripsCard.jsx";


const ExtrasCarousel = dynamic(() => import('./ExtrasCarouselClient'), { ssr: false });
const BenefitsAccordion = dynamic(() => import('./BenefitsAccordionClient'), { ssr: false });
const FaqAccordion  = dynamic(() => import('./FaqAccordionClient'),  { ssr: false });


// ----------------- helpers -----------------
const toPublic = (p) => {
  if (!p) return '';
  return p.startsWith('/') ? p : `/assets/img/drips/${p}`;
};

const normButton = (b = {}) => ({
  ...b,
  id: b.id ?? b.iv ?? null,
  // normalize txt/title, price, and image path
  title: b.title || b.txt || '',
  img: toPublic(b.img || b.icon),
  price: b.price ?? null,
});

// normalize shapes
const normSession = (s = {}) => ({
  iv: s.iv || null,
  txt: s.txt || '',
  price: s.price ?? null,
});

// Choose the session list based on iv, with fallbacks.
// Supported shapes:
//  A) drip.sessionpriceByPid[iv] = [{txt, price}]
//  B) drip.sessionprice = [{iv, txt, price}]   (filter by iv)
//  C) drip.sessionprice = [{txt, price}]        (global / default)
const getSessionListForPid = (drip, iv) => {
  if (!drip) return [];

  // A) per-PID map
  if (drip.sessionpriceByPid && iv && Array.isArray(drip.sessionpriceByPid[iv])) {
    return drip.sessionpriceByPid[iv].map(normSession);
  }

  // B) per-PID array
  if (Array.isArray(drip.sessionprice) && drip.sessionprice.some(sp => sp?.iv)) {
    return drip.sessionprice
      .filter(sp => !iv || String(sp.iv) === String(iv))
      .map(normSession);
  }

  // C) global default
  if (Array.isArray(drip.sessionprice)) {
    return drip.sessionprice.map(normSession);
  }

  return [];
};

const pickSession = (sessionList, sessionTxt) => {
  if (!sessionTxt || !sessionList?.length) return null;
  const s = sessionList.find(
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
    sessionpriceByPid: d.sessionpriceByPid || undefined,
    pairings: Array.isArray(d.pairings) ? d.pairings : [],
  };

};

const allDrips = () => (dripsData?.dripsData || []).map(normalizeDrip);
const bySlug = (slug) => allDrips().find((d) => d.slug === slug) || null;
const byId = (id) => allDrips().find((d) => String(d.id) === String(id)) || null; // NEW

const pickVariant = (drip, variantName) => {
  if (!variantName || !drip.buttonslist?.length) return null;
  // match by title (case-insensitive)
  const v = drip.buttonslist.find(
    (b) => (b.title || '').trim().toLowerCase() === variantName.trim().toLowerCase()
  );
  return v || null;
};

// NEW: pick variant by iv from URL (compares to button.id)
const pickVariantByPid = (drip, iv) => {
  if (!iv || !drip.buttonslist?.length) return null;
  const v = drip.buttonslist.find((b) => String(b.id) === String(iv));
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

  // read iv from query and resolve which product drives session pricing
  const pidFromQuery = searchParams?.iv || null;
  const priceDrip = pidFromQuery ? (byId(pidFromQuery) || drip) : drip; // NEW

  // derive active variant by iv first, then fall back to variant name
  const activeByPid = pickVariantByPid(drip, pidFromQuery);
  const activeVariant = activeByPid || active;

  // maintain a pidActive for URL persistence
  const pidActive = pidFromQuery || activeVariant?.id || drip.id || null;

  // get the relevant session list for that iv (from the resolved product)
  const sessionList = getSessionListForPid(priceDrip, pidActive);

  // resolve the active session from the list
  const activeSession = pickSession(sessionList, searchParams?.session);

  // base hero values (variant or drip)
  const heroImg = activeVariant?.img || drip.img;
  const heroTitle = activeVariant?.title || drip.title;
  const heroBasePrice =
    activeVariant && activeVariant.price !== null && activeVariant.price !== '' ? activeVariant.price : drip.price;

  // session overrides price if selected (or default to first in the list)
  const heroPrice = (activeSession?.price ?? (sessionList[0]?.price ?? heroBasePrice));



  // for SEO and UX, expose the same “buttonslist” choices as links that toggle the query param
  const buttons = drip.buttonslist || [];

  // build rich paragraphs (para1..para6)
  const paras = [drip.para1, drip.para2, drip.para3, drip.para4, drip.para5, drip.para6].filter(
    (p) => typeof p === 'string' && p.trim() !== ''
  );

  // ------- Pairings (server-safe) -------
  // Your JSON can include: { pairings: [{ dripid: <id> }, ...] }
  const all = allDrips();
  const pairingDrips =
    drip?.pairings?.map((p) => all.find((d) => d.id === p.dripid)).filter(Boolean) || [];

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

              {drip?.superline?.length > 0 && (
                <div className="superline flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-shrink-0 inline-block"
                    style={{ minWidth: "20px", minHeight: "20px" }}
                  >
                    <circle cx="12" cy="12" r="12" fill="black" />
                    <path
                      d="M8 12l3 3 5-6"
                      fill="none"
                      stroke="#F5F5DC"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="leading-snug">
                    {drip.superline}
                  </p>
                </div>
              )}

              {/* Inline Buttons as server links (SSR, no client state needed) */}
              {buttons.length > 0 && (
                <div
                  className="buttons-list"
                  style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '10px 0' }}
                >
                  {buttons.map((btn, i) => {
                    const isActive = pidFromQuery
                      ? String(pidFromQuery) === String(btn.id)
                      : ((activeVariant?.title || '').toLowerCase() === (btn.title || '').toLowerCase() ||
                         (!activeVariant && i === 0 && !searchParams?.variant)); // show first as active when no variant chosen
                    const href = `/iv-therapy/drips/${drip.slug}` +
                            `?variant=${encodeURIComponent(btn.title || '')}` +
                            (searchParams?.session ? `&session=${encodeURIComponent(searchParams.session)}` : '') +
                            (btn.id ? `&iv=${encodeURIComponent(String(btn.id))}` : '');



                    return (
                      <Link
                        key={`${btn.title}-${i}`}
                        href={href}
                        className="variant-link"
                        scroll={false} // prevent jumping to top on navigation
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

              {/* Price */}
              {heroPrice != null && heroPrice !== '' && (
                <h2>
                  <i>AED {heroPrice}</i> / per session
                </h2>
              )}

              {sessionList.length > 0 && (
                <div className="session-buttons" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '10px 0' }}>
                  {sessionList.map((sp, i) => {
                    const isActive =
                      (activeSession?.txt || '').toLowerCase() === (sp.txt || '').toLowerCase() ||
                      (!activeSession && i === 0 && !searchParams?.session);

                    const href =
                      `/iv-therapy/drips/${drip.slug}` +
                      (searchParams?.variant
                        ? `?variant=${encodeURIComponent(searchParams.variant)}&session=${encodeURIComponent(sp.txt || '')}&iv=${encodeURIComponent(pidActive || '')}`
                        : `?session=${encodeURIComponent(sp.txt || '')}&iv=${encodeURIComponent(pidActive || '')}`);

                    return (
                      <Link
                        key={`${sp.txt}-${i}`}
                        href={href}
                        className="session-link"
                        scroll={false} // prevent jumping to top on navigation
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



              

              {/* Discount + offers */}
              {/* {(drip.discount || drip.discount === 0) && (
                <p className="discount">
                  <span>{drip.discount}% discount on 3 or more sessions.</span>
                  <Link href="/explore-us/offers">Explore more offers</Link>
                </p>
              )} */}

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

              <BenefitsAccordion drip={drip} />
            </div>
          </div>
        </div>
      </section>


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

          <div className="container">
            {/* ⬇️ runs on client, keeps your Carousel + TiltCard exactly */}
            <ExtrasCarousel items={drip.extraData} />
          </div>
        </section>
      )}

      {drip?.faq?.length > 0 && (
        <section className="drips-faq">
          <div className="container">
            <div className="benifit-wrap">
              <div className="left">
                <h2 className="section-title">Frequently Asked Questions (FAQ)</h2>
                {/* ⬇️ runs on client, keeps your Accordion exactly */}
                <FaqAccordion items={drip.faq} />
              </div>
              <div className="right">
                <h2 className="section-title">
                  Not Sure which IV Drip or Treatment is Right For You?
                </h2>
                <div className="btn-wrap">
                    <a
                  href="https://wa.me/97180048482"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <span>
                      Schedule A Consultation
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pairings (server render) */}
      {pairingDrips && pairingDrips.length > 0 && (
        <div className="drips-pairings">
          <div className="container">
            <div className="benifit-wrap">
              <div className="right">
                <h2 className="section-title">Recommended Pairings</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="drips-pairings-wrap">
              {pairingDrips.map((drip) => (
                <div className="single-drips-details" key={drip.id}>
                  <DripsCard
                    dripsNumber={drip.id}
                    dripsImg={drip.img}
                    title={drip.title}
                    desc={drip.desc}
                    bookBtnUrl={drip.bookingBtn}
                    moreDetailsUrl={drip.moreDetailsUrl}
                    price={drip.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


/*
{
        "id": 20,
        "category": "Recovery",
        "img": "hydration-hub-express.webp",
        "title": "Hydration Hub Express",
        "price": 299,
        "metadesc": "Quickly rehydrate with the Hydration Hub Express IV Drip at IV Wellness Lounge. Personalized IV therapy in Dubai for instant refreshment. Book now!",
        "desc": "For Dehydrated you",
        "para1": "Experience rapid and effective rehydration with our <b>Hydration IV Therapy in Dubai</b> at IV Wellness Lounge. Designed to replenish vital fluids and electrolytes lost due to dehydration, illness, or environmental stressors, this IV drip supports your body's natural balance and enhances recovery.",
        "para2": "Whether you’re feeling under the weather, battling nausea, or recovering from food poisoning or excessive heat, our Hydration IV drip restores hydration at the cellular level, promoting overall wellness and vitality.",
        "discount": 20,
        "benifitImg": "ben.webp",
        "benifitTitle": "Get Back On Your Feet with IV hydration drip",
        "benifits": [
          "Rapidly Restores Hydration And Electrolyte Balance",
          "Supports Recovery From Dehydration Caused By Illness, Food Poisoning, Or Alcohol Consumption",
          "Protects The Body From Toxins And Environmental Pollutants",
          "Enhances Energy Levels And Mental Clarity",
          "Promotes Overall Well-Being And Faster Recovery",
          "Safe, Non-Invasive, And Clinically Supervised IV Therapy"
        ],
        "benifitList": [
          {
            "icon": "icon9.png",
            "txt": "Individuals Experiencing Dehydration From Illness, Heat, Or Physical Exertion"
          },
          {
            "icon": "icon15.png",
            "txt": "Those Recovering From Food Poisoning Or Stomach Upset"
          },
          {
            "icon": "icon9.png",
            "txt": "People Suffering From Hangovers Or Alcohol-Induced Dehydration"
          },
          {
            "icon": "icon6.png",
            "txt": "Athletes And Fitness Enthusiasts Needing Rapid Rehydration"
          },
          {
            "icon": "icon3.png",
            "txt": "Anyone Exposed To Environmental Pollutants And Toxins"
          },
          {
            "icon": "icon11.png",
            "txt": "Individuals Feeling Fatigued, Nauseous, Or Under The Weather Due To Fluid Loss"
          }
        ],
        "pairings": [
          {
            "dripid": 4
          },
          {
            "dripid": 18
          },
          {
            "dripid": 7
          }
        ],
        "extraData": [
          {
            "name": "Isotonic Solution",
            "txt": "A balanced electrolyte infusion that rapidly replenishes fluids and minerals to restore hydration"
          },
          {
            "name": "Electrolyte Cocktail",
            "txt": "A blend of essential minerals like sodium, potassium, and magnesium to boost energy, support cellular function, and maintain fluid balance"
          }
        ],
        "faq":[
          {
            "question": "How soon will I feel the effects of the Hydration IV drip?",
            "answer": "Most clients notice improved energy and hydration within 15 to 30 minutes after the session."
          },
          {
            "question": "Is the Hydration IV drip safe?",
            "answer": "Yes, our Hydration IV Therapy uses sterile, medical-grade solutions administered by trained professionals to ensure your safety and comfort."
          },
          {
            "question": "How long does a Hydration IV session take?",
            "answer": "Typically, the session lasts between 30 to 45 minutes, depending on individual needs."
          },
          {
            "question": "Who can benefit from this therapy?",
            "answer": "Anyone experiencing dehydration due to illness, heat exposure, physical exertion, or environmental toxins can benefit from this IV therapy."
          },
          {
            "question": "Can this therapy help with hangovers?",
            "answer": "Yes, the Hydration IV drip replenishes fluids and electrolytes lost due to alcohol, helping alleviate hangover symptoms efficiently."
          }
        ],
        "bookingBtn": "https://book.ivhub.com/",
        "moreDetailsUrl": "/iv-therapy/drips/hydration-hub-express"
      },
      {
  "id": 24,
  "category": "Recovery",
  "img": "ramdan-hub.webp",
  "title": "Ramadan Hub",
  "price": 799,
  "metadesc": "Stay energized during Ramadan with the Ramadan Hub IV Drip at IV Wellness Lounge. Personalized IV therapy in Dubai to support your fasting. Book now!",
  "desc": "To help you prepare for the holy month of Ramadan",
  "para1": "Our <b>Ramadan IV Drip Therapy</b> is specially formulated to support your body during fasting periods by replenishing essential fluids, electrolytes, and nutrients lost during long hours without food or water. Designed to combat fatigue, dehydration, and low energy, this IV drip helps you feel stronger both mentally and physically throughout the holy month.",
  "para2": "Whether you're preparing for Ramadan or looking to recover after fasting, this targeted <b>IV therapy in Dubai</b> ensures your body receives immediate hydration and nourishment in a safe and efficient way. Administered by medical professionals in our wellness clinic or in the comfort of your home, our <b>IV drip in Dubai</b> is the perfect way to support your health during this sacred time.",
  "discount": 20,
  "benifitImg": "ben.webp",
  "benifitTitle": "Get Back On Your Feet with Ramadan drip",
  "benifits": [
    "Rehydrates The Body Before And After Fasting",
    "Restores Essential Electrolytes And Multivitamins",
    "Improves Focus, Energy Levels, And Mood During Long Fasts",
    "Supports Immunity And Recovery From Fasting-Related Fatigue",
    "Aids In Detoxification And Preparing The Body For Fasting",
    "Promotes Mental Clarity And Reduces Physical Weakness"
  ],
  "benifitList": [
    {
      "icon": "icon5.png",
      "txt": "Preparing Your Body Before The Start Of Ramadan"
    },
    {
      "icon": "icon2.png",
      "txt": "Daily Support During Fasting Periods"
    },
    {
      "icon": "icon9.png",
      "txt": "Recovering From Fatigue Or Dehydration"
    },
    {
      "icon": "icon6.png",
      "txt": "Individuals Feeling Weak, Lightheaded, Or Low On Energy During The Day"
    },
    {
      "icon": "icon3.png",
      "txt": "People Observing Ramadan During The Summer Heat"
    }
  ],
  "pairings": [
    {
      "dripid": 4
    },
    {
      "dripid": 10
    },
    {
      "dripid": 20
    }
  ],
  "extraData": [
    {
      "name": "Hydration Fluids",
      "txt": "Instantly restore lost fluids due to fasting."
    },
    {
      "name": "Electrolytes",
      "txt": "Maintain cellular balance and prevent dehydration-related fatigue."
    },
    {
      "name": "Multivitamins",
      "txt": "Boost immunity and energy naturally during fasting."
    },
    {
      "name": "Trace Minerals",
      "txt": "Help balance pH and support overall wellness during prolonged hours without food or water."
    }
  ],
  "faq":[
    {
      "question": "What is Ramadan IV Drip Therapy?",
      "answer": "It’s a tailored IV drip therapy formulated to help you stay hydrated, nourished, and energized before, during, and after fasting in Ramadan. It delivers fluids and essential nutrients directly into the bloodstream."
    },
    {
      "question": "Is it safe to take this IV during Ramadan?",
      "answer": "Yes, our IVs are safe and administered by licensed medical professionals. For those who want to take it before suhoor or after iftar, it is highly effective and permissible as it doesn't interfere with the fasting hours."
    },
    {
      "question": "Can I take this IV Drip before Ramadan starts?",
      "answer": "Absolutely. It is highly recommended to take it a few days before Ramadan to cleanse your body and boost hydration levels ahead of the fasting period."
    },
    {
      "question": "What are the key benefits of this IV drip during fasting?",
      "answer": "It combats dehydration, restores energy, reduces fatigue, and improves mood, helping you stay productive and focused during Ramadan."
    },
    {
      "question": "Is this IV Drip available for home service in Dubai?",
      "answer": "Yes. You can book a Ramadan IV Drip therapy in Dubai to be administered in your home, hotel, or office through our mobile wellness team."
    }
  ],
  "bookingBtn": "https://book.ivhub.com/",
  "moreDetailsUrl": "/iv-therapy/drips/ramadan-hub"
}
*/