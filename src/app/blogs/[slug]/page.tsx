import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blogs/article/BlogArticle";
import { getPublishedBlog, getPublishedBlogs } from "@/lib/db/public-blogs";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getPublishedBlog((await params).slug);
  if (!article) notFound();
  const url = `https://avolvelabs.com/blogs/${article.slug}`;
  const image = `https://avolvelabs.com${article.banner}`;
  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription,
    alternates: { canonical: url },
    authors: [{ name: article.authorName }],
    openGraph: { title: article.metaTitle || article.title, description: article.metaDescription, url, type: "article", siteName: "Avolve Labs", publishedTime: article.publishDate, modifiedTime: article.updatedAt.toISOString(), authors: [article.authorName], images: [{ url: image, alt: article.title }] },
    twitter: { card: "summary_large_image", title: article.metaTitle || article.title, description: article.metaDescription, images: [image] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getPublishedBlog((await params).slug);
  if (!article) notFound();
  const related = await getPublishedBlogs({ category: article.categorySlug, query: "", requestedPage: 1 });
  const structuredData = { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.metaDescription,
    image: `https://avolvelabs.com${article.banner}`, datePublished: article.publishDate, dateModified: article.updatedAt.toISOString(),
    author: { "@type": "Person", name: article.authorName }, publisher: { "@type": "Organization", name: "Avolve Labs", logo: { "@type": "ImageObject", url: "https://ik.imagekit.io/1vzspuubh/avolvelabslogo.webp" } }, mainEntityOfPage: `https://avolvelabs.com/blogs/${article.slug}` };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><BlogArticle article={article} related={related.entries.filter(blog => blog.id !== article.id).slice(0, 3)} /></>;
}
