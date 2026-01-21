import React from "react"
import { Button } from "@/components/ui/button"

const CrmBusinessValueDemo = () => {
  return (
    <section className="bg-[#e8f2ff] py-10 px-8">
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="text-[32px] md:text-[32px] lg:text-[32px] font-playfair font-bold text-[#032d60]">
          Wondering How AI Can Deliver Business Value?
        </h2>

        <p className="mt-4 text-base md:text-lg text-gray-700 font-poppins">
          We&apos;ll showcase real-world Agentic AI use cases and help you plan for
          quick wins using your existing tools, data, and infrastructure.
        </p>

        <div className="mt-8">
          <Button
            className="
              rounded-full bg-[#1f7bf2] px-8 py-6
              text-base md:text-lg font-semibold text-white
              hover:bg-[#1766c2] transition-colors
            "
          >
            <span className="block sm:hidden">Book Now</span>
            <span className="hidden sm:block">
              Schedule a Demo and See Agentic AI in Action!
            </span>
          </Button>
        </div>

      </div>
    </section>
  )
}

export default CrmBusinessValueDemo
