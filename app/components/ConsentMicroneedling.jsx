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
  patientName: "",
  consentDate: "",
  typeof: "",
  practitionerName: ""
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
  "Keloid or hypertrophic scarring tendency"
];

const ConsentMicroneedling = () => {
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

      const res = await fetch("https://mails.ivhub.com/microconsentmail.php", {
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
                <h1>Microneedling Consent Form</h1>
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

                  <h2>Medical History</h2>
                  {medicalOptions.map((item, index) => (
                    <div className="form-group" key={index}>
                      <label><input type="checkbox" name="medicalConditions" value={item} onChange={handleChange} /> {item}</label>
                    </div>
                  ))}
                  <div className="form-group">
                    <label>If any apply, please elaborate:</label>
                    <textarea name="allergyExplanation" onChange={handleChange} />
                  </div>

                  <h2>Acknowledgment & Consent</h2>
                  <div className="form-group">
                    <label>Type of Microneedling</label>
                    <input name="typeof" onChange={handleChange} required />
                  </div>
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

                  <h2>Data Protection Notice</h2>
                  <p>All personal data and images will be handled in accordance with UAE Federal Law No. 2 of 2019 and DHA health data regulations.</p>

                  {status && <p className="form-status">{status}</p>}

                  <div className="btn-wrap">
                    <button type="submit" className="btn">Submit Microneedling Consent</button>
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

export default ConsentMicroneedling;