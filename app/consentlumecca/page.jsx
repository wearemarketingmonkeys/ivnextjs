import ConsentLumecca from "./consentlumecca";

export const metadata = {
  title: "Lumecca Consent | IV Wellness Lounge Clinic in Dubai",
  description:
    "Complete your Lumecca consent at IV Wellness Lounge Clinic in Dubai: medical history, contraindications, visit details, and signature.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/consentlumecca" },
};

export default function Page({ searchParams }) {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-form">
          <div className="form-wrapper">
            <div className="form-wrap">
              <div className="right">
                <h1>Lumecca Consent Form</h1>
                <ConsentLumecca cr={searchParams.cr}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
