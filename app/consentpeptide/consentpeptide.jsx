"use client";

import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

import FooterLogos from "../components/FooterLogos.jsx";

const initialState = {
  serviceId: "peptide",

  patientName: "",
  emiratesId: "",
  dob: "",
  gender: "",
  mobileNumber: "",
  email: "",
  emergencyContact: "",
  relationshipToPatient: "",
  practitionerName: "",
  peptideSelection: [],
  policy1: "",

  consentDate: "",
};

// Add this list near the top of consentpeptide.jsx (outside the component)
const peptideOptions = [
  "BPC-157",
  "Thymosin Alpha-1",
  "CJC + Ipamorelin",
  "Sermorelin Acetate",
  "Gonadorelin",
  "AOD-9604",
  "MOTS-C",
  "Epithalon",
  "TB-500",
  "Acetyl Hexapeptide-8",
  "GHK-Cu",
  "Vasoactive Intestinal Peptide (VIP)",
  "PT-141",
];


export default function ConsentPeptide() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const sigRef = useRef(null);

  const handlePeptideToggle = (value, checked) => {
      setForm((prev) => {
        const next = new Set(prev.peptideSelection);
        if (checked) next.add(value);
        else next.delete(value);
        return { ...prev, peptideSelection: Array.from(next) };
      });
    };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;


    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked ? value : "" }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const clearSignature = () => sigRef.current?.clear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {

      if (!form.peptideSelection.length) {
        setStatus("Please select at least one peptide.");
        return;
      }


      const fd = new FormData();

      Object.entries(form).forEach(([k, v]) => {
        if (k === "peptideSelection") return;
        fd.append(k, v ?? "");
      });

      form.peptideSelection.forEach((item) => fd.append("peptideSelection[]", item));



      if (sigRef.current && !sigRef.current.isEmpty()) {
        const dataUrl = sigRef.current.toDataURL("image/png");
        const blob = await (await fetch(dataUrl)).blob();
        fd.append("patientSignature", blob, "patient-signature.png");
      }

      // Update this endpoint if your PHP file name differs
      const res = await fetch("https://mails.ivhub.com/peptideconsentemail.php", {
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
      <h2>Patient Details</h2>

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

      <div className="form-group">
        <label>Relationship to Patient (if representative)</label>
        <input
          name="relationshipToPatient"
          value={form.relationshipToPatient}
          onChange={handleChange}
          placeholder="e.g., Spouse / Parent / Sibling / Representative"
        />
      </div>

      <div className="form-group">
        <label>Treating Practitioner / Therapist</label>
        <input
          name="practitionerName"
          value={form.practitionerName}
          onChange={handleChange}
        />
      </div>


      <div className="form-group">
        <label>Select Peptide</label>

        <div className="pnames">
        {peptideOptions.map((p) => (
          <label key={p} style={{ display: "block", marginBottom: 8 }}>
            <input
              type="checkbox"
              name="peptideSelection"
              value={p}
              checked={form.peptideSelection.includes(p)}
              onChange={(e) => handlePeptideToggle(p, e.target.checked)}
            />{" "}
            {p}
          </label>
        ))}
        </div>
      </div>



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

      {/* ✅ Inserted text block below Clear Signature */}
        <div className="form-group">
          <p>
            <strong>1. PURPOSE OF CONSENT</strong>
            <br />
            This informed consent is provided to help you understand the nature
            of peptide therapy services offered by IV Wellness Lounge Clinic and
            to document your voluntary decision to participate.
          </p>
          <br/>
          <p>
            <strong>
              2. RESEARCH &amp; INVESTIGATIONAL USE ONLY (NON-THERAPEUTIC)
            </strong>
            <br />
            You acknowledge and agree that peptide-related services at IV
            Wellness Lounge Clinic are provided strictly for research,
            educational, observational, and investigational purposes only. These
            services are not intended to diagnose, treat, cure, or prevent any
            disease and are not a substitute for DHA-approved medical care.
          </p>
          <br/>
          <p>
            <strong>3. REGULATORY STATUS &amp; DHA DISCLAIMER</strong>
            <br />
            You understand that peptides referenced, discussed, supplied, or
            administered may be used in a manner that is not approved by the
            Dubai Health Authority (DHA) or other regulatory bodies for the
            intended purpose. No implication is made that this is a DHA-approved
            medical treatment under UAE law.
          </p>
          <br/>
          <p>
            <strong>4. WHAT PEPTIDE THERAPY MAY INVOLVE</strong>
            <br />
            Peptide therapy services may involve one or more of the following,
            depending on the agreed protocol: screening, consultation, baseline
            measurements, education and research discussion, and administration
            or provision of peptide compounds via route(s) such as subcutaneous
            injection, intramuscular injection, or other routes as deemed
            appropriate by the licensed practitioner. You acknowledge protocols
            may change based on tolerance, availability, observed response, and
            safety considerations.
          </p>
          <br/>
          <p>
            <strong>5. ELIGIBILITY, CONTRAINDICATIONS &amp; EXCLUSIONS</strong>
            <br />
            • You must be at least 18 years of age to consent, unless a legally
            authorized representative signs on your behalf.
            <br />
            • You must disclose pregnancy status; peptide therapy is generally
            not recommended during pregnancy or breastfeeding unless expressly
            advised by a licensed physician.
            <br />
            • You must disclose all medical conditions (including but not limited
            to cardiovascular disease, endocrine disorders, autoimmune disease,
            cancer history, liver/kidney impairment).
            <br />
            • You must disclose all medications, supplements,
            anticoagulants/antiplatelets, and any history of
            allergy/anaphylaxis.
            <br />
            • The clinic may decline or postpone participation if there are
            safety concerns, incomplete information, suspected misuse, or
            non-compliance.
          </p>
          <br/>
          <p>
            <strong>6. POTENTIAL RISKS, SIDE EFFECTS &amp; COMPLICATIONS</strong>
            <br />
            You acknowledge that peptide therapy may carry risks and adverse
            reactions, which may be known or unknown. Potential risks may
            include, but are not limited to:
            <br />
            • Injection site pain, bruising, swelling, redness, bleeding,
            nodules, or scarring
            <br />
            • Infection, inflammation, abscess, or tissue irritation
            <br />
            • Allergic reactions (including severe reactions)
            <br />
            • Headache, dizziness, nausea, vomiting, fatigue, insomnia, mood
            changes
            <br />
            • Hormonal or metabolic changes (including effects on appetite,
            glucose regulation, water retention)
            <br />
            • Blood pressure or heart rate changes in sensitive individuals
            <br />
            • Worsening of pre-existing medical conditions
            <br />
            • Unforeseen or long-term effects that are not yet fully established
          </p>
          <br/>
          <p>
            <strong>7. NO GUARANTEE OF RESULTS</strong>
            <br />
            You understand that no guarantees, promises, or assurances have been
            made regarding safety, effectiveness, outcomes, or results.
            Individual responses vary and may include no benefit.
          </p>
          <br/>
          <p>
            <strong>8. ALTERNATIVES</strong>
            <br />
            You acknowledge that alternatives may include choosing not to
            participate, seeking DHA-approved conventional medical evaluation,
            lifestyle modification, nutrition and exercise programs, or other
            therapies recommended by a licensed healthcare provider.
          </p>
          <br/>
          <p>
            <strong>9. MEDICAL DISCLOSURE &amp; ACCURACY OF INFORMATION</strong>
            <br />
            You confirm that you have disclosed complete and accurate medical
            history, current medications/supplements, allergies, and relevant
            conditions. You understand that failure to provide accurate
            information may increase risk and may affect eligibility.
          </p>
          <br/>
          <p>
            <strong>10. EMERGENCY CARE &amp; ADVERSE EVENT REPORTING</strong>
            <br />
            IV Wellness Lounge Clinic does not provide emergency or acute care
            services in connection with research peptide participation. If you
            experience severe symptoms (e.g., difficulty breathing, chest pain,
            fainting, severe allergic reaction), you must seek emergency care
            immediately. You agree to notify the clinic as soon as practicable
            about adverse events for documentation and safety review.
          </p>
          <br/>
          <p>
            <strong>11. LIMITATION OF LIABILITY</strong>
            <br />
            To the fullest extent permitted by applicable UAE law, you agree
            that IV Wellness Lounge Clinic, its owners, directors, officers,
            medical practitioners, nurses, staff, contractors, agents, and
            affiliates shall not be responsible or liable for any adverse
            effects, complications, injuries, losses, or damages arising directly
            or indirectly from peptide therapy participation, including outcomes
            that are unforeseen, delayed, or not fully established in scientific
            literature.
          </p>
          <br/>
          <p>
            <strong>12. ASSUMPTION OF RISK</strong>
            <br />
            You knowingly and voluntarily assume all risks—whether known or
            unknown—associated with peptide therapy and accept full personal
            responsibility for any outcomes resulting from participation.
          </p>
          <br/>
          <p>
            <strong>13. INDEMNIFICATION &amp; HOLD HARMLESS</strong>
            <br />
            You agree to indemnify, defend, and hold harmless IV Wellness Lounge
            Clinic, its owners, directors, officers, employees, practitioners,
            agents, affiliates, and representatives from and against any and all
            claims, demands, liabilities, damages, losses, costs, or expenses
            (including reasonable legal fees) arising out of or related to: (a)
            your participation; (b) your breach of this consent; (c) your failure
            to disclose accurate medical information; or (d) your misuse or
            misunderstanding of research-based information or guidance. This
            indemnity survives completion or termination of participation.
          </p>
          <br/>
          <p>
            <strong>14. ADDITIONAL DISCLAIMERS &amp; CONDITIONS</strong>
            <br />
            • All services and communications (verbal, written, electronic, or
            otherwise) are for educational and informational purposes only and
            must not be interpreted as medical advice.
            <br />
            • Any references to research studies, articles, or literature do not
            imply that similar results will occur in other individuals.
            <br />
            • Nothing in this consent or in services provided implies an
            intention to cure, prevent, or treat disease.
            <br />
            • The clinic cannot prescribe or make inferences regarding efficacy
            for a particular condition; you are advised to consult a licensed
            healthcare provider for medical concerns.
            <br />
            • The clinic may refuse, discontinue, or suspend services if misuse,
            suspected abuse, non-compliance, or safety concerns arise.
            <br />
            • You agree not to use any information provided for illegal
            activities; you accept all responsibility for how you use
            information outside the clinic setting.
          </p>
          <br/>
          <p>
            <strong>15. PRIVACY &amp; CONFIDENTIALITY</strong>
            <br />
            Your personal information and records will be handled in accordance
            with applicable UAE privacy requirements and clinic policies. Where
            research documentation is collected, it may be de-identified for
            internal analysis and quality improvement.
          </p>
          <br/>
          <p>
            <strong>16. FEES, REFUNDS &amp; CANCELLATION</strong>
            <br />
            You agree to pay applicable fees as disclosed prior to service.
            Refunds, if any, are subject to clinic policy and may be limited
            where products have been opened, prepared, or administered.
            Appointments may be rescheduled or cancelled subject to clinic
            scheduling policies.
          </p>
          <br/>
          <p>
            <strong>17. VOLUNTARY PARTICIPATION &amp; RIGHT TO WITHDRAW</strong>
            <br />
            Your participation is voluntary. You may withdraw consent at any
            time. Withdrawal does not waive fees already incurred and does not
            create any liability for the clinic.
          </p>
          <br/>
          <p style={{ marginBottom: 0 }}>
            <strong>
              18. GOVERNING LAW, SEVERABILITY &amp; ENTIRE AGREEMENT
            </strong>
            <br />
            This consent shall be governed by the laws of the United Arab
            Emirates as applicable in the Emirate of Dubai. If any provision is
            held invalid, the remaining provisions remain in effect. This
            document constitutes the entire agreement regarding peptide therapy
            research participation and supersedes prior discussions or
            understandings.
          </p>
        </div>

      <div className="form-group">
        <h2>Signature</h2>
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

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="policy1"
            checked={!!form.policy1}
            value="I have read and agree to the Terms & Conditions of Treatment"
            onChange={handleChange}
            required
          />{" "}
          By signing, you confirm you have had the opportunity to ask questions, that all questions were answered to your satisfaction, and that you voluntarily consent to participate under the terms, disclaimers, assumption of risk, limitation of liability, and indemnification set out above.
        </label>
      </div>

      <FooterLogos />
      {status && <p className="form-status">{status}</p>}

      <div className="btn-wrap">
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
}