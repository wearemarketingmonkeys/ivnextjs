// app/consentlipozero/ConsentLipozeroClient.jsx
"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

import FooterLogos from "../components/FooterLogos.jsx";

/** Initial form state */
const initial = {
  // Patient
  fullName: "",
  emiratesId: "",
  dob: "",
  gender: "",
  contact: "",
  email: "",

  // Treatment specifics
  treatmentAreas: "",
  sessionsPlanned: "",

  // Medical
  medicalConditions: [],
  historyNotes: "",

  // Consents
  photographyConsent: "",

  // Acknowledgements (required)
  understanding1: "",
  understanding2: "",
  understanding3: "",

  policy1: "",

  // Signatures
  patientName: "",
  practitionerName: "",
  consentDate: "",
};

const medicalChecklist = [
  "Pregnant or breastfeeding",
  "Pacemaker/metal implants",
  "Active skin infection on treatment area",
  "History of keloids or poor wound healing",
  "Uncontrolled diabetes or thyroid disorder",
  "Autoimmune/neurological disease",
  "Cancer (current/recent) or chemotherapy in last 12 months",
  "Use of anticoagulants (blood thinners)",
  "Recent fillers/threads/laser/surgery in treatment area (last 4 weeks)",
];

const acknowledgements = [
  {
    name: "understanding1",
    text:
      "I understand LipoZero is a non-invasive body-contouring treatment using RF/cavitation/vacuum and that multiple sessions may be required for optimal results.",
  },
  {
    name: "understanding2",
    text:
      "I will follow all pre/post-care instructions, including adequate hydration and avoidance of alcohol for 24–48 hours after treatment.",
  },
  {
    name: "understanding3",
    text:
      "I acknowledge that results vary by individual and no specific outcome is guaranteed.",
  },
];

export default function ConsentLipozeroClient() {
  const [form, setForm] = useState(initial);
  const [suggestions, setSuggestions] = useState([]);
  const [status, setStatus] = useState("");
  const sigRef = useRef(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Medical checklist (array)
    if (type === "checkbox" && name === "medicalConditions") {
      setForm((prev) => {
        const next = checked
          ? [...prev.medicalConditions, value]
          : prev.medicalConditions.filter((v) => v !== value);
        return { ...prev, medicalConditions: next };
      });
      return;
    }

    // Acknowledgements (required checkboxes)
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked ? value || "yes" : "" }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Autofill function
  const fetchPatientSuggestions = async (name) => {
    if (name.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(`https://mails.ivhub.com/getlipozero.php?name=${encodeURIComponent(name)}`);
      if (!res.ok) return;
      const data = await res.json();
      setSuggestions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const clearSignature = () => sigRef.current?.clear();

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const fd = new FormData();

      // append all simple, array, and required-only fields
      Object.entries(form).forEach(([k, v]) => {
        if (Array.isArray(v)) {
          v.forEach((item) => fd.append(`${k}[]`, item));
        } else {
          if (k.startsWith("understanding") && !v) return; // only when checked
          fd.append(k, v ?? "");
        }
      });

      // add signature image if present
      if (sigRef.current && !sigRef.current.isEmpty()) {
        const blob = await (await fetch(sigRef.current.toDataURL())).blob();
        fd.append("patientSignature", blob, "patient-signature.png");
      }

      // send to your existing PHP endpoint
      const res = await fetch(
        "https://mails.ivhub.com/lipozeroconsentemail.php",
        { method: "POST", body: fd }
      );

      if (res.ok) {
        setStatus("Form submitted successfully!");
        setForm(initial);
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
      {/* Patient details */}
      <div className="form-group" style={{ position: "relative" }}>
      <label>Full Name</label>
      <input
        name="fullName"
        value={form.fullName}
        onChange={(e) => {
          onChange(e);
          fetchPatientSuggestions(e.target.value);
        }}
        placeholder="Full Name"
        required
        autoComplete="off"
      />

        {/* Dropdown */}
        {suggestions.length > 0 && (
          <ul className="dropdown" style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid #ddd",
            background: "#fff",
            listStyle: "none",
            margin: 0,
            padding: 0,
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 9999
          }}>
            {suggestions.map((s) => (
              <li
                key={s.id}
                style={{ padding: "8px", cursor: "pointer" }}
                onClick={() => {
                  setForm((prev) => ({
                    ...prev,
                    patientName: s.patientName,
                    emiratesId: s.emiratesId,
                    gender: s.gender,
                    fullName: s.fullName,
                    email: s.email,
                    dob: s.dob,
                    consentDate: s.consentDate,
                    contact: s.contact,
                    practitionerName: s.practitionerName,
                  }));
                  setSuggestions([]);
                  // Load signature if exists
                  if (s.sign && sigRef.current) {
                    const img = new Image();
                    img.src = `data:image/png;base64,${s.sign}`;
                    img.onload = () => {
                      sigRef.current.clear();
                      const ctx = sigRef.current.getCanvas().getContext("2d");
                      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
                    };
                  }
                }}
              >
                {s.fullName} ({s.contact})
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="form-group">
        <label>Emirates ID / Passport</label>
        <input
          name="emiratesId"
          value={form.emiratesId}
          onChange={onChange}
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
          onChange={onChange}
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
            checked={form.gender === "Female"}
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
            checked={form.gender === "Other"}
            onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          placeholder="Email Address"
          required
        />
      </div>

      {/* Treatment specifics */}
      <div className="form-group">
        <label>Treatment Areas</label>
        <input
          name="treatmentAreas"
          value={form.treatmentAreas}
          onChange={onChange}
          placeholder="e.g., Abdomen, Flanks, Thighs"
        />
      </div>

      <div className="form-group">
        <label>Planned No. of Sessions (optional)</label>
        <input
          name="sessionsPlanned"
          value={form.sessionsPlanned}
          onChange={onChange}
          placeholder="e.g., 6"
        />
      </div>

      {/* Medical history */}
      <h2>Medical History</h2>
      {medicalChecklist.map((item) => (
        <div className="form-group" key={item}>
          <label>
            <input
              type="checkbox"
              name="medicalConditions"
              value={item}
              checked={form.medicalConditions.includes(item)}
              onChange={onChange}
            />{" "}
            {item}
          </label>
        </div>
      ))}

      <div className="form-group">
        <label>If any of the above apply, please provide details</label>
        <textarea
          name="historyNotes"
          value={form.historyNotes}
          onChange={onChange}
          rows={3}
          placeholder="Notes / allergies / medications"
        />
      </div>

      {/* Acknowledgements */}
      <h2>Procedure, Risks & Guidelines</h2>
      <p>
        LipoZero is a non-surgical body-contouring procedure. Temporary redness,
        warmth, swelling, or tenderness may occur. Rare risks include burns or
        pigment changes. Hydration and adherence to aftercare improve results.
      </p>

      <div className="form-group">
        {acknowledgements.map(({ name, text }) => (
          <label key={name} style={{ display: "block" }}>
            <input
              type="checkbox"
              name={name}
              value={text}
              checked={!!form[name]}
              onChange={onChange}
              required
            />{" "}
            {text}
          </label>
        ))}
      </div>

      {/* Photography consent */}
      <h2>Consent for Photography</h2>
      <div className="form-group">
        {[
          "I CONSENT to photography for clinical documentation only. If I decline consent for clinical documentation photography, the clinic will not be able to provide any touch-up treatments, revisions, or follow-up corrective procedures, as photographic evidence is mandatory for clinical justification and medico-legal purposes.",
          "I CONSENT to photography for internal marketing.",
          "I DO NOT consent to any photography.",
        ].map((t) => (
          <label key={t} style={{ display: "block", marginBottom: 6 }}>
            <input
              type="radio"
              name="photographyConsent"
              value={t}
              checked={form.photographyConsent === t}
              onChange={onChange}
              required
            />{" "}
            {t}
          </label>
        ))}
      </div>

      {/* Signatures & names */}
      <h2>Declaration & Signatures</h2>
      <div className="form-group">
        <label>Patient Name</label>
        <input
          name="patientName"
          value={form.patientName}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Date of Consent</label>
        <input
          type="date"
          name="consentDate"
          value={form.consentDate}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Practitioner Name</label>
        <input
          name="practitionerName"
          value={form.practitionerName}
          onChange={onChange}
          required
        />
      </div>

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

      {/* Submit */}
      <FooterLogos/> 
      
      {status && <p className="form-status">{status}</p>}
      <div className="btn-wrap">
        <button type="submit" className="btn">Submit</button>
      </div>
    </form>
  );
}