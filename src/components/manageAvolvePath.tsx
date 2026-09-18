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
    <section className="bg-white py-16 px-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className=" text-[#0b1425] font-playfair text-3xl md:text-[42px] font-bold leading-tight mb-4">
          Your Path to a <span className="text-[#072ac8]">High-Performance CRM</span>
        </h2>
        <p className="leading-[1.72] font-poppins text-[15.5px] text-[#3d4b61] max-w-2xl mx-auto">
          Getting started with Avolve Labs is a seamless, four-step process:
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative px-4">
        {/* --- Dotted Connector Line (Only for Desktop) --- */}
        <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-2/4 w-[80%] h-px border-t-2 border-dashed border-[#dce6f4] z-0" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative z-10 group text-center lg:text-left">
              {/* Step Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#d9dfe8] shadow-sm flex items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:bg-[#072ac8] group-hover:text-white group-hover:border-[#072ac8] transition-all duration-300">
                <div className="text-[#072ac8] group-hover:text-white">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="font-playfair text-xl font-bold text-[#0b1425] mb-3">
                {item.title}
              </h3>
              <p className="font-poppins text-[#526174] text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-24 text-center bg-white rounded-[2.5rem] p-8 md:p-16 border border-[#dce6f4] shadow-[0_8px_30px_rgba(7,42,200,0.03)]">
        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#0b1425] mb-4">
          Ready to stop fighting with Salesforce and start winning?
        </h3>
        <p className="font-poppins text-[#526174] mb-10 max-w-xl mx-auto leading-relaxed">
         Don&apos;t let your CRM be a source of frustration. Let&apos;s turn it into your greatest competitive advantage.
        </p>
        <Button className="rounded-full bg-[#1f7bf2] hover:bg-[#1766c2] px-12 py-7 text-lg font-poppins font-semibold shadow-[0_8px_20px_rgba(31,123,242,0.25)] transition-transform hover:-translate-y-1 asChild">
         <Link href={"/contact"}>   Get Started Now </Link>
        </Button>
      </div>
    </section>
  );
};

export default ManageAvolvePath;