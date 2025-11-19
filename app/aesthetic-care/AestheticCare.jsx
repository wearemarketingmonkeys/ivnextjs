'use client';
import { useState } from "react";

export default function AestheticCare({ sections = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Fallback if no content provided
  if (!Array.isArray(sections) || sections.length === 0) {
    return (
      <div className="luxury-page">
        <div className="luxury-wrapper">
          <p className="text-center luxury-font" style={{ color: "#6b6b6b" }}>
            No pre & post care guidelines available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="luxury-page">
      <div className="luxury-wrapper luxury-font">

        {sections.map((sec, i) => {
          const preList = Array.isArray(sec.pre) ? sec.pre : [];
          const postList = Array.isArray(sec.post) ? sec.post : [];

          return (
            <div className="luxury-card" key={i}>

              {/* Header */}
              <button
                type="button"
                className="luxury-header"
                onClick={() => toggle(i)}
              >
                <span className="luxury-title">{sec.title}</span>

                <span className={`luxury-icon ${openIndex === i ? "rotate" : ""}`}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* Content */}
              {openIndex === i && (
                <div className="luxury-content">

                  {/* Pre-Care */}
                  <div>
                    <h2 className="luxury-section-label">Pre-Care</h2>
                    <ul className="luxury-list">
                      {preList.map((item, idx) => (
                        <li className="luxury-item" key={idx}>
                          <span className="luxury-bullet">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Post-Care */}
                  <div>
                    <h2 className="luxury-section-label">Post-Care</h2>
                    <ul className="luxury-list">
                      {postList.map((item, idx) => (
                        <li className="luxury-item" key={idx}>
                          <span className="luxury-bullet">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
}
