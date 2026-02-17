import React from "react";
import { Zap } from "lucide-react";

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Annual Cost",
      inHouse: "$120k+ (Salary, Benefits, Taxes)",
      avolve: "A fraction of the cost of one full-time hire",
    },
    {
      feature: "Breadth of Skillset",
      inHouse: "Limited to one person’s niche experience",
      avolve: "A full team of cross-certified architects & devs",
    },
    {
      feature: "Reliability",
      inHouse: "Vulnerable to sick days, PTO, & turnover",
      avolve: "365 day continuity with no single point of failure",
    },
    {
      feature: "Onboarding",
      inHouse: "3-6 months to reach full productivity",
      avolve: "Zero lag integration; we start on day one",
    },
  ];

  return (
    <section className="bg-white py-10 px-8 w-full">
      <div className="max-w-full">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold leading-tight">
            The Comparison: <br />
            <span className="text-[#3291B6]">
              Avolve Labs vs. In House Hiring
            </span>
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed font-poppins text-md md:text-[16px] text-gray-700 mt-4">
            Building an internal Salesforce team is expensive and risky. Here is
            how we compare to the traditional hiring model:
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="p-6 font-playfair text-[#032d60] text-xl border-b border-slate-200">
                    Feature
                  </th>
                  <th className="p-6 font-playfair text-slate-500 text-xl border-b border-slate-200 font-medium">
                    In House Team
                  </th>
                  <th className="p-6 font-playfair text-[#3291B6] text-xl border-b border-slate-200 flex items-center gap-2">
                    <Zap className="fill-[#3291B6] text-[#3291B6] w-5 h-5" />{" "}
                    Avolve Labs
                  </th>
                </tr>
              </thead>
              <tbody className="font-poppins">
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="group transition-colors hover:bg-slate-50/50"
                  >
                    <td className="p-6 text-[#032d60] font-semibold border-b border-slate-100">
                      {row.feature}
                    </td>
                    <td className="p-6 text-slate-500 border-b border-slate-100">
                      {row.inHouse}
                    </td>
                    <td className="p-6 text-slate-700 border-b border-slate-100 bg-[#3291B6]/5 group-hover:bg-[#3291B6]/10 transition-all font-medium">
                      {row.avolve}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm md:hidden">
          <span>← Swipe to compare →</span>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
