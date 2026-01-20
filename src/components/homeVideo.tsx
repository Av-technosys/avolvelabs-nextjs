"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {  ArrowUpRight } from "lucide-react"

const HomeVideo = () => {
  return (
    <>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-8 md:px-11">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <h1 className="text-3xl md:text-[38px] font-playfair font-bold  text-[#032d60]">
                Grow fast with our <br />
                <span className="text-[#0176d3]">free CRM.</span>
              </h1>

              <p className="mt-6 text-md md:text-[18px] text-gray-700 font-poppins">
                See value from day one with{" "}
                <span className="text-[#0176d3] underline cursor-pointer">
                  our free, all-in-one CRM built for small businesses
                </span>.
                Stop juggling spreadsheets and disconnected apps. Bring customer
                activity, pipeline, marketing campaigns, and service cases into
                one place. Start getting more done day-to-day and get full
                visibility into your business. Free.
              </p>

              <div className="mt-4 font-medium font-poppins">
                <span className="cursor-pointer text-[#0176d3] underline">
                  Get it for free
                </span>{" "}
                ·{" "}
                <span className="cursor-pointer text-[#0176d3] underline">
                  See full pricing
                </span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/">
                  <Button className="bg-[#0176d3] px-8 py-6 text-base hover:bg-[#014486] w-full sm:w-auto">
                    Start for free
                  </Button>
                </Link>

                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-[#0176d3] px-8 py-6 text-base text-[#0176d3] w-full sm:w-auto"
                  >
                    Start demo
                  </Button>
                </Link>
              </div>
            </div>

          <div className="relative overflow-hidden rounded-2xl bg-blue-300 shadow-xl h-64 sm:h-96 lg:h-75 ">
       <iframe
    className="h-full w-full object-cover"
    src="https://www.youtube.com/embed/iqIp_zgDJ0k?autoplay=0"
    title="YouTube video player"
   
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
       ></iframe>
    </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 (VIDEO BELOW TEXT ON MOBILE/TABLET) */}
  {/* SECTION 2 (VIDEO BELOW TEXT ONLY ON MOBILE/TABLET) */}
<section className="bg-white py-10 ">
  <div className="mx-auto max-w-7xl px-8 md:px-11">
    <div className="grid items-center gap-12 lg:grid-cols-2">

      {/* TEXT */}
      <div className="order-1 lg:order-2">
        <h2 className="text-3xl md:text-[38px] font-playfair font-bold leading-tight text-[#032d60]">
          2.5M+ conversations handled by <br />
          Agentforce and counting.
        </h2>

        <p className="mt-6 text-md md:text-[18px] text-gray-700 font-poppins">
          Everyone talks the AI talk. We’re walking the walk. With 66%
          autonomous case resolution, 15% more marketing pipeline, and
          1.8x higher lead conversion, Agentforce is the real deal.
          See how we did it — and how you can, too.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/">
            <Button className="bg-[#0176d3] font-poppins px-8 py-6 text-base hover:bg-[#014486] flex gap-2 w-full sm:w-auto">
              See our stories <ArrowUpRight size={18} />
            </Button>
          </Link>

          <Link href="/">
            <Button
              variant="outline"
              className="border-[#0176d3] font-poppins px-8 py-6 text-base text-[#0176d3] flex gap-2 w-full sm:w-auto"
            >
              Experience Salesforce Help <ArrowUpRight size={18} />
            </Button>
          </Link>
        </div>
      </div>

      {/* VIDEO */}
     <div className="relative overflow-hidden rounded-2xl bg-blue-300 shadow-xl h-64 sm:h-96 lg:h-75  order-2 lg:order-1">
  <iframe
    className="h-full w-full object-cover"
    src="https://www.youtube.com/embed/iqIp_zgDJ0k"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>

</div>

    </div>
  </div>
</section>
    <section className="text-center md:px-8 px-8 py-10">
      <h1 className="font-playfair text-[32px] md:text-[32px] lg:text-[32px] font-bold text-[#032d60] leading-tight">
        Salesforce is the platf orm<br />
        for the Agentic Enterprise.
      </h1>

      <p className="font-poppins text-base md:text-[18px] lg:text-[18px] text-gray-700 max-w-3xl mx-auto mt-6 md:mt-8 px-2 leading-relaxed">
        Our deeply unified platform brings together apps, data, agents, and metadata to drive customer and employee success. With trust and governance built in, Salesforce ensures your AI and business scale securely, reliably, and with confidence.
      </p>

      <Link href="/" className="mt-8 md:mt-10 inline-block">
        <Button className="bg-[#0176d3] hover:bg-[#014486] text-white px-16 md:px-9 py-6 rounded-md text-base md:text-lg font-poppins" >
          See all products
        </Button>
      </Link>
    </section>

    </>
  )
}

export default HomeVideo
