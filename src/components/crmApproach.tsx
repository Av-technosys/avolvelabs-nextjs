"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Revenue Ops: The North Star",
    desc:
      "We’re moving the needle from guesswork to pure mathematical certainty. We don’t just align departments. we hardwire your entire revenue engine into a single, cohesive end to end architecture. By hacking the funnel lifecycle and deploying a high fidelity data model, we’re capturing the signal through the noise. This is about embedding GTM DNA directly into your tech stack, surfacing the kind of real time analytics that make boardroom decisions a total breeze.",
  },
  {
    step: "02",
    title: "The UX Revolution",
    desc:
      "Let’s be real: most CRMs are where productivity goes to die. We’re disrupting that cycle by building interfaces that people actually vibe with. We’re talking high utility, role specific UX that removes the friction from the daily grind. By nuking data silos and deploying a clean code integration architecture, we create a platform that’s not just maintained it’s built to scale at pace. It’s CRM, but make it intuitive.",
  },
  {
    step: "03",
    title: "Agentic AI: Beyond the Hype",
    desc:
      "We’ve officially graduated from \"helpful chatbots\" to full throttle Autonomous Agents. We’re talking outcome driven AI strategies that don't just assist they execute. These agents are navigating your CRM workflows like pros, orchestrating data across your entire ecosystem without breaking a sweat. It’s a shift from manual oversight to AI led orchestration, allowing your team to stop doing and start leading while the tech handles the heavy lifting",
  },
  {
    step: "04",
    title: "The Trust Protocol",
    desc:
      "In the AI Wild West, we’re the ones building the governance fortress. You can’t have hyper efficiency without a bulletproof trust framework. We’re ensuring that your transition into an AI first company is backed by safe, ethical, and secure protocols. From cross system orchestration to future proofed risk management, we’re making sure your tech stack isn't just fast it’s untouchable.",
  },
];

const CrmApproach = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className="font-playfair text-3xl font-bold text-[#0b1425] md:text-[42px]">
            Core Capabilities
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[15.5px] leading-[1.72] text-[#3d4b61]">
            We architect end to end revenue foundations by aligning sales, marketing,
            and service into a unified system. By integrating data driven business logic
            with intuitive, role based UX and autonomous
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.4fr_1fr] md:gap-16 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
          {/* Left Side - Vertical Numbers */}
          <div className="flex flex-col gap-6 md:gap-8 border-l-2 border-[#f0f4fc] pl-6 md:pl-10">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="cursor-pointer transition-transform duration-300 hover:translate-x-2"
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-2 w-2 rounded-full transition-all duration-300 -ml-[31px] md:-ml-[47px] ${
                      activeIndex === index ? "bg-[#072ac8] scale-150" : "bg-transparent"
                    }`}
                  />
                  <span
                    className={`font-poppins text-[70px] font-bold leading-none tracking-[-0.05em] transition-all duration-300 md:text-[90px] lg:text-[110px] ${
                      activeIndex === index
                        ? "text-[#d7e1fb] opacity-100"
                        : "text-[#d7e1fb] opacity-40 hover:opacity-70"
                    }`}
                  >
                    {item.step}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Active Content */}
          <div className="relative w-full min-h-[480px] sm:min-h-[400px] md:min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute left-0 top-0 flex w-full flex-col pt-4 md:pt-8"
              >
                <div className="mb-6 inline-flex items-center gap-3">
                  <span className="h-[2px] w-12 bg-gradient-to-r from-[#072ac8] to-transparent" />
                  <span className="font-poppins text-xs font-semibold uppercase tracking-[0.15em] text-[#072ac8]">
                    Step {steps[activeIndex].step}
                  </span>
                </div>

                <h3 className="font-playfair text-2xl font-bold leading-[1.2] text-[#0b1425] md:text-[32px]">
                  {steps[activeIndex].title}
                </h3>

                <div className="mt-6 text-[15.5px] leading-[1.8] text-[#3d4b61] whitespace-pre-line">
                  {steps[activeIndex].desc}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrmApproach;