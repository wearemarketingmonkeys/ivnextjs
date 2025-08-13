import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

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
  photographyConsent: "",
  patientName: "",
  consentDate: "",
  practitionerName: ""
};

const medicalOptions = [
  "Pregnancy or breastfeeding",
  "Use of isotretinoin (Accutane) within the past 6–12 months",
  "History of keloid or hypertrophic scarring",
  "Active acne, eczema, rosacea, or dermatitis",
  "Herpes simplex (cold sores)",
  "Recent facial surgery, microneedling, or laser treatment",
  "Autoimmune or skin sensitivity disorders",
  "Use of retinoids, AHAs, or topical steroids in the past 7 days",
  "Known allergies to glycolic acid, salicylic acid, TCA, lactic acid, etc."
];

const ConsentFormChemicalPeel = () => {
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

      const res = await fetch("https://mails.ivhub.com/chemicalconsentemail.php", {
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
                <h1>Chemical Peel Consent Form</h1>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input name="fullName" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Emirates ID / Passport</label>
                    <input name="emiratesId" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
                    <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
                    <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
                  </div>
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input name="contact" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Skin Type (Fitzpatrick)</label>
                    {["I", "II", "III", "IV", "V", "VI"].map((type) => (
                      <label key={type}>
                        <input type="radio" name="skinType" value={type} onChange={handleChange} /> {type}
                      </label>
                    ))}
                  </div>

                  <h2>Medical History</h2>
                  {medicalOptions.map((item, index) => (
                    <div className="form-group" key={index}>
                      <label><input type="checkbox" name="medicalConditions" value={item} onChange={handleChange} /> {item}</label>
                    </div>
                  ))}
                  <div className="form-group">
                    <label>If you checked any, please elaborate:</label>
                    <textarea name="allergyExplanation" onChange={handleChange} />
                  </div>

                  <h2>Procedure, Benefits, Risks & Guidelines</h2>
                  <p>This chemical peel is a medical-grade exfoliation performed by a DHA-licensed professional. You agree to all pre/post-treatment instructions and acknowledge potential risks.</p>

                  <div className="form-group">
                    <label><input type="checkbox" required /> I understand that results vary by individual and skin condition.</label>
                    <label><input type="checkbox" required /> I agree to follow all post-care instructions provided.</label>
                  </div>

                  <h2>Photography Consent</h2>
                  <div className="form-group">
                    <label><input type="radio" name="photographyConsent" value="I consent to photography for clinical documentation only" onChange={handleChange} /> I consent to photography for clinical documentation only</label>
                    <label><input type="radio" name="photographyConsent" value="I consent to marketing with prior approval" onChange={handleChange} /> I consent to marketing with prior approval</label>
                    <label><input type="radio" name="photographyConsent" value="I do not consent to photography" onChange={handleChange} /> I do not consent to photography</label>
                  </div>

                  <h2>Consent & Signatures</h2>
                  <div className="form-group">
                    <label>Patient Name</label>
                    <input name="patientName" onChange={handleChange} required />
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
                    <input name="practitionerName" onChange={handleChange} required />
                  </div>

                  <h2>Patient Privacy & Record Handling</h2>
                  <p>All patient data will be stored and managed in accordance with UAE Federal Law No. 2 of 2019 and DHA privacy regulations.</p>

                  {status && <p className="form-status">{status}</p>}

                  <div className="btn-wrap">
                    <button type="submit" className="btn">Submit Chemical Peel Consent</button>
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

export default ConsentFormChemicalPeel;
