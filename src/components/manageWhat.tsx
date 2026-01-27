"use client"
import React from "react";
import { Button } from "@/components/ui/button";

const ManageWhat = () => {
  return (
    <>
      <div
        className="relative overflow-hidden"
      >
        <section className="text-center px-8 pb-10">
          <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold leading-tight max-w-4xl mx-auto">
            What is Manage Service?
          </h2>
          <p className="font-poppins text-sm md:text-lg text-gray-700 max-w-4xl mx-auto mt-8 leading-relaxed">
            Crm Service is the complete platform that empowers your service teams to
            deliver seamless support across every channel — from the contact centre, to the field, to
            HR, and now IT Service. With humans and AI agents working together on one unified,
            metadata-based platform, you can transform every customer interaction into a
            personalised experience while driving efficiency.
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

export default ManageWhat;