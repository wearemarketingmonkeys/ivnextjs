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

  understanding: [],
 
  expectedBenefits: "Restoration of facial volume; Enhanced firmness/texture/elasticity; Gradual improvement; Long-lasting results up to 2 years",
  sideEffects: "Swelling/redness/bruising; Tenderness; Small bumps/nodules; Asymmetry; Granuloma (rare); Vascular occlusion (rare); Allergic reaction/irritation",
  preAftercare: "Avoid alcohol/aspirin/ibuprofen; Follow massage instructions; Avoid dental/facial/peels 2 weeks; Avoid heat/sun/sauna/exercise 48–72h; Contact clinic if adverse symptoms",
  resultsLimitations: "Results vary; Non-surgical & non-permanent; Gradual 6–12 weeks; May require maintenance",
 
  contraindications: {},
  contraindicationsNotes: "",

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

    if (type === "checkbox" && Array.isArray(form[name])) {
      setForm((prev) => {
        const arr = checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value);
        return { ...prev, [name]: arr };
      });
      return;
    }

    if (name.startsWith("contra_")) {
      setForm((prev) => ({
        ...prev,
        contraindications: {
          ...prev.contraindications,
          [name.replace("contra_", "")]: value,
        },
      }));
      return;
    }

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
      <div className="form-group">
        <label>Full Name (as per ID)</label>
        <input name="fullName" value={form.fullName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Date of Birth</label>
        <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Mobile Number</label>
        <input name="contact" value={form.contact} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Date of Procedure</label>
        <input type="date" name="procedureDate" value={form.procedureDate} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Emergency Contact Name & Number</label>
        <input name="emergencyContact" value={form.emergencyContact} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Treating Practitioner (if known)</label>
        <input name="practitionerName" value={form.practitionerName} onChange={handleChange} />
      </div>

      {/* PRODUCT DETAILS */}
      <h2>Product Details</h2>
      <div className="form-group">
        <label>Collagen Stimulator Product Used</label>
        <input name="productUsed" value={form.productUsed} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Area(s) to be Treated</label>
        {treatmentOptions.map((t) => (
          <label key={t} style={{ display: "block" }}>
            <input
              type="checkbox"
              name="treatmentAreas"
              value={t}
              checked={form.treatmentAreas.includes(t)}
              onChange={handleChange}
            />{" "}
            {t}
          </label>
        ))}
        <input name="otherArea" value={form.otherArea} onChange={handleChange} placeholder="Other area" />
      </div>

      {/* PROCEDURE UNDERSTANDING */}
      <h2>Procedure Understanding</h2>
      {[
        "I understand collagen stimulators induce collagen over time.",
        "I acknowledge results are gradual, not immediate.",
        "I understand this is not HA filler with instant volume.",
        "I confirm treatment will be performed by DHA-licensed professional.",
      ].map((t, i) => (
        <div className="form-group" key={i}>
          <label>
            <input
              type="checkbox"
              name="understanding"
              value={t}
              checked={form.understanding.includes(t)}
              onChange={handleChange}
            />{" "}
            {t}
          </label>
        </div>
      ))}

      {/* CONTRAINDICATIONS */}
      <h2>Contraindications</h2>
      {contraindicationOptions.map((c) => (
        <div className="form-group" key={c}>
          <label>{c}</label>
          <label>
            <input type="radio" name={`contra_${c}`} value="Yes" onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name={`contra_${c}`} value="No" onChange={handleChange} /> No
          </label>
        </div>
      ))}
      <div className="form-group">
        <label>If Yes to any, please explain:</label>
        <textarea
          name="contraindicationsNotes"
          value={form.contraindicationsNotes}
          onChange={handleChange}
          rows={3}
        />
      </div>

      {/* EXPECTED BENEFITS */}
        <h2>Expected Benefits</h2>
        <ul style={{ paddingLeft: "20px" }}>
        <li>Restoration of facial volume loss due to aging or weight loss</li>
        <li>Enhanced skin firmness, texture, and elasticity</li>
        <li>Gradual and natural-looking improvement</li>
        <li>Long-lasting results (up to 2 years with a full course)</li>
        </ul>
        <p><em>Note: 2 sessions spaced 3–6 months apart may be required for optimal results.</em></p>

        <br/>
        {/* POTENTIAL SIDE EFFECTS */}
        <h2>Potential Side Effects</h2>
        <ul style={{ paddingLeft: "20px" }}>
        <li>Swelling, redness, or bruising at the injection site</li>
        <li>Mild tenderness or soreness</li>
        <li>Small bumps or nodules (may be temporary or persistent)</li>
        <li>Asymmetry or contour irregularities</li>
        <li>Granuloma formation (rare)</li>
        <li>Vascular occlusion (very rare)</li>
        <li>Allergic reaction or skin irritation</li>
        </ul>
        <p><em>I understand that post-injection massage and aftercare are essential in preventing complications.</em></p>

        <br/>
        {/* PRE/AFTERCARE */}
        <h2>Pre-treatment & Aftercare</h2>
        <ul style={{ paddingLeft: "20px" }}>
        <li>I will avoid alcohol, aspirin, ibuprofen, and vigorous activity 24 hours before and after</li>
        <li>I will follow post-care instructions including massage (5 minutes, 5 times a day, for 5 days if advised)</li>
        <li>I will not undergo dental work, facials, or chemical peels for 2 weeks after treatment</li>
        <li>I will avoid excessive heat (sun, sauna, exercise) for 48–72 hours</li>
        <li>I will contact the clinic if I experience any adverse symptoms</li>
        </ul>

        <br/>
        {/* RESULTS & LIMITATIONS */}
        <h2>Results & Limitations</h2>
        <ul style={{ paddingLeft: "20px" }}>
        <li>I understand results vary from person to person</li>
        <li>I understand this treatment is non-surgical and non-permanent</li>
        <li>I understand collagen production is gradual and visible changes may take 6–12 weeks</li>
        <li>I may require additional sessions or maintenance to achieve desired results</li>
        </ul>

      <br/>
      {/* PHOTO CONSENT */}
      <h2>Photo Consent</h2>
      <div className="form-group">
        <label>
          <input
            type="radio"
            name="photoConsent"
            value="Yes"
            checked={form.photoConsent === "Yes"}
            onChange={handleChange}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="photoConsent"
            value="No"
            checked={form.photoConsent === "No"}
            onChange={handleChange}
          />{" "}
          No
        </label>
      </div>

      {/* LIABILITY DISCLAIMER */}
      <h2>Liability Disclaimer</h2>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="liabilityDisclaimer"
            value="I accept liability disclaimer"
            checked={!!form.liabilityDisclaimer}
            onChange={handleChange}
          />{" "}
          I understand and agree that IV Wellness Lounge Clinic LLC, its medical practitioners, and associated staff shall not be held financially liable for:
        </label>
        <ul style={{ paddingLeft: "20px" }}>
            <li>Any unsatisfactory or suboptimal result that may occur despite appropriate technique and materials used</li>
            <li>Any individual allergic or hypersensitive reaction, delayed response, or side effect that could not have been reasonably predicted or tested prior to treatment</li>
            <li>Any incompatibility or unsuitability of my skin or physiology for this treatment, including where the treatment fails to produce the expected or desired effect</li>
            <li>The need for further corrective procedures or medical management, which may incur additional cost</li>
        </ul>

        <p>
        I acknowledge that I have been given the opportunity to ask questions, understand the
        limitations of the procedure, and that results vary from person to person.
        </p>

        <p>
            I have read and understood this disclaimer, and I agree to its terms without reservation.
        </p>
      </div>

      {/* FINAL CONSENT */}
      <h2>Final Consent</h2>
      {[
        "I am not pregnant or breastfeeding",
        "I disclosed all medical history truthfully",
        "I read and understood this form",
        "I had opportunity to ask questions",
        "I give voluntary informed consent",
      ].map((t, i) => (
        <div className="form-group" key={i}>
          <label>
            <input
              type="checkbox"
              name="finalConsent"
              value={t}
              checked={form.finalConsent.includes(t)}
              onChange={handleChange}
            />{" "}
            {t}
          </label>
        </div>
      ))}

      {/* SIGNATURE */}
      <h2>Signature</h2>
      <div className="form-group">
        <label>Patient Full Name</label>
        <input name="patientName" value={form.patientName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Consent Date</label>
        <input type="date" name="consentDate" value={form.consentDate} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Patient Signature</label>
        <div style={{ border: "1px solid #ddd", borderRadius: 8, overflow: "hidden", maxWidth: 520 }}>
          <SignatureCanvas ref={sigRef} canvasProps={{ width: 520, height: 200, className: "signature-canvas" }} />
        </div>
        <button type="button" className="btn btn-stroke" onClick={clearSignature} style={{ marginTop: 8 }}>
          Clear Signature
        </button>
      </div>

      {status && <p className="form-status">{status}</p>}

      <div className="btn-wrap">
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
}