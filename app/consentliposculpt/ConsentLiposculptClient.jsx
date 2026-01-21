// app/consentliposculpt/ConsentLiposculptClient.jsx
"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

import FooterLogos from "../components/FooterLogos.jsx";

const initialState = {
  fullName: "",
  dob: "",
  gender: "",
  contact: "",
  email: "",
  emergencyContact: "",
  procedureDate: "",
  practitioner: "",
  understanding1: false,
  understanding2: false,
  understanding3: false,
  policy1: "",
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
  consentDate: "",
};

const riskOptions = [
  "Swelling, bruising, pain",
  "Temporary lumpiness or tenderness",
  "Risk of allergic reaction",
  "Skin discoloration",
  "Nerve injury (rare)",
  "Skin necrosis or scarring (rare)",
  "No guarantee of symmetrical or complete fat reduction",
  "I understand that serious adverse reactions may require medical or surgical intervention",
];

const procedureUnderstandingOptions = [
  {
    key: "understanding1",
    label:
      "I understand that Liposculpt is a non-surgical injectable procedure that reduces localized fat using a fat-dissolving solution.",
  },
  {
    key: "understanding2",
    label:
      "I understand that multiple sessions (2–6) may be required for optimal results.",
  },
  {
    key: "understanding3",
    label:
      "I am aware that no specific outcomes are guaranteed, and results vary per person.",
  },
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
  "Cancer or recent chemotherapy",
];

const declarationChecklist = [
  "I have read this form in full",
  "All my questions have been answered",
  "I consent to Liposculpt Fat Dissolving Injections",
  "I understand the risks and alternatives",
  "I give informed, voluntary consent to proceed",
];

export default function ConsentLiposculptClient() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const signatureRef = useRef(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    // group arrays
    if (type === "checkbox" && ["risks", "declaration", "aftercare"].includes(name)) {
      setForm((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value),
      }));
      return;
    }

    // booleans
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    // medicalHistory radios (condition-*)
    if (name.startsWith("condition-")) {
      const key = name.split("-")[1];
      setForm((prev) => ({
        ...prev,
        medicalHistory: { ...prev.medicalHistory, [key]: value },
      }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const clearSignature = () => signatureRef.current?.clear();

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("Submitting...");

    try {
      const fd = new FormData();

      // flatten object/arrays in the same shape as your PHP expects
      Object.entries(form).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => fd.append(`${key}[]`, v));
        } else if (value && typeof value === "object") {
          Object.entries(value).forEach(([k, v]) => fd.append(`${key}[${k}]`, v));
        } else {
          fd.append(key, value ?? "");
        }
      });

      if (signatureRef.current && !signatureRef.current.isEmpty()) {
        const blob = await (await fetch(signatureRef.current.toDataURL())).blob();
        fd.append("patientSignature", blob, "signature.png");
      }

      // keep your current endpoint (change if you prefer your mails.ivhub.com host)
      const res = await fetch(
        "https://mails.ivhub.com/liposculptconsentemail.php",
        { method: "POST", body: fd }
      );

      setStatus(res.ok ? "Form submitted successfully!" : "Submission failed. Try again.");
      clearSignature();
    } catch (err) {
      setStatus("Error occurred. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const aftercareList = [
    "No alcohol, saunas, pools, or workouts for 48 hours",
    "Use prescribed creams or medication if given",
    "Monitor for signs of infection",
    "Contact the clinic immediately if adverse symptoms occur",
  ];

  return (
    <form className="form" onSubmit={onSubmit}>
      {/* Patient info */}
      <div className="form-group">
        <label>Full Name</label>
        <input name="fullName" onChange={onChange} required />
      </div>
      <div className="form-group">
        <label>Date of Birth</label>
        <input type="date" name="dob" onChange={onChange} required />
      </div>
      <div className="form-group">
          <label>Gender</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={onChange}
              required
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={onChange}
              required
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={onChange}
              required
            />{" "}
            Other
          </label>
        </div>
      <div className="form-group">
        <label>Contact Number</label>
        <input name="contact" onChange={onChange} required />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="email" onChange={onChange} required />
      </div>
      <div className="form-group">
        <label>Emergency Contact</label>
        <input name="emergencyContact" onChange={onChange} required />
      </div>
      <div className="form-group">
        <label>Date of Procedure</label>
        <input type="date" name="procedureDate" onChange={onChange} required />
      </div>
      <div className="form-group">
        <label>Practitioner Name</label>
        <input name="practitioner" onChange={onChange} required />
      </div>

      {/* Understanding */}
      <h2>PROCEDURE UNDERSTANDING</h2>
      {procedureUnderstandingOptions.map(({ key, label }) => (
        <div className="form-group" key={key}>
          <label>
            <input
              type="checkbox"
              name={key}
              value={label}
              onChange={onChange}
              required
            />{" "}
            {label}
          </label>
        </div>
      ))}

      {/* Risks */}
      <h2>Risks & Side Effects</h2>
      {riskOptions.map((item, i) => (
        <div className="form-group" key={i}>
          <label>
            <input
              type="checkbox"
              name="risks"
              value={item}
              onChange={onChange}
            />{" "}
            {item}
          </label>
        </div>
      ))}

      {/* Medical History */}
      <h2>Medical History</h2>
      {medicalConditions.map((c) => (
        <div className="form-group" key={c}>
          <label>{c}:</label>
          <label>
            <input
              type="radio"
              name={`condition-${c}`}
              value="Yes"
              onChange={onChange}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name={`condition-${c}`}
              value="No"
              onChange={onChange}
            />{" "}
            No
          </label>
        </div>
      ))}

      <div className="form-group">
        <label>Explain if any conditions marked Yes:</label>
        <textarea
          name="historyExplanation"
          onChange={onChange}
          rows={3}
        />
      </div>

      <div className="form-group">
        <label>Current medications & supplements:</label>
        <textarea name="medications" onChange={onChange} rows={3} />
      </div>

      <div className="form-group">
        <label>Allergies:</label>
        <textarea name="allergies" onChange={onChange} rows={3} />
      </div>

      {/* Aftercare */}
      <h2>Aftercare & Alternatives</h2>
      {aftercareList.map((a) => (
        <div className="form-group" key={a}>
          <label>
            <input
              type="checkbox"
              name="aftercare"
              value={a}
              onChange={onChange}
            />{" "}
            {a}
          </label>
        </div>
      ))}

      {/* Checkpoints */}
      <h2>Pregnancy & Consent Checkpoints</h2>
      <label>
        <input type="checkbox" name="altConsent" onChange={onChange} /> I confirm I
        am NOT pregnant or breastfeeding
      </label>
      <br />
      <label>
        <input type="checkbox" name="allDisclosed" onChange={onChange} /> I have
        disclosed all relevant medical history
      </label>
      <br />
      <label>
        <input type="checkbox" name="electiveConfirm" onChange={onChange} /> I
        understand the procedure is elective and cosmetic
      </label>
      <br />
      <label>
        <input type="checkbox" name="allowPhoto" onChange={onChange} /> I consent to
        before/after medical photographs. (If I decline consent for clinical documentation photography, the clinic will not be able to provide any touch-up treatments, revisions, or follow-up corrective procedures, as photographic evidence is mandatory for clinical justification and medico-legal purposes.)
      </label>
      <br />
      <br />
      <label>
        Marketing photo consent:
        <select name="allowMarketing" className="form-control" onChange={onChange}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      <br/>
      <br/>
      {/* Disclaimer */}
      <h2>Disclaimer of Liability</h2>
      <p>
        I understand and agree that IV Wellness Lounge Clinic LLC, its medical
        practitioners, and associated staff shall not be held financially liable for
        outcomes including unsatisfactory results despite appropriate technique,
        individual hypersensitivity or delayed reactions, incompatibility of my
        physiology, or the need for further corrective procedures.
      </p>
      <label>
        <input
          type="checkbox"
          name="disclaimerAgreement"
          onChange={onChange}
        />{" "}
        I have read and understood this disclaimer, and I agree to its terms without
        reservation.
      </label>
      <br/>
      <br/>
      {/* Data & Declaration */}
      <h2>Data & Emergency Protocol</h2>
      <label>
        <input type="checkbox" name="dataConsent" onChange={onChange} /> I understand
        my data is protected under UAE/DHA regulations
      </label>
      <br/>
      <br/>
      <h2>Final Declaration</h2>
      {declarationChecklist.map((item) => (
        <div className="form-group" key={item}>
          <label>
            <input
              type="checkbox"
              name="declaration"
              value={item}
              onChange={onChange}
            />{" "}
            {item}
          </label>
        </div>
      ))}

      <div className="form-group">
        <label>Date of Consent</label>
        <input type="date" name="consentDate" onChange={onChange} required />
      </div>

      <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="policy1"
              checked={!!form.policy1}
              value="I have read and agree to the Cancellation and Refund Policy"
              onChange={onChange}
              required
            />{" "}
            I have read and agree to the <a href="https://ivhub.com/cancellation-policy"><b>Cancellation and Refund Policy<b></b></b></a>
          </label>
        </div>
      {/* Signature */}
      <div className="form-group">
        <label>Patient Signature</label>
        <div style={{ border: "1px solid #ddd", borderRadius: 8, overflow: "hidden", maxWidth: 520 }}>
          <SignatureCanvas
            ref={signatureRef}
            canvasProps={{ width: 520, height: 200, className: "signature-canvas" }}
          />
        </div>
        <button type="button" className="btn btn-stroke" onClick={clearSignature} style={{ marginTop: 8 }}>
          Clear Signature
        </button>
      </div>

      <FooterLogos />
      {status && <p className="form-status">{status}</p>}

      <div className="btn-wrap">
        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>

    </form>
  );
}
