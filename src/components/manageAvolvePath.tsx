"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Map, Rocket, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ManageAvolvePath = () => {
  const steps = [
    {
      title: "The Discovery",
      desc: "We perform a deep dive audit of your current Salesforce Org to find technical debt and security gaps.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "The Strategy",
      desc: "We identify low hanging fruit for immediate ROI and map out long-term optimization goals.",
      icon: <Map className="w-6 h-6" />,
    },
    {
      title: "The Launch",
      desc: "We onboard into your workflow seamlessly, integrating with Slack or PM tools without disrupting operations.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: "The Growth",
      desc: "Benefit from continuous improvement, release management, and the peace of mind that your CRM is handled.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-white py-20 px-5 sm:px-8 lg:px-12 w-full overflow-hidden">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#0b1425] font-playfair text-3xl md:text-[42px] font-bold leading-tight mb-6"
        >
          Your Path to a <span className="text-[#072ac8]">High-Performance CRM</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="leading-[1.72] font-poppins text-[15.5px] text-[#3d4b61] max-w-2xl mx-auto"
        >
          Getting started with Avolve Labs is a seamless, four-step process:
        </motion.p>
      </div>

      {/* Vertical Timeline */}
      <div className="max-w-5xl mx-auto relative px-4 md:px-0">
        
        {/* The Continuous Vertical Line */}
        <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-[#dce6f4] md:-translate-x-1/2 z-0 hidden sm:block" />

        <div className="space-y-12 md:space-y-16">
          {steps.map((item, index) => {
            // First item (index 0) goes Right, second item (index 1) goes Left
            const isLeft = index % 2 !== 0;

            return (
              <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 items-center group">
                
                {/* Center Node / Icon */}
                <div className="hidden sm:flex absolute left-12 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white border-2 border-[#dce6f4] items-center justify-center text-[#072ac8] transition-all duration-300 group-hover:border-[#072ac8] group-hover:bg-[#072ac8] group-hover:text-white">
                  {item.icon}
                </div>

                {/* Left Column Container */}
                <div className={`w-full sm:pl-24 md:pl-0 md:pr-16 flex md:justify-end ${isLeft ? 'block' : 'hidden md:block'}`}>
                  {isLeft && (
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-white p-8 rounded-[2rem] border border-[#d9dfe8] shadow-sm hover:shadow-[0_12px_40px_rgba(7,42,200,0.06)] hover:-translate-y-1 hover:border-[#c5d7f5] transition-all duration-300 w-full max-w-[420px]"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#072ac8] font-bold tracking-[0.2em] text-xs uppercase">
                          Phase 0{index + 1}
                        </span>
                        <div className="sm:hidden text-[#072ac8] bg-[#072ac8]/5 p-2 rounded-full">
                          {item.icon}
                        </div>
                      </div>
                      
                      <h3 className="font-playfair text-[22px] font-bold text-[#0b1425] mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="font-poppins text-[#526174] text-[15px] leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Right Column Container */}
                <div className={`w-full sm:pl-24 md:pl-16 flex md:justify-start ${!isLeft ? 'block' : 'hidden md:block'}`}>
                  {!isLeft && (
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-white p-8 rounded-[2rem] border border-[#d9dfe8] shadow-sm hover:shadow-[0_12px_40px_rgba(7,42,200,0.06)] hover:-translate-y-1 hover:border-[#c5d7f5] transition-all duration-300 w-full max-w-[420px]"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#072ac8] font-bold tracking-[0.2em] text-xs uppercase">
                          Phase 0{index + 1}
                        </span>
                        <div className="sm:hidden text-[#072ac8] bg-[#072ac8]/5 p-2 rounded-full">
                          {item.icon}
                        </div>
                      </div>
                      
                      <h3 className="font-playfair text-[22px] font-bold text-[#0b1425] mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="font-poppins text-[#526174] text-[15px] leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-6xl mx-auto mt-32 bg-white rounded-[2rem] p-8 md:px-16 md:py-10 lg:px-20 lg:py-12 border border-[#e1e9f5] shadow-[0_8px_40px_rgba(0,0,0,0.03)] relative overflow-hidden group flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
      >
        <div className="relative z-10 lg:w-3/5 text-center lg:text-left">
          <span className="block text-[#526174] text-xs font-bold tracking-[0.15em] uppercase mb-4">
            Get Started Today
          </span>
          <h3 className="font-playfair text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0b1425] mb-4 leading-tight">
            Ready to stop fighting with Salesforce and start winning?
          </h3>
          <p className="font-poppins text-[#526174] max-w-lg mx-auto lg:mx-0 leading-relaxed text-[15.5px]">
           Don&apos;t let your CRM be a source of frustration. Let&apos;s turn it into your greatest competitive advantage.
          </p>
        </div>
        
        <div className="relative z-10 lg:w-2/5 flex justify-center lg:justify-end shrink-0">
          <Link
            href="/contact"
            className="group relative inline-flex cursor-pointer items-center justify-center gap-[10px] overflow-hidden rounded-full px-[32px] py-[18px] text-[15px] font-[760] font-poppins text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(20,69,222,0.10),0_8px_20px_rgba(7,42,200,0.25)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(20,69,222,0.92) 0%, rgba(7,42,200,0.9) 58%, rgba(86,111,245,0.86) 100%)",
              border: "1px solid rgba(255,255,255,0.82)",
            }}
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-[left,opacity] duration-[1400ms] ease-out group-hover:left-[120%] group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-[10px]">
              Get Started Now
              <svg
                className="flex-none transition-transform duration-300 group-hover:translate-x-1"
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33337M12.6666 8L7.99998 12.6667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ManageAvolvePath;