import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  IconSparkles,
  IconChecklist,
  IconDatabase,
} from "@tabler/icons-react"

const agents = [
  {
    title: "Architecture Assessment & Health Check",
    icon: IconSparkles,
    desc:
      "Is your current CRM slowing you down? We audit your existing setup to uncover technical debt, security gaps, and process bottlenecks.",
    active: true,
  },
  {
    title: "Adoption & Enablement Programs",
    icon: IconChecklist,
    desc:
      "We don’t just hand over a PDF manual. We design role-specific enablement programs so every user learns exactly what they need.",
  },
  {
    title: "ROI Optimization & Value Measurement",
    icon: IconDatabase,
    desc:
      "Stop guessing if your CRM is delivering value. We implement frameworks that connect CRM usage directly to revenue and performance.",
  },
]

const ValueAgentSuite = () => {
  return (
    <section className="relative py-10 px-8">

      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 md:h-[500] md:w-[500]  rounded-full bg-[#EDFFF0] blur-3xl" />


      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[500] w-[500] rounded-full bg-[#3291B6]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-[38px] font-bold text-[#032d60]">
            CRM Strategy & Optimization Services
          </h2>
         <p className="mt-4 max-w-3xl mx-auto font-poppins text-md md:text-[18px] text-gray-700">
           From technical health checks to user adoption and ROI measurement, we help organizations unlock the full value of their CRM investments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {agents.map((item, i) => {
            const Icon = item.icon
            return (
              <Card
                key={i}
                className={`rounded-2xl transition-colors duration-300 border-2 hover:border-[#3291B6]`}
              >
                <CardContent className="md:p-5 p-3">
                  <Icon
                    size={36}
                    stroke={1.6}
                    className="text-blue-500 mb-4"
                  />

                  <h3 className="text-xl font-semibold font-playfair text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-poppins leading-relaxed text-gray-600">
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

export default ValueAgentSuite;
