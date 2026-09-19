"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CaseStudiesHero from "@/components/caseStudiesHero";
import styles from "@/app/pages.module.css";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Unifying Healthcare with a 360° Patient View",
    description:
      "To bridge the gap between disconnected touchpoints and scattered medical records, a leading U.S. non-profit healthcare system partnered with us to centralize their data landscape. By implementing Salesforce Data Cloud and the Einstein 1 Platform, we consolidated information from electronic records, call centers, and in-person visits into a single, real-time 360° patient profile. This transformation broke down information silos, establishing a centralized hub that empowers physicians with holistic insights to deliver proactive, personalized care while securing a scalable foundation for future innovation.",
    image: "/images/healthcare.jpeg",
    category: "Healthcare",
  },
  {
    title: "Modernizing Music Rights Management at Scale",
    description:
      "To address the high costs and rigidity of legacy systems, a UK-based music rights organization managing over 160,000 creators partnered with Avolvelabs for a comprehensive digital transformation. We implemented a robust Salesforce ecosystem leveraging Service Cloud, Experience Cloud, MuleSoft, and CPQ to modernize member support and streamline complex integration needs. This scalable platform has been stable for over three years, successfully facilitating the distribution of £700M+ in royalties annually and handling 50,000 membership cases per year, significantly improving operational efficiency and the overall member experience.",
    image: "/images/music.jpg",
    category: "Entertainment",
  },
  {
    title: "Enabling a Seamless Pivot to Subscription-Based Revenue",
    description:
      "To facilitate a strategic shift from perpetual licensing to a dynamic subscription model, a global leader in BIM software partnered with Avolvelabs to build a scalable web-to-cash architecture. We implemented an integrated Salesforce ecosystem combining E-commerce, CPQ, and Billing with Digital River and 10Duke to manage complex product bundling, flexible pricing, and GDPR-compliant asset management. The solution delivered a robust B2C platform with a fully automated, zero-touch subscription lifecycle, empowering the client to streamline customer onboarding and drive operational efficiency in their transition to the cloud.",
    image: "/images/pivot.jpg",
    category: "Software / SaaS",
  },
  {
    title: "Transforming Broadband with Zero Touch Digital Onboarding",
    description:
      "To overcome the bottlenecks of manual customer handling and disconnected operational systems, a large hi-tech broadband provider partnered with us to establish a fully digital, zero-touch onboarding model. We deployed an end-to-end Salesforce Industry Cloud solution leveraging OmniStudio, MuleSoft, and Salesforce Maps to automate the entire lifecycle, from instant serviceability checks and appointment booking to service activation and billing. This digital transformation unified sales, service, and field operations, delivering a seamless self-service experience for customers while empowering the client with a scalable platform capable of supporting rapid rural expansion and efficient door-to-door sales.",
    image: "/images/dashboard.jpg",
    category: "Telecommunications",
  },
  {
    title: "From Scattered Systems to a Centralized Growth Engine",
    description:
      "We integrated WhatsApp automation to enable faster customer communication and automated lead responses, reducing manual effort and improving conversion speed giving the sales team a single source of truth and better visibility into customer interactions. We also built a production management workflow to track orders, inventory, and fulfillment in real-time. This transformation improved team efficiency, reduced response time, enhanced lead tracking, and created a more organized, scalable system to support Goyal Salt’s growing business.",
    image: "/images/case4.jpeg",
    category: "Manufacturing",
  },
  {
    title: "Transforming Operations into a Competitive Edge",
    description:
      "Morzze, an ambitious manufacturing brand, faced growing complexity as sales, marketing, inventory, finance, and field operations operated in silos. Disconnected workflows were transformed into a seamless, automated revenue pipeline where every lead, follow-up, order, and stock movement became fully traceable. Marketing and WhatsApp automation accelerated customer engagement, while real-time dashboards empowered leadership with instant, data-backed decisions. The transformation significantly reduced manual effort, improved conversion rates, strengthened dealer relationships, and delivered up to a ninefold return on investment within the first year, positioning Morzze for scalable, predictable, and future-ready growth.",
    image: "/images/case6.jpeg",
    category: "Manufacturing",
  },
];

export default function CaseStudiesClient() {
  const featured = cards[0];
  const rest = cards.slice(1);

  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <CaseStudiesHero />
      
      <section className="bg-white py-20 md:py-32 relative z-10">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
          
          {/* Featured Case Study */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mb-32 md:mb-48 block"
          >
            <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-[24px] md:rounded-[40px] bg-[#f8f9fa]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            <div className="relative -mt-24 md:-mt-32 mx-4 md:mx-12 lg:mx-20 bg-white/90 p-8 md:p-12 rounded-[20px] md:rounded-[32px] shadow-[0_20px_60px_rgba(10, 54, 157,0.06)] border border-white backdrop-blur-xl">
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#0a369d] mb-4">
                Featured • {featured.category}
              </span>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#0b1425] leading-[1.15] mb-6 tracking-tight">
                {featured.title}
              </h2>
              <p className="font-poppins text-[#526174] text-[15.5px] leading-relaxed max-w-3xl">
                {featured.description}
              </p>
            </div>
          </motion.div>

          {/* Alternating List */}
          <div className="flex flex-col gap-24 md:gap-40">
            {rest.map((card, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-20 items-center group`}
                >
                  <div className="w-full md:w-1/2 relative h-[300px] md:h-[480px] rounded-[20px] md:rounded-[32px] overflow-hidden bg-[#f8f9fa]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a369d] mb-4 opacity-80">
                      {card.category}
                    </span>
                    <h3 className="font-playfair text-2xl md:text-4xl font-bold text-[#0b1425] leading-[1.25] mb-6 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="font-poppins text-[#526174] text-[15px] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}
