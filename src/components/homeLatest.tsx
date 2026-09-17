"use client";

import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "@/app/pages.module.css";

const HomeLatest = () => {
  return (
    <section className={styles.pageCta}>
      <div className={styles.container}>
        <div className={styles.pageCtaCard}>
          <div>
            <span className={styles.pageCtaEyebrow}>Get started today</span>
            <h2>
              Ready to build your{" "}
              <span>revenue engine?</span>
            </h2>
          </div>
          <Link href="/contact" className={styles.btnPrimary}>
            Start Your Transformation <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeLatest;
