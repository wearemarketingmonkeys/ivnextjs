"use client";

import React, { useMemo, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const medicalHistoryOptions = [
  "Pregnancy or nursing",
  "Under 18 years of age (unless there is parents’ consent)",
  "Pacemaker or internal defibrillator or any electronic implant such as glucose monitor",
  "Permanent implant in the treated area such as metal plates and screws, silicone implants or an injected chemical substance",
  "Current or history of cancer, especially skin cancer, or pre-malignant moles",
  "Impaired immune system due to immunosuppressive diseases such as AIDS and HIV, or use of immunosuppressive medications",
  "Severe concurrent conditions such as cancer, cardiac disorders, epilepsy, uncontrolled hypertension, and liver or kidney diseases",
  "A history of diseases stimulated by heat, such as recurrent Herpes Simplex in the treatment area (prophylactic treatment may be given)",
  "Any active condition in the treatment area, such as sores, psoriasis, eczema and rash as well as excessively/freshly tanned skin",
  "History of skin disorders such as keloid scarring, abnormal wound healing, as well as very dry, cracked, ulcerated, infected and fragile skin",
  "Tattoos, permanent make-up, pigmented lesions (to be kept)",
  "Any medical condition that might impair skin healing",
  "Poorly controlled endocrine disorders, such as diabetes or thyroid dysfunction",
  "Any surgical, invasive, ablative procedure in the treatment area in the last 3 months or before complete healing",
  "Use of Isotretinoin (Accutane®) within 6 months prior to treatment",
];

const initialState = {
  serviceId: "lumecca",

  // Top section
  patientName: "",
  emiratesId: "",
  dob: "",
  gender: "",
  mobileNumber: "",
  email: "",
  emergencyContact: "",

  // Pre-treatment questions (details boxes)
  recentIllnessDetails: "",
  hospitalizationSurgeryDetails: "",
  medicationIntoleranceDetails: "",
  aestheticProceduresDetails: "",

  // Medical history checklist
  medicalHistory: [],

  // Bottom acknowledgements (checkboxes)
  ackDiscussedAndInformed: false,
  ackQuestionsAnswered: false,
  ackPhotoConsent: false,

  // Provider
  practitionerName: "",

  // Consent date
  consentDate: "",
};

export default function ConsentLumecca() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const sigRef = useRef(null);

  const genderOptions = useMemo(() => ["Male", "Female", "Other"], []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // For boolean checkboxes
      if (name.startsWith("ack")) {
        setForm((prev) => ({ ...prev, [name]: checked }));
        return;
      }

      // For medicalHistory[] items
      if (name === "medicalHistory") {
        setForm((prev) => {
          const next = new Set(prev.medicalHistory);
          if (checked) next.add(value);
          else next.delete(value);
          return { ...prev, medicalHistory: Array.from(next) };
        });
        return;
      }
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const clearSignature = () => sigRef.current?.clear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const fd = new FormData();

      // append scalar fields
      Object.entries(form).forEach(([k, v]) => {
        if (k === "medicalHistory") return;
        fd.append(k, typeof v === "boolean" ? (v ? "Yes" : "No") : v ?? "");
      });

      // append medical history list
      form.medicalHistory.forEach((item) => fd.append("medicalHistory[]", item));

      // signature
      if (sigRef.current && !sigRef.current.isEmpty()) {
        const dataUrl = sigRef.current.toDataURL("image/png");
        const blob = await (await fetch(dataUrl)).blob();
        fd.append("patientSignature", blob, "patient-signature.png");
      }

      // Change endpoint name if needed
      const res = await fetch("https://mails.ivhub.com/lumeccaconsentmail.php", {
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
      <h2>LUMECCA | BODY FX / MINI FX / EVOKE Treatment Consent Form</h2>

      {/* Top patient/visit fields */}
      <div className="form-group">
        <label>Patient Name (as per ID)</label>
        <input
          name="patientName"
          value={form.patientName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Emirates ID / Passport No.</label>
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
        <label>Mobile Number</label>
        <input
          name="mobileNumber"
          value={form.mobileNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Emergency Contact Number</label>
        <input
          name="emergencyContact"
          value={form.emergencyContact}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
        />
      </div>

      <hr />

      {/* Details boxes */}
      <h3>Pre-Treatment Details</h3>

      <div className="form-group">
        <label>Existing or recent illness — Details</label>
        <textarea
          name="recentIllnessDetails"
          value={form.recentIllnessDetails}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <div className="form-group">
        <label>Hospitalization / surgery — Details</label>
        <textarea
          name="hospitalizationSurgeryDetails"
          value={form.hospitalizationSurgeryDetails}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <div className="form-group">
        <label>Medication intolerance — Details</label>
        <textarea
          name="medicationIntoleranceDetails"
          value={form.medicationIntoleranceDetails}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <div className="form-group">
        <label>Aesthetic procedures in the treatment area — Details</label>
        <textarea
          name="aestheticProceduresDetails"
          value={form.aestheticProceduresDetails}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <hr />

      {/* Medical History checklist */}
      <h3>Medical History</h3>
      <p>Please inform doctor/technician prior to treatment if you have any of the following:</p>

      <div className="form-group">
        {medicalHistoryOptions.map((item) => (
          <label key={item} style={{ display: "block", marginBottom: 8 }}>
            <input
              type="checkbox"
              name="medicalHistory"
              value={item}
              checked={form.medicalHistory.includes(item)}
              onChange={handleChange}
            />{" "}
            {item}
          </label>
        ))}
      </div>

      <hr />

      {/* Acknowledgements (from bottom of form) */}
      <h3>Acknowledgements</h3>

      <label style={{ display: "block", marginBottom: 10 }}>
        <input
          type="checkbox"
          name="ackDiscussedAndInformed"
          checked={form.ackDiscussedAndInformed}
          onChange={handleChange}
          required
        />{" "}
        1. I have had sufficient opportunity to discuss my condition and treatment. I believe I have adequate
        knowledge upon which to base an informed consent.
      </label>

      <label style={{ display: "block", marginBottom: 10 }}>
        <input
          type="checkbox"
          name="ackQuestionsAnswered"
          checked={form.ackQuestionsAnswered}
          onChange={handleChange}
          required
        />{" "}
        2. Any questions I may have asked have been answered to my satisfaction.
      </label>

      <label style={{ display: "block", marginBottom: 10 }}>
        <input
          type="checkbox"
          name="ackPhotoConsent"
          checked={form.ackPhotoConsent}
          onChange={handleChange}
          required
        />{" "}
        3. I authorize before, during and after the procedure(s) the taking of photographs to be part of my patient
        profile that may be used for scientific or marketing purposes without disclosing my identity, not exposing my
        face.
      </label>

      <hr />

      {/* Practitioner */}
      <div className="form-group">
        <label>Practitioner Name (Provider Name)</label>
        <input
          name="practitionerName"
          value={form.practitionerName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Consent Date */}
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          name="consentDate"
          value={form.consentDate}
          onChange={handleChange}
          required
        />
      </div>

      {/* Signature */}
      <div className="form-group">
        <label>Patient Signature</label>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            overflow: "hidden",
            maxWidth: 520,
          }}
        >
          <SignatureCanvas
            ref={sigRef}
            canvasProps={{ width: 520, height: 200, className: "signature-canvas" }}
          />
        </div>

        <button
          type="button"
          className="btn btn-stroke"
          onClick={clearSignature}
          style={{ marginTop: 8 }}
        >
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
