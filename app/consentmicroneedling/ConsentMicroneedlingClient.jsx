// app/consentmicroneedling/ConsentMicroneedlingClient.jsx
"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

// initial form state
const initialState = {
  fullName: "",
  emiratesId: "",
  dob: "",
  gender: "",
  contact: "",
  email: "",
  skinType: "",
  medicalConditions: [],
  allergyExplanation: "",
  typeof: "",
  patientName: "",
  consentDate: "",
  practitionerName: "",
};

const medicalOptions = [
  "Pregnancy or breastfeeding",
  "Use of blood thinners or anticoagulants",
  "Diabetes, epilepsy, or cardiovascular condition",
  "Active acne, eczema, or rosacea",
  "Recent fillers, Wrinkle Relaxer, or facial surgeries",
  "Autoimmune disorders or skin sensitivity",
  "Herpes simplex (cold sores)",
  "Use of isotretinoin (Accutane) within past 6–12 months",
  "Keloid or hypertrophic scarring tendency",
];

export default function ConsentMicroneedlingClient() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const sigRef = useRef(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    // checkbox group (medicalConditions)
    if (type === "checkbox" && name === "medicalConditions") {
      setForm((prev) => {
        const next = checked
          ? [...prev.medicalConditions, value]
          : prev.medicalConditions.filter((v) => v !== value);
        return { ...prev, medicalConditions: next };
      });
      return;
    }

    // standard fields
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const clearSignature = () => sigRef.current?.clear();

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const fd = new FormData();

      // append all fields
      Object.entries(form).forEach(([k, v]) => {
        if (Array.isArray(v)) v.forEach((item) => fd.append(`${k}[]`, item));
        else fd.append(k, v ?? "");
      });

      // signature
      if (sigRef.current && !sigRef.current.isEmpty()) {
        const blob = await (await fetch(sigRef.current.toDataURL())).blob();
        fd.append("patientSignature", blob, "patient-signature.png");
      }

      const res = await fetch("https://mails.ivhub.com/microconsentmail.php", {
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
      {/* Patient details */}
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

      {/* Medical history */}
      <h2>Medical History</h2>
      {medicalOptions.map((item) => (
        <div className="form-group" key={item}>
          <label>
            <input
              type="checkbox"
              name="medicalConditions"
              value={item}
              checked={form.medicalConditions.includes(item)}
              onChange={onChange}
            />{" "}
            {item}
          </label>
        </div>
      ))}

      <div className="form-group">
        <label>If any apply, please elaborate</label>
        <textarea name="allergyExplanation" value={form.allergyExplanation} onChange={onChange} rows={3} />
      </div>

      {/* Acknowledgment & consent */}
      <h2>Acknowledgment & Consent</h2>
      <div className="form-group">
        <label>Type of Microneedling</label>
        <input name="typeof" value={form.typeof} onChange={onChange} placeholder="e.g., Manual, RF, with PRP" required />
      </div>

      {/* Signatures & names */}
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

      {/* Data notice */}
      <h2>Data Protection Notice</h2>
      <p>
        All personal data and images will be handled in accordance with UAE Federal Law No. 2 of 2019
        and DHA health data regulations.
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
      {/* status + submit */}
      {status && <p className="form-status">{status}</p>}
      <div className="btn-wrap">
        <button type="submit" className="btn">Submit Microneedling Consent</button>
      </div>
    </form>
  );
}
