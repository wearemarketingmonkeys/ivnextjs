import React from "react";
import { Link } from "react-router-dom";

const CancellationPolicy = () => {
  return (
    <div className="cancellation-page py-5" style={{ margin: "50px auto" }}>
      <div className="container">
        <div className="hero p-5">
          <h1>
            Cancellation Policy for <span>Scheduled Appointments</span>
          </h1>
        </div>
        <br/>
        <p>
          We acknowledge that unforeseen circumstances or urgent commitments may occasionally arise. However, neglecting to notify us and reschedule or cancel your appointment deprives other clients of the opportunity to secure their own appointments, as the slot appears reserved.
          Appointments canceled with less than a 12-hour notice will incur a 100% charge of the reserved appointment fee, and no refund will be processed.
          Failure to attend the appointment will result in the full appointment fee being charged and no refund or rescheduling will be processed.
          <br />
          <br />
          No-shows will be charged in full to the card held on file.
        </p>
        <h2>Late Arrivals</h2>
        <p>
          We understand that delays may occur. However, to ensure that subsequent appointments run smoothly and services remain on schedule, we ask that clients arrive on time. If you arrive more than ten minutes past your scheduled appointment time, we may not be able to accommodate you, and your appointment will be marked as completed without a refund.
        </p>
        <h2>Nurse Deployment Fee</h2>
        <p>
          In the event that an infusion is aborted, the client will be charged 50% of the booking amount. This fee applies under the following circumstances, including but not limited to:
        </p>
        <p>Client Information Disclosure Issues: Nurse dispatched but client is unable to receive the drip because critical information was not disclosed at the time of booking (e.g., alcohol withdrawal, drug abuse).</p>
        <p>Vital Signs Out of Range: Nurse dispatched but client is unable to receive the drip due to vital signs being out of the acceptable range.</p>
        <p>Client's Condition: Nurse dispatched, but the IV is not completed due to the client’s condition (e.g., client could not tolerate the infusion, experienced a vasovagal response and did not wish to continue).</p>
        <p>Time Constraints: Nurse dispatched but IV not completed, although flowing well, due to time constraints. (Client asked the nurse to wait beyond 15 minutes)</p>
        <p>Unsafe or Unsanitary Environment: Nurse dispatched but unable to complete the IV due to an unsafe or unsanitary environment.</p>
        <br/>
        <p>
          This fee will NOT apply if:
        </p>
        <p>Unsuccessful IV Placement: Nurse dispatched but unable to start the IV after three attempts. Note: As per the terms of service, the nurse must be allowed to attempt placement at least three times. If the client chooses not to continue after the first attempt, 50% of the booking fee will apply.</p>
        <br/>
        <p>Additionally, this fee will apply if the client facilitates a hostile or unsafe environment as perceived by the nurse during the visit. This provision does not apply if the session proceeds normally, in which case the client will only be liable for the cost of the service.</p>
        <h2>Cancellation Policy for Prepaid Packages</h2>
        <p>
          At IV Wellness Lounge Clinic we strive to provide the best service possible. However, we understand that sometimes cancellations are unavoidable. Our cancellation policy outlines the terms for refunds and cancellations initiated by clients.
        </p>
        <br/>
        <h3>Cancellation and Refund Policy</h3>
        <p>
          Refunds Within 7 Days of Payment:
        </p>
        <p>- Clients may cancel their booking and request a full refund up to 7 days from the payment date, provided the cancellation is made at least 12 hours before the scheduled booking time.</p>
        <p>- Cancellations made within this period but less than 12 hours before the booking time will not qualify for a refund.</p>
        <p>Refunds Beyond 8 Days and Up to 30 Days:</p>
        <p>- If a cancellation is made after 7 days from the payment date but within 30 days, and the cancellation is beyond the company's jurisdiction (i.e., not due to any fault or issue on the part of IVHub.com), a 50% refund of the payment will be processed.</p>
        <p>- Cancellations made less than 12 hours before the scheduled booking time within this period will not qualify for any refund.</p>
        <p>No Refund Beyond 30 Days:</p>
        <p>- For cancellations made beyond 30 days from the payment date, no refunds will be processed, irrespective of the time before the scheduled booking.</p>
        <br/>
        <p>
          Important Notes:
        </p>
        <p>- All refund requests must be made in writing via our customer service email.</p>
        <p>- Refunds will be processed within 10-14 business days from the date of the cancellation request.</p>
        <p>- This policy applies to all bookings unless otherwise specified in a specific service agreement.</p>
        <p><i>Please note: This policy is established at the discretion of the company, and IV Wellness Lounge Clinic LTD. reserves the right to change or modify it at any time.</i></p>
      </div>
    </div>
  );
};

export default CancellationPolicy;
