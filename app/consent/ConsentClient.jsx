"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ConsentClient() {
  const searchParams = useSearchParams();
  const cr = searchParams.get("cr");

  const withCr = (url) => {
    if (!cr) return url;

    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}cr=${encodeURIComponent(cr)}`;
  };

  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-form">
          <div className="form-wrapper">
            <div className="form-wrap" style={{ display: "block" }}>
              <h1>Select the Consent Form</h1>
              <br />
              <div className="formsection">

                {/* External */}
                <div className="btn-wrap">
                  <a
                    href={withCr("https://consent.ivhub.com/consentclinic.php")}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IV Consent
                  </a>
                </div>

                {/* Internal Links */}
                <div className="btn-wrap">
                  <Link href={withCr("/consenthydrafacial")} className="btn">
                    Hydrafacial Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href={withCr("/consentlaser")} className="btn">
                    Laser Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href={withCr("/consentchemical")} className="btn">
                    Chemical Peel Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href={withCr("/consentliposculpt")} className="btn">
                    Liposculpt Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href={withCr("/consentlipozero")} className="btn">
                    Lipozero Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href={withCr("/consentmicroneedling")} className="btn">
                    Microneedling Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href={withCr("/consentcollagen")} className="btn">
                    Collagen Stimulator Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href={withCr("/consentemsculpt")} className="btn">
                    EMSculpt / Body Contouring Consent
                  </Link>
                </div>

                {/* External Links */}
                <div className="btn-wrap">
                  <a
                    href={withCr("https://consent.ivhub.com/consentbotox.php")}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Botox Treatment Consent
                  </a>
                </div>

                <div className="btn-wrap">
                  <a
                    href={withCr("https://consent.ivhub.com/consentfillers.php")}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dermal Fillers Consent
                  </a>
                </div>

                <div className="btn-wrap">
                  <a
                    href={withCr("https://consent.ivhub.com/consentmorpheus.php")}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Morpheus8 & Forma Consent
                  </a>
                </div>

                <div className="btn-wrap">
                  <a
                    href={withCr("https://consent.ivhub.com/consentprp.php")}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PRP Therapy Consent
                  </a>
                </div>

                <div className="btn-wrap">
                  <a
                    href={withCr("https://consent.ivhub.com/consentskinbooster.php")}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Skin Booster Consent
                  </a>
                </div>

                <div className="btn-wrap">
                  <Link href={withCr("/consenthifu")} className="btn">
                    HIFU Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href={withCr("/consentpeptide")} className="btn">
                    Peptide Consent
                  </Link>
                </div>

                <div className="btn-wrap">
                  <Link href={withCr("/consentlumecca")} className="btn">
                    Lumecca Consent
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