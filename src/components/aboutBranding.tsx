import React from "react";
import Image from "next/image";
import {
  IconChartBar,
  IconSettings,
  IconCloud,
  IconSparkles,
} from "@tabler/icons-react";
import styles from "@/app/pages.module.css";

const AboutBranding = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Top Header Area */}
        <div className={styles.sectionHeadCenter}>
          <span className={styles.eyebrow}>CRM. PEOPLE. PROGRESS.</span>
          <h2 className={styles.sectionTitle}>
            Tools To Run <br className="hidden md:block" />
            <span className={styles.sectionAccent}>Your Business</span>
          </h2>
          <p className={styles.sectionDesc}>
            CRM and ERP built to work together, <br className="hidden md:block" />
            so sales, operations, and finance move as one system.
          </p>
        </div>

        {/* The 5-piece Responsive Grid Layout */}
        <div className={styles.brandingGrid}>
          
          {/* Left Column Cards */}
          <div className={styles.brandingCol}>
            <article className={styles.brandingCard}>
              <div className={styles.brandingIcon}>
                <IconChartBar size={24} stroke={1.5} />
              </div>
              <div>
                <h3 className={styles.brandingCardTitle}>CRM That Drives Revenue</h3>
                <p className={styles.brandingCardDesc}>
                  Capture every lead. Track every conversation. Close with confidence.
                </p>
              </div>
            </article>

            <article className={styles.brandingCard}>
              <div className={styles.brandingIcon}>
                <IconSettings size={24} stroke={1.5} />
              </div>
              <div>
                <h3 className={styles.brandingCardTitle}>ERP That Runs Operations Smoothly</h3>
                <p className={styles.brandingCardDesc}>
                  From order to invoice, everything stays connected.
                </p>
              </div>
            </article>
          </div>

          {/* Center Logo Glass Composition */}
          <div className={styles.brandingCenter}>
            <div className={styles.brandingCenterBlob} />
            <div className={styles.brandingCenterGlass}>
              <Image
                src="/Footer_logo.png"
                alt="AvolveLabs Logo"
                width={814}
                height={145}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column Cards */}
          <div className={styles.brandingCol}>
            <article className={styles.brandingCard}>
              <div className={styles.brandingIcon}>
                <IconCloud size={24} stroke={1.5} />
              </div>
              <div>
                <h3 className={styles.brandingCardTitle}>One System One Source of Truth</h3>
                <p className={styles.brandingCardDesc}>
                  When CRM talks to ERP, teams stop chasing data and start executing faster.
                </p>
              </div>
            </article>

            <article className={styles.brandingCard}>
              <div className={styles.brandingIcon}>
                <IconSparkles size={24} stroke={1.5} />
              </div>
              <div>
                <h3 className={styles.brandingCardTitle}>Built for Scale with Automation</h3>
                <p className={styles.brandingCardDesc}>
                  Less manual work. More control. Smarter growth.
                </p>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutBranding;