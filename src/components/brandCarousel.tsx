"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BrandCarousel = () => {
  const logos = [
    "https://logo.clearbit.com/salesforce.com",
    "https://logo.clearbit.com/google.com",
    "https://logo.clearbit.com/spotify.com",
    "https://logo.clearbit.com/adobe.com",
    "https://logo.clearbit.com/amazon.com",
    "https://logo.clearbit.com/microsoft.com",
  ];

  // only double is enough
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="max-w-7xl mx-auto py-10 px-8 bg-white">
      <div className="flex items-center justify-center mb-16 gap-6">
        <span className="h-px bg-slate-200 flex-1" />
        <h2 className="font-playfair text-[25px] md:text-[32px] font-bold text-[#032d60] whitespace-nowrap tracking-tight">
          Trusted By Global Leaders
        </h2>
        <span className="h-px bg-slate-200 flex-1" />
      </div>

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
              className="shrink-0 px-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
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
