"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeHero = () => {
  // Letters ko split kar rahe hain individual animation ke liye
  const brandName = "AvolveLabs";

  return (
    <section className="w-full relative bg-[linear-gradient(to_right,#061C5B,#0B2FA0)] text-white overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative px-6 py-20 z-10">  
        <h1 className="mx-auto max-w-5xl text-center font-playfair text-4xl font-bold leading-[1.15] md:text-6xl">
          Turn CRM Into a{" "}
          <span className="text-sky-400"> 
            Revenue Generating Machine. 
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-center font-poppins text-base leading-relaxed text-white/90 md:text-lg">
          {/* --- KHATARNAK TEXT REVEAL EFFECT --- */}
          <motion.span 
            className="relative inline-flex cursor-pointer group py-1"
            initial="initial"
            whileHover="hover"
          >
            {brandName.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: { y: 0 },
                  hover: { 
                    y: -5,
                    color: "#38bdf8", // Sky-400
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 10,
                      delay: index * 0.03 // Wave effect
                    } 
                  }
                }}
                className="inline-block font-bold"
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
          {/* --- END ANIMATION --- */}

          {" "}helps businesses design scalable revenue systems using CRM, Automation, and Autonomous AI Agents.
          We connect sales, service, marketing, and operations into one intelligent growth engine that drives adoption, efficiency, and measurable ROI.
        </p>

        <div className="mt-12 flex flex-col font-poppins items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer bg-[#0176d3] px-10 py-6 text-base font-semibold hover:bg-[#014486] shadow-lg transition-all"
            >
              Start Your Transformation
            </Button>
          </Link>

          <Link href="/case-studies">
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer border-white bg-white px-10 py-6 text-base font-semibold text-sky-600 hover:bg-gray-100 shadow-lg transition-all"
            >
              Explore Our Methodology
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;