import React from "react";
import HifuConsentClient from "./HifuConsentClient";

export const metadata = {
  title: "HIFU Treatment Consent | IV Wellness Lounge Clinic in Dubai",
  description:
    "Complete your HIFU Treatment consent form securely with IV Wellness Lounge Clinic in Dubai. Includes patient info, risks, expectations, and signature.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/consenthifu" },
  openGraph: {
    title: "HIFU Treatment Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your HIFU Treatment consent form securely with IV Wellness Lounge Clinic in Dubai. Includes patient info, risks, expectations, and signature.",
    url: "https://ivhub.com/consenthifu",
    siteName: "IV Wellness Lounge Clinic in Dubai",
    images: [
      {
        url: "https://ivhub.com/og.png",
        width: 1200,
        height: 630,
        alt: "IV Wellness Lounge Clinic in Dubai"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "HIFU Treatment Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your HIFU Treatment consent form securely with IV Wellness Lounge Clinic in Dubai. Includes patient info, risks, expectations, and signature.",
    images: ["https://ivhub.com/og.png"]
  }
};

export default function Page() {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-form">
          <div className="form-wrapper">
            <div className="form-wrap">
              <div className="right">
                <h1>HIFU Treatment Consent Form</h1>
                <HifuConsentClient />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}