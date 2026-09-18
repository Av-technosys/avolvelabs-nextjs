"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  IconSparkles,
  IconChecklist,
  IconDatabase,
} from "@tabler/icons-react"

const agents = [
  {
    title: "Sales Agent",
    icon: IconSparkles,
    desc:
      "Our Sales Agent analyzes visitor activity and engagement data to craft personalized outreach emails based on the pages prospects have explored. It prepares tailored drafts and places them in the business development team’s email queue, reducing manual effort and ensuring timely, context-aware communication.",
    color: "text-blue-500",
  },
  {
    title: "Autonomous QA Agent",
    icon: IconChecklist,
    desc:
      "This AI agent accelerates the testing lifecycle by automatically generating, executing, and maintaining test cases for APIs, microservices, and user interfaces. It leverages OpenAPI specifications and UI components to create intelligent, self-healing test scripts.",
    color: "text-blue-500",
  },
  {
    title: "Database Agent",
    icon: IconDatabase,
    desc:
      "The Database Agent allows users to interact with databases using natural language, removing the need for technical query skills. It understands user intent, explores metadata, and generates optimized, read-only SQL queries.",
    color: "text-violet-500",
  },
]

const ManageAgentSuite = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-8 md:py-16">
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center md:mb-20">
          <h2 className="font-playfair text-3xl font-bold text-[#0b1425] md:text-[42px]">
            Avolvelabs Intelligent Agent Suite
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[15.5px] leading-[1.72] text-[#3d4b61]">
            Our AI agents are designed to automate repetitive tasks, make informed
            decisions, and enable teams to work more efficiently and effectively.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-3 md:gap-6">
          {/* Connecting Lines */}
          <div className="pointer-events-none absolute left-[27%] right-[27%] top-1/2 hidden h-px bg-gradient-to-r from-blue-300 via-blue-500 to-violet-300 md:block" />

          {agents.map((item, index) => {
            const Icon = item.icon
            const isCenter = index === 1

            return (
              <div
                key={item.title}
                className={`relative z-10 ${
                  index === 0
                    ? "md:-rotate-[5deg]"
                    : index === 2
                      ? "md:rotate-[5deg]"
                      : "md:-translate-y-10"
                }`}
              >
                {/* Icon Badge */}
                <div
                  className={`absolute left-8 top-[-28px] z-20 flex h-16 w-16 items-center justify-center rounded-full border border-[#d9dfe8] bg-white shadow-sm ${
                    isCenter ? "md:left-1/2 md:-translate-x-1/2" : ""
                  }`}
                >
                  <Icon
                    size={30}
                    stroke={1.7}
                    className={item.color}
                  />
                </div>

                <Card
                  className={`h-full min-h-[390px] rounded-[24px] border bg-white transition-all duration-300 ${
                    isCenter
                      ? "border-[#c5d7f5] shadow-lg md:min-h-[410px]"
                      : "border-[#d9dfe8] shadow-sm"
                  } hover:-translate-y-1 hover:shadow-xl`}
                >
                  <CardContent className="flex h-full min-h-[390px] flex-col p-7 pt-14 md:min-h-[410px] md:p-8 md:pt-16">
                    {/* Number */}
                    <span className="mb-4 text-right font-playfair text-[52px] font-bold leading-none text-[#d5e1ff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div>
                      <h3 className="font-playfair text-[24px] font-bold leading-[1.25] text-[#032d60]">
                        {item.title}
                      </h3>

                      <p className="mt-5 font-poppins text-[15px] leading-[1.7] text-[#526b91]">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Line */}
                    <div
                      className={`mt-auto h-1 w-14 rounded-full ${
                        index === 2 ? "bg-violet-400" : "bg-blue-500"
                      }`}
                    />
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ManageAgentSuite
