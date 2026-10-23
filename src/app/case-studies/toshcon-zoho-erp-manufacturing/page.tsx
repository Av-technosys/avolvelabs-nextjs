import React from "react";
import CaseStudyTemplate from "@/components/caseStudyTemplate";

export const metadata = {
  title: "Zoho ERP for Manufacturing Case Study | Toshcon & AvolveLabs",
  description:
    "See how Toshcon modernized production, BOM tracking, inventory, and shop-floor quality control with a custom Zoho Manufacturing ERP.",
  alternates: {
    canonical: "https://avolvelabs.com/case-studies/toshcon-zoho-erp-manufacturing",
  },
};

export default function ToshconManufacturingErpPage() {
  return (
    <CaseStudyTemplate
      badge="Manufacturing & Power pH Meters • Case Study"
      title="Toshcon: Replacing Excel Spreadsheets with a Smart Manufacturing ERP"
      client="Toshcon"
      industry="Manufacturing & Power pH Meters"
      solution="Zoho Manufacturing ERP"
      partner="AvolveLabs"
      image="/images/case4.jpeg"
      imageAlt="Toshcon Manufacturing ERP"
      lead="How Toshcon digitized production tracking, inventory, quality control, and workforce productivity."
      sections={[
        {
          title: "The Challenge",
          content:
            "Managing multi-level Bills of Materials (BOMs), work orders, raw material consumption, and shop-floor productivity across separate Excel spreadsheets led to operational bottlenecks. Management lacked real-time visibility into shop-floor progress, inventory levels, and production stage delays, making reporting slow and reactive.",
        },
        {
          title: "The Transformation",
          content:
            "AvolveLabs designed a custom, connected Zoho Manufacturing ERP layer built on Zoho Creator, Inventory, Books, and Analytics:",
          items: [
            {
              label: "Centralized BOM & Product Masters",
              text: "Replaced version-controlled spreadsheets with systematically tracked multi-level BOMs and revision histories.",
            },
            {
              label: "Digital Shop Floor & Job Cards",
              text: "Digitized work orders and assigned daily tasks directly to work centers and individual operators via digital job cards.",
            },
            {
              label: "Embedded Quality Control (QC)",
              text: "Integrated mandatory QC inspection checklists at every phase—Incoming, In-Process, and Final Dispatch—linking non-conformance records directly to work orders.",
            },
            {
              label: "Connected Vendor Portal",
              text: "Automated RFQs, PO approvals, and vendor communication through a dedicated digital portal.",
            },
            {
              label: "Shop-Floor Productivity Analytics",
              text: "Linked operator activity with biometric attendance to generate real-time worker KPI scorecards and shift productivity reports.",
            },
          ],
          workflow:
            "Sales Order ➔ Multi-Level BOM ➔ Purchase Order ➔ Production & Job Card ➔ Integrated QC ➔ Dispatch",
        },
        {
          title: "The Impact",
          items: [
            {
              label: "Single Source of Truth",
              text: "Eliminated reliance on disconnected Excel sheets across production, inventory, and procurement.",
            },
            {
              label: "Real-Time Shop Floor Visibility",
              text: "Enabled live tracking of work-in-progress (WIP) status, machine usage, and stage bottlenecks.",
            },
            {
              label: "Scrap & Waste Optimization",
              text: "Created direct traceability between raw material consumption, defect tracking, and financial reporting.",
            },
          ],
          quote:
            "Moving from Excel to a connected Zoho ERP gave Toshcon total control over shop-floor operations, material flow, and worker efficiency.",
        },
      ]}
    />
  );
}
