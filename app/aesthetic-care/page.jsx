// ✔ SERVER COMPONENT (SEO friendly)
import AestheticCare from "./AestheticCare";

export const metadata = {
  title: "Aesthetic Treatment Pre & Post Care | IV Wellness Lounge Clinic",
  description: "Complete pre & post care instructions for Botox, Fillers, Microneedling, PRP, Laser Hair Removal, HydraFacial, and more.",
  alternates: { canonical: 'https://ivhub.com/aesthetic-care' },
  openGraph: {
    title: "Aesthetic Treatment Pre & Post Care | IV Wellness Lounge Clinic",
    description: "Complete pre & post care instructions for Botox, Fillers, Microneedling, PRP, Laser Hair Removal, HydraFacial, and more.",
    url: 'https://ivhub.com/aesthetic-care',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aesthetic Treatment Pre & Post Care | IV Wellness Lounge Clinic",
    description: "Complete pre & post care instructions for Botox, Fillers, Microneedling, PRP, Laser Hair Removal, HydraFacial, and more.",
    images: ['https://ivhub.com/og.png'],
  },
};

export default function Page() {
  const sections = [
  {
    "title": "Hydrafacial for Face & Body — Pre & Post Care",
    "pre": [
      "Pause active skincare 3–5 days prior: avoid retinol, AHAs/BHAs, benzoyl peroxide, exfoliating scrubs, acne topical medications.",
      "Avoid sun exposure 5–7 days prior; sunburned skin cannot be treated.",
      "Stop waxing or hair removal 48 hours prior.",
      "Arrive with a clean face: no makeup, oils, or heavy moisturizers.",
      "Hydrate well 24 hours prior."
    ],
    "post": [
      "First 24 hours: avoid makeup, sweaty workouts, touching/picking skin; minor redness is normal.",
      "First 48 hours: avoid active skincare, saunas, steam rooms, hot yoga, waxing or depilatory creams.",
      "48–72 hours: resume gentle skincare; use hydrating serums and SPF 50.",
      "Use a silk pillowcase, avoid sun exposure, and maintain monthly sessions for best results."
    ]
  },
  {
    "title": "Laser Hair Removal (Soprano Titanium) — Pre & Post Care",
    "pre": [
      "Shave the area 24 hours prior.",
      "No waxing, plucking, or threading for 3–4 weeks prior.",
      "Avoid sun exposure for 2 weeks prior; no tanning beds or self-tanner; do not treat sunburned skin.",
      "Stop active skincare 3–5 days prior: avoid retinol, hydroquinone, AHAs/BHAs, exfoliants.",
      "Do not apply oils or lotions on day of treatment."
    ],
    "post": [
      "First 24 hours: avoid heat, sweating, hot baths; mild swelling or warmth is normal.",
      "First 48–72 hours: avoid sun exposure, saunas, steam rooms, exfoliating products, perfumed lotions, and tight clothing.",
      "1 week after: avoid waxing or plucking; shedding (pepper spots) is normal; continue moisturizer and SPF 50.",
      "Results timeline: shedding 10–14 days, reduction 4–6 sessions, full results 8–12 sessions."
    ]
  },
  {
    "title": "Collagen Stimulation (Sculptra, Radiesse, Sticol) — Pre & Post Care",
    "pre": [
      "Avoid blood thinners 7 days prior: aspirin, ibuprofen, fish oil, vitamin E, ginkgo, ginseng.",
      "Reduce alcohol and smoking 48 hours prior.",
      "Hydrate well 24 hours prior.",
      "Eat a light meal the day of treatment."
    ],
    "post": [
      "Expect swelling, tenderness, or small lumps after treatment; avoid touching the area.",
      "Follow the 5-5-5 rule for Sculptra: massage 5 minutes, 5 times a day, for 5 days (if instructed).",
      "First 24–48 hours: avoid intense exercise, heat, saunas, steam, hot showers, and alcohol; apply cold compress if needed.",
      "1 week after: avoid facials, massages, and heavy treatments; continue SPF daily.",
      "Results timeline: early changes 4–6 weeks, full collagen 8–12 weeks, best results 2–3 sessions."
    ]
  },
  {
    "title": "Dermal Fillers (Face & Body) — Pre & Post Care",
    "pre": [
      "Avoid blood thinners 7 days prior: aspirin, ibuprofen, fish oil, vitamin E.",
      "Limit alcohol 48 hours prior.",
      "Hydrate well before treatment.",
      "Eat before your appointment to prevent dizziness."
    ],
    "post": [
      "First 24 hours: swelling, tenderness, bruising normal; avoid touching/massaging areas; no makeup for 12 hours.",
      "First 48 hours: avoid exercise, heavy chewing (lip fillers), saunas, alcohol, and optional: flying for high-movement areas.",
      "1 week after: avoid facials or pressure; bruising can be covered with makeup; lumps usually settle.",
      "Results timeline: immediate effect; settling 1–2 weeks; lasts 6–18 months."
    ]
  },
  {
    "title": "Botox (Face & Body) — Pre & Post Care",
    "pre": [
      "Avoid blood thinners 3–7 days prior.",
      "Avoid alcohol 24 hours prior.",
      "Arrive makeup-free on the day of treatment."
    ],
    "post": [
      "First 4–6 hours: do not lie down; do not touch or massage treated areas; avoid hats and head pressure.",
      "First 24 hours: avoid exercise, heat, saunas, alcohol, and ideally avoid makeup.",
      "1–2 weeks: full results appear in 7–14 days; avoid facial massages for 1 week."
    ]
  },
  {
    "title": "Skin Boosters — Pre & Post Care",
    "pre": [
      "Avoid blood thinners and alcohol before treatment.",
      "Arrive hydrated."
    ],
    "post": [
      "First 24–48 hours: mild bumps/tenderness normal; avoid makeup, sweating, exercise, heat; do not massage unless instructed.",
      "1 week after: avoid facials and aggressive exfoliation; hydrate well for glowing results.",
      "Results timeline: hydration boost in 1–2 weeks; texture improvement in 4 weeks; best results 2–3 sessions."
    ]
  },
  {
    "title": "Fat Melting Injections — Pre & Post Care",
    "pre": [
      "Avoid blood thinners 5–7 days prior.",
      "Hydrate well 24 hours prior.",
      "Avoid alcohol 48 hours prior."
    ],
    "post": [
      "First 24–48 hours: swelling, bruising, numbness normal; apply cool compresses.",
      "First 72 hours: avoid exercise, heat, and massaging the area.",
      "1–2 weeks: swelling gradually subsides; numbness may last 2–4 weeks.",
      "Results timeline: fat breakdown 3–4 weeks; contouring 6–8 weeks; best results 2–4 sessions."
    ]
  },
  {
    "title": "Fat Melting Machines — Pre & Post Care",
    "pre": [
      "Increase water intake 48 hours prior for lymphatic drainage.",
      "Avoid heavy meals before the session."
    ],
    "post": [
      "First 48 hours: drink 1.5–2L water daily; light activity like walking helps.",
      "Avoid alcohol for 48 hours.",
      "Results timeline: reduction 2–4 weeks; best results 6–12 weeks."
    ]
  },
  {
    "title": "Microneedling (Face & Hair) — Pre & Post Care",
    "pre": [
      "Stop active skincare 3–5 days prior: retinol, acids, benzoyl peroxide.",
      "Avoid sun exposure 1 week prior.",
      "Arrive makeup-free."
    ],
    "post": [
      "First 24 hours: redness like sunburn normal; avoid touching face and no makeup.",
      "First 48 hours: avoid exercise, heat, actives, and sun exposure.",
      "72 hours: introduce gentle hydrating products; always use SPF 50.",
      "Results timeline: glow 1 week; texture 3–4 weeks; best results 3–6 sessions."
    ]
  },
  {
    "title": "PRP Injections (Face or Hair) — Pre & Post Care",
    "pre": [
      "Avoid blood thinners 7 days prior.",
      "Avoid alcohol and smoking 48 hours prior.",
      "Hydrate heavily.",
      "Eat a light meal.",
      "Avoid caffeine on the day of treatment."
    ],
    "post": [
      "First 24–48 hours: swelling, pinpoint bleeding normal; avoid touching; no makeup 24 hours; avoid sweating, heat, sun.",
      "1 week after: avoid facials, exfoliation, and laser; use gentle skincare and SPF.",
      "Results timeline: glow 1–2 weeks; texture 4–6 weeks; best results 3–6 sessions."
    ]
  },
  {
    "title": "IV Drips — Pre & Post Care",
    "pre": [
      "Hydrate well 24 hours prior.",
      "Eat a light meal 1–2 hours before.",
      "Avoid alcohol 24–48 hours prior.",
      "Wear comfortable clothing."
    ],
    "post": [
      "First 24 hours: keep bandage on 30 minutes; drink water; mild arm soreness normal.",
      "Avoid for 24 hours: alcohol, strenuous workouts, saunas or heat.",
      "Results timeline: energy boost same day; skin glow 1–3 days; best results with weekly or biweekly sessions."
    ]
  },
  {
    "title": "Chemical Peel — Pre & Post Care",
    "pre": [
      "Stop active skincare 5–7 days prior: retinol, acids, benzoyl peroxide, vitamin C, scrubs, acne meds.",
      "Avoid sun exposure 1–2 weeks prior; sunburned skin cannot be peeled.",
      "Stop hair removal 5–7 days prior: waxing, threading, depilatory creams, laser.",
      "Hydrate well 48 hours prior.",
      "Avoid facial treatments 1 week prior.",
      "Arrive with a clean face."
    ],
    "post": [
      "First 24 hours: avoid washing face, actives, exercise, heat, touching skin.",
      "24–48 hours: gentle cleansing only; hydrating serums; no makeup; avoid steam/heat.",
      "Peeling phase (2–7 days): flaking and darkening normal; do not pick; use hydrating products and SPF.",
      "1 week after: may resume gentle exfoliation if approved; avoid facials and lasers for 10–14 days.",
      "Results timeline: glow 3–7 days; texture 1–2 weeks; pigmentation 2–4 weeks; acne 2–6 weeks."
    ]
  },
  {
    "title": "Morpheus8 (RF Microneedling) — Pre & Post Care",
    "pre": [
      "Stop active skincare 5–7 days prior: retinol, acids, benzoyl peroxide, vitamin C, scrubs.",
      "Avoid sun exposure 1–2 weeks prior.",
      "Avoid hair removal 5–7 days prior.",
      "Stop blood-thinning supplements 7 days prior.",
      "No alcohol or smoking 48 hours prior.",
      "Hydrate well 24–48 hours prior.",
      "Arrive with clean skin.",
      "Take a light meal before appointment."
    ],
    "post": [
      "Immediately after: redness, swelling, warmth, grid marks normal; avoid washing 12 hours, touching, makeup, heat, sweat.",
      "First 24–48 hours: gentle cleanser only; soothing serums; avoid actives, heat, workouts, steam.",
      "48–72 hours: redness subsides; avoid sun, actives, exfoliation; use gentle moisturizers and SPF.",
      "Peeling phase: mild peeling or roughness; do not pick.",
      "1 week: reintroduce gentle actives if approved; avoid facials/lasers 10–14 days.",
      "2–4 weeks: collagen stimulation begins; skin tightens.",
      "Results timeline: glow 7–10 days; texture 2–3 weeks; tightening 4–6 weeks; full results 12 weeks."
    ]
  },
  {
    "title": "HIFU (High-Intensity Focused Ultrasound) — Face & Body",
    "pre": [
      "Avoid anti-inflammatories 5–7 days prior.",
      "Avoid alcohol and smoking 48 hours prior.",
      "Hydrate well 24–48 hours prior.",
      "Pause active skincare 3–5 days prior.",
      "Avoid sun exposure 3–5 days prior.",
      "Avoid hair removal 5–7 days prior.",
      "Arrive with clean skin: no makeup, lotions, oils.",
      "Eat a light meal before appointment."
    ],
    "post": [
      "Immediately after: mild tenderness, swelling, redness, numbness normal; avoid makeup 12 hours; do not touch or apply heat.",
      "First 48 hours: avoid saunas, steam, hot showers, workouts, massages, exfoliation; hydrate well.",
      "48–72 hours: resume gentle skincare; avoid actives; apply SPF 50 daily.",
      "Peeling (if any): mild flaking normal; do not pick.",
      "1 week: reintroduce retinol/acids only if healed; avoid facials/lasers 10–14 days.",
      "2–4 weeks: tightening begins; contour improves.",
      "Results timeline: lifting 4–6 weeks; full results 8–12 weeks; best results 1–3 sessions."
    ]
  }
];

  return (
    <div className="luxury-page">
      <div className="luxury-wrapper">
        <h1>Aesthetic Treatment Pre & Post Care Guideline</h1>
        <hr/>
        <AestheticCare sections={sections} />
      </div>
    </div>
  );
}
