import Image from "next/image"
// import MyGallery from "./gallery"

export const metadata = {
  title: 'Our Doctor | IV Wellness Lounge Clinic Experts in Dubai',
  description: 'Learn about the medical expertise behind IV Wellness Lounge Clinic Dubai. Meet our lead doctor and discover the clinical standards guiding your treatments.',
  alternates: { canonical: 'https://ivhub.com/meet-our-doctor' },
  openGraph: {
    title: 'Our Doctor | IV Wellness Lounge Clinic Experts in Dubai',
    description: 'Learn about the medical expertise behind IV Wellness Lounge Clinic Dubai. Meet our lead doctor and discover the clinical standards guiding your treatments.',
    url: 'https://ivhub.com/meet-our-doctor',
    type: 'website',
    images: [{ url: 'https://ivhub.com/assets/img/mod/dr-haifa-1.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Doctor | IV Wellness Lounge Clinic Experts in Dubai',
    description: 'Learn about the medical expertise behind IV Wellness Lounge Clinic Dubai. Meet our lead doctor and discover the clinical standards guiding your treatments.',
    url: 'https://ivhub.com/meet-our-doctor',
    images: ['https://ivhub.com/assets/img/mod/dr-haifa-2.png'],
  },
};

export default function MeetOurDoctorPage() {
  return (
    <>
      <section className="mod-hero">
        <div className="mod-title">
          <h1>Dr. Haifa kelthoum Zaboub</h1>
          <div>Blending Korean Innovation with Regenerative Wellness</div>
        </div>
        <div className="mod-media">
          <Image
            src="/assets/img/mod/dr-haifa-1.png"
            width={500}
            height={600}
            alt="Dr. Haifa kelthoum Zaboub"
          />
        </div>
      </section>

      <section className="mod-about">
        <div className="media">
          <Image
            src="/assets/img/mod/dr-haifa-2.png"
            width={450}
            height={650}
            alt="Dr. Haifa kelthoum Zaboub"
          />
        </div>
        <div className="content">
          <h2>About Dr. Haifa kelthoum Zaboub</h2>
          <p>
            Dr. Haifa Kelthoum Zaboub is an American Board–certified GP Aesthetic and Longevity Doctor with a Diploma in Dermatology from the Royal College of Physicians of Ireland (RCPI). Her practice is rooted in medical precision, aesthetic balance, and a thoughtful approach to rejuvenation.
          </p>
          <p>
            Dr. Haifa views aesthetics as a holistic process rather than a series of isolated treatments. Each patient journey begins with a comprehensive assessment that considers skin health, structural support, tissue quality, and overall harmony. This allows her to create treatment plans that address both visible concerns and the underlying factors that influence how the face and body age over time.
          </p>
          <p>
            Known for her commitment to natural, undetectable results, Dr. Haifa focuses on subtle refinement that enhances rather than alters. Her work prioritizes long-term rejuvenation, supporting skin quality, tissue vitality, and balance while preserving each patient’s individuality. The goal is always to help patients look refreshed, well-rested, and confident, never overdone.
          </p>
          <p>
            Personalization is central to her approach. Treatments are carefully tailored to each individual’s anatomy, lifestyle, and goals, with an emphasis on progressive care that evolves alongside the patient. By combining medical expertise with an artistic eye, Dr. Haifa delivers results that feel considered, elegant, and quietly transformative.
          </p>
          <p>
            American Board–certified aesthetic doctor with a Dermatology Diploma from the Royal College of Physicians of Ireland (RCPI).
          </p>
          <p>
            She is specializes in natural and undetectable injectables using a full-face approach to enhance facial balance and harmony. Her practice focuses on subtle rejuvenation, skin quality, and personalized treatments tailored to each patient’s features and goals.
          </p>
        </div>
      </section>

      <section className="mod-focus-area">
        <h2>Focus Treatment Area</h2>
        <div className="item">
          <button className="button-89" role="button">
            Collagen stimulation
          </button>

          <button className="button-89" role="button">
            Skin rejuvenation
          </button>

          <button className="button-89" role="button">
            Skin laxity & tightening
          </button>

          <button className="button-89" role="button">
            Jawline sculpting & facial contouring
          </button>

          <button className="button-89" role="button">
            Under-eye rejuvenation
          </button>

          <button className="button-89" role="button">
            Mid-face support & volume restoration
          </button>

          <button className="button-89" role="button">
            Double chin & lower-face contouring
          </button>

          <button className="button-89" role="button">
            Acne scars & uneven skin texture
          </button>

          <button className="button-89" role="button">
            Pigmentation, sun damage & uneven tone
          </button>

          <button className="button-89" role="button">
            Fine lines & early wrinkles
          </button>

          <button className="button-89" role="button">
            Neck rejuvenation & tightening
          </button>

          <button className="button-89" role="button">
            Hand rejuvenation
          </button>

          <button className="button-89" role="button">
            Skin quality & volume restoration
          </button>
        </div>
      </section>


      <section className="mod-img-gallary">
        {/* <MyGallery /> */}
      </section>

      <section className="mod-education">
        <div className="mod-education-wrap">
          <h2>Education </h2>
          <br/>
          <div className="education">
            <div>
              <h3>Medical degree, MD</h3>
              <p>Faculty of Medicine, Setif, Algeria.</p>
            </div>
            <div className="logo">
              {/*<Image
                src="/assets/img/mod/balaji.png"
                width={224}
                height={100}
                alt="Escuela de Medicina Juan N Corpas"
              />*/}
            </div>
          </div>

          <div className="education">
            <div>
              <h3>Certification in Advanced Aesthetic Medicine</h3>
              <p>
                American Board of Aesthetic Medicine (ABAM)
              </p>
            </div>

            <div className="logo">
              {/*<Image
                src="/assets/img/mod/northwest.png"
                width={230}
                height={100}
                alt="Northwest University"
              />*/}
            </div>
          </div>

          <div className="education">
            <div>
              <h3>Dermatology Diploma</h3>
              <p>
                Royal College of Physicians of Ireland
              </p>
            </div>

            <div className="logo">
              {/*<Image
                src="/assets/img/mod/middlesex.jpg"
                width={230}
                height={100}
                alt="Middlesex University, Dubai"
              />*/}
            </div>
          </div>
         
        </div>
      </section>

      <section className="mod-ctr">
        <h3>Make an appointment with Dr. Haifa kelthoum Zaboub</h3>
        <a href="https://wa.me/+971566082103">Book Online Consultation</a>
      </section>
    </>
  )
}