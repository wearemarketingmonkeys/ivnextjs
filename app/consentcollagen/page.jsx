import ConsentCollagen from "./ConsentCollagen";

export const metadata = {
  title: "Collagen Stimulator Consent | IV Wellness Lounge Clinic in Dubai",
  description:
    "Complete your Collagen Stimulator consent at IV Wellness Lounge Clinic in Dubai: patient details, treatment info, contraindications, and signature.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/consentcollagen" },

  openGraph: {
    title: "Collagen Stimulator Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your Collagen Stimulator consent at IV Wellness Lounge Clinic in Dubai: patient details, treatment info, contraindications, and signature.",
    url: "https://ivhub.com/consentcollagen",
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
    title: "Collagen Stimulator Consent | IV Wellness Lounge Clinic in Dubai",
    description:
      "Complete your Collagen Stimulator consent at IV Wellness Lounge Clinic in Dubai: patient details, treatment info, contraindications, and signature.",
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
                <h1>Collagen Stimulator Consent Form</h1>
                <ConsentCollagen cr={searchParams.cr}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
