"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const commitmentData = [
  {
    id: "clients",
    title: "Commitment to Clients",
    content: "At Avolvelabs, we deliver tailored technology solutions focused on real business impact. Through agile collaboration and transparent communication, we adapt to evolving needs and act as true partners in our clients' growth journey."
  },
  {
    id: "excellence",
    title: "Commitment to Excellence",
    content: "Excellence is at the core of everything we do. We leverage our deep technical expertise and industry best practices to ensure high-quality delivery, robust security, and scalable solutions that stand the test of time."
  },
  {
    id: "csr",
    title: "Corporate Social Responsibility",
    content: "We believe in giving back to the community and operating sustainably. Our CSR initiatives focus on empowering people through education, supporting environmental conservation, and fostering an inclusive workplace culture."
  }
]

const AboutCommitment = () => {
  const [activeTab, setActiveTab] = useState(commitmentData[0]);

  return (
    <section className="px-8 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-[38px] font-bold text-[#032d60] mb-6">
            Our Commitment
          </h2>
          <p className="font-poppins text-gray-600 max-w-3xl mx-auto text-md md:text-[18px]">
            At Avolvelabs, our values are the foundation of our culture, guiding how we 
            operate, innovate, and grow alongside our clients and partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          <div className="md:col-span-4 flex flex-col">
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

          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
                alt="Commitment visual"
                className="w-full h-full object-cover"
                 width={800}
                height={600}
                 unoptimized
              />

              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
            </div>
          </div>


          <div className="md:col-span-4 min-h-[180] flex items-center">
            <p className="font-poppins text-base md:text-lg text-gray-700 leading-relaxed transition-opacity duration-300">
              {activeTab.content}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutCommitment