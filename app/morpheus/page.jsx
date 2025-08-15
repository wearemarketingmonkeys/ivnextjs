import Link from 'next/link';
import Script from 'next/script';

import CompareClient from './CompareClient';
import PriceAccordion from './PriceAccordion';
import VerticalCarouselClient from './VerticalCarouselClient';
import FaqAccordionClient from './FaqAccordionClient';


// --- SEO ---
export const metadata = {
  title: 'Morpheus8 RF Microneedling | IV Wellness Lounge Clinic in Dubai',
  description:
    'A radiofrequency-enhanced microneedling treatment that revitalizes collagen production for renewed, taut, and visibly rejuvenated skin.',
  alternates: { canonical: 'https://ivhub.com/morpheus' },
  openGraph: {
    title: 'Morpheus8 RF Microneedling | IV Wellness Lounge Clinic in Dubai',
    description:
      'A radiofrequency-enhanced microneedling treatment that revitalizes collagen production for renewed, taut, and visibly rejuvenated skin.',
    url: 'https://ivhub.com/morpheus',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morpheus8 RF Microneedling | IV Wellness Lounge Clinic in Dubai',
    description:
      'A radiofrequency-enhanced microneedling treatment that revitalizes collagen production for renewed, taut, and visibly rejuvenated skin.',
    images: ['https://ivhub.com/og.png'],
  },
};

// --- Data (from your original file) ---
const service = {
  treatments: [
    { category: 'Body', services: [
      { name: 'Morpheus Face', price: '2299' },
      { name: 'Morpheus Body', price: '2999' },
    ]},
    { category: 'Add-On', services: [
      { name: 'PRP', price: '399' },
      { name: 'Exosomes', price: '1499' },
    ]},
  ],
};

const steps = [
  {
    img: '/assets/img/morpheus/step1.jpg',
    title: 'Cleanse & Prep',
    desc: 'Your service begins with a skin analysis and cleanse. Then, a topical anesthetic will be applied.',
  },
  {
    img: '/assets/img/morpheus/step2.jpg',
    title: 'Microneedling',
    desc: 'A matrix of needles penetrates the dermis to immediately stimulate collagen & elastin production.',
  },
  {
    img: '/assets/img/morpheus/step3.jpg',
    title: 'Radiofrequency Energy',
    desc: 'Radiofrequency energy is delivered deep into the skin to remodel collagen and jumpstart the body\'s natural healing process.',
  },
];

const beforeAfter = [
  {
    icon: '/assets/img/morpheus/before.png',
    title: "Before Your Treatment",
    list: [
      "Wait to book Morpheus8 if you've had other facial treatments (Injectables) -except for Hydrafacial- within the past two weeks.",
      "If you've recently had a sunburn, wait one week before undergoing this treatment.",
      "Avoid photosensitizing medications, such as antibiotics, for at least 2 days prior to treatment.",
    ],
  },
  {
    icon: '/assets/img/morpheus/after.png',
    title: "After Your Treatment",
    list: [
      "Avoid strenuous exercise or activities that cause sweating for a few days.",
      "Use a gentle cleanser, moisturizer, and SPF 30.",
      "Do not scratch or pick at your skin as it heals.",
    ],
  },
];

const faq = [
  {
    question: "Who is Morpheus8 best for?",
    answer:
      "Morpheus8 is ideal for individuals seeking to tighten their skin, diminish the appearance of scars, and boost collagen production for a youthful, radiant complexion.",
  },
  {
    question: "What are the benefits of radiofrequency energy?",
    answer:
      "Radiofrequency energy heats the skin's deeper layers, stimulating the production of collagen and elastin. This process enhances skin texture and complexion, resulting in a more youthful and radiant appearance.",
  },
  {
    question: "When will I see results?",
    answer:
      "Initial results can appear as soon as 3 days after the treatment, with optimal results typically visible around 3 weeks later.",
  },
  {
    question: "How often should I get Morpheus8?",
    answer:
      "The frequency of treatments depends on your specific goals. Generally, we recommend a series of 3 treatments, spaced 4 weeks apart.",
  },
  {
    question: "Is it the same as regular microneedling?",
    answer:
      "Morpheus8 goes beyond traditional microneedling by incorporating radiofrequency and reaching deeper layers of the skin. This enhances its effectiveness in stimulating collagen production.",
  },
  {
    question: "What is the downtime?",
    answer:
      "Post-treatment, you may experience redness, flaking, and puffiness. Minor bruising is also possible and typically resolves within a few days. The redness, flaking, and puffiness should subside within a few days as well.",
  },
  {
    question: "How long does it take?",
    answer:
      "The entire Morpheus8 RF Microneedling session lasts about 90 minutes, which includes the time needed to apply the numbing cream.",
  },
  {
    question: "Why is it called Morpheus8?",
    answer:
      "The treatment is named after Morpheus from The Matrix, as it uses a matrix of microneedles.",
  },
  {
    question: "Can I wear makeup after treatment?",
    answer:
      "We advise against wearing makeup for 1-2 days post-treatment due to possible redness during this period.",
  },
  {
    question: "What other treatments can I pair with Morpheus8?",
    answer:
      "Plasma injections are an excellent complement to Morpheus8, as they can accelerate recovery time. This treatment can be performed immediately after your Morpheus8 session.",
  },
  {
    question: "What do you mean by 'exfoliating active ingredients'?",
    answer:
      "These are ingredients in skincare products that cause exfoliation, either physically or chemically. Examples include acids, non-comedogenic retinols, benzoyl peroxide, and scrubs.",
  },
  {
    question: "Can I get this a few days before an event?",
    answer:
      "It's best to avoid scheduling this treatment a few days before an event, as you might experience some redness and flaking afterward.",
  },
];

export default function MorpheusPage() {
  // Add a class to <html> when JS is running → lets us hide SSR fallbacks via CSS
  return (
    <div className="morpheus">
      <Script id="js-flag" strategy="afterInteractive">
        {`document.documentElement.classList.add('js')`}
      </Script>

      {/* HERO */}
      <div className="morpheus-hero">
        <div className="container">
          <div className="details-wrap">
            <div className="left">
              <video autoPlay loop muted playsInline>
                <source src="/assets/video/morpheus8.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="right">
              <h1>
                Morpheus8 RF <br /> Microneedling
              </h1>
              <div className="description">
                A radiofrequency-enhanced microneedling treatment that revitalizes
                collagen production for renewed, taut, and visibly rejuvenated skin.
              </div>

              <h2>How Morpheus8 RF Microneedling Works for Your Unique Needs</h2>
              <div className="description">
                Dealing with skin laxity, fine lines, wrinkles, or scarring? Morpheus8 combines microneedling and radiofrequency to address these concerns and is safe for everyone.
              </div>

              <div className="ideal-for">
                <p><strong>Ideal For:</strong></p>
                <p>All Skin Tones | Scarring | Stretchmarks | Collagen Production</p>
              </div>

              <div className="pricesection">
                <h1>Price &amp; Package</h1>
                <br />
                <PriceAccordion treatments={service.treatments} />
              </div>

              <div className="btn-wrap">
                <a
                  className="btn"
                  href={`https://api.whatsapp.com/send/?phone=97180048482&text=${encodeURIComponent(
                    'Hello, I want to book the Morpheus8 Treatment'
                  )}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="how-it-works">
        <div className="container">
          <VerticalCarouselClient steps={steps} />
        </div>
      </div>

      {/* PRE/POST */}
      <div className="before-after">
        <div className="container">
          <div className="before-after-wrap">
            {beforeAfter.map((x, i) => (
              <div className="wrapper" key={i}>
                <img src={x.icon} alt={x.title} />
                <h1>{x.title}</h1>
                {x.desc && <h2>{x.desc}</h2>}
                <ul>{x.list.map((y, j) => <li key={j}>{y}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div className="morpheus-result">
        <div className="container">
          <div className="details-wrap">
            <div className="left">

              {/* Enhanced client slider (no SSR lib) */}
              <div data-enhanced>
                <CompareClient
                  before="/assets/img/morpheus/morpheus-before.webp"
                  after="/assets/img/morpheus/morpheus-after.webp"
                />
              </div>

            </div>

            <div className="right">
              <h1>Results</h1>
              <div className="description">
                Morpheus8 combined with PRP and Exosomes delivers a powerful skin rejuvenation treatment that enhances texture, reduces unwanted fat, tightens skin, and improves overall tone for a visibly refreshed and youthful appearance.
              </div>
              <div className="unwanted-hair">
                <img src="/assets/img/morpheus/calendar.png" alt="Frequency" />
                <span>Frequency</span>
              </div>
              <div className="description">Morpheus8 (3 sessions)</div>
            </div>
          </div>

          <div className="info">
            <img src="/assets/img/morpheus/info.png" alt="info" />
            <span>
              Shave the area you want treated at least 24 hours before the appointment.
            </span>
          </div>
        </div>
      </div>

      {/* FAQ */}

      <div className="faq">
        <div className="container">
          <div className="faq-wrap">
            <h1>Questions? We’ve Got Answers</h1>


            {/* ✅ Client-enhanced accordion (hidden if JS is off) */}
            <div data-enhanced>
              <FaqAccordionClient items={faq} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
