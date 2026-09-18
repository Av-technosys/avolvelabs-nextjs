"use client";

import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section className="w-full bg-[#f7faff] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="font-playfair text-3xl font-bold text-[#0b1425] md:text-[42px]">
            Core Capabilities
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[15.5px] leading-[1.72] text-[#3d4b61]">
            We architect end to end revenue foundations by aligning sales, marketing,
            and service into a unified system. By integrating data driven business logic
            with intuitive, role based UX and autonomous
          </p>
        </div>

        {/* Services */}
        <div>
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`flex min-h-[280px] items-center border-t border-[#dbe4f2] py-12 md:min-h-[330px] md:py-16 ${index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
                }`}
            >
              {/* Number */}
              <div className="flex w-[28%] shrink-0 items-center justify-center md:w-[32%]">
                <motion.span
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -80 : 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  whileHover={{
                    x: 4,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="cursor-pointer font-poppins text-[110px] font-bold leading-none tracking-[-0.08em] text-[#d7e1fb] md:text-[170px] lg:text-[185px]"
                >
                  {item.step}
                </motion.span>
              </div>

              {/* Content */}
              <div className="w-full text-center md:w-[68%] md:text-left">
                <h3 className="font-playfair text-2xl font-bold leading-tight text-[#0b1425] md:text-[32px]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[820px] text-[15.5px] leading-[1.72] text-[#3d4b61]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="border-t border-[#dbe4f2]" />
        </div>
      </div>
    </section>
  );
};

export default CrmApproach;