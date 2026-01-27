import React from "react";
import { Button } from "@/components/ui/button";

const HomeHero = () => {
  return (
    <section className="mx-auto max-w-7xl relative bg-[linear-gradient(to_right,#061C5B,#0B2FA0)] text-white">
      <div className=" px-6 py-20">  
        <p className="mb-6 text-center text-sm font-medium tracking-wide text-white/80">
          Salesforce. The #1 AI CRM.
        </p>
        <h1 className="mx-auto max-w-5xl text-center font-playfair text-4xl font-bold leading-[1.15] md:text-6xl">
        Turn CRM Into a{" "}
          <span className="text-sky-400"> Revenue Generating Machine. </span>
        </h1>
        <p className="mx-auto mt-8 max-w-4xl text-center font-poppins text-base leading-relaxed text-white/90 md:text-lg">
        AvolveLabs helps businesses design scalable revenue systems using CRM, Automation, and Autonomous AI Agents.
 We connect sales, service, marketing, and operations into one intelligent growth engine that drives adoption, efficiency, and measurable ROI.

        </p>
        <div className="mt-12 flex flex-col font-poppins items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-[#0176d3] px-10 py-6 text-base font-semibold hover:bg-[#014486]"
          >
           Start Your Transformation

          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white bg-white px-10 py-6 text-base font-semibold text-sky-600 hover:bg-gray-100"
          >
          Explore Our Methodology

          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
