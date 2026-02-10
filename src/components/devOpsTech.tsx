import React from "react";

const DevOpsTech = ({
  title = "DevOps Ecosystem \nWe Command",
  description = "We leverage the industry's most powerful automation and cloud tools to build your modern software factory.",
  bgClass = "bg-[#f0f4f8]", // Light DevOps blue
  titleColor = "text-[#032d60]",
  borderColor = "border-blue-200",
  orbit1 = ["Docker", "Jenkins", "AWS", "Terraform"],
  orbit2 = ["K8s", "Ansible", "Azure", "GitHub"],
}) => {
  return (
    <section className={`${bgClass} py-20 px-8 overflow-hidden w-full`}>
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="text-center lg:text-left">
          <h2 className={`text-4xl font-bold font-playfair ${titleColor} leading-tight`}>
            {title.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="mt-6 font-poppins text-md md:text-[18px] text-gray-700 max-w-md">
            {description}
          </p>
        </div>

        <div className="relative mx-auto h-80 w-80">
          <div className={`absolute inset-0 rounded-full border border-dashed ${borderColor}`} />
          <div className={`absolute inset-16 rounded-full border border-dashed ${borderColor}`} />
          <div className="absolute inset-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl flex items-center justify-center text-xl font-bold text-blue-600">
            Cloud
          </div>

          {orbit1.map((item, i) => (
            <div key={item} className="absolute inset-0" style={{ transform: `rotate(${i * (360 / orbit1.length)}deg)` }}>
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 h-14 w-14 rounded-full bg-white shadow-md flex items-center justify-center text-[10px] font-bold text-slate-800 rotate-0" style={{ transform: `rotate(-${i * (360 / orbit1.length)}deg)` }}>
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsTech;