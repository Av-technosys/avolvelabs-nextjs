"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "@/app/pages.module.css";

const AboutMission = () => {
  const reducedMotion = useReducedMotion();
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className={styles.sectionWhite}>
      <div className={styles.container}>
        <div className={styles.sectionHeadCenter}>
          <span className={styles.eyebrow}>Mission &amp; Vision</span>
          <h2 className={styles.sectionTitle}>
            Where strategy meets{" "}
            <span className={styles.sectionAccent}>lasting impact.</span>
          </h2>
        </div>

        {/* Row 1 — number left, text right */}
        <motion.div
          className={styles.mvRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, ease }}
          viewport={{ once: true }}
        >
          <span className={styles.mvNum}>01</span>
          <div className={styles.mvContent}>
            <h3 className={styles.mvLabel}>Our Mission</h3>
            <p className={styles.sectionDesc}>
              To deploy highly skilled CRM experts who implement, customize, and
              optimize Salesforce — delivering tailored solutions aligned with
              each client&apos;s unique business objectives and ensuring measurable
              impact at every stage.
            </p>
          </div>
        </motion.div>

        <div className={styles.mvHr} aria-hidden="true" />

        {/* Row 2 — text left, number right */}
        <motion.div
          className={`${styles.mvRow} ${styles.mvRowReverse}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.08, ease }}
          viewport={{ once: true }}
        >
          <span className={styles.mvNum}>02</span>
          <div className={styles.mvContent}>
            <h3 className={styles.mvLabel}>Our Vision</h3>
            <p className={styles.sectionDesc}>
              To be the most trusted partner for seamless CRM integration and
              optimization — empowering businesses with intelligent Salesforce
              solutions that drive measurable growth and long-term success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMission;