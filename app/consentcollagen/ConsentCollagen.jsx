"use client";

import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const initialState = {
  serviceId: "collagenstimulator",

  fullName: "",
  dob: "",
  contact: "",
  email: "",
  procedureDate: "",
  emergencyContact: "",
  practitionerName: "",

  productUsed: "",
  treatmentAreas: [],
  otherArea: "",

  // checkboxes acknowledgements
  understanding: [],
  expectedBenefits: [],
  sideEffects: [],
  contraindications: {},
  contraindicationsNotes: "",

  preAftercare: [],
  resultsLimitations: [],
  photoConsent: "",
  liabilityDisclaimer: "",
  finalConsent: [],

  patientName: "",
  consentDate: "",
};

const treatmentOptions = [
  "Temples",
  "Mid-face",
  "Jawline",
  "Chin",
  "Neck",
  "Décolleté",
  "Hands",
];

const contraindicationOptions = [
  "Pregnancy or breastfeeding",
  "Autoimmune disease or immunosuppressive medication",
  "Keloids or poor wound healing history",
  "Skin infection, active acne, or inflammation in the area",
  "Allergy to product components",
  "Recent laser or energy-based treatment in the area",
  "Bleeding disorders or use of blood thinners",
];

export default function ConsentCollagen() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const sigRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // multiple checkboxes (arrays)
    if (type === "checkbox" && Array.isArray(form[name])) {
      setForm((prev) => {
        const arr = checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value);
        return { ...prev, [name]: arr };
      });
      return;
    }

    // contraindications: yes/no grid
    if (name.startsWith("contra_")) {
      setForm((prev) => ({
        ...prev,
        contraindications: { ...prev.contraindications, [value]: checked ? "Yes" : "No" },
      }));
      return;
    }

    // radios / text / date / email
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const clearSignature = () => sigRef.current?.clear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        if (Array.isArray(v)) {
          v.forEach((item) => fd.append(`${k}[]`, item));
        } else if (typeof v === "object") {
          Object.entries(v).forEach(([ck, cv]) =>
            fd.append(`${k}[${ck}]`, cv)
          );
        } else {
          fd.append(k, v ?? "");
        }
      });

      if (sigRef.current && !sigRef.current.isEmpty()) {
        const dataUrl = sigRef.current.toDataURL("image/png");
        const blob = await (await fetch(dataUrl)).blob();
        fd.append("patientSignature", blob, "patient-signature.png");
      }

      const res = await fetch("https://mails.ivhub.com/collagenconsentemail.php", {
        method: "POST",
        body: fd,
      });

      if (res.ok) {
        setStatus("Form submitted successfully!");
        setForm(initialState);
        clearSignature();
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch {
      setStatus("Error occurred. Please try again.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* PATIENT DETAILS */}
      <h2>Patient Details</h2>
      <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name (as per ID)" required />
      <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
      <input name="contact" value={form.contact} onChange={handleChange} placeholder="Mobile Number" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required />
      <input type="date" name="procedureDate" value={form.procedureDate} onChange={handleChange} required />
      <input name="emergencyContact" value={form.emergencyContact} onChange={handleChange} placeholder="Emergency Contact" />
      <input name="practitionerName" value={form.practitionerName} onChange={handleChange} placeholder="Treating Practitioner" />

      {/* PRODUCT DETAILS */}
      <h2>Product Details</h2>
      <input name="productUsed" value={form.productUsed} onChange={handleChange} placeholder="Collagen Stimulator Product Used" />
      <h3>Areas to be Treated</h3>
      {treatmentOptions.map((t) => (
        <label key={t}><input type="checkbox" name="treatmentAreas" value={t} checked={form.treatmentAreas.includes(t)} onChange={handleChange}/> {t}</label>
      ))}
      <input name="otherArea" value={form.otherArea} onChange={handleChange} placeholder="Other area" />

      {/* PROCEDURE UNDERSTANDING */}
      <h2>Procedure Understanding</h2>
      {[
        "I understand collagen stimulators induce collagen over time.",
        "I acknowledge results are gradual, not immediate.",
        "I understand this is not HA filler with instant volume.",
        "I confirm treatment will be performed by DHA-licensed professional.",
      ].map((t, i) => (
        <label key={i}><input type="checkbox" name="understanding" value={t} checked={form.understanding.includes(t)} onChange={handleChange}/> {t}</label>
      ))}

      {/* EXPECTED BENEFITS */}
      <h2>Expected Benefits</h2>
      {[
        "Restoration of facial volume",
        "Enhanced skin firmness, texture, elasticity",
        "Gradual, natural improvement",
        "Long-lasting results (up to 2 years)",
      ].map((t, i) => (
        <label key={i}><input type="checkbox" name="expectedBenefits" value={t} checked={form.expectedBenefits.includes(t)} onChange={handleChange}/> {t}</label>
      ))}

      {/* SIDE EFFECTS */}
      <h2>Potential Side Effects</h2>
      {[
        "Swelling, redness, bruising",
        "Tenderness/soreness",
        "Small bumps or nodules",
        "Asymmetry or contour irregularities",
        "Granuloma formation (rare)",
        "Vascular occlusion (very rare)",
        "Allergic reaction or irritation",
      ].map((t, i) => (
        <label key={i}><input type="checkbox" name="sideEffects" value={t} checked={form.sideEffects.includes(t)} onChange={handleChange}/> {t}</label>
      ))}

      {/* CONTRAINDICATIONS */}
      <h2>Contraindications</h2>
      {contraindicationOptions.map((c) => (
        <div key={c}>
          <span>{c}</span>
          <label><input type="radio" name={`contra_${c}`} value={c} onChange={handleChange}/> Yes</label>
          <label><input type="radio" name={`contra_${c}`} value={c} onChange={handleChange}/> No</label>
        </div>
      ))}
      <textarea name="contraindicationsNotes" value={form.contraindicationsNotes} onChange={handleChange} placeholder="If Yes, please explain" rows={3}/>

      {/* PRE/AFTERCARE */}
      <h2>Pre-treatment & Aftercare</h2>
      {[
        "Avoid alcohol/aspirin/ibuprofen 24h before & after",
        "Follow massage post-care instructions",
        "Avoid dental/facial/peels for 2 weeks",
        "Avoid heat/sun/sauna/exercise 48–72h",
        "Contact clinic if adverse symptoms",
      ].map((t, i) => (
        <label key={i}><input type="checkbox" name="preAftercare" value={t} checked={form.preAftercare.includes(t)} onChange={handleChange}/> {t}</label>
      ))}

      {/* RESULTS & LIMITATIONS */}
      <h2>Results & Limitations</h2>
      {[
        "Results vary per person",
        "Non-surgical and non-permanent",
        "Collagen production is gradual, 6–12 weeks",
        "May require additional sessions",
      ].map((t, i) => (
        <label key={i}><input type="checkbox" name="resultsLimitations" value={t} checked={form.resultsLimitations.includes(t)} onChange={handleChange}/> {t}</label>
      ))}

      {/* PHOTO CONSENT */}
      <h2>Photo Consent</h2>
      {["Yes", "No"].map((opt) => (
        <label key={opt}><input type="radio" name="photoConsent" value={opt} checked={form.photoConsent === opt} onChange={handleChange}/> {opt}</label>
      ))}

      {/* LIABILITY DISCLAIMER */}
      <h2>Liability Disclaimer</h2>
      <label><input type="checkbox" name="liabilityDisclaimer" value="I accept liability disclaimer" checked={!!form.liabilityDisclaimer} onChange={handleChange}/> I have read and accept the disclaimer.</label>

      {/* FINAL CONSENT */}
      <h2>Final Consent</h2>
      {[
        "I am not pregnant or breastfeeding",
        "I disclosed all medical history truthfully",
        "I read and understood this form",
        "I had opportunity to ask questions",
        "I give voluntary informed consent",
      ].map((t, i) => (
        <label key={i}><input type="checkbox" name="finalConsent" value={t} checked={form.finalConsent.includes(t)} onChange={handleChange}/> {t}</label>
      ))}

      {/* SIGNATURE */}
      <h2>Signature</h2>
      <input name="patientName" value={form.patientName} onChange={handleChange} placeholder="Patient Full Name" required />
      <input type="date" name="consentDate" value={form.consentDate} onChange={handleChange} required />

      <div style={{ border: "1px solid #ddd", borderRadius: 8, maxWidth: 520 }}>
        <SignatureCanvas ref={sigRef} canvasProps={{ width: 520, height: 200, className: "signature-canvas" }} />
      </div>
      <button type="button" onClick={clearSignature}>Clear Signature</button>

      {status && <p className="form-status">{status}</p>}

      <button type="submit" className="btn">Submit</button>
    </form>
  );
}
