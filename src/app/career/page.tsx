// Isme "use client" NAHI hoga

import CareerClient from "./careerClient";

export const metadata = {
  title: "Careers at AvolveLabs | Join Our Team",
  description: "Explore exciting career opportunities at AvolveLabs. Join our team of innovators and be part of a dynamic team driving innovation and growth. Contact us.",
  alternates: {
    canonical: "https://avolvelabs.com/career",
  },
};

export default function CareerPage() {
  return <CareerClient />;
}