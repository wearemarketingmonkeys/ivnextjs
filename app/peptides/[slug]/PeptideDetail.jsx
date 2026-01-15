// components/PeptideDetail.jsx
'use client';

export default function PeptideDetail({ peptide }) {
  const d = peptide?.details;
  if (!d) return null;

  return (
    <div className="detail">
      <h2 className="detailTitle">{d.headline}</h2>

      {!!d.overview?.length && (
        <section className="modalSection">
          <h3 className="modalSectionTitle">Overview</h3>
          <div className="modalSectionContent">
            {d.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {!!d.uses?.length && (
        <section className="modalSection">
          <h3 className="modalSectionTitle">Uses and Indications</h3>
          <div className="modalSectionContent">
            {d.usesIntro && <p>{d.usesIntro}</p>}
            <ul>
              {d.uses.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {!!d.benefits?.length && (
        <section className="modalSection keybenefits">
          <h3 className="modalSectionTitle">Key Benefits</h3>
          <div className="modalSectionContent">
            {/* supports your new stat-style benefits (objects) */}
            {typeof d.benefits[0] === 'string' ? (
              <ul>
                {d.benefits.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            ) : (
              <div className="benefitsStatGrid">
                {d.benefits.map((b, i) => (
                  <div className="benefitsStatItem" key={i}>
                    <div className="benefitsStatIcon">{b.icon}</div>
                    <div className="benefitsStatValue">{b.value}</div>
                    <div className="benefitsStatLabel">{b.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {!!d.dosageProtocol?.length && (
        <section className="modalSection">
          <h3 className="modalSectionTitle">Dosage Protocol</h3>
          <div className="modalSectionContent">
            {d.dosageIntro && <p>{d.dosageIntro}</p>}
            {/* use your dosage heading formatter here if you already added it */}
            <div className="dosageList">
              {d.dosageProtocol.map((line, idx) => (
                <div key={idx} className="dosageItem">
                  <span className="dosageBullet" aria-hidden />
                  <span className="dosageText">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {d.stackingTitle && d.stackingText && (
        <section className="modalSection">
          <h3 className="modalSectionTitle">{d.stackingTitle}</h3>
          <div className="modalSectionContent">
            <p>{d.stackingText}</p>
          </div>
        </section>
      )}

      {d.timingTitle && d.timingText && (
        <section className="modalSection">
          <h3 className="modalSectionTitle">{d.timingTitle}</h3>
          <div className="modalSectionContent">
            <p>{d.timingText}</p>
          </div>
        </section>
      )}

      {d.safety && (
        <section className="modalSection">
          <h3 className="modalSectionTitle">Safety and Side Effects</h3>
          <div className="modalSectionContent">
            <p>{d.safety}</p>
          </div>
        </section>
      )}

      {!!d.contraindications?.length && (
        <section className="modalSection">
          <h3 className="modalSectionTitle">{d.contraTitle || 'Contraindications'}</h3>
          <div className="modalSectionContent">
            {d.contraIntro && <p>{d.contraIntro}</p>}
            <ul>
              {d.contraindications.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
            {d.contraOutro && <p style={{ marginTop: 12 }}>{d.contraOutro}</p>}
          </div>
        </section>
      )}

      {d.bestFor && (
        <section className="modalSection">
          <h3 className="modalSectionTitle">Who This Peptide Is Best For</h3>
          <div className="modalSectionContent">
            <p>{d.bestFor}</p>
          </div>
        </section>
      )}

      {d.ctaTitle && d.ctaText && (
        <section className="modalSection">
          <h3 className="modalSectionTitle">{d.ctaTitle}</h3>
          <div className="modalSectionContent">
            <p>{d.ctaText}</p>
            {/* your WhatsApp button can go here */}
          </div>
        </section>
      )}
    </div>
  );
}
