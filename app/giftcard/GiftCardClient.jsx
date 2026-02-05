// app/giftcard/GiftCardClient.jsx
"use client";

import { useState } from "react";


const initialState = {
  customerName: "",
  giftCardId: "",
  topupAmount: "",
  purchaseDate: "",
  remarks: "",
};

export default function GiftCardClient() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("Submitting...");

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([key, value]) => fd.append(key, value ?? ""));

      // NOTE: update this endpoint to your actual PHP handler
      const res = await fetch("https://mails.ivhub.com/giftcardemail.php", {
        method: "POST",
        body: fd,
      });

      setStatus(res.ok ? "Form submitted successfully!" : "Submission failed. Try again.");
      if (res.ok) setForm(initialState);
    } catch (err) {
      setStatus("Error occurred. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-group">
        <label>Customer Name</label>
        <input
          name="customerName"
          value={form.customerName}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>GIFT Card ID</label>
        <input
          name="giftCardId"
          value={form.giftCardId}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Topup Amount</label>
        <input
          type="number"
          name="topupAmount"
          value={form.topupAmount}
          onChange={onChange}
          required
          min="0"
          step="0.01"
          onWheel={(e) => e.currentTarget.blur()} // ✅ stops scroll changing value
        />
      </div>

      <div className="form-group">
        <label>Purchase Date</label>
        <input
          type="date"
          name="purchaseDate"
          value={form.purchaseDate}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Remarks</label>
        <textarea
          name="remarks"
          value={form.remarks}
          onChange={onChange}
          required
          rows={5}
        />
      </div>


      {status && <p className="form-status">{status}</p>}

      <div className="btn-wrap">
        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
