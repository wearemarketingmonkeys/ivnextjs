import { NextResponse } from "next/server";

// Your store base currency (set this to whatever your product prices are in)
const BASE = "AED";

// ✅ Manual rates relative to BASE (AED)
// Example: 1 AED = 0.2723 USD, etc.
const MANUAL_RATES = {
  AED: 1,
  USD: 0.2723,
  CAD: 0.37,
  MXN: 4.65,
  AUD: 0.38,
  NZD: 0.45,
  EUR: 0.24,
  GBP: 0.20,
  SAR: 1.02,   // example (adjust to your real desired rate)
  QAR: 0.99,   // example
  OMR: 0.105,  // example
  KWD: 0.083,  // example
  BHD: 0.10,  // example
  INR: 24.6,   // example
  SGD: 0.36,
  HKD: 2.13,
  JPY: 40.5,
  CHF: 0.24,
  NOK: 2.85,
  SEK: 2.80,
  DKK: 1.87,
  PLN: 1.08,
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const to = (searchParams.get("to") || BASE).toUpperCase();

  const rate = MANUAL_RATES[to];

  if (!rate) {
    return NextResponse.json(
      { base: BASE, to, rate: MANUAL_RATES[BASE], fallback: true },
      { status: 200 }
    );
  }

  return NextResponse.json({ base: BASE, to, rate });
}