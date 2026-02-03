"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  IconChevronLeft,
  IconChevronRight,
  IconQuote,
  IconUser,
} from "@tabler/icons-react";

const testimonials = [
  {
    name: "Priya Nair",
    role: "",
    // companyLogo:
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Vodafone_Logo.svg/1000px-Vodafone_Logo.svg.png",
    content:
      "The Zoho solution provided by Avolvelabs transformed the way we manage our sales processes. The team is skilled, proactive, and always available for support. Truly a trusted partner!",
    initials: <IconUser/>,
    color: "bg-gray-100 text-[#032d60]",
  },
  {
    name: "Rakesh Gupta",
    role: "",
    // companyLogo:
    //   "https://www.oka.com/on/demandware.static/Sites-oka_gb-Site/-/default/dw06617e47/images/logo.svg",
    content:
      "Avolvelabs Salesforce experts understood our business needs perfectly. Their team implemented a seamless CRM solution that improved our workflow efficiency significantly. Highly reliable and professional!",
    initials: <IconUser/>,
    color: "bg-gray-100 text-gray-900",
  },
  {
    name: "Anil Sharma",
    role: "",
    // companyLogo: "https://via.placeholder.com/100x30?text=TechCorp",
    content:
      "Their team provided exceptional support during our migration process. The expertise they brought to the table was exactly what we needed to scale our infrastructure.",
    initials: <IconUser/>,
    color: "bg-gray-100 text-gray-900",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Screen size check for responsive sliding
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    const limit = isMobile ? testimonials.length - 1 : testimonials.length - 2;
    if (currentIndex < limit) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="px-8 py-10 overflow-hidden">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-6">
          <div className="text-center md:text-left flex-1">
            <h4 className="font-playfair text-3xl md:text-[38px] font-bold text-[#032d60] mb-4">
              What Our Clients Say
            </h4>
            <p className="font-poppins text-md md:text-[18px] text-gray-700 max-w-2xl">
              We don&apos;t just aim to impress we consistently deliver. But
              don&apos;t just take our word for it. Hear what our clients have
              to say.
            </p>
          </div>

          <div className="flex gap-3 pr-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full h-12 w-12 border-2 border-blue-900 hover:bg-white shadow-sm disabled:opacity-30"
            >
              <IconChevronLeft size={24} stroke={1.5} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={
                currentIndex >=
                (isMobile ? testimonials.length - 1 : testimonials.length - 2)
              }
              className="rounded-full h-12 w-12 border-2 border-blue-900 hover:bg-white shadow-sm disabled:opacity-30"
            >
              <IconChevronRight size={24} stroke={1.5} />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out md:gap-6"
            style={{
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 50.8)}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <Card
                key={index}
                className="min-w-full md:min-w-[calc(50%-12px)] border-none rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] bg-white"
              >
                <CardContent className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center  justify-center font-bold text-lg ${item.color}`}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-bold text-[#032d60] font-poppins text-sm md:text-base">
                          {item.name}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500 font-poppins">
                          {item.role}
                        </p>
                      </div>
                    </div>
                    {/* <Image
                      width={800}
                      height={600}
                      unoptimized
                      src={item.companyLogo}
                      alt="Company"
                      className="h-5 md:h-8 object-contain"
                    /> */}
                  </div>
                  <div className="flex gap-4">
                    <IconQuote
                      size={32}
                      className="text-blue-100 shrink-0 rotate-180 hidden md:block"
                      fill="currentColor"
                    />
                    <p className="font-poppins text-gray-700 leading-relaxed text-[14px] md:text-[17px]">
                      {item.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* <div className="flex justify-center mt-16">
          <Button className="rounded-full font-poppins px-10 py-6 text-base font-medium bg-[#0176d3] hover:bg-[#014486] transition-all shadow-md">
            View All
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
