import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
const ManagesBusinessValueDemo = () => {
  const features = [
    {
      title: "Predictable Monthly Retainers",
      desc: " No gotcha invoices or hidden fees. Enjoy steady, reliable support with a budget that’s easy to forecast.",
    },
    {
      title: "SLA-Backed Priority",
      desc: "Your business doesn't stop, and neither do we. Our Service Level Agreements ensure that critical issues are addressed with urgency.",
    },
    {
      title: "Continuous Innovation",
      desc: "Salesforce releases updates three times a year. We proactively manage these releases, ensuring your customizations never break and you’re always using the latest features.",
    },
    {
      title: "Performance-Based Retention",
      desc: "We don't believe in lock in contracts. We earn your business every month through tangible results and proactive communication.",
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-10 px-8 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="font-bold md:text-left text-center text-[#0f172a] leading-tight font-playfair text-3xl md:text-[38px] ">
              A Partnership Model <br />
              <span className="text-[#3291B6] ">Designed for Transparency</span>
            </h2>
            <div className="h-1.5 w-20 bg-[#FEEAC9] rounded-full max-md:mx-auto" />
            <p className="font-poppins text-lg text-slate-600 leading-relaxed max-w-lg md:text-left text-center">
              Many Salesforce partners hide behind black box contracts. We
              believe in a collaborative, agile approach that prioritizes your
              ROI over our billable hours.
            </p>

            {/* <div className="pt-4">
              <Button className="rounded-full bg-[#3291B6] hover:bg-[#256d8a] px-10 py-7 text-lg font-poppins font-medium shadow-lg shadow-blue-900/10 transition-all hover:scale-105">
                Book a Transparency Audit
              </Button>
            </div> */}
          </div>
          <div className="grid gap-8">
            {features.map((item, index) => (
              <div key={index} className="flex gap-5 group">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[#3291B6]" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#3291B6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-slate-500 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagesBusinessValueDemo;
