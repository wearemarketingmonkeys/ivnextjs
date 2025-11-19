// ✔ SERVER COMPONENT (SEO friendly)
import AestheticCare from "./AestheticCare";

export const metadata = {
  title: "Aesthetic Treatment Pre & Post Care | IV Wellness Lounge",
  description: "Complete pre & post care instructions for Botox, Fillers, Microneedling, PRP, Laser Hair Removal, HydraFacial, and more.",
};

export default function Page() {
  const sections = [
    {
      title: "BOTOX PRE & POST CARE GUIDELINES",
      pre: [
        "Avoid Blood-Thinning Medications (7 Days Prior): Avoid Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, St. John’s Wort, and Garlic tablets. Inform your practitioner if you are on prescribed blood thinners.",
        "Avoid Alcohol (24–48 Hours Before): Alcohol may increase bruising.",
        "Postpone Dental Procedures (1–2 Weeks Before and After): Dental work can affect facial muscles and may interfere with results.",
        "Pause Harsh Skin Treatments (5–7 Days Prior): Avoid chemical peels, microneedling, laser resurfacing, microdermabrasion, and strong retinol/AHA/BHA products.",
        "Avoid Intense Workouts on the Day of Treatment: Strenuous exercise increases blood flow and risk of migration.",
        "Arrive With a Clean Face: No makeup, SPF, oils, or heavy skincare.",
        "Share Your Medical History: Inform your practitioner if pregnant, breastfeeding, have neurological conditions, or had Botox within 3 months.",
        "Pre-Care Tips: Have a light meal, consider Arnica, and bring inspiration photos."
      ],
      post: [
        "First 4 Hours: Do keep head upright and perform gentle facial movements. Do not touch treated areas, apply makeup, lie down, or bend forward.",
        "First 24 Hours: Avoid exercise, alcohol, heat, sun exposure, facial treatments, and tight hats. A cold compress may be applied gently.",
        "48–72 Hours: Mild swelling or bruising may occur. Sleep on your back. Avoid cosmetic treatments.",
        "1 Week: Resume gentle skincare. Avoid acids on injection sites.",
        "2 Weeks: Full results are visible. Follow-up recommended.",
        "Post-Care Tips: Hydrate, use SPF, and avoid judging results too early."
      ]
    },
    {
      title: "DERMAL FILLERS PRE & POST CARE GUIDELINES",
      pre: [
        "Avoid Blood-Thinning Medications (7 Days Prior): Avoid NSAIDs and listed supplements to reduce bruising.",
        "Avoid Alcohol (24–48 Hours Before): Reduces risk of swelling and bruising.",
        "Avoid Dental Procedures (2 Weeks Before & After): Dental pressure can influence filler placement.",
        "Pause Active Skin Treatments (5–7 Days Prior): Avoid retinol, peels, microneedling, and strong exfoliants.",
        "Arrive With Clean Skin: No makeup or heavy skincare.",
        "Discuss Medical History: Inform your practitioner of autoimmune conditions, allergies, or pregnancy/breastfeeding."
      ],
      post: [
        "First 24 Hours: Avoid pressure, makeup, alcohol, exercise, heat, or sun exposure.",
        "48–72 Hours: Swelling and bruising may be present. Continue avoiding pressure and exercise.",
        "1 Week: Most swelling fades. Massage only if instructed.",
        "2 Weeks: Final results visible. Follow-up recommended."
      ]
    },
    {
      title: "SKIN BOOSTER INJECTIONS PRE & POST CARE GUIDELINES",
      pre: ["Avoid alcohol, blood thinners, and active skincare 48 hours prior.", "Arrive with clean skin."],
      post: ["Avoid makeup for 24 hours.", "Avoid heat, sun, sweating, or exercise for 48 hours.", "Mild bumps are normal and settle."]
    },
    {
      title: "SCULPTRA, RADIESSE, STICOL (COLLAGEN STIMULATORS) PRE & POST CARE",
      pre: ["Avoid alcohol and blood thinners for 48 hours.", "Share medical history with your practitioner."],
      post: ["Swelling or tenderness may occur.", "Massage only if instructed.", "Avoid heat, sun, and strenuous activity for 48 hours."]
    },
    {
      title: "MICRONEEDLING FACE/HAIR PRE & POST CARE GUIDELINES",
      pre: ["Avoid retinoids and exfoliants for 5 days.", "Avoid sun exposure.", "Arrive with clean skin or scalp."],
      post: ["Avoid makeup, heat, and sweating for 24–48 hours.", "Avoid acids, retinoids, and exfoliation for 5 days.", "Use hydrating skincare."]
    },
    {
      title: "PRP FACE/HAIR PRE & POST CARE GUIDELINES",
      pre: ["Hydrate well.", "Avoid retinoids for 3–5 days."],
      post: [
        "Expect mild redness.",
        "Avoid touching the area, heat, sweating, alcohol, and makeup for 24 hours.",
        "Avoid active skincare for 3–5 days."
      ]
    },
    {
      title: "MORPHEUS8 FACE/BODY PRE & POST CARE GUIDELINES",
      pre: ["Avoid retinol and acids for 7 days.", "No sunburn, irritation, or recent treatments."],
      post: [
        "Redness and swelling are normal.",
        "Avoid makeup for 24 hours.",
        "No heat, sweating, or sun exposure for 72 hours.",
        "Use only gentle hydration."
      ]
    },
    {
      title: "HIFU FACE/BODY PRE & POST GUIDELINES",
      pre: ["Avoid irritated skin and heavy sun exposure."],
      post: ["Tenderness is normal.", "Avoid heat, exercise, and strong skincare for 48 hours."]
    },
    {
      title: "LASER HAIR REMOVAL (SOPRANO TITANIUM) PRE & POST CARE GUIDELINES",
      pre: ["Shave 24 hours prior.", "Avoid waxing or plucking for weeks prior.", "Avoid sun exposure."],
      post: ["Redness is normal.", "Avoid sun, heat, exercise, and exfoliation for 48 hours.", "Moisturize gently."]
    },
    {
      title: "CHEMICAL PEEL PRE & POST CARE GUIDELINES",
      pre: ["Avoid retinol and acids for 5 days.", "Avoid sunburn or irritation."],
      post: ["Expect dryness or peeling.", "Avoid sun, heat, exercise, and active skincare.", "Use hydrating products and SPF."]
    },
    {
      title: "HYDRAFACIAL PRE & POST CARE GUIDELINES",
      pre: [
        "Avoid retinoids, AHA/BHA, or exfoliants for 48 hours.",
        "Allow proper intervals after treatments: Botox/Fillers 2–3 weeks, Chemical Peels/Morpheus8/Skin Boosters 25–30 days, Sculptra 2–3 weeks.",
        "Avoid sunburn or irritated skin.",
        "Arrive with clean skin."
      ],
      post: [
        "Avoid makeup for 24 hours.",
        "Avoid sweating, heat, sun, and active skincare for 48 hours.",
        "Hydrate well and use gentle products.",
        "SPF daily."
      ]
    },
    {
      title: "IV DRIPS PRE & POST GUIDELINES",
      pre: ["Hydrate and eat a light meal.", "Inform your practitioner of medications or conditions."],
      post: ["Continue hydrating.", "Mild soreness is normal.", "Avoid strenuous activity for 1–2 hours."]
    },
    {
      title: "FAT MELTING INJECTIONS PRE & POST GUIDELINES",
      pre: ["Avoid alcohol and blood thinners for 24 hours."],
      post: ["Swelling, tenderness, or firmness is normal.", "Avoid heat, exercise, and sun exposure for 72 hours."]
    },
    {
      title: "FAT MELTING MACHINES PRE & POST GUIDELINES",
      pre: ["Stay hydrated.", "Avoid heavy meals immediately before."],
      post: ["Stay hydrated.", "Avoid heat and harsh treatments for 24–48 hours."]
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
