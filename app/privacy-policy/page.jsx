// app/privacy-policy/page.jsx
// Server Component — no "use client"

export const metadata = {
  title: 'Privacy Policy | IV Wellness Lounge',
  description:
    'Learn how IV Wellness Lounge (ivhub.com) collects, uses, shares, and protects your personal data, and how to exercise your privacy rights.',
  alternates: { canonical: 'https://ivhub.com/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | IV Wellness Lounge',
    description:
      'Details on data we collect, how it’s used, sharing, retention, security, cookies, third-party links, and your privacy rights.',
    url: 'https://ivhub.com/privacy-policy',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | IV Wellness Lounge',
    description:
      'Details on data we collect, how it’s used, sharing, retention, security, cookies, third-party links, and your privacy rights.',
    images: ['https://ivhub.com/og.png'],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="privacypolicy-page py-5" style={{ margin: '50px auto' }}>
      <div className="container">
        <header className="hero p-5">
          <h1>Privacy Policy</h1>
        </header>

        <p>
          <strong>At IV Hub (accessible from ivhub.com),</strong> we are committed to protecting
          your privacy and safeguarding your personal information. This Privacy Policy outlines the
          types of information we collect, how we use it, and your rights regarding your data.
        </p>
        <br/>
        <h2>1. Information We Collect</h2>
        <h3>a. Personal Information</h3>
        <p>When you use our website or services, we may collect the following types of personal data:</p>
        <ul>
          <li>Contact Details: Name, email address, phone number.</li>
          <li>
            Health Information: Medical history or relevant health details provided through
            consultation forms (with your consent).
          </li>
          <li>
            Payment Information: Billing address, credit/debit card details (processed securely via
            third-party payment processors).
          </li>
          <li>Appointment Details: Booking history, service preferences.</li>
        </ul>

        <h3>b. Non-Personal Information</h3>
        <p>We may collect non-identifiable information including:</p>
        <ul>
          <li>IP Address, browser type, device details.</li>
          <li>Website usage data (pages visited, time spent, links clicked).</li>
          <li>Cookies and tracking technologies.</li>
        </ul>
        <br/>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide and personalize our IV therapy and wellness services.</li>
          <li>To process transactions and manage appointments.</li>
          <li>To respond to inquiries, feedback, or support requests.</li>
          <li>To improve website functionality and user experience.</li>
          <li>For marketing purposes (with your consent), including promotions and service updates.</li>
          <li>To comply with legal obligations and protect our legal rights.</li>
        </ul>
        <br/>
        <h2>3. Sharing Your Information</h2>
        <p>We respect your privacy and do not sell or rent your personal information. However, we may share your data with:</p>
        <ul>
          <li>
            Service Providers: Third parties who assist with payment processing, IT services,
            marketing, and analytics.
          </li>
          <li>Medical Professionals: When health-related information is necessary for treatment.</li>
          <li>Legal Authorities: When required by law or in response to legal requests.</li>
        </ul>
        <br/>
        <h2>4. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes for which it
          was collected, or as required by applicable laws.
        </p>
        <br/>
        <h2>5. Your Rights</h2>
        <p>You have the following rights regarding your personal information:</p>
        <ul>
          <li>Access: Request a copy of the data we hold about you.</li>
          <li>Correction: Request correction of inaccurate or incomplete data.</li>
          <li>Deletion: Request deletion of your data where it is no longer necessary.</li>
          <li>Objection: Object to certain uses of your data (e.g., direct marketing).</li>
          <li>Withdrawal of Consent: Withdraw your consent at any time where processing is based on consent.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at <strong>hello@ivhub.com</strong>.
        </p>
        <br/>
        <h2>6. Security of Your Data</h2>
        <p>
          We implement industry-standard security measures to protect your personal data from
          unauthorized access, alteration, disclosure, or destruction.
        </p>
        <br/>
        <h2>7. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies to enhance your experience on our website. Cookies help us understand user
          behavior and improve our content. You can manage or disable cookies through your browser
          settings.
        </p>
        <br/>
        <h2>8. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not responsible for the privacy
          practices or content of these websites. We encourage you to read their privacy policies.
        </p>
        <br/>
        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated “Effective Date.” We encourage you to review this policy periodically.
        </p>
        <br/>
        <h2>10. Contact Us</h2>
        <div>
          IV Wellness Lounge Clinic
          <br />
          Email: <strong>hello@ivhub.com</strong>
          <br />
          Phone: <strong>+971 800 48482</strong>
          <br />
          Address: <strong>GATE DISTRICT 2, DIFC, DUBAI</strong>
        </div>
      </div>
    </main>
  );
}
