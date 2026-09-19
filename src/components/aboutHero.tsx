"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import GhostFibers from "@/components/GhostFibers";
import styles from "@/app/pages.module.css";

const AboutHero = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className={styles.pageHero}>
      <div className={styles.pageHeroFibers} aria-hidden="true">
        <GhostFibers
          lightMode
          lineColor="#9bb1e8"
          glowColor="#dce9ff"
          speed={0.06}
          scale={1.5}
          rotation={12}
          rotationSpeed={0.014}
          layers={6}
          waveAmplitude={0.0065}
          waveFrequency={1.85}
          waveSpeed={0.068}
          layerSpeed={0.026}
          twist={0.032}
          twistFrequency={2.25}
          twistSpeed={0.34}
          lineFrequency={3.35}
          lineSpacing={0.76}
          lineSharpness={27}
          glowFalloff={12.5}
          glowIntensity={0.94}
          brightness={1.34}
          blueBoost={1.04}
          vignette={0}
          grain={0.005}
          dpr={1}
          fps={40}
        />
      </div>

      <div className={styles.pageHeroInner}>
        <motion.div
          className={styles.pageHeroBadge}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.45, ease: "easeOut" }}
        >
          <span className={styles.pageHeroBadgeDot} />
          CRM. People. Progress.
        </motion.div>

        <motion.h1
          className={styles.pageHeroH1}
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: reducedMotion ? 0 : 0.58,
            delay: reducedMotion ? 0 : 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          We Design the Foundation for{" "}
          <span className={styles.pageHeroAccent}>
            Predictable, Scalable Revenue.
          </span>
        </motion.h1>

        <motion.p
          className={styles.pageHeroDesc}
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: reducedMotion ? 0 : 0.54,
            delay: reducedMotion ? 0 : 0.22,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Most CRM projects fail quietly — from low adoption and misalignment.
          AvolveLabs is an outcome-led, AI-first consultancy building platforms
          people actually want to use.
        </motion.p>

        <motion.div
          className={styles.pageHeroActions}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reducedMotion ? 0 : 0.5,
            delay: reducedMotion ? 0 : 0.34,
            ease: "easeOut",
          }}
        >
          <Link href="/contact" className={`${styles.btnPrimary} !text-white`}>
            Start Your Transformation <ArrowUpRight size={16} className="text-white" />
          </Link>
          <Link href="/case-studies" className={styles.btnGhost}>
            See Our Work <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
