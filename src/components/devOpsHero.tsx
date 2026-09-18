"use client";

import React from "react";
import { motion } from "framer-motion";

const DevOpsHero = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-40 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center justify-center gap-3 md:justify-start"
        >
          <span className="h-px w-10 bg-[#072ac8]" />
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-[#072ac8]">
            Intelligent CRM Solutions
          </span>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <span className="absolute -left-4 top-2 h-16 w-1 rounded-full bg-[#072ac8] md:-left-6 md:h-24" />

              <h2 className="max-w-[650px] font-playfair text-3xl font-bold leading-[1.2] text-[#0b1425] md:text-[46px]">
                Accelerate Salesforce delivery with
                <br />
                <span className="text-[#072ac8]">DevOps governance practices.</span>
              </h2>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-[#072ac8]" />
              <p className="font-poppins text-xs font-medium uppercase tracking-[0.15em] text-[#526174]">
                Strategy • Systems • Scale
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -right-3 -top-3 h-16 w-16 rounded-tr-[2rem] border-r border-t border-[#9dbaff] md:-right-5 md:-top-5" />

            <div className="relative border-l border-[#c5d7f5] pl-6 md:pl-8">
              <span className="mb-5 block font-playfair text-5xl leading-none text-[#b7caff]">
                “
              </span>

              <p className="max-w-xl text-[15.5px] leading-[1.72] text-[#3d4b61]">
                We help organizations design, implement, and operate structured Salesforce DevOps frameworks that accelerate release velocity, minimize risk, and support scalable business operations.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#072ac8]" />
                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.12em] text-[#526174]">
                  Built around your business
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-2 h-16 w-16 rounded-br-[2rem] border-b border-r border-[#9dbaff] md:-right-4" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full translate-y-px">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="block h-[45px] w-full md:h-[70px]"
        >
          <path
            d="M0 90 C360 0 1080 0 1440 90 L1440 90 L0 90 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default DevOpsHero;