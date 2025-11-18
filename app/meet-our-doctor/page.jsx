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
    images: [{ url: 'https://ivhub.com/assets/img/mod/dralejandra.jpeg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Doctor | IV Wellness Lounge Clinic Experts in Dubai',
    description: 'Learn about the medical expertise behind IV Wellness Lounge Clinic Dubai. Meet our lead doctor and discover the clinical standards guiding your treatments.',
    url: 'https://ivhub.com/meet-our-doctor',
    images: ['https://ivhub.com/assets/img/mod/dralejandra.jpeg'],
  },
};

export default function MeetOurDoctorPage() {
  return (
    <>
      <section className="mod-hero">
        <div className="mod-title">
          <h1>Dr. Pradheeksha Krishnaprasad</h1>
          <div>Blending Korean Innovation with Regenerative Wellness</div>
        </div>
        <div className="mod-media">
          <Image
            src="/assets/img/mod/doctor1.jpg"
            alt="Dr. Pradheeksha Krishnaprasad"
          />
        </div>
      </section>

      <section className="mod-about">
        <div className="media">
          <Image
            src="/assets/img/mod/doctor2.jpg"
            width={450}
            height={600}
            alt="Dr. Pradheeksha Krishnaprasad"
          />
        </div>
        <div className="content">
          <h2>About Dr. Pradheeksha Krishnaprasad</h2>
          <p>
            Dr. Pradheeksha Krishnaprasad, widely known as Dr. Pratz, is an accomplished Aesthetic Physician with extensive international training and a passion for integrating science, artistry, and wellness in aesthetic medicine. She specializes in advanced injectables, Korean lifting techniques, regenerative medicine, and endocrinology-based weight management.
          </p>
          <p>
            Dr. Pratz earned her MBBS degree from Shree Balaji Medical College, Chennai, and pursued a Diploma in Aesthetic Medicine from Norwest University, affiliated with the American Board of Aesthetic Medicine. She has completed multiple fellowships in Aesthetic Medicine and Advanced Injectables across more than eight countries, gaining a truly global perspective in aesthetic and regenerative practices.
          </p>
          <p>
            In addition, she holds an MBA in Healthcare Management from Middlesex University, Dubai, a two-year Fellowship in Diabetology from the University of Liverpool, and a Diploma in Dermatology from the UK, enabling her to merge medical, dermatological, and wellness disciplines into a comprehensive patient care approach.
          </p>
          <p>
            Dr. Pratz also holds an NCLC License in Advanced Laser Technologies, further enhancing her expertise in non-surgical aesthetic and skin rejuvenation treatments.
          </p>
          <p>
            She is certified by ARMED, InMode, Yuma emerites, Candela,Mesoaesthetic, and the Allergan Institute, and has attended numerous international conferences focused on innovation and safety in aesthetic medicine. Her professional achievements have also led her to become a Brand Ambassador for Sticol, Xomage, and Yuma Emirates.
          </p>
          <p>
            Her interests extend into biohacking, hormonal optimization, and metabolic health, utilizing advanced medical protocols, including GLP-1 inhibitors, for holistic weight management and longevity. With over six years of experience in plastic surgery and dermatology, she brings a multidimensional approach to beauty and health.
          </p>
          <p>
            Dr. Pratz is also highly regarded for her expertise in hair restoration, transplant procedures, regenerative therapy, and wellness-based aesthetic treatments, dedicated to helping patients look and feel their best from the inside out.
          </p>
        </div>
      </section>

      <section className="mod-focus-area">
        <h2>Focus Treatment Area</h2>
        <div className="item">
          <button className="button-89" role="button">
            Fine lines & wrinkles
          </button>
          <button className="button-89" role="button">
            Skin laxity
          </button>
          <button className="button-89" role="button">
            Dullness & dehydration
          </button>
          <button className="button-89" role="button">
            Pigmentation & uneven tone
          </button>
          <button className="button-89" role="button">
            Acne scars
          </button>
          <button className="button-89" role="button">
            Open pores
          </button>
          <button className="button-89" role="button">
            Volume loss
          </button>
          <button className="button-89" role="button">
            Double chin
          </button>
          <button className="button-89" role="button">
            Under-eye hollows
          </button>
          <button className="button-89" role="button">
            Dark circles
          </button>
          <button className="button-89" role="button">
            Uneven texture
          </button>
          <button className="button-89" role="button">
            Sagging jawline
          </button>
          <button className="button-89" role="button">
            Melasma
          </button>
          <button className="button-89" role="button">
            Stretch marks
          </button>
          <button className="button-89" role="button">
            Cellulite
          </button>
          <button className="button-89" role="button">
            Hair thinning
          </button>
          <button className="button-89" role="button">
            Enlarged pores
          </button>
          <button className="button-89" role="button">
            Sun damage
          </button>
          <button className="button-89" role="button">
            Neck aging
          </button>
          <button className="button-89" role="button">
            Hand rejuvenation
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
              <h3>MBBS</h3>
              <p>Shree Balaji Medical College, Chennai</p>
            </div>
            <div className="logo">
              <Image
                src="/assets/img/mod/balaji.png"
                width={224}
                height={100}
                alt="Escuela de Medicina Juan N Corpas"
              />
            </div>
          </div>

          <div className="education">
            <div>
              <h3>Diploma in Aesthetic Medicine</h3>
              <p>
                Northwest University
              </p>
            </div>

            <div className="logo">
              <Image
                src="/assets/img/mod/northwest.png"
                width={230}
                alt="Northwest University"
              />
            </div>
          </div>

          <div className="education">
            <div>
              <h3>MBA in Healthcare Management</h3>
              <p>
                Middlesex University, Dubai
              </p>
            </div>

            <div className="logo">
              <Image
                src="/assets/img/mod/middlesex.jpg"
                width={230}
                alt="Middlesex University, Dubai"
              />
            </div>
          </div>

          <div className="education">
            <div>
              <h3>Fellowship in Diabetology</h3>
              <p>
                University of Liverpool
              </p>
            </div>

            <div className="logo">
              <Image
                src="/assets/img/mod/university-of-liverpool.webp"
                width={230}
                alt="Fellowship in Diabetology"
              />
            </div>
          </div>

          <div className="education">
            <div>
              <h3>Diploma in Dermatology</h3>
              <p>
                UK
              </p>
            </div>

            <div className="logo">
              
            </div>
          </div>
         
        </div>
      </section>

      <section className="mod-ctr">
        <h3>Make an appointment with Dr. Pradheeksha Krishnaprasad</h3>
        <a href="https://wa.me/+971566082103">Book Online Consultation</a>
      </section>
    </>
  )
}