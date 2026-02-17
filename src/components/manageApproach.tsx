import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "01",
    title: "The Always On Essentials",
    desc: "Maintaining a healthy Salesforce environment requires constant vigilance. We manage the day-to-day administrative tasks user permissions, UI enhancements, and validation rules to keep your org clean, secure, and user-friendly.",
  },
  {
    id: "02",
    title: "Next Gen Flow Automation",
    desc: "Manual data entry is a silent killer of productivity. As Salesforce Flow experts, we replace manual drudgery with sophisticated, automated workflows. Whether it’s complex lead routing or automated billing triggers, we save your team hundreds of hours per month.",
  },
  {
    id: "03",
    title: "Executive Grade Reporting",
    desc: "Data is only valuable if it’s actionable. We design intuitive, executive grade dashboards that provide a single source of truth. Know exactly where your revenue is coming from, which reps are performing, and where your pipeline is leaking.",
  },
  {
    id: "04",
    title: "Rigorous Data Hygiene",
    desc: "Dirty data leads to bad decisions. We implement strict guardrails and deduplication protocols to ensure your reporting is 100% accurate. We treat your data as a high value asset, not an afterthought.",
  },
  {
    id: "05",
    title: "Security & Risk Management",
    desc: "As you scale, your security requirements grow. We conduct regular audits and permission reviews to ensure your sensitive customer data stays in the right hands and remains compliant with industry standards.",
  },
];

const ManageApproach = () => {
  return (
    <section className="bg-[#0a0a0a] py-10 px-8 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Compact Header */}
        <div className="border-l-4 border-[#3291B6] pl-6 mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
           What&apos;s Under the Hood? 
          </h2>
          <p className="font-poppins text-gray-400 mt-2 text-sm md:text-base max-w-2xl">
           Comprehensive Salesforce Support

          </p>
        </div>

        {/* Clean & Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((item) => (
            <Card 
              key={item.id} 
              className="bg-[#141414] border-white/5 hover:border-[#3291B6]/50 transition-all duration-300 rounded-xl overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Number Icon */}
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-[#3291B6]/10 flex items-center justify-center text-[#3291B6] font-bold text-xs group-hover:bg-[#3291B6] group-hover:text-white transition-colors">
                    {item.id}
                  </div>
                  
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-[#FEEAC9] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="hidden lg:flex items-center justify-center p-6 border border-dashed border-white/10 rounded-xl">
            <p className="text-gray-500 font-poppins text-sm italic text-center">
             We handle the technical heavy lifting across the entire Salesforce ecosystem, allowing your sales and success teams to focus on what matters most: revenue and retention.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageApproach;