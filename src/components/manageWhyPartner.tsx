"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Zap, Activity, BarChart } from "lucide-react"
import styles from "@/app/pages.module.css"

const items = [
  {
    title: "What We Do",
    icon: Target,
    desc:
      "We serve as your Fractional Revenue Operations Center of Excellence, embedding directly into your tech stack to insulate sales and success leadership from backend volatility. Our mandate covers the full spectrum of systemic governance, and rigorous data integrity protocols.",
    color: "text-[#0a369d]",
  },
  {
    title: "How We Do It",
    icon: Zap,
    desc:
      "Our methodology utilizes a proactive, sprint based framework designed for maximum transparency and velocity. We bypass the limitations of the traditional helpdesk in favor of a dedicated pod structure that prioritizes architectural health.",
    color: "text-[#0a369d]",
  },
  {
    title: "Outcomes We Deliver",
    icon: Activity,
    desc:
      "We empower organizations to aggressively liquidate technical debt and establish a predictable, Opex optimized cost structure. By mitigating the overhead and risk associated with specialized full time hiring, we facilitate a leaner operational footprint.",
    color: "text-violet-500",
  },
  {
    title: "Measurable Impact",
    icon: BarChart,
    desc:
      "Our focus extends beyond ticket resolution. We standardize system architecture, refactor continuously, enhance UI and UX, and remove friction across workflows. The result is a future ready, scalable foundation that supports sustained performance and long term growth.",
    color: "text-violet-500",
  },
]

const ManageWhyPartner = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-8 md:py-16">
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center md:mb-20">
          <h2 className={styles.sectionTitle}>
             Precision Engineered RevOps Infrastructure
          </h2>

          <p className={styles.sectionDesc} style={{ margin: "16px auto 0", maxWidth: "56rem" }}>
            In an era where operational friction is the silent killer of scale, we provide the specialized architectural oversight necessary to transform your go to market motion. We move beyond tactical support to deliver a unified, high performance ecosystem that bridges the gap between technical complexity and executive strategy.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mx-auto grid max-w-7xl items-start gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className={`relative z-10 transition-transform duration-300 ${
                  index === 0
                    ? "lg:-rotate-[5deg]"
                    : index === 1
                    ? "lg:-rotate-[2deg] lg:-translate-y-8"
                    : index === 2
                    ? "lg:rotate-[2deg] lg:-translate-y-8"
                    : "lg:rotate-[5deg]"
                }`}
              >
                {/* Icon Badge */}
                <div
                  className="absolute left-8 top-[-28px] z-20 flex h-16 w-16 items-center justify-center rounded-full border border-[#d9dfe8] bg-white shadow-sm"
                >
                  <Icon
                    size={30}
                    strokeWidth={1.7}
                    className={item.color}
                  />
                </div>

                <Card
                  className={`h-full min-h-[460px] rounded-[24px] border border-[#d9dfe8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <CardContent className="flex h-full flex-col p-6 pt-14 md:p-8 md:pt-16">
                    {/* Number */}
                    <span className="mb-4 text-right font-playfair text-[52px] font-bold leading-none text-[#d5e1ff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div>
                      <h3 className={styles.sectionTitle} style={{ fontSize: "22px", marginBottom: 16 }}>
                        {item.title}
                      </h3>

                      <p className={styles.sectionDesc} style={{ marginTop: 0 }}>
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Line */}
                    <div className="mt-auto pt-6">
                      <div
                        className={`h-1 w-14 rounded-full ${
                          index >= 2 ? "bg-violet-400" : "bg-[#0a369d]"
                        }`}
                      />
                    </div>
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

export default ManageWhyPartner;
