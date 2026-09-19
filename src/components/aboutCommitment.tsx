"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import styles from "@/app/pages.module.css";

const commitmentData = [
  {
    id: "experience",
    title: "Deep Domain Experience",
    content:
      "We bring hands-on experience across industries including Manufacturing, Retail, Education, and Professional Services. Our team understands real business challenges, workflows, and revenue models, allowing us to design solutions that fit your operations — not just your technology stack.",
  },
  {
    id: "ai",
    title: "AI-Led, Not AI-Labeled",
    content:
      "We go beyond AI buzzwords. Our approach focuses on practical, real-world AI implementations that automate processes, enhance decision-making, improve customer engagement, and drive measurable efficiency across sales, service, and operations.",
  },
  {
    id: "pricing",
    title: "Right-Priced, High-Impact Consulting",
    content:
      "We deliver enterprise-grade outcomes without the inflated costs of traditional large consulting firms. Our pricing model ensures you get high-quality strategy, execution, and long-term value while maintaining cost efficiency and ROI.",
  },
  {
    id: "delivery",
    title: "Balanced Global Delivery Model",
    content:
      "We combine onsite strategic leadership with scalable offshore execution to deliver speed, quality, and cost-effectiveness. This balanced model allows us to stay close to your business goals while maintaining flexible, efficient delivery.",
  },
];

import LineSidebar from "./LineSidebar";

// We extract items array from commitmentData
const sidebarItems = commitmentData.map(item => item.title);

const AboutCommitment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = commitmentData[activeIndex];
  const reducedMotion = useReducedMotion();

  return (
    <section className={styles.sectionWhite}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.sectionHeadCenter}>
          <span className={styles.eyebrow}>Why AvolveLabs?</span>
          <h2 className={styles.sectionTitle}>
            What makes us{" "}
            <span className={styles.sectionAccent}>different.</span>
          </h2>
          <p className={styles.sectionDesc} style={{ textAlign: "center" }}>
            At AvolveLabs, our values are the foundation of how we operate,
            innovate, and grow alongside our clients.
          </p>
        </div>

        {/* Three-column layout */}
        <div className={styles.commitmentGrid}>
          {/* Left: Tab list via LineSidebar */}
          <div className={styles.commitmentSidebar}>
            <LineSidebar
              items={sidebarItems}
              accentColor="#0a369d"
              textColor="#333"
              markerColor="#cbd5e1"
              showIndex={false}
              showMarker={true}
              proximityRadius={100}
              maxShift={20}
              falloff="smooth"
              markerLength={40}
              markerGap={12}
              tickScale={0.3}
              scaleTick={true}
              itemGap={24}
              fontSize={1.05}
              smoothing={150}
              defaultActive={0}
              onItemClick={(idx: number) => setActiveIndex(idx)}
            />
          </div>

          {/* Centre: Image */}
          <div
            className={styles.commitmentImage}
            style={{
              width: 260,
              height: 260,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(255,255,255,0.9)",
              boxShadow:
                "0 20px 60px rgba(10, 54, 157,0.12), 0 0 0 8px rgba(10, 54, 157,0.06)",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/robotimg.svg"
              alt="AvolveLabs AI-driven CRM"
              width={260}
              height={260}
              unoptimized
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Right: Active content */}
          <div
            style={{
              minHeight: 160,
              display: "flex",
              alignItems: "center",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: reducedMotion ? 0 : 0.28, ease: "easeOut" }}
                className={styles.sectionDesc}
                style={{ margin: 0 }}
              >
                {activeTab.content}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCommitment;