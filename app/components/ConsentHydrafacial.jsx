import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const initialState = {
  fullName: "",
  emiratesId: "",
  dob: "",
  gender: "",
  contact: "",
  email: "",
  medicalConditions: [],
  allergiesDescription: "",
  photographyConsent: "",
  patientName: "",
  consentDate: "",
  practitionerName: ""
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

const ConsentHydrafacial = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const patientSignatureRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "medicalConditions") {
      setForm((prev) => {
        const newList = checked
          ? [...prev.medicalConditions, value]
          : prev.medicalConditions.filter((item) => item !== value);
        return { ...prev, [name]: newList };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const clearSignature = () => {
    patientSignatureRef.current.clear();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(`${key}[]`, val));
        } else {
          formData.append(key, value);
        }
      });

      if (!patientSignatureRef.current.isEmpty()) {
        const sigBlob = await (await fetch(patientSignatureRef.current.toDataURL())).blob();
        formData.append("patientSignature", sigBlob, "patient-signature.png");
      }

      const res = await fetch("https://mails.ivhub.com/hydraconsentemail.php", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("Form submitted successfully!");
        setForm(initialState);
        patientSignatureRef.current.clear();
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      setStatus("Error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-form">
          <div className="form-wrapper">
            <div className="form-wrap">
              <div className="right">
                <h1>HydraFacial Consent Form</h1>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Emirates ID / Passport</label>
                    <input name="emiratesId" placeholder="Emirates ID / Passport" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input name="dob" type="date" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
                    <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
                    <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
                  </div>
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input name="contact" placeholder="Contact Number" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
                  </div>

                  <h2>Medical Disclosure</h2>
                  {medicalOptions.map((item, index) => (
                    <div className="form-group" key={index}>
                      <label>
                        <input type="checkbox" name="medicalConditions" value={item} onChange={handleChange} /> {item}
                      </label>
                    </div>
                  ))}
                  <div className="form-group">
                    <label>Specify any known allergies or medical conditions:</label>
                    <textarea name="allergiesDescription" onChange={handleChange} />
                  </div>

                  <h2>Procedure & Risks</h2>
                  <p>HydraFacial is a non-invasive treatment with benefits including exfoliation, deep pore cleansing, serum infusion, and LED light therapy. Risks include redness, dryness, allergic reactions, herpes flare-ups, and rare pigmentation changes.</p>

                  <div className="form-group">
                    <label><input type="checkbox" required /> I understand that results may vary and no outcome is guaranteed.</label>
                    <label><input type="checkbox" required /> I have been advised about sessions and interactions with skincare, medication, or lifestyle.</label>
                  </div>

                  <h2>Consent for Photography</h2>
                  <div className="form-group">
                    <label><input type="radio" name="photographyConsent" value="I CONSENT to photography for clinical documentation only." onChange={handleChange} /> I CONSENT to photography for clinical documentation only.</label>
                    <label><input type="radio" name="photographyConsent" value="I CONSENT to photography for internal marketing." onChange={handleChange} /> I CONSENT to photography for internal marketing.</label>
                    <label><input type="radio" name="photographyConsent" value="I DO NOT consent to any photography." onChange={handleChange} /> I DO NOT consent to any photography.</label>
                  </div>

                  <h2>Declaration & Signatures</h2>
                  <div className="form-group">
                    <label>Patient Name</label>
                    <input name="patientName" placeholder="Patient Name" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Patient Signature</label>
                    <SignatureCanvas ref={patientSignatureRef} canvasProps={{ width: 400, height: 150, className: "signature-canvas" }} />
                    <button type="button" onClick={clearSignature} className="btn-clear-signature">
                      Clear Signature
                    </button>
                  </div>
                  <div className="form-group">
                    <label>Date of Consent</label>
                    <input type="date" name="consentDate" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Practitioner Name</label>
                    <input name="practitionerName" placeholder="Practitioner Name" onChange={handleChange} required />
                  </div>

                  <h2>Patient Data Confidentiality</h2>
                  <p>All patient information will be handled in compliance with UAE Federal Law No. 2 of 2019 on Health IT and DHA privacy regulations.</p>

                  {status && <p className="form-status">{status}</p>}

                  <div className="btn-wrap">
                    <button type="submit" className="btn">Submit HydraFacial Consent</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentHydrafacial;