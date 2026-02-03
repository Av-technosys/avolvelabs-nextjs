"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IconArrowUpRight } from "@tabler/icons-react"

const VideoCard = ({
  reverse = false,
  src = "/videos/video1.mp4",
}: {
  reverse?: boolean
  src?: string
}) => (
  <div
    className={`relative overflow-hidden rounded-2xl bg-blue-300 shadow-xl h-64 sm:h-96 lg:h-75 ${
      reverse ? "lg:order-1" : "lg:order-2"
    }`}
  >
    <video
      className="h-full w-full object-cover"
      src={src}
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
)

const HomeVideo = () => {
  return (
    <>
      {/* SECTION 1 */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-8 md:px-11">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-[35px] font-playfair font-bold text-[#032d60] leading-tight">
                CRM Strategy & Implementation
                <span className="text-[#0176d3]">
                  <br /> Build the right revenue foundation
                </span>
              </h2>

              <p className="mt-6 font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed">
                We design CRM systems that actually support how your business
                sells. From revenue architecture to funnel design and clean data
                models, we ensure your CRM becomes a growth engine not just a
                tool.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link target="_blank" href="https://store.zoho.in/ResellerCustomerSignUp.do?id=b3383bae8a8d4d5588223dbc7255a4d0b022d128fd51d94e98e55118213315b7" className="w-full sm:w-auto">
                  <Button className="cursor-pointer font-poppins bg-[#0176d3] px-8 py-6 text-base hover:bg-[#014486] w-full">
                    Start for free
                  </Button>
                </Link>

                
              </div>
            </div>

            <VideoCard src="/videos/video1.mp4" />
          </div>
        </div>
      </section>

      {/* SECTION 2 (REVERSED) */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-8 md:px-11">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-[35px] font-playfair font-bold text-[#032d60] leading-tight">
                Agentic AI & Automation
                <span className="text-[#0176d3]">
                  <br /> AI that works like a team member
                </span>
              </h2>

              <p className="mt-6 font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed">
                We build autonomous AI agents that handle sales follow ups,
                operations tasks, and service workflows so your teams focus on
                decisions, not busy work.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/case-studies" className="w-full sm:w-auto">
                  <Button className=" cursor-pointer font-poppins bg-[#0176d3] px-8 py-6 text-base hover:bg-[#014486] w-full flex gap-2">
                    See our stories <IconArrowUpRight size={18} />
                  </Button>
                </Link>

                
              </div>
            </div>

            <VideoCard reverse src="/videos/video2.mp4" />
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-8 md:px-11">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-[35px] font-playfair font-bold text-[#032d60] leading-tight">
                Managed Services & Adoption
                <span className="text-[#0176d3]">
                  <br /> Systems don’t fail. Adoption does.
                </span>
              </h2>

              <p className="mt-6 font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed">
                We stay with you post go live to continuously optimize, manage
                releases, and drive real user adoption ensuring your CRM keeps
                delivering ROI month after month.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link target="_blank" href="https://store.zoho.in/ResellerCustomerSignUp.do?id=b3383bae8a8d4d5588223dbc7255a4d0b022d128fd51d94e98e55118213315b7" className="w-full sm:w-auto">
                  <Button className="cursor-pointer font-poppins bg-[#0176d3] px-8 py-6 text-base hover:bg-[#014486] w-full">
                    Start for free
                  </Button>
                </Link>

                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="cursor-pointer font-poppins border-[#0176d3] px-8 py-6 text-base text-[#0176d3] w-full"
                  >
                    Contact for demo
                  </Button>
                </Link>
              </div>
            </div>

            <VideoCard src="/videos/video3.mp4" />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeVideo
