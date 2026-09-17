"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/app/pages.module.css";

const logos = [
  "/logoimages/1.png",
  "/saleslogo/Slack-small.png",
  "/logoimages/2.png",
  "/saleslogo/Salesforce-Logo.png",
  "/logoimages/3.png",
  "/logoimages/4.png",
  "/saleslogo/MuleSoft.png",
  "/logoimages/5.png",
];

const duplicatedLogos = [...logos, ...logos];

const BrandCarousel = () => {
  return (
    <section className={styles.brandStrip} style={{ background: "rgba(255, 255, 255, 0.62)" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <motion.div
          style={{ display: "flex", gap: 64, alignItems: "center", width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {duplicatedLogos.map((src, index) => {
            const isSpecificSmall = /\/(1|3)\.png$/.test(src);
            const isOtherNumbers = /\/(2|4|5)\.png$/.test(src);
            const isHeroLogo = src.toLowerCase().includes("salesforce");

            return (
              <div
                key={index}
                style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Image
                  width={200}
                  height={80}
                  unoptimized
                  src={src}
                  alt={`brand-${index}`}
                  style={{
                    height: 48,
                    width: "auto",
                    objectFit: "contain",
                    transform: isSpecificSmall
                      ? "scale(2.8)"
                      : isOtherNumbers
                      ? "scale(3.5)"
                      : isHeroLogo
                      ? "scale(0.8)"
                      : "scale(1)",
                    margin: isSpecificSmall
                      ? "0 24px"
                      : isOtherNumbers
                      ? "0 30px"
                      : undefined,
                  }}
                  loading="lazy"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCarousel;