// app/consentchemical/ConsentChemicalClient.jsx
"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

// Same options you used before (kept intact)
const medicalOptions = [
  "Pregnancy or breastfeeding",
  "Use of isotretinoin (Accutane) within the past 6–12 months",
  "History of keloid or hypertrophic scarring",
  "Active acne, eczema, rosacea, or dermatitis",
  "Herpes simplex (cold sores)",
  "Recent facial surgery, microneedling, or laser treatment",
  "Autoimmune or skin sensitivity disorders",
  "Use of retinoids, AHAs, or topical steroids in the past 7 days",
  "Known allergies to glycolic acid, salicylic acid, TCA, lactic acid, etc.",
];

const initialState = {
  serviceId: "chemical",
  fullName: "",
  emiratesId: "",
  dob: "",
  gender: "",
  contact: "",
  email: "",
  skinType: "",
  medicalConditions: [],
  allergyExplanation: "",
  photographyConsent: "",
  patientName: "",
  consentDate: "",
  practitionerName: "",
};

export default function ConsentChemicalClient() {
  const [form, setForm] = useState(initialState);
  const [suggestions, setSuggestions] = useState([]);
  const [status, setStatus] = useState("");
  const sigRef = useRef(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    // checkbox array
    if (type === "checkbox" && name === "medicalConditions") {
      setForm((prev) => {
        const next = checked
          ? [...prev.medicalConditions, value]
          : prev.medicalConditions.filter((v) => v !== value);
        return { ...prev, medicalConditions: next };
      });
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Autofill function
  const fetchPatientSuggestions = async (name) => {
    if (name.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(`https://mails.ivhub.com/getchemicalpeel.php?name=${encodeURIComponent(name)}`);
      if (!res.ok) return;
      const data = await res.json();
      setSuggestions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
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
          fd.append(k, v ?? "");
        }
      });

      if (sigRef.current && !sigRef.current.isEmpty()) {
        const blob = await (await fetch(sigRef.current.toDataURL())).blob();
        fd.append("patientSignature", blob, "patient-signature.png");
      }

      const res = await fetch("https://mails.ivhub.com/chemicalconsentemail.php", {
        method: "POST",
        body: fd,
      });

      if (res.ok) {
        setStatus("Form submitted successfully!");
        setForm((f) => ({ ...initialState }));
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
      {/* Patient Information */}
      <div className="form-group" style={{ position: "relative" }}>
      <label>Full Name</label>
      <input
        name="fullName"
        value={form.fullName}
        onChange={(e) => {
          onChange(e);
          fetchPatientSuggestions(e.target.value);
        }}
        placeholder="Full Name"
        required
        autoComplete="off"
      />

        {/* Dropdown */}
        {suggestions.length > 0 && (
          <ul className="dropdown" style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid #ddd",
            background: "#fff",
            listStyle: "none",
            margin: 0,
            padding: 0,
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 9999
          }}>
            {suggestions.map((s) => (
              <li
                key={s.id}
                style={{ padding: "8px", cursor: "pointer" }}
                onClick={() => {
                  setForm((prev) => ({
                    ...prev,
                    patientName: s.patientName,
                    emiratesId: s.emiratesId,
                    gender: s.gender,
                    fullName: s.fullName,
                    email: s.email,
                    dob: s.dob,
                    consentDate: s.consentDate,
                    contact: s.contact,
                    practitionerName: s.practitionerName,
                  }));
                  setSuggestions([]);
                  // Load signature if exists
                  if (s.sign && sigRef.current) {
                    const img = new Image();
                    img.src = `data:image/png;base64,${s.sign}`;
                    img.onload = () => {
                      sigRef.current.clear();
                      const ctx = sigRef.current.getCanvas().getContext("2d");
                      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
                    };
                  }
                }}
              >
                {s.fullName} ({s.contact})
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="form-group">
        <label>Emirates ID / Passport</label>
        <input name="emiratesId" value={form.emiratesId} onChange={onChange} required />
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
        <input name="contact" value={form.contact} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="email" value={form.email} onChange={onChange} required />
      </div>

      {/* Fitzpatrick Skin Type */}
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

      {/* Medical History */}
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

      {/* Risks / Procedure summary (kept succinct – you can expand if needed) */}
      <h2>Procedure, Benefits, Risks & Guidelines</h2>
      <p>
        This chemical peel is a medical-grade exfoliation performed by a DHA-licensed professional.
        You agree to all pre/post-treatment instructions and acknowledge potential risks.
      </p>
      <div className="form-group">
        <label><input type="checkbox" name="understanding1" required /> I understand that results vary by individual and skin condition.</label>
        <label><input type="checkbox" name="understanding2" required /> I agree to follow all post-care instructions provided.</label>
      </div>

      {/* Photography Consent */}
      <h2>Photography Consent</h2>
      <div className="form-group">
        <label style={{ display: "block", marginBottom: 6 }}>
          <input
            type="radio"
            name="photographyConsent"
            value="I consent to photography for clinical documentation only"
            checked={form.photographyConsent === "I consent to photography for clinical documentation only"}
            onChange={onChange}
            required
          />{" "}
          I consent to photography for clinical documentation only. If I decline consent for clinical documentation photography, the clinic will not be able to provide any touch-up treatments, revisions, or follow-up corrective procedures, as photographic evidence is mandatory for clinical justification and medico-legal purposes.
        </label>
        <label style={{ display: "block", marginBottom: 6 }}>
          <input
            type="radio"
            name="photographyConsent"
            value="I consent to marketing with prior approval"
            checked={form.photographyConsent === "I consent to marketing with prior approval"}
            onChange={onChange}
            required
          />{" "}
          I consent to marketing with prior approval
        </label>
        <label style={{ display: "block", marginBottom: 6 }}>
          <input
            type="radio"
            name="photographyConsent"
            value="I do not consent to photography"
            checked={form.photographyConsent === "I do not consent to photography"}
            onChange={onChange}
            required
          />{" "}
          I do not consent to photography
        </label>
      </div>

      {/* Consent & Signatures */}
      <h2>Consent & Signatures</h2>

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
      <p>All patient data will be stored and managed in accordance with UAE Federal Law No. 2 of 2019 and DHA privacy regulations.</p>
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
        <button type="submit" className="btn">Submit</button>
      </div>
    </form>
  );
}
