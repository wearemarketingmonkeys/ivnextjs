import Image from "next/image"
// import MyGallery from "./gallery"

export const metadata = {
  title: "Dr. Alejandra Beltran",
  description: `About Dr. Alejandra Beltran
Meet Dr. Alejandra, our vibrant expert in aesthetic medicine, bringing over 6 years of experience to the table.`,
}

export const metadata = {
  title: 'Dr. Alejandra Beltran | IV Wellness Lounge Clinic in Dubai',
  description:
    'About Dr. Alejandra Beltran Meet Dr. Alejandra, our vibrant expert in aesthetic medicine, bringing over 6 years of experience to the table.',
  alternates: { canonical: 'https://ivhub.com/meet-our-doctor' },
  openGraph: {
    title: 'Dr. Alejandra Beltran | IV Wellness Lounge Clinic in Dubai',
    description:
    'About Dr. Alejandra Beltran Meet Dr. Alejandra, our vibrant expert in aesthetic medicine, bringing over 6 years of experience to the table.',
    url: 'https://ivhub.com/meet-our-doctor',
    type: 'website',
    images: [{ url: 'https://ivhub.com/assets/img/mod/dralejandra.jpeg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Alejandra Beltran | IV Wellness Lounge Clinic in Dubai',
    description:
    'About Dr. Alejandra Beltran Meet Dr. Alejandra, our vibrant expert in aesthetic medicine, bringing over 6 years of experience to the table.',
    url: 'https://ivhub.com/meet-our-doctor',
    images: ['https://ivhub.com/assets/img/mod/dralejandra.jpeg'],
  },
};

export default function MeetOurDoctorPage() {
  return (
    <>
      <section className="mod-hero">
        <div className="mod-title">
          <h1>Dr. Alejandra Beltran</h1>
          <div>The pinnacle of Aesthetic and Laser</div>
        </div>
        <div className="mod-media">
          <Image
            src="/assets/img/mod/dralejandra.jpeg"
            width={400}
            height={600}
            alt="Dr. Alejandra Beltran"
          />
        </div>
      </section>

      <section className="mod-about">
        <div className="media">
          <Image
            src="/assets/img/mod/dr22.jpeg"
            width={450}
            height={623}
            alt="Dr. Alejandra Beltran"
          />
        </div>
        <div className="content">
          <h2>About Dr. Alejandra Beltran</h2>
          <p>
            Dr. Alejandra, our vibrant expert in aesthetic medicine, bringing over 6 years of experience to the table. 
            From her beginnings in Latin America and the United States to her current adventures in Dubai, she's left a 
            lasting impression in aesthetics and hair restoration.Dr. Alejandra's journey is a testament to her 
            relentless pursuit of knowledge and excellence. She's proudly certified by the prestigious American Academy of 
            Aesthetic Medicine and has mastered the art of laser rejuvenation, adding a fresh twist to her practice.
          </p>
          <p>
            But what truly makes Dr. Alejandra shine is her genuine passion for highlighting each person's natural beauty. 
              With a toolbox full of certifications in facial and body rejuvenation technologies, she celebrates the uniqueness of every individual.
              Attending top conferences in dermatology and aesthetic medicine is just one way Dr. Alejandra stays ahead in her field.
              Each treatment she offers is carefully tailored to fit the specific needs of her patients, aiming to boost their confidence and help them feel at home in their own skin.
              Dr. Alejandra isn't just a skilled practitioner; she's a firm believer in embracing individuality and staying true to oneself.
          </p>
          <p>Aesthetic Laser Procedures Learning Program<br />
            “Lasers And Light Sources, Including IPL”</p>
            <p>American Academy Of Aesthetic Medicine, 2022<br />
            “Certificate In Aesthetic Medicine”</p>
            <p>American Safety And Health Institute, 2021<br />
            “BLS Training”</p>
            <p>DubiMed, 2021<br />
            “VIORA Training, Secret Dual Combination Technology”</p>
              <p>Fundacion Universitaria Juan N. Corpas, 2017<br />
            “Physician And General Surgeon”</p>
               <p>INMODE Aesthetic Solutions, 2022<br />
            “Morpheus Pro System Training Course”</p>
                 <p>Medica, 2022<br />
            “Ultherapy Training”</p>
              <p>Professional Medical Education Association, INC, 2022</p>
        </div>
      </section>

      <section className="mod-focus-area">
        <h2>FOCUS TREATMENT AREA </h2>
        <div className="item">
          <button className="button-89" role="button">
            Acne treatment
          </button>
          <button className="button-89" role="button">
            Acne Scar treatment
          </button>
          <button className="button-89" role="button">
            Keloid Scar
          </button>
          <button className="button-89" role="button">
            Hair loss
          </button>
          <button className="button-89" role="button">
            Botox
          </button>
          <button className="button-89" role="button">
            Dermal Fillers
          </button>
          <button className="button-89" role="button">
            Mesotherapy
          </button>
          <button className="button-89" role="button">
            PRP (platelet rich plasma)
          </button>
          <button className="button-89" role="button">
            Radiofrequency
          </button>
          <button className="button-89" role="button">
            Collagen Stimulation by 
              Injection
          </button>
          <button className="button-89" role="button">
            Skin boosters
          </button>
          <button className="button-89" role="button">
            Exosomes & Stem cells
          </button>
          <button className="button-89" role="button">
            Lipolysis injections
          </button>
          <button className="button-89" role="button">
            Hand and neck rejuvenation
          </button>
          <button className="button-89" role="button">
            Body Fillers
          </button>
          <button className="button-89" role="button">
            Hyperhidrosis
          </button>
          <button className="button-89" role="button">
            Treatment of hyperpigmentation
          </button>
        </div>
      </section>

      <section className="mod-img-gallary">
        {/* <MyGallery /> */}
      </section>

      <section className="mod-education">
        <div className="mod-education-wrap">
          <h2>Education </h2>

          <div className="education">
            <div>
              <h3>Bachelor of medicine, Bachelor of Surgery  </h3>
              <p>Escuela de Medicina Juan N Corpas, Colombia</p>
            </div>
            <div className="logo">
              <Image
                src="/assets/img/mod/Corpas.png"
                width={224}
                height={100}
                alt="Escuela de Medicina Juan N Corpas"
              />
            </div>
          </div>

          <div className="education">
            <div>
              <h3>Profesional Diploma in Aesthetic Medicine </h3>
              <p>
                American Academy of Aesthetics Medicine
              </p>
            </div>

            <div className="logo">
              <Image
                src="/assets/img/mod/AAAM.png"
                width={230}
                height={75}
                alt="American Academy of Aesthetics Mediciney"
              />
            </div>
          </div>
         
        </div>
      </section>

      <section className="mod-ctr">
        <h3>Make an appointment with Dr. Alejandra Beltran</h3>
        <a href="https://wa.me/+971566082103">Book Online Consultation</a>
      </section>
    </>
  )
}