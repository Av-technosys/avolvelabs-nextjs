"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "@/app/pages.module.css";

const ValueBook = () => {
  return (
    <section className="relative w-full bg-[var(--ice)] px-5 py-6 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[2.5rem] bg-white border border-[#d9dfe8] shadow-[0_0_50px_rgba(10, 54, 157,0.08)]">


        {/* Content */}
        <div className="relative z-10 grid items-center gap-10 px-8 py-6 md:grid-cols-[1fr_auto] md:gap-16 md:px-16 md:py-8 lg:px-20">
          <div className="text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.sectionTitle} style={{ textAlign: "left" }}
            >
              Not Sure Where to Begin with Value Added Services? <br className="hidden lg:block mt-2" />
              <span className={styles.sectionAccent}>We&apos;ll Help You Start Smart.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`${styles.sectionDesc} mt-6 max-w-2xl`} style={{ textAlign: "left", margin: "1.5rem 0 0 0" }}
            >
              We work with you to identify the right use cases, assess data readiness, and define an AI roadmap aligned to your business goals, so you don&apos;t waste time or budget.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Link
              href="/contact"
              className="group relative inline-flex cursor-pointer items-center gap-[10px] overflow-hidden rounded-full px-[25px] py-[15px] text-[15px] font-[760] text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(10, 54, 157,0.10),0_6px_14px_rgba(10, 54, 157,0.16)] md:px-[35px] md:py-[20px] md:text-[17px] font-sans"
              style={{
                background:
                  "linear-gradient(135deg, rgba(10, 54, 157,0.92) 0%, rgba(10, 54, 157,0.9) 58%, rgba(10, 54, 157,0.86) 100%)",
                border: "1px solid rgba(255,255,255,0.82)",
              }}
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-[left,opacity] duration-[1400ms] ease-out group-hover:left-[120%] group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-[10px]">
                <span className="block sm:hidden">Book Now</span>
                <span className="hidden sm:block">
                  Book Your Free AI Strategy Session Today!
                </span>
                <svg
                  className="flex-none transition-transform duration-300 group-hover:translate-x-1"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33337M12.6666 8L7.99998 12.6667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueBook;