import React from "react";
import {
  XCircle,
  ShieldCheck,
  ZapOff,
  MessageSquareOff,
  Target,
} from "lucide-react";

const ManageAvolveDifference = () => {
  const points = [
    {
      title: "We don't over-engineer",
      desc: " If a simple, native Flow solves the problem, we won't charge you for 500 lines of custom Apex code. We build for maintainability.",
      icon: <ZapOff className="w-6 h-6 text-[#072ac8]" />,
    },
    {
      title: "We don't hide behind a help desk",
      desc: " We aren't just a reactive support line. We are proactive partners who suggest improvements before you even realize you need them.",
      icon: <MessageSquareOff className="w-6 h-6 text-[#072ac8]" />,
    },
    {
      title: "We don't ignore the Why",
      desc: " We never make a technical change without understanding the business goal behind it. Every click should contribute to your bottom line.",
      icon: <Target className="w-6 h-6 text-[#072ac8]" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Bold Header */}
          <div className="lg:col-span-5">
            <div className="flex justify-center md:justify-start">
            <div className="inline-flex  items-center gap-2 px-3 py-1 rounded-full bg-[#072ac8]/10 text-[#072ac8] text-xs font-semibold tracking-wider uppercase mb-6">
              <XCircle className="w-4 h-4" />
              <span>THE AVOLVE DIFFERENCE</span>
            </div>
            </div>
            <h2 className="mb-6 text-center md:text-left text-[#0b1425] font-playfair text-3xl md:text-[42px] font-bold leading-tight">
              What We <br className="md:block hidden" />
              <span className="italic text-[#072ac8]">Don&apos;t</span> Do
            </h2>
            <p className="leading-[1.72] md:text-left text-center font-poppins text-[15.5px] text-[#3d4b61]">
              We differentiate ourselves by what we refuse to be:{" "}
              <br className="hidden md:block" />
              <span className="font-semibold text-[#0b1425]">
                a churn and burn development shop.
              </span>
            </p>
          </div>

          {/* Right Side: Points */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-[#d9dfe8] bg-white hover:border-[#c5d7f5] hover:shadow-[0_8px_30px_rgba(7,42,200,0.06)] transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl border border-[#d9dfe8] bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#0b1425] mb-3">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-[#526174] text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageAvolveDifference;
