"use client"
import React from "react";
import { Button } from "@/components/ui/button";

const CrmWhat = () => {
  return (
    <>
      <div
        className="relative overflow-hidden"
      >
        <section className="text-center px-8 pb-10">
          <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold leading-tight max-w-4xl mx-auto">
        Turn Your CRM Into a Revenue Engine, Not Just a Database.
          </h2>
          <p className="font-poppins text-md md:text-[18px] text-gray-700 max-w-4xl mx-auto mt-8 leading-relaxed">
          We move beyond standard implementations to design specific revenue architectures, human centric workflows, and autonomous AI agents.
From Chaos to Clarity: Most CRM projects fail because they start with technology, not business goals. We start with Revenue Architecture. Whether you are using Salesforce, Zoho or HubSpot. we ensure your CRM maps directly to how your teams sell, serve, and scale.
          </p>
        <div className="flex flex-row items-center justify-center gap-1 md:gap-3 mt-10 px-2">
            <Button 
              className="font-poppins bg-[#0176d3] hover:bg-[#015ba3] text-white px-6 py-6 rounded-lg text-base font-semibold transition-all duration-300 shadow-md"
            >
              Find out more
            </Button>
            <Button 
              variant="outline" 
              className="font-poppins border-[#0176d3] text-[#0176d3] hover:bg-[#f0f7ff] px-8 py-6 rounded-lg text-base font-semibold transition-all duration-300"
            >
              Explore AI
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CrmWhat;