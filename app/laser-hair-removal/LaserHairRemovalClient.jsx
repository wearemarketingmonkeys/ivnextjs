"use client";

import { useMemo, useState } from 'react';
import Script from 'next/script';

// Client islands
import FaqAccordionClient from './FaqAccordionClient';
import PriceAccordionClient from './PriceAccordionClient';
import VerticalCarouselClient from './VerticalCarouselClient';

export default function LaserHairRemovalClient({ faq }) {
  const [branch, setBranch] = useState('DIFC');

  // Keep both branches identical for now. You can later change ONLY Palm Jumeirah
  // by editing `contentByBranch.Palm Jumeirah`.
  const contentByBranch = useMemo(
    () => ({
      DIFC: {
        heroTitle: (
          <>
            Laser Hair Removal
          </>
        ),
        heroOffer: (
          <i>
            Unlimited Hair Removal Sessions for one year - <strong>AED 9,999</strong>
          </i>
        ),
        btntext: 'Soprano Titanium - DIFC',
        heroPriceStartsFrom: 'Pricing Starts From 119 AED',
        heroDesc1:
          'Remove unwanted hair with the Most Efficient, Painless, Safe for all skin Soprano Titanium Laser Hair Removal.',
        heroDesc2:
          'Soprano Titanium hair removal is compatible with all skin types and tones, offering virtually painless treatment akin to a soothing hot stone massage. Its rapid and efficient process outperforms other laser hair removal methods available, ensuring swift and effective results. Additionally, it is renowned for its ability to gently lift the skin, leaving it feeling firmer and rejuvenated.',
        idealForLine: 'All Skin Types & Tones | Darker Hair | Melanin-Rich Skin',
        service: {
          treatments: [
            { category: 'Facelift', areas: 'Soprano Titanium Korean Facelift',
              services: [{ name:'1 Session', price:'1499' }] },
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
        },
          howItWorksSteps: [{
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
        }],
        beforeAfter: [
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
        ],
        resultsTitle: 'Results',
        resultsText:
          'With Soprano Titanium technology, results begin to show approximately 2 weeks after your first treatment. It’s important to complete the recommended number of sessions to achieve smooth, long-lasting hairless skin.',
        frequencyTitle: 'Frequency',
        frequencyText:
          'We recommend about 6-10 treatments depending on hair growth, hair type & color, and size of the treatment area. Your appointments should be spaced about 4-6 weeks apart.',
        infoText:
          'Shave, the area that you want to get lasered atleast 24hrs before the appointment.',
      },
      'Palm Jumeirah': {
        heroTitle: (
          <>
            Laser Hair Removal
          </>
        ),
        heroOffer: (
          <i>
            Unlimited Hair Removal Sessions for one year - <strong>AED 9,999</strong>
          </i>
        ),
        btntext: 'Evoline - Palm Jumeirah',
        heroPriceStartsFrom: 'Pricing Starts From 119 AED',
        heroDesc1:
          'Remove unwanted hair with the efficient, comfortable, and skin-safe Evoline Laser Hair Removal.',
        heroDesc2:
          'Evoline laser hair removal is suitable for a wide range of skin types and tones, delivering effective hair reduction with a comfortable treatment experience. The technology allows for fast, precise sessions that target hair follicles while protecting the surrounding skin. Known for its reliability and efficiency, Evoline helps achieve smoother skin with consistent results, leaving treated areas feeling refined and well cared for after each session.',
        idealForLine: 'All Skin Types & Tones | Darker to Medium Hair | Melanin-Rich Skin',
        service: {
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
        },
        howItWorksSteps: [{
          img: '/assets/img/laser/step1.jpg',
          title: 'Laser Energy Delivery',
          desc: 'Evoline laser hair removal uses advanced diode laser technology to deliver controlled energy into the skin, targeting hair follicles while keeping the surrounding skin protected and comfortable.',
        },
        {
          img: '/assets/img/laser/step2.jpg',
          title: 'Targeting the Hair Follicle',
          desc: 'The laser energy is absorbed by melanin within the hair shaft and travels down to the root. This heat disrupts the follicle’s ability to receive nutrients, gradually weakening the hair at its source.',
        },
        {
          img: '/assets/img/laser/step3.jpg',
          title: 'Reduction of Hair Growth',
          desc: 'By damaging the follicle chromophores responsible for hair regeneration, Evoline inhibits future hair growth. Over a series of sessions, hair becomes finer, lighter, and significantly reduced.',
        }],
        beforeAfter : [
          {
            icon: '/assets/img/laser/before.png',
            title: 'Before Your Treatment',
            desc: 'Shave the treatment area at least 24 hours before your appointment',
            list: [
              'Avoid sun exposure, tanning beds, and self-tanning products for a minimum of 24 hours prior to treatment',
              'Discontinue exfoliating products and active ingredients on the treatment area for at least 3 days before your session',
              'Avoid photosensitizing medications, including certain antibiotics, for at least 48 hours prior to treatment. Please inform your practitioner of any medications you are taking',
            ],
          },
          {
            icon: '/assets/img/laser/after.png',
            title: 'After Your Treatment',
            list: [
              'Avoid direct sun exposure and apply a broad-spectrum SPF to protect the treated area',
              'Mild sensitivity or warmth is normal. A cold compress or aloe vera gel may be used to soothe the skin',
              'You may shave between sessions, but avoid waxing, plucking, or threading during your treatment course',
            ],
          },
        ],
        resultsTitle: 'Results',
        resultsText:
          'With Evoline Laser Hair Removal, visible hair reduction typically begins within 2 to 3 weeks after your first session as treated hairs shed naturally. With each session, hair grows back finer, lighter, and more sparse. Completing the recommended course of treatments is essential to achieve smooth, long-lasting hair reduction and optimal results.',
        frequencyTitle: 'Frequency',
        frequencyText:
          'Most clients require 6 to 10 sessions, depending on hair growth cycle, hair thickness and color, skin type, and the size of the treatment area. Sessions are usually spaced 4 to 6 weeks apart to effectively target hair in its active growth phase.',
        infoText:
          'Shave, the area that you want to get lasered atleast 24hrs before the appointment.',
      },
    }),
  );

  const content = contentByBranch[branch] ?? contentByBranch.DIFC;

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
              <h1>{content.heroTitle}</h1>
              <p>{content.heroOffer}</p>
              <div>
                <h2>{content.heroPriceStartsFrom}</h2>
              </div>

              {/* Branch Switcher (below price div) */}
              <div className="branch-switch btn-wrap" role="tablist" aria-label="Choose branch">
                <button
                  type="button"
                  role="tab"
                  aria-selected={branch === 'DIFC'}
                  className={`branch-btn btn ${branch === 'DIFC' ? 'active' : ''}`}
                  onClick={() => setBranch('DIFC')}
                >
                  Soprano Titanium - DIFC
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={branch === 'Palm Jumeirah'}
                  className={`branch-btn btn ${branch === 'Palm Jumeirah' ? 'active' : ''}`}
                  onClick={() => setBranch('Palm Jumeirah')}
                >
                  Evoline - Palm Jumeirah
                </button>
              </div>

              <div className="description">{content.heroDesc1}</div>
              <div className="unwanted-hair">
                <img src="/assets/img/laser/hair-removal-icon.png" alt="hair removal" />
                <span>Unwanted Hair</span>
              </div>
              <div className="description">{content.heroDesc2}</div>
              <div className="ideal-for">
                <p>
                  <strong>Ideal For:</strong>
                </p>
                <p>{content.idealForLine}</p>
              </div>

              <div className="btn-wrap">
                <a
                  className="btn"
                  href={`https://api.whatsapp.com/send/?phone=97180048482&text=${encodeURIComponent(
                    'Hello, I want to book the Laser Hair Treatment'
                  )}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK Now
                </a>
              </div>

              {/* Price & Package */}
              <div className="pricesection">
                <h1>Price &amp; Package</h1>
                <br />
                <div data-enhanced>
                  <PriceAccordionClient treatments={content.service.treatments} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="how-it-works">
        <div className="container">
          <VerticalCarouselClient steps={content.howItWorksSteps} />
        </div>
      </div>

      {/* PRE/POST */}
      <div className="before-after">
        <div className="container">
          <div className="before-after-wrap">
            {content.beforeAfter.map((x, index) => (
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
              <h1>{content.resultsTitle}</h1>
              <div className="description">{content.resultsText}</div>
              <div className="unwanted-hair">
                <img src="/assets/img/laser/calendar.png" alt="hair removal" />
                <span>{content.frequencyTitle}</span>
              </div>
              <div className="description">{content.frequencyText}</div>
            </div>
          </div>

          <div className="info">
            <img src="/assets/img/laser/info.png" alt="info" />
            <span>{content.infoText}</span>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq">
        <div className="container">
          <div className="faq-wrap">
            <h1>Questions? We've Got Answers</h1>
            <div data-enhanced>
              <FaqAccordionClient items={faq} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
