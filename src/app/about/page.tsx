import AboutAgent from "@/components/aboutAgent";
import AboutBranding from "@/components/aboutBranding";
import AboutCommitment from "@/components/aboutCommitment";
import AboutCoreValues from "@/components/aboutCoreValues";
import AboutHero from "@/components/aboutHero";
import AboutMission from "@/components/aboutMission";
import AboutWhoWeAre from "@/components/aboutWhoWeAre";
import BrandCarousel from "@/components/brandCarousel";
import HomeLatest from "@/components/homeLatest";
import Testimonial from "@/components/testimonial";
import React from "react";
import styles from "@/app/pages.module.css";

export const metadata = {
  title: "About AvolveLabs | Customer Relationship Management Experts",
  description:
    "We are a leading CRM strategy and development company offering custom CRM software solutions to align technology with business goals and accelerate growth.",
  alternates: {
    canonical: "https://avolvelabs.com/about",
  },
};

const page = () => {
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <AboutHero />
      <AboutAgent />
      <AboutWhoWeAre />
      <AboutMission />
      <AboutCoreValues />
      <AboutCommitment />
      <AboutBranding />
      <BrandCarousel />
      <Testimonial />
      <HomeLatest />
    </main>
  );
};

export default page;
