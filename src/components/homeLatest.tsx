"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
// const LATEST_DATA = [
//   {
//     id: 1,
//     title: "Unifying Healthcare with a 360° Patient View ",
//     linkText: "Know More",
//     image:
//       "/images/Healthcare-CRM-1.jpg",
//   },
//   {
//     id: 2,
//     title:
//       "Modernizing Music Rights Management at Scale ",
//     linkText: "Know more",
//     image:
// "/images/music.jpg"  },
//   {
//     id: 3,
//     title: "Enabling a Seamless Pivot to Subscription-Based Revenue",
//     linkText: "Know more",
//     image:
// "/images/pivot.jpg"  },
//   {
//     id: 4,
//     title: "Transforming Broadband with Zero Touch Digital Onboarding",
//     linkText: "Know more",
//     image:
// "/images/dashboard.jpg"  },
// ];

const HomeLatest = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto  px-8">
        {/* <div className="">
          <h2 className="text-center text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold mb-12">
            Case Studies 
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {LATEST_DATA.map((item) => (
              <div
                key={item.id}
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
              >
                <div className="h-52 w-full overflow-hidden">
                  <Image
                    width={800}
                    height={600}
                    unoptimized
                    src={item.image}
                    alt="news"
                    className="w-full h-full object-cover"
                    loading="lazy"
                   
                  />
                </div>

                <div className="flex flex-col p-8 min-h-[220]">
                  <h3 className="text-[18px] font-poppins font-bold text-[#032d60]  mb-6">
                    {item.title}
                  </h3>

                  <div className="mt-auto pt-4">
                    <Link
                      href="/case-studies"
                      className="text-[#0176d3] font-poppins font-semibold text-[16px] underline hover:text-[#014486]"
                    >
                      {item.linkText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>
      <section className="text-center md:px-8 px-8 py-10">
        <h4 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold leading-tight">
          Get started today.
        </h4>

        <p className="font-poppins mt-10 max-w-3xl mx-auto text-[17px] md:text-[27px] lg:text-[27px]  text-[#032d60] leading-tight">
          There nothing to install. No credit card required. Free for 30 days.
        </p>

        <Link target="_blank" href="https://store.zoho.in/ResellerCustomerSignUp.do?id=b3383bae8a8d4d5588223dbc7255a4d0b022d128fd51d94e98e55118213315b7" className="mt-8 md:mt-10 inline-block">
          <Button className="bg-[#0176d3] cursor-pointer hover:bg-[#014486] text-white px-16 md:px-9 py-6 rounded-md text-base md:text-lg font-poppins">
            Try for free
          </Button>
        </Link>
      </section>
    </>
  );
};

export default HomeLatest;
