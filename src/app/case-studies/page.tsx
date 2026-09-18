import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CaseStudiesHero from "@/components/caseStudiesHero";
import styles from "@/app/pages.module.css";

export const metadata = {
  title: "Customer Relationship Management Case Studies | AvolveLabs",
  description: "AvolveLabs CRM case studies highlight real business challenges, system design approaches, and outcomes across sales, operations, and revenue processes. ",
  alternates: {
    canonical: "https://avolvelabs.com/case-studies",
  }
}

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
    title: "Enabling a Seamless Pivot to Subscription-Based Revenue ",
    description:
      "To facilitate a strategic shift from perpetual licensing to a dynamic subscription model, a global leader in BIM software partnered with Avolvelabs to build a scalable web to cash architecture. We implemented an integrated Salesforce ecosystem combining Ecommerce, CPQ, and Billing with Digital River and 10Duke to manage complex product bundling, flexible pricing, and GDPR compliant asset management. The solution delivered a robust B2C platform with a fully automated, zero touch subscription lifecycle, empowering the client to streamline customer onboarding and drive operational efficiency in their transition to the cloud.",
    image: "/images/pivot.jpg",
  },
  {
    title: "Transforming Broadband with Zero Touch Digital Onboarding ",
    description:
      "To overcome the bottlenecks of manual customer handling and disconnected operational systems, a large hi-tech broadband provider partnered with us to establish a fully digital, zero-touch onboarding model. We deployed an end to end Salesforce Industry Cloud solution leveraging OmniStudio, MuleSoft, and Salesforce Maps to automate the entire lifecycle, from instant serviceability checks and appointment booking to service activation and billing. This digital transformation unified sales, service, and field operations, delivering a seamless self-service experience for customers while empowering the client with a scalable platform capable of supporting rapid rural expansion and efficient door to door sales.",
    image: "/images/dashboard.jpg",
  },
  {
    title: "From Scattered Systems to a Centralized Growth Engine ",
    description:
      " We integrated WhatsApp automation to enable faster customer communication and automated lead responses, reducing manual effort and improving conversion speed giving the sales team a single source of truth and better visibility into customer interactions. We also built a production management workflow to track orders, inventory, and fulfillment in real time. This transformation improved team efficiency, reduced response time, enhanced lead tracking, and created a more organized, scalable system to support Goyal Salt’s growing business.",
    image: "/images/case4.jpeg",
  },
  {
    title: "Transforming Operations into a Competitive Edge ",
    description:
      "Morzze, an ambitious manufacturing brand, faced growing complexity as sales, marketing, inventory, finance, and field operations operated in silos. Disconnected workflows were transformed into a seamless, automated revenue pipeline where every lead, follow up, order, and stock movement became fully traceable. Marketing and WhatsApp automation accelerated customer engagement, while real time dashboards empowered leadership with instant, data backed decisions. The transformation significantly reduced manual effort, improved conversion rates, strengthened dealer relationships, and delivered up to a ninefold return on investment within the first year, positioning Morzze for scalable, predictable, and future ready growth.",
    image: "/images/case6.jpeg",
  },
];

export default function CaseStudiesPage() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <CaseStudiesHero />
      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyGrid}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={styles.caseStudyCard}
              >
                <div className={styles.caseStudyImageWrapper}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={styles.caseStudyImage}
                  />
                </div>
                <div className={styles.caseStudyContent}>
                  <h3 className={styles.caseStudyTitle}>
                    {card.title}
                  </h3>
                  <p className={styles.caseStudyDesc}>
                    {card.description}
                  </p>
                  <Link href={`/contact`} className={styles.caseStudyLink}>
                    Read full case study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
