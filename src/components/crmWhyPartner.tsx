import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import styles from "@/app/pages.module.css"

const items = [
  {
    title: "Domain Expertise +\nSystems Integration Capabilities",
    desc:
      "A rare combination of deep integration experience and cutting-edge AI innovation, enabling intelligent automation across Boomi, Google Cloud, and beyond.",
  },
  {
    title: "4-Hour Agentic AI\nConsultation",
    desc:
      "Accelerate your journey with a focused strategy session that identifies use cases, assesses readiness, and lays out a roadmap aligned with your goals.",
  },
  {
    title: "Co-Innovation That\nScales",
    desc:
      "We work as your innovation partner, rapidly prototyping agents with your team and transferring knowledge through hands-on collaboration and enablement.",
  },
  {
    title: "Production-Ready\nArchitecture Advisory",
    desc:
      "Backed by our experience in enterprise architecture, we guide you toward scalable, secure AI system designs, selecting the right tools, models, and deployment patterns.",
  },
]

const CrmWhyPartner = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-8 md:py-16">
      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center md:mb-20">
          <h2 className={styles.sectionTitle}>
            Why Partner with Avolvelabs for{" "}
            <span className={styles.sectionAccent}>
              Agentic AI
            </span>
          </h2>

          <p className={styles.sectionDesc} style={{ margin: "16px auto 0", maxWidth: "48rem" }}>
            From strategy to deployment – your end-to-end partner for scalable,
            production-ready agentic AI solutions
          </p>
        </div>

        {/* Cards */}
        <div className="relative mx-auto grid max-w-7xl items-start gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((item, index) => (
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
                {/* Fallback Icon for CRM */}
                <div className="h-8 w-8 rounded-full bg-blue-100 text-[#0a369d] flex items-center justify-center">✦</div>
              </div>

              <Card
                className={`h-full min-h-[460px] rounded-[24px] border border-[#d9dfe8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <CardContent className="flex h-full flex-col p-6 pt-14 md:p-8 md:pt-16">
                  {/* Number */}
                  <span className="mb-4 text-right text-[52px] font-bold leading-none text-[#d5e1ff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div>
                    <h3 className={`${styles.sectionTitle} whitespace-pre-line`} style={{ fontSize: "clamp(18px, 2vw, 22px)", marginBottom: 16 }}>
                      {item.title}
                    </h3>

                    <p className={styles.sectionDesc}>
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default CrmWhyPartner
