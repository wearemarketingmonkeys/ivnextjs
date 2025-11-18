// app/iv-therapy/boosters/page.jsx
import Link from 'next/link';
import boostersData from '../../mocks/energyBoosters.json';

// ---------- SEO ----------
export const metadata = {
  title: 'IV Boosters in Dubai | IV Wellness Lounge Clinic Treatments',
  description: 'Choose targeted IV boosters at IV Wellness Lounge Clinic Dubai for enhanced hydration, energy, and wellness. Book your customized booster session now.',
  alternates: { canonical: 'https://ivhub.com/iv-therapy/boosters' },
  openGraph: {
    title: 'IV Boosters in Dubai | IV Wellness Lounge Clinic Treatments',
    description: 'Choose targeted IV boosters at IV Wellness Lounge Clinic Dubai for enhanced hydration, energy, and wellness. Book your customized booster session now.',
    url: 'https://ivhub.com/iv-therapy/boosters',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IV Boosters in Dubai | IV Wellness Lounge Clinic Treatments',
    description: 'Choose targeted IV boosters at IV Wellness Lounge Clinic Dubai for enhanced hydration, energy, and wellness. Book your customized booster session now.',
    images: ['https://ivhub.com/og.png'],
  },
};

// Helper to resolve /public asset paths
const toPublic = (p) => (p ? (p.startsWith('/') ? p : `/assets/img/boosters/${p}`) : '');

export default function EnergyBoosterPage() {
  // Map JSON to SSR-safe image paths (no import.meta.glob in Next.js)
  const boosters = (boostersData?.boostersData || []).map((b) => ({
    ...b,
    img: toPublic(b.img),
  }));

  const heroIcon = '/assets/img/boosters/energy-boosters.jpg';

  return (
    <main className="energy-boosters">
      {/* Hero */}
      <section className="energy-hero">
        <div className="container">
          <div className="hero-wrap">
            <div className="left">
              <h3>Book your next service today</h3>
              <h1>Energy Boosters</h1>
              <p>
                <i>20% discount on 3 or more sessions</i>
              </p>
            </div>
            <div className="right">
              <img src={heroIcon} alt="Energy Boosters" />
            </div>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="boosters">
        <div className="container">
          <div className="boosters-wrap">
            {boosters.map((x, index) => {
              const boosterMessage = `Hi I would like to book ${x.title}`;
              const whatsappUrl = `https://wa.me/97180048482?text=${encodeURIComponent(boosterMessage)}`;

              return (
                <article
                  className="single-booster"
                  id={x.scrollId || undefined}
                  key={index}
                >
                  <div className="left">
                    <h1>{x.title}</h1>
                    {x.category ? <h2>{x.category}</h2> : null}
                    {x.description ? <p>{x.description}</p> : null}

                    <div className="amount-wrap">
                      <div className="btn-wrap">
                        {/* external link for WhatsApp */}
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                        >
                          Book now
                        </a>
                      </div>

                      {x.price != null && x.price !== '' && (
                        <div className="amount">
                          <span>AED</span>
                          <span>{x.price}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="right">
                    {x.img ? <img src={x.img} alt={x.title} /> : null}
                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>
    </main>
  );
}