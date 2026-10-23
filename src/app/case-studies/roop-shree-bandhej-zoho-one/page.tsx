import React from "react";
import CaseStudyTemplate from "@/components/caseStudyTemplate";

export const metadata = {
  title: "Roop Shree Bandhej: From Multiple Tools to One Connected Zoho One System | AvolveLabs",
  description:
    "Learn how Roop Shree Bandhej unified sales, inventory, WhatsApp marketing, and order management with Zoho One.",
  alternates: {
    canonical: "https://avolvelabs.com/case-studies/roop-shree-bandhej-zoho-one",
  },
};

export default function RoopShreeBandhejPage() {
  return (
    <CaseStudyTemplate
      badge="Apparel & Retail • Case Study"
      title="Roop Shree Bandhej: From Multiple Tools to One Connected Zoho One System"
      client="Roop Shree Bandhej"
      industry="Apparel & Retail"
      solution="Zoho One (CRM, Inventory, Social, Invoicing)"
      partner="AvolveLabs"
      image="/images/pivot.jpg"
      imageAlt="Roop Shree Bandhej Connected Zoho One System"
      lead="Roop Shree Bandhej moved from a fragmented software setup to a single connected Zoho One ecosystem, bringing sales, marketing, inventory, and order operations together."
      sections={[
        {
          title: "The Challenge",
          content: [
            "Roop Shree Bandhej was using multiple tools for lead management, WhatsApp communication, inventory, social media, order tracking, and invoicing.",
            "Despite paying for several subscriptions, the team still faced disconnected data, manual follow-ups, limited visibility, and difficulty managing the complete customer journey from one place.",
          ],
        },
        {
          title: "The Solution",
          content:
            "AvolveLabs implemented Zoho One to bring their sales, marketing, inventory, customer communication, and order operations into one connected ecosystem.",
          items: [
            { text: "Website and WhatsApp enquiries captured directly into Zoho CRM" },
            { text: "Centralized lead and customer tracking" },
            { text: "Follow-up and sales activity management" },
            { text: "Inventory and stock management through Zoho Inventory" },
            { text: "Sales order and shipment tracking" },
            { text: "Social media scheduling and management through Zoho Social" },
            { text: "WhatsApp marketing and customer engagement" },
            { text: "Customer segmentation for targeted campaigns" },
            { text: "Invoicing connected with the sales and order process" },
          ],
        },
        {
          title: "The Workflow",
          content:
            "This gives the team a clear view of each customer from the first enquiry to final order fulfillment.",
          workflow:
            "Website / WhatsApp Enquiry → Zoho CRM → Follow-up → Customer → Sales Order → Inventory → Shipment → Invoice",
        },
        {
          title: "The Impact",
          content:
            "By moving to Zoho One, Roop Shree Bandhej reduced dependency on multiple standalone tools and created a more manageable business system. The team now benefits from:",
          items: [
            { text: "Centralized customer data" },
            { text: "Better lead tracking" },
            { text: "Improved inventory visibility" },
            { text: "Structured order and shipment management" },
            { text: "Easier WhatsApp and social media marketing" },
            { text: "Reduced manual coordination" },
            { text: "Fewer disconnected subscriptions" },
            { text: "Better visibility across sales and operations" },
          ],
        },
        {
          title: "The Result",
          content:
            "Roop Shree Bandhej moved from a fragmented software setup to a single connected Zoho One ecosystem, helping the team manage customers, sales, inventory, marketing, shipments, and invoicing more efficiently.",
          extraText: "Multiple tools. One platform. Better control.",
        },
      ]}
    />
  );
}
