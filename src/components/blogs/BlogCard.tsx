import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PublicBlogSummary } from "@/lib/db/public-blogs";

export function articleDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export default function BlogCard({ blog }: { blog: PublicBlogSummary }) {
  return <article className="group flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#0a369d]/10 bg-white">
    <Link href={`/blogs/${blog.slug}`} tabIndex={-1} aria-hidden="true" className="relative block aspect-[16/10] overflow-hidden bg-[#F0F8FF]">
      <Image src={blog.banner} alt="" fill unoptimized sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" />
    </Link>
    <div className="flex flex-1 flex-col p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#526174]"><span className="rounded-full bg-[#e6efff] px-3 py-1.5 font-medium text-[#0a369d]">{blog.category}</span><time dateTime={blog.publishDate}>{articleDate(blog.publishDate)}</time></div>
      <h2 className="mt-5 font-playfair text-[24px] font-bold leading-[32px] tracking-[-.6px] sm:text-[28px] sm:leading-[36px] text-[#0B1425]"><Link href={`/blogs/${blog.slug}`} className="break-words transition-colors hover:text-[#0a369d] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a369d]">{blog.title}</Link></h2>
      <p className="mb-6 mt-3 line-clamp-3 font-poppins text-[15px] font-normal leading-[24.375px] text-[#526174]">{blog.description}</p>
      <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#0a369d]/10 pt-5 text-xs text-[#526174]"><span className="truncate">By {blog.authorName}</span><Link href={`/blogs/${blog.slug}`} aria-label={`Read ${blog.title}`} className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-[#0a369d] hover:underline">Read article<ArrowUpRight size={16} aria-hidden="true" /></Link></div>
    </div>
  </article>;
}
