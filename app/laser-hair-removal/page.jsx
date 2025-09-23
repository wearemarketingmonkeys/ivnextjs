import Link from 'next/link';
import Script from 'next/script';

// Client islands
import FaqAccordionClient from './FaqAccordionClient';
import PriceAccordionClient from './PriceAccordionClient';
import VerticalCarouselClient from './VerticalCarouselClient';
import CompareClient from './CompareClient';

// --- SEO ---
export const metadata = {
  title: 'Soprano Titanium – Laser Hair Removal | IV Wellness Lounge Clinic in Dubai',
  description:
    'Virtually painless, safe for all skin tones, and highly effective. See pricing by area and learn how Soprano Titanium works.',
  alternates: { canonical: 'https://ivhub.com/laser-hair-removal' },
  openGraph: {
    title: 'Soprano Titanium – Laser Hair Removal | IV Wellness Lounge Clinic in Dubai',
    description:
      'Virtually painless, safe for all skin tones, and highly effective. See pricing by area and learn how Soprano Titanium works.',
    url: 'https://ivhub.com/laser-hair-removal',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soprano Titanium – Laser Hair Removal | IV Wellness Lounge Clinic in Dubai',
    description:
      'Virtually painless, safe for all skin tones, and highly effective. See pricing by area and learn how Soprano Titanium works.',
    images: ['https://ivhub.com/og.png'],
  },
};

// --- DATA (same content as your original) ---
const service = {
  treatments: [
    { category: 'XS Area', areas: 'Upper Lip, Chin, Nipple, Fingers, Toes, Ears, Eyebrows, Nose',
      services: [{ name:'1 Session', price:'119' }, { name:'3 Sessions', price:'299' }, { name:'6 Sessions', price:'429' }] },
    { category: 'S Area', areas: 'Neck, Cheeks, Jawline, Hands, Abdomen Line, Feet',
      services: [{ name:'1 Session', price:'219' }, { name:'3 Sessions', price:'529' }, { name:'6 Sessions', price:'799' }] },
    { category: 'M Area', areas: 'Face, Face Beard, Under Arms, Buttocks, Bikini Line, Shoulders Top, Hairline',
      services: [{ name:'1 Session', price:'299' }, { name:'3 Sessions', price:'699' }, { name:'6 Sessions', price:'999' }] },
    { category: 'L Area', areas: 'Half Legs, Abdomen, Full Bikini, Half Back, Chest',
      services: [{ name:'1 Session', price:'499' }, { name:'3 Sessions', price:'999' }, { name:'6 Sessions', price:'1699' }] },
    { category: 'XL Area', areas: 'Full Arms, Full Legs, Full Back, Chest & Abdomen, Back & Shoulders',
      services: [{ name:'1 Session', price:'699' }, { name:'3 Sessions', price:'1499' }, { name:'6 Sessions', price:'2299' }] },
    { category: 'Semi Body (Female)', areas: 'Semi Body',
      services: [{ name:'1 Session', price:'1499' }, { name:'3 Sessions', price:'3599' }, { name:'6 Sessions', price:'4999' }] },
    { category: 'Full Body (Female)', areas: 'Full',
      services: [{ name:'1 Session', price:'1899' }, { name:'3 Sessions', price:'4499' }, { name:'6 Sessions', price:'6499' }] },
    { category: 'Semi Body (Male)', areas: 'Semi Body',
      services: [{ name:'1 Session', price:'1899' }, { name:'3 Sessions', price:'4499' }, { name:'6 Sessions', price:'6799' }] },
    { category: 'Full Body (Male)', areas: 'Full',
      services: [{ name:'1 Session', price:'2199' }, { name:'3 Sessions', price:'5199' }, { name:'6 Sessions', price:'7899' }] },
  ],
};

const steps = [
  {
    img: '/assets/img/laser/step1.jpg',
    title: 'Laser Treatment',
    desc: 'Soprano Titanium hair removal utilizes 3D technology, integrating three laser wavelengths into a single applicator for optimal effectiveness.',
  },
  {
    img: '/assets/img/laser/step2.jpg',
    title: 'Targeting Hair Roots',
    desc: 'By targeting roots, the laser decreases the blood supply to hair follicles, causing them to become weaker &amp; finer.',
  },
  {
    img: '/assets/img/laser/step3.jpg',
    title: 'Inhibition of Hair Growth',
    desc: 'The hair follicle chromophores are damaged, inhibiting future hair growth.',
  },
];

const beforeAfter = [
  {
    icon: '/assets/img/laser/before.png',
    title: 'Before Your Treatment',
    desc: 'Shave, the area that you want to get lasered atleast 24hrs before the appointment',
    list: [
      'Avoid sun exposure, tanning beds, and self-tanning products at least 24 hours prior to treatment.',
      'Avoid exfoliating active ingredients on your treatment area for at least 3 days prior to treatment.',
      'Avoid photosensitizing medications, such as antibiotics, for at least 2 days prior to treatment.',
    ],
  },
  {
    icon: '/assets/img/laser/after.png',
    title: 'After Your Treatment',
    list: [
      'Avoid direct sun exposure after laser hair removal, and be sure to wear SPF to help prevent damage.',
      'If skin feels a bit sensitive after treatment, you can utilize an ice pack or Aloe vera Gel to soothe the treatment area.',
      'Feel free to shave between appointments.',
    ],
  },
];

const faq = [
  { question: 'Who is Laser Hair Removal best for?', answer: "Our laser hair treatment is safe for all skin types & tones, from tanned to dark skin" },
  { question: 'Is Laser Hair Removal permanent?', answer: "While laser hair removal isn't a 100% permanent solution, it will significantly reduce future hair growth in treated areas. Hair that returns will be sparse, thinner, and possibly lighter. For best results, we recommend maintenance treatments once or twice a year, depending on your unique needs." },
  { question: 'What does it feel like?', answer: 'While some areas of the body are naturally more sensitive than others, Laser Hair Removal with soprano titanium is virtually painless, and often described as feeling like a hot stone massage.' },
  { question: "Can I get Laser Hair Removal if I'm pregnant?", answer: 'We recommend avoiding laser hair removal during pregnancy.' },
  { question: 'When will I see results?', answer: "Hair begins to fall out around 2 weeks after your treatment, but it's very important to complete the recommended amount of treatments for optimal results. Though you'll experience smoother skin after this first treatment, the hair will return, so be sure to follow the recommended amount of sessions to ensure lasting results. Laser hair removal generally requires 6-10 treatments depending on hair growth, hair type and color, and the area of removal. Appointments should be spaced about 4 weeks apart for the face and 6 weeks apart for the body." },
  { question: "What's the downtime?", answer: "There's virtually zero downtime—you can go back to work or your daily routine—but you may experience some redness afterward, and must stay out of direct sun for 48 hours" },
  { question: 'I have melanin-rich skin. Is this treatment safe for me?', answer: "We use the soprano titanium for melanin-rich skin (Nd:Yag|1064), which targets just the melanin in hair, not the skin specifically. Because of that, it's safe for all skin tones, but especially melanin-rich skin." },
];

export default function LaserHairRemovalPage() {
  // Add `.js` to <html> after hydration → lets us hide SSR fallbacks in CSS
  return (
    <div className="laser-hair-removal">
      <Script id="js-flag" strategy="afterInteractive">
        {`document.documentElement.classList.add('js')`}
      </Script>

      {/* HERO */}
      <div className="laser-hero">
        <div className="container">
          <div className="details-wrap">
            <div className="left">
              <img src="/assets/img/laser/hero.webp" alt="laser hair removal" />
            </div>
            <div className="right">
              <h1>Soprano Titanium - <br /> Laser Hair Removal</h1>
              <p><i>Unlimited Hair Removal Sessions for one year - <strong>AED 9,999</strong></i></p>
              <div><h2>Pricing Starts From 119 AED</h2></div>
              <div className="description">
                Remove unwanted hair with the Most Efficient, Painless, Safe for
                all skin SOPRANO TITANIUM.
              </div>
              <div className="unwanted-hair">
                <img src="/assets/img/laser/hair-removal-icon.png" alt="hair removal" />
                <span>Unwanted Hair</span>
              </div>
              <div className="description">
                Soprano Titanium hair removal is compatible with all skin types
                and tones, offering virtually painless treatment akin to a
                soothing hot stone massage. Its rapid and efficient process
                outperforms other laser hair removal methods available, ensuring
                swift and effective results. Additionally, it is renowned for
                its ability to gently lift the skin, leaving it feeling firmer
                and rejuvenated.
              </div>
              <div className="ideal-for">
                <p><strong>Ideal For:</strong></p>
                <p>All Skin Types & Tones | Darker Hair | Melanin-Rich Skin</p>
              </div>

              <div className="btn-wrap">
                <a
                  className="btn"
                  href={`https://api.whatsapp.com/send/?phone=97180048482&text=${encodeURIComponent(
                    'Hello, I want to book the Laser Hair Treatment'
                  )}&type=phone_number&app_absent=0`}
                  target="_blank" rel="noopener noreferrer"
                >
                  BOOK Now
                </a>
              </div>

              {/* Price & Package */}
              <div className="pricesection">
                <h1>Price &amp; Package</h1>
                <br />
                {/* Client accordion enhancement */}
                <div data-enhanced>
                  <PriceAccordionClient treatments={service.treatments} />
                </div>
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
            {beforeAfter.map((x, index) => (
              <div className="wrapper" key={index}>
                <img src={x?.icon} alt={x.title} />
                <h1>{x?.title}</h1>
                {x.desc && <h2>{x.desc}</h2>}
                <ul>
                  {x?.list.map((y, yIndex) => (
                    <li key={yIndex}>{y}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div className="laser-result">
        <div className="container">
          <div className="details-wrap">
            <div className="left">
              <img src="/assets/img/laser/result.png" alt="laser hair removal" />
            </div>

            <div className="right">
              <h1>Results</h1>
              <div className="description">
                With Soprano Titanium technology, results begin to show approximately 2 weeks after your first treatment. It’s important to complete the recommended number of sessions to achieve smooth, long-lasting hairless skin.
              </div>
              <div className="unwanted-hair">
                <img src="/assets/img/laser/calendar.png" alt="hair removal" />
                <span>Frequency</span>
              </div>
              <div className="description">
                We recommend about 6-10 treatments depending on hair growth,
                hair type & color, and size of the treatment area. Your
                appointments should be spaced about 4-6 weeks apart.
              </div>
            </div>
          </div>

          <div className="info">
            <img src="/assets/img/laser/info.png" alt="info" />
            <span>
              Shave, the area that you want to get lasered atleast 24hrs before
              the appointment.
            </span>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq">
        <div className="container">
          <div className="faq-wrap">
            <h1>Questions? We've Got Answers</h1>

            {/* Client-enhanced accordion */}
            <div data-enhanced>
              <FaqAccordionClient items={faq} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
