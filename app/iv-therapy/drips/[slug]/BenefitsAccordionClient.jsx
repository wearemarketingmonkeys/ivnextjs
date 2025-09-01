// app/components/BenefitsAccordion.jsx
// (No "use client" needed — <details> works without JS)

export default function BenefitsAccordion({ drip }) {
  return (
    <div className="benifit">
      <div className="container">
        <div className="benifit-wrap">
          <div className="right">
            {/* Key Benefits */}
            <details className="accordion-block">
              <summary className="accordion-summary">
                <h2 className="section-title">Key Benefits :</h2>
                <span className="accordion-caret" aria-hidden>▾</span>
              </summary>

              <div className="accordion-content">
                <div className="benifit-list keybenefit">
                  {drip.benifits?.map((x, index) => (
                    <div className="single-list" key={index}>
                      <p>{x}</p>
                    </div>
                  ))}
                </div>
              </div>
            </details>

            {/* Recommended for */}
            <details className="accordion-block">
              <summary className="accordion-summary">
                <h2>Recommended For:</h2>
                <span className="accordion-caret" aria-hidden>▾</span>
              </summary>

              <div className="accordion-content">
                <div className="benifit-list">
                  {drip.benifitList?.map((x, index) => (
                    <div className="single-list" key={index}>
                      <img src={x.icon} alt={x.txt} />
                      <p>{x.txt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
