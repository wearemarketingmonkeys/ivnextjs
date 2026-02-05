// app/giftcard/page.jsx
import GiftCardClient from "./GiftCardClient";

export const metadata = {
  title: "Gift Card Form | IV Wellness Lounge Clinic in Dubai",
  description: "Submit gift card details at IV Wellness Lounge Clinic in Dubai.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/giftcard" },
  openGraph: {
    title: "Gift Card Form | IV Wellness Lounge Clinic in Dubai",
    description: "Submit gift card details at IV Wellness Lounge Clinic in Dubai.",
    url: "https://ivhub.com/giftcard",
    siteName: "IV Wellness Lounge",
    images: [{ url: "https://ivhub.com/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Card Form | IV Wellness Lounge Clinic in Dubai",
    description: "Submit gift card details at IV Wellness Lounge Clinic in Dubai.",
    images: ["https://ivhub.com/og.png"],
  },
};

export default function Page() {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-form">
          <div className="form-wrapper">
            <div className="form-wrap">
              <div className="right">
                <h1>Gift Card Form</h1>
                <GiftCardClient />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
