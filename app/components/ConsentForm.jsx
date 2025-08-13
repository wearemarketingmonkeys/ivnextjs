import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const initialState = {
  patientName: "",
  email: "",
  dob: "",
  mobile: "",
  bloodPressure: "",
  pulse: "",
  treatment: "",
  amount: "",
  paymentMode: "",
  nurse: "",
  referral: "",
  appointmentTime: "",
};

const ConsentForm = () => {
  const [form, setForm] = useState(initialState);
  const [documentUpload, setDocumentUpload] = useState(null);
  const [status, setStatus] = useState("");
  const signaturePad = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setDocumentUpload(e.target.files[0]);
  };

  const clearSignature = () => {
    signaturePad.current.clear();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Capture signature as blob
      if (!signaturePad.current.isEmpty()) {
        const dataURL = signaturePad.current.toDataURL();
        const blob = await (await fetch(dataURL)).blob();
        formData.append("signature", blob, "signature.png");
      }

      if (documentUpload) {
        formData.append("documentUpload", documentUpload);
      }

      const res = await fetch("https://ivmails.onrender.com/consentemail.php", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("Consent form submitted and emailed successfully!");
        setForm(initialState);
        signaturePad.current.clear();
        setDocumentUpload(null);
      } else {
        setStatus("Failed to submit. Please try again.");
      }
    } catch (err) {
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
                <h1>Consent Form</h1>
                <form className="form" onSubmit={handleSubmit}>
                  {/* Existing form fields */}
                  {Object.entries(initialState).map(([key, value]) => (
                    <div className="form-group" key={key}>
                      <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1").toUpperCase()}</label>
                      <input
                        type={key === "email" ? "email" : key === "dob" ? "date" : key === "appointmentTime" ? "datetime-local" : "text"}
                        id={key}
                        name={key}
                        placeholder={`Enter ${key}`}
                        value={form[key]}
                        onChange={handleChange}
                        required={["patientName", "email", "dob", "mobile"].includes(key)}
                      />
                    </div>
                  ))}

                  {/* Signature Pad */}
                  <div className="form-group">
                    <label>SIGNATURE (Draw Below)</label>
                    <SignatureCanvas
                      ref={signaturePad}
                      penColor="black"
                      canvasProps={{
                        width: 400,
                        height: 150,
                        className: "signature-canvas",
                      }}
                    />
                    <button type="button" onClick={clearSignature} className="btn-clear-signature">
                      Clear Signature
                    </button>
                  </div>

                  {/* Document Upload */}
                  <div className="form-group">
                    <label htmlFor="documentUpload">UPLOAD DOCUMENT</label>
                    <input
                      type="file"
                      id="documentUpload"
                      name="documentUpload"
                      accept=".pdf,.doc,.docx,image/*"
                      onChange={handleFileChange}
                      required
                    />
                  </div>

                  {status && <p className="form-status">{status}</p>}

                  <div className="btn-wrap">
                    <button type="submit" className="btn">
                      Submit Consent Form
                    </button>
                  </div>
                </form>
                <div className="consent-text">
                  <br/>
                  <p>
                    In cases involving the patient’s medical history, <strong>IV Wellness Lounge Clinic</strong> cannot assume responsibility. The administration of the multivitamin drip is
                    exclusively performed in response to the patient’s specific request.
                  </p>
                  <br/>
                  <p>
                    IV Wellness Lounge Clinic bears no responsibility for any financial consequences that may arise after or during the administration of the IV therapy drip treatment.
                  </p>
                  <br/>
                  <p>
                    IV Hub provides facilities and personnel to assist in the performance of intravenous therapy. You have the right to be informed of the procedure, any feasible alternative
                    options, the risks and benefits. Alternatives to intravenous therapy is oral supplementation and/or dietary and lifestyle changes. Except in emergencies, procedures are not
                    performed until you have had an opportunity to receive such information and to give your informed consent.
                  </p>
                  <br/>
                  <p>
                    IV Hub does not claim any clinical therapeutic outcomes, and results may vary from every individual patient. The procedure involves inserting a needle into your vein or muscle
                    and injecting the formula prescribed by your physician. It will be performed by or under the direction of your physician with qualified healthcare providers.
                  </p>
                  <br/>
                  <h4>Benefits of intravenous therapy include:</h4>
                  <ul>
                    <li>Injectables are not affected by stomach or intestinal disease.</li>
                    <li>Total amount of infusion is available to the tissues.</li>
                    <li>Nutrients are focused into cells by means of a high concentration gradient.</li>
                    <li>Higher doses of nutrients can be given than possible by mouth, without intestinal irritation.</li>
                  </ul>
                  <br/>
                  <h4>Risks of intravenous therapy include:</h4>
                  <ul>
                    <li>Potential risks of pain, discomfort, bruising, infection, or inflammation of the vein/phlebitis at or near the injection site.</li>
                    <li>Severe allergic reaction.</li>
                  </ul>
                  <br/>
                  <p><strong>Serious potential side effects could occur in the following patients:</strong></p>
                  <ul>
                    <li>G6PD deficiency (“Glucose-6-Phosphate Dehydrogenase Deficiency” also known as “Favism”)</li>
                    <li>Chronic Renal Insufficiency / decreased kidney function</li>
                    <li>Congestive Heart Failure and/or Atrial Fibrillation (“A-fib”)</li>
                    <li>Very Low Blood Pressure (e.g., below 90/60 mm Hg, especially with Magnesium IVs)</li>
                    <li>Taking Digoxin or other potassium-depleting drugs, diuretics, beta-agonists, or glucocorticoids</li>
                    <li>Hypokalemic patients (especially with Magnesium IV infusions)</li>
                    <li>Unknown allergies</li>
                    <li>Pregnant women</li>
                  </ul>
                  <br/>
                  <p>
                    You have the right to consent to or refuse any proposed treatment at any time prior to its performance.
                  </p>
                  <br/>
                  <p><strong>Your signature AFFIRMS that:</strong></p>
                  <ul>
                    <li>You understand the information provided on this form and agree to the foregoing.</li>
                    <li>The procedure(s) set forth above has been adequately explained to you by your physician.</li>
                    <li>You have received all the information and explanation you desire concerning the procedure.</li>
                    <li>You authorize and consent to the performance of the procedure(s).</li>
                  </ul>
                  <br/>
                  <p><strong>Person obtaining the consent:</strong></p>
                  <p>(I have read this patient information sheet/consent form to the subject and/or the subject has read this form. I have provided the subject with a copy of the form. An
                  explanation of the research was given and questions from the subject were solicited and answered to the subject's information. A copy of the signed consent form has been
                  provided to the participant).</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentForm;
