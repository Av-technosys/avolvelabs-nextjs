import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const items = [
  {
    title: "What We Do",
    desc:
      "We serve as your Fractional Revenue Operations Center of Excellence, embedding directly into your tech stack to insulate sales and success leadership from backend volatility. Our mandate covers the full spectrum of systemic governance, and rigorous data integrity protocols."
  },
  {
    title: "How We Do It",
    desc:
      "Our methodology utilizes a proactive, sprint based framework designed for maximum transparency and velocity. We bypass the limitations of the traditional helpdesk in favor of a dedicated pod structure that prioritizes architectural health."
  },
  {
    title: "Outcomes We Deliver",
    desc:
      "We empower organizations to aggressively liquidate technical debt and establish a predictable, Opex optimized cost structure. By mitigating the overhead and risk associated with specialized full time hiring, we facilitate a leaner operational footprint.",
  },
  {
    title: "Measurable Impact",
    desc:
      "Our focus extends beyond ticket resolution. We standardize system architecture, refactor continuously, enhance UI and UX, and remove friction across workflows. The result is a future ready, scalable foundation that supports sustained performance and long term growth.",
  },
]

const ManageWhyPartner = () => {
  return (
    <section className="bg-[#FEEAC9] py-10 px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold">
            {/* Why Partner with Avolvelabs for{" "} */}
            <span className="bg-linear-to-r from-[#4aa3ff] to-[#a855f7] bg-clip-text text-transparent">
             Precision Engineered RevOps Infrastructure
            </span>
          </h2>

            <p className="mt-4 text-black/70 max-w-5xl mx-auto font-poppins text-md md:text-[16px]">
            In an era where operational friction is the silent killer of scale, we provide the specialized architectural oversight necessary to transform your go to market motion. We move beyond tactical support to deliver a unified, high performance ecosystem that bridges the gap between technical complexity and executive strategy.

          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Card
              key={i}
              className="
                bg-transparent
                border-2 border-black/20
                rounded-2xl
                transition-colors duration-300
                hover:border-[#3291B6]
              "
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-center font-playfair text-[#3291B6] whitespace-pre-line">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-poppins text-black/50 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
    </section>
  )
}

export default ManageWhyPartner;
