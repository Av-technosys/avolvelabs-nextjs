
import React from "react";

const CrmHero = () => {
  return (
    <>
      <div
        className="relative w-full bg-no-repeat bg-bottom overflow-hidden"
        style={{
          backgroundImage: "url('/aboutImg.png')",
          backgroundSize: "clamp(100%, 30vw + 100%, 250%) auto",
          backgroundColor: "#fdf2f4",
          backgroundBlendMode: "multiply",
        }}
      >
        <section className="text-center md:px-8 px-6 pt-16 pb-20 md:pt-10 md:pb-64 bg-linear-to-b from-white/40 to-transparent">
          <h1 className="font-playfair text-3xl md:text-6xl font-bold text-[#032d60] leading-tight">
            CRM Strategy Implementations,
            <br />
            <span className="text-sky-600"> #1 AI CRM.</span>
          </h1>
          <p className="font-poppins text-sm md:text-lg text-gray-700 max-w-3xl mx-auto mt-6 md:mt-10 px-2 md:px-4 leading-relaxed">
            Since we opened our doors in 1999, we&apos;ve had a singular focus —
            helping our customers improve their customer relationships.
            We&apos;ve been leaders in AI for over 10 years, fuelling
            productivity for our customers so they can deliver exceptional
            experiences to their own. It&apos;s no surprise, then, that over
            150,000 companies worldwide now trust Salesforce to drive growth.
          </p>
        </section>
        <div className="">
          <svg viewBox="380 0 1040 120" preserveAspectRatio="none" className="">
            <path
              d="M0 120 L0 120 C360 0 1080 0 1440 120 L1440 120 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default CrmHero;
