
import React from "react";
import { Button } from "./ui/button";

const CrmHero = () => {
  return (
    <>
      <div
        className="relative w-full bg-no-repeat bg-bottom overflow-hidden"
        style={{
          backgroundImage: "url('/aboutImg.png')",
          backgroundSize: "clamp(100%, 30vw + 100%, 250%) auto",
          backgroundColor: "#fdf2f4",
          backgroundBlendMode: "multiply",
        }}
      >
        <section className="text-center md:px-8 px-6 pt-16 pb-20 md:pt-10 md:pb-52 bg-linear-to-b from-white/40 to-transparent">
          <h1 className="font-playfair text-3xl md:text-6xl font-bold text-[#032d60] leading-tight">
            Turn Your CRM Into a Revenue Engine, 
            <br />
            <span className="text-sky-600">Not Just a Database.</span>
          </h1>
          <p className="font-poppins text-sm md:text-lg text-gray-700 max-w-6xl mx-auto mt-6 md:mt-10 px-2 md:px-4 leading-relaxed">
            We move beyond standard implementations to design specific revenue architectures, human centric workflows, and autonomous AI agents.

From Chaos to Clarity: Most CRM projects fail because they start with technology, not business goals. We start with Revenue Architecture. Whether you are using Salesforce, Zoho or HubSpot. we ensure your CRM maps directly to how your teams sell, serve, and scale.
          </p>
          
        </section>
        <div className="">
          <svg viewBox="380 0 1040 120" preserveAspectRatio="none" className="">
            <path
              d="M0 120 L0 120 C360 0 1080 0 1440 120 L1440 120 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default CrmHero;
