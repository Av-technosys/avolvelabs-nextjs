import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact AvolveLabs | CRM Software and Consulting Solutions",
  description: "Get in touch with AvolveLabs for expert CRM software consulting, strategy support, and custom CRM solutions. Fill the form or call us to grow your business.",
  alternates: {
    canonical: "https://avolvelabs.com/contact/",
  },
};

export default function Page() {
  return <ContactClient />;
}