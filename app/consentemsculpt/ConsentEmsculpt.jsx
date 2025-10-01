"use client";

import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const initialState = {
  serviceId: "emsculpt",

  fullName: "",
  emiratesId: "",
  dob: "",
  contact: "",
  email: "",
  procedureDate: "",
  emergencyContact: "",
  practitionerName: "",

  treatmentUnderstanding: [],
  treatmentAreas: [],
  otherArea: "",

  contraindications: {},
  contraindicationsNotes: "",

  preAftercare: "Disclose health changes; Remove metal; Avoid exercise post-session; Hydrate; Multiple sessions required",
  resultsLimitations: "Results vary; Cosmetic treatment not cure; Maintenance required",
  expectedBenefits: "Toning/firming muscles; Strengthening weak muscles; Circumferential fat reduction; Improved definition/core strength; Non-invasive no downtime",
  sideEffects: "Muscle soreness; Redness/swelling/tingling; Skin sensitivity; Rare spasm; Discomfort; Temporary increased urination",

  photoConsent: "",
  liabilityDisclaimer: "",
  finalConsent: [],

  patientName: "",
  consentDate: "",
};

const treatmentOptions = [
  "Abdomen",
  "Buttocks",
  "Arms",
  "Thighs",
  "Calves",
];

const contraindicationOptions = [
  "Pregnancy or breastfeeding",
  "Metal implants or prosthetics in the treatment area",
  "Cardiac pacemaker or implanted defibrillator",
  "Epilepsy or seizure disorders",
  "Active cancer or history of cancer in the last 5 years",
  "Hernias or recent abdominal surgery",
  "Uncontrolled diabetes or severe metabolic disorders",
];

export default function ConsentEmsculpt() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const sigRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && Array.isArray(form[name])) {
      setForm((prev) => {
        const arr = checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value);
        return { ...prev, [name]: arr };
      });
      return;
    }

    if (name.startsWith("contra_")) {
      setForm((prev) => ({
        ...prev,
        contraindications: {
          ...prev.contraindications,
          [name.replace("contra_", "")]: value,
        },
      }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const clearSignature = () => sigRef.current?.clear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        if (Array.isArray(v)) {
          v.forEach((item) => fd.append(`${k}[]`, item));
        } else if (typeof v === "object") {
          Object.entries(v).forEach(([ck, cv]) =>
            fd.append(`${k}[${ck}]`, cv)
          );
        } else {
          fd.append(k, v ?? "");
        }
      });

      if (sigRef.current && !sigRef.current.isEmpty()) {
        const dataUrl = sigRef.current.toDataURL("image/png");
        const blob = await (await fetch(dataUrl)).blob();
        fd.append("patientSignature", blob, "patient-signature.png");
      }

      const res = await fetch("https://mails.ivhub.com/emsculptconsentemail.php", {
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
      {/* PATIENT DETAILS */}
      <h2>Patient Details</h2>
      <div className="form-group">
        <label>Full Name (as per ID)</label>
        <input name="fullName" value={form.fullName} onChange={handleChange} required />
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
        <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Mobile Number</label>
        <input name="contact" value={form.contact} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Date of Procedure</label>
        <input type="date" name="procedureDate" value={form.procedureDate} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Emergency Contact Name & Number</label>
        <input name="emergencyContact" value={form.emergencyContact} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Treating Practitioner / Therapist</label>
        <input name="practitionerName" value={form.practitionerName} onChange={handleChange} />
      </div>

      {/* TREATMENT INFORMATION */}
      <h2>Treatment Information</h2>
      {[
        "I understand that EMSculpt is a non-invasive body contouring treatment...",
        "I understand this is not a replacement for diet, exercise, or surgery...",
        "I confirm the treatment will be administered by a trained DHA-authorized provider...",
      ].map((t, i) => (
        <div className="form-group" key={i}>
          <label>
            <input
              type="checkbox"
              name="treatmentUnderstanding"
              value={t}
              checked={form.treatmentUnderstanding.includes(t)}
              onChange={handleChange}
            />{" "}
            {t}
          </label>
        </div>
      ))}
      <div className="form-group">
        <label>Treatment Areas</label>
        {treatmentOptions.map((t) => (
          <label key={t} style={{ display: "block" }}>
            <input
              type="checkbox"
              name="treatmentAreas"
              value={t}
              checked={form.treatmentAreas.includes(t)}
              onChange={handleChange}
            />{" "}
            {t}
          </label>
        ))}
        <input name="otherArea" value={form.otherArea} onChange={handleChange} placeholder="Other area" />
      </div>

      {/* EXPECTED BENEFITS (display only, send as hidden) */}
      <h2>Expected Benefits</h2>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Toning and firming of muscle groups</li>
        <li>Strengthening of weak or atrophied muscles</li>
        <li>Circumferential fat reduction (device-dependent)</li>
        <li>Improved definition and core strength</li>
        <li>Non-invasive procedure with no downtime</li>
      </ul>
      <p><em>Results typically develop over several weeks. 4–6 sessions recommended.</em></p>

        <br/>
      {/* POSSIBLE SIDE EFFECTS */}
      <h2>Possible Side Effects</h2>
      <ul>
        <li>Temporary muscle soreness or fatigue</li>
        <li>Mild redness, swelling, or tingling</li>
        <li>Minor skin sensitivity or warmth</li>
        <li>Rare cases of muscle spasm or cramping</li>
        <li>Discomfort in low pain threshold</li>
        <li>Temporary increase in urination due to fat metabolism</li>
      </ul>

        <br/>
      {/* CONTRAINDICATIONS */}
      <h2>Contraindications</h2>
      {contraindicationOptions.map((c) => (
        <div className="form-group" key={c}>
          <label>{c}</label>
          <label>
            <input type="radio" name={`contra_${c}`} value="Yes" onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name={`contra_${c}`} value="No" onChange={handleChange} /> No
          </label>
        </div>
      ))}
      <div className="form-group">
        <label>If Yes to any, please explain:</label>
        <textarea
          name="contraindicationsNotes"
          value={form.contraindicationsNotes}
          onChange={handleChange}
          rows={3}
        />
      </div>

      {/* PRE & POST */}
      <h2>Pre- & Post-Treatment Instructions</h2>
      <ul>
        <li>Disclose all recent medical procedures/surgeries/health changes</li>
        <li>Remove all metal accessories or devices</li>
        <li>Avoid intense exercise immediately after</li>
        <li>Hydrate well before and after</li>
        <li>Multiple sessions may be required</li>
      </ul>

      <br/>
      {/* RESULTS & LIMITATIONS */}
      <h2>Results & Limitations</h2>
      <ul>
        <li>Results vary and are not guaranteed</li>
        <li>Cosmetic wellness treatment, not weight loss</li>
        <li>Maintenance may be necessary</li>
      </ul>

      <br/>
      {/* PHOTO CONSENT */}
      <h2>Photos & Marketing Consent</h2>
      <div className="form-group">
        <label>
          <input type="radio" name="photoConsent" value="Yes" checked={form.photoConsent === "Yes"} onChange={handleChange}/> Yes
        </label>
        <label>
          <input type="radio" name="photoConsent" value="No" checked={form.photoConsent === "No"} onChange={handleChange}/> No
        </label>
      </div>

      {/* LIABILITY DISCLAIMER */}
      <h2>Liability Disclaimer</h2>
      <div className="form-group">
        <label>
          <input type="checkbox" name="liabilityDisclaimer" value="I accept liability disclaimer" checked={!!form.liabilityDisclaimer} onChange={handleChange}/> I understand and agree that IV Wellness Lounge Clinic LLC, its medical practitioners, and associated staff shall not be held financially liable for:
        </label>
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

      {/* FINAL CONSENT */}
      <h2>Final Consent</h2>
      {[
        "I am not pregnant or breastfeeding",
        "I have disclosed all medical history truthfully",
        "I understand this treatment is elective and non-surgical",
        "I give informed, voluntary consent to proceed",
        "I had opportunity to ask all relevant questions",
      ].map((t, i) => (
        <div className="form-group" key={i}>
          <label>
            <input type="checkbox" name="finalConsent" value={t} checked={form.finalConsent.includes(t)} onChange={handleChange}/> {t}
          </label>
        </div>
      ))}

      {/* SIGNATURE */}
      <h2>Signature</h2>
      <div className="form-group">
        <label>Patient Full Name</label>
        <input name="patientName" value={form.patientName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input type="date" name="consentDate" value={form.consentDate} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Patient Signature</label>
        <div style={{ border: "1px solid #ddd", borderRadius: 8, overflow: "hidden", maxWidth: 520 }}>
          <SignatureCanvas ref={sigRef} canvasProps={{ width: 520, height: 200, className: "signature-canvas" }} />
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