"use client";
import Image from "next/image";
import React, { useState } from "react";

const coreValues = [
  {
    id: 1,
    title: "Innovation",
    description:
      "We embrace a mindset of continuous innovation, exploring emerging technologies and creative approaches to solve complex business challenges and stay competitive in their industries.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Integrity",
    description:
      "We uphold the highest standards of integrity in all of our actions, ensuring transparency, honesty, and strong ethical principles in every partnership.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Client Centricity",
    description:
      "Our clients are at the heart of everything we do. We focus on delivering value and exceeding expectations through dedicated support and tailored solutions.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Collaboration",
    description:
      "We believe in the power of working together. By fostering an inclusive environment, we leverage collective expertise to achieve extraordinary results.",
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
            Core Values
          </h2>
          <p className="font-poppins text-gray-500 max-w-3xl mx-auto text-md md:text-[18px]">
            At Avolvelabs, our values are the foundation of our culture, guiding
            how we operate, innovate, and grow alongside our clients and
            partners.
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
                      <h3 className="font-playfair font-bold text-2xl md:text-3xl whitespace-nowrap md:rotate-90 opacity-100 transition-opacity duration-300">
                        {value.title}
                      </h3>
                    </div>
                  )}

                  <div
                    className={`transition-all duration-500 ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  >
                    <h3 className="font-playfair font-bold text-3xl md:text-4xl mb-4">
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
