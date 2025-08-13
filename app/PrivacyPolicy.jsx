import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="privacypolicy-page py-5" style={{ margin: "50px auto" }}>
      <div className="container">
        <div className="hero p-5">
          <h1>Privacy Policy</h1>
        </div>

        <p>
          <strong>At IV Hub (accessible from ivhub.com),</strong> we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and your rights regarding your data.
        </p>
        <br/>
        <p><strong>1. Information We Collect</strong></p>
        <p><strong>a. Personal Information</strong></p>
        <p>When you use our website or services, we may collect the following types of personal data:</p>
        <ul>
          <li>Contact Details: Name, email address, phone number.</li>
          <li>Health Information: Medical history or relevant health details provided through consultation forms (with your consent).</li>
          <li>Payment Information: Billing address, credit/debit card details (processed securely via third-party payment processors).</li>
          <li>Appointment Details: Booking history, service preferences.</li>
        </ul>
        <br/>
        <p><strong>b. Non-Personal Information</strong></p>
        <p>We may collect non-identifiable information including:</p>
        <ul>
          <li>IP Address, browser type, device details.</li>
          <li>Website usage data (pages visited, time spent, links clicked).</li>
          <li>Cookies and tracking technologies.</li>
        </ul>
        <br/>
        <p><strong>2. How We Use Your Information</strong></p>
        <ul>
          <li>To provide and personalize our IV therapy and wellness services.</li>
          <li>To process transactions and manage appointments.</li>
          <li>To respond to inquiries, feedback, or support requests.</li>
          <li>To improve website functionality and user experience.</li>
          <li>For marketing purposes (with your consent), including promotions and service updates.</li>
          <li>To comply with legal obligations and protect our legal rights.</li>
        </ul>
        <br/>
        <p><strong>3. Sharing Your Information</strong></p>
        <p>We respect your privacy and do not sell or rent your personal information. However, we may share your data with:</p>
        <ul>
          <li>Service Providers: Third parties who assist with payment processing, IT services, marketing, and analytics.</li>
          <li>Medical Professionals: In cases where health-related information is necessary for treatment.</li>
          <li>Legal Authorities: When required by law or in response to legal requests.</li>
        </ul>
        <br/>
        <p><strong>4. Data Retention</strong></p>
        <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws.</p>
        <br/>
        <p><strong>5. Your Rights</strong></p>
        <p>You have the following rights regarding your personal information:</p>
        <ul>
          <li>Access: Request a copy of the data we hold about you.</li>
          <li>Correction: Request correction of inaccurate or incomplete data.</li>
          <li>Deletion: Request deletion of your data where it is no longer necessary.</li>
          <li>Objection: Object to certain uses of your data (e.g., direct marketing).</li>
          <li>Withdrawal of Consent: Withdraw your consent at any time where processing is based on consent.</li>
        </ul>
        <br/>
        <p>To exercise any of these rights, please contact us at <strong>hello@ivhub.com</strong>.</p>
        <br/>
        <p><strong>6. Security of Your Data</strong></p>
        <p>We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.</p>
        <br/>
        <p><strong>7. Cookies and Tracking Technologies</strong></p>
        <p>We use cookies to enhance your experience on our website. Cookies help us understand user behavior and improve our content. You can manage or disable cookies through your browser settings.</p>
        <br/>
        <p><strong>8. Third-Party Links</strong></p>
        <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these websites. We encourage you to read their privacy policies.</p>
        <br/>
        <p><strong>9. Changes to This Policy</strong></p>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated “Effective Date.” We encourage you to review this policy periodically.</p>
        <br/>
        <p><strong>10. Contact Us</strong></p>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <p>
          IV Hub<br />
          Email: <strong>hello@ivhub.com</strong><br />
          Phone: <strong>+971 800 48482</strong><br />
          Address: <strong>GATE DISTRICT 2, DIFC, DUBAI</strong>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;