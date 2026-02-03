// app/page.tsx (Server Component)
import ClientPage from "./clientpage"; 

export const metadata = {
  title: "CRM Software Development Company for Businesses | AvolveLabs",
  description: "AvolveLabs is a CRM software development company that helps growing businesses align their CRM with sales, teams, and revenue strategy for better growth.",
  alternates: {
    canonical: "https://avolvelabs.com/",
  },
};

export default function Home() {
  return <ClientPage />;
}