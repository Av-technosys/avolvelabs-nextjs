
"use client";

import {
  IconSparkles,
  IconChecklist,
} from "@tabler/icons-react";

const agents = [
  {
    title: "Data Deployment & Governance",
    icon: IconSparkles,
    desc: "DevOps without structured data governance creates instability. We ensure consistent and compliant data across environments.",
    color: "text-blue-500",
  },
  {
    title: "Security & Compliance",
    icon: IconChecklist,
    desc: "We implement enterprise-grade governance controls across your DevOps lifecycle.",
    color: "text-blue-500",
  },
];

const DevOpsAgentSuite = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-8 md:py-16">
      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center md:mb-20">
          <h2 className="font-playfair text-3xl font-bold text-[#0b1425] md:text-[42px]">
            DATA & GOVERNANCE
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[15.5px] leading-[1.72] text-[#3d4b61]">
            Our AI agents are designed to automate repetitive tasks, make
            informed decisions, and enable teams to work more efficiently and
            effectively.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-12">

          {agents.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`relative ${
                  index === 0 ? "md:-rotate-[5deg]" : "md:rotate-[5deg]"
                }`}
              >
                {/* Icon Badge */}
                <div className="absolute -top-7 left-8 z-20 flex h-16 w-16 items-center justify-center rounded-full border border-[#d9dfe8] bg-white">
                  <Icon
                    size={30}
                    stroke={1.7}
                    className={item.color}
                  />
                </div>

                {/* Card */}
                <div className="flex min-h-[390px] flex-col rounded-[24px] border border-[#d9dfe8] bg-white transition-transform duration-300 hover:-translate-y-1 md:min-h-[410px]">

                  <div className="flex h-full min-h-[390px] flex-col p-7 pt-14 md:min-h-[410px] md:p-8 md:pt-16">

                    {/* Number */}
                    <span className="mb-4 text-right font-playfair text-[52px] font-bold leading-none text-[#d5e1ff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div>
                      <h3 className="font-playfair text-[24px] font-bold leading-[1.25] text-[#032d60]">
                        {item.title}
                      </h3>

                      <p className="mt-5 font-poppins text-[15px] leading-[1.7] text-[#526b91]">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Line */}
                    <div className="mt-auto h-1 w-14 rounded-full bg-blue-500" />

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

export default DevOpsAgentSuite;