"use client"

import React from 'react'
import { Button } from "@/components/ui/button"

const CrmBook = () => {
  return (
    <section className="px-8 py-10 bg-white">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-[40px] relative">
        <div 
          className="py-8 px-4 text-center flex flex-col items-center justify-center bg-[linear-gradient(to_right,#061C5B,#0B2FA0)]"        >

          <h2 className="font-playfair text-white text-xl md:text-[25px] font-bold mb-6 leading-tight max-w-4xl">
            Not Sure Where to Begin with Agentic AI? We&apos;ll Help You Start Smart.
          </h2>
          <p className="font-poppins text-gray-200 text-base md:text-[15px] max-w-3xl mb-10 leading-relaxed font-light">
            We work with you to identify the right use cases, assess data readiness, and define an AI roadmap aligned to your business goals, so you don&apos;t waste time or budget.
          </p>
         <Button
  className="font-poppins bg-white text-[#0176d3] hover:bg-gray-100 rounded-full text-lg  transition-all duration-300 shadow-xl border-none"
>
  <span className="block sm:hidden">Book Now</span>
  <span className="hidden sm:block">
    Book Your Free AI Strategy Session Today!
  </span>
</Button>

        </div>
      </div>
    </section>
  )
}

export default CrmBook;