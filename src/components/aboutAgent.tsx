import React from "react";
import { Button } from "@/components/ui/button";

const AboutAgent = () => {
  return (
    <section className="px-8 py-10">
      <hr
        className="mx-auto mb-10 h-[2] w-full max-w-7xl border-0  bg-[radial-gradient(circle,#032d60,transparent_100%)]
  opacity-30 px-8"
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
       <div className="order-first lg:order-last w-full">
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-none">
    <iframe
      className="absolute top-0 left-0 h-full w-full"
      src="https://youtu.be/iqIp_zgDJ0k?si=WIkCvfuxE7yWGD81"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</div>

          <div className="flex flex-col space-y-6 mt-10">
            <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold leading-tight">
              Our Story & <br className="hidden md:block" />
             Philosophy.
            </h2>

            <p className="font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed">
             We founded AvolveLabs to solve the three biggest failures in the CRM industry: misalignment, low adoption, and unrealized value. We believe that technology should follow strategy, not the other way around. Our approach moves beyond standard implementation to deliver End-to-End Revenue Architecture. Whether you are in Manufacturing, Retail, Education, or Professional Services , we engineer systems that map directly to how your teams sell, serve, and scale.
            </p>

            <div className="pt-4">
              <Button className="bg-[#0176d3] hover:bg-[#014486] text-white px-8 py-6 rounded-md text-lg font-poppins">
                Explore Agentforce
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgent;
