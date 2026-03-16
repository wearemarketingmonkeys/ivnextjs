// app/consentgeneral/page.jsx
import ConsentGeneralClient from "./ConsentGeneralClient";

export const metadata = {
  title: "General Consent for Treatment | IV Wellness Lounge Clinic in Dubai",
  description:
    "Complete your General Consent for Treatment at IV Wellness Lounge Clinic in Dubai, including patient details, treatment authorization, privacy acknowledgements, and signature.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/consentgeneral" },

  openGraph: {
    title: "General Consent for Treatment | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your General Consent for Treatment at IV Wellness Lounge Clinic in Dubai, including patient details, treatment authorization, privacy acknowledgements, and signature.",
    url: "https://ivhub.com/consentgeneral",
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
    title: "General Consent for Treatment | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your General Consent for Treatment at IV Wellness Lounge Clinic in Dubai, including patient details, treatment authorization, privacy acknowledgements, and signature.",
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
                <h1>General Consent for Treatment Form<br/><span className="arabic-title">إقرار عام بالموافقة على العلاج</span></h1>
                <ConsentGeneralClient cr={searchParams.cr} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}