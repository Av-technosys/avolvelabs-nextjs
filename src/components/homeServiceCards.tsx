import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  IconBox,
  IconShieldCheck,
  IconShoppingBagHeart,
} from "@tabler/icons-react";
const services = [
  {
    title: "Manufacturing",
    description:
      "Optimize production, supply chains, forecasting, and partner coordination with intelligent automation systems.",
    linkText: "Explore Financial Services",
    icon: <IconShieldCheck className="w-8 h-8 text-[#003E9C]" />,
  },
  {
    title: "Retail",
    description:
      "Boost in store and online sales with smarter inventory, personalization, and customer insights.",
    linkText: "Explore Retail",
    icon: <IconShoppingBagHeart className="w-8 h-8 text-[#003E9C]" />,
  },
  {
    title: "E-Commerce & D2C",
    description:
      "Increase conversions, retention, and revenue through optimized customer journeys and automation.",
    linkText: "Explore Consumer Goods",
    icon: <IconBox className="w-8 h-8 text-[#003E9C]" />,
  },
  {
    title: "Financial Services",
    description:
      "Streamline onboarding, improve customer trust, and scale securely with intelligent workflows.",
    linkText: "Explore Retail",
    icon: <IconShoppingBagHeart className="w-8 h-8 text-[#003E9C]" />,
  },
  {
    title: "Healthcare & Education",
    description:
      "Enhance engagement, simplify operations, and improve service experiences with digital systems.",
    linkText: "Explore Retail",
    icon: <IconShoppingBagHeart className="w-8 h-8 text-[#003E9C]" />,
  },
  {
    title: " B2B, SaaS & Professional Services",
    description:
      "Build predictable pipelines, manage long sales cycles, and strengthen long term client relationships.",
    linkText: "Explore Retail",
    icon: <IconShoppingBagHeart className="w-8 h-8 text-[#003E9C]" />,
  },
];

const HomeServiceCards = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#FFFFFF,#AEDEFC)]">
      <section className="text-center md:px-8 px-8 py-10">
        <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold leading-tight">
         Solutions Designed to Scale Across Industries
{" "}
        </h2>

        <p className="font-poppins text-md md:text-[18px] text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
          Every industry operates differently, but the need for efficiency, growth, and customer centric systems is universal. Avolve Labs builds adaptable, intelligent, and scalable digital solutions tailored to the operational realities of each industry.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-8 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-none shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[24px] transition-transform duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="font-playfair text-[20px] font-bold text-[#032d60] mb-4">
                  {service.title}
                </h3>
                <p className="font-poppins text-gray-600 text-[14px] mb-8">
                  {service.description}
                </p>

                <div className="relative mt-auto flex items-center justify-between">
                  {/* <a
                    href="#"
                    className="block max-w-[70%] pr-4 font-poppins text-[14px] text-[#032d60] underline decoration-2 underline-offset-4 hover:text-[#7f22fe] "
                  >
                    {service.linkText}
                  </a> */}

                  <div className="absolute -bottom-15 -right-12 w-48 h-48 pointer-events-none z-10">
                    <div className="absolute bottom-0 right-0">
                      <svg
                        viewBox="0 0 200 200"
                        className="w-full transform translate-x-8 translate-y-8"
                      >
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="#003E9C"
                          className="opacity-90"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-8 right-10 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="">
        <svg viewBox="0 0 1450 120" preserveAspectRatio="none" className="">
          <path
            d="M0 120 L0 120 C360 0 1080 0 1450 120 L1440 120 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomeServiceCards;
