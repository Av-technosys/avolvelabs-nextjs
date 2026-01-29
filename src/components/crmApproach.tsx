import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Revenue Ops: The North Star",
    desc:
      "We’re moving the needle from guesswork to pure mathematical certainty. We don’t just align departments. we hardwire your entire revenue engine into a single, cohesive end to end architecture. By hacking the funnel lifecycle and deploying a high fidelity data model, we’re capturing the signal through the noise. This is about embedding GTM DNA directly into your tech stack, surfacing the kind of real time analytics that make boardroom decisions a total breeze.",
  },
  {
    step: "2",
    title: "The UX Revolution",
    desc:
      "Let’s be real: most CRMs are where productivity goes to die. We’re disrupting that cycle by building interfaces that people actually vibe with. We’re talking high utility, role specific UX that removes the friction from the daily grind. By nuking data silos and deploying a clean code integration architecture, we create a platform that’s not just maintained it’s built to scale at pace. It’s CRM, but make it intuitive.",
  },
  {
    step: "3",
    title: "Agentic AI: Beyond the Hype",
    desc:
      "We’ve officially graduated from \"helpful chatbots\" to full throttle Autonomous Agents. We’re talking outcome driven AI strategies that don't just assist they execute. These agents are navigating your CRM workflows like pros, orchestrating data across your entire ecosystem without breaking a sweat. It’s a shift from manual oversight to AI led orchestration, allowing your team to stop doing and start leading while the tech handles the heavy lifting",
  },
  {
    step: "4",
    title: "The Trust Protocol",
    desc:
      "In the AI Wild West, we’re the ones building the governance fortress. You can’t have hyper efficiency without a bulletproof trust framework. We’re ensuring that your transition into an AI first company is backed by safe, ethical, and secure protocols. From cross system orchestration to future proofed risk management, we’re making sure your tech stack isn't just fast it’s untouchable.",
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
            We architect end to end revenue foundations by aligning sales, marketing, and service into a unified system. By integrating data driven business logic with intuitive, role based UX and autonomous 

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
                <h3 className="text-xl font-playfair font-semibold text-[#f7faff] whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-poppins text-gray-300 leading-relaxed">
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

export default CrmApproach;
