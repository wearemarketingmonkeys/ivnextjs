// app/career/page.jsx
'use client';

import React, { useState } from 'react';
import { FaRegClock } from 'react-icons/fa';

export default function CareerClient() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    position: '',
    salary: '',
    message: '',
    cv: null,
    license: null,
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFormData((prev) => ({ ...prev, [id]: files?.[0] || null }));
  };

  const isPdf = (file) => file && file.type === 'application/pdf';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Form is submitting...');
    setIsSubmitting(true);

    const { name, contact, email, position, salary, message, cv, license } = formData;

    // Required checks (match your original logic)
    if (!name || !contact || !email || !position || !message || !cv) {
      setStatus('Please fill in all required fields and upload your CV.');
      setIsSubmitting(false);
      return;
    }

    if (!isPdf(cv)) {
      setStatus('CV must be a PDF file.');
      setIsSubmitting(false);
      return;
    }

    if (license && !isPdf(license)) {
      setStatus('License certificate must be a PDF file.');
      setIsSubmitting(false);
      return;
    }

    const data = new FormData();
    data.append('name', name);
    data.append('contact', contact);
    data.append('email', email);
    data.append('position', position);
    data.append('salary', salary);
    data.append('message', message);
    data.append('cv', cv, cv.name);
    if (license) data.append('license', license, license.name);

    // Same endpoint you used before
    const actionUrl = 'https://mails.ivhub.com/hire.php';

    try {
      const response = await fetch(actionUrl, { method: 'POST', body: data });
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const result = await response.json();
        setStatus(
          result.message ||
            (result.success ? 'Message sent successfully!' : 'Failed to send message.')
        );
        if (result.success) {
          setFormData({
            name: '',
            contact: '',
            email: '',
            position: '',
            salary: '',
            message: '',
            cv: null,
            license: null,
          });
        }
      } else {
        setStatus('Unexpected server response. Please contact support.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('An error occurred. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-us">
      {/* HERO */}
      <div className="contact-hero">
        {/* Move hero.webp to /public/assets/img/contact/hero.webp */}
        <img className="hero-img" src="/assets/img/contact/hero.webp" alt="Careers hero" />
        <div className="overlay" />
        <div className="hero-wrapper">
          <div className="container">
            <div className="hero-wrap">
              <div className="left">
                <span className="text-light">Ready to build your career with us?</span>
              </div>
              <div className="right">
                <FaRegClock />
                <div className="txt">
                  <span>Everyday:</span>
                  <span>10 am - 10 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* FORM */}
      <div className="contact-form">
        <div className="container">
          <div className="form-wrapper">
            <div className="heading">
              <h1>Join Us</h1>
            </div>

            <div className="form-wrap">
              <div className="left">
                <h2 className="text-light">
                  Fill the form and submit. We&apos;ll get back to you soon!
                </h2>
              </div>

              <div className="right">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">
                      NAME <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact">
                      CONTACT NUMBER <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      placeholder="Enter contact number"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      EMAIL ADDRESS <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="position">
                      POSITION <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="position"
                      placeholder="Enter the position you’re applying for"
                      value={formData.position}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="salary">EXPECTED SALARY</label>
                    <input
                      type="text"
                      id="salary"
                      placeholder="Enter the expected salary"
                      value={formData.salary}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cv">
                      CV (PDF only) <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="file"
                      id="cv"
                      accept="application/pdf"
                      onChange={handleFileChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="license">DHA/Certification (If applicable)</label>
                    <input
                      type="file"
                      id="license"
                      accept="application/pdf"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">COVER LETTER (Max 1000 words)</label>
                    <textarea
                      id="message"
                      placeholder="Your cover letter (Max 1000 words)"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {status && <p className="form-status">{status}</p>}

                  <div className="btn-wrap">
                    <button type="submit" className="btn" disabled={isSubmitting}>
                      {isSubmitting ? 'Please wait...' : 'Send now'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
