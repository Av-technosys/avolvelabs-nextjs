import React from "react";
import CaseStudyTemplate from "@/components/caseStudyTemplate";

export const metadata = {
  title: "How Morzze Transformed Customer Experience with Zoho One | AvolveLabs",
  description:
    "Learn how Morzze integrated marketing, CRM, and field service into a single connected ecosystem using Zoho One to elevate its luxury customer journey.",
  alternates: {
    canonical: "https://avolvelabs.com/case-studies/morzze-connected-customer-experience-zoho-one",
  },
};

export default function MorzzeZohoOnePage() {
  return (
    <CaseStudyTemplate
      badge="Luxury Manufacturing • Case Study"
      title="Morzze Builds a Connected Customer Experience with Zoho One"
      client="Morzze"
      industry="Luxury Kitchen & Bathroom Manufacturing"
      solution="Zoho One"
      partner="AvolveLabs"
      image="/images/case6.jpeg"
      imageAlt="Morzze Connected Customer Experience with Zoho One"
      lead="Morzze, a premium luxury kitchen and bathroom manufacturer, needed a unified system to manage its entire customer lifecycle across expanding digital channels and dealer networks."
      sections={[
        {
          title: "The Challenge",
          content:
            "Customer journeys started across fragmented channels—Instagram, WhatsApp, website visits, architect referrals, and direct sales. Without a central hub, Morzze risked losing inquiries and service requests between disconnected teams.",
        },
        {
          title: "The Zoho One Solution",
          content:
            "Morzze deployed Zoho One to consolidate sales, marketing, and post-sale operations into a single connected ecosystem.",
          items: [
            {
              label: "Zoho CRM",
              text: "Centralizes customer data, lead tracking, and sales history.",
            },
            {
              label: "Marketing Suite",
              text: "Powers automated email campaigns, social engagement, and customer segmentation.",
            },
            {
              label: "SalesIQ & PageSense",
              text: "Tracks website visitor intent and product interest to trigger timely sales outreach.",
            },
            {
              label: "Omnichannel Lead Capture",
              text: "Converts social media and digital interactions directly into actionable leads.",
            },
            {
              label: "Zoho FSM (Field Service Management)",
              text: "Streamlines installations, technician dispatching, and maintenance updates post-purchase.",
            },
          ],
        },
        {
          title: "The Business Impact",
          items: [
            {
              label: "360° Visibility",
              text: "Full clarity into every stage of the prospect and customer journey.",
            },
            {
              label: "Seamless Field Operations",
              text: "Structured technician tracking and installation management.",
            },
            {
              label: "Cross-Team Alignment",
              text: "Unified workflows across marketing, sales, and service.",
            },
            {
              label: "Scalable Infrastructure",
              text: "A foundation built to support continuous growth.",
            },
          ],
        },
        {
          title: "The Outcome",
          content:
            "Zoho One turns isolated touchpoints into a unified customer story. From discovering a luxury faucet online to receiving expert installation, Morzze delivers a seamless experience at every step.",
        },
      ]}
    />
  );
}
