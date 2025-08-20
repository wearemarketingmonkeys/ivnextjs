// app/consent/ConsentUnifiedClient.jsx
'use client';

import { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

/* ================== SERVICES ================== */
/* Add more services by cloning this object shape */
const SERVICES = {
  hydrafacial: {
    label: 'HydraFacial',
    postUrl: 'https://mails.ivhub.com/hydraconsentemail-1.php',
    medicalOptions: [
      'Pregnancy or lactation',
      'Active acne, eczema, or psoriasis',
      'Skin infection or cold sores',
      'Recent chemical peel, laser, or facial surgery',
      'Use of isotretinoin (Accutane) in the past 6–12 months',
      'Autoimmune diseases (e.g., lupus, vitiligo)',
      'Allergies (medication, skincare ingredients, latex, etc.)',
    ],
    risksHtml: `
      <p>
        HydraFacial is a non-invasive treatment with benefits including exfoliation,
        deep pore cleansing, serum infusion, and optional LED light therapy.
      </p>
      <p>
        <b>Potential risks/side effects:</b> temporary redness or sensitivity, dryness,
        allergic reaction, cold sore flare, rare pigmentation changes.
      </p>
    `,
    acknowledgements: [
      'I understand the nature, benefits, and potential risks of the procedure.',
      'I acknowledge that results vary and no outcome is guaranteed.',
      'I have disclosed my relevant medical history and medications.',
    ],
    photographyRadios: [
      'I CONSENT to photography for clinical documentation only. If I decline consent for clinical documentation photography, the clinic will not be able to provide any touch-up treatments, revisions, or follow-up corrective procedures, as photographic evidence is mandatory for clinical justification and medico-legal purposes..',
      'I CONSENT to photography for internal marketing.',
      'I DO NOT consent to any photography.',
    ],
    submitLabel: 'Submit HydraFacial Consent',
  },

  chemical: {
    label: 'Chemical Peel',
    postUrl: 'https://mails.ivhub.com/chemicalconsentemail-1.php',
    medicalOptions: [
      'Pregnancy or lactation',
      'Use of isotretinoin (Accutane) in the past 6–12 months',
      'History of keloid or hypertrophic scarring',
      'Active skin infections or herpes simplex (cold sores)',
      'Allergies to glycolic acid, salicylic acid, or other peel agents',
    ],
    risksHtml: `
      <p>
        Chemical peels improve skin texture and tone but carry some risks.
      </p>
      <p>
        <b>Potential risks/side effects:</b> redness, peeling, irritation, post-inflammatory
        hyperpigmentation, infection, or scarring in rare cases.
      </p>
    `,
    acknowledgements: [
      'I understand the procedure, benefits, and risks.',
      'I agree to follow all pre- and post-treatment care instructions.',
      'I acknowledge that results vary and multiple sessions may be needed.',
    ],
    photographyRadios: [
      'I CONSENT to photography for clinical documentation only. If I decline consent for clinical documentation photography, the clinic will not be able to provide any touch-up treatments, revisions, or follow-up corrective procedures, as photographic evidence is mandatory for clinical justification and medico-legal purposes..',
      'I CONSENT to photography for internal marketing.',
      'I DO NOT consent to any photography.',
    ],
    submitLabel: 'Submit Chemical Peel Consent',
  },

  laser: {
    label: 'Laser Hair Removal',
    postUrl: 'https://mails.ivhub.com/laserconsentemail-1.php',
    medicalOptions: [
      'Pregnant or breastfeeding',
      'History of keloid or hypertrophic scarring',
      'Epilepsy or seizures',
      'Diabetes or thyroid condition',
      'Use of blood thinners or photosensitizing medications',
      'Active skin infection, eczema, psoriasis, or open wounds in treatment area',
      'Tanned, sunburned, or recently waxed/shaved area',
      'Use of isotretinoin (Accutane) in the past 6–12 months',
      'Tattoo or permanent makeup in the treatment zone',
      'Herpes simplex (cold sores) in the treatment area',
    ],
    risksHtml: `
      <p>
        Laser hair removal with the <b>Soprano Titanium</b> is designed for safety and comfort,
        but risks may include temporary redness, pigment changes, or rare side effects.
      </p>
      <p>
        <b>Potential risks/side effects:</b> redness, swelling, hypo/hyperpigmentation,
        blistering in rare cases, treatment discomfort, or ineffective results.
      </p>
    `,
    acknowledgements: [
      'I understand the treatment process and its potential risks/benefits.',
      'I acknowledge results are not guaranteed and vary individually.',
      'I have disclosed my relevant medical history and medications.',
    ],
    photographyRadios: [
      'I CONSENT to photography for clinical documentation only. If I decline consent for clinical documentation photography, the clinic will not be able to provide any touch-up treatments, revisions, or follow-up corrective procedures, as photographic evidence is mandatory for clinical justification and medico-legal purposes..',
      'I CONSENT to photography for internal marketing.',
      'I DO NOT consent to any photography.',
    ],
    submitLabel: 'Submit Laser Hair Removal Consent',
  },

  liposculpt: {
    label: 'Liposculpt',
    postUrl: 'https://ivmails.onrender.com/liposculptconsentemail-1.php',
    medicalOptions: [
      'Pregnancy or breastfeeding',
      'Active skin infection',
      'Soy or lecithin allergy',
      'Autoimmune condition',
      'Severe liver/kidney/heart disease',
      'Uncontrolled diabetes',
      'Current use of blood thinners',
      'Cosmetic treatments in area in last 4 weeks',
      'History of keloids or poor healing',
      'Cancer or recent chemotherapy',
    ],
    risksHtml: `
      <p>
        Liposculpt involves non-surgical fat dissolving injections that target localized
        fat deposits. Multiple sessions (2–6) may be required for best results.
      </p>
      <p>
        <b>Potential risks/side effects:</b> swelling, bruising, pain, temporary lumpiness,
        risk of allergic reaction, skin discoloration, nerve injury (rare), skin necrosis or
        scarring (rare), no guarantee of symmetry or complete reduction.
      </p>
    `,
    acknowledgements: [
      'I understand that Liposculpt is elective and cosmetic.',
      'I acknowledge that results vary and are not guaranteed.',
      'I have disclosed my complete medical history and medications.',
      'I understand possible need for corrective or repeat treatments.',
    ],
    photographyRadios: [
      'I CONSENT to before/after photographs for clinical documentation. If I decline consent for clinical documentation photography, the clinic will not be able to provide any touch-up treatments, revisions, or follow-up corrective procedures, as photographic evidence is mandatory for clinical justification and medico-legal purposes.',
      'I CONSENT to photography for internal marketing.',
      'I DO NOT consent to any photography.',
    ],
    submitLabel: 'Submit Liposculpt Consent',
  },

  lipozero: {
    label: 'LipoZero',
    postUrl: 'https://mails.ivhub.com/lipozeroconsentmail-1.php',
    medicalOptions: [
      'Pregnancy or breastfeeding',
      'Use of blood thinners or anticoagulants',
      'Diabetes, epilepsy, or cardiovascular condition',
      'Active acne, eczema, or rosacea',
      'Recent fillers, Wrinkle Relaxer, or facial surgeries',
      'Autoimmune disorders or skin sensitivity',
      'Herpes simplex (cold sores)',
      'Use of isotretinoin (Accutane) within past 6–12 months',
      'Keloid or hypertrophic scarring tendency'
    ],
    risksHtml: `
      <p>
        LipoZero is a non-invasive body contouring procedure that uses advanced
        technology to target stubborn fat deposits and improve skin tightening.
      </p>
      <p>
        <b>Potential risks/side effects:</b> temporary redness, mild swelling, tenderness,
        tingling, or rare bruising. Results may vary and multiple sessions could be required.
      </p>
    `,
    acknowledgements: [
      'I understand the nature, benefits, and potential risks of LipoZero treatment.',
      'I acknowledge that results vary between individuals and no outcome is guaranteed.',
      'I confirm that I have disclosed my relevant medical history and medications.'
    ],
    photographyRadios: [
      'I CONSENT to photography for clinical documentation only. If I decline consent for clinical documentation photography, the clinic will not be able to provide any touch-up treatments, revisions, or follow-up corrective procedures, as photographic evidence is mandatory for clinical justification and medico-legal purposes..',
      'I CONSENT to photography for internal marketing.',
      'I DO NOT consent to any photography.'
    ],
    submitLabel: 'Submit LipoZero Consent',
  },

  microneedling: {
    label: "Microneedling",
    postUrl: "https://mails.ivhub.com/microconsentmail-1.php",
    medicalOptions: [
      "Pregnancy or breastfeeding",
      "Use of blood thinners or anticoagulants",
      "Diabetes, epilepsy, or cardiovascular condition",
      "Active acne, eczema, or rosacea",
      "Recent fillers, Wrinkle Relaxer, or facial surgeries",
      "Autoimmune disorders or skin sensitivity",
      "Herpes simplex (cold sores)",
      "Use of isotretinoin (Accutane) within past 6–12 months",
      "Keloid or hypertrophic scarring tendency",
    ],
    risksHtml: `
      <p>
        Microneedling is a minimally invasive treatment that stimulates collagen 
        production and enhances skin rejuvenation.
      </p>
      <p>
        <b>Potential risks/side effects:</b> temporary redness, swelling, bruising, 
        pinpoint bleeding, mild discomfort, infection, scarring, pigmentation changes 
        in rare cases, and reactivation of cold sores.
      </p>
    `,
    acknowledgements: [
      "I understand the nature, benefits, and potential risks of Microneedling.",
      "I acknowledge that results vary and no outcome is guaranteed.",
      "I have disclosed my relevant medical history and medications.",
    ],
    photographyRadios: [
      "I CONSENT to photography for clinical documentation only. If I decline consent for clinical documentation photography, the clinic will not be able to provide any touch-up treatments, revisions, or follow-up corrective procedures, as photographic evidence is mandatory for clinical justification and medico-legal purposes..",
      "I CONSENT to photography for internal marketing.",
      "I DO NOT consent to any photography.",
    ],
    submitLabel: "Submit Microneedling Consent",
  }
};


/* ============== SHARED INITIAL STATE ============== */
const INITIAL = {
  serviceId: 'hydrafacial',

  // Patient info
  fullName: '',
  emiratesId: '',
  dob: '',
  gender: '',
  contact: '',
  email: '',

  // Medical
  medicalConditions: [],
  allergiesDescription: '',

  // Photo consent
  photographyConsent: '',

  // Declaration
  patientName: '',
  consentDate: '',
  practitionerName: '',
};

export default function ConsentUnifiedClient() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('');
  const sigRef = useRef(null);

  const svc = SERVICES[form.serviceId];

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'medicalConditions') {
      setForm((prev) => {
        const next = checked
          ? [...prev.medicalConditions, value]
          : prev.medicalConditions.filter((v) => v !== value);
        return { ...prev, medicalConditions: next };
      });
      return;
    }

    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const clearSignature = () => sigRef.current?.clear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!svc) return;

    setStatus('Submitting…');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        if (Array.isArray(v)) v.forEach((x) => fd.append(`${k}[]`, x));
        else fd.append(k, v ?? '');
      });

      if (sigRef.current && !sigRef.current.isEmpty()) {
        const blob = await (await fetch(sigRef.current.toDataURL())).blob();
        fd.append('patientSignature', blob, 'patient-signature.png');
      }

      const res = await fetch(svc.postUrl, { method: 'POST', body: fd });
      if (!res.ok) throw new Error('Bad response');

      setStatus('Form submitted successfully!');
      setForm((f) => ({ ...INITIAL, serviceId: f.serviceId })); // keep current service
      clearSignature();
    } catch (err) {
      setStatus('Submission failed. Please try again.');
    }
  };

  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-form">
          <div className="form-wrapper">
            <div className="form-wrap">
              <div className="right">
                <h1>Consent Form</h1>
                <p>Select a treatment, then complete your details and signature.</p>
                {/* Service selector */}
                {/* Shared form */}
                <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <select
                    id="serviceId"
                    name="serviceId"
                    value={form.serviceId}
                    onChange={onChange}
                  >
                    {Object.entries(SERVICES).map(([id, s]) => (
                      <option key={id} value={id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dynamic consent content */}
                {svc && (
                  <>
                    <h2 className="section-title">{svc.label} Consent</h2>

                    <div
                      className="consent-copy"
                      dangerouslySetInnerHTML={{ __html: svc.risksHtml }}
                    />
                    <br/>
                    <div className="form-group">
                      {svc.acknowledgements.map((txt, i) => (
                        <label key={i} className="checkbox" style={{ display: 'block' }}>
                          <input type="checkbox" name={`understanding${i + 1}`} required /> {txt}
                        </label>
                      ))}
                    </div>

                    <h3 className="section-title">Consent for Photography</h3>
                    <div className="form-group">
                      {svc.photographyRadios.map((t, i) => (
                        <label key={i} style={{ display: 'block', marginBottom: 6 }}>
                          <input
                            type="radio"
                            name="allowPhoto"
                            value={t}
                            checked={form.photographyConsent === t}
                            onChange={(e) =>
                              setForm({ ...form, photographyConsent: e.target.value })
                            }
                            required
                          />
                          {t}
                        </label>
                      ))}
                    </div>

                  </>
                )}

                
                  {/* Patient info */}
                  <h2 className="section-title">Patient Information</h2>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input name="fullName" value={form.fullName} onChange={onChange} required />
                  </div>
                  <div className="form-group">
                    <label>Emirates ID / Passport</label>
                    <input name="emiratesId" value={form.emiratesId} onChange={onChange} required />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" value={form.dob} onChange={onChange} required />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-row">
                      {['Male', 'Female', 'Other'].map((g) => (
                        <label key={g} style={{ marginRight: 10 }}>
                          <input
                            type="radio"
                            name="gender"
                            value={g}
                            checked={form.gender === g}
                            onChange={onChange}
                            required
                          />{' '}
                          {g}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input name="contact" value={form.contact} onChange={onChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} required />
                  </div>

                  {/* Medical disclosure */}
                  <h2 className="section-title">Medical Disclosure</h2>
                  <div className="form-group">
                    {svc?.medicalOptions.map((m) => (
                      <label key={m} className="checkbox" style={{ display: 'block' }}>
                        <input
                          type="checkbox"
                          name="medicalConditions"
                          value={m}
                          checked={form.medicalConditions.includes(m)}
                          onChange={onChange}
                        />{' '}
                        {m}
                      </label>
                    ))}
                  </div>
                  <div className="form-group">
                    <label>If you checked any, please elaborate:</label>
                    <textarea
                      name="allergiesDescription"
                      value={form.allergiesDescription}
                      onChange={onChange}
                      rows={3}
                    />
                  </div>

                  {/* Declaration & Signatures */}
                  <h2 className="section-title">Declaration & Signatures</h2>
                  <div className="form-group">
                    <label>Patient Name</label>
                    <input name="patientName" value={form.patientName} onChange={onChange} required />
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
                    <label>Patient Signature</label>
                    <div className="signature-pad" style={{ border: '1px solid #ddd', borderRadius: 8, overflow: 'hidden' }}>
                      <SignatureCanvas
                        ref={sigRef}
                        canvasProps={{ width: 700, height: 200, className: 'signature-canvas' }}
                      />
                    </div>
                    <button type="button" className="btn btn-stroke" onClick={clearSignature} style={{ marginTop: 8 }}>
                      Clear Signature
                    </button>
                  </div>

                  {status ? <p className="form-status">{status}</p> : null}

                  <div className="btn-wrap">
                    <button type="submit" className="btn">
                      {svc?.submitLabel || 'Submit Consent'}
                    </button>
                  </div>
                </form>
                {/* /form */}
              </div>
              {/* /right */}
            </div>
            {/* /form-wrap */}
          </div>
          {/* /form-wrapper */}
        </div>
        {/* /contact-form */}
      </div>
      {/* /container */}
    </div>
    // /contact-us
  );
}
