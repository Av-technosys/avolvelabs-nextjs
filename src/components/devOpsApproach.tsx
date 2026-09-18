"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "DevOps Strategy & Transformation",
    desc: `• DevOps maturity assessment
• Release process redesign
• Branching & version control strategy
• Environment & deployment planning
• Governance & compliance framework
• Tool architecture (Copado, Gearset, AutoRABIT, DevOps Center, Jenkins, Azure DevOps)`,
  },
  {
    step: "02",
    title: "CI/CD Implementation & Optimization",
    desc: `• Git integration (Gitflow, trunk-based models)
• Pipeline architecture design
• Automated validations & quality gates
• Static code analysis (PMD, SonarQube, CodeScan)
• Automated testing enablement
• Rollback & hotfix strategies
• Multi-org deployment coordination`,
  },
  {
    step: "03",
    title: "Release Management as a Service",
    desc: `• Promotion flow management
• Back-promotion & conflict resolution
• Cutover & go-live coordination
• Production governance & approvals
• Deployment scheduling & reporting
• Stakeholder communication`,
  },
  {
    step: "04",
    title: "Environment & Org Management",
    desc: `• Sandbox lifecycle design
• Scratch org workflows
• Automated data seeding
• Org comparison & metadata alignment
• Automated sandbox refresh
• Multi-environment governance`,
  },
];

const DevOpsApproach = () => {
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
            We assess your current Salesforce release processes and design a structured DevOps roadmap aligned with your business objectives.
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
                    className={`font-poppins text-[36px] font-bold leading-none tracking-[-0.05em] transition-all duration-300 md:text-[50px] lg:text-[70px] ${
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

export default DevOpsApproach;