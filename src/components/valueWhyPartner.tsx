import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const items = [
  {
    title: "Deep Dive Architecture Audit Report",
    desc:
      "A rare combination of deep integration experience and cutting-edge AI innovation, enabling intelligent automation across Boomi, Google Cloud, and beyond.",
  },
  {
    title: "Role Based Training Playbooks",
    desc:
      "Accelerate your journey with a focused strategy session that identifies use cases, assesses readiness, and lays out a roadmap aligned with your goals.",
  },
  {
    title: "User Adoption Dashboards",
    desc:
      "We work as your innovation partner, rapidly prototyping agents with your team and transferring knowledge through hands-on collaboration and enablement.",
  },
  {
    title: "Quarterly ROI Improvement Roadmap",
    desc:
      "Backed by our experience in enterprise architecture, we guide you toward scalable, secure AI system designs, selecting the right tools, models, and deployment patterns.",
  },
]

const ValueWhyPartner = () => {
  return (
    <section className="bg-[#EDFFF0] py-10 px-8">
      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-16">
          <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold">
            {/* Why Partner with Avolvelabs for{" "} */}
            <span className="bg-linear-to-r from-[#4aa3ff] to-[#a855f7] bg-clip-text text-transparent">
              What We Deliver
            </span>
          </h2>

           <p className="mt-4 text-black/70 max-w-3xl mx-auto font-poppins text-md md:text-[18px]">
            From strategy to deployment – your end-to-end partner for scalable,
            production-ready solutions
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
              <CardContent className="md:p-6  ">
                <h3 className="text-xl font-semibold font-playfair text-[#3291B6] whitespace-pre-line">
                  {item.title}
                </h3>

                {/* <p className="mt-4 text-sm font-poppins text-black/50 leading-relaxed">
                  {item.desc}
                </p> */}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ValueWhyPartner;
