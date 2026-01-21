"use client";
import React from "react";
import { IconExternalLink, IconFileText } from "@tabler/icons-react";
import Image from "next/image";

const HomeReportCard = () => {
  return (
    <section className="py-10 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title: No Alerts */}
        <h2 className="text-center text-[25px] md:text-[32px] font-bold font-playfair text-[#032d60] mb-14 tracking-tight leading-tight">
          See why analysts agree Salesforce should be your{" "}
          <br className="hidden lg:block" /> Agentic AI partner.
        </h2>
        <div className="rounded-[32px] border border-slate-100 shadow-sm bg-white p-4 md:p-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative aspect-video rounded-2xl overflow-hidden bg-[linear-gradient(to_right,#061C5B,#0B2FA0)] flex items-center justify-center p-6 shadow-inner">
            <Image
              width={800}
              height={600}
              unoptimized
              src="https://plus.unsplash.com/premium_photo-1661315406324-329dd27ebc34?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVwb3J0fGVufDB8fDB8fHww"
              alt="ROI Stats"
              className="w-full h-full rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Right: Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
            <div className="inline-flex font-poppins items-center gap-2 bg-[#f0f4f8] text-[#032d60] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              <IconFileText size={14} stroke={2.5} />
              Report
            </div>

            <h3 className="text-[22px] md:text-[22px] font-poppins font-bold text-[#032d60] leading-[1.15]">
              Agentforce delivers ROI faster and at a lower cost than a DIY
              approach.
            </h3>

            {/* Shadcn-style Button */}
            <button className="group mt-4 font-poppins flex items-center gap-2 px-8 py-3.5 border-2 border-[#0176d3] text-[#0176d3] font-bold rounded-xl hover:bg-[#0176d3] hover:text-white transition-all duration-300 active:scale-95">
              Read the Valoir report
              <IconExternalLink
                size={18}
                stroke={2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReportCard;
