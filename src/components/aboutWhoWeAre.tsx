"use client"
import React, { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const stats = [
  { value: 100, suffix: "+", label: "Enterprise Clients Transformed" },
  { value: 100, suffix: "%", label: "Project Success Rate" },
  { value: 15, suffix: "+", label: "Technology Platforms Mastered" },
  { value: 200, suffix: "+", label: "Certified Experts" },
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
        <h2 className="font-playfair text-3xl md:text-[38px] text-[#032d60] font-bold mb-8">
          Who We Are
        </h2>

        <div className="font-poppins text-gray-800 text-md md:text-[18px] leading-relaxed space-y-6 max-w-6xl mx-auto">
          <p>
            Avolvelabs is an IT consulting and digital services company delivering
            transformative technology solutions across industries. Founded in
            the UK in 2017 with the mission to bridge the gap between strategy and
            execution, we are a team of problem solvers, technologists, and
            consultants with deep expertise in enterprise integration and API
            management, data & analytics, and enterprise application services.
          </p>

          <p>
            Headquartered in the UK and supported by delivery centers in India,
            we serve customers across the UK, US, Europe, the Middle East, and
            Asia Pacific.
          </p>
        </div>
      </div>

      {/* STATS CARD */}
      <div ref={statsRef} className="mt-10 mb-10">
        <Card className="rounded-[30px] border-none shadow-[0_15px_45px_rgba(0,0,0,0.08)] bg-white max-w-4xl mx-auto">
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
        <Button className="font-poppins rounded-full px-10 py-7 text-lg bg-[#0176d3] hover:bg-[#014486]">
          Contact Us
        </Button>
      </div>
    </section>
  )
}

export default AboutWhoWeAre
