import Link from "next/link";

export default function ArticleNotFound() {
  return <main className="min-h-[70dvh] bg-[#F0F8FF] px-5 pb-20 pt-40 text-center font-sans"><p className="text-xs font-semibold uppercase tracking-widest text-[#0a369d]">The Avolve Journal</p><h1 className="mt-5 font-playfair text-[28px] font-bold leading-[36px] tracking-[-.9px] sm:text-[36px] sm:leading-[45px] text-[#0B1425]">Article not found.</h1><p className="mx-auto mt-4 max-w-md font-poppins text-[15px] leading-[24.375px] text-[#526174]">This article is unavailable or may have moved. Explore the latest published articles instead.</p><Link href="/blogs" className="mt-7 inline-flex min-h-11 items-center rounded-full bg-[#0a369d] px-6 text-sm font-medium text-white">Explore articles</Link></main>;
}
