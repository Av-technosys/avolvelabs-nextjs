"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BrandCarousel = () => {
  const logos = [
    "/logoimages/analytics.svg",
    "/logoimages/backstage.svg",
    "/logoimages/1.png",
    "/saleslogo/Slack-small.png",
    "/logoimages/billing.svg",
    "/logoimages/2.png",
    "/logoimages/bookings.svg",
    "/saleslogo/Salesforce-Logo.png",
    "/logoimages/3.png",
    "/logoimages/contracts.svg",
    "/logoimages/4.png",
    "/logoimages/creator.svg",
    "/logoimages/marketingplus.svg",
    "/saleslogo/MuleSoft.png",
    "/logoimages/5.png"
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-full py-10 bg-white overflow-hidden">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        <motion.div
          className="flex shrink-0 gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((src, index) => {
            // Specific check for 1.png and 3.png
            const isSpecificSmall = src.match(/\/(1|3)\.png$/);
            // Check for other numbers (2, 4, 5)
            const isOtherNumbers = src.match(/\/(2|4|5)\.png$/);
            
            const isHeroLogo = src.toLowerCase().includes("salesforce");
            const isMarketingLogo = src.toLowerCase().includes("marketingplus");

            return (
              <div key={index} className="shrink-0 flex items-center justify-center">
                <Image
                  width={200}
                  height={80}
                  unoptimized
                  src={src}
                  alt={`brand-${index}`}
                  className={`h-12 w-auto object-contain transition-all duration-300 ${
                    isSpecificSmall 
                      ? "scale-[2.8] mx-6" // 1 aur 3 ke liye thoda chota size taaki cut na ho
                      : isOtherNumbers 
                      ? "scale-[3.5] mx-8" // 2, 4, 5 ke liye wahi purana bada size
                      : isHeroLogo 
                      ? "scale-[0.8]" 
                      : isMarketingLogo
                      ? "scale-[0.7]"
                      : "scale-100"
                  }`}
                  loading="lazy"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCarousel;