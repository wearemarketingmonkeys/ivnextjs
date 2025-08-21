// app/consentlipozero/page.jsx
import ConsentLipozeroClient from "./ConsentLipozeroClient";

export const metadata = {
  title: "LipoZero Consent | IV Wellness Lounge Clinic in Dubai",
  description:
    "Complete your LipoZero (non-invasive body contouring) consent at IV Wellness Lounge Clinic in Dubai.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/consentlipozero" },

  openGraph: {
    title: "LipoZero Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your LipoZero (non-invasive body contouring) consent at IV Wellness Lounge Clinic in Dubai.",
    url: "https://ivhub.com/consentlipozero",
    siteName: "IV Wellness Lounge",
    images: [{ url: "https://ivhub.com/og.png", width: 1200, height: 630 }],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LipoZero Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your LipoZero (non-invasive body contouring) consent at IV Wellness Lounge Clinic in Dubai.",
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
                <h1>LipoZero Consent Form</h1>
                <ConsentLipozeroClient />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}