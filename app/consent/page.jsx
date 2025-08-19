// app/consent/page.jsx
import ConsentUnifiedClient from "./ConsentUnifiedClient";

export const metadata = {
  title: "Consent Form | IV Wellness Lounge Clinic in Dubai",
  description:
    "Select a service and complete a single consent form with shared patient and practitioner details.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://ivhub.com/consent",
  },
  openGraph: {
    title: "Consent Form | IV Wellness Lounge Clinic in Dubai",
    description:
      "Select a service and complete a single consent form with shared patient and practitioner details.",
    url: "https://ivhub.com/consent",
    siteName: "IV Wellness Lounge Clinic in Dubai",
    images: [
      {
        url: "https://ivhub.com/og.png",
        width: 1200,
        height: 630,
        alt: "IV Wellness Lounge Clinic in Dubai",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consent Form | IV Wellness Lounge Clinic in Dubai",
    description:
      "Select a service and complete a single consent form with shared patient and practitioner details.",
    images: ["https://ivhub.com/og.png"],
  },
};


export default function ConsentPage() {
  return (
    <div className="container">
      <ConsentUnifiedClient />
    </div>
  );
}
