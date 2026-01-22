"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "3x", label: "Faster Decisions" },
  { value: "60%", label: "Lower Ops Cost" },
  { value: "99.9%", label: "System Reliability" },
];

const values = [
  {
    title: "Built for Real Teams",
    desc: "Designed around how sales, service, and ops teams actually work — not demo slides.",
  },
  {
    title: "AI With Accountability",
    desc: "Every AI action is traceable, controllable, and aligned with business goals.",
  },
];

const ValueNew = () => {
  return (
    <section className="bg-[#f9fbff] py-10 px-8">
      <div className="mx-auto max-w-7xl grid gap-20 lg:grid-cols-2 items-start">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:space-y-10 space-y-4 "
        >
          <h2 className="text-3xl md:text-[40px] font-playfair font-bold text-[#032d60] ">
            Business Value,
            <br /> You Can Actually Measure
          </h2>

          <p className=" text-md md:text-[18px]  text-gray-700 max-w-xl font-poppins">
            We don’t sell features. We design systems that reduce friction,
            improve decision-making, and scale cleanly as your business grows.
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-playfair font-bold text-[#032d60]">
                  {s.value}
                </p>
                <p className="text-sm font-poppins text-gray-600 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-6"
        >
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Card className="border-2 border-gray-200 hover:border-[#EDFFF0] transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-[#032d60]">
                    {v.title}
                  </h3>
                  <p className="mt-2 font-poppins text-gray-600 leading-relaxed">
                    {v.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueNew;
