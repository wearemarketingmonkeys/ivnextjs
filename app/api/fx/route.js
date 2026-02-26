import { NextResponse } from "next/server";

// Your store base currency (set this to whatever your product prices are in)
const BASE = "AED";

// ✅ Manual rates relative to BASE (AED)
// Example: 1 AED = 0.2723 USD, etc.
const MANUAL_RATES = {
  AED: 1,
  USD: 0.2723,
  EUR: 0.251,
  GBP: 0.215,
  SAR: 1.02,   // example (adjust to your real desired rate)
  QAR: 0.99,   // example
  OMR: 0.105,  // example
  KWD: 0.083,  // example
  INR: 24.6,   // example
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