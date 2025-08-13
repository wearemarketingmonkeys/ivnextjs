'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaRegClock, FaLocationArrow } from 'react-icons/fa';
import { PiWhatsappLogoLight } from 'react-icons/pi';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { RiFacebookCircleLine, RiTwitterLine, RiInstagramLine, RiDribbbleLine } from 'react-icons/ri';

const HERO_IMG = '/assets/img/contact/hero.webp';

const socialLinks = [
  { icon: <RiFacebookCircleLine />, url: 'https://facebook.com' },
  { icon: <RiTwitterLine />, url: 'https://twitter.com' },
  { icon: <RiInstagramLine />, url: 'https://instagram.com' },
  { icon: <RiDribbbleLine />, url: 'https://dribbble.com' },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', subject: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData((s) => ({ ...s, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, subject, email, message } = formData;
    if (!name || !subject || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }
    try {
      const data = new FormData();
      data.append('name', name);
      data.append('subject', subject);
      data.append('email', email);
      data.append('message', message);

      const res = await fetch('https://iv-blogs.ivhub.com/php/contact.php', { method: 'POST', body: data });
      const ct = res.headers.get('content-type');
      if (ct?.includes('application/json')) {
        const json = await res.json();
        if (json.success) {
          setStatus('Message sent successfully!');
          setFormData({ name: '', subject: '', email: '', message: '' });
        } else setStatus('Failed to send message. Please try again later.');
      } else {
        setStatus('Unexpected server response. Please contact support.');
      }
    } catch (err) {
      console.error(err);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-hero">
        <img className="hero-img" src={HERO_IMG} alt="Contact IV Wellness Lounge" />
        <div className="overlay" />
        <div className="hero-wrapper">
          <div className="container">
            <div className="hero-wrap">
              <div className="left">
                <div>
                  <span className="text-light">Need assistance?</span>
                  <span className="text-italic"> We're here to help.</span>
                </div>
                <div className="btn-wrap">
                  <Link href="/" className="btn btn-light">Booking Today</Link>
                  <Link href="/" className="btn btn-light">Schedule a consultation</Link>
                </div>
              </div>
              <div className="right">
                <FaRegClock />
                <div className="txt">
                  <span>Everyday Days:</span>
                  <span>10 am - 10 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div className="container">
          <div className="form-wrapper">
            <div className="heading">
              <h1>Contact Us</h1>
              <p>Ready to assist you 🟢</p>
            </div>

            <div className="form-wrap">
              <div className="left">
                <div className="single-info">
                  <PiWhatsappLogoLight />
                  <p>Phone / WhatsApp</p>
                  <p>+971 800 48482</p>
                </div>
                <div className="single-info">
                  <HiOutlineEnvelope />
                  <p>Email</p>
                  <p>hello@ivhub.com</p>
                </div>
                <div className="social-wrap">
                  {socialLinks.map((x, i) => (
                    <a key={i} href={x.url} target="_blank" rel="noopener noreferrer" aria-label="social link">
                      {x.icon}
                    </a>
                  ))}
                </div>
                <div className="direction">
                  <FaLocationArrow />
                  <span>Get direction</span>
                </div>
              </div>

              <div className="right">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">NAME</label>
                    <input id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">SUBJECT</label>
                    <input id="subject" value={formData.subject} onChange={handleChange} placeholder="Enter subject" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">MAIL</label>
                    <input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">MESSAGE</label>
                    <textarea id="message" rows={6} value={formData.message} onChange={handleChange} placeholder="Your message" />
                  </div>

                  {status && <p className="form-status">{status}</p>}

                  <div className="btn-wrap">
                    <button type="submit" className="btn">Send now</button>
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
