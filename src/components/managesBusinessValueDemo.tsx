"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import styles from "@/app/pages.module.css";

const ManagesBusinessValueDemo = () => {
  const features = [
    {
      title: "Predictable Monthly Retainers",
      desc: " No gotcha invoices or hidden fees. Enjoy steady, reliable support with a budget that’s easy to forecast.",
    },
    {
      title: "SLA-Backed Priority",
      desc: "Your business doesn't stop, and neither do we. Our Service Level Agreements ensure that critical issues are addressed with urgency.",
    },
    {
      title: "Continuous Innovation",
      desc: "Salesforce releases updates three times a year. We proactively manage these releases, ensuring your customizations never break and you’re always using the latest features.",
    },
    {
      title: "Performance-Based Retention",
      desc: "We don't believe in lock in contracts. We earn your business every month through tangible results and proactive communication.",
    },
  ];

  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 w-full overflow-hidden">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 items-center">
          
          {/* Left: Heading & Paragraph */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>
                A Partnership Model
                <br />
                <span className={styles.sectionAccent}>Designed for Transparency</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-6 h-1 w-16 bg-[#0a369d] rounded-full" />
              <p className={styles.sectionDesc} style={{ textAlign: "left" }}>
                Many Salesforce partners hide behind black box contracts. We
                believe in a collaborative, agile approach that prioritizes your
                ROI over our billable hours.
              </p>
            </motion.div>
          </div>

          {/* Right: 2x2 Feature Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative flex flex-col gap-5 rounded-3xl border border-[#d9dfe8] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#0a369d]/30 hover:shadow-[0_12px_40px_rgba(10, 54, 157,0.08)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a369d]/10 text-[#0a369d] transition-colors duration-300 group-hover:bg-[#0a369d] group-hover:text-white">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className={styles.sectionTitle} style={{ fontSize: "20px", marginBottom: 12, textAlign: "left" }}>
                    {item.title}
                  </h3>
                  <p className={styles.sectionDesc} style={{ margin: 0, textAlign: "left" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManagesBusinessValueDemo;
