import Link from "next/link";

export const metadata = {
  title: "Consent Forms | IV Wellness Lounge Clinic in Dubai",
  description: "Select and complete your consent form at IV Wellness Lounge Clinic in Dubai.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://ivhub.com/consent" },
};

export default function ConsentPage() {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-form">
          <div className="form-wrapper">
            <div className="form-wrap" style={{ display: "block" }}>

              <h1>Select the Consent Form</h1>
              <br/>
              <div className="formsection">

                <div className="btn-wrap">
                    <a
                      href="https://consent.ivhub.com/"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IV Consent
                    </a>
                  </div>

                <div className="btn-wrap">
                  <Link href="/consenthydrafacial" className="btn">
                    Hydrafacial Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href="/consentlaser" className="btn">
                    Laser Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href="/consentchemical" className="btn">
                    Chemical Peel Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href="/consentliposculpt" className="btn">
                    Liposculpt Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href="/consentlipozero" className="btn">
                    Lipozero Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href="/consentmicroneedling" className="btn">
                    Microneedling Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href="/consentcollagen" className="btn">
                    Collagen Stimulator Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href="/consentemsculpt" className="btn">
                    EMSculpt / Body Contouring Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                    <a
                      href="https://consent.ivhub.com/consentbotox.php"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Botox Treatment Consent
                    </a>
                  </div>

                  <div className="btn-wrap">
                    <a
                      href="https://consent.ivhub.com/consentfillers.php"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dermal Fillers Consent
                    </a>
                  </div>

                  <div className="btn-wrap">
                    <a
                      href="https://consent.ivhub.com/consentmorpheus.php"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Morpheus8 & Forma Consent
                    </a>
                  </div>

                  <div className="btn-wrap">
                    <a
                      href="https://consent.ivhub.com/consentprp.php"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PRP Therapy Consent
                    </a>
                  </div>

                  <div className="btn-wrap">
                    <a
                      href="https://consent.ivhub.com/consentskinbooster.php"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Skin Booster Consent
                    </a>
                  </div>

                  <div className="btn-wrap">
                    <Link href="/consenthifu" className="btn">
                      HIFU Consent
                    </Link>
                  </div>

                  <div className="btn-wrap">
                    <Link href="/consentpeptide" className="btn">
                      Peptide Consent
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
