import ConsentClient from "./ConsentClient";

export const metadata = {
  title: "Consent Forms | IV Wellness Lounge Clinic in Dubai",
  description: "Select and complete your consent form at IV Wellness Lounge Clinic in Dubai.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://ivhub.com/consent" },
};

export default function ConsentPage() {
  return <ConsentClient />;
}