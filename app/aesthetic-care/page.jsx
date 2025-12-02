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
    "title": "HydraFacial Face/Body — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and potential sensitivity, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor before stopping.",

      "Avoid alcohol and smoking (24–48 hours prior): Both can dehydrate the skin and interfere with exfoliation and hydration.",
      "For best results, avoid completely.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Benzoyl Peroxide, Exfoliating scrubs, Hydroquinone, and any harsh or sensitizing products.",
      "This helps prevent irritation and ensures even treatment.",

      "Avoid other aesthetic treatments (1 week prior): Laser, Chemical peels, Microneedling, Dermaplaning, Waxing or threading in the treatment area, Fillers/Botox in the same area.",
      
      "Hydrate well (24–48 hours before): Hydration greatly enhances the HydraFacial glow and results.",
      "Drink plenty of water before your appointment.",

      "Arrive with a clean face or body area (Day of Treatment): No makeup, creams, SPF, lotions, perfumes, or oils on the treatment area.",

      "Avoid sun exposure or tanning before your session.",
      "Do not use self-tanner for at least 1 week prior.",
      "If you have active acne or cold sores, inform your practitioner before the appointment.",
      "For body HydraFacial, wear loose clothing to avoid irritation afterward."
    ],

    "post": [
      "First 4–6 hours: Expect mild redness or a dewy appearance — this is normal.",
      "Do not touch or wash the treated area.",
      "Do not apply makeup or skincare products.",

      "First 24 hours — avoid: Sun exposure, Hot showers or steam, Swimming, Sweating or exercise, Makeup, Exfoliating or active skincare, Saunas or steam rooms, Touching or rubbing the skin.",
      "The skin must remain clean, hydrated, and undisturbed.",

      "24–72 hours: Use a gentle cleanser and hydrating products only.",
      "Avoid retinol, acids, scrubs, benzoyl peroxide, or any harsh products.",
      "Do not undergo facials, peels, or laser treatments.",
      "Expect mild tightness — this is normal and temporary.",

      "1 week after treatment: Continue gentle skincare.",
      "Use sunscreen daily (SPF 30+).",
      "Resume active skincare only after day 3–5 depending on sensitivity.",
      "Avoid direct sun exposure or tanning beds.",

      "Immediate glow: same day.",
      "Full hydration and clarity: 3–7 days.",
      "Improvement in texture and congestion: 1–2 weeks.",
      "A series of treatments every 4 weeks is often recommended.",

      "Keep skin well-hydrated to extend your glow.",
      "Consider pairing HydraFacial with LED or Hydrating IV drips for enhanced results.",
      "Sleep on a clean pillowcase to avoid irritation."
    ]
  },
  {
    "title": "PRP Microneedling Face/Hair — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and inflammation, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Both alcohol and smoking impair healing and increase bruising.",
      "For best results, avoid completely.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Benzoyl Peroxide, Exfoliating scrubs, Hydroquinone.",
      "This prevents irritation and ensures even treatment.",

      "Avoid other aesthetic treatments (1 week prior): Laser, Chemical peels, Dermaplaning, Waxing, Other microneedling sessions, Fillers/Botox in the treatment area.",

      "Hydrate well (24–48 hours before): Microneedling + PRP responds best when the body is hydrated.",
      "Drink plenty of water prior to your appointment.",

      "Arrive with a clean treatment area: For Face PRP Microneedling: No makeup, creams, SPF, or oils. For Hair/Scalp PRP Microneedling: No oils, gels, sprays, conditioners, or leave-in products.",

      "Avoid sun exposure before your session.",
      "Eat a nutritious meal beforehand to avoid dizziness during blood draw.",
      "If you have a history of cold sores, inform your practitioner — an antiviral may be recommended.",
      "Avoid caffeine the morning of treatment if you tend to feel lightheaded.",
      "For scalp treatments, ensure hair is clean and fully dry on arrival."
    ],

    "post": [
      "First 4–6 hours: Expect redness, swelling, pinpoint bleeding, or sensitivity — this is normal.",
      "Do not touch or wash the face or scalp.",
      "No makeup, skincare, hair products, or sun exposure.",

      "First 24 hours — avoid: Sun exposure, Hot showers or steam, Sweating or exercise, Swimming, Makeup, Hair washing (for scalp treatments), Touching or picking the skin or scalp.",
      "The area must remain clean, hydrated, and undisturbed.",

      "24–72 hours: Use a gentle cleanser and hydrating products only.",
      "Avoid retinol, acids, scrubs, or exfoliators.",
      "Expect mild peeling, dryness, or tightness — this is normal.",
      "For scalp: mild tenderness or sensitivity is expected.",
      "Avoid direct sunlight and heavy sweating.",

      "1 week after treatment: Continue gentle skincare/haircare.",
      "Resume active skincare only after day 5–7.",
      "Use sunscreen daily for face treatments.",
      "Avoid tanning beds or sun exposure.",
      "Hair coloring may be resumed after day 5–7.",

      "Skin glow: 3–7 days.",
      "Texture improvement: 2–4 weeks.",
      "Collagen rebuilding: 3+ months.",
      "Hair stimulation: 4–6 weeks.",
      "Hair density/strength: 3–6 months.",
      "A series of 3–6 sessions is typically recommended.",

      "Pair PRP Microneedling with hydrating IV drips for faster recovery.",
      "Always use SPF 30+ daily (for face treatments).",
      "Sleep on a clean pillowcase.",
      "Stay hydrated — collagen formation responds best when the body is nourished."
    ]
  },
  {
    "title": "Mesotherapy Face/Hair/Body — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and inflammation, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Both impair healing, increase bruising, and can reduce treatment effectiveness.",
      "Avoid completely for best results.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Benzoyl Peroxide, Exfoliating scrubs, Hydroquinone, Any harsh or sensitizing products.",
      "(Applies to face and body areas being treated).",

      "Avoid other aesthetic treatments (1 week prior): Laser, Chemical peels, Microneedling, Dermaplaning, Waxing, Fillers/Botox.",
      "This prevents irritation and ensures even injections.",

      "Hydrate well (24–48 hours before): Mesotherapy works best when the body and skin are well-hydrated.",
      "Drink plenty of water before your appointment.",

      "Arrive with a clean treatment area: For Face: No makeup, creams, SPF, or oils. For Hair/Scalp: No oils, gels, sprays, or leave-in products. For Body: No lotions, perfumes, or oils on the area.",

      "Avoid sun exposure before your session.",
      "Eat a nutritious meal beforehand to avoid dizziness.",
      "For hair treatments, arrive with clean, dry hair.",
      "If you are prone to cold sores (face treatments), inform your practitioner.",
      "Avoid caffeine if you tend to feel anxious or lightheaded."
    ],

    "post": [
      "First 4–6 hours: Expect mild redness, swelling, or small bumps at injection sites — this is normal.",
      "Do not touch, wash, or apply products to the treated area.",
      "No makeup, hair products, creams, or oils.",

      "First 24 hours — avoid: Sun exposure, Hot showers or steam, Sweating or exercise, Swimming, Makeup (for face treatments), Hair washing (for scalp treatments), Touching, rubbing, or picking the area, Saunas and steam rooms.",
      "The area must remain clean and undisturbed.",

      "24–72 hours: Use gentle, hydrating skincare only.",
      "Avoid retinol, acids, benzoyl peroxide, or exfoliators.",
      "Expect mild bruising or tenderness — this is normal.",
      "Avoid facial or body treatments in the same area.",
      "Wear SPF for face and body treatments.",

      "1 week after treatment: Continue gentle skincare/haircare.",
      "Resume active skincare on day 5–7.",
      "Avoid direct sunlight or tanning beds.",
      "You may resume hair coloring after day 5–7 (scalp treatments).",

      "Initial glow/softness: 3–7 days.",
      "Hydration improvement: 1–2 weeks.",
      "Hair stimulation: 4–6 weeks.",
      "Skin texture improvement: 2–4 weeks.",
      "Full results build gradually over 4–6 weeks.",
      "A series of 4–8 sessions may be recommended depending on the area and concern.",

      "Pair treatment with hydrating IV drips for enhanced results.",
      "Always use SPF 30+ on treated areas exposed to the sun.",
      "Stay hydrated — mesotherapy benefits increase with hydration.",
      "Avoid tight clothing over body treatment areas for 24–48 hours."
    ]
  },
  {
    "title": "Chemical Peel Face/Body — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To minimize bruising and inflammation, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Both impair skin healing and increase sensitivity.",
      "For the best peel results, avoid completely.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Vitamin C (high strength), Benzoyl Peroxide, Exfoliating scrubs, Hydroquinone.",
      "This prevents irritation and ensures an even chemical peel.",

      "Avoid other aesthetic treatments (1 week prior): Laser treatments, Microneedling, Dermaplaning, Waxing or threading, Strong facials, Fillers/Botox in the treatment area.",

      "Hydrate well (24–48 hours before): Drink plenty of water to ensure the skin is well-hydrated and ready for a peel.",

      "Arrive with a clean face or body area: No makeup, creams, SPF, oils, perfumes, or lotions.",

      "Avoid sun exposure and tanning beds before your session.",
      "Do not use self-tanner for 1 week prior.",
      "If you have active cold sores, notify your practitioner — you may need antiviral medication.",
      "Make sure the skin is not irritated, sunburned, or freshly waxxed.",
      "For body peels, wear loose clothing to prevent friction afterward."
    ],

    "post": [
      "First 4–6 hours: Skin may feel warm, tight, or sensitive — this is normal.",
      "Do not touch, wash, or apply skincare or makeup.",
      "Avoid sweating or heat exposure.",

      "First 24 hours — avoid: Sun exposure, Hot showers or steam, Sweating or exercise, Swimming, Makeup, Touching or picking the skin, Saunas or hot environments.",
      "Skin must remain clean and undisturbed.",

      "24–72 hours: Use gentle cleanser and hydrating products only.",
      "DO NOT pick, pull, or peel flaking skin — this causes scarring.",
      "Avoid retinol, acids, scrubs, benzoyl peroxide, or exfoliators.",
      "Continue avoiding sun exposure.",
      "Expect dryness, flaking, or peeling — this is normal.",

      "1 week after treatment: Continue gentle skincare.",
      "Wear sunscreen daily.",
      "Avoid sun exposure and tanning beds.",
      "Resume active ingredients after day 5–7 (only when peeling is complete).",
      "Avoid waxing the treated area for 7–10 days.",

      "Glow: 3–7 days.",
      "Peeling: typically 2–5 days.",
      "Texture improvement: 1–3 weeks.",
      "Continued brightening and clarity over 4–6 weeks.",
      "A series of peels may be recommended depending on treatment goals.",

      "Apply SPF 30+ daily — sun protection is essential after a peel.",
      "Do not pick peeling skin under any circumstances.",
      "Keep skin moisturised to support recovery.",
      "Sleep on a clean pillowcase to avoid irritation.",
      "Avoid sweating or hot environments until peeling is complete."
    ]
  },
  {
    "title": "Morpheus8 Face/Body — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and swelling, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Alcohol and smoking impair healing and increase risk of bruising and swelling.",
      "Avoid completely for best results.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Benzoyl Peroxide, Exfoliating scrubs, Hydroquinone.",
      "This reduces risk of irritation during treatment.",

      "Avoid other aesthetic treatments (1 week prior): Laser, Chemical peels, Microneedling, Dermaplaning, Fillers/Botox in the area to be treated.",

      "Hydrate well (24–48 hours before): Morpheus8 results improve when the skin and body are well-hydrated.",
      "Drink plenty of water before your session.",

      "Arrive with a clean treatment area: For Face: No makeup, creams, SPF, or oils. For Body: No lotions, oils, or perfumes on the area.",

      "Avoid sun exposure prior to treatment.",
      "Eat a nutritious meal beforehand to avoid dizziness.",
      "If you have a history of cold sores (face treatment), inform your practitioner — antiviral may be recommended.",
      "Wear loose clothing if treating body areas."
    ],

    "post": [
      "First 4–6 hours: Expect redness, swelling, or mild pinpoint bleeding — this is normal.",
      "Do not touch or wash the treated area.",
      "Avoid makeup, creams, or oils.",

      "First 24 hours — avoid: Sun exposure, Hot showers or steam, Sweating or exercise, Swimming, Touching or picking the area, Saunas or steam rooms.",
      "The skin must remain clean and undisturbed.",

      "24–72 hours: Use gentle cleanser and hydrating products only.",
      "Avoid retinol, acids, scrubs, exfoliators, and harsh treatments.",
      "Mild redness, tightness, or swelling is normal.",
      "Avoid facials, chemical peels, or laser treatments.",

      "1 week after treatment: Continue gentle skincare.",
      "Use sunscreen daily.",
      "Resume active skincare after day 5–7 if the skin has fully healed.",
      "Avoid direct sunlight or tanning beds.",

      "Immediate glow: 3–5 days.",
      "Texture improvement: 2–4 weeks.",
      "Skin tightening and collagen remodeling: 3+ months.",
      "A series of 3–6 sessions is typically recommended.",

      "Keep skin hydrated for optimal healing.",
      "Sleep on a clean pillowcase.",
      "Avoid scratching or picking treated areas.",
      "Consider hydrating IV drips to support recovery.",
      "Always apply SPF 30+ daily."
    ]
  },
  {
    "title": "Collagen Stimulators (Radiesse, Sculptra, Sticol) Face/Body — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and swelling, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Alcohol and smoking can increase bruising and delay healing.",
      "Avoid completely for optimal results.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Benzoyl Peroxide, Exfoliating scrubs, Hydroquinone.",
      "This helps prevent irritation and ensures smooth injection results.",

      "Avoid other aesthetic treatments (1 week prior): Laser treatments, Chemical peels, Microneedling, Dermaplaning, Botox or other fillers in the same area.",

      "Hydrate well (24–48 hours before): Well-hydrated tissue responds better to collagen stimulators.",
      "Drink plenty of water prior to your appointment.",

      "Arrive with a clean treatment area: For Face: No makeup, creams, SPF, or oils. For Body: No lotions, oils, or perfumes on the area.",

      "Avoid sun exposure before your session.",
      "Eat a nutritious meal beforehand to avoid dizziness.",
      "Inform your practitioner if you have a history of cold sores (face treatments).",
      "Avoid caffeine the morning of treatment if you tend to feel lightheaded."
    ],

    "post": [
      "First 4–6 hours: Expect mild swelling, redness, or small bumps at injection sites — this is normal.",
      "Do not touch or massage the treated area.",
      "Avoid makeup, creams, oils, or lotions.",

      "First 24 hours — avoid: Sun exposure, Hot showers or steam, Sweating or exercise, Swimming, Touching or massaging the treated area, Makeup (for face), Saunas or steam rooms.",
      "The area must remain clean and undisturbed.",

      "24–72 hours: Use gentle cleanser and hydrating products only.",
      "Avoid retinol, acids, scrubs, or exfoliators.",
      "Mild bruising, swelling, or tenderness is normal.",
      "Avoid other aesthetic treatments in the treated area.",

      "1 week after treatment: Continue gentle skincare.",
      "Use sunscreen daily for face treatments.",
      "Resume active skincare only after day 5–7.",
      "Avoid direct sun exposure or tanning beds.",
      "Light massage may be recommended by your practitioner depending on the product.",

      "Immediate volume improvement: 1–3 days (depending on product).",
      "Collagen remodeling and long-term effect: 4–6 weeks.",
      "Full results: up to 3–6 months.",
      "A series of treatments may be recommended depending on the area and desired effect.",

      "Keep skin hydrated and protected.",
      "Sleep on a clean pillowcase.",
      "Avoid strenuous exercise or heavy pressure on treated areas for 24–48 hours.",
      "Always apply SPF 30+ daily.",
      "Follow any specific massage instructions given by your practitioner."
    ]
  },
  {
    "title": "Fat Melting Machine Face/Body — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and swelling, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Alcohol and smoking can increase swelling and reduce the effectiveness of fat melting treatments.",
      "Avoid completely for best results.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Exfoliating scrubs, Benzoyl Peroxide, Hydroquinone.",
      "This prevents irritation and enhances device effectiveness.",

      "Avoid other aesthetic treatments (1 week prior): Laser treatments, Chemical peels, Microneedling, Dermaplaning, Fillers/Botox.",

      "Hydrate well (24–48 hours before): Hydration improves treatment outcomes and aids in fat metabolism.",
      "Drink plenty of water before your session.",

      "Arrive with a clean treatment area: For Face: No makeup, creams, SPF, or oils. For Body: No lotions, oils, or perfumes on the area.",

      "Avoid sun exposure prior to treatment.",
      "Eat a nutritious meal beforehand to prevent dizziness.",
      "Avoid caffeine the morning of your session if you tend to feel lightheaded.",
      "Wear comfortable, loose clothing if body areas are being treated."
    ],

    "post": [
      "First 4–6 hours: Expect mild redness, warmth, or tenderness — this is normal.",
      "Avoid touching or massaging the treated area.",
      "Do not apply creams, oils, or makeup (face treatment).",

      "First 24 hours — avoid: Sun exposure, Hot showers or steam, Sweating or exercise, Swimming, Massaging or applying pressure to the treated area, Saunas or steam rooms.",
      "The area must remain clean and undisturbed.",

      "24–72 hours: Gentle cleansing and hydration only.",
      "Avoid harsh skincare products, scrubs, or exfoliators.",
      "Mild swelling, tenderness, or temporary redness is normal.",
      "Avoid other aesthetic treatments in the treated area.",

      "1 week after treatment: Continue gentle skincare or care routines.",
      "Resume active skincare only after day 5–7.",
      "Avoid direct sun exposure or tanning beds.",
      "Light exercise is generally acceptable unless advised otherwise by your practitioner.",

      "Initial fat reduction and contouring: 1–2 weeks.",
      "Visible improvement: 4–6 weeks.",
      "Full results: up to 3 months.",
      "Multiple sessions may be recommended depending on area and desired results.",

      "Stay hydrated to support fat metabolism and recovery.",
      "Avoid heavy pressure or friction on treated areas.",
      "Use SPF 30+ daily for face treatments.",
      "Sleep on a clean pillowcase to reduce irritation.",
      "Follow any device-specific post-care instructions provided by your practitioner."
    ]
  },
  {
    "title": "Fat Melting Injections Face/Body — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and swelling, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Alcohol and smoking can increase swelling, bruising, and delay healing.",
      "Avoid completely for optimal results.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Exfoliating scrubs, Benzoyl Peroxide, Hydroquinone.",
      "This helps prevent irritation and ensures smooth injection outcomes.",

      "Avoid other aesthetic treatments (1 week prior): Laser treatments, Chemical peels, Microneedling, Dermaplaning, Fillers/Botox in the treatment area.",

      "Hydrate well (24–48 hours before): Hydration improves healing and the effectiveness of fat metabolism.",
      "Drink plenty of water before your session.",

      "Arrive with a clean treatment area: For Face: No makeup, creams, SPF, or oils. For Body: No lotions, oils, or perfumes on the area.",

      "Avoid sun exposure prior to treatment.",
      "Eat a nutritious meal beforehand to avoid dizziness.",
      "Avoid caffeine the morning of your session if you tend to feel lightheaded.",
      "Wear loose, comfortable clothing if treating body areas."
    ],

    "post": [
      "First 4–6 hours: Expect mild swelling, redness, or tenderness at injection sites — this is normal.",
      "Do not touch or massage the treated area.",
      "Avoid applying creams, oils, or makeup (face treatment).",

      "First 24 hours — avoid: Sun exposure, Hot showers or steam, Sweating or exercise, Swimming, Touching, rubbing, or massaging the treated area, Saunas or steam rooms.",
      "The area must remain clean and undisturbed.",

      "24–72 hours: Use gentle cleansing and hydrating products only.",
      "Avoid retinol, acids, scrubs, or exfoliators.",
      "Mild bruising, redness, or tenderness is normal.",
      "Avoid other aesthetic treatments in the treated area.",

      "1 week after treatment: Continue gentle skincare or care routines.",
      "Resume active skincare only after day 5–7.",
      "Avoid direct sun exposure or tanning beds.",
      "Light exercise is acceptable unless instructed otherwise by your practitioner.",

      "Initial fat reduction: 1–2 weeks.",
      "Visible improvement: 4–6 weeks.",
      "Full results: up to 3 months.",
      "Multiple sessions may be recommended depending on the area and desired results.",

      "Stay hydrated to support fat metabolism and recovery.",
      "Avoid heavy pressure or friction on treated areas.",
      "Use SPF 30+ daily for face treatments.",
      "Sleep on a clean pillowcase to reduce irritation.",
      "Follow any specific post-care instructions provided by your practitioner."
    ]
  },
  {
    "title": "Botox Face/Body — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and swelling, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Alcohol and smoking can increase bruising and delay healing.",
      "Avoid completely for optimal results.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Exfoliating scrubs, Benzoyl Peroxide, Hydroquinone.",
      "This helps reduce irritation and swelling.",

      "Avoid other aesthetic treatments (1 week prior): Laser treatments, Chemical peels, Microneedling, Dermaplaning, Fillers in the treatment area.",

      "Hydrate well (24–48 hours before): Well-hydrated skin responds better and bruising is minimized.",
      "Drink plenty of water before your session.",

      "Arrive with a clean treatment area: For Face: No makeup, creams, SPF, or oils. For Body: No lotions, oils, or perfumes on the area.",

      "Avoid sun exposure before your session.",
      "Eat a nutritious meal beforehand to prevent dizziness.",
      "Avoid caffeine the morning of treatment if prone to lightheadedness.",
      "Discuss any neuromuscular disorders or allergies with your practitioner."
    ],

    "post": [
      "First 4–6 hours: Avoid rubbing, massaging, or applying pressure to the treated area.",
      "Do not lie down or bend forward excessively.",
      "Avoid strenuous activity immediately after treatment.",

      "First 24 hours — avoid: Touching or massaging the treated area, Strenuous exercise, Saunas, steam rooms, or hot showers, Facial or body treatments in the area, Alcohol consumption.",
      "This prevents the Botox from moving to unintended muscles.",

      "24–72 hours: Normal activities can resume, but avoid massaging or pressing the treated area.",
      "Mild bruising or swelling is normal.",
      "Avoid other aesthetic treatments in the area.",

      "1 week after treatment: Continue normal gentle skincare.",
      "Avoid direct sun exposure or tanning beds.",
      "Results begin to appear in 3–7 days and peak at 2 weeks.",

      "Initial effect: 3–7 days.",
      "Full effect: 10–14 days.",
      "Duration: 3–6 months depending on area and dose.",
      "Repeat sessions are typically recommended every 3–6 months.",

      "Sleep on a clean pillowcase.",
      "Avoid rubbing or applying pressure on the treated area.",
      "Stay hydrated.",
      "Follow any additional instructions provided by your practitioner."
    ]
  },
  {
    "title": "PRP Microneedling (Face/Hair) — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and inflammation, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Both alcohol and smoking impair healing and increase bruising.",
      "For best results, avoid completely.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Benzoyl Peroxide, Exfoliating scrubs, Hydroquinone.",
      "(For Face PRP — if doing hair only, apply to the surrounding skin).",

      "Avoid other aesthetic treatments (1 week prior): Laser, Chemical peels, Microneedling, Dermaplaning, Fillers/Botox in treatment area.",
      
      "Hydrate well (24–48 hours prior): Drink plenty of water — PRP results improve significantly when the body is well-hydrated.",

      "Arrive with a clean treatment area (Day of Treatment): For PRP Face: No makeup, creams, SPF, or oils. For PRP Hair: No hair products, oils, gels, sprays, or dry shampoo.",

      "Avoid sun exposure before your session.",
      "Eat a nutritious meal beforehand to avoid dizziness during blood draw.",
      "If you have a history of cold sores (for facial PRP), inform your practitioner — an antiviral may be recommended.",
      "Avoid caffeine the morning of your appointment if you tend to feel anxious or lightheaded."
    ],

    "post": [
      "First 4–6 hours: Expect redness, swelling, pinpoint bleeding, or a sunburn-like sensation — this is normal.",
      "Do not touch or wash the treated area (face or scalp).",
      "Avoid applying makeup, hair products, or skincare.",
      "Avoid hats, scarves, or pressure on the scalp if treated.",

      "First 24 hours — avoid: Sun exposure, Hot showers or steam, Sweating or exercise, Swimming, Hair washing (if PRP scalp), Makeup (for face PRP), Touching or picking the skin or scalp, Saunas & steam rooms, Hair dyes or chemical treatments.",
      "The area must remain clean and undisturbed.",

      "24–72 hours: Use a gentle cleanser and hydrating products only (face PRP).",
      "Avoid retinol, acids, scrubs, or exfoliators.",
      "Expect mild peeling or tightness — this is part of natural healing.",
      "For hair PRP, mild tenderness in the scalp is normal.",
      "Avoid heavy sweating and sun exposure.",

      "1 week after treatment: Continue gentle skincare or haircare.",
      "Use sunscreen daily (for face PRP).",
      "Resume active skincare only after day 5–7.",
      "Avoid direct sunlight or tanning beds.",
      "You may resume hair coloring after 5–7 days.",

      "Skin glow: 3–7 days.",
      "Hair texture improvement: 2–4 weeks.",
      "Reduced shedding: 4–8 weeks.",
      "Collagen rebuilding continues for 3+ months.",
      "Hair thickening: 3–6 months.",
      "A series of 3–6 sessions is typically recommended.",

      "Pair PRP with hydrating IV drips like Glow Hub or Beauty Hub to amplify recovery.",
      "Always use SPF 30+ daily (face PRP).",
      "Sleep on a clean pillowcase to avoid irritation.",
      "Stay hydrated — results are better when the body is well-nourished."
    ]
  },
  {
    "title": "Skin Boosters Face — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and swelling, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Alcohol and smoking can increase bruising, swelling, and slow healing.",
      "Avoid completely for best results.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Benzoyl Peroxide, Exfoliating scrubs, Hydroquinone.",
      "This ensures smooth application and minimizes irritation.",

      "Avoid other aesthetic treatments (1 week prior): Laser treatments, Chemical peels, Microneedling, Dermaplaning, Fillers or Botox in the treatment area.",

      "Hydrate well (24–48 hours before): Skin boosters work best on well-hydrated skin.",
      "Drink plenty of water prior to your session.",

      "Arrive with a clean face: No makeup, creams, SPF, or oils on the treatment area.",

      "Avoid sun exposure before your session.",
      "Eat a nutritious meal beforehand to avoid dizziness.",
      "Avoid caffeine if prone to lightheadedness.",
      "Inform your practitioner of any allergies or prior adverse reactions."
    ],

    "post": [
      "First 4–6 hours: Expect mild redness, swelling, or tenderness — this is normal.",
      "Do not touch, wash, or apply skincare or makeup.",

      "First 24 hours — avoid: Sun exposure, Hot showers or steam, Sweating or exercise, Swimming, Touching or massaging the treated area, Makeup or harsh skincare products.",
      "The area must remain clean and undisturbed.",

      "24–72 hours: Use gentle cleanser and hydrating products only.",
      "Avoid retinol, acids, scrubs, or exfoliators.",
      "Mild bruising or swelling is normal.",
      "Avoid facials, chemical peels, or laser treatments.",

      "1 week after treatment: Continue gentle skincare.",
      "Use sunscreen daily (SPF 30+).",
      "Resume active skincare only after day 5–7.",
      "Avoid direct sunlight or tanning beds.",

      "Immediate hydration and glow: same day.",
      "Skin texture improvement: 3–7 days.",
      "Long-term skin quality: 2–4 weeks.",
      "A series of 2–4 sessions may be recommended for optimal results.",

      "Keep skin hydrated.",
      "Sleep on a clean pillowcase to avoid irritation.",
      "Avoid picking or massaging the treated area.",
      "Apply SPF 30+ daily.",
      "Follow any additional instructions provided by your practitioner."
    ]
  },
  {
    "title": "Dermal Fillers Face/Body — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and swelling, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Alcohol and smoking can increase bruising, swelling, and delay healing.",
      "Avoid completely for optimal results.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Benzoyl Peroxide, Exfoliating scrubs, Hydroquinone.",
      "This ensures smoother application and minimizes irritation.",

      "Avoid other aesthetic treatments (1 week prior): Laser treatments, Chemical peels, Microneedling, Dermaplaning, Botox in the same area.",

      "Hydrate well (24–48 hours before): Hydration improves healing and the overall outcome of dermal fillers.",
      "Drink plenty of water before your session.",

      "Arrive with a clean treatment area: For Face: No makeup, creams, SPF, or oils. For Body: No lotions, oils, or perfumes on the area.",

      "Avoid sun exposure before your session.",
      "Eat a nutritious meal beforehand to avoid dizziness.",
      "Avoid caffeine the morning of treatment if prone to lightheadedness.",
      "Inform your practitioner of any allergies or prior adverse reactions."
    ],

    "post": [
      "First 4–6 hours: Expect mild redness, swelling, or tenderness — this is normal.",
      "Do not touch, press, or massage the treated area.",
      "Avoid applying makeup or skincare products immediately after treatment.",

      "First 24 hours — avoid: Sun exposure, Hot showers or steam, Sweating or exercise, Swimming, Touching or massaging the treated area, Saunas or steam rooms.",
      "The area must remain clean and undisturbed.",

      "24–72 hours: Use gentle cleanser and hydrating products only.",
      "Avoid retinol, acids, scrubs, or exfoliators.",
      "Mild bruising or swelling is normal.",
      "Avoid facials, chemical peels, or laser treatments in the treated area.",

      "1 week after treatment: Continue gentle skincare.",
      "Apply sunscreen daily (SPF 30+).",
      "Resume active skincare only after day 5–7.",
      "Avoid direct sun exposure or tanning beds.",
      "Light massage may be recommended only if instructed by your practitioner.",

      "Immediate volume and contour improvement: same day.",
      "Settling of fillers: 1–2 weeks.",
      "Long-term collagen stimulation: 4–6 weeks.",
      "A series of treatments may be recommended depending on the area and desired effect.",

      "Keep skin hydrated.",
      "Sleep on a clean pillowcase.",
      "Avoid rubbing, pressing, or massaging the treated area.",
      "Apply SPF 30+ daily.",
      "Follow any additional instructions provided by your practitioner."
    ]
  },
  {
    "title": "IV Drip — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and swelling at the injection site, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Alcohol and smoking impair hydration, circulation, and nutrient absorption.",
      "Avoid completely for optimal results.",

      "Stop active skincare products (not usually required): Active skincare does not interfere with IV drips, but avoid applying heavy oils or creams to your arms where the IV will be inserted.",

      "Avoid other aesthetic treatments (same day of drip): Laser treatments, Microneedling, Chemical peels, Any invasive procedures on the same day.",
      "This prevents compounded irritation and ensures best hydration/nutrient absorption.",

      "Hydrate well (24–48 hours before): Drink plenty of water before your IV session — hydration improves infusion efficiency and overall results.",

      "Arrive prepared: Wear comfortable clothing that allows easy access to your arm. Avoid applying heavy lotions or oils. Eat a light, nutritious meal beforehand to avoid dizziness.",

      "Avoid caffeine before your session if you are sensitive.",
      "Inform your practitioner of any allergies, medical conditions, or medications.",
      "Relax — IV drips work best when your body is calm and well-hydrated."
    ],

    "post": [
      "First 4–6 hours: Remain seated or relaxed for a few minutes after the drip to avoid dizziness.",
      "Avoid heavy activity immediately after the infusion.",
      "Do not remove or disturb the IV site if still present.",

      "First 24 hours: Drink plenty of water to support nutrient absorption.",
      "Avoid alcohol or excessive caffeine to maximize benefits.",
      "Light activity is acceptable; avoid strenuous exercise for several hours if you feel lightheaded.",

      "24–72 hours: Continue hydration to prolong the effect of the IV drip.",
      "Eat a balanced diet to support nutrient replenishment.",
      "Mild bruising at the IV site is normal — avoid massaging it.",

      "1 week after treatment: Results can last depending on the type of drip and your metabolism.",
      "Repeat sessions may be recommended for optimal effects.",
      "Maintain hydration and a healthy diet to maximize benefits.",

      "Immediate hydration and energy boost: same day.",
      "Skin glow, radiance, and improved well-being: 1–3 days.",
      "Cumulative benefits with repeated sessions.",

      "Keep the IV site clean and avoid applying pressure.",
      "Stay hydrated to maintain results.",
      "Avoid alcohol and heavy exercise immediately post-drip.",
      "Follow any specific instructions provided by your practitioner."
    ]
  },
  {
    "title": "HIFU Face/Body — Pre & Post Care",

    "pre": [
      "Avoid blood-thinning medications (7 days prior): Aspirin, Ibuprofen, Naproxen, Fish Oil, Omega-3, Vitamin E, Ginkgo Biloba, Ginseng, Garlic supplements.",
      "To reduce bruising and swelling, avoid these products completely.",
      "If you take prescribed blood thinners, please consult your doctor.",

      "Avoid alcohol and smoking (24–48 hours prior): Alcohol and smoking can impair healing and reduce treatment effectiveness.",
      "Avoid completely for optimal results.",

      "Stop active skincare products (3–5 days prior): Retinol or Retinoids, AHAs/BHAs, Benzoyl Peroxide, Exfoliating scrubs, Hydroquinone.",
      "This reduces irritation and ensures uniform energy delivery.",

      "Avoid other aesthetic treatments (1 week prior): Laser treatments, Chemical peels, Microneedling, Dermaplaning, Fillers/Botox in the same area.",

      "Hydrate well (24–48 hours before): Hydration improves skin response and recovery after HIFU.",
      "Drink plenty of water before your session.",

      "Arrive with a clean treatment area: For Face: No makeup, creams, SPF, or oils. For Body: No lotions, oils, or perfumes on the treatment area.",

      "Avoid sun exposure prior to treatment.",
      "Eat a nutritious meal beforehand to avoid dizziness.",
      "Avoid caffeine if prone to lightheadedness.",
      "Inform your practitioner of any implants or metal devices in the treatment area."
    ],

    "post": [
      "First 4–6 hours: Mild redness, warmth, or tenderness is normal.",
      "Do not touch or massage the treated area immediately.",
      "Avoid applying creams or oils in the first few hours.",

      "First 24 hours — avoid: Sun exposure, Hot showers or steam, Sweating or exercise, Swimming, Touching or massaging the treated area, Saunas or steam rooms.",
      "The area must remain clean and undisturbed.",

      "24–72 hours: Use gentle cleanser and hydrating products only.",
      "Avoid retinol, acids, scrubs, or exfoliators.",
      "Mild swelling or tingling sensation is normal.",
      "Avoid other aesthetic treatments in the treated area.",

      "1 week after treatment: Continue gentle skincare.",
      "Apply sunscreen daily (SPF 30+).",
      "Resume active skincare only after day 5–7.",
      "Avoid direct sun exposure or tanning beds.",

      "Immediate tightening: 1–2 weeks.",
      "Skin lifting and contouring: 6–12 weeks.",
      "Collagen remodeling: continues for 3–6 months.",
      "Multiple sessions may be recommended depending on area and desired effect.",

      "Keep skin hydrated.",
      "Sleep on a clean pillowcase to avoid irritation.",
      "Avoid rubbing, pressing, or massaging the treated area.",
      "Follow any additional instructions provided by your practitioner.",
      "Always apply SPF 30+ daily for treated areas."
    ]
  },
  {
    "title": "Soprano Titanium Laser Hair Removal — Pre & Post Care",

    "pre": [
      "Shave the area that you want to get lasered at least 24 hours before the appointment.",
      "Avoid sun exposure, tanning beds, and self-tanning products at least 24 hours prior to treatment.",
      "Avoid exfoliating active ingredients on your treatment area for at least 3 days prior to treatment.",
      "Avoid photosensitizing medications, such as antibiotics, for at least 2 days prior to treatment."
    ],

    "post": [
      "Avoid direct sun exposure after laser hair removal, and be sure to wear SPF to help prevent damage.",
      "If skin feels a bit sensitive after treatment, you can utilize an ice pack or Aloe Vera gel to soothe the treatment area.",
      "Feel free to shave between appointments."
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
