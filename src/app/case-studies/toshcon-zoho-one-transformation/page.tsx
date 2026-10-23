import React from "react";
import CaseStudyTemplate from "@/components/caseStudyTemplate";

export const metadata = {
  title: "Toshcon Zoho One Case Study | Connected Field & Sales Operations | AvolveLabs",
  description:
    "Discover how AvolveLabs transformed Toshcon's sales, field service, and marketing operations using a unified Zoho One ecosystem.",
  alternates: {
    canonical: "https://avolvelabs.com/case-studies/toshcon-zoho-one-transformation",
  },
};

export default function ToshconZohoOneTransformationPage() {
  return (
    <CaseStudyTemplate
      badge="Manufacturing & Power pH Meters • Case Study"
      title="Toshcon: Building a Connected Customer & Field Operations Engine"
      client="Toshcon"
      industry="Manufacturing & Power pH Meters"
      solution="Zoho One (CRM, Marketing, FSM, HR, Projects)"
      partner="AvolveLabs"
      image="/images/dashboard.jpg"
      imageAlt="Toshcon Connected Customer and Field Operations Engine"
      lead="How Toshcon unified sales, marketing, and field operations under a single digital ecosystem."
      sections={[
        {
          title: "The Challenge",
          content: [
            "As Toshcon scaled across multiple regions, managing customer touchpoints through disconnected tools created blind spots. Lead details were scattered across marketplaces, sales follow-ups lacked standardized processes, and field service teams lacked real-time visibility into post-sale installations and customer requests.",
            "Toshcon didn't just need a CRM they needed a single platform to bridge sales, marketing, field service, and internal operations.",
          ],
        },
        {
          title: "The Transformation",
          content:
            "AvolveLabs architected a unified Zoho One ecosystem designed around Toshcon’s end-to-end customer journey:",
          items: [
            {
              label: "Omnichannel Lead Capture",
              text: "Automatically routes leads from IndiaMART, Meta Ads, Google Ads, WhatsApp, and the website directly into Zoho CRM.",
            },
            {
              label: "Structured Sales Journeys",
              text: "Implemented automated Blueprints, discount approval workflows, and data validation rules for New Business, Dealers, and Exports.",
            },
            {
              label: "Automated Lead Nurturing",
              text: "Connected CRM data to Zoho Marketing Automation to run segmented campaigns based on customer behavior and purchase history.",
            },
            {
              label: "Connected Field Service",
              text: "Fully integrated Zoho FSM with CRM and Books, enabling real-time technician dispatching, geo-tagged mobile check-ins, and digital job sign-offs.",
            },
            {
              label: "Unified Workforce & Operations",
              text: "Streamlined HR with Zoho People, unified internal communication through Zoho Connect, and structured R&D workflows in Zoho Projects.",
            },
          ],
          workflow:
            "Multi-Channel Leads ➔ Zoho CRM ➔ Automated Sales Blueprint ➔ Zoho FSM (Field Dispatch) ➔ Zoho Analytics",
        },
        {
          title: "The Impact",
          items: [
            {
              label: "Zero Lead Leakage",
              text: "Centralized incoming inquiries from 8+ channels into a single pipeline.",
            },
            {
              label: "Accelerated Sales Cycles",
              text: "Enforced standardized follow-up and approval rules across all sales channels.",
            },
            {
              label: "Complete Visibility",
              text: "Replaced manual departmental updates with live Zoho Analytics dashboards spanning sales, marketing, field service, and HR.",
            },
          ],
          quote:
            "AvolveLabs transformed our customer operations from a fragmented process into a connected, scalable ecosystem.",
        },
      ]}
    />
  );
}
