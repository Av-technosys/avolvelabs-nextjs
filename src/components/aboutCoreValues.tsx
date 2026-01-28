"use client";
import Image from "next/image";
import React, { useState } from "react";

const coreValues = [
  {
    id: 1,
    title: "Outcome Mapping",
    description:
      "We begin with strategy, not configuration. Our team maps your business objectives, revenue goals, customer journeys, and decision workflows before designing any solution. Every system we build is aligned with measurable outcomes, ensuring technology directly supports growth and performance.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Adoption Design",
    description:
      "User adoption is not an afterthought. It is designed from the start. We create intuitive, frictionless user experiences that match how your teams actually work, making it easier for sales, service, marketing, and operations to adopt and rely on the platform daily.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Build with Agentic AI",
    description:
      "We move beyond traditional automation and basic AI copilots. We embed intelligent, autonomous AI agents into your workflows to analyze data, make decisions, automate tasks, and improve efficiency across revenue operations, customer engagement, and internal processes.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Continuously Optimize",
    description:
      "Go-live is not the finish line. We support onboarding, training, and behavior change to ensure your teams fully leverage the platform. Post-launch, we continuously monitor performance, optimize workflows, and refine strategies to help you scale faster and sustain long-term impact.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
];

const AboutCoreValues = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="px-8 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-[38px] font-bold text-[#032d60] mb-4">
            Our Methodology
          </h2>
          <p className="font-poppins text-md md:text-[18px] text-gray-700 max-w-4xl mx-auto">
           We do not just implement software. We follow a structured, outcome driven methodology designed to maximize adoption, accelerate ROI, and deliver long term business value. Every engagement is built around real business goals, not generic feature deployments.

          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-[550] md:h-[350]">
          {coreValues.map((value, index) => {
            const isExpanded = hoveredIndex === index;

            return (
              <div
                key={value.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative overflow-hidden rounded-[30px] transition-all duration-700 ease-in-out cursor-pointer 
                  ${isExpanded ? "flex-5" : "flex-1"}`}
              >
                <div className="absolute inset-0">
                  <Image
                    unoptimized
                    width={800}
                    height={600}
                    src={value.image}
                    alt={value.title}
                    className="h-full w-full object-cover transition-transform duration-700 scale-105"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${isExpanded ? "bg-black/60" : "bg-black/40"}`}
                  />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  {!isExpanded && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <h3 className="font-playfair font-bold text-2xl md:text-2xl whitespace-nowrap md:rotate-90 opacity-100 transition-opacity duration-300">
                        {value.title}
                      </h3>
                    </div>
                  )}

                  <div
                    className={`transition-all duration-500 ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  >
                    <h3 className="font-playfair font-bold text-2xl md:text-3xl mb-4">
                      {value.title}
                    </h3>
                    <p className="font-poppins text-sm md:text-[16px] leading-relaxed text-gray-200 max-w-xl">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutCoreValues;
