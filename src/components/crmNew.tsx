"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    title: "Continuous Intelligence Loops",
    desc: 'The system moves away from "one and done" implementations by utilizing constant pulses of real world data. Every user interaction serves as a feedback signal that informs the very next development cycle.',
  },
  {
    title: "Modular Value Sprints",
    desc: "Large scale digital transformations are broken down into bite sized, high impact modules. This Lego style logic allows specific value adds to be deployed every few weeks.",
  },
  {
    title: "Predictive Execution",
    desc: "The methodology shifts from reactive fixing to proactive optimization by anticipating bottlenecks before they happen.",
  },
  {
    title: "Embedded Trust & Governance",
    desc: "Compliance, security, and auditability are shifted left and embedded into every single iteration. This Trust by Design approach ensures that speed never compromises safety.",
  },
  {
    title: "Proactive Scalability",
    desc: "The framework is built on the principle of designing for future scale before the immediate need even arises. Every sprint is engineered to strengthen the ecosystem's capacity for complexity.",
  },
];

const CrmNew = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    if (info.offset.x < -60 && activeIndex < cards.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }

    if (info.offset.x > 60 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 pb-24 sm:px-8 md:pb-32">
      <div className="relative mx-auto max-w-7xl">
        {/* Heading + Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-4xl text-center"
        >
          <h2 className="font-playfair text-3xl font-bold leading-tight text-[#0b1425] md:text-[42px]">
            The Agile Loop:
            <br />
            Engineering for Velocity
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[15.5px] leading-[1.72] text-[#3d4b61]">
            In a high performance systems environment, Agile isn&apos;t just a
            process it&apos;s the engine that powers iterative growth. It allows
            the architecture to function as a living organism that adapts to
            market shifts in real time.
          </p>
        </motion.div>

        {/* Staggered Cards */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="relative mx-auto h-[540px] w-full max-w-[1500px] cursor-grab touch-pan-y active:cursor-grabbing sm:h-[560px]"
        >
          {cards.map((card, index) => {
            const offset = index - activeIndex;
            const distance = Math.abs(offset);
            const isActive = offset === 0;

            return (
              <motion.div
                key={card.title}
                onClick={() => setActiveIndex(index)}
                animate={{
                  x: `calc(-50% + ${offset * 290}px)`,
                  y: distance * 85,
                  scale: isActive ? 1 : 0.98,
                  opacity: distance > 2 ? 0 : 1,
                  zIndex: cards.length - distance,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 24,
                }}
                className="absolute left-1/2 top-0 w-[270px] sm:w-[285px] md:w-[290px]"
              >
                <Card
                  className={`h-[380px] overflow-hidden rounded-2xl border border-[#d9dfe8] bg-white sm:h-[400px] ${
                    isActive ? "border-[#aeb8c8]" : ""
                  }`}
                >
                  <CardContent className="flex h-full flex-col p-5 pt-0 sm:p-6 sm:pt-0">
                    {/* Number */}
                    <span className="font-playfair text-[56px] font-bold leading-none text-[#d5dbe5]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div className="mt-4">
                      <h3 className="font-playfair text-[21px] font-bold leading-[1.2] text-[#032d60]">
                        {card.title}
                      </h3>

                      <p className="mt-4 font-poppins text-[14px] leading-[1.55] text-[#526b91]">
                        {card.desc}
                      </p>
                    </div>

                    {/* Bottom Line */}
                    <div className="mt-auto h-1 w-14 shrink-0 rounded-full bg-blue-500" />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation Dots */}
        <div className="relative mt-4 flex justify-center gap-2">
          {cards.map((card, index) => (
            <button
              key={card.title}
              aria-label={`Show ${card.title}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-7 bg-[#072ac8]"
                  : "w-2 bg-[#c5d7ff]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrmNew;