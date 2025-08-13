import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const initialState = {
  fullName: "",
  emiratesId: "",
  dob: "",
  gender: "",
  contact: "",
  email: "",
  area: "",
  skinType: "",
  medicalConditions: [],
  allergyDetails: "",
  patientName: "",
  consentDate: "",
  practitionerName: ""
};

const medicalOptions = [
  "Pregnant or breastfeeding",
  "History of keloid or hypertrophic scarring",
  "Epilepsy or seizures",
  "Diabetes or thyroid condition",
  "Use of blood thinners or photosensitizing medications",
  "Active skin infection, eczema, psoriasis, or open wounds in treatment area",
  "Tanned, sunburned, or recently waxed/shaved area",
  "Use of isotretinoin (Accutane) in the past 6–12 months",
  "Tattoo or permanent makeup in the treatment zone",
  "Herpes simplex (cold sores) in the treatment area"
];

const ConsentLaser = () => {
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

      const res = await fetch("https://mails.ivhub.com/laserconsentemail.php", {
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
                <h1>Laser Hair Removal Consent Form</h1>
                <h2>Machine Name : Soprano Titanium</h2>
                <br/>
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
                    <label>Area</label>
                    <input name="area" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Skin Type (Fitzpatrick)</label>
                    {["I", "II", "III", "IV", "V", "VI"].map((type) => (
                      <label key={type}>
                        <input type="radio" name="skinType" value={type} onChange={handleChange} /> {type}
                      </label>
                    ))}
                  </div>

                  <h2>Medical History & Safety Screening</h2>
                  {medicalOptions.map((item, index) => (
                    <div className="form-group" key={index}>
                      <label><input type="checkbox" name="medicalConditions" value={item} onChange={handleChange} /> {item}</label>
                    </div>
                  ))}
                  <div className="form-group">
                    <label>Known allergies or sensitivities:</label>
                    <textarea name="allergyDetails" onChange={handleChange} />
                  </div>

                  <h2>Risks and Side Effects</h2>
                  <p>I understand that while the Soprano Titanium is designed for safety, risks may include redness, pigment changes, or rare side effects. Results are not guaranteed.</p>
                  <div className="form-group">
                    <label><input type="checkbox" required /> I understand that results are not guaranteed and vary per individual.</label>
                  </div>

                  <h2>Acknowledgment & Signatures</h2>
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
                  <p>All records and patient photos will be handled confidentially in accordance with DHA Clinical Guidelines and UAE Federal Law No. 2 of 2019.</p>

                  {status && <p className="form-status">{status}</p>}

                  <div className="btn-wrap">
                    <button type="submit" className="btn">Submit Laser Hair Removal Consent</button>
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

export default ConsentLaser;