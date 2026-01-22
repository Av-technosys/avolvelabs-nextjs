import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    step: "1",
    title: "Human-Augmented AI\nUse Case Discovery",
    desc:
      "We collaborate with business and IT stakeholders to identify high-impact opportunities where human intelligence and autonomous agents can co-exist. We focus on use cases that are feasible today, while laying the foundation for full autonomy tomorrow.",
  },
  {
    step: "2",
    title: "AI Readiness\nAssessment",
    desc:
      "We assess your organization’s readiness across data maturity, system interoperability, integration landscape, and security posture. This ensures that the AI agents we design can operate effectively within your environment.",
  },
  {
    step: "3",
    title: "AI Design & Tooling\nStrategy",
    desc:
      "We define the appropriate architecture, toolkits, and platforms (e.g., Boomi AgentStudio, Google ADK, LLMs, RAG pipelines) to build scalable, secure, and purpose-fit agents tailored to your needs.",
  },
  {
    step: "4",
    title: "Roadmap\nCreation",
    desc:
      "We develop a phased execution plan, starting with quick-win pilots and expanding to multi-agent ecosystems. The roadmap includes timelines, ownership, guardrails, and metrics to ensure scalable adoption and continuous improvement.",
  },
]

const ManageApproach = () => {
  return (
    <section className="bg-black py-10 px-8 mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-[40px] font-playfair font-bold text-white">
            Our Approach to Manage Services Adoption
          </h2>
          <p className="mt-4 text-gray-400 font-poppins max-w-3xl mx-auto">
            We guide you through every stage, from discovery and assessment to
            design and roadmap creation, to ensure successful Agentic AI adoption.
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
                  from-[#FEEAC9]/20 via-transparent to-[#3291B6]/20
                "
              />
              <div
                className="
                  absolute inset-0 rounded-2xl
                  border border-transparent
                  group-hover:border-[#FEEAC9]
                  group-hover:shadow-[0_0_30px_#00c6ff]
                  transition-all duration-500
                "
              />
              <CardContent className="relative z-10 p-4">
                <h3 className="text-xl font-playfair font-semibold text-[#FEEAC9] whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="mt-4 text-md font-poppins text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
    </section>
  )
}

export default ManageApproach;
