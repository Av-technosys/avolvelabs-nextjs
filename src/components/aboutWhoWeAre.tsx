"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "@/app/pages.module.css";

const stats = [
  { value: 10, suffix: "+", label: "Years of CRM Experience" },
  { value: 25, suffix: "+", label: "Specialized Consultants" },
  { value: 20, suffix: "+", label: "Technical Certifications" },
  { value: 60, suffix: "+", label: "Successful CRM Transformations" },
];

const AboutWhoWeAre = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || reducedMotion) {
      if (reducedMotion) setCount(Math.max(...stats.map((s) => s.value)));
      return;
    }
    const max = Math.max(...stats.map((s) => s.value));
    const duration = 1400;
    let startTime: number | null = null;
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      // ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * max));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, reducedMotion]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.sectionHeadCenter}>
          <span className={styles.eyebrow}>Who We Are</span>
          <h2 className={styles.sectionTitle}>
            An outcome-driven, AI-first{" "}
            <span className={styles.sectionAccent}>CRM consultancy.</span>
          </h2>
          <p className={styles.sectionDesc} style={{ textAlign: "center" }}>
            AvolveLabs helps organizations build scalable, predictable revenue
            systems. We design and implement CRM and digital platforms that
            businesses actually use — aligning strategy with technology to
            deliver measurable results.
          </p>
          <p
            className={styles.sectionDesc}
            style={{ textAlign: "center", marginTop: 14 }}
          >
            Our team brings deep expertise across Salesforce, enterprise
            integrations, and automation. Rather than focusing on software
            installation alone, we engineer systems that improve adoption,
            streamline operations, and drive sustainable growth.
          </p>
        </div>
      </div>

      {/* Stats strip - open from left and right with blurry effect at ends */}
      <div className={styles.statsStrip}>
        <div className={styles.statsBlurLeft} aria-hidden="true" />
        <div className={styles.statsBlurRight} aria-hidden="true" />
        <motion.div
          ref={statsRef}
          className={styles.statsGrid}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statValue}>
                {Math.min(count, stat.value)}
                {stat.suffix}
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <div className={styles.container}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
          <Link href="/contact" className={styles.btnPrimary}>
            Contact Us <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
