"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const contraindications = [
  "Pregnancy or breastfeeding",
  "Active skin infection or open wounds",
  "Metal implants, pacemaker, or defibrillator",
  "Severe acne or keloid scarring",
  "Recent Botox/filler in treatment area (<2 wks)",
  "Bleeding disorders or on blood thinners",
  "Immune-compromising conditions",
];

const treatmentAreas = [
  "Full Face & Neck",
  "Lower Face / Jowl Area",
  "Neck Only",
  "Body Contouring (specify area)",
];

const benefits = [
  "Lifting and tightening of sagging skin",
  "Improved facial contours and jawline definition",
  "Reduction in fine lines and wrinkles",
  "Stimulation of natural collagen production",
  "Gradual improvement over 8–12 weeks after the session",
];

const sideEffects = [
  "Temporary redness, swelling, or tenderness",
  "Mild bruising or tingling sensation",
  "Numbness or skin sensitivity in treated areas (temporary)",
  "Rare risk of burns or nerve irritation",
  "Uneven or suboptimal results if skin laxity is severe",
];

const initialState = {
  serviceId: "hifu",
  fullName: "",
  dob: "",
  contact: "",
  emiratesId: "",
  email: "",
  procedureDate: "",
  emergencyContact: "",
  practitioner: "",
  treatmentAreas: [],
  understandings: [],
  benefits: [],
  sideEffects: [],
  medicalConditions: {},
  explanation: "",
  aftercare: [],
  results: [],
  photoConsent: "",
  marketingConsent: "",
  liabilityAgree: false,
  declarations: [],
  patientName: "",
  consentDate: "",
};

export default function ConsentHIFUClient() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const sigRef = useRef(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Array fields
    if (["treatmentAreas", "understandings", "benefits", "sideEffects", "aftercare", "results", "declarations"].includes(name)) {
      setForm((prev) => ({
        ...prev,
        [name]: checked ? [...prev[name], value] : prev[name].filter((v) => v !== value),
      }));
      return;
    }

    // Medical condition radio
    if (name.startsWith("condition-")) {
      const key = name.replace("condition-", "");
      setForm((prev) => ({
        ...prev,
        medicalConditions: { ...prev.medicalConditions, [key]: value },
      }));
      return;
    }

    // Regular field
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
        } else if (typeof v === "object") {
          Object.entries(v).forEach(([key, val]) =>
            fd.append(`${k}[${key}]`, val)
          );
        } else {
          fd.append(k, v ?? "");
        }
      });

      if (sigRef.current && !sigRef.current.isEmpty()) {
        const blob = await (await fetch(sigRef.current.toDataURL())).blob();
        fd.append("patientSignature", blob, "signature.png");
      }

      const res = await fetch("https://mails.ivhub.com/hifuconsentemail.php", {
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
      <div className="form-group">
        <label>Full Name</label>
        <input name="fullName" value={form.fullName} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input type="date" name="dob" value={form.dob} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>Mobile Number</label>
        <input name="contact" value={form.contact} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>ID Type / Number</label>
        <input name="emiratesId" value={form.emiratesId} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="email" value={form.email} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>Date of Procedure</label>
        <input type="date" name="procedureDate" value={form.procedureDate} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>Emergency Contact</label>
        <input name="emergencyContact" value={form.emergencyContact} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>Practitioner (if known)</label>
        <input name="practitioner" value={form.practitioner} onChange={onChange} />
      </div>

      <h2>Treatment Area(s)</h2>
      {treatmentAreas.map((area) => (
        <div className="form-group" key={area}>
          <label><input type="checkbox" name="treatmentAreas" value={area} onChange={onChange} /> {area}</label>
        </div>
      ))}

      <h2>Procedure Understanding</h2>
      {[
        "I understand that HIFU delivers focused ultrasound energy into the deeper layers of the skin to stimulate collagen production and tissue tightening.",
        "I understand that HIFU is a non-surgical, non-invasive treatment with gradual results over several weeks to months.",
        "I confirm this procedure will be performed by a DHA-licensed professional trained in HIFU technology.",
        "I understand this treatment is not a substitute for a surgical facelift or skin excision procedure.",
      ].map((txt, i) => (
        <div className="form-group" key={i}>
          <label><input type="checkbox" name="understandings" value={txt} onChange={onChange} /> {txt}</label>
        </div>
      ))}

      <h2>Expected Benefits</h2>
        <ul style={{ paddingLeft: "20px" }}>
        {benefits.map((txt, i) => (
            <li key={i}>{txt}</li>
        ))}
        </ul>
        <br/>
       <h2>Potential Side Effects</h2>
        <ul style={{ paddingLeft: "20px" }}>
        {sideEffects.map((txt, i) => (
            <li key={i}>{txt}</li>
        ))}
        </ul>


      <h2>Contraindications</h2>
      {contraindications.map((c) => (
        <div className="form-group" key={c}>
          <label>{c}:</label>
          <label><input type="radio" name={`condition-${c}`} value="Yes" onChange={onChange} required /> Yes</label>
          <label><input type="radio" name={`condition-${c}`} value="No" onChange={onChange} required /> No</label>
        </div>
      ))}
      <div className="form-group">
        <label>If “Yes” to any, please explain</label>
        <textarea name="explanation" value={form.explanation} onChange={onChange} />
      </div>

      <h2>Photos & Marketing</h2>
      <div className="form-group">
        <label><input type="radio" name="photoConsent" value="Yes" checked={form.photoConsent === "Yes"} onChange={onChange} /> I consent to clinical photos</label>
        <label><input type="radio" name="photoConsent" value="No" checked={form.photoConsent === "No"} onChange={onChange} /> I do not consent</label>
      </div>
      <div className="form-group">
        <label>Marketing Consent</label>
        <label><input type="radio" name="marketingConsent" value="Yes" checked={form.marketingConsent === "Yes"} onChange={onChange} /> Yes</label>
        <label><input type="radio" name="marketingConsent" value="No" checked={form.marketingConsent === "No"} onChange={onChange} /> No</label>
      </div>

      <h2>Liability Disclaimer</h2>
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

                  <label><input type="checkbox" name="liabilityAgree" checked={form.liabilityAgree} onChange={onChange} required /> I have read and understood this disclaimer and accept it in full.</label>
                </div>
              </div>
            </div>

      </div>

      <h2>Consent Declaration</h2>
      {[
        "I am not pregnant or breastfeeding.",
        "I have disclosed all medical conditions truthfully.",
        "I understand the nature, risks, and expected outcomes of the procedure.",
        "I give informed, voluntary consent to proceed.",
        "I have had the opportunity to ask all relevant questions.",
      ].map((txt, i) => (
        <div className="form-group" key={i}>
          <label><input type="checkbox" name="declarations" value={txt} onChange={onChange} /> {txt}</label>
        </div>
      ))}

      <div className="form-group">
        <label>Patient Full Name</label>
        <input name="patientName" value={form.patientName} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>Date</label>
        <input type="date" name="consentDate" value={form.consentDate} onChange={onChange} required />
      </div>

      <div className="form-group">
        <label>Signature</label>
        <SignatureCanvas
          ref={sigRef}
          canvasProps={{ width: 500, height: 200, className: "signature-canvas" }}
        />
        <button type="button" className="btn btn-stroke" onClick={clearSignature} style={{ marginTop: 8 }}>Clear Signature</button>
      </div>

      {status && <p className="form-status">{status}</p>}

      <div className="btn-wrap">
        <button type="submit" className="btn">Submit</button>
      </div>
    </form>
  );
}