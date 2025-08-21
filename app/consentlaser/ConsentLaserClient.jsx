// app/consentlaser/ConsentLaserClient.jsx
"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const initialState = {
  serviceId: "laser",

  // patient
  fullName: "",
  emiratesId: "",
  dob: "",
  gender: "",
  contact: "",
  email: "",

  // treatment specifics
  treatmentAreas: "",
  skinType: "",

  // medical
  medicalConditions: [],
  allergyExplanation: "",

  // consents
  photographyConsent: "",

  // acknowledgements (only posted when checked)
  understanding1: "",
  understanding2: "",
  understanding3: "",

  // signatures
  patientName: "",
  consentDate: "",
  practitionerName: "",
};

const medicalOptions = [
  "Pregnancy or breastfeeding",
  "Active skin infection, eczema, psoriasis on treatment area",
  "History of keloids or hypertrophic scarring",
  "Recent waxing, threading, or epilation (within 4 weeks)",
  "Recent sun exposure/tanning (past 2 weeks) or photosensitivity",
  "Use of isotretinoin (Accutane) within past 6–12 months",
  "Use of antibiotics/retinoids in the past 7 days",
  "Metal implants, pacemaker, or tattoos in the treatment area",
  "Bleeding disorders or anticoagulant medications",
  "Known allergies to topical anesthetics or post-care products",
];

export default function ConsentLaserClient() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const sigRef = useRef(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    // array checkbox list
    if (type === "checkbox" && name === "medicalConditions") {
      setForm((prev) => {
        const next = checked
          ? [...prev.medicalConditions, value]
          : prev.medicalConditions.filter((v) => v !== value);
        return { ...prev, medicalConditions: next };
      });
      return;
    }

    // individual acknowledgements (required checkboxes)
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked ? value || "yes" : "" }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const clearSignature = () => sigRef.current?.clear();

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const fd = new FormData();

      Object.entries(form).forEach(([k, v]) => {
        if (Array.isArray(v)) {
          v.forEach((item) => fd.append(`${k}[]`, item));
        } else {
          if (k.startsWith("understanding") && !v) return; // only send when checked
          fd.append(k, v ?? "");
        }
      });

      if (sigRef.current && !sigRef.current.isEmpty()) {
        const blob = await (await fetch(sigRef.current.toDataURL())).blob();
        fd.append("patientSignature", blob, "patient-signature.png");
      }

      // keep your existing PHP endpoint
      const res = await fetch("https://mails.ivhub.com/laserconsentemail.php", {
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
    } catch (err) {
      setStatus("Error occurred. Please try again.");
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      {/* Patient info */}
      <div className="form-group">
        <label>Full Name</label>
        <input name="fullName" value={form.fullName} onChange={onChange} placeholder="Full Name" required />
      </div>

      <div className="form-group">
        <label>Emirates ID / Passport</label>
        <input name="emiratesId" value={form.emiratesId} onChange={onChange} placeholder="Emirates ID / Passport" required />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input type="date" name="dob" value={form.dob} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>Gender</label>
        <label><input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={onChange} required /> Male</label>
        <label><input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={onChange} required /> Female</label>
        <label><input type="radio" name="gender" value="Other" checked={form.gender === "Other"} onChange={onChange} required /> Other</label>
      </div>

      <div className="form-group">
        <label>Contact Number</label>
        <input name="contact" value={form.contact} onChange={onChange} placeholder="Contact Number" required />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email Address" required />
      </div>

      {/* Treatment specifics */}
      <div className="form-group">
        <label>Treatment Areas (e.g., Underarms, Full Leg)</label>
        <input name="treatmentAreas" value={form.treatmentAreas} onChange={onChange} placeholder="e.g., Underarms, Full Leg" />
      </div>

      <div className="form-group">
        <label>Skin Type (Fitzpatrick)</label>
        {["I", "II", "III", "IV", "V", "VI"].map((t) => (
          <label key={t}>
            <input
              type="radio"
              name="skinType"
              value={t}
              checked={form.skinType === t}
              onChange={onChange}
              required
            />{" "}
            {t}
          </label>
        ))}
      </div>

      {/* Medical history */}
      <h2>Medical History</h2>
      {medicalOptions.map((opt) => (
        <div className="form-group" key={opt}>
          <label>
            <input
              type="checkbox"
              name="medicalConditions"
              value={opt}
              checked={form.medicalConditions.includes(opt)}
              onChange={onChange}
            />{" "}
            {opt}
          </label>
        </div>
      ))}

      <div className="form-group">
        <label>If you checked any, please elaborate:</label>
        <textarea
          name="allergyExplanation"
          value={form.allergyExplanation}
          onChange={onChange}
          rows={3}
        />
      </div>

      {/* Risks / Acknowledgements */}
      <h2>Procedure, Risks & Guidelines</h2>
      <p>
        Laser Hair Removal reduces hair growth using concentrated light. Typical side effects include
        temporary redness, swelling, and sensitivity. Rare risks include burns, pigmentation changes,
        blistering, or scarring. Strict pre/post-care (no waxing/epilation for 4 weeks prior, avoid
        sun exposure, and use SPF) is required.
      </p>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="understanding1"
            value="I understand results vary and multiple sessions are needed."
            checked={!!form.understanding1}
            onChange={onChange}
            required
          />{" "}
          I understand results vary and multiple sessions are needed.
        </label>
        <label>
          <input
            type="checkbox"
            name="understanding2"
            value="I agree to follow all pre-treatment and post-care instructions."
            checked={!!form.understanding2}
            onChange={onChange}
            required
          />{" "}
          I agree to follow all pre-treatment and post-care instructions.
        </label>
        <label>
          <input
            type="checkbox"
            name="understanding3"
            value="I have disclosed all relevant medical history and medications."
            checked={!!form.understanding3}
            onChange={onChange}
            required
          />{" "}
          I have disclosed all relevant medical history and medications.
        </label>
      </div>

      {/* Photography consent */}
      <h2>Consent for Photography</h2>
      <div className="form-group">
        {[
          "I CONSENT to photography for clinical documentation only.",
          "I CONSENT to photography for internal marketing.",
          "I DO NOT consent to any photography.",
        ].map((t) => (
          <label key={t} style={{ display: "block", marginBottom: 6 }}>
            <input
              type="radio"
              name="photographyConsent"
              value={t}
              checked={form.photographyConsent === t}
              onChange={onChange}
              required
            />{" "}
            {t}
          </label>
        ))}
      </div>

      {/* Signatures */}
      <h2>Declaration & Signatures</h2>
      <div className="form-group">
        <label>Patient Name</label>
        <input name="patientName" value={form.patientName} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>Date of Consent</label>
        <input type="date" name="consentDate" value={form.consentDate} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>Practitioner Name</label>
        <input name="practitionerName" value={form.practitionerName} onChange={onChange} required />
      </div>

      {/* Privacy */}
      <h2>Patient Privacy & Record Handling</h2>
      <p>
        All patient data will be stored and managed in accordance with UAE Federal Law No. 2 of 2019
        and DHA privacy regulations.
      </p>
      <br/>
      <div className="form-group">
          <div className="consentdetails">
              <h2 className="section-title">Disclaimer of Liability</h2>
              <div>
                <div>
                  <p>
                    I understand and agree that IV Wellness Lounge Clinic LLC, its medical practitioners, and
                    associated staff shall not be held financially liable for:
                  </p>

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
              </div>
            </div>

      </div>

      <div className="form-group">
        <label>Patient Signature</label>
        <div style={{ border: "1px solid #ddd", borderRadius: 8, overflow: "hidden", maxWidth: 520 }}>
          <SignatureCanvas
            ref={sigRef}
            canvasProps={{ width: 520, height: 200, className: "signature-canvas" }}
          />
        </div>
        <button type="button" className="btn btn-stroke" onClick={clearSignature} style={{ marginTop: 8 }}>
          Clear Signature
        </button>
      </div>
      {status && <p className="form-status">{status}</p>}

      <div className="btn-wrap">
        <button type="submit" className="btn">Submit Laser Consent</button>
      </div>
    </form>
  );
}
