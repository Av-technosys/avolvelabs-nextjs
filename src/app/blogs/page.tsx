import type { Metadata } from "next";
import BlogListing from "@/components/blogs/BlogListing";
import BlogsHero from "@/components/blogs/BlogsHero";
import { getPublishedBlogs, getPublishedCategories } from "@/lib/db/public-blogs";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Blogs | Avolve Labs",
  description: "Practical perspectives on CRM, business automation and building connected systems that help your business grow.",
  alternates: { canonical: "https://avolvelabs.com/blogs" },
  openGraph: { title: "Blogs | Avolve Labs", description: "Practical perspectives on CRM, business automation and connected systems.", url: "https://avolvelabs.com/blogs", type: "website" },
};

export default async function BlogsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const text = (key: string) => typeof params[key] === "string" ? params[key] : "";
  const query = text("q").trim().slice(0, 100);
  const category = text("category").slice(0, 200);
  const requestedPage = /^\d{1,9}$/.test(text("page")) ? Math.max(1, Number(text("page"))) : 1;
  const [result, categories] = await Promise.all([getPublishedBlogs({ query, category, requestedPage }), getPublishedCategories()]);
  return <main id="main-content" tabIndex={-1} className="min-h-dvh bg-white font-sans text-[#09111f] outline-none">
    <BlogsHero />
    <BlogListing result={result} categories={categories} query={query} category={category} />
  </main>;
}
