"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import FooterLogos from "../components/FooterLogos.jsx";

const initialState = {
  serviceId: "general-consent",

  // patient info
  fullName: "",
  date: "",
  dob: "",
  gender: "",
  contact: "",
  email: "",

  // acknowledgements
  policy1: "",

  // minor / representative
  parentGuardianName: "",
  relationshipToPatient: "",
  representativeDate: "",
  representativeTime: "",

  // doctor / provider
  doctorDate: "",
  doctorTime: "",

  // witness
  witnessName: "",
  witnessDate: "",
  witnessTime: "",
  witnessTelephone: "",
};

export default function ConsentGeneralClient({ cr }) {
  const [form, setForm] = useState(initialState);
  const [suggestions, setSuggestions] = useState([]);
  const [status, setStatus] = useState("");
  const sigRef = useRef(null);
  const parentGuardianSigRef = useRef(null);
  const doctorSigRef = useRef(null);
  const witnessSigRef = useRef(null);

  const crvalue = cr;

  const clinicName =
    crvalue?.toLowerCase() === "palm"
      ? "Dubanya Wellness Aesthetic Clinic FZE"
      : "IV Wellness Lounge Clinic LLC";

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: checked ? value || "yes" : "",
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchPatientSuggestions = async (name) => {
    if (name.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(
        `https://mails.ivhub.com/getgeneral.php?name=${encodeURIComponent(name)}`
      );
      if (!res.ok) return;
      const data = await res.json();
      setSuggestions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const clearSignature = () => sigRef.current?.clear();
  const clearParentGuardianSignature = () => parentGuardianSigRef.current?.clear();
  const clearDoctorSignature = () => doctorSigRef.current?.clear();
  const clearWitnessSignature = () => witnessSigRef.current?.clear();

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const fd = new FormData();

      Object.entries(form).forEach(([k, v]) => {
        fd.append(k, v ?? "");
      });

      fd.append("cr", crvalue || "");

      if (sigRef.current && !sigRef.current.isEmpty()) {
        const blob = await (await fetch(sigRef.current.toDataURL())).blob();
        fd.append("patientSignature", blob, "patient-signature.png");
      }

      if (parentGuardianSigRef.current && !parentGuardianSigRef.current.isEmpty()) {
        const blob = await (await fetch(parentGuardianSigRef.current.toDataURL())).blob();
        fd.append("parentGuardianSignature", blob, "parent-guardian-signature.png");
      }

      if (doctorSigRef.current && !doctorSigRef.current.isEmpty()) {
        const blob = await (await fetch(doctorSigRef.current.toDataURL())).blob();
        fd.append("doctorSignatureStamp", blob, "doctor-signature.png");
      }

      if (witnessSigRef.current && !witnessSigRef.current.isEmpty()) {
        const blob = await (await fetch(witnessSigRef.current.toDataURL())).blob();
        fd.append("witnessSignature", blob, "witness-signature.png");
      }

      // change this endpoint to your new PHP handler
      const res = await fetch("https://mails.ivhub.com/generalconsentemail.php", {
        method: "POST",
        body: fd,
      });

      if (res.ok) {
        setStatus("Form submitted successfully!");
        setForm(initialState);
        clearSignature();
        clearParentGuardianSignature();
        clearDoctorSignature();
        clearWitnessSignature();
        setSuggestions([]);
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error occurred. Please try again.");
    }
  };

  return (
    <form className="form general-consent-form" onSubmit={onSubmit}>
      <input type="hidden" name="cr" value={crvalue || ""} />

      <div className="consent-sheet">

        {/* Top header table */}
        <div className="form-group" style={{ position: "relative" }}>
            <label>
                Patient&apos;s Name / <span dir="rtl">اسم المريض</span>
              </label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={(e) => {
                  onChange(e);
                  fetchPatientSuggestions(e.target.value);
                }}
                placeholder="Patient Name"
                required
                autoComplete="off"
              />
              {suggestions.length > 0 && (
              <ul className="dropdown">
                {suggestions.map((s) => (
                  <li
                    key={s.id}
                    onClick={() => {
                      setForm((prev) => ({
                        ...prev,
                        fullName: s.fullName || "",
                        contact: s.contact || "",
                        email: s.email || "",
                        gender: s.gender || "",
                        dob: s.dob || "",
                        date: s.consentDate || "",
                      }));
                      setSuggestions([]);
                    }}
                  >
                    {s.fullName} ({s.contact})
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="form-group">
            <label>Contact Number / <span dir="rtl">رقم الاتصال</span></label>
            <input name="contact" value={form.contact} onChange={onChange} placeholder="Contact Number" required />
          </div>

          <div className="form-group">
            <label>Email Address / <span dir="rtl">عنوان البريد الإلكتروني</span></label>
            <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email Address" required />
          </div>

          <div className="form-group">
            <label>Date of Birth / <span dir="rtl">تاريخ الميلاد</span></label>
            <input type="date" name="dob" value={form.dob} onChange={onChange} required />
          </div>

          <div className="form-group">
            <label>
                Gender / <span dir="rtl">الجنس</span>
              </label>
              <div className="gender-inline">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={form.gender === "Male"}
                    onChange={onChange}
                    required
                  /> Male <span dir="rtl">ذكر</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={form.gender === "Female"}
                    onChange={onChange}
                    required
                  /> Female <span dir="rtl">أنثى</span>
                </label>
              </div>
          </div>

          <div className="form-group">
            <label>
                Date / <span dir="rtl">التاريخ</span>
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={onChange}
                required
              />
          </div>

        {/* Main bilingual text */}
        <div className="bilingual-body">
          <div className="lang-col english-col">
            <p>
              I hereby authorize {clinicName} medical caregivers to carry out
              medical examination, investigation, medical treatment and
              diagnostic procedures during the course of my care deemed
              advisable or necessary, with no guarantees about the final results
              of the treatment. I consent to paying all charges of the services
              rendered to me according to the facility&apos;s regular price list.
            </p>

            <p>
              I confirm that I am the patient (or the patient&apos;s parent or
              guardian if the patient is under 18 years of age), and I hereby
              consent to and authorize the medical provider, agents, healthcare
              professionals or other relevant administrative establishment to
              provide and discuss any health, treatment, billing, medical
              records or discharge arrangements (past or present) with and to
              the insurer and/or third-party administrator about me and/or any
              of my family members.
            </p>

            <p>
              I agree that the healthcare provider(s) involved in my care at
              this facility will access my health information through the Health
              Information Exchange System (NABIDH) in accordance with the Laws
              of the United Arab Emirates, Emirate of Dubai legislation and
              Dubai Health Authority policies.
            </p>

            <p>
              I agree to be examined or treated by a worker from the opposite
              sex without a third witness in the room so long as the facility
              respects my privacy as much as my treatment and care allow, and I
              am treated with respect, dignity and courtesy at all times without
              abuse or harassment.
            </p>

            <p>
              I also understand that the medical expenses
              coverage is as per stipulated terms and conditions
              in insurance policy and if there is any excess,
              charges, expenses not covered in the policy, I
              hereby agree that it will be paid/bare by me/my
              dependents/or others. I agree that a copy of this
              consent shall have the validity of the original.
            </p>

            <p>
              I received a copy of Bill of Patient &amp; Family
              Rights and Responsibilities, and it has been
              explained by the facility staff.
            </p>
          </div>

          <div className="lang-col arabic-col" dir="rtl">
            <p>
              أنا الموقع أدناه أفوض مقدمي الرعاية الصحية في عيادة {clinicName}،
              ومساعديهم، والعاملين التابعين لهم للقيام بالفحوصات الطبية
              والاستقصاءات الشاملة، وكذلك الإجراءات التشخيصية والعلاجية، والتي
              قد يعتبرونها ضرورية دون ضمان النتائج النهائية للعلاج.
            </p>

            <p>
              كما أنني أوافق وألتزم بدفع جميع الأجور والمصاريف المستحقة كاملة عن
              علاجي في المنشأة.
            </p>

            <p>
              أؤكد أنني المريض الموقع أدناه أو أحد والديه إذا كان عمر المريض أقل
              من 18 سنة، وأفوض مقدم الخدمة الصحية ووكلاهم والأطباء لديهم أو أي
              جهة صحية أو إدارية تابعة لهم بتقديم أو مناقشة أي تفاصيل علاج أو
              ملف صحي أو تفاصيل الفواتير أو ترتيبات الخروج الخاصة بي مع شركة
              التأمين أو من ينوب عنها بما يخص حالتي الصحية أو أي من أفراد أسرتي.
            </p>

            <p>
              أوافق بأن يقوم مزاولي المهن الصحية المشرفين على تقديم خدمات
              الرعاية الصحية في هذه المنشأة بالاطلاع على معلوماتي الصحية في نظام
              تبادل المعلومات الصحية (نابض) وفقًا للتشريعات السارية في دولة
              الإمارات العربية المتحدة بشكل عام وإمارة دبي بشكل خاص بما فيها
              القرارات الصادرة عن هيئة الصحة في دبي.
            </p>

            <p>
              أوافق على أن يتم فحصي أو معالجتي من قبل عامل من الجنس الآخر دون
              وجود شاهد ثالث في الغرفة طالما أن المنشأة تحترم خصوصيتي بقدر ما
              يسمح به علاجي ورعايتي، وأن أُعامل باحترام وكرامة ولطف في جميع
              الأوقات دون إساءة أو مضايقة.
            </p>

            <p>
              أُقر أنني قد اطلعت على وثيقة التأمين الطبي الخاصة بي، وأتفهم
              الشروط والأحكام الواردة فيها. وفي حال عدم وجود تأمين أو عدم تغطية
              الرسوم من قبل وثيقة التأمين، فأنا أوافق على تحمل هذه التكاليف
              بنفسي أو من قبل أقاربي أو آخرين نيابة عني.
            </p>

            <p>
              أقر بأن صورة من هذا الإقرار لها نفس صلاحية النسخة الأصلية.
            </p>

            <p>
              وقد تم شرح مضمون هذه الموافقة كما أنني أقر بأنني استلمت نسخة من حقوق
              وواجبات المريض وتم شرحها لي من قبل موظفي المنشأة.
            </p>
          </div>
        </div>

        <br/>
        {/* Policy */}
        <div className="form-group">
          <label className="check-item">
            <input
              type="checkbox"
              name="policy1"
              checked={!!form.policy1}
              value="I have read and agree to the Cancellation and Refund Policy"
              onChange={onChange}
              required
            />
            I have read and agree to the{" "}
            <a href="https://ivhub.com/cancellation-policy" target="_blank" rel="noreferrer">
              <b>Cancellation and Refund Policy</b>
            </a>
          </label>
        </div>

        {/* Signature */}
        <div className="form-group">
          <label>Patient Signature / <span dir="rtl">توقيع المريض</span></label>
          <div className="signature-wrap">
            <SignatureCanvas
              ref={sigRef}
              canvasProps={{
                width: 520,
                height: 200,
                className: "signature-canvas",
              }}
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

        <div className="dual-signoff-section">
          <div className="dual-signoff-header">
            <div className="dual-cell">
              If the patient is Minor or if this consent is signed by a Personal
              Representative on behalf of the patient, please complete the following.
            </div>
            <div className="dual-cell arabic-col" dir="rtl">
              إذا كان المريض قاصراً أو تم توقيع هذا الإقرار من قبل ممثل شخصي نيابةً عن
              المريض، الرجاء إكمال التالي:
            </div>
          </div>
        </div>

        <div className="dual-signoff-section">
          <div className="form-group">
            <label>
              Signature of Parent, Guardian or Next of Kin /{" "}
              <span dir="rtl">توقيع أحد الوالدين، الوصي، القريب</span>
            </label>
            <div className="signature-wrap">
              <SignatureCanvas
                ref={parentGuardianSigRef}
                canvasProps={{
                  width: 520,
                  height: 200,
                  className: "signature-canvas",
                }}
              />
            </div>
            <button
              type="button"
              className="btn btn-stroke"
              onClick={clearParentGuardianSignature}
              style={{ marginTop: 8 }}
            >
              Clear Signature
            </button>
          </div>

          <div className="form-group">
            <label>
              Parent of Patient, Guardian or Next of Kin Name /{" "}
              <span dir="rtl">الاسم بالكامل</span>
            </label>
            <input
              name="parentGuardianName"
              value={form.parentGuardianName}
              onChange={onChange}
              placeholder="Parent / Guardian / Next of Kin Name / الاسم بالكامل"
            />
          </div>

          <div className="form-group">
            <label>
              Relationship to Patient / <span dir="rtl">صلة القرابة بالمريض</span>
            </label>
            <input
              name="relationshipToPatient"
              value={form.relationshipToPatient}
              onChange={onChange}
              placeholder="Relationship to Patient / صلة القرابة بالمريض"
            />
          </div>

          <div className="dual-row two-cols">
            <div className="form-group">
              <label>
                Date / <span dir="rtl">التاريخ</span>
              </label>
              <input
                type="date"
                name="representativeDate"
                value={form.representativeDate}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label>
                Time / <span dir="rtl">الوقت</span>
              </label>
              <input
                type="time"
                name="representativeTime"
                value={form.representativeTime}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>
              Doctor / healthcare provider Sign and stamp /{" "}
              <span dir="rtl">توقيع وختم الطبيب / مقدم الرعاية الصحية</span>
            </label>
            <div className="signature-wrap">
              <SignatureCanvas
                ref={doctorSigRef}
                canvasProps={{
                  width: 520,
                  height: 200,
                  className: "signature-canvas",
                }}
              />
            </div>
            <button
              type="button"
              className="btn btn-stroke"
              onClick={clearDoctorSignature}
              style={{ marginTop: 8 }}
            >
              Clear Signature
            </button>
          </div>

          <div className="dual-row two-cols">
            <div className="form-group">
              <label>
                Date / <span dir="rtl">التاريخ</span>
              </label>
              <input
                type="date"
                name="doctorDate"
                value={form.doctorDate}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label>
                Time / <span dir="rtl">الوقت</span>
              </label>
              <input
                type="time"
                name="doctorTime"
                value={form.doctorTime}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-group">
            <h2>
              Witness / <span dir="rtl">الشاهد</span>
            </h2>
          </div>

          <div className="form-group">
            <label>
              Name / <span dir="rtl">الاسم</span>
            </label>
            <input
              name="witnessName"
              value={form.witnessName}
              onChange={onChange}
              placeholder="Name / الاسم"
            />
          </div>

          <div className="form-group">
            <label>
              Signature / <span dir="rtl">التوقيع</span>
            </label>
            <div className="signature-wrap">
              <SignatureCanvas
                ref={witnessSigRef}
                canvasProps={{
                  width: 520,
                  height: 200,
                  className: "signature-canvas",
                }}
              />
            </div>
            <button
              type="button"
              className="btn btn-stroke"
              onClick={clearWitnessSignature}
              style={{ marginTop: 8 }}
            >
              Clear Signature
            </button>
          </div>

          <div className="dual-row two-cols">
            <div className="form-group">
              <label>
                Date / <span dir="rtl">التاريخ</span>
              </label>
              <input
                type="date"
                name="witnessDate"
                value={form.witnessDate}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label>
                Time / <span dir="rtl">الوقت</span>
              </label>
              <input
                type="time"
                name="witnessTime"
                value={form.witnessTime}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>
              Telephone No. / <span dir="rtl">رقم الهاتف</span>
            </label>
            <input
              name="witnessTelephone"
              value={form.witnessTelephone}
              onChange={onChange}
              placeholder="Telephone No. / رقم الهاتف"
            />
          </div>
        </div>

        <FooterLogos />
        {status && <p className="form-status">{status}</p>}

        <div className="btn-wrap">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}