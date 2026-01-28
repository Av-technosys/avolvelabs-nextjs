"use client";
import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "./ui/button";
import Image from "next/image";

const HomeValues = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className=" lg:w-1/2 flex flex-col items-start">
          <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold leading-[1.1] mb-8 tracking-tight">
         CRM Strategy & Optimization Services
          </h2>
          <p className="font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed mb-10 opacity-90">
           From technical health checks to user adoption and ROI measurement, we help organizations unlock the full value of their CRM investments.
          </p>
          <div className="flex flex-row gap-1 ">
            <Button className="bg-[#0176d3] font-poppins hover:bg-[#014486] text-white font-bold h-auto px-4 md:px-8 py-3 rounded-xl shadow-sm transition-all active:scale-95 whitespace-nowrap text-sm md:text-base">
              See what drives
            </Button>

            <Button
              variant="outline"
              className="group border-2 font-poppins border-[#0176d3] text-[#0176d3] hover:bg-blue-50 hover:text-[#0176d3] font-bold h-auto px-4 md:px-8 py-3 rounded-xl transition-all active:scale-95 whitespace-nowrap text-sm md:text-base"
            >
              Take the pledge
              <IconArrowRight
                size={18}
                stroke={2.5}
                className="ml-2 group-hover:translate-x-1 transition-transform inline"
              />
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl w-full h-0 pb-[75%] bg-[linear-gradient(to_right,#061C5B,#0B2FA0)]">
            <Image
              width={800}
              height={600}
              unoptimized
              src="/business-platform-change.jpg"
              alt="Core Values"
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
              loading="lazy"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-white text-center p-6">
                <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-80 mb-2">
                  Our Mission
                </p>
                <p className="text-2xl font-bold">
                  1% Equity. 1% Product. 1% Time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeValues;
