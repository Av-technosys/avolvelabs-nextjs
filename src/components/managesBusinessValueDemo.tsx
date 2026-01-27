import React from "react"
import { Button } from "@/components/ui/button"

const  ManagesBusinessValueDemo = () => {
  return (
    <section className="bg-[#3291B6] py-10 px-8 mx-auto max-w-7xl">
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="text-[32px] md:text-[32px] lg:text-[32px] font-playfair font-bold text-white/80">
          Wondering How AI Can Deliver Business Value?
        </h2>

        <p className="mt-4 font-poppins text-md md:text-[18px] text-white/80">
          We&apos;ll showcase real-world Agentic AI use cases and help you plan for
          quick wins using your existing tools, data, and infrastructure.
        </p>

        <div className="mt-8">
          <Button
                     className="
                       rounded-full bg-[#1f7bf2] border border-white/80 px-8 py-6
                       text-base md:text-lg font-semibold text-white
                       hover:bg-[#1766c2] transition-colors
                     "
                   >
                     <span className="block sm:hidden">Book Now</span>
                     <span className="hidden sm:block ">
                       Schedule a Demo and See Agentic AI in Action!
                     </span>
                   </Button>
        </div>

      </div>
    </section>
  )
}

export default ManagesBusinessValueDemo;
