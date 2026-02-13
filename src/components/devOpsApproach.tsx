import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "DevOps Strategy & Transformation",
    desc: `• DevOps maturity assessment
• Release process redesign
• Branching & version control strategy
• Environment & deployment planning
• Governance & compliance framework
• Tool architecture (Copado, Gearset, AutoRABIT, DevOps Center, Jenkins, Azure DevOps)`,
  },
  {
    step: "2",
    title: "CI/CD Implementation & Optimization",
    desc: `• Git integration (Gitflow, trunk-based models)
• Pipeline architecture design
• Automated validations & quality gates
• Static code analysis (PMD, SonarQube, CodeScan)
• Automated testing enablement
• Rollback & hotfix strategies
• Multi-org deployment coordination`,
  },
  {
    step: "3",
    title: "Release Management as a Service",
    desc: `• Promotion flow management
• Back-promotion & conflict resolution
• Cutover & go-live coordination
• Production governance & approvals
• Deployment scheduling & reporting
• Stakeholder communication`,
  },
  {
    step: "4",
    title: "Environment & Org Management",
    desc: `• Sandbox lifecycle design
• Scratch org workflows
• Automated data seeding
• Org comparison & metadata alignment
• Automated sandbox refresh
• Multi-environment governance`,
  },
];

const DevOpsApproach = () => {
  return (
    <section className="bg-black py-10 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="font-playfair text-3xl md:text-[38px] font-bold text-white">
            Core Capabilities
          </h2>
          <p className="mt-4 font-poppins text-md md:text-[18px] text-gray-400 max-w-3xl mx-auto">
           We assess your current Salesforce release processes and design a structured DevOps roadmap aligned with your business objectives.

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
                border border-[#E8E2DB]
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
                  from-[#E8E2DB]/20 via-transparent to-pink-300/30
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
                <h3 className="text-xl font-playfair font-semibold text-[#f7faff] whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-poppins text-gray-300 leading-relaxed whitespace-pre-line">

                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsApproach;
