"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "@/app/pages.module.css";

const coreValues = [
  {
    id: 1,
    title: "Outcome Mapping",
    description:
      "We begin with strategy, not configuration. Our team maps your business objectives, revenue goals, customer journeys, and decision workflows before designing any solution. Every system we build is aligned with measurable outcomes, ensuring technology directly supports growth and performance.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Adoption Design",
    description:
      "User adoption is not an afterthought. It is designed from the start. We create intuitive, frictionless user experiences that match how your teams actually work, making it easier for sales, service, marketing, and operations to adopt and rely on the platform daily.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Build with Agentic AI",
    description:
      "We move beyond traditional automation and basic AI copilots. We embed intelligent, autonomous AI agents into your workflows to analyze data, make decisions, automate tasks, and improve efficiency across revenue operations, customer engagement, and internal processes.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Continuously Optimize",
    description:
      "Go-live is not the finish line. We support onboarding, training, and behavior change to ensure your teams fully leverage the platform. Post-launch, we continuously monitor performance, optimize workflows, and refine strategies to help you scale faster and sustain long-term impact.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
];

const AboutCoreValues = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeadCenter}>
          <span className={styles.eyebrow}>Our Methodology</span>
          <h2 className={styles.sectionTitle}>
            A structured path to{" "}
            <span className={styles.sectionAccent}>
              maximum ROI & adoption.
            </span>
          </h2>
          <p className={styles.sectionDesc} style={{ textAlign: "center" }}>
            We don&apos;t just implement software. We follow a structured,
            outcome-driven methodology designed to maximize adoption, accelerate
            ROI, and deliver long-term business value.
          </p>
        </div>

        {/* Accordion panels */}
        <div className={styles.coreValuesGrid}>
          {coreValues.map((value, index) => {
            const isExpanded = hoveredIndex === index;
            return (
              <div
                key={value.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className={styles.coreValueItem}
                style={{ flex: isExpanded ? 5 : 1 }}
              >
                {/* Background image */}
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  unoptimized
                  className="object-cover"
                  style={{
                    transform: isExpanded ? "scale(1.04)" : "scale(1)",
                    transition: "transform 0.7s ease",
                  }}
                />
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isExpanded
                      ? "linear-gradient(to top, rgba(9,17,31,0.88) 0%, rgba(9,17,31,0.42) 54%, rgba(9,17,31,0.1) 100%)"
                      : "linear-gradient(to top, rgba(9,17,31,0.72) 0%, rgba(9,17,31,0.3) 100%)",
                    transition: "background 0.5s ease",
                  }}
                />

                {/* Collapsed: vertical title */}
                {!isExpanded && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents: "none",
                    }}
                  >
                    <span className={styles.coreValueTitleCollapsed}>
                      {value.title}
                    </span>
                  </div>
                )}

                {/* Expanded: content */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 28,
                    color: "#fff",
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? "translateY(0)" : "translateY(14px)",
                    transition: "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      margin: "0 0 12px",
                      lineHeight: 1.2,
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,0.82)",
                      margin: 0,
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutCoreValues;
