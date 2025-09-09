import React from "react";
import IncidentReportClient from "./IncidentReportClient";

export const metadata = {
  title: "Clinic Internal Incident Report Form | IV Wellness Lounge Clinic",
  description:
    "Fill out the internal incident report form for IV Wellness Lounge Clinic. Include details of the incident, client information, treatment details, and actions taken.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://ivhub.com/incidentreport" },
  openGraph: {
    title: "Clinic Internal Incident Report Form | IV Wellness Lounge Clinic",
    description:
      "Fill out the internal incident report form for IV Wellness Lounge Clinic. Include details of the incident, client information, treatment details, and actions taken.",
    url: "https://ivhub.com/incidentreport",
    siteName: "IV Wellness Lounge Clinic in Dubai",
    images: [
      {
        url: "https://ivhub.com/og.png",
        width: 1200,
        height: 630,
        alt: "IV Wellness Lounge Clinic in Dubai"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Internal Incident Report Form | IV Wellness Lounge Clinic",
    description:
      "Fill out the internal incident report form for IV Wellness Lounge Clinic. Include details of the incident, client information, treatment details, and actions taken.",
    images: ["https://ivhub.com/og.png"]
  }
};

export default function Page() {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-form">
          <div className="form-wrapper">
            <div className="form-wrap">
              <div className="right">
                <h1>Clinic Internal Incident Report Form</h1>
                <IncidentReportClient />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}