import Link from "next/link";
import React from "react";

const Locations = () => {
  return (
    <div className="bg-black mx-auto max-w-7xl">
      <div className="relative  bg-white px-6 pt-10 pb-16 rounded-b-[3rem]">
        <div className="flex flex-wrap justify-center text-black gap-4 md:gap-16">
          {[
            { label: "India", time: "10:59 AM" },
            { label: "London", time: "05:29 AM" },
            { label: "Dubai", time: "09:29 AM" },
            { label: "Amsterdam", time: "06:29 AM" },
          ].map((item) => (
            <Link href="/contact" key={item.label}>
              <div
                className="group relative rounded-full border border-black px-6 py-3 text-sm md:text-base
                           cursor-pointer overflow-hidden
                           transition-colors duration-300
                           hover:bg-black hover:text-white"
              >
              
                <div className="transition-opacity duration-200 group-hover:opacity-0">
                  <span className="font-extrabold">{item.label}:</span>{" "}
                  {item.time}
                </div>
                <div className="absolute inset-0 flex items-center justify-center
                                opacity-0 transition-opacity duration-200
                                group-hover:opacity-100 font-semibold">
                  Contact us
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Locations;
