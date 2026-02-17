import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Map, Rocket, TrendingUp } from "lucide-react";
import Link from "next/link";

const ManageAvolvePath = () => {
  const steps = [
    {
      title: "The Discovery",
      desc: "We perform a deep dive audit of your current Salesforce Org to find technical debt and security gaps.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "The Strategy",
      desc: "We identify low hanging fruit for immediate ROI and map out long-term optimization goals.",
      icon: <Map className="w-6 h-6" />,
    },
    {
      title: "The Launch",
      desc: "We onboard into your workflow seamlessly, integrating with Slack or PM tools without disrupting operations.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: "The Growth",
      desc: "Benefit from continuous improvement, release management, and the peace of mind that your CRM is handled.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-white py-10 px-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className=" text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold leading-tight mb-4">
          Your Path to a <span className="text-[#3291B6]">High-Performance CRM</span>
        </h2>
        <p className="leading-relaxed font-poppins text-md md:text-[16px] text-gray-700">
          Getting started with Avolve Labs is a seamless, four-step process:
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative px-4">
        {/* --- Dotted Connector Line (Only for Desktop) --- */}
        <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-2/4 w-[80%] h-px border-t-2 border-dashed border-slate-200 z-0" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative z-10 group text-center lg:text-left">
              {/* Step Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:bg-[#3291B6] group-hover:text-white group-hover:border-[#3291B6] transition-all duration-300">
                <div className="text-[#3291B6] group-hover:text-white">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="font-playfair text-xl font-bold text-[#032d60] mb-3">
                {item.title}
              </h3>
              <p className="font-poppins text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-24 text-center bg-slate-50 rounded-[2.5rem] p-8 md:p-16 border border-slate-100">
        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#032d60] mb-4">
          Ready to stop fighting with Salesforce and start winning?
        </h3>
        <p className="font-poppins text-slate-500 mb-10 max-w-xl mx-auto">
         Don&apos;t let your CRM be a source of frustration. Let&spos;s turn it into your greatest competitive advantage.
        </p>
        <Button className="rounded-full bg-[#3291B6] hover:bg-[#256d8a] px-12 py-7 text-lg font-poppins font-semibold shadow-lg transition-transform hover:scale-105">
         <Link href={"/contact"}>   Get Started Now </Link>
        </Button>
      </div>
    </section>
  );
};

export default ManageAvolvePath;