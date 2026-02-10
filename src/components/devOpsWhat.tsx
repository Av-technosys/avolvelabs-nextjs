"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DevOpsWhat = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="text-center px-8 pb-10">
        <h2 className="text-[#032d60] font-playfair text-3xl md:text-[38px] font-bold leading-tight max-w-4xl mx-auto">
          Scale Your Operations with Cloud-Native Precision.
        </h2>
        <p className="font-poppins text-md md:text-[18px] text-gray-700 max-w-4xl mx-auto mt-8 leading-relaxed">
          At AvolveLabs, we don&apos;t just manage servers; we build autonomous software ecosystems. 
          By integrating Infrastructure as Code (IaC) and observability, we eliminate bottlenecks 
          and empower your engineering teams to focus on code, not maintenance.
        </p>
        <div className="flex flex-row items-center justify-center gap-1 md:gap-3 mt-10 px-2">
          <Button asChild className="font-poppins cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-lg text-base font-semibold transition-all shadow-md">
            <Link href="/services/devops">Our Tech Stack</Link>
          </Button>
          <Link href="/about">
            <Button variant="outline" className="font-poppins cursor-pointer border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-lg text-base font-semibold">
              Explore Services
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DevOpsWhat;