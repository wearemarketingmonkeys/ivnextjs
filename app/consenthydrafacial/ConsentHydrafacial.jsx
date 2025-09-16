// app/consenthydrafacial/ConsentHydrafacial.jsx
"use client";

import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const initialState = {
  serviceId: "hydrafacial",

  fullName: "",
  emiratesId: "",
  dob: "",
  gender: "",
  contact: "",
  email: "",

  medicalConditions: [],
  allergiesDescription: "",

  photographyConsent: "",

  // optional acknowledgements (posted only when checked)
  understanding1: "",
  understanding2: "",

  patientName: "",
  consentDate: "",
  practitionerName: "",
};

const medicalOptions = [
  "Pregnancy or lactation",
  "Active acne, eczema, or psoriasis",
  "Skin infection or cold sores",
  "Recent chemical peel, laser, or facial surgery",
  "Use of isotretinoin (Accutane) in the past 6–12 months",
  "Autoimmune diseases (e.g., lupus, vitiligo)",
  "Allergies (medication, skincare ingredients, latex, etc.)",
];

export default function ConsentHydrafacial() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const sigRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // array checkbox group
    if (type === "checkbox" && name === "medicalConditions") {
      setForm((prev) => {
        const next = checked
          ? [...prev.medicalConditions, value]
          : prev.medicalConditions.filter((v) => v !== value);
        return { ...prev, medicalConditions: next };
      });
      return;
    }

    // individual checkboxes (acknowledgements)
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked ? value || "yes" : "" }));
      return;
    }

    // radios / text / date / email
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Autofill function
const fetchPatientData = async (name) => {
  if (name.length < 3) return; // wait until at least 3 chars

    try {
      const res = await fetch(`https://mails.ivhub.com/gethydrafacial.php?name=${encodeURIComponent(name)}`);
      if (!res.ok) return;
      const data = await res.json();

      // Update state with fetched values if available
      setForm((prev) => ({
        ...prev,
        emiratesId: data.emiratesId || prev.emiratesId,
        dob: data.dob || prev.dob,
        gender: data.gender || prev.gender,
        contact: data.contact || prev.contact,
        email: data.email || prev.email,
        fullName: data.fullName || prev.fullName,
        patientName: data.fullName || prev.patientName,
      }));

      // If API sends back a base64 signature image
      if (data.sign && sigRef.current) {
        const img = new Image();
        img.src = `data:image/png;base64,${data.sign}`;
        img.onload = () => {
          sigRef.current.clear();
          const ctx = sigRef.current.getCanvas().getContext("2d");
          ctx.drawImage(img, 0, 0);
        };
      }
    } catch (err) {
      console.error("Autofill error:", err);
    }
  };


  const clearSignature = () => sigRef.current?.clear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const fd = new FormData();

      // append fields; for acknowledgements, only send when checked (non-empty)
      Object.entries(form).forEach(([k, v]) => {
        if (Array.isArray(v)) {
          v.forEach((item) => fd.append(`${k}[]`, item));
        } else {
          if (k.startsWith("understanding") && !v) return;
          fd.append(k, v ?? "");
        }
      });

      // attach signature if present
      if (sigRef.current && !sigRef.current.isEmpty()) {
        const dataUrl = sigRef.current.toDataURL("image/png");
        const blob = await (await fetch(dataUrl)).blob();
        fd.append("patientSignature", blob, "patient-signature.png");
      }

      const res = await fetch("https://mails.ivhub.com/hydraconsentemail.php", {
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
        <form className="form" onSubmit={handleSubmit}>
                  {/* Patient info */}
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={(e) => {
                        handleChange(e);
                        fetchPatientData(e.target.value);
                      }}
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Emirates ID / Passport</label>
                    <input
                      name="emiratesId"
                      value={form.emiratesId}
                      onChange={handleChange}
                      placeholder="Emirates ID / Passport"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Gender</label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={form.gender === "Male"}
                        onChange={handleChange}
                        required
                      />{" "}
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={form.gender === "Female"}
                        onChange={handleChange}
                        required
                      />{" "}
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={form.gender === "Other"}
                        onChange={handleChange}
                        required
                      />{" "}
                      Other
                    </label>
                  </div>

                  <div className="form-group">
                    <label>Contact Number</label>
                    <input
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="Contact Number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  {/* Medical */}
                  <h2>Medical Disclosure</h2>
                  {medicalOptions.map((opt) => (
                    <div className="form-group" key={opt}>
                      <label>
                        <input
                          type="checkbox"
                          name="medicalConditions"
                          value={opt}
                          checked={form.medicalConditions.includes(opt)}
                          onChange={handleChange}
                        />{" "}
                        {opt}
                      </label>
                    </div>
                  ))}

                  <div className="form-group">
                    <label>Specify any known allergies or medical conditions:</label>
                    <textarea
                      name="allergiesDescription"
                      value={form.allergiesDescription}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>

                  {/* Risks */}
                  <h2>Procedure & Risks</h2>
                  <p>
                    HydraFacial is a non-invasive treatment with benefits including exfoliation, deep
                    pore cleansing, serum infusion, and LED light therapy. Risks include redness,
                    dryness, allergic reactions, herpes flare-ups, and rare pigmentation changes.
                  </p>

                  <div className="form-group">
                    <label>
                      <input
                        type="checkbox"
                        name="understanding1"
                        value="I understand that results may vary and no outcome is guaranteed."
                        checked={!!form.understanding1}
                        onChange={handleChange}
                        required
                      />{" "}
                      I understand that results may vary and no outcome is guaranteed.
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="understanding2"
                        value="I have been advised about sessions and interactions with skincare, medication, or lifestyle."
                        checked={!!form.understanding2}
                        onChange={handleChange}
                        required
                      />{" "}
                      I have been advised about sessions and interactions with skincare, medication, or lifestyle.
                    </label>
                  </div>

                  {/* Photography */}
                  <h2>Consent for Photography</h2>
                  <div className="form-group">
                    {[
                      "I CONSENT to photography for clinical documentation only. If I decline consent for clinical documentation photography, the clinic will not be able to provide any touch-up treatments, revisions, or follow-up corrective procedures, as photographic evidence is mandatory for clinical justification and medico-legal purposes.",
                      "I CONSENT to photography for internal marketing.",
                      "I DO NOT consent to any photography.",
                    ].map((t, i) => (
                      <label key={i} style={{ display: "block", marginBottom: 6 }}>
                        <input
                          type="radio"
                          name="photographyConsent"
                          value={t}
                          checked={form.photographyConsent === t}
                          onChange={handleChange}
                          required
                        />{" "}
                        {t}
                      </label>
                    ))}
                  </div>

                  {/* Declaration */}
                  <h2>Declaration & Signatures</h2>
                  <div className="form-group">
                    <label>Patient Name</label>
                    <input
                      name="patientName"
                      value={form.patientName}
                      onChange={handleChange}
                      placeholder="Patient Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Date of Consent</label>
                    <input
                      type="date"
                      name="consentDate"
                      value={form.consentDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Practitioner Name</label>
                    <input
                      name="practitionerName"
                      value={form.practitionerName}
                      onChange={handleChange}
                      placeholder="Practitioner Name"
                      required
                    />
                  </div>

                  {/* Privacy */}
                  <h2>Patient Data Confidentiality</h2>
                  <p>
                    All patient information will be handled in compliance with UAE Federal Law No. 2 of
                    2019 on Health IT and DHA privacy regulations.
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
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </div>
                </form>
  );
}
