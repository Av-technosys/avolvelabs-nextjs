import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Alignment & Business Logic",
    points: [
      "End to end revenue architecture aligning sales, marketing, and service.",
      "Funnel, lifecycle, and data model design capturing the right data at the right time.",
      "GTM process alignment embedded directly inside your CRM.",
      "Actionable metrics and dashboards that drive real decisions.",
    ],
  },
  {
    step: "2",
    title: "User Experience & Adoption",
    points: [
      "Intuitive CRM platform design tailored to your business.",
      "Role based UX and workflows optimized for each function.",
      "Data, automation, and integration architecture to remove silos.",
      "Clean, scalable implementations that are easy to maintain.",
    ],
  },
  {
    step: "3",
    title: "Future-Proofing & Efficiency",
    points: [
      "Agentic AI strategies aligned to revenue operations.",
      "Autonomous agents managing CRM workflows across teams.",
      "AI orchestration across systems and data sources.",
      "Governance and trust frameworks for safe AI adoption.",
    ],
  },
  {
    step: "4",
    title: "Roadmap\nCreation",
    points: [
      "Design phased rollout with quick-win pilots",
      "Expand towards multi-agent ecosystems",
      "Define timelines, ownership, and success metrics",
    ],
  },
];

const CrmApproach = () => {
  return (
    <section className="bg-black py-10 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="font-playfair text-3xl md:text-[38px] font-bold text-white">
            Core Capabilities
          </h2>
          <p className="mt-4 font-poppins text-md md:text-[18px] text-gray-400 max-w-3xl mx-auto">
            We guide you through every stage, from discovery and assessment to
            design and roadmap creation, to ensure successful Agentic AI
            adoption.
          </p>
        </div>
        <div className="relative mb-10 hidden md:block px-20">
          <div className="absolute top-1/2 left-30 right-30 h-px bg-gray-700" />
          <div className="flex justify-between relative z-10 px-10">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white font-bold"
              >
                {item.step}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <Card
              key={item.step}
              className="
                group relative overflow-hidden
                bg-linear-to-b from-[#1a1a1a] to-black
                border border-white/10
                rounded-2xl
                transition-all duration-500
                hover:scale-[1.02]
              "
            >
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-linear-to-br
                  from-[#00c6ff]/20 via-transparent to-[#7f00ff]/20
                "
              />
              <div
                className="
                  absolute inset-0 rounded-2xl
                  border border-transparent
                  group-hover:border-[#00c6ff]
                  group-hover:shadow-[0_0_30px_#00c6ff]
                  transition-all duration-500
                "
              />
              <CardContent className="relative z-10 p-4">
                <h3 className="text-xl font-playfair font-semibold text-[#4aa3ff] whitespace-pre-line">
                  {item.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="text-white" />
                      <span className="text-md font-poppins text-gray-300 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrmApproach;
