import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import BlogCard from "./BlogCard";
import styles from "@/app/pages.module.css";
import { publicBlogPageSize, type getPublishedBlogs, type getPublishedCategories } from "@/lib/db/public-blogs";

type Props = { result: Awaited<ReturnType<typeof getPublishedBlogs>>; categories: Awaited<ReturnType<typeof getPublishedCategories>>; query: string; category: string };

export default function BlogListing({ result, categories, query, category }: Props) {
  function href(page: number, nextCategory = category) {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (nextCategory) params.set("category", nextCategory);
    if (page > 1) params.set("page", String(page));
    return `/blogs${params.size ? `?${params}` : ""}`;
  }
  const filtered = Boolean(query || category);
  return <section aria-label="Articles" className={`${styles.container} py-[72px] md:py-[88px]`}>
    <div className="flex flex-col justify-between gap-6 border-b border-[#0a369d]/10 pb-8 lg:flex-row lg:items-start">
      <nav aria-label="Article categories" className="flex min-w-0 flex-1 flex-wrap gap-2">
        <Link href={href(1, "")} aria-current={!category ? "page" : undefined} className={`inline-flex min-h-11 items-center rounded-full border px-5 text-sm transition-colors ${!category ? "border-[#0a369d] bg-[#0a369d] text-white" : "border-[#0a369d]/15 bg-white text-[#526174] hover:bg-[#e6efff]"}`}>All articles</Link>
        {categories.map(item => <Link key={item.id} href={href(1, item.slug)} aria-current={category === item.slug ? "page" : undefined} className={`inline-flex min-h-11 max-w-full items-center break-words rounded-full border px-5 text-sm transition-colors ${category === item.slug ? "border-[#0a369d] bg-[#0a369d] text-white" : "border-[#0a369d]/15 bg-white text-[#526174] hover:bg-[#e6efff]"}`}>{item.name}</Link>)}
      </nav>
      <form action="/blogs" method="get" className="flex w-full shrink-0 gap-2 lg:w-80">
        {category && <input type="hidden" name="category" value={category} />}
        <label className="relative min-w-0 flex-1"><span className="sr-only">Search articles by title</span><Search size={17} aria-hidden="true" className="absolute left-4 top-3.5 text-[#526174]" /><input name="q" type="search" defaultValue={query} maxLength={100} placeholder="Search articles..." className="h-11 w-full rounded-full border border-[#0a369d]/15 bg-white pl-11 pr-4 text-base outline-none focus:border-[#0a369d] sm:text-sm" /></label>
        <button type="submit" aria-label="Search articles" className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0a369d] text-white hover:bg-[#082b7d]"><ArrowRight size={18} /></button>
      </form>
    </div>
    <div className="mb-8 mt-6 flex flex-wrap justify-between gap-3 text-sm text-[#526174]"><p>{result.total} {result.total === 1 ? "article" : "articles"}{query ? ` matching “${query}”` : " to explore"}</p>{filtered && <Link href="/blogs" className="font-medium text-[#0a369d] underline underline-offset-4">Clear filters</Link>}</div>
    {result.entries.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{result.entries.map(blog => <BlogCard key={blog.id} blog={blog} />)}</div> : <div className="rounded-[20px] border border-[#0a369d]/10 bg-[#F0F8FF] px-6 py-20 text-center"><h2 className="font-sans text-[clamp(28px,3vw,40px)] font-[650] leading-[1.1] tracking-normal text-balance text-[#09111f]">{filtered ? "No matching articles" : "Fresh perspectives are on the way."}</h2><p className="mx-auto mt-[18px] max-w-md font-sans text-[14.5px] leading-[1.68] text-pretty text-[#3d4b61]">{filtered ? "Try another search or browse all our articles." : "Come back for practical insights on CRM, connected systems and business growth."}</p>{filtered && <Link href="/blogs" className="mt-6 inline-block text-sm font-semibold text-[#0a369d] underline underline-offset-4">Browse all articles</Link>}</div>}
    {result.total > 0 && <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#0a369d]/10 pt-8 sm:flex-row"><p className="text-xs text-[#526174]">Showing {(result.page - 1) * publicBlogPageSize + 1}–{Math.min(result.page * publicBlogPageSize, result.total)} of {result.total}</p><nav aria-label="Article pagination" className="flex max-w-full flex-wrap items-center justify-center gap-2 sm:gap-4">{result.page > 1 ? <Link href={href(result.page - 1)} rel="prev" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0a369d]/15 px-4 text-sm text-[#0a369d]"><ArrowLeft size={16} />Previous</Link> : <span aria-disabled="true" className="inline-flex min-h-11 items-center gap-2 px-4 text-sm text-[#526174]/40"><ArrowLeft size={16} />Previous</span>}<span className="text-xs text-[#526174]">{result.page} / {result.pages}</span>{result.page < result.pages ? <Link href={href(result.page + 1)} rel="next" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0a369d]/15 px-4 text-sm text-[#0a369d]">Next<ArrowRight size={16} /></Link> : <span aria-disabled="true" className="inline-flex min-h-11 items-center gap-2 px-4 text-sm text-[#526174]/40">Next<ArrowRight size={16} /></span>}</nav></div>}
  </section>;
}
