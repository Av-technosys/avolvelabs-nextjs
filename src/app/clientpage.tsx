"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight, Bot, BrainCircuit, Check, CloudCog,
  Factory, GraduationCap, HeartPulse, Landmark, Quote,
  ShoppingBag, Star, Store,
} from "lucide-react";
import styles from "./home.module.css";
import GhostFibers from "@/components/GhostFibers";
import LogoLoop from "@/components/react-bits/LogoLoop";
import Masonry from "@/components/react-bits/Masonry";

const heroStats = [
  { value: "200+", label: "Successful Implementations" },
  { value: "4.9/5", label: "Client Satisfaction" },
  { value: "3x", label: "Average ROI Improvement" },
];

const brandLogos = [
  { src: "/logoimages/cropped/2.png", alt: "Sales Cloud", type: "cloud" },
  { src: "/saleslogo/Salesforce-Logo.png", alt: "Salesforce", type: "wide" },
  { src: "/logoimages/cropped/3.png", alt: "Marketing Cloud", type: "cloud" },
  { src: "/logoimages/cropped/4.png", alt: "Commerce Cloud", type: "cloud" },
  { src: "/saleslogo/MuleSoft.png", alt: "MuleSoft", type: "wide" },
  { src: "/logoimages/cropped/5.png", alt: "Service Cloud", type: "cloud" },
  { src: "/logoimages/cropped/1.png", alt: "Heroku", type: "mark" },
  { src: "/saleslogo/Slack-small.png", alt: "Slack", type: "wide" },
];

const caseStudies = [
  {
    id: "healthcare-360-patient-view",
    tag: "Healthcare",
    title: "Unifying Healthcare with a 360° Patient View",
    description:
      "A centralized, real-time patient profile across records, call centers, and in-person visits.",
    image: "/images/healthcare.jpeg",
    height: 420,
  },
  {
    id: "music-rights-management",
    tag: "Media",
    title: "Modernizing Music Rights Management at Scale",
    description:
      "A Salesforce ecosystem built to support 160,000 creators and high-volume royalty operations.",
    image: "/images/music.jpg",
    height: 350,
  },
  {
    id: "subscription-revenue-pivot",
    tag: "Manufacturing",
    title: "Enabling a Seamless Pivot to Subscription-Based Revenue",
    description:
      "A web-to-cash architecture connecting Ecommerce, CPQ, Billing, Digital River, and 10Duke.",
    image: "/images/pivot.jpg",
    height: 470,
  },
  {
    id: "broadband-digital-onboarding",
    tag: "Telecom",
    title: "Transforming Broadband with Zero Touch Digital Onboarding",
    description:
      "A digital onboarding lifecycle across serviceability, booking, activation, billing, and field ops.",
    image: "/images/dashboard.jpg",
    height: 390,
  },
  {
    id: "centralized-growth-engine",
    tag: "Operations",
    title: "From Scattered Systems to a Centralized Growth Engine",
    description:
      "WhatsApp automation, lead visibility, and production workflows built into one scalable system.",
    image: "/images/case4.jpeg",
    height: 440,
  },
  {
    id: "operations-competitive-edge",
    tag: "Manufacturing",
    title: "Transforming Operations into a Competitive Edge",
    description:
      "Automated sales, marketing, inventory, finance, and field workflows for predictable growth.",
    image: "/images/case6.jpeg",
    height: 370,
  },
];

const services = [
  {
    icon: BrainCircuit,
    title: "CRM Strategy & Advisory",
    body: "Align your CRM with business goals for measurable growth.",
    href: "/services/crm-strategy-implementation",
  },
  {
    icon: CloudCog,
    title: "Salesforce Implementation",
    body: "Design, build, and deploy solutions that scale.",
    href: "/services/crm-strategy-implementation",
  },
  {
    icon: Bot,
    title: "Agentic AI & Automation",
    body: "Connect your data, people, and processes with autonomous agents.",
    href: "/services/value-added-services",
  },
  {
    icon: CloudCog,
    title: "Managed Services",
    body: "Ongoing support and optimisation to keep you ahead.",
    href: "/services/managed-services",
  },
];

const industries = [
  { icon: BrainCircuit, label: "Technology" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Landmark, label: "Financial Services" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Store, label: "Retail & Consumer" },
  { icon: GraduationCap, label: "Professional Services" },
  { icon: ShoppingBag, label: "E-Commerce & D2C" },
  { icon: Bot, label: "SaaS & B2B" },
];

const sfClouds = [
  ["Sales Cloud", "Commerce Cloud"],
  ["Service Cloud", "Experience Cloud"],
  ["Marketing Cloud", "Agentforce"],
  ["Data Cloud", "Platform & Integrations"],
];

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

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.home}>
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <BrandStrip />
      <IndustriesSection />
      <SalesforceSection />
      <TestimonialsSection />
      <FinalCta />
    </main>
  );
}
// hero
function HeroSection() {
  const reducedMotion = useReducedMotion();
  const canHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  return (
    <section className={styles.hero}>
      <div className={styles.heroFibers} aria-hidden="true">
        <GhostFibers
          lightMode
          lineColor="#8fa8e8"
          glowColor="#d2e2ff"
          speed={0.075}
          scale={1.45}
          rotation={-10}
          rotationSpeed={0.018}
          layers={5}
          waveAmplitude={0.007}
          waveFrequency={1.9}
          waveSpeed={0.08}
          layerSpeed={0.03}
          twist={0.035}
          twistFrequency={2.4}
          twistSpeed={0.38}
          lineFrequency={3.15}
          lineSpacing={0.78}
          lineSharpness={28}
          glowFalloff={13}
          glowIntensity={0.92}
          brightness={1.34}
          blueBoost={1.1}
          vignette={0}
          grain={0.006}
          dpr={1}
          fps={45}
        />
      </div>

      <div className={styles.heroInner}>
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            CRM. People. Progress.
          </div>

          <h1 className={styles.heroH1}>
            {[
              { text: "Turn CRM Into", accent: false },
              { text: "a Revenue", accent: "partial" },
              { text: "Generating", accent: true },
              { text: "Machine.", accent: true },
            ].map((line, index) => (
              <motion.span
                key={line.text}
                className={`${styles.heroTitleLine} ${line.accent === true ? styles.heroAccent : ""}`}
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: reducedMotion ? 0 : 0.58,
                  delay: reducedMotion ? 0 : 0.05 + index * 0.075,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line.accent === "partial" ? (
                  <>
                    a <span className={styles.heroAccent}>Revenue</span>
                  </>
                ) : (
                  line.text
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: reducedMotion ? 0 : 0.56,
              delay: reducedMotion ? 0 : 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            AvolveLabs helps businesses build scalable revenue systems with CRM,
            automation, and autonomous AI agents—connecting sales, service,
            marketing, and operations into one intelligent growth engine that
            drives measurable ROI.
          </motion.p>

          <div className={styles.heroActions}>
            <motion.div
              className={styles.actionMotion}
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.52, delay: 0.38, ease: "easeOut" }}
              whileHover={!canHover || reducedMotion ? undefined : { y: -3, scale: 1.018 }}
              whileTap={reducedMotion ? undefined : { y: 0, scale: 0.985 }}
            >
              <Link href="/contact" className={`${styles.btnPrimary} !text-white`}>
                Start Your Transformation <ArrowUpRight size={16} className="text-white" />
              </Link>
            </motion.div>
            <motion.div
              className={styles.actionMotion}
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.52, delay: 0.45, ease: "easeOut" }}
              whileHover={!canHover || reducedMotion ? undefined : { y: -3, scale: 1.018 }}
              whileTap={reducedMotion ? undefined : { y: 0, scale: 0.985 }}
            >
              <Link href="/case-studies" className={styles.btnGhost}>
                See Our Work <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: reducedMotion ? 0 : 0.54,
              delay: reducedMotion ? 0 : 0.52,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {heroStats.map((s) => (
              <div key={s.label} className={styles.heroStatItem}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.heroRight}
          animate={reducedMotion ? { y: 0 } : { y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <div className={styles.heroSystem}>
            <div className={styles.heroSystemGlow} />
            <div className={`${styles.orbitRing} ${styles.orbitRingOuter}`} />
            <div className={`${styles.orbitRing} ${styles.orbitRingMiddle}`} />
            <div className={`${styles.orbitRing} ${styles.orbitRingInner}`} />

            <div className={styles.systemCore}>
              <span className={styles.coreKicker}>AvolveLabs</span>
              <strong>CRM Intelligence Core</strong>
              <span>Strategy, data, automation, and adoption in one motion.</span>
            </div>

            <div className={`${styles.systemNode} ${styles.nodeStrategy}`}>
              <BrainCircuit size={18} strokeWidth={1.7} />
              <span>Strategy</span>
            </div>
            <div className={`${styles.systemNode} ${styles.nodeSalesforce}`}>
              <CloudCog size={18} strokeWidth={1.7} />
              <span>Salesforce</span>
            </div>
            <div className={`${styles.systemNode} ${styles.nodeAutomation}`}>
              <Bot size={18} strokeWidth={1.7} />
              <span>Agentic AI</span>
            </div>
            <div className={`${styles.systemNode} ${styles.nodeGrowth}`}>
              <ArrowUpRight size={18} strokeWidth={1.8} />
              <span>Growth</span>
            </div>

            <div className={`${styles.signalPanel} ${styles.signalPanelA}`}>
              <span>Pipeline velocity</span>
              <strong>+40%</strong>
            </div>
            <div className={`${styles.signalPanel} ${styles.signalPanelB}`}>
              <span>Connected teams</span>
              <strong>8 clouds</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BrandStrip() {
  return (
    <div className={styles.brandStrip}>
      <LogoLoop
        logos={brandLogos}
        speed={54}
        direction="left"
        logoHeight={58}
        gap={58}
        hoverSpeed={14}
        fadeOut
        fadeOutColor="#f0f8ff"
        scaleOnHover
        ariaLabel="Platforms AvolveLabs connects"
        className={styles.brandLoop}
        renderItem={(b) => (
          <span className={styles.brandLogoFrame}>
            <Image
              src={b.src}
              alt={b.alt}
              width={b.type === "wide" ? 150 : 122}
              height={72}
              className={`${styles.brandLogo} ${b.type === "cloud" ? styles.brandLogoCloud : ""} ${b.type === "mark" ? styles.brandLogoMark : ""}`}
            />
          </span>
        )}
      />
    </div>
  );
}

function CaseStudiesSection() {
  return (
    <section className={`${styles.section} ${styles.caseSection}`}>
      <div className={styles.container}>
        <div className={`${styles.sectionHead} ${styles.caseSectionHead}`}>
          <div className={styles.caseHeadingBlock}>
            <span className={styles.caseEyebrow}>Featured Case Studies</span>
            <h2 className={styles.caseTitle}>
              Proof that <span>better systems</span><br />
              create measurable growth.
            </h2>
            <p>
              A selected view of CRM, automation, and Salesforce transformations across healthcare,
              media, telecom, operations, and manufacturing.
            </p>
          </div>
        </div>
        <Masonry
          items={caseStudies.map((item) => ({
            ...item,
            img: item.image,
            url: "/case-studies",
          }))}
          animateFrom="bottom"
          duration={0.58}
          stagger={0.055}
          scaleOnHover
          hoverScale={0.97}
          blurToFocus
          className={styles.caseMasonry}
          renderItem={(item) => (
            <Link href={item.url} className={styles.caseMasonryCard}>
              <span className={styles.caseTag}>{item.tag}</span>
              <span className={styles.caseArrowBtn}>
                <ArrowUpRight size={16} />
              </span>
              <span className={styles.caseMasonryBody}>
                <span>{item.title}</span>
                <small>{item.description}</small>
              </span>
            </Link>
          )}
        />
        <div className={styles.caseFooter}>
          <Link href="/case-studies" className={styles.caseSectionLink}>
            <span>View All Case Studies</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.servicesHead}>
          <div className={styles.servicesHeadingBlock}>
            <span className={styles.servicesEyebrow}>Our Services</span>
            <h2>
              Strategy. <span>Implementation.</span> Lasting Impact.
            </h2>
            <p>
              Four connected capabilities designed to turn CRM from a system of record
              into a system of revenue.
            </p>
          </div>
        </div>
        <div className={styles.serviceSteps}>
          {services.map((s, index) => (
            <div
              key={s.title}
              className={`${styles.serviceStep} ${index % 2 === 1 ? styles.serviceStepReverse : ""}`}
            >
              <span className={styles.serviceIndex}>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.serviceStepContent}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <Link href={s.href} className={styles.serviceStepAction}>
                  Learn more <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.servicesFooter}>
          <Link href="/services/crm-strategy-implementation" className={styles.servicesLink}>
            <span>Explore All Services</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className={styles.industrySection}>
      <div className={styles.container}>
        <div className={styles.industryHead}>
          <div className={styles.industryHeadingBlock}>
            <span className={styles.industryEyebrow}>Industries We Serve</span>
            <h2>Different Industries. A Common Drive Forward.</h2>
            <p>
              CRM systems shaped around how each market sells, serves, operates, and grows.
            </p>
          </div>
          <Link href="/services/crm-strategy-implementation" className={styles.industryLink}>
            <span>View All Industries</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className={styles.industryChips}>
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div key={ind.label} className={styles.industryChip}>
                <Icon size={16} strokeWidth={1.5} />
                <span>{ind.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SalesforceSection() {
  return (
    <section className={styles.sfSection}>
      <div className={styles.container}>
        <div className={styles.sfLayout}>
          <div className={styles.sfShowcase}>
            <div className={styles.sfBadgeWrap}>
              <div className={styles.sfBadge}>
                <Image
                  src="/logoimages/cropped/2.png"
                  alt="Tableau from Salesforce"
                  width={150}
                  height={74}
                  className={styles.sfBadgeLogo}
                />
                <div className={styles.sfPartnerLabel}>
                  <strong>Summit</strong>
                  <span>Partner</span>
                </div>
              </div>
            </div>

            <div className={styles.sfClouds}>
              {sfClouds.map((row, i) => (
                <div key={i} className={styles.sfCloudRow}>
                  {row.map((cloud) => (
                    <div key={cloud} className={styles.sfCloud}>
                      <Check size={13} strokeWidth={2.5} />
                      <span>{cloud}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sfLeft}>
            <span className={styles.eyebrow}>Salesforce Expertise</span>
            <h2 className={styles.sectionTitle}>
              More Than a Partner.{" "}
              <span className={styles.sectionAccent}>A Proven Salesforce Expert.</span>
            </h2>
            <p>
              Strategic. Certified. Results-driven. We bring deep Salesforce expertise to every
              engagement — from Sales Cloud to Agentforce.
            </p>
            <Link href="/services/crm-strategy-implementation" className={styles.btnOutline}>
              Explore Our Salesforce Capabilities <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.testimonialLayout}>
          <div className={styles.testimonialLeft}>
            <span className={styles.eyebrow}>What Our Clients Say</span>
            <h2 className={styles.sectionTitle}>
              We don&apos;t just aim to impress. We consistently deliver.
            </h2>
            <p>But don&apos;t take our word for it. Hear directly from the teams we&apos;ve helped.</p>
          </div>

          <div className={styles.testimonialCards}>
            {testimonials.map((t) => (
              <div className={styles.testimonialCard} key={t.name}>
                <div className={styles.tStars}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" stroke="none" />
                  ))}
                </div>
                <Quote size={32} strokeWidth={1} className={styles.quoteIcon} />
                <blockquote>
                  <p>{t.quote}</p>
                  <footer>
                    <div className={styles.tAvatar}>
                      {t.name.split(" ").map((w) => w[0]).join("")}
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
}

function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.container}>
        <div className={styles.finalCtaCard}>
          <div>
            <span className={styles.finalEyebrow}>Get started today</span>
            <h2>
              There&apos;s nothing to install.
              <span> No credit card required.</span>
            </h2>
          </div>
          <Link href="/contact" className={`${styles.btnPrimary} !text-white`}>
            Start Your Transformation <ArrowUpRight size={16} className="text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
