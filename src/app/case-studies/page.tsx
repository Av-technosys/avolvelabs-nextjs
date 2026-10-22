import CaseStudiesClient from "./CaseStudiesClient";

export const metadata = {
  title: "Customer Relationship Management Case Studies | AvolveLabs",
  description: "AvolveLabs CRM case studies highlight real business challenges, system design approaches, and outcomes across sales, operations, and revenue processes.",
  alternates: {
    canonical: "https://avolvelabs.com/case-studies",
  }
}

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
