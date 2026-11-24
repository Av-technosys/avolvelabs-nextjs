import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import styles from "@/app/pages.module.css";
import BlogContentFrame from "./BlogContentFrame";
import BlogCard, { articleDate } from "../BlogCard";
import type { PublicBlogArticle, PublicBlogSummary } from "@/lib/db/public-blogs";

export default function BlogArticle({ article, related }: { article: PublicBlogArticle; related: PublicBlogSummary[] }) {
  return <main id="main-content" tabIndex={-1} className="min-h-dvh bg-white font-sans text-[#09111f] outline-none [--primary:#0a369d] [--secondary:#e6efff] [--foreground:#0B1425] [--border:#dce4f1] [--muted:#f0f8ff]">
    <article>
      <header className="bg-[#F0F8FF] pb-16 pt-32 md:pb-24 md:pt-40">
        <div className={styles.container}>
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#526174]"><Link href="/" className="hover:text-[#0a369d]">Home</Link><span aria-hidden="true">/</span><Link href="/blogs" className="hover:text-[#0a369d]">Blogs</Link><span aria-hidden="true">/</span><span className="text-[#0a369d]" aria-current="page">{article.category}</span></nav>
          <Link href={`/blogs?category=${encodeURIComponent(article.categorySlug)}`} className="inline-flex min-h-9 items-center rounded-full border border-[#0a369d]/15 bg-white px-4 text-xs font-medium text-[#0a369d]">{article.category}</Link>
          <h1 className="mt-6 break-words max-w-5xl font-playfair text-[28px] font-bold leading-[36px] tracking-[-.9px] text-[#0B1425] sm:text-[36px] sm:leading-[45px]">{article.title}</h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[#526174] sm:text-sm"><span className="max-w-full break-words font-medium text-[#0B1425]">By {article.authorName}</span><span aria-hidden="true" className="h-4 border-l border-[#0a369d]/20" /><time dateTime={article.publishDate}>{articleDate(article.publishDate)}</time><span className="inline-flex items-center gap-1.5"><Clock3 size={15} aria-hidden="true" />{article.minutes} min read</span></div>
        </div>
      </header>
      <div className="mx-auto w-[min(900px,calc(100%-40px))] pt-16 md:pt-24"><Image src={article.banner} alt={article.title} width={1200} height={600} unoptimized priority className="max-h-[600px] w-full rounded-[24px] bg-[#F0F8FF] object-contain md:rounded-[32px]" /></div>
      <div className="mx-auto w-[min(900px,calc(100%-40px))] pb-16 pt-12 md:pb-24 md:pt-16">
        <BlogContentFrame html={article.content} className="font-poppins text-[15px] leading-[24.375px] text-[#526174] sm:leading-[24.375px] [&_h2]:font-playfair [&_h2]:text-[28px] [&_h2]:font-bold [&_h2]:leading-[36px] [&_h2]:tracking-[-.9px] [&_h2]:text-[#0B1425] sm:[&_h2]:text-[36px] sm:[&_h2]:leading-[45px] [&_h3]:font-playfair [&_h3]:text-[24px] [&_h3]:text-[#0B1425] sm:[&_h3]:text-[28px] [&_h4]:font-playfair [&_h4]:text-[20px] [&_h4]:text-[#0B1425] sm:[&_h4]:text-[24px]" />
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-[#0a369d]/15 pt-8"><Link href="/blogs" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#0a369d]"><ArrowLeft size={17} />Back to articles</Link><Link href="/contact" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#526174] hover:text-[#0a369d]">Talk to Avolve Labs<ArrowUpRight size={17} /></Link></div>
      </div>
    </article>
    {related.length > 0 && <section aria-labelledby="related-articles" className="border-t border-[#0a369d]/10 bg-[#F0F8FF]/50 py-[72px] md:py-[88px]"><div className={styles.container}><div className="mb-8 flex flex-wrap items-center justify-between gap-4"><h2 id="related-articles" className="font-playfair text-[28px] font-bold leading-[36px] tracking-[-.9px] sm:text-[36px] sm:leading-[45px]">Keep exploring.</h2><Link href="/blogs" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#0a369d]">All articles<ArrowUpRight size={17} /></Link></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{related.map(blog => <BlogCard key={blog.id} blog={blog} />)}</div></div></section>}
  </main>;
}
