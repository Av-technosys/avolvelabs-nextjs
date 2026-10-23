import React from "react";
import CaseStudyTemplate from "@/components/caseStudyTemplate";

export const metadata = {
  title: "R-One Power Solutions: Building a Connected Solar Project Workflow with Zoho One | AvolveLabs",
  description:
    "A signed solar deal starts a chain of work across sales, site teams, procurement, finance, and service. Discover how AvolveLabs helped R-One Power Solutions build a connected solar project workflow with Zoho One.",
  alternates: {
    canonical: "https://avolvelabs.com/case-studies/r-one-power-solutions",
  },
};

export default function ROnePowerSolutionsPage() {
  return (
    <CaseStudyTemplate
      badge="Solar EPC • Case Study"
      title="R-One Power Solutions: Building a Connected Solar Project Workflow with Zoho One"
      client="R-One Power Solutions"
      industry="Solar EPC"
      partner="AvolveLabs"
      coreApps="Zoho CRM, Zoho Inventory, and Zoho Books, zoho projects"
      image="/images/solar-case-study.jpg"
      imageAlt="R-One Power Solutions Solar Project Workflow"
      lead="A signed solar deal starts a chain of work across sales, site teams, procurement, finance, and service. R-One Power Solutions needed a clearer way to manage those handoffs while building a system that could follow each project from the first inquiry to support after installation."
      sections={[
        {
          title: "The challenge",
          content: [
            "Solar projects have many moving parts. A sales representative needs site survey details to prepare an accurate quote. The project team needs to know when approvals and materials are ready. Finance needs visibility into purchases and billing milestones. After handover, service requests still need an owner.",
            "R-One’s goal was to bring these activities into a structured workflow so teams could find the information they needed and understand what should happen next.",
          ],
        },
        {
          title: "What AvolveLabs delivered",
          content: [
            "AvolveLabs established the core Zoho One workflows across CRM, Inventory, and Books and trained R-One’s team to use them.",
            "Zoho CRM provides a structured place to manage customer inquiries, sales follow-ups, and opportunities. Zoho Inventory supports the tracking of products and purchasing activity, while Zoho Books brings accounting and billing into the same operational environment. Together, these applications create a foundation for connecting a customer commitment with the materials and financial work behind it.",
          ],
        },
        {
          title: "The end-to-end solution design",
          content: "AvolveLabs also mapped how the wider solar project lifecycle can work across Zoho One:",
          items: [
            {
              label: "Inquiry and site survey",
              text: "Capture a lead, assign an owner, record site conditions, and prepare a quotation.",
            },
            {
              label: "Agreement and billing",
              text: "Move an approved deal into digital signing and milestone-based invoicing.",
            },
            {
              label: "Procurement and permits",
              text: "Track required materials alongside utility approval and permit deadlines.",
            },
            {
              label: "Installation and handover",
              text: "Coordinate project tasks, field engineer visits, commissioning checks, and customer documentation.",
            },
            {
              label: "Service and maintenance",
              text: "Manage support requests and annual maintenance contract renewals after installation.",
            },
          ],
          extraText:
            "The proposed expansion uses Zoho Projects, a custom Zoho Creator permit tracker, Zoho FSM, Zoho Desk, Zoho Sign, and Zoho Analytics to support these later stages.",
        },
        {
          title: "The outcome",
          content: [
            "R-One Power Solutions has a trained team and a structured foundation for managing sales, inventory, and accounts in Zoho One. The broader blueprint gives each department a defined place in the project journey, with a clear path to connect delivery and after-sales service as those workflows are rolled out.",
            "For solar businesses, the value is straightforward: fewer unclear handoffs and a better view of what each project needs next.",
          ],
        },
      ]}
    />
  );
}
