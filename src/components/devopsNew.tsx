"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, GraduationCap, CheckCircle2 } from "lucide-react";

const performanceItems = [
  {
    title: "Deployment Time Tracking",
    desc: "Real-time monitoring of code-to-production speed to ensure rapid delivery cycles.",
  },
  {
    title: "Promotion Cycle Measurement",
    desc: "Tracking the journey of features across environments to identify and fix bottlenecks.",
  },
  {
    title: "Failure Rate Analysis",
    desc: "In-depth data on release stability to minimize downtime and enhance user experience.",
  },
  {
    title: "Rollback Metrics",
    desc: "Automated insights into recovery speed and stability post-deployment failures.",
  },
];

const enablementList = [
  "Copado & CI/CD workshops",
  "Git & branching training",
  "Release governance documentation",
  "DevOps playbook creation",
  "Mentoring & transition support",
];

const DevOpsNew = () => {
  return (
    <div className="flex flex-col gap-0">
      <section className="relative overflow-hidden bg-[#f7faff] py-16 px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ecf5_1px,transparent_1px),linear-gradient(to_bottom,#e6ecf5_1px,transparent_1px)] bg-size-[60px_60px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <h2 className="text-[#032d60] font-playfair text-3xl md:text-[42px] font-bold leading-tight">
                  Performance & <br />
                  <span className="text-[#0176d3]">Visibility</span>
                </h2>
                <h3 className="mt-4 font-playfair text-xl md:text-2xl font-semibold text-[#032d60]">
                  Pipeline Analytics
                </h3>
              </div>

              <p className="font-poppins text-md md:text-[17px] text-gray-700 leading-relaxed">
                We provide real-time visibility into release performance and
                bottlenecks. Our analytics engine ensures that every stage of
                your delivery pipeline is measurable and optimized.
              </p>

              <Card className="border-l-4 border-[#0176d3] bg-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#f0f7ff] p-2 rounded-full">
                      <Zap className="w-5 h-5 text-[#0176d3]" />
                    </div>
                    <p className="text-lg font-playfair font-bold text-[#032d60]">
                      The Strategic Outcome
                    </p>
                  </div>
                  <p className="text-sm font-poppins text-gray-600">
                    Data-driven release improvement and transparent leadership
                    visibility across the entire engineering organization.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
              className="lg:col-span-7 grid sm:grid-cols-2 gap-6 relative"
            >
              {performanceItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className={`
                    ${i === 0 ? "sm:translate-y-8" : ""} 
                    ${i === 3 ? "sm:-translate-y-8" : ""}
                  `}
                >
                  <Card className="h-full bg-white/90 backdrop-blur-sm border border-gray-100 shadow-md hover:shadow-xl hover:border-[#0176d3]/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="h-10 w-10 bg-[#f0f7ff] rounded-lg flex items-center justify-center mb-4 text-[#0176d3] font-bold">
                        0{i + 1}
                      </div>
                      <h3 className="text-lg font-playfair font-bold text-[#032d60]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-poppins text-gray-600 leading-snug">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white py-20 px-8 border-t border-gray-100">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="space-y-3">
                <h2 className="text-[#032d60] font-playfair text-3xl md:text-[42px] font-bold leading-tight uppercase tracking-tight">
                  DevOps Enablement
                </h2>
                <h3 className="text-[#0176d3] font-playfair text-xl md:text-2xl font-semibold">
                  DevOps Training & Center of Excellence
                </h3>
                <p className="font-poppins text-gray-700 text-lg leading-relaxed">
                  We help organizations build internal DevOps capability and
                  long-term maturity.
                </p>
              </div>
              <div className="grid gap-3">
                {enablementList.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 bg-[#f8fbff] p-4 rounded-xl border border-[#e1efff]"
                  >
                    <CheckCircle2 className="text-[#0176d3] w-5 h-5 shrink-0" />
                    <span className="font-poppins font-medium text-[#032d60]">
                      {line}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 flex justify-center lg:justify-end"
            >
              <div className="relative p-1 bg-linear-to-br from-[#0176d3] to-[#032d60] rounded-3xl shadow-2xl w-full max-w-md">
                <div className="bg-[#032d60] rounded-[22px] p-8 md:p-12 text-center space-y-6">
                  <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-2">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-white/70 font-poppins text-sm uppercase tracking-[0.2em]">
                    The Final Outcome
                  </h4>
                  <p className="text-white font-playfair text-3xl md:text-4xl font-bold leading-tight">
                    Self-sufficient <br /> DevOps teams.
                  </p>
                  <div className="pt-4">
                    <div className="h-1 w-20 bg-[#0176d3] mx-auto rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsNew;
