"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    title: "Unified Data Core",
    desc: "All customer signals flow into a single, governed intelligence layer.",
  },
  {
    title: "Predictive Execution",
    desc: "AI anticipates outcomes before teams react.",
  },
  {
    title: "Composable Architecture",
    desc: "Swap tools, scale modules, evolve without rewrites.",
  },
  {
    title: "Trust by Design",
    desc: "Security, auditability, and compliance embedded at every layer.",
  },
];

const CrmNew = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] py-10 px-8">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ecf5_1px,transparent_1px),linear-gradient(to_bottom,#e6ecf5_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold leading-tight">
              Architecture CRM
              <br /> Thinks in Systems
            </h2>

            <p className="font-poppins text-md md:text-[18px] text-gray-700">
              This isn&apos;t a stack of features. It&apos;s a deliberately engineered
              system where data, automation, and teams move in sync.
            </p>

            <Card className="border-[#0176d3] bg-white shadow-lg md:block hidden">
              <CardContent className="p-6">
                <p className="text-sm font-poppins uppercase tracking-wider text-[#0176d3] font-semibold">
                  Core Principle
                </p>
                <p className="mt-3 text-xl font-poppins text-[#032d60]">
                  Design for scale before you need it.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* RIGHT MATRIX */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-8 relative"
          >
            {cards.map((c, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`
                  ${i === 0 ? "sm:translate-y-10" : ""} 
                  ${i === 3 ? "sm:-translate-y-10" : ""}
                `}
              >
                <Card className="h-full bg-white/80 backdrop-blur border border-gray-200 hover:border-[#0176d3] transition">
                  <CardContent className="md:p-6 p-4 ">
                    <h3 className="text-xl font-playfair font-bold text-[#032d60]">
                      {c.title}
                    </h3>
                    <p className="mt-3 font-poppins text-gray-600 ">
                      {c.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CrmNew;
