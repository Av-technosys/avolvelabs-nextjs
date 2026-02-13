"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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


const ValueTeams = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-white to-[#EDFFF0]">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold max-w-3xl mx-auto leading-[1.2]">
          Service teams in every industry scale with Value Added Service.
        </h2>
      </div>

      <div className="relative z-20 w-full mb-10 overflow-hidden">
        <motion.div
          className="flex gap-6 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="shrink-0 bg-white rounded-xl p-6 w-48 h-28 flex items-center justify-center transition-transform hover:scale-105"
            >
              <Image
              width={600}
              height={600}
              unoptimized
                src={logo}
                alt={logo}
                className="max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

       <div className="">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className ="">
  <path
   d="M0 120 L0 120 C360 0 1080 0 1440 120 L1440 120 Z"
    fill="white"
  />
</svg>
        </div>
    </section>
  )
}

export default ValueTeams;