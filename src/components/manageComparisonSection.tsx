"use client";

import React from "react";
import { Zap, X, CheckCircle2 } from "lucide-react";
import styles from "@/app/pages.module.css";

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Annual Cost",
      inHouse: "$120k+ (Salary, Benefits, Taxes)",
      avolve: "A fraction of the cost of one full-time hire",
    },
    {
      feature: "Breadth of Skillset",
      inHouse: "Limited to one person’s niche experience",
      avolve: "A full team of cross-certified architects & devs",
    },
    {
      feature: "Reliability",
      inHouse: "Vulnerable to sick days, PTO, & turnover",
      avolve: "365 day continuity with no single point of failure",
    },
    {
      feature: "Onboarding",
      inHouse: "3-6 months to reach full productivity",
      avolve: "Zero lag integration; we start on day one",
    },
  ];

  return (
    <section className="bg-[var(--ice)] py-16 px-5 sm:px-8 lg:px-12 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className={styles.sectionTitle}>
            The Comparison: <br />
            <span className={styles.sectionAccent}>
              Avolve Labs vs. In House Hiring
            </span>
          </h2>
          <p className={styles.sectionDesc} style={{ margin: "20px auto 0" }}>
            Building an internal Salesforce team is expensive and risky. Here is
            how we compare to the traditional hiring model:
          </p>
        </div>

        {/* Desktop Headers */}
        <div className="hidden md:grid grid-cols-[1fr_minmax(200px,auto)_1fr] gap-8 mb-6 px-6 items-end">
          <h3 className="font-playfair text-[22px] text-[#526174] font-medium text-right flex items-center justify-end gap-2">
             In House Team
          </h3>
          <div className="text-center pb-1">
            <span className="text-[13px] font-semibold tracking-[0.2em] text-[#8a99af] uppercase">
              Feature
            </span>
          </div>
          <h3 className="font-playfair text-[22px] text-[#0a369d] font-bold flex items-center gap-2">
            <Zap className="fill-[#0a369d] text-[#0a369d] w-5 h-5" /> Avolve Labs
          </h3>
        </div>

        {/* Comparison Rows */}
        <div className="flex flex-col gap-4 relative">
          {/* Subtle vertical center line for desktop spine */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#dce6f4] to-transparent -translate-x-1/2 -z-10" />

          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center bg-white border border-[#dce6f4] rounded-[2rem] p-6 md:p-4 shadow-sm hover:shadow-[0_8px_30px_rgba(10, 54, 157,0.06)] hover:border-[#c5d7f5] transition-all duration-300"
            >
              {/* In House */}
              <div className="text-center md:text-right order-2 md:order-1 md:pr-4">
                <p className="text-xs font-semibold text-[#8a99af] uppercase tracking-wider mb-2 md:hidden">In House Team</p>
                <div className="flex items-center justify-center md:justify-end gap-3 text-[#526174]">
                  <p className="font-poppins text-[15.5px] leading-relaxed">{row.inHouse}</p>
                </div>
              </div>

              {/* Spine Badge */}
              <div className="flex justify-center order-1 md:order-2">
                <span className="bg-[#f4f7fc] text-[#0b1425] font-playfair font-bold text-lg px-6 py-3 rounded-[1.5rem] border border-[#dce6f4] shadow-sm min-w-[200px] text-center">
                  {row.feature}
                </span>
              </div>

              {/* Avolve Labs */}
              <div className="text-center md:text-left order-3 md:order-3 bg-[#0a369d]/[0.03] rounded-2xl p-5 md:p-0 md:bg-transparent md:pl-4">
                <p className="text-xs font-bold text-[#0a369d] uppercase tracking-wider mb-2 md:hidden flex items-center justify-center gap-1">
                  <Zap className="fill-[#0a369d] w-3 h-3" /> Avolve Labs
                </p>
                <div className="flex items-center justify-center md:justify-start gap-3 text-[#0b1425]">
                  <p className="font-poppins text-[15.5px] font-semibold leading-relaxed">{row.avolve}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
