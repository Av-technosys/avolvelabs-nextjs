import React from "react"
import { Card, CardContent } from "@/components/ui/card"

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
    <section className="bg-[#073b64] py-10 px-8">
      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-[38px] font-bold text-white">
            Why Partner with Avolvelabs for{" "}
            <span className="bg-linear-to-r from-[#4aa3ff] to-[#a855f7] bg-clip-text text-transparent">
              Agentic AI
            </span>
          </h2>

          <p className="mt-4 text-blue-100 max-w-3xl mx-auto font-poppins text-md md:text-[18px]">
            From strategy to deployment – your end-to-end partner for scalable,
            production-ready agentic AI solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Card
              key={i}
              className="
                bg-transparent
                border border-white/20
                rounded-2xl
              
                hover:border-[#4aa3ff]
                transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-default
              "
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold font-playfair text-white whitespace-pre-line">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-poppins text-blue-100 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CrmWhyPartner
