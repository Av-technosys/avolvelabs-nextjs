"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  IconSparkles,
  IconChecklist,
  IconDatabase,
} from "@tabler/icons-react"
import styles from "@/app/pages.module.css"

const agents = [
  {
    title: "Architecture Assessment & Health Check",
    icon: IconSparkles,
    desc:
      "Is your current CRM slowing you down? We audit your existing setup to uncover technical debt, security gaps, and process bottlenecks.",
    color: "text-[#0a369d]",
  },
  {
    title: "Adoption & Enablement Programs",
    icon: IconChecklist,
    desc:
      "We don’t just hand over a PDF manual. We design role-specific enablement programs so every user learns exactly what they need.",
    color: "text-[#0a369d]",
  },
  {
    title: "ROI Optimization & Value Measurement",
    icon: IconDatabase,
    desc:
      "Stop guessing if your CRM is delivering value. We implement frameworks that connect CRM usage directly to revenue and performance.",
    color: "text-violet-500",
  },
]

const ValueAgentSuite = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-8 md:py-16">
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center md:mb-20">
          <h2 className={styles.sectionTitle}>
            CRM Strategy & Optimization Services
          </h2>

          <p className={styles.sectionDesc} style={{ margin: "16px auto 0", maxWidth: "48rem" }}>
            From technical health checks to user adoption and ROI measurement, we help organizations unlock the full value of their CRM investments.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-3 md:gap-6">
          {/* Connecting Lines */}
          <div className="pointer-events-none absolute left-[27%] right-[27%] top-1/2 hidden h-px bg-gradient-to-r from-[#0a369d] via-[#0a369d] to-violet-300 md:block" />

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
                    <span className="mb-4 text-right text-[52px] font-bold leading-none text-[#d5e1ff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div>
                      <h3 className={styles.sectionTitle} style={{ fontSize: "clamp(20px, 2vw, 24px)", marginBottom: 12 }}>
                        {item.title}
                      </h3>

                      <p className={styles.sectionDesc}>
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Line */}
                    <div
                      className={`mt-auto h-1 w-14 rounded-full ${
                        index === 2 ? "bg-violet-400" : "bg-[#0a369d]"
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

export default ValueAgentSuite
