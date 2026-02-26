import { NextResponse } from "next/server";

const COUNTRY_TO_CURRENCY = {
  // Middle East
  AE: "AED",
  SA: "SAR",
  QA: "QAR",
  KW: "KWD",
  OM: "OMR",
  BH: "BHD",

  // North America
  US: "USD",
  CA: "CAD",
  MX: "MXN",

  // UK & Ireland
  GB: "GBP",
  IE: "EUR",

  // Australia / NZ
  AU: "AUD",
  NZ: "NZD",

  // Asia
  IN: "INR",
  SG: "SGD",
  HK: "HKD",
  JP: "JPY",

  // Switzerland & Nordics
  CH: "CHF",
  NO: "NOK",
  SE: "SEK",
  DK: "DKK",

  // Poland
  PL: "PLN",

  // Eurozone (EUR)
  DE: "EUR",
  FR: "EUR",
  IT: "EUR",
  ES: "EUR",
  NL: "EUR",
  BE: "EUR",
  AT: "EUR",
  FI: "EUR",
  PT: "EUR",
  GR: "EUR",
  LU: "EUR",
  MT: "EUR",
  CY: "EUR",
  SI: "EUR",
  SK: "EUR",
  EE: "EUR",
  LV: "EUR",
  LT: "EUR",
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