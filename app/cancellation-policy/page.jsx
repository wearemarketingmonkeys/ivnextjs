// app/cancellation-policy/page.jsx
// (Server Component — no "use client")

export const metadata = {
  title: 'Cancellation Policy | IV Wellness Lounge Clinic in Dubai',
  description:
    'Review IV Wellness Lounge Clinic’s appointment & cancellation terms. Understand notice requirements, fees & refund eligibility before you book your session.',
  alternates: { canonical: 'https://ivhub.com/cancellation-policy' },
  openGraph: {
    title: 'Cancellation Policy | IV Wellness Lounge Clinic in Dubai',
    description:
      'Review IV Wellness Lounge Clinic’s appointment & cancellation terms. Understand notice requirements, fees & refund eligibility before you book your session.',
    url: 'https://ivhub.com/cancellation-policy',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancellation Policy | IV Wellness Lounge Clinic in Dubai',
    description:
      'Review IV Wellness Lounge Clinic’s appointment & cancellation terms. Understand notice requirements, fees & refund eligibility before you book your session.',
    images: ['https://ivhub.com/og.png'],
  },
};

export default function CancellationPolicy() {
  return (
    <main className="cancellation-page py-5" style={{ margin: '50px auto' }}>
      <div className="container">
        <header className="hero p-5">
          <h1>
            Cancellation Policy for <span>Scheduled Appointments</span>
          </h1>
        </header>

        <h2>At IV Wellness Lounge Clinic, we are committed to providing the highest quality care and services to our clients.</h2>
        <p>We understand that unforeseen circumstances may arise and sometimes appointments need to be changed or canceled. To ensure transparency and fairness for all clients, we have outlined our cancellation and refund policy in detail below. This policy explains the terms for cancellations, refunds, and the validity of prepaid packages. While we strive to be understanding and accommodating, please note that these rules are in place to protect the time of our medical staff and other clients awaiting appointments.</p>
        <br/>
        <h2>Appointment Cancellation & No-Show Policy</h2>
        <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
          <li>If you need to cancel or reschedule an appointment, please provide at least 12 hours advance notice before your scheduled appointment time. Timely notice allows us to offer that slot to other clients in need.</li>
          <li>Cancellations made with less than 12 hours’ notice are considered late cancellations. In the case of a late cancellation or failure to show up for your appointment (no-show), 100% of the appointment fee will be charged and no refund will be issued. In other words, last-minute cancellations and no-shows forfeit the service fee in full. This policy exists because a slot canceled on short notice cannot easily be filled, which deprives other clients of the opportunity to use that time. If you have a credit card on file with us, it will be charged the full fee for late cancellations or no-shows.</li>
          <li>We ask that clients arrive on time for appointments to ensure our schedule runs smoothly. If you arrive more than 10 minutes past your scheduled appointment time, we may not be able to accommodate you without delaying other clients’ appointments. In such cases, your appointment may be marked as a no-show and treated as completed without a refund. Please plan to arrive a few minutes early to check in, so you can receive your full treatment time.</li>
          <li>If your appointment was part of a prepaid package or bundle and you cancel late or do not show up, that session will count as used. The missed session will be deducted from your package with no credit or refund, as if the service had been rendered. This ensures fairness and encourages adherence to the scheduling policy.</li>
          <li>In the rare event that IV Wellness Lounge Clinic must cancel or reschedule your appointment due to an issue on our end, we will notify you as soon as possible. You will be given the option to reschedule the appointment at no additional cost or receive a full refund for any pre-paid amount, according to your preference. We apologize in advance for any inconvenience such a situation may cause, and we will make every effort to accommodate you promptly.</li>
        </ul>
        <br/>
        <h2>Nurse Deployment Fee</h2>
        <p>For IV therapy appointments, even where a nurse is dispatched to your location, additional terms apply to cover situations where the service cannot be completed after the nurse has been dispatched:</p>
        <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
          <li>If a nurse arrives for a scheduled infusion and the treatment cannot be completed due to client-related factors, a 50% service fee (half of the booking amount) will be charged as a Nurse Deployment Fee. This fee covers the nurse’s time and the resources deployed. Examples of situations where this fee applies include, but are not limited to:</li>
          <li>Critical health information was not disclosed during booking and the client is deemed unsuitable for the IV treatment upon nurse’s arrival.</li>
          <li>The client’s vital signs are outside the safe range for treatment, leading the nurse to cancel the procedure for safety reasons.</li>
          <li>The client cannot tolerate the IV or asks to stop the infusion early</li>
          <li>The nurse arrives to find an unsafe or unsanitary environment that prevents setup, or the client causes excessive delays (e.g. asks the nurse to wait an extended time beyond the scheduled start).</li>
          <li>The Client refuses to sign the Consent form</li>
          <li>This 50% Nurse Deployment Fee will not be charged if the nurse is unable to complete the IV due to issues outside the client’s control and no fault of the client.</li>
        </ul>
        <br/>
        <h2>Refund Policy – Timeframes and Eligibility</h2>
        <p>We offer refunds for prepaid bookings or packages under certain conditions, depending on how much time has passed since the original payment. Below are the refund eligibility terms:</p>
        <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
          <li>If you wish to cancel a pre-paid service or package, you may receive a 100% refund of the amount paid provided the cancellation request is made within 7 days of the original purchase/payment date and at least 12 hours before any scheduled service time. In other words, within the first week of purchase you can change your mind and get a full refund as long as you haven’t waited until the last minute before an appointment. Note: If you cancel within this 7-day window but give less than 12 hours notice before the appointment start, it will be treated as a late cancellation and no refund will be granted despite being within 7 days (the late cancellation policy overrides the refund window in that case).</li>
          <li>For cancellation requests made after 7 days but within 30 days of the original payment, you may receive a 50% refund of the amount paid. This partial refund is provided if the cancellation is initiated by the client for personal reasons (i.e. not due to any fault or service issue caused by IV Wellness Lounge Clinic). The request must still be made with more than 12 hours remaining before any scheduled appointment to qualify. If a cancellation in this 8–30 day period is made with less than 12 hours notice before the appointment, no refund will be issued (same late cancellation rule applies).</li>
          <li>If you request a cancellation more than 30 days after the original purchase date, no refund will be processed. Beyond 30 days, all payments are considered final and any unused services or sessions are non-refundable. Please be aware of this timeline when purchasing packages or booking far in advance. (The only potential exception would be if IV Wellness Lounge Clinic itself had to cancel your service and could not reschedule it, in which case we would of course make appropriate refund arrangements — but client-initiated cancellations after 30 days do not qualify for refunds.)</li>
        </ul>
        <br/>
        <p>Please Note - The refund timeframes above apply to both individual pre-paid sessions and multi-session package purchases. If you have started using a package and then decide to cancel the remainder within the eligible window, the refund (full or 50%) would generally apply only to the unused portion of the package, calculated based on the package price. Any sessions already used will be deducted from the refundable amount, and any promotional pricing or discounts on the package will be factored in when calculating the refund for unused sessions (this ensures the refund is pro-rated fairly). IV Wellness Lounge Clinic reserves the right to make the final determination of the refund amount in such cases. After 30 days, no refunds or credits will be issued for any unused package sessions remaining.</p>
        <br/>
        <h2>Prepaid Packages – Validity and Terms</h2>
        <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
          <li>All prepaid packages or bundles of sessions are valid for 12 months (1 year) from the date of purchase. Clients are expected to utilize the services in their package within this one-year period. You may schedule your sessions at any time during the 12 months, or let us know your intended schedule upfront. Any sessions not used within 12 months of purchase will expire and be considered void – they will not be eligible for any refund or credit once the validity period has passed.</li>
          <li>Prepaid package sessions are non-transferable. Packages are tied to the individual who purchased them and cannot be transferred or shared with other people unless explicitly authorized by the clinic in writing. This policy ensures the integrity of package pricing (which is often discounted for the individual user’s benefit) and prevents misuse of package deals.</li>
          <li>Except for the refund conditions outlined in Section 3 above (cancellation within 30 days of purchase), prepaid packages are otherwise non-refundable. If you choose not to use some or all of the sessions in your package and more than 30 days have passed since purchase, those unused sessions have no refund value. We encourage you to book your treatments well in advance and make use of your package to get the full benefit. Our team can help you plan your appointments to ensure you utilize all sessions before expiration.</li>
          <li>If you need to reschedule a session from your package, please do so with at least 12 hours notice, following the standard cancellation policy. Rescheduling with proper notice will preserve that session for future use. Late cancellation of a package session (under 12 hours notice) will result in that session being deducted from your package as if it were rendered (no carry-over or refund) – see the No-Show Policy in Section 1.</li>
        </ul>
        <br/>
        <h2>Service Results Disclaimer</h2>
        <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
          <li>IV Wellness Lounge Clinic provides wellness and medical services (such as IV drips and treatments) with the goal of improving clients’ well-being. However, individual results will vary from person to person. We do not guarantee specific outcomes or particular results from any of our services, as many factors (health status, genetics, lifestyle, hydration, etc.) influence how you respond to a treatment. Consequently, dissatisfaction with the results or perceived lack of improvement is not grounds for a refund on services rendered. Our practitioners will do their best to set appropriate expectations and deliver quality care, but by proceeding with a treatment you acknowledge that results are not assured. We encourage clients to discuss any concerns or questions about a treatment’s expected benefits during the consultation stage, before services are provided. (This results policy aligns with standard practices in wellness and medical services – for instance, other therapy providers also do not offer refunds solely for unsatisfactory outcomes. We stand by the quality of our services and will work with you to achieve the best possible results, but we cannot promise a specific outcome for every individual.)</li>
        </ul>
        <br/>
        <h1>Peptide Orders – Special Order, Research Use Acknowledgment & Non-Refundable Policy</h1>
        <p>Certain peptide products offered by IV Wellness Lounge may be ordered, prepared, sourced, compounded, or allocated specifically upon a client’s request and according to the selected protocol, dosage requirements, or practitioner recommendation. Due to the customized nature of such orders, and in light of applicable hygiene, storage, handling, and medical safety requirements, all peptide orders are final and strictly non-refundable once the order has been confirmed, processed, prepared, allocated, or dispatched, whichever occurs first.</p>
        <br/>
        <p>By requesting, purchasing, or proceeding with any peptide-related order, the client expressly acknowledges and agrees to the following:</p>
        <ol style={{ marginTop: '20px', paddingLeft: '20px' }}>
          <li><b>Custom Order Basis</b> - Peptide products are treated as special-order or custom-prepared items. Once an order
          has been confirmed, IV Wellness Lounge may immediately begin procurement, preparation, handling,
          labeling, storage, or internal allocation processes. For this reason, peptide orders cannot be canceled,
          returned, exchanged, credited, or refunded after confirmation, including in cases of change of mind,
          postponed treatment, discontinued treatment, scheduling conflicts, or a decision not to proceed</li>
          <li><b>Research / Investigational Use Acknowledgment</b> - The client acknowledges and agrees that any peptide
          products supplied by IV Wellness Lounge are provided on a research-use and/or investigational basis only,
          as applicable to the relevant product and protocol. By placing an order, the client confirms that they
          understand and accept this condition and assume full responsibility for their decision to request such products</li>
          <li><b>No Refund After Confirmation</b> - Once a peptide order is confirmed, processed, prepared, or reserved, no
          refund will be issued under any circumstances, except where required by applicable law or where IV
          Wellness Lounge, in its sole discretion, is unable to fulfill the order for reasons solely attributable to IV
          Wellness Lounge.</li>
          <li><b>No Return or Reuse</b> - For hygiene, quality assurance, handling, and safety reasons, peptide products that
          have been prepared, dispensed, stored, transported, or released for a specific client may not be returned to
          stock, reissued, or reused, and therefore cannot be accepted back for refund or exchange.</li>
          <li><b>Client Responsibility</b> - The client is solely responsible for ensuring that they wish to proceed before
          confirming the order. This includes responsibility for reviewing pricing, protocol selection, dosage
          requirements, booking status, and any scheduling considerations in advance.</li>
          <li><b>Refusal, Postponement, or Discontinuation</b> - If a client later postpones treatment, declines administration,
          discontinues the protocol, fails to attend the appointment, becomes medically unsuitable, or otherwise elects
          not to proceed after the peptide order has been confirmed, the order will remain non-refundable and nontransferable.</li>
          <li><b>Limitation of Liability</b><br/>
          IV Wellness Lounge shall not be liable for any loss, claim, cost, or damage arising out of or related to:
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>the client’s change of mind,</li>
              <li>misunderstanding of the intended basis of supply,</li>
              <li>discontinuation of treatment,</li>
              <li>postponement of appointments,</li>
              <li>or any use, misuse, interpretation, or application of peptide products outside their intended research or investigational context</li>
            </ul>            
          </li>
          <li><b>Regulatory, Clinical, and Safety Compliance</b> - IV Wellness Lounge reserves the right to enforce this policy
          strictly in accordance with applicable healthcare safety protocols, hygiene standards, storage requirements,
          handling procedures, and regulatory compliance obligations. Where necessary, IV Wellness Lounge may
          also decline to release, administer, or proceed with a peptide-related service if doing so would be inconsistent
          with clinical judgment, internal policy, or legal/regulatory requirements</li>
        </ol>
        <br/>
        <h1>General Terms and Conditions</h1>
        <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
          <li>All cancellation or refund requests must be submitted in writing. The easiest way is to email our official customer service address (as provided on our website/contact page) with your name, appointment details, and request. You may also use our contact form. This written record is required for us to process your request and for mutual documentation. (Verbal or phone requests will be referred to email or written confirmation to ensure accuracy</li>
          <li>Approved refunds will be processed within 10–14 business days from the date we acknowledge your cancellation/refund request. The refund will be issued to the original payment method used (e.g. the same credit card or bank account). Please note that it may take a few additional days for your bank or credit card company to post the refunded amount to your account, depending on their processing times.</li>
          <li>This cancellation and refund policy applies to all services, appointments, and prepaid packages offered by IV Wellness Lounge Clinic, unless otherwise specified in a separate contract or agreement for a particular service. For example, if a specific promotional package or corporate wellness program has its own cancellation terms in a written agreement, those specific terms will take precedence for that program. In the absence of any special agreement, the terms in this policy govern all transactions.</li>
          <li>IV Wellness Lounge Clinic Ltd. reserves the right to update or modify this Cancellation and Refund Policy at any time, without prior notice. Updates will be posted on our website. We encourage clients to review the policy periodically to stay informed of any changes. The policy in effect at the time of your booking will generally govern that booking’s terms, but newer versions will apply to new bookings going forward. We will make an effort to communicate major changes to this policy to our clients when feasible.</li>
          <li>By scheduling an appointment, purchasing a service, or buying a package at IV Wellness Lounge Clinic, you indicate your understanding and acceptance of this Cancellation and Refund Policy in full. If you have any questions about the policy or how it applies in a certain scenario, please contact us before making your booking, and we will be happy to clarify. Proceeding with a booking signifies that you agree to abide by these terms (including any applicable fees for late cancellation or no-show) as a condition of receiving our services.</li>
        </ul>
        <br/>
        <p>If you have any questions or need to discuss an exceptional circumstance regarding cancellations or refunds, please reach out to our customer service team. We value our clients and will do our best to address your concerns while upholding the policies above.</p>
        <p>IV Wellness Lounge Team</p>
      </div>
    </main>
  );
}
