'use client';

import React, { useState, useRef } from 'react';
import SignaturePad from "react-signature-canvas";

const therapistSignatureRef = useRef();
const managerSignatureRef = useRef();


export default function IncidentReportClient() {
  const [form, setForm] = useState({});
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        [name]: checked ? value : '',
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('Submitting...');

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (!therapistSignatureRef.current.isEmpty()) {
        const blob = await (await fetch(therapistSignatureRef.current.toDataURL())).blob();
        formData.append("therapistSignature", blob, "therapist-signature.png");
        }

        if (!managerSignatureRef.current.isEmpty()) {
        const blob = await (await fetch(managerSignatureRef.current.toDataURL())).blob();
        formData.append("managerSignature", blob, "manager-signature.png");
        }


      const res = await fetch('https://mails.ivhub.com/incidentreport.php', {
        method: 'POST',
        body: formData,
      });

      setStatus(res.ok ? 'Form submitted successfully!' : 'Submission failed. Try again.');
      if (res.ok) setForm({});
    } catch (err) {
      setStatus('Submission failed. Try again.');
    }
    setSubmitting(false);
  };

  return (
  <form className="form" onSubmit={handleSubmit}>
    <h2>Report Info</h2>
    <div className="form-group">
      <input className="form-control" name="reportDate" type="date" placeholder="Date of Report" onChange={handleChange} required />
    </div>
    <div className="form-group">
      <input className="form-control" name="incidentTime" type="time" placeholder="Time of Incident" onChange={handleChange} required />
    </div>
    <div className="form-group">
      <input className="form-control" name="location" placeholder="Location" onChange={handleChange} required />
    </div>

    <h2>Client Information</h2>
    <div className="form-group">
      <input className="form-control" name="clientName" placeholder="Client Name" onChange={handleChange} required />
    </div>
    <div className="form-group">
      <input className="form-control" name="clientContact" placeholder="Contact Number (if required)" onChange={handleChange} />
    </div>

    <h2>Treatment Details</h2>
    <div className="form-group">
      <input className="form-control" name="treatmentType" placeholder="Type of Treatment" onChange={handleChange} required />
    </div>
    <div className="form-group">
      <input className="form-control" name="treatmentDate" type="date" placeholder="Date of Treatment" onChange={handleChange} required />
    </div>
    <div className="form-group">
      <input className="form-control" name="therapist" placeholder="Therapist/Practitioner" onChange={handleChange} required />
    </div>

    <h2>Incident Description</h2>
    <div className="form-group">
      <textarea className="form-control" name="incidentSituation" placeholder="Situation Leading to Incident" onChange={handleChange} required />
    </div>
    <div className="form-group">
      <textarea className="form-control" name="incidentDescription" placeholder="Description of Incident" onChange={handleChange} required />
    </div>

    <h2>Action Taken</h2>
    <div className="form-group">
      <textarea className="form-control" name="therapistResponse" placeholder="Immediate Response by Therapist" onChange={handleChange} required />
    </div>
    <div className="form-group">
      <textarea className="form-control" name="managerEscalation" placeholder="Escalation/Manager Involvement" onChange={handleChange} />
    </div>

    <h2>Client Outcome</h2>
    {["No adverse effect", "Minor reaction", "Equipment issue", "Follow-up needed"].map((label, i) => (
      <div className="form-group" key={i}>
        <label>
          <input type="checkbox" name={`clientOutcome_${i}`} value={label} onChange={handleChange} /> {label}
        </label>
      </div>
    ))}

    <h5>Describe if applicable</h5>
    <div className="form-group">
      <textarea className="form-control" name="clientOutcomeDetails" placeholder="Details (if applicable)" onChange={handleChange} />
    </div>

    <h2>Follow-Up Plan</h2>
    {["Additional staff training", "Equipment check", "Policy update"].map((label, i) => (
      <div className="form-group" key={i}>
        <label>
          <input type="checkbox" name={`followUp_${i}`} value={label} onChange={handleChange} /> {label}
        </label>
      </div>
    ))}

    <h2>Final Notes</h2>
    <div className="form-group">
      <label>
        <input type="checkbox" name="contactedFollowup" value="Client contacted for follow-up" onChange={handleChange} /> Client contacted for follow-up
      </label>
    </div>
    <div className="form-group">
      <input className="form-control" name="otherNote" placeholder="Other notes" onChange={handleChange} />
    </div>

    <h2>Signatures</h2>

    <div className="form-group">
    <label>Therapist/Staff Reporting</label>
    <SignaturePad
        ref={therapistSignatureRef}
        canvasProps={{ className: "signature-pad" }}
    />
    <button type="button" onClick={() => therapistSignatureRef.current.clear()} className="clear-signature">
        Clear
    </button>
    </div>

    <div className="form-group">
    <label>Manager Reviewed By</label>
    <SignaturePad
        ref={managerSignatureRef}
        canvasProps={{ className: "signature-pad" }}
    />
    <button type="button" onClick={() => managerSignatureRef.current.clear()} className="clear-signature">
        Clear
    </button>
    </div>


    <div className="form-group">
        <div className="btn-wrap">
            <button type="submit" disabled={submitting} className='btn'>
                {submitting ? "Submitting..." : "Submit"}
            </button>
        </div>
      <p>{status}</p>
    </div>
  </form>
);
}