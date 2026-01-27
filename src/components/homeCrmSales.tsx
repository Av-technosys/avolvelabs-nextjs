"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Icon360, IconCheck } from "@tabler/icons-react";
const Section = ({
  title,
  desc,
  points,
  image,
  icon: Icon,
  reverse = false,
  accent,
}: any) => (
  <div
    className={`grid items-center gap-8 lg:gap-16 lg:grid-cols-2  ${
      reverse ? "direction-rtl" : ""
    }`}
  >
    <div className={`${reverse ? "lg:order-2" : "lg:order-1"} order-1`}>
      <div className="flex items-center gap-3 mb-3 md:mb-4">
        <Icon className={`h-8 w-8 md:h-7 md:w-7 ${accent}`} />
        <h2 className="text-[32px] md:text-[32px] font-bold font-playfair text-blue-950 leading-tight">
          {title}
        </h2>
      </div>
      <p className="text-sm md:text-base text-gray-600 font-poppins mb-5 leading-relaxed">
        {desc}
      </p>
      <Card className="p-4 md:p-5 border-slate-100 shadow-sm">
        {points.map((item: string, i: number) => (
          <div key={i} className="flex items-start gap-3">
            <IconCheck
              className={`h-4 w-4 md:h-5 md:w-5 mt-1 shrink-0 ${accent}`}
            />
            <span className="text-sm md:text-base font-poppins text-gray-700 leading-snug">
              {item}
            </span>
          </div>
        ))}
      </Card>
    </div>
    <div className={`${reverse ? "lg:order-1" : "lg:order-2"} order-2`}>
      <div className="relative overflow-hidden h-[200] md:h-[320] rounded-2xl shadow-sm">
        <Image
          src={image}
          alt={title}
          width={600}
          height={420}
          className="w-full  object-cover"
        />
      </div>
    </div>
  </div>
);
const HomeCrmSales = () => {
  return (
    <section className="py-10 px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-16 ">
        <Section
          title="Salesforce CRM Solutions"
          desc="We design and implement scalable Salesforce solutions that power complex revenue operations, automate sales and service workflows, and enable AI-driven decision-making across teams."
          image="/images/salesforce-crm.png"
          icon={Icon360}
          accent="text-[#0176d3]"
          points={[
            "Certified experts in Sales Cloud & Service Cloud",
            "Agentforce implementations for AI-powered sales & service",
            "Scalable CRM architecture for enterprise growth",
          ]}
        />
        <Section
          reverse
          title="Zoho CRM"
          desc="We help growing businesses scale faster with cost-effective Zoho solutions that unify CRM, automation, marketing, finance, and operations into a single connected ecosystem."
          image="/images/zoho-crm.png"
          icon={Icon360}
          accent="text-emerald-600"
          points={[
            "Zoho One & CRM Plus transformations",
            "End-to-end CRM, automation & integrations",
            "Sales, marketing, support & operations alignment",
          ]}
        />
      </div>
    </section>
  );
};

export default HomeCrmSales;
