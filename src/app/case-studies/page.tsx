"use client";

import Image from "next/image";
import { useEffect } from "react";

const cards = [
  {
    title: "Unifying Healthcare with a 360° Patient View",
    description:
      "To bridge the gap between disconnected touchpoints and scattered medical records, a leading U.S.non profit healthcare system partnered with us to centralize their data landscape. By implementing Salesforce Data Cloud and the Einstein 1 Platform, we consolidated information from electronic records, call centers, and in person visits into a single, real time 360° patient profile. This transformation broke down information silos, establishing a centralized hub that empowers physicians with holistic insights to deliver proactive, personalized care while securing a scalable foundation for future innovation.",
    image: "/images/healthcare.jpeg",
  },
  {
    title: "Modernizing Music Rights Management at Scale",
    description:
      "To address the high costs and rigidity of legacy systems, a UK based music rights organization managing over 160,000 creators partnered with Avolvelabs for a comprehensive digital transformation. We implemented a robust Salesforce ecosystem leveraging Service Cloud, Experience Cloud, MuleSoft, and CPQ to modernize member support and streamline complex integration needs. This scalable platform has been stable for over three years, successfully facilitating the distribution of £700M+ in royalties annually and handling 50,000 membership cases per year, significantly improving operational efficiency and the overall member experience.",
    image: "/images/music.jpg",
  },
  {
    title: "Enabling a Seamless Pivot to Subscription-Based Revenue",
    description:
      "To facilitate a strategic shift from perpetual licensing to a dynamic subscription model, a global leader in BIM software partnered with Avolvelabs to build a scalable web to cash architecture. We implemented an integrated Salesforce ecosystem combining Ecommerce, CPQ, and Billing with Digital River and 10Duke to manage complex product bundling, flexible pricing, and GDPR compliant asset management. The solution delivered a robust B2C platform with a fully automated, zero touch subscription lifecycle, empowering the client to streamline customer onboarding and drive operational efficiency in their transition to the cloud.",
    image: "/images/pivot.jpg",
  },
  {
    title: "Transforming Broadband with Zero Touch Digital Onboarding",
    description:
      "To overcome the bottlenecks of manual customer handling and disconnected operational systems, a large hi-tech broadband provider partnered with us to establish a fully digital, zero-touch onboarding model. We deployed an end to end Salesforce Industry Cloud solution leveraging OmniStudio, MuleSoft, and Salesforce Maps to automate the entire lifecycle, from instant serviceability checks and appointment booking to service activation and billing. This digital transformation unified sales, service, and field operations, delivering a seamless self-service experience for customers while empowering the client with a scalable platform capable of supporting rapid rural expansion and efficient door to door sales.",
    image: "/images/dashboard.jpg",
  },
  {
    title: "From Scattered Systems to a Centralized Growth Engine",
    description:
      "We integrated WhatsApp automation to enable faster customer communication and automated lead responses, reducing manual effort and improving conversion speed giving the sales team a single source of truth and better visibility into customer interactions. We also built a production management workflow to track orders, inventory, and fulfillment in real time. This transformation improved team efficiency, reduced response time, enhanced lead tracking, and created a more organized, scalable system to support Goyal Salt’s growing business.",
    image: "/images/case4.jpeg",
  },
  {
    title: "Transforming Operations into a Competitive Edge",
    description:
      "Morzze, an ambitious manufacturing brand, faced growing complexity as sales, marketing, inventory, finance, and field operations operated in silos. Disconnected workflows were transformed into a seamless, automated revenue pipeline where every lead, follow up, order, and stock movement became fully traceable. Marketing and WhatsApp automation accelerated customer engagement, while real time dashboards empowered leadership with instant, data backed decisions. The transformation significantly reduced manual effort, improved conversion rates, strengthened dealer relationships, and delivered up to a ninefold return on investment within the first year, positioning Morzze for scalable, predictable, and future ready growth.",
    image: "/images/case6.jpeg",
  },
];

export default function CaseStudiesPage() {
  useEffect(() => {
    document.title =
      "Customer Relationship Management Case Studies | AvolveLabs";

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "AvolveLabs CRM case studies highlight real business challenges, system design approaches, and outcomes across sales, operations, and revenue processes.";

    const caseCards = document.querySelectorAll(".case-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    caseCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#f4f2ec] text-[#16283b]">

      {/* HERO */}
      <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-[#0f2438] px-6 py-24 md:min-h-[620px]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(63,143,163,0.28),transparent_38%),radial-gradient(circle_at_15%_80%,rgba(201,164,92,0.10),transparent_32%),linear-gradient(180deg,#123049_0%,#0f2438_65%,#081627_100%)]" />

        <div className="hero-light absolute left-1/2 top-[16%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#3f8fa3]/15 blur-[100px]" />

        <div className="hero-orbit absolute left-1/2 top-[4%] h-[480px] w-[480px] -translate-x-1/2 rounded-full border border-white/[0.07]" />

        <div className="hero-orbit-reverse absolute left-1/2 top-[12%] h-[340px] w-[340px] -translate-x-1/2 rounded-full border border-[#c9a45c]/[0.12]" />

        <span className="hero-particle absolute left-[14%] top-[26%] h-1 w-1 rounded-full bg-[#bcdfe6]/70" />

        <span className="hero-particle delay-1 absolute left-[24%] top-[64%] h-1.5 w-1.5 rounded-full bg-white/30" />

        <span className="hero-particle delay-2 absolute right-[19%] top-[30%] h-1 w-1 rounded-full bg-[#c9a45c]/60" />

        <span className="hero-particle delay-3 absolute right-[13%] top-[66%] h-1.5 w-1.5 rounded-full bg-white/25" />

        <div className="absolute bottom-[86px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7fb6c2]/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <h1 className="font-playfair text-5xl font-medium leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[100px]">
            Our
            <br />
            <span className="bg-gradient-to-r from-white via-[#cfe6ea] to-[#c9a45c] bg-clip-text text-transparent">
              Case Studies
            </span>
          </h1>

          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent" />

        </div>

        <div className="absolute -bottom-1 left-1/2 h-24 w-[125%] -translate-x-1/2 rounded-[50%_50%_0_0] bg-[#f4f2ec] md:h-28" />

      </section>


      {/* CASE STUDIES */}
      <section className="relative px-5 py-24 md:px-8 md:py-32">

        <div className="pointer-events-none absolute left-1/2 top-32 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#bcd7de]/30 blur-[140px]" />

        <div className="relative mx-auto w-[96%] space-y-16 md:space-y-24">

          {cards.map((card, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={card.title}
                className={`case-card ${
                  isReversed ? "case-reverse" : "case-normal"
                } group relative grid w-full overflow-hidden rounded-[28px] border border-[#16283b]/10 bg-white md:min-h-[600px] md:grid-cols-2`}
              >

                {/* GOLD + BLUE LINE */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-y-0 z-30 w-[5px] bg-gradient-to-b from-[#3f8fa3] via-[#7fb6c2] to-[#c9a45c] ${
                    isReversed ? "left-0" : "right-0"
                  }`}
                />


                {/* HOVER WASH */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${
                    isReversed
                      ? "bg-gradient-to-l from-[#c9a45c]/[0.05] via-transparent to-transparent"
                      : "bg-gradient-to-r from-[#3f8fa3]/[0.05] via-transparent to-transparent"
                  }`}
                />


                {/* IMAGE */}
                <div className="case-image relative min-h-[320px] overflow-hidden md:min-h-full">

                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="case-img object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f2438]/45 via-transparent to-[#3f8fa3]/10" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* IMAGE SHINE */}
                  <div className="case-sweep absolute inset-y-0 -left-[70%] w-[45%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-[1400ms] group-hover:left-[125%]" />

                  {/* CORNERS */}
                  <span className="absolute left-6 top-6 h-8 w-8 border-l-2 border-t-2 border-[#c9a45c] opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  <span className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-[#c9a45c] opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  <span className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-[#c9a45c] opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  <span className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-[#c9a45c] opacity-0 transition-all duration-500 group-hover:opacity-100" />

                </div>


                {/* CONTENT */}
                <div className="case-content relative z-10 flex items-center overflow-hidden p-9 md:p-12 lg:p-16">

                  <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.035] [background-image:radial-gradient(#16283b_1px,transparent_1px)] [background-size:18px_18px]" />

                  <div className="relative z-10 w-full">

                    {/* ACCENT */}
                    <div className="case-element mb-8 flex items-center gap-4">

                      <span className="accent-line h-px w-12 bg-[#3f8fa3]" />

                      <span className="accent-dot h-2 w-2 rounded-full bg-[#c9a45c]" />

                    </div>


                    {/* TITLE */}
                    <h2 className="case-element font-playfair text-3xl font-semibold leading-[1.1] tracking-tight text-[#16283b] md:text-4xl lg:text-[42px]">
                      {card.title}
                    </h2>


                    {/* DIVIDER */}
                    <div className="case-element relative my-8 h-px w-full overflow-hidden bg-slate-200">

                      <div className="divider-line absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#3f8fa3] to-[#c9a45c]" />

                    </div>


                    {/* PARAGRAPH */}
                    <p className="case-element text-[16px] leading-8 text-[#4b5b6b] md:text-[17px] md:leading-[2]">
                      {card.description}
                    </p>

                  </div>
                </div>

              </article>
            );
          })}

        </div>
      </section>


      {/* ANIMATIONS */}
      <style>{`

        /* =========================
           HERO ANIMATIONS
        ========================= */

        .hero-light {
          animation: heroLight 7s ease-in-out infinite;
        }

        .hero-orbit {
          animation: orbitMove 20s linear infinite;
        }

        .hero-orbit-reverse {
          animation: orbitMoveReverse 26s linear infinite;
        }

        .hero-particle {
          animation: particleFloat 5s ease-in-out infinite;
        }

        .delay-1 {
          animation-delay: 1s;
        }

        .delay-2 {
          animation-delay: 2s;
        }

        .delay-3 {
          animation-delay: 3s;
        }


        /* =========================
           CARD INITIAL STATE
        ========================= */

        .case-card {
          opacity: 0;
          transform: translateY(90px) scale(.96);

          transition:
            opacity 900ms ease,
            transform 1000ms cubic-bezier(.16,.8,.2,1),
            box-shadow 700ms ease,
            border-color 700ms ease;
        }


        /* =========================
           CARD ENTERS
        ========================= */

        .case-card.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }


        /* =========================
           INNER CONTENT INITIAL
        ========================= */

        .case-element {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 650ms ease,
            transform 700ms cubic-bezier(.16,.8,.2,1);
        }


        /* =========================
           1. ACCENT
        ========================= */

        .case-card.is-visible .case-element:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 350ms;
        }


        /* =========================
           2. TITLE
        ========================= */

        .case-card.is-visible .case-element:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 650ms;
        }


        /* =========================
           3. DIVIDER
        ========================= */

        .case-card.is-visible .case-element:nth-child(3) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 950ms;
        }


        /* =========================
           4. PARAGRAPH
        ========================= */

        .case-card.is-visible .case-element:nth-child(4) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 1250ms;
        }


        /* =========================
           ACCENT LINE
        ========================= */

        .accent-line {
          transition:
            width 900ms cubic-bezier(.16,.8,.2,1);
        }

        .case-card.is-visible .accent-line {
          width: 90px;
          transition-delay: 500ms;
        }


        /* =========================
           ACCENT DOT
        ========================= */

        .accent-dot {
          transition: transform 600ms ease;
        }

        .case-card.is-visible .accent-dot {
          transform: scale(1.5);
          transition-delay: 650ms;
        }


        /* =========================
           DIVIDER
        ========================= */

        .divider-line {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1000ms cubic-bezier(.16,.8,.2,1);
        }

        .case-card.is-visible .divider-line {
          transform: scaleX(1);
          transition-delay: 1050ms;
        }


        /* =========================
           CARD HOVER
        ========================= */

        .case-card:hover {
          transform: translateY(-10px) scale(1);
          border-color: rgba(63, 143, 163, 0.35);

          box-shadow:
            0 35px 90px rgba(22, 40, 59, 0.14),
            0 8px 30px rgba(63, 143, 163, 0.08);
        }


        /* =========================
           IMAGE
        ========================= */

        .case-img {
          filter: grayscale(35%) contrast(1.05) saturate(1.05);
          transform: scale(1.02);

          transition:
            filter 1200ms ease,
            transform 1600ms cubic-bezier(.16,.8,.2,1);
        }

        .group:hover .case-img {
          filter: grayscale(0%) contrast(1) saturate(1.1);
          transform: scale(1.08);
        }


        /* =========================
           DESKTOP ALTERNATING
        ========================= */

        @media (min-width: 768px) {

          .case-normal .case-image {
            order: 1;
          }

          .case-normal .case-content {
            order: 2;
          }

          .case-reverse .case-image {
            order: 2;
          }

          .case-reverse .case-content {
            order: 1;
          }

        }


        /* =========================
           HERO KEYFRAMES
        ========================= */

        @keyframes heroLight {

          0%,
          100% {
            transform: translateX(-50%) scale(1);
            opacity: .7;
          }

          50% {
            transform: translateX(-50%) scale(1.18);
            opacity: 1;
          }

        }


        @keyframes orbitMove {

          from {
            transform: translateX(-50%) rotate(0deg);
          }

          to {
            transform: translateX(-50%) rotate(360deg);
          }

        }


        @keyframes orbitMoveReverse {

          from {
            transform: translateX(-50%) rotate(360deg);
          }

          to {
            transform: translateX(-50%) rotate(0deg);
          }

        }


        @keyframes particleFloat {

          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: .35;
          }

          50% {
            transform: translateY(-18px) scale(1.5);
            opacity: .9;
          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 767px) {

          .case-card {
            transform: translateY(60px) scale(.98);
          }

          .case-card.is-visible {
            transform: translateY(0) scale(1);
          }

        }


        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {

          .hero-light,
          .hero-orbit,
          .hero-orbit-reverse,
          .hero-particle {
            animation: none !important;
          }

          .case-card,
          .case-element,
          .case-img,
          .divider-line,
          .accent-line,
          .accent-dot {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

        }

      `}</style>

    </main>
  );
}