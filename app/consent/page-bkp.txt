// app/consent/page.jsx
import ConsentUnifiedClient from "./ConsentUnifiedClient";

export const metadata = {
  title: "Consent Form | IV Wellness Lounge",
  robots: "noindex, nofollow",
  description:
    "Select a service and complete a single consent form with shared patient and practitioner details.",
  alternates: { canonical: "https://ivhub.com/consent" },
};

export default function ConsentPage() {
  return (
    <div className="container">
      <ConsentUnifiedClient />
    </div>
  );
}
