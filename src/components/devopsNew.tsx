"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  GraduationCap,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import styles from "@/app/pages.module.css";

const performanceItems = [
  {
    title: "Deployment Time Tracking",
    desc: "Monitor deployment timelines to identify bottlenecks and improve delivery speed across engineering teams.",
  },
  {
    title: "Promotion Cycle Measurement",
    desc: "Measure the time taken to promote changes across environments and optimize the release pipeline.",
  },
  {
    title: "Failure Rate Analysis",
    desc: "Analyze deployment failures to identify recurring issues and improve overall pipeline reliability.",
  },
  {
    title: "Rollback Metrics",
    desc: "Track rollback frequency and recovery timelines to reduce operational risks and improve release confidence.",
  },
  {
    title: "The Strategic Outcome",
    desc: "Data-driven release improvement and transparent leadership visibility across the entire engineering organization.",
    isOutcome: true,
  },
];

const enablementList = [
  "Copado & CI/CD workshops",
  "Git & branching training",
  "Release governance documentation",
  "DevOps playbook creation",
  "Mentoring & transition support",
];

const DevOpsNew = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    if (info.offset.x < -60 && activeIndex < performanceItems.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }

    if (info.offset.x > 60 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[var(--ice)] px-4 py-10 pb-24 sm:px-8 md:pb-32">
      <div className="mx-auto max-w-7xl">
        {/* Performance & Visibility */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-4xl text-center"
        >
          <h2 className={styles.sectionTitle}>
            Performance & Visibility
          </h2>

          <p className={styles.sectionDesc} style={{ margin: "16px auto 0", maxWidth: "48rem" }}>
            Gain complete visibility into your DevOps pipeline with
            actionable insights that improve deployment speed, reliability,
            and engineering performance.
          </p>
        </motion.div>

        {/* Performance Cards */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="relative mx-auto h-[540px] w-full max-w-[1500px] cursor-grab touch-pan-y active:cursor-grabbing sm:h-[560px]"
        >
          {performanceItems.map((item, index) => {
            const offset = index - activeIndex;
            const distance = Math.abs(offset);
            const isActive = offset === 0;

            return (
              <motion.div
                key={item.title}
                onClick={() => setActiveIndex(index)}
                animate={{
                  x: `calc(-50% + ${offset * 290}px)`,
                  y: distance * 85,
                  scale: isActive ? 1 : 0.98,
                  opacity: distance > 2 ? 0 : 1,
                  zIndex: performanceItems.length - distance,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 24,
                }}
                className="absolute left-1/2 top-0 w-[270px] sm:w-[285px] md:w-[290px]"
              >
                <Card
                  className={`h-[380px] overflow-hidden rounded-2xl border border-[#d9dfe8] bg-white sm:h-[400px] ${
                    isActive ? "border-[#aeb8c8]" : ""
                  }`}
                >
                  <CardContent className="flex h-full flex-col p-5 pt-0 sm:p-6 sm:pt-0">
                    {/* Number */}
                    <span className="text-[56px] font-bold leading-none text-[#d5dbe5]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div className="mt-4">
                      {item.isOutcome && (
                        <Zap className="mb-4 h-7 w-7 text-[#0a369d]" />
                      )}

                      <h3 className={styles.sectionTitle} style={{ fontSize: "clamp(18px, 2vw, 21px)", marginBottom: 16 }}>
                        {item.title}
                      </h3>

                      <p className={styles.sectionDesc}>
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Line */}
                    <div className="mt-auto h-1 w-14 shrink-0 rounded-full bg-[#0a369d]" />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation Dots */}
        <div className="relative mt-4 flex justify-center gap-2">
          {performanceItems.map((item, index) => (
            <button
              key={item.title}
              aria-label={`Show ${item.title}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-7 bg-[#0a369d]"
                  : "w-2 bg-[#c5d7ff]"
              }`}
            />
          ))}
        </div>

        {/* DevOps Enablement */}
        <div className="mt-28 grid items-start gap-12 md:grid-cols-2 md:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>
              DevOps{" "}
              <span className={styles.sectionAccent}>Enablement</span>
            </h2>

            <h3 className={styles.sectionTitle} style={{ fontSize: "clamp(20px, 3vw, 30px)", marginTop: 20, textAlign: "left" }}>
              DevOps Training & Center of Excellence
            </h3>

            <p className={styles.sectionDesc} style={{ marginTop: 20, maxWidth: "36rem" }}>
              We enable teams to become self-sufficient by providing
              structured training, clear documentation, and continuous
              mentorship throughout the DevOps transformation.
            </p>
          </motion.div>

          {/* Enablement Points */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="w-full space-y-5 pl-3 sm:pl-8"
          >
            {enablementList.map((line, index) => (
              <motion.div
                key={line}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -35,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
                className="flex w-full items-center gap-4 py-2"
              >
                <span className="shrink-0 font-playfair text-xl font-bold text-[#d5dbe5]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0a369d]" />

                <span className="flex-1 text-sm font-medium text-[#032d60] sm:text-[15px] font-sans">
                  {line}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Final Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-[#d9dfe8] pt-10"
        >
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d9dfe8]">
              <GraduationCap className="h-7 w-7 text-[#0a369d]" />
            </div>

            <div>
              <p className={styles.eyebrow} style={{ marginBottom: 8 }}>
                The Final Outcome
              </p>

              <h3 className={styles.sectionTitle} style={{ fontSize: "clamp(20px, 3vw, 30px)", textAlign: "left" }}>
                Self-sufficient DevOps teams.
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevOpsNew;