import "server-only";

import { cache } from "react";
import { and, count, desc, eq, ilike } from "drizzle-orm";
import { db } from "./index";
import { blogCategories, blogs } from "./schema";
import { sanitizeBlogContent } from "@/lib/blog-content.server";
import { getBlogContentText } from "@/lib/blog-content";

export const publicBlogPageSize = 9;

function bannerUrl(id: string, updatedAt: Date) {
  return `/api/blogs/${encodeURIComponent(id)}/image?v=${updatedAt.getTime()}`;
}

export async function getPublishedCategories() {
  return db.select({ id: blogCategories.id, name: blogCategories.name, slug: blogCategories.slug }).from(blogCategories)
    .innerJoin(blogs, and(eq(blogs.categoryId, blogCategories.id), eq(blogs.isDraft, false)))
    .groupBy(blogCategories.id).orderBy(blogCategories.name);
}

export async function getPublishedBlogs({ query, category, requestedPage }: { query: string; category: string; requestedPage: number }) {
  const pattern = `%${query.replace(/[\\%_]/g, "\\$&")}%`;
  const where = and(eq(blogs.isDraft, false), query ? ilike(blogs.title, pattern) : undefined, category ? eq(blogCategories.slug, category) : undefined);
  const [result] = await db.select({ total: count() }).from(blogs).innerJoin(blogCategories, eq(blogs.categoryId, blogCategories.id)).where(where);
  const pages = Math.max(1, Math.ceil(result.total / publicBlogPageSize));
  const page = Math.min(Math.max(1, requestedPage), pages);
  const rows = await db.select({ id: blogs.id, title: blogs.title, slug: blogs.slug, category: blogCategories.name, categorySlug: blogCategories.slug,
    authorName: blogs.authorName, publishDate: blogs.publishDate, description: blogs.metaDescription, updatedAt: blogs.updatedAt })
    .from(blogs).innerJoin(blogCategories, eq(blogs.categoryId, blogCategories.id)).where(where)
    .orderBy(desc(blogs.publishDate), desc(blogs.createdAt), desc(blogs.id)).limit(publicBlogPageSize).offset((page - 1) * publicBlogPageSize);
  return { entries: rows.map(({ updatedAt, ...row }) => ({ ...row, banner: bannerUrl(row.id, updatedAt) })), total: result.total, page, pages };
}

export const getPublishedBlog = cache(async (slug: string) => {
  const [row] = await db.select({ id: blogs.id, title: blogs.title, slug: blogs.slug, category: blogCategories.name, categorySlug: blogCategories.slug,
    authorName: blogs.authorName, publishDate: blogs.publishDate, metaTitle: blogs.metaTitle, metaDescription: blogs.metaDescription, content: blogs.content, updatedAt: blogs.updatedAt })
    .from(blogs).innerJoin(blogCategories, eq(blogs.categoryId, blogCategories.id))
    .where(and(eq(blogs.isDraft, false), eq(blogs.slug, slug))).limit(1);
  if (!row) return null;
  const content = sanitizeBlogContent(row.content);
  return { ...row, content, banner: bannerUrl(row.id, row.updatedAt), minutes: Math.max(1, Math.ceil(getBlogContentText(content).split(/\s+/).length / 200)) };
});

export async function getPublishedBlogLinks() {
  return db.select({ slug: blogs.slug, updatedAt: blogs.updatedAt }).from(blogs).where(eq(blogs.isDraft, false)).orderBy(desc(blogs.createdAt), desc(blogs.id));
}

export type PublicBlogSummary = Awaited<ReturnType<typeof getPublishedBlogs>>["entries"][number];
export type PublicBlogArticle = NonNullable<Awaited<ReturnType<typeof getPublishedBlog>>>;
