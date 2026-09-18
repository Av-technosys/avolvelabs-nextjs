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
    <section className="bg-white py-16 px-8 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-[#0b1425] font-playfair text-3xl md:text-[42px] font-bold leading-tight">
            The Comparison: <br />
            <span className="text-[#072ac8]">
              Avolve Labs vs. In House Hiring
            </span>
          </h2>
          <p className="max-w-2xl mx-auto leading-[1.72] font-poppins text-[15.5px] text-[#3d4b61] mt-5">
            Building an internal Salesforce team is expensive and risky. Here is
            how we compare to the traditional hiring model:
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#dce6f4] shadow-[0_8px_30px_rgba(7,42,200,0.04)] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafc]">
                  <th className="p-6 font-playfair text-[#0b1425] text-xl border-b border-[#dce6f4]">
                    Feature
                  </th>
                  <th className="p-6 font-playfair text-[#526174] text-xl border-b border-[#dce6f4] font-medium">
                    In House Team
                  </th>
                  <th className="p-6 font-playfair text-[#072ac8] text-xl border-b border-[#dce6f4] flex items-center gap-2">
                    <Zap className="fill-[#072ac8] text-[#072ac8] w-5 h-5" />{" "}
                    Avolve Labs
                  </th>
                </tr>
              </thead>
              <tbody className="font-poppins">
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="group transition-colors hover:bg-[#f8fafc]/50"
                  >
                    <td className="p-6 text-[#0b1425] font-semibold border-b border-[#e1e9f5]">
                      {row.feature}
                    </td>
                    <td className="p-6 text-[#526174] border-b border-[#e1e9f5]">
                      {row.inHouse}
                    </td>
                    <td className="p-6 text-[#3d4b61] border-b border-[#e1e9f5] bg-[#072ac8]/5 group-hover:bg-[#072ac8]/10 transition-all font-medium">
                      {row.avolve}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-[#9ba5b5] text-sm md:hidden">
          <span>← Swipe to compare →</span>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
