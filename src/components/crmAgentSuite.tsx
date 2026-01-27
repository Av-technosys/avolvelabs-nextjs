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
    active: true,
  },
  {
    title: "Autonomous QA Agent",
    icon: IconChecklist,
    desc:
      "This AI agent accelerates the testing lifecycle by automatically generating, executing, and maintaining test cases for APIs, microservices, and user interfaces. It leverages OpenAPI specifications and UI components to create intelligent, self-healing test scripts.",
  },
  {
    title: "Database Agent",
    icon: IconDatabase,
    desc:
      "The Database Agent allows users to interact with databases using natural language, removing the need for technical query skills. It understands user intent, explores metadata, and generates optimized, read-only SQL queries.",
  },
]

const CrmAgentSuite = () => {
  return (
    <section className="relative py-10 px-8">

      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 md:h-[500] md:w-[500]  rounded-full bg-purple-300/40 blur-3xl" />


      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[500] w-[500] rounded-full bg-blue-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="text-center mb-16">
          <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold">
            Avolvelabs Intelligent Agent Suite
          </h2>
          <p className="mt-4 max-w-3xl mx-auto font-poppins text-md md:text-[18px] text-gray-700">
            Our AI agents are designed to automate repetitive tasks, make
            informed decisions, and enable teams to work more efficiently and
            effectively.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {agents.map((item, i) => {
            const Icon = item.icon
            return (
              <Card
                key={i}
                className={`rounded-2xl border transition-colors duration-300 hover:border-blue-400 `}
              >
                <CardContent className="md:p-5 p-3">
                  <Icon
                    size={32}
                    stroke={1.6}
                    className="text-blue-500 mb-4"
                  />

                  <h3 className="text-xl font-semibold font-playfair text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed font-poppins text-gray-600">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default CrmAgentSuite
