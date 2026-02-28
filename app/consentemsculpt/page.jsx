import ConsentEmsculpt from "./ConsentEmsculpt";

export const metadata = {
  title: "EMSculpt / Body Contouring Consent | IV Wellness Lounge Clinic in Dubai",
  description:
    "Complete your EMSculpt / Body Contouring consent at IV Wellness Lounge Clinic in Dubai: patient details, treatment information, contraindications, and signature.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/consentemsculpt" },

  openGraph: {
    title: "EMSculpt / Body Contouring Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your EMSculpt / Body Contouring consent at IV Wellness Lounge Clinic in Dubai: patient details, treatment information, contraindications, and signature.",
    url: "https://ivhub.com/consentemsculpt",
    siteName: "IV Wellness Lounge",
    images: [
      {
        url: "https://ivhub.com/og.png",
        width: 1200,
        height: 630,
        alt: "IV Wellness Lounge",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EMSculpt / Body Contouring Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your EMSculpt / Body Contouring consent at IV Wellness Lounge Clinic in Dubai: patient details, treatment information, contraindications, and signature.",
    images: ["https://ivhub.com/og.png"],
  },
};

export default function Page({ searchParams }) {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-form">
          <div className="form-wrapper">
            <div className="form-wrap">
              <div className="right">
                <h1>EMSculpt / Body Contouring Consent Form</h1>
                <ConsentEmsculpt cr={searchParams.cr}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}