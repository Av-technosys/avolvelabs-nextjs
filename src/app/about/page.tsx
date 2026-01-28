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

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutAgent />
      <AboutWhoWeAre />
      <AboutMission />
      <AboutCoreValues />
      <AboutCommitment />
      <AboutBranding />
      <Testimonial />
      <BrandCarousel />
      <HomeLatest/>
    </div>
  );
};

export default page;
