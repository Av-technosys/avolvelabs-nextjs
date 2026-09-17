"use client";

import React from "react";
import { Quote, Star } from "lucide-react";
import styles from "@/app/pages.module.css";

const testimonials = [
  {
    name: "Rakesh Gupta",
    role: "Head of Revenue Operations",
    quote:
      "AvolveLabs understood our business needs perfectly. Their team implemented a seamless CRM solution that improved our workflow efficiency significantly. Highly reliable and professional.",
    rating: 5,
  },
  {
    name: "Anil Sharma",
    role: "CTO, Enterprise Solutions",
    quote:
      "Their team provided exceptional support during our migration process. The expertise they brought to the table was exactly what we needed to scale our infrastructure.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.testimonialLayout}>
          {/* Left */}
          <div className={styles.testimonialLeft}>
            <span className={styles.eyebrow}>What Our Clients Say</span>
            <h2 className={styles.sectionTitle}>
              We don&apos;t just aim to impress.
              <br />
              We consistently deliver.
            </h2>
            <p className={styles.sectionDesc}>
              But don&apos;t take our word for it. Hear directly from the teams
              we&apos;ve helped.
            </p>
          </div>

          {/* Right: cards */}
          <div className={styles.testimonialCards}>
            {testimonials.map((t) => (
              <div className={styles.testimonialCard} key={t.name}>
                <div className={styles.tStars}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" stroke="none" />
                  ))}
                </div>
                <Quote
                  size={30}
                  strokeWidth={1}
                  className={styles.quoteIcon}
                />
                <blockquote>
                  <p>{t.quote}</p>
                  <footer>
                    <div className={styles.tAvatar}>
                      {t.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div>
                      <cite>{t.name}</cite>
                      <span>{t.role}</span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
