"use client";

import { useEffect, useState } from "react";

const COUNTRY_TO_CURRENCY = {
  AE: "AED",
  US: "USD",
  GB: "GBP",
  EU: "EUR",
  IN: "INR",
  SA: "SAR",
  QA: "QAR",
  KW: "KWD",
  OM: "OMR",
  BH: "BHD",
};

const COUNTRIES = [
  { code: "AE", name: "United Arab Emirates" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "QA", name: "Qatar" },
  { code: "KW", name: "Kuwait" },
  { code: "OM", name: "Oman" },
  { code: "BH", name: "Bahrain" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "EU", name: "European Union" },
  { code: "IN", name: "India" },
];

function formatMoney(amount, currency) {
  const n = Number(amount || 0);
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(n);
  } catch {
    return `${n.toFixed(2)} ${currency}`;
  }
}

// ✅ Placeholder weight-based estimate (replace later with FedEx)
function estimateShipping({ country }) {
  const cc = (country || "").toUpperCase();

  // Example base (you can change numbers)
  if (cc === "AE") return { cost: 0, eta: "Same day / Next day" };
  if (["SA", "QA", "KW", "OM", "BH"].includes(cc)) return { cost: 49, eta: "1–3 days" };
  if (["GB", "EU"].includes(cc)) return { cost: 89, eta: "3–6 days" };
  return { cost: 99, eta: "4–8 days" };
}

export default function ShippingCalculator() {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [country, setCountry] = useState("AE");

  const [currency, setCurrency] = useState("AED");
  const [autoCurrency, setAutoCurrency] = useState(true);

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // ✅ Auto-detect currency + country (server geo endpoint)
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/geo", { cache: "no-store" });
        const data = await res.json();

        if (cancelled) return;

        const detectedCountry = (data.country || "AE").toUpperCase();
        const detectedCurrency =
          data.currency || COUNTRY_TO_CURRENCY[detectedCountry] || "AED";

        setCountry(detectedCountry);
        if (autoCurrency) setCurrency(detectedCurrency);
      } catch {
        // keep defaults
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [autoCurrency]);

  useEffect(() => {
    if (autoCurrency && COUNTRY_TO_CURRENCY[country]) {
      setCurrency(COUNTRY_TO_CURRENCY[country]);
    }
  }, [country, autoCurrency]);

  useEffect(() => {
    setResult(null);
    setError("");
  }, [country, currency, street, city, postal]);

  const canSubmit =
    street.trim().length > 2 &&
    city.trim().length > 1 &&
    postal.trim().length > 1 &&
    country.trim().length === 2;

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!canSubmit) {
      setError("Please fill in Street, City, Postal Code, and a 2-letter Country Code.");
      return;
    }

    // ✅ Later: call FedEx API here (with weight + address)
    const r = estimateShipping({ country });
    setResult(r);
  };

  return (
    <section className="shippingCalc">
      <h3 className="shippingTitle">Shipping Cost Calculator</h3>

      <form onSubmit={onSubmit}>
        <div className="shippingGrid">
          <div className="field">
            <label>Street</label>
            <input
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Street address"
              autoComplete="street-address"
            />
          </div>

          <div className="field">
            <label>City</label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              autoComplete="address-level2"
            />
          </div>

          <div className="field">
            <label>Postal Code</label>
            <input
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
              placeholder="Postal code"
              autoComplete="postal-code"
            />
          </div>

          <div className="field">
            <label>Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Currency</label>
            <div className="currencyRow">
              <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                {["AED", "USD", "EUR", "GBP", "SAR", "QAR", "KWD", "OMR", "BHD", "INR"].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <label className="autoToggle">
                <input
                  type="checkbox"
                  checked={autoCurrency}
                  onChange={(e) => setAutoCurrency(e.target.checked)}
                />
                Auto
              </label>
            </div>
          </div>
        </div>

        <div className="shippingActions">
          <button className="shippingSubmit" type="submit" disabled={!canSubmit}>
            Submit
          </button>
          {!canSubmit && (
            <p className="shippingHint">Fill the address fields to enable Submit.</p>
          )}
        </div>
      </form>

      <div className="shippingResult">
        {error && <p className="shippingError">{error}</p>}

        {result && (
          <>
            <div className="row">
              <span>Estimated Shipping</span>
              <strong>{formatMoney(result.cost, currency)}</strong>
            </div>
            <div className="row">
              <span>Estimated Delivery</span>
              <strong>{result.eta}</strong>
            </div>

            <p className="fineprint">
              Final shipping will be calculated based on weight and carrier service level.
            </p>
          </>
        )}
      </div>
    </section>
  );
}