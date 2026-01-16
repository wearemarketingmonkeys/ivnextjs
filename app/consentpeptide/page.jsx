import ConsentPeptide from "./consentpeptide";

export const metadata = {
  title: "Peptide Consent | IV Wellness Lounge Clinic in Dubai",
  description:
    "Complete your Peptide consent at IV Wellness Lounge Clinic in Dubai: patient details, emergency contact, practitioner details, and signature.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/consentpeptide" },

  openGraph: {
    title: "Peptide Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your Peptide consent at IV Wellness Lounge Clinic in Dubai: patient details, emergency contact, practitioner details, and signature.",
    url: "https://ivhub.com/consentpeptide",
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
    title: "Peptide Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your Peptide consent at IV Wellness Lounge Clinic in Dubai: patient details, emergency contact, practitioner details, and signature.",
    images: ["https://ivhub.com/og.png"],
  },
};

export default function Page() {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-form">
          <div className="form-wrapper">
            <div className="form-wrap">
              <div className="right">
                <h1>Peptide Consent Form</h1>
                <ConsentPeptide />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
