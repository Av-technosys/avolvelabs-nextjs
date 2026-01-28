"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BrandCarousel = () => {
  const logos = [
    "/logoimages/analytics.svg",
    "/logoimages/backstage.svg",
    "/saleslogo/Slack-small.png",
    "/logoimages/billing.svg",
    "/logoimages/bookings.svg",
    "/saleslogo/Salesforce-Logo.png",
    "/logoimages/contracts.svg",
    "/logoimages/creator.svg",
    "/logoimages/marketingplus.svg",
    "/saleslogo/MuleSoft.png",
   
  ];

  // only double is enough
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-fu py-10 px-8 bg-white">
      {/* <div className="flex items-center justify-center mb-16 gap-6">
        <span className="h-px bg-slate-200 flex-1" />
        <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold whitespace-nowrap tracking-tight">
          Trusted By Global Leaders
        </h2>
        <span className="h-px bg-slate-200 flex-1" />
      </div> */}

      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: [-0, -800] }}   
          transition={{
            duration: 10,           
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((src, index) => (
            <div
              key={index}
              className="shrink-0 px-12"
            >
              <Image
                width={200}
                height={60}
                unoptimized
                src={src}
                alt="brand"
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCarousel;
