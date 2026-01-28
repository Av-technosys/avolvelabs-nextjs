"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const commitmentData = [
  {
    id: "clients",
    title: "Deep Domain Experience",
    content: "We bring hands on experience across industries including Manufacturing, Retail, Education, and Professional Services. Our team understands real business challenges, workflows, and revenue models, allowing us to design solutions that fit your operations, not just your technology stack."
  },
  {
    id: "excellence",
    title: "AI Led, Not AI Labeled",
    content: "We go beyond AI buzzwords. Our approach focuses on practical, real world AI implementations that automate processes, enhance decision making, improve customer engagement, and drive measurable efficiency across sales, service, and operations."
  },
  {
    id: "csr",
    title: "Right Priced, High Impact Consulting",
    content: "We deliver enterprise grade outcomes without the inflated costs of traditional large consulting firms. Our pricing model ensures you get high quality strategy, execution, and long term value while maintaining cost efficiency and ROI."
  },
  {
    id: "csr-2",
    title: "Balanced Global Delivery Model",
    content: "We combine onsite strategic leadership with scalable offshore execution to deliver speed, quality, and cost effectiveness. This balanced model allows us to stay close to your business goals while maintaining flexible, efficient delivery."
  }
]

const AboutCommitment = () => {
  const [activeTab, setActiveTab] = useState(commitmentData[0]);

  return (
    <section className="px-8 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-[38px] font-bold text-[#032d60] mb-6">
            Why AvolveLabs?

          </h2>
          <p className="font-poppins text-md md:text-[18px] text-gray-700 max-w-3xl mx-auto ">
            At Avolvelabs, our values are the foundation of our culture, guiding how we 
            operate, innovate, and grow alongside our clients and partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          <div className="md:col-span-4 flex flex-col order-2 md:order-1">
            {commitmentData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`text-left font-poppins text-lg md:text-xl font-bold py-6 border-b-2 transition-all duration-200 outline-none ${
                  activeTab.id === item.id 
                  ? "text-[#032d60] border-[#032d60]" 
                  : "text-gray-400 border-gray-100 hover:text-gray-600"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="md:col-span-4 flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-90 md:h-90 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white">
              <Image
                src="/images/robotimg.svg" 
                alt="Commitment visual"
                className="w-full h-full object-cover"
                 width={800}
                height={600}
                 unoptimized
              />

              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
            </div>
          </div>


          <div className="md:col-span-4 min-h-[180] flex items-center  order-3 md:order-3">
            <p className="font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed transition-opacity duration-300">
              {activeTab.content}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutCommitment