// app/consenthydrafacial/page.jsx
import ConsentHydrafacial from "./ConsentHydrafacial";

export const metadata = {
  title: "HydraFacial Consent | IV Wellness Lounge Clinic in Dubai",
  description:
    "Complete your HydraFacial consent at IV Wellness Lounge Clinic in Dubai: patient details, medical history, photography options, and signature.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/consenthydrafacial" },

  openGraph: {
    title: "HydraFacial Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your HydraFacial consent at IV Wellness Lounge Clinic in Dubai: patient details, medical history, photography options, and signature.",
    url: "https://ivhub.com/consenthydrafacial",
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
    title: "HydraFacial Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your HydraFacial consent at IV Wellness Lounge Clinic in Dubai: patient details, medical history, photography options, and signature.",
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
                <h1>HydraFacial Consent Form</h1>
                <ConsentHydrafacial />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}