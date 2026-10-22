"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/app/pages.module.css";

const services = [
  {
    step: "01",
    title: "The Always On Essentials",
    desc: "Maintaining a healthy Salesforce environment requires constant vigilance. We manage the day-to-day administrative tasks user permissions, UI enhancements, and validation rules to keep your org clean, secure, and user-friendly.",
  },
  {
    step: "02",
    title: "Next Gen Flow Automation",
    desc: "Manual data entry is a silent killer of productivity. As Salesforce Flow experts, we replace manual drudgery with sophisticated, automated workflows. Whether it’s complex lead routing or automated billing triggers, we save your team hundreds of hours per month.",
  },
  {
    step: "03",
    title: "Executive Grade Reporting",
    desc: "Data is only valuable if it’s actionable. We design intuitive, executive grade dashboards that provide a single source of truth. Know exactly where your revenue is coming from, which reps are performing, and where your pipeline is leaking.",
  },
  {
    step: "04",
    title: "Rigorous Data Hygiene",
    desc: "Dirty data leads to bad decisions. We implement strict guardrails and deduplication protocols to ensure your reporting is 100% accurate. We treat your data as a high value asset, not an afterthought.",
  },
  {
    step: "05",
    title: "Security & Risk Management",
    desc: "As you scale, your security requirements grow. We conduct regular audits and permission reviews to ensure your sensitive customer data stays in the right hands and remains compliant with industry standards.",
  },
];

const ManageApproach = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className={styles.sectionTitle}>
            What&apos;s Under the Hood?
          </h2>

          <p className={styles.sectionDesc} style={{ margin: "16px auto 0", maxWidth: "48rem" }}>
            We handle the technical heavy lifting across the entire Salesforce ecosystem, allowing your sales and success teams to focus on what matters most: revenue and retention.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr] items-start gap-6 md:grid-cols-[0.4fr_1fr] md:gap-16 lg:grid-cols-[0.3fr_1fr] lg:gap-24">
          {/* Left Side - Vertical Numbers */}
          <div className="flex flex-col gap-6 md:gap-8 border-l-2 border-[#f0f4fc] pl-6 md:pl-10">
            {services.map((item, index) => (
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
                    Comprehensive Support
                  </span>
                </div>

                <h3 className={styles.sectionTitle} style={{ fontSize: "clamp(24px, 3vw, 32px)", marginBottom: 16 }}>
                  {services[activeIndex].title}
                </h3>

                <div className={`${styles.sectionDesc} whitespace-pre-line`}>
                  {services[activeIndex].desc}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageApproach;