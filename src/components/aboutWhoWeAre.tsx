"use client"
import React, { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { value: 10, suffix: "+", label: "Years of CRM Experience" },
  { value: 25, suffix: "+", label: "Specialized Consultants" },
  { value: 20, suffix: "+", label: "Technical Certifications" },
  { value: 60, suffix: "+", label: "Successful CRM Transformations" },
]

const AboutWhoWeAre = () => {
  const statsRef = useRef<HTMLDivElement | null>(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  // 🔹 Trigger count ONLY when stats card comes in view
  useEffect(() => {
    if (!statsRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  // 🔹 Smooth count animation
  useEffect(() => {
    if (!started) return

    const max = Math.max(...stats.map((s) => s.value))
    const duration = 1500
    let startTime: number | null = null

    const animate = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      setCount(Math.floor(progress * max))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [started])

  return (
    <section className="bg-blue-100 mx-auto max-w-7xl py-10 px-8">
      <div className="text-center ">
        <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold mb-8">
          Who We Are
        </h2>

        <div className="font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed space-y-6 max-w-6xl mx-auto">
          <p>
          AvolveLabs is an outcome driven, AI first consulting firm that helps organizations build scalable, predictable revenue systems. We design and implement CRM and digital platforms that businesses actually use, aligning business strategy with technology to deliver measurable results.
          </p>
          <p>
           Our team brings deep expertise across Salesforce, Zoho, enterprise integrations and automation. Rather than focusing on software installation alone, we engineer systems that improve adoption, streamline operations, and drive sustainable growth.
          </p>
        </div>
      </div>

      {/* STATS CARD */}
      <div ref={statsRef} className="mt-10 mb-10">
        <Card className="rounded-[30px] border-none shadow-2xl bg-white max-w-4xl mx-auto">
          <CardContent className="p-10 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center ">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#1a73e8] to-[#ff7a18] bg-clip-text text-transparent mb-4">
                    {Math.min(count, stat.value)}
                    {stat.suffix}
                  </div>
                  <p className="font-poppins text-gray-700 text-sm md:text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center mt-12">
        <Link href={"/contact"}>
        <Button className="font-poppins rounded-full px-10 py-7 text-lg bg-[#0176d3] hover:bg-[#014486]">
          Contact Us
        </Button> </Link>
      </div>
    </section>
  )
}

export default AboutWhoWeAre
