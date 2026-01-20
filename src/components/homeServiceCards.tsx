import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  IconBox,
  IconShieldCheck,
  IconShoppingBagHeart,
} from "@tabler/icons-react";

const services = [
  {
    title: "Financial Services",
    description:
      "Connect with customers proactively to deliver AI-powered, high-value experiences.",
    linkText: "Explore Financial Services",
    icon: <IconShieldCheck className="w-8 h-8 text-[#7f22fe]" />,
  },
  {
    title: "Retail",
    description:
      "Acquire profitable customers faster with unified, real-time data.",
    linkText: "Explore Retail",
    icon: <IconShoppingBagHeart className="w-8 h-8 text-[#7f22fe]" />,
  },
  {
    title: "Consumer Goods",
    description:
      "Transform your business with consumer goods technology made for your industry.",
    linkText: "Explore Consumer Goods",
    icon: <IconBox className="w-8 h-8 text-[#7f22fe]" />,
  },
  {
    title: "Retail",
    description:
      "Acquire profitable customers faster with unified, real-time data.",
    linkText: "Explore Retail",
    icon: <IconShoppingBagHeart className="w-8 h-8 text-[#7f22fe]" />,
  },
  {
    title: "Retail",
    description:
      "Acquire profitable customers faster with unified, real-time data.",
    linkText: "Explore Retail",
    icon: <IconShoppingBagHeart className="w-8 h-8 text-[#7f22fe]" />,
  },
  {
    title: "Retail",
    description:
      "Acquire profitable customers faster with unified, real-time data.",
    linkText: "Explore Retail",
    icon: <IconShoppingBagHeart className="w-8 h-8 text-[#7f22fe]" />,
  },

];

const HomeServiceCards = () => {
  return (
    <div className="bg-white">
      <section className="text-center md:px-8 px-8 py-10">
        <h1 className="font-playfair text-[32px] font-bold text-[#032d60] leading-tight">
          Launch faster with 16+ Agentforce solutions, built{" "}
          <br className="hidden md:block" /> for your industry.
        </h1>

        <p className="font-poppins text-base md:text-[18px] text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
          Designed with industry expertise, these out-of-the-box solutions align
          with your workflows, data, and customer needs, so you can modernize
          faster, go to market sooner, and deliver value from day one.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-none shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[24px] transition-transform duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-8 h-full flex flex-col">
                <h2 className="font-playfair text-[20px] font-bold text-[#032d60] mb-4">
                  {service.title}
                </h2>
                <p className="font-poppins text-gray-600 text-[14px] mb-8">
                  {service.description}
                </p>

                <div className="relative mt-auto flex items-center justify-between">
                  <a
                    href="#"
                    className="block max-w-[70%] pr-4 font-poppins text-[14px] text-[#032d60] underline decoration-2 underline-offset-4 hover:text-[#7f22fe] "
                  >
                    {service.linkText}
                  </a>

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
                          fill="#7f22fe"
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
    </div>
  );
};

export default HomeServiceCards;
