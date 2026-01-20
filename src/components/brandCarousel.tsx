"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const BrandCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1 })
  ]);

  const logos = [
    "https://logo.clearbit.com/salesforce.com",
    "https://logo.clearbit.com/google.com",
    "https://logo.clearbit.com/spotify.com",
    "https://logo.clearbit.com/adobe.com",
    "https://logo.clearbit.com/amazon.com",
    "https://logo.clearbit.com/microsoft.com",
  ];

  return (
    <section className="max-w-7xl mx-auto py-10 bg-white">
      <div className="flex items-center justify-center mb-16  gap-6">
        <span className="h-px bg-slate-200 flex-1"></span>
        <h2 className="font-playfair text-[25px] md:text-[32px] font-bold text-[#032d60] whitespace-nowrap tracking-tight">
          Trusted By Global Leaders
        </h2>
        <span className="h-px bg-slate-200 flex-1"></span>
      </div>

  
      <div className="px-10 relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {[...logos, ...logos, ...logos].map((src, index) => (
              <div 
                key={index} 
                className="flex-[0_0_auto] min-w-0 px-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img 
                  src={src} 
                  alt="brand" 
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;