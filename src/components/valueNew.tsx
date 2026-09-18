"use client";

import { motion } from "framer-motion";

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
    <section className="bg-white px-6 py-8 sm:px-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Header - Matched to valueWhyPartner Typography */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#d9dfe8] pb-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-[#072ac8]">
              Measurable Impact
            </p>
            <h2 className="font-playfair text-3xl font-bold leading-tight text-[#0b1425] md:text-[42px]">
              Business Value,
              <br />
              You Can Actually <span className="text-[#072ac8]">Measure</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <p className="font-poppins text-[15.5px] leading-[1.72] text-[#3d4b61]">
              We don&apos;t sell features. friction, improve decision-making, and scale cleanly as your business grows.
            </p>
          </motion.div>
        </div>

        {/* Big Typography Stats Array */}
        <div className="py-0">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col md:flex-row justify-between gap-8 md:gap-12"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                className="relative group flex-1"
              >
                 <div className="flex flex-col border-l-2 border-[#d9dfe8] pl-5 transition-all duration-500 group-hover:border-[#072ac8]">
                   <span className="font-playfair text-4xl md:text-5xl font-bold tracking-tight text-[#0b1425] transition-colors duration-500 group-hover:text-[#072ac8]">
                     {stat.value}
                   </span>
                   <span className="mt-2 font-poppins text-xs uppercase tracking-widest text-[#3d4b61]">
                     {stat.label}
                   </span>
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* The 2 Values */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 border-t border-[#d9dfe8] pt-6">
          {values.map((val, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group cursor-default"
            >
              <div className="relative z-10 pt-2">
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#0b1425] mb-3 transition-colors duration-500 group-hover:text-[#072ac8]">
                  {val.title}
                </h3>
                <p className="font-poppins text-[15.5px] leading-[1.72] text-[#3d4b61] max-w-sm">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValueNew;
