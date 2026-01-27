"use client";

import Image from "next/image";
const cards = [
  {
    title: "Unifying Healthcare with a 360° Patient View",
    description:
      "To bridge the gap between disconnected touchpoints and scattered medical records, a leading U.S.non profit healthcare system partnered with us to centralize their data landscape. By implementing Salesforce Data Cloud and the Einstein 1 Platform, we consolidated information from electronic records, call centers, and in person visits into a single, real time 360° patient profile. This transformation broke down information silos, establishing a centralized hub that empowers physicians with holistic insights to deliver proactive, personalized care while securing a scalable foundation for future innovation.",
    image: "/images/Healthcare-CRM-1.jpg",
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
];

export default function AboutPage() {
  return (
    <>
      <div
        className="relative max-w-7xl mx-auto bg-no-repeat bg-bottom overflow-hidden  "
        style={{
          backgroundImage: "url('/aboutImg.png')",
          backgroundSize: "clamp(100%, 30vw + 100%, 250%) auto",
        }}
      >
        <section className="text-center md:px-8 px-6 pt-16 pb-20 md:pt-10 md:pb-64">
          <h1 className="font-playfair text-3xl md:text-6xl font-bold text-[#032d60] leading-tight">
            Our
            <br />
            <span className="text-sky-600"> Case Studies</span>
          </h1>
        </section>
      </div>
      <section className="py-2 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl"
              >
                <div className="relative h-[240] bg-pink-50">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover "
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
