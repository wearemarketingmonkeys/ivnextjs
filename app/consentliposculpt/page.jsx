// app/consentliposculpt/page.jsx
import ConsentLiposculptClient from "./ConsentLiposculptClient";

export const metadata = {
  title: "Liposculpt Consent | IV Wellness Lounge Clinic in Dubai",
  description:
    "Complete your Liposculpt fat-dissolving consent at IV Wellness Lounge Clinic in Dubai.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/consentliposculpt" },
  openGraph: {
    title: "Liposculpt Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your Liposculpt fat-dissolving consent at IV Wellness Lounge Clinic in Dubai.",
    url: "https://ivhub.com/consentliposculpt",
    siteName: "IV Wellness Lounge",
    images: [{ url: "https://ivhub.com/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liposculpt Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your Liposculpt fat-dissolving consent at IV Wellness Lounge Clinic in Dubai.",
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
                <h1>Liposculpt Consent Form</h1>
                <ConsentLiposculptClient />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
