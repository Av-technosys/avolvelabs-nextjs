import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <>
      <div
        className="relative max-w-7xl mx-auto bg-no-repeat bg-bottom overflow-hidden"
        style={{
          backgroundImage: "url('/aboutImg.png')",
          backgroundSize: "clamp(100%, 30vw + 100%, 250%) auto",
        }}
      >
        <section className="text-center md:px-8 px-6 pt-16 pb-20 md:pt-10 md:pb-64">
          <h1 className="font-playfair text-3xl md:text-6xl font-bold text-[#032d60] leading-tight">
            We’re Salesforce,
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
      </div>
      <section className="bg-white">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-sm px-6 -mt-10 md:-mt-36 relative z-20">
            <Image
              width={800}
              height={600}
              unoptimized
              src="/aboutPersonImg.png"
              alt="People with robot"
              className="w-full h-auto object-contain mx-auto rounded-4xl"
            />
          </div>
          <div className="text-center md:px-8 px-8 py-10 md:py-5">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#032d60] leading-tight">
              We&apos;re innovating our way into{" "}
              <br className="hidden md:block" />
              <span className="text-[#032d60]">customers&apos; hearts.</span>
            </h2>
            <p className="font-poppins text-sm md:text-lg text-gray-600 max-w-2xl mx-auto mt-5 md:mt-8 leading-relaxed">
              Our commitment to innovation helps us build stronger connections
              and deliver intelligence that transforms how businesses engage
              with people.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
