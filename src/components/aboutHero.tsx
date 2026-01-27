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
          <h1 className="font-playfair text-2xl md:text-5xl font-bold text-[#032d60] leading-tight">
           We Design the Foundation for Predictable
            <br />
            <span className="text-sky-600"> Scalable Revenue.</span>
          </h1>
          <p className="font-poppins text-sm md:text-lg text-gray-700 max-w-3xl mx-auto mt-6 md:mt-10 px-2 md:px-4 leading-relaxed">
          Most CRM projects fail quietly due to low adoption and misalignment. We exist to change that. AvolveLabs is an outcome led, AI first consultancy building platforms people actually want to use.

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
          Smarter Systems Designed for <br/> Growth and Adoption
              <br className="hidden md:block" />
              <span className="text-[#032d60]">customers&apos; hearts.</span>
            </h2>
            <p className="font-poppins text-md md:text-[18px] text-gray-700 max-w-2xl mx-auto mt-5 md:mt-8 leading-relaxed">
          AvolveLabs solves the real challenges behind failed CRM projects: poor alignment, low adoption, and unrealized value. We build strategy led, revenue focused systems that match how your business actually operates, helping teams scale with clarity, efficiency, and impact.

            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
