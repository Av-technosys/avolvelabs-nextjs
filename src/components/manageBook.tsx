"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const ManageBook = () => {
  return (
    <section className="px-8 py-10 bg-white max-w-7xl mx-auto ">
      <div className="overflow-hidden rounded-[40px] relative">
        <div 
          className="py-8 px-4 text-center flex flex-col items-center justify-center bg-[linear-gradient(to_right,#FEEAC9,#3291B6)]"        >

          <h2 className="font-playfair text-black text-xl md:text-[25px] font-bold mb-6 leading-tight max-w-4xl">
            Not Sure Where to Begin with Manage Services? We&apos;ll Help You Start Smart.
          </h2>
          <p className="font-poppins text-base md:text-[15px] max-w-3xl mb-10 leading-relaxed font-light">
            We work with you to identify the right use cases, assess data readiness, and define an AI roadmap aligned to your business goals, so you don&apos;t waste time or budget.
          </p>
         <Link href="/contact">
         <Button
  className="font-poppins bg-white text-[#0176d3] hover:bg-gray-100 rounded-full text-lg  transition-all duration-300 shadow-xl border-none"
>
  <span className="block sm:hidden">Book Now</span>
  <span className="hidden sm:block">
    Book Your Free AI Strategy Session Today!
  </span>
</Button>
         </Link>

        </div>
      </div>
    </section>
  )
}

export default ManageBook;