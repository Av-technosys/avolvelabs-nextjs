"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ManageWhat = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <section className="text-center px-8 pb-10">
          <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold leading-tight max-w-4xl mx-auto">
           Scaling Your Business Without the Overhead

          </h2>
          <p className="font-poppins text-sm md:text-lg text-gray-700 max-w-4xl mx-auto mt-8 leading-relaxed">
          Salesforce is the engine of your enterprise, but maintaining it shouldn't be a full time distraction for your leadership. At Avolve Labs, we provide the technical expertise and strategic foresight required to transform a clunky database into a high-performance growth engine.We don’t just close tickets we solve business bottlenecks. Our mission is to ensure your CRM evolves at the speed of your ambition.

          </p>
           <p className="font-poppins text-sm md:text-lg text-gray-700 max-w-4xl mx-auto mt-8 leading-relaxed">
</p>
          <div className="flex flex-row items-center justify-center gap-1 md:gap-3 mt-10 px-2">
            <Button
              asChild // <--- Ye sabse important hai
              className="font-poppins cursor-pointer bg-[#0176d3] hover:bg-[#015ba3] text-white px-6 py-6 rounded-lg text-base font-semibold transition-all duration-300 shadow-md"
            >
              <Link href="/services/managed-services">Find out more</Link>
            </Button>
            <Link href="/about">
              <Button
                variant="outline"
                className="cursor-pointer font-poppins border-[#0176d3] text-[#0176d3] hover:bg-[#f0f7ff] px-8 py-6 rounded-lg text-base font-semibold transition-all duration-300"
              >
                Explore More
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManageWhat;
