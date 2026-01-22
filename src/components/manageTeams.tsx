"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: "Secret Escapes",
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305",
  },
  {
    name: "OpenTable",
    logo: "https://www.shutterstock.com/image-illustration/infinity-logo-design-two-interconnected-600nw-2576179009.jpg",
  },
  {
    name: "Wiley",
    logo: "https://img.freepik.com/free-vector/business-logo-template-minimal-branding-design-vector_53876-136229.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Fisher & Paykel",
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305",
  },
  {
    name: "Simplyhealth",
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305",
  },
  {
    name: "The Auto Club Group (AAA)",
    logo: "https://www.shutterstock.com/image-illustration/infinity-logo-design-two-interconnected-600nw-2576179009.jpg",
  },
]


const ManageTeams = () => {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative max-w-7xl mx-auto overflow-hidden bg-linear-to-b from-white to-[#FEEAC9]">
      <div className="container px-4 text-center mb-16">
        <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold max-w-3xl mx-auto leading-[1.2]">
          Service teams in every industry scale with Managed Service.
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

export default ManageTeams;