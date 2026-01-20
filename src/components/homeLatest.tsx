"use client";
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const LATEST_DATA = [
  {
    id: 1,
    title: "Catch all the Dreamforce 2025 highlights.",
    linkText: "Stream it now",
    image: "https://img.freepik.com/premium-photo/scenic-view-sea-against-sky_1048944-27687166.jpg?semt=ais_hybrid&w=740&q=80", 
  },
  {
    id: 2,
    title: "Salesforce India Continues to Record Strong Growth, Bets Big on Agentic...",
    linkText: "Know more",
    image: "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg",
  },
  {
    id: 3,
    title: "Get the most out of Salesforce with partners, apps, and agents.",
    linkText: "Discover AppExchange",
    image: "https://ik.imagekit.io/ikmedia/blog/ghost/content/images/2019/12/image-optimization.jpg",
  }
];

const HomeLatest = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto py-10 px-8">
      <div className="">
        
        <h2 className="text-center text-[32px] font-bold font-playfair text-[#032d60] mb-12">
          Get the latest from Salesforce.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LATEST_DATA.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            >
                 <div className="h-52 w-full overflow-hidden">
                <img 
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
                  <a 
                    href="#" 
                    className="text-[#0176d3] font-poppins font-semibold text-[16px] underline hover:text-[#014486]"
                  >
                    {item.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="text-center md:px-8 px-8 py-10">
      <h1 className="font-playfair text-[32px] md:text-[32px] lg:text-[32px] font-bold text-[#032d60] leading-tight">
      Get started today.
      </h1>

      <p className="font-playfair mt-10 max-w-3xl mx-auto text-[32px] md:text-[32px] lg:text-[32px] font-bold text-[#032d60] leading-tight">
       There nothing to install. No credit card required. Free for 30 days.
      </p>

      <Link href="/" className="mt-8 md:mt-10 inline-block">
        <Button className="bg-[#0176d3] hover:bg-[#014486] text-white px-16 md:px-9 py-6 rounded-md text-base md:text-lg font-poppins" >
          Try for free
        </Button>
      </Link>
    </section>
    </>
  );
};

export default HomeLatest;