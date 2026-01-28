"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: "Secret Escapes",
    logo:  "/logoimages/analytics.svg",
  },
  {
    name: "OpenTable",
    logo:    "/logoimages/backstage.svg",
  },
  {
    name: "Wiley",
    logo:  "/logoimages/billing.svg",
  },
  {
    name: "Fisher & Paykel",
    logo:  "/logoimages/bookings.svg",
  },
  {
    name: "Simplyhealth",
    logo:   "/logoimages/contracts.svg",
  },
  {
    name: "The Auto Club Group (AAA)",
    logo:  "/logoimages/creator.svg",
  },
  {
    name: "The Auto Club Group (AAA)",
    logo:   "/logoimages/marketingplus.svg",
  },
]


const CrmTeams = () => {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-white to-[#fdf2f4]">
      <div className="container px-4 text-center mb-16">
        <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold max-w-3xl mx-auto leading-[1.2]">
          Service teams in every industry scale with CRM Service.
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
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="shrink-0 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 p-6 w-48 h-28 flex items-center justify-center transition-transform hover:scale-105"
            >
              <Image
              width={600}
              height={600}
              unoptimized
                src={partner.logo}
                alt={partner.name}
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

export default CrmTeams