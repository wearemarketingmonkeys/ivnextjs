// app/consentlaser/page.jsx
import ConsentLaserClient from "./ConsentLaserClient";

export const metadata = {
  title: "Laser Hair Removal Consent | IV Wellness Lounge Clinic in Dubai",
  description:
    "Complete your Laser Hair Removal consent at IV Wellness Lounge Clinic in Dubai: patient details, medical history, photography options, and signature.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/consentlaser" },

  openGraph: {
    title: "Laser Hair Removal Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your Laser Hair Removal consent at IV Wellness Lounge Clinic in Dubai: patient details, medical history, photography options, and signature.",
    url: "https://ivhub.com/consentlaser",
    siteName: "IV Wellness Lounge",
    images: [{ url: "https://ivhub.com/og.png", width: 1200, height: 630, alt: "IV Wellness Lounge" }],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Laser Hair Removal Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your Laser Hair Removal consent at IV Wellness Lounge Clinic in Dubai: patient details, medical history, photography options, and signature.",
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
                <h1>Laser Hair Removal Consent Form</h1>
                <ConsentLaserClient />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
