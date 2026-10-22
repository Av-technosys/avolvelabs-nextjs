"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/pages.module.css";

const ValueHero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--ice)] px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-40 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.sectionHead}
        >
          <span className={styles.eyebrow}>
            Value Added Services
          </span>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <span className="absolute -left-4 top-2 h-16 w-1 rounded-full bg-[#0a369d] md:-left-6 md:h-24" />
              <h2 className={styles.sectionTitle}>
                Adoption isn&apos;t training, it&apos;s design,
                <br />
                <span className={styles.sectionAccent}>behavior, and reinforcement.</span>
              </h2>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-[#0a369d]" />
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.15em] text-[#526174]">
                Strategy • Systems • Scale
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -right-3 -top-3 h-16 w-16 rounded-tr-[2rem] border-r border-t border-[#9dbaff] md:-right-5 md:-top-5" />
            <div className="relative border-l border-[#c5d7f5] pl-6 md:pl-8">
              <span className="mb-5 block text-5xl leading-none text-[#b7caff] font-serif">
                “
              </span>
              <p className={styles.sectionDesc} style={{ maxWidth: "36rem" }}>
                <strong>Go-Live is Just the Starting Line</strong>
                <br />
                <br />
                Many companies implement expensive CRMs only to see them become expensive address books. We fix this by focusing on the human element and business metrics.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0a369d]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#526174]">
                  Built around your business
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-2 h-16 w-16 rounded-br-[2rem] border-b border-r border-[#9dbaff] md:-right-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueHero;
