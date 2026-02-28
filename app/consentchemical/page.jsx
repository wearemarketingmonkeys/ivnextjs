// app/consentchemical/page.jsx
import ConsentChemicalClient from "./ConsentChemicalClient";

export const metadata = {
  title: "Chemical Peel Consent |  IV Wellness Lounge Clinic in Dubai",
  description:
    "Complete your Chemical Peel consent with patient details, medical history, photography options, and signature.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/consentchemical" },
  openGraph: {
    title: "Chemical Peel Consent |  IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your Chemical Peel consent with patient details, medical history, photography options, and signature.",
    url: "https://ivhub.com/consentchemical",
    siteName: " IV Wellness Lounge Clinic in Dubai",
    images: [{ url: "https://ivhub.com/og.png", width: 1200, height: 630, alt: " IV Wellness Lounge Clinic in Dubai" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chemical Peel Consent |  IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your Chemical Peel consent with patient details, medical history, photography options, and signature.",
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
                <h1>Chemical Peel Consent Form</h1>
                <ConsentChemicalClient cr={searchParams.cr}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}