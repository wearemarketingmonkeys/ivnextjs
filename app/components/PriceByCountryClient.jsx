"use client";

import { useEffect, useState } from "react";

function formatMoney(value, currency) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PriceByCountryClient({
  basePrice,
  baseCurrency = "AED",
}) {
  const [currency, setCurrency] = useState(baseCurrency);
  const [price, setPrice] = useState(Number(basePrice));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setLoading(true);

        // 1) Get visitor currency (from your /api/geo)
        const geoRes = await fetch("/api/geo", { cache: "no-store" });
        const geo = await geoRes.json();
        const visitorCurrency = (geo?.currency || baseCurrency).toUpperCase();

        if (cancelled) return;
        setCurrency(visitorCurrency);

        // 2) If same currency, no conversion
        const n = Number(basePrice);
        if (!Number.isFinite(n)) return;

        if (visitorCurrency === baseCurrency) {
          setPrice(n);
          return;
        }

        // 3) Get manual rate
        const fxRes = await fetch(`/api/fx?to=${visitorCurrency}`, {
          cache: "no-store",
        });
        const fx = await fxRes.json();
        const rate = Number(fx?.rate);

        if (!Number.isFinite(rate)) {
          setPrice(n); // fallback
          return;
        }

        setPrice(n * rate);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [basePrice, baseCurrency]);

  return (
    <span>
      {loading
        ? formatMoney(Number(basePrice), baseCurrency)
        : formatMoney(price, currency)}
    </span>
  );
}