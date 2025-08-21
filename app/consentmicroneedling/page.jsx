// app/consentmicroneedling/page.jsx
import ConsentMicroneedlingClient from "./ConsentMicroneedlingClient";

export const metadata = {
  title: "Microneedling Consent | IV Wellness Lounge Clinic in Dubai",
  description:
    "Complete your Microneedling consent at IV Wellness Lounge Clinic in Dubai.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/consentmicroneedling" },

  openGraph: {
    title: "Microneedling Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your Microneedling consent at IV Wellness Lounge Clinic in Dubai.",
    url: "https://ivhub.com/consentmicroneedling",
    siteName: "IV Wellness Lounge",
    images: [{ url: "https://ivhub.com/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microneedling Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your Microneedling consent at IV Wellness Lounge Clinic in Dubai.",
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
                <h1>Microneedling Consent Form</h1>
                <ConsentMicroneedlingClient />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
