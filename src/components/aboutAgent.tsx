"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import styles from "@/app/pages.module.css";

const AboutAgent = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className={styles.sectionWhite}>
      <div className={styles.container}>
        <div className={styles.twoCol}>
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <span className={styles.eyebrow}>Our Story &amp; Philosophy</span>
            <h2 className={styles.sectionTitle}>
              Built to solve the{" "}
              <span className={styles.sectionAccent}>
                three biggest CRM failures.
              </span>
            </h2>
            <p className={styles.sectionDesc}>
              AvolveLabs was founded to address misalignment, low adoption, and
              unrealized CRM value. We believe technology should follow strategy —
              not the other way around.
            </p>
            <p
              className={styles.sectionDesc}
              style={{ marginTop: 16 }}
            >
              Our approach moves beyond standard implementation to deliver
              end-to-end Revenue Architecture. Whether you are in Manufacturing,
              Retail, Education, or Professional Services — we engineer systems
              that map directly to how your teams sell, serve, and scale.
            </p>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.6,
              delay: reducedMotion ? 0 : 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}
          >
            {/* Standard img tag avoids Next.js aggressive container cropping issues for arbitrary aspect ratios */}
            <img
              src="/images/aboutimg.webp"
              alt="AvolveLabs — CRM strategy and implementation"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 18px 50px rgba(7,42,200,0.12))",
                borderRadius: 16,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgent;
