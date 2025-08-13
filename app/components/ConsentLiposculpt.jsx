import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const initialState = {
  fullName: "",
  dob: "",
  contact: "",
  email: "",
  emergencyContact: "",
  procedureDate: "",
  practitioner: "",
  understanding1: false,
  understanding2: false,
  understanding3: false,
  risks: [],
  medicalHistory: {},
  historyExplanation: "",
  medications: "",
  allergies: "",
  aftercare: [],
  altConsent: false,
  allDisclosed: false,
  electiveConfirm: false,
  allowPhoto: false,
  allowMarketing: "",
  dataConsent: false,
  disclaimerAgreement: false,
  declaration: [],
  patientSignature: null,
  consentDate: ""
};

const riskOptions = [
  "Swelling, bruising, pain",
  "Temporary lumpiness or tenderness",
  "Risk of allergic reaction",
  "Skin discoloration",
  "Nerve injury (rare)",
  "Skin necrosis or scarring (rare)",
  "No guarantee of symmetrical or complete fat reduction",
  "I understand that serious adverse reactions may require medical or surgical intervention"
];

const procedureUnderstandingOptions = [
  {
    key: "understanding1",
    label: "I understand that Liposculpt is a non-surgical injectable procedure that reduces localized fat using a fat-dissolving solution."
  },
  {
    key: "understanding2",
    label: "I understand that multiple sessions (2–6) may be required for optimal results."
  },
  {
    key: "understanding3",
    label: "I am aware that no specific outcomes are guaranteed, and results vary per person."
  }
];


const medicalConditions = [
  "Pregnancy or breastfeeding",
  "Active skin infection",
  "Soy or lecithin allergy",
  "Autoimmune condition",
  "Severe liver/kidney/heart disease",
  "Uncontrolled diabetes",
  "Current use of blood thinners",
  "Cosmetic treatments in area in last 4 weeks",
  "History of keloids or poor healing",
  "Cancer or recent chemotherapy"
];

const declarationChecklist = [
  "I have read this form in full",
  "All my questions have been answered",
  "I consent to Liposculpt Fat Dissolving Injections",
  "I understand the risks and alternatives",
  "I give informed, voluntary consent to proceed"
];

export default function LiposculptConsentForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const signatureRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (["risks", "declaration", "aftercare"].includes(name)) {
        setForm((prev) => ({
          ...prev,
          [name]: checked ? [...prev[name], value] : prev[name].filter((v) => v !== value)
        }));
      } else {
        setForm((prev) => ({ ...prev, [name]: checked }));
      }
    } else if (name.startsWith("condition-")) {
      const key = name.split("-")[1];
      setForm((prev) => ({
        ...prev,
        medicalHistory: { ...prev.medicalHistory, [key]: value }
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submit Initiated");  // 👈 add this
    setSubmitting(true);
    setStatus("Submitting...");

  try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (typeof value === "object" && !Array.isArray(value)) {
          Object.entries(value).forEach(([k, v]) => formData.append(`${key}[${k}]`, v));
        } else if (Array.isArray(value)) {
          value.forEach((v) => formData.append(`${key}[]`, v));
        } else {
          formData.append(key, value);
        }
      });
      if (!signatureRef.current.isEmpty()) {
        const sigBlob = await (await fetch(signatureRef.current.toDataURL())).blob();
        formData.append("patientSignature", sigBlob, "signature.png");
      }
      const res = await fetch("https://ivmails.onrender.com/liposculptconsentemail.php", {
        method: "POST",
        body: formData,
      });
      setStatus(res.ok ? "Form submitted successfully!" : "Submission failed. Try again.");
    } catch (error) {
      setStatus("Error occurred. Try again.");
    }
    setSubmitting(false);
  };

  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-form">
          <div className="form-wrapper">
            <div className="form-wrap">
              <div className="right">
                <h1>Liposculpt Consent Form</h1>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input name="fullName" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" onChange={handleChange} required />
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
                    <label>Emergency Contact</label>
                    <input name="emergencyContact" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Date of Procedure</label>
                    <input type="date" name="procedureDate" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Practioner Name</label>
                    <input name="practitioner" onChange={handleChange} required />
                  </div>
                  
                  <h2>PROCEDURE UNDERSTANDING</h2>
                  {procedureUnderstandingOptions.map(({ key, label }) => (
                    <div className="form-group" key={key}>
                      <label>
                        <input type="checkbox" name={key} value={label} onChange={handleChange} required /> {label}
                      </label>
                    </div>
                  ))}

                  <h2>Risks & Side Effects</h2>
                  {riskOptions.map((item, i) => (
                    <div className="form-group" key={i}>
                      <label>
                        <input type="checkbox" name="risks" value={item} onChange={handleChange} /> {item}
                      </label>
                    </div>
                  ))}

                  <h2>Medical History</h2>
                  {medicalConditions.map((c, i) => (
                    <div className="form-group" key={i}>
                      <label>{c}:</label>
                      <label><input type="radio" name={`condition-${c}`} value="Yes" onChange={handleChange} /> Yes</label>
                      <label><input type="radio" name={`condition-${c}`} value="No" onChange={handleChange} /> No</label>
                    </div>
                  ))}
                  
                  <div className="form-group">
                    <label htmlFor="historyExplanation">Explain if any conditions marked Yes:</label>
                    <textarea
                      name="historyExplanation"
                      placeholder="Explain if any conditions marked Yes"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="medications">Current medications & supplements:</label>
                    <textarea
                      name="medications"
                      placeholder="Current medications & supplements"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="allergies">Allergies:</label>
                    <textarea
                      name="allergies"
                      placeholder="Allergies"
                      onChange={handleChange}
                    />
                  </div>

                  <h2>Aftercare & Alternatives</h2>
                  {["No alcohol, saunas, pools, or workouts for 48 hours", "Use prescribed creams or medication if given", "Monitor for signs of infection", "Contact the clinic immediately if adverse symptoms occur"].map((a, i) => (
                    <div className="form-group" key={i}>
                      <label>
                        <input type="checkbox" name="aftercare" value={a} onChange={handleChange} /> {a}
                      </label>
                    </div>
                  ))}

                  <h2>Pregnancy & Consent Checkpoints</h2>
                  <label><input type="checkbox" name="altConsent" onChange={handleChange} /> I confirm I am NOT pregnant or breastfeeding</label>
                  <br/>
                  <label><input type="checkbox" name="allDisclosed" onChange={handleChange} /> I have disclosed all relevant medical history</label>
                  <br/>
                  <label><input type="checkbox" name="electiveConfirm" onChange={handleChange} /> I understand the procedure is elective and cosmetic</label>
                  <br/>
                  <label><input type="checkbox" name="allowPhoto" onChange={handleChange} /> I consent to before/after medical photographs</label>
                  <br/>
                  <br/>
                  <label>Marketing photo consent:
                    <select name="allowMarketing" className="form-control" onChange={handleChange}>
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </label>
                  <br/>
                  <br/>
                  <h2>Disclaimer of Liability</h2>
                  <p>I understand and agree that IV Wellness Lounge Clinic LLC, its medical practitioners, and associated staff shall not be held financially liable for:</p>
                  <ul>
                    <li>Any unsatisfactory or suboptimal result that may occur despite appropriate technique and materials used</li>
                    <li>Any individual allergic or hypersensitive reaction, delayed response, or side effect that could not have been reasonably predicted or tested prior to treatment</li>
                    <li>Any incompatibility or unsuitability of my skin or physiology for this treatment, including where the treatment fails to produce the expected or desired effect</li>
                    <li>The need for further corrective procedures or medical management, which may incur additional cost</li>
                  </ul>
                  <p>I acknowledge that I have been given the opportunity to ask questions, understand the limitations of the procedure, and that results vary from person to person.</p>
                  <label><input type="checkbox" name="disclaimerAgreement" onChange={handleChange} /> I have read and understood this disclaimer, and I agree to its terms without reservation.</label>
                  <br/>
                  <br/>
                  <h2>Data & Emergency Protocol</h2>
                  <label><input type="checkbox" name="dataConsent" onChange={handleChange} /> I understand my data is protected under UAE/DHA regulations</label>
                  <br/>
                  <br/>
                  <h2>Final Declaration</h2>
                  {declarationChecklist.map((item, i) => (
                    <div className="form-group" key={i}>
                      <label>
                        <input type="checkbox" name="declaration" value={item} onChange={handleChange} /> {item}
                      </label>
                    </div>
                  ))}

                  <h2>Signature</h2>
                  <div className="form-group">
                    <SignatureCanvas ref={signatureRef} canvasProps={{ width: 400, height: 150, className: "signature-canvas" }} />
                  </div>
                  <div className="form-group">
                    <label>Date of Consent</label>
                    <input type="date" name="consentDate" onChange={handleChange} required />
                  </div>

                  <div className="btn-wrap">
                    <button type="submit" disabled={submitting} className="btn">
                      {submitting ? "Submitting..." : "Submit Form"}
                    </button>
                  </div>
                  {status && <p className="form-status">{status}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}