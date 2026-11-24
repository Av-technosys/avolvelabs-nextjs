"use client";

import { motion, useReducedMotion } from "motion/react";
import GhostFibers from "@/components/GhostFibers";
import styles from "@/app/pages.module.css";

export default function BlogsHero() {
  const reducedMotion = useReducedMotion();
  return <section className={`${styles.page} ${styles.pageHero}`}>
    <div className={styles.pageHeroFibers} aria-hidden="true">
      <GhostFibers lightMode lineColor="#9bb1e8" glowColor="#dce9ff" speed={0.06} scale={1.5} rotation={12} rotationSpeed={0.014} layers={6} waveAmplitude={0.0065} waveFrequency={1.85} waveSpeed={0.068} layerSpeed={0.026} twist={0.032} twistFrequency={2.25} twistSpeed={0.34} lineFrequency={3.35} lineSpacing={0.76} lineSharpness={27} glowFalloff={12.5} glowIntensity={0.94} brightness={1.34} blueBoost={1.04} vignette={0} grain={0.005} dpr={1} fps={40} />
    </div>
    <div className={styles.pageHeroInner}>
      <motion.div className={styles.pageHeroBadge} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : .45 }}>
        <span className={styles.pageHeroBadgeDot} />The Avolve Journal
      </motion.div>
      <motion.h1 className={styles.pageHeroH1} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : .58, delay: reducedMotion ? 0 : .08 }}>
        Ideas for a more <span className={styles.pageHeroAccent}>connected business.</span>
      </motion.h1>
      <motion.p className={styles.pageHeroDesc} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : .54, delay: reducedMotion ? 0 : .22 }}>
        Perspectives, practical guidance and fresh thinking on CRM, automation and the systems behind sustainable growth.
      </motion.p>
    </div>
  </section>;
}
