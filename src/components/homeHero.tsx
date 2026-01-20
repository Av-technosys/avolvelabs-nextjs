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
          Humans and agents drive{" "}
          <span className="text-sky-400">customer</span>
          <br />
          <span className="text-sky-400">success together.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-4xl text-center font-poppins text-base leading-relaxed text-white/90 md:text-lg">
          Agentforce transforms Sales, Service, Commerce, Marketing, IT, and more
          by uniting apps, data, and agents on one trusted platform. Now every
          department is an engine for growing customer success – from Sales
          following up on every lead instantly to Service delivering 24/7
          expertise. Proven ROI, delivered.
        </p>
        <div className="mt-12 flex flex-col font-poppins items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-[#0176d3] px-10 py-6 text-base font-semibold hover:bg-[#014486]"
          >
            Explore Agentforce
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white bg-white px-10 py-6 text-base font-semibold text-sky-600 hover:bg-gray-100"
          >
            Calculate your ROI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
