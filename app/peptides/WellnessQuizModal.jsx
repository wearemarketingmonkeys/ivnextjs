'use client';

import { useEffect, useMemo, useState } from 'react';

export default function WellnessQuizModal({ onClose }) {
  const [quizOpen, setQuizOpen] = useState(false);

  const steps = useMemo(
    () => [
      {
        id: 'goal',
        title: "Which age range do you fall into?",
        subtitle: "Age helps us personalize peptide selection, dosing, and recovery.",
        type: 'options',
        options: [
          '18-23',
          '24-29',
          '30s',
          '40s',
          '50+',
        ],
      },
      {
        id: 'tired',
        title: 'What\'s your gender?',
        subtitle: 'Biological differences affect how peptides work in the body.',
        type: 'options',
        options: ['Male', 'Female', 'Prefer not to say'],
      },
      {
        id: 'tried',
        title: 'Have you tried Peptides or advanced wellness treatments before?',
        type: 'options',
        options: ['Yes, regularly', 'Yes, once or twice', 'No, but curious', 'No, and unsure'],
      },
      {
        id: 'blocker',
        title: "What’s stopping you from feeling your best right now?",
        type: 'options',
        options: [
          'Lack of time',
          'Low energy / burnout',
          'Skin or aging concerns',
          'Recovery from workouts or stress',
          'Not sure what actually works',
        ],
      },
      {
        id: 'consult',
        title: 'Want a free 10-minute consult to get a personalized plan?',
        type: 'options',
        options: ['Yes, book my free consult', 'Just send me info'],
      },
      {
        id: 'lead',
        title: 'Where should we send your personalized plan?',
        type: 'form',
      },
    ],
    []
  );

  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const step = steps[stepIndex];

  const closeModal = () => {
    setQuizOpen(false);
    onClose?.();
  };

  // ✅ open popup after 5 seconds of page load
  useEffect(() => {
    const t = setTimeout(() => setQuizOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  // Reset when opened
  useEffect(() => {
    if (!quizOpen) return;
    setStepIndex(0);
    setAnswers({});
    setForm({ name: '', email: '', phone: '' });
    setSubmitting(false);
    setSubmitted(false);
  }, [quizOpen]);

  // ESC to close (only while open)
  useEffect(() => {
    if (!quizOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [quizOpen]);

  const goNext = () => setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

  const selectOption = (value) => {
    setAnswers((prev) => ({ ...prev, [step.id]: value }));
    goNext();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) return;

    try {
      setSubmitting(true);

      await fetch('https://mails.ivhub.com/sendpeptidequiz.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          form,
          source: 'peptides-popup-quiz',
          createdAt: new Date().toISOString(),
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Quiz submit failed:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // ✅ Important: conditional rendering AFTER hooks are declared
  if (!quizOpen) return null;

  return (
    <div className="quizOverlay" role="dialog" aria-modal="true" aria-label="Wellness quiz">
      <button className="quizBackdrop" aria-label="Close popup" onClick={closeModal} />

      <div className="quizCard">
        <div className="quizHeader">
          <div className="quizProgress">
            Step {Math.min(stepIndex + 1, steps.length)} / {steps.length}
          </div>

          <button className="quizClose" onClick={closeModal} aria-label="Close">
            ✕
          </button>
        </div>

        {!submitted ? (
          <>
            <h2 className="quizTitle">{step.title}</h2>
            {step.subtitle ? <p className="quizSub">{step.subtitle}</p> : null}

            {step.type === 'options' ? (
              <div className="quizOptions">
                {step.options.map((opt) => (
                  <button key={opt} className="quizOption" onClick={() => selectOption(opt)}>
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <form className="quizForm" onSubmit={onSubmit}>
                <label className="quizLabel">
                  Name
                  <input
                    className="quizInput"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="quizLabel">
                  Email
                  <input
                    className="quizInput"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="you@email.com"
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="quizLabel">
                  Phone number
                  <input
                    className="quizInput"
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="+971..."
                    autoComplete="tel"
                    required
                  />
                </label>

                <button className="quizSubmit" type="submit" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Get my plan'}
                </button>
              </form>
            )}

            <div className="quizFooter">
              <button className="quizNav" onClick={goBack} disabled={stepIndex === 0}>
                Back
              </button>

              <button className="quizNav ghost" onClick={closeModal}>
                Not now
              </button>
            </div>
          </>
        ) : (
          <div className="quizThanks">
            <h2 className="quizTitle">You’re all set ✅</h2>
            <p className="quizSub">
              We’ve received your answers. Our team will contact you shortly with a personalized plan.
            </p>

            <button className="quizSubmit" onClick={closeModal}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
