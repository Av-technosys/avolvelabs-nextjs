"use client";

import Link from "next/link";

export default function BlogsError({ reset }: { reset: () => void }) {
  return <main className="min-h-[70dvh] bg-[#F0F8FF] px-5 pb-20 pt-40 font-sans"><div role="alert" className="mx-auto max-w-xl rounded-3xl border border-[#0a369d]/10 bg-white p-8 text-center sm:p-12"><h1 className="font-playfair text-[28px] font-bold leading-[36px] tracking-[-.9px] sm:text-[36px] sm:leading-[45px] text-[#0B1425]">We couldn’t load this page.</h1><p className="mt-4 font-poppins text-[15px] leading-[24.375px] text-[#526174]">Our journal is temporarily unavailable. Please try again in a moment.</p><div className="mt-7 flex flex-wrap justify-center gap-4"><button type="button" onClick={reset} className="min-h-11 rounded-full bg-[#0a369d] px-6 text-sm font-medium text-white">Try again</button><Link href="/blogs" className="inline-flex min-h-11 items-center rounded-full border border-[#0a369d]/20 px-6 text-sm text-[#0a369d]">Back to blogs</Link></div></div></main>;
}
