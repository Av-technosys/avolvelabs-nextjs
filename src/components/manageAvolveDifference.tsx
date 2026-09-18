"use client";

import React from "react";
import {
  XCircle,
  ZapOff,
  MessageSquareOff,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

const ManageAvolveDifference = () => {
  const points = [
    {
      title: "We don't over-engineer",
      desc: "If a simple, native Flow solves the problem, we won't charge you for 500 lines of custom Apex code. We build for maintainability.",
      icon: ZapOff,
    },
    {
      title: "We don't hide behind a help desk",
      desc: "We aren't just a reactive support line. We are proactive partners who suggest improvements before you even realize you need them.",
      icon: MessageSquareOff,
    },
    {
      title: "We don't ignore the Why",
      desc: "We never make a technical change without understanding the business goal behind it. Every click should contribute to your bottom line.",
      icon: Target,
    },
  ];

  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-20 px-5 sm:px-8 lg:px-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#072ac8]/10 text-[#072ac8] text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <XCircle className="w-4 h-4" />
            <span>THE AVOLVE DIFFERENCE</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-[#0b1425] font-playfair text-3xl md:text-[42px] font-bold leading-tight"
          >
            What We{" "}
            <span className="text-[#072ac8]">Don&apos;t</span> Do
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="leading-[1.72] font-poppins text-[16px] text-[#526174]"
          >
            We differentiate ourselves by what we refuse to be:{" "}
            <br className="hidden md:block" />
            <span className="font-semibold text-[#0b1425]">
              a churn and burn development shop.
            </span>
          </motion.p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative p-8 md:p-10 rounded-[2rem] bg-white border border-[#e1e9f5] shadow-sm hover:shadow-[0_20px_40px_rgba(7,42,200,0.06)] hover:-translate-y-2 hover:border-[#c5d7f5] transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Floating Icon */}
                  <div className="w-16 h-16 rounded-full bg-[#072ac8]/5 flex items-center justify-center text-[#072ac8] mb-8 group-hover:bg-[#072ac8] group-hover:text-white group-hover:scale-110 transition-all duration-500 border border-[#072ac8]/10 group-hover:border-transparent">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>

                  {/* Text Content */}
                  <h3 className="font-playfair text-[22px] font-bold text-[#0b1425] mb-4 group-hover:text-[#072ac8] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="font-poppins text-[#526174] text-[15px] leading-[1.75]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ManageAvolveDifference;
