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
            <h2 className="font-playfair text-3xl font-bold leading-tight text-[#032d60] md:text-3xl lg:text-4xl">
              Meet Agentforce. What AI <br className="hidden md:block" />
              was meant to be.
            </h2>

            <p className="font-poppins leading-relaxed text-gray-700 text-sm md:text-lg">
              Businesses succeed when they create meaningful connections.
              Agentforce fuels connection, multiplying your workforce with
              autonomous agents that can serve customers round the clock and
              help your employees work better and faster. With specialised,
              customisable AI agents working together with humans across sales,
              service, marketing, commerce and IT, it&apos;s easy to deliver
              amazing experiences that customers love.
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
