"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/app/pages.module.css";

const steps = [
  {
    step: "01",
    title: "Human-Augmented AI Use Case Discovery",
    desc:
      "We collaborate with business and IT stakeholders to identify high-impact opportunities where human intelligence and autonomous agents can co-exist. We focus on use cases that are feasible today, while laying the foundation for full autonomy tomorrow.",
  },
  {
    step: "02",
    title: "AI Readiness Assessment",
    desc:
      "We assess your organization’s readiness across data maturity, system interoperability, integration landscape, and security posture. This ensures that the AI agents we design can operate effectively within your environment.",
  },
  {
    step: "03",
    title: "AI Design & Tooling Strategy",
    desc:
      "We define the appropriate architecture, toolkits, and platforms (e.g., Boomi AgentStudio, Google ADK, LLMs, RAG pipelines) to build scalable, secure, and purpose-fit agents tailored to your needs.",
  },
  {
    step: "04",
    title: "Roadmap Creation",
    desc:
      "We develop a phased execution plan, starting with quick-win pilots and expanding to multi-agent ecosystems. The roadmap includes timelines, ownership, guardrails, and metrics to ensure scalable adoption and continuous improvement.",
  },
];

const ValueApproach = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[var(--ice)] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className={styles.sectionTitle}>
            Our Approach to Value Added Services Adoption
          </h2>
          <p className={styles.sectionDesc} style={{ margin: "16px auto 0", maxWidth: "48rem" }}>
            We guide you through every stage, from discovery and assessment to
            design and roadmap creation, to ensure successful Agentic AI adoption.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr] items-start gap-6 md:grid-cols-[0.4fr_1fr] md:gap-16 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
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
                      activeIndex === index ? "bg-[#0a369d] scale-150" : "bg-transparent"
                    }`}
                  />
                  <span
                    className={`text-[70px] font-bold leading-none tracking-[-0.05em] transition-all duration-300 md:text-[90px] lg:text-[110px] ${
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
                  <span className="h-[2px] w-12 bg-gradient-to-r from-[#0a369d] to-transparent" />
                  <span className={styles.eyebrow} style={{ marginBottom: 0 }}>
                    Step {steps[activeIndex].step}
                  </span>
                </div>

                <h3 className={styles.sectionTitle} style={{ fontSize: "clamp(24px, 3vw, 32px)", marginBottom: 16 }}>
                  {steps[activeIndex].title}
                </h3>

                <div className={`${styles.sectionDesc} whitespace-pre-line`}>
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

export default ValueApproach;
