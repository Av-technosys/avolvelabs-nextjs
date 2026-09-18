"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

const positions = [
  "left-0 top-0 sm:left-[12%]",
  "right-0 top-0 sm:right-[12%]",
  "bottom-0 left-0 sm:left-[12%]",
  "bottom-0 right-0 sm:right-[12%]",
];

const ValueTeams = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative w-full overflow-hidden bg-white text-center">
      {/* Heading */}
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-8 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl font-playfair text-3xl font-[760] leading-[1.2] text-[#032d60] sm:text-4xl md:text-[38px]"
        >
          Service teams in every industry scale with Value Added Service.
        </motion.h1>
      </div>

      {/* Value Network */}
      <div className="relative mx-auto mb-12 h-[270px] max-w-5xl sm:h-[320px]">
        <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#d2deef] sm:h-[290px] sm:w-[290px]" />
        <div className="absolute left-1/2 top-1/2 h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e1e9f5] sm:h-[200px] sm:w-[200px]" />

        {/* Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#072ac8] shadow-[0_8px_25px_rgba(7,42,200,0.12)] sm:h-32 sm:w-32"
        >
          <span className="font-playfair text-xl font-bold text-white sm:text-2xl">
            VALUE
          </span>
        </motion.div>

        {/* Logo Cards */}
        {logos.slice(0, 4).map((logo, index) => (
          <motion.div
            key={`${logo}-${index}`}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`absolute ${positions[index]} z-20 flex h-[78px] w-[125px] items-center justify-center rounded-2xl border border-[#dce6f4] bg-white px-4 shadow-[0_6px_20px_rgba(35,75,130,0.05)] sm:h-24 sm:w-36`}
          >
            <Image
              src={logo}
              alt="Technology partner"
              width={180}
              height={70}
              unoptimized
              className="max-h-12 w-auto object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Full Width Infinite Moving Carousel */}
      <div className="relative z-20 mb-10 w-full overflow-hidden border-y border-[#e2eaf5] bg-white px-6 py-6 shadow-sm">
        <motion.div
          className="flex w-max items-center gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`${logo}-${index}`}
              className="flex h-20 w-40 shrink-0 items-center justify-center"
              whileHover={{
                scale: 1.12,
                y: -4,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <Image
                width={600}
                height={600}
                unoptimized
                src={logo}
                alt={logo}
                className="max-h-14 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueTeams;