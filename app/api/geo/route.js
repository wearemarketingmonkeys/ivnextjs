import { NextResponse } from "next/server";

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
  // add more as needed
};

export async function GET(req) {
  const h = req.headers;

  const country =
    h.get("x-vercel-ip-country") ||
    h.get("cf-ipcountry") ||
    h.get("x-country-code") ||
    "AE";

  const currency = COUNTRY_TO_CURRENCY[country] || "USD";

  return NextResponse.json({ country, currency });
}