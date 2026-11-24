import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { decodeBannerImage } from "@/lib/db/blog-images";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" };
  try {
    const { id } = await params;
    const [blog] = await db.select({ image: blogs.mainBannerImage }).from(blogs).where(and(eq(blogs.id, id), eq(blogs.isDraft, false))).limit(1);
    const image = blog ? decodeBannerImage(blog.image) : null;
    if (!image) return new Response(null, { status: 404, headers });
    return new Response(new Uint8Array(image.bytes), { headers: { ...headers, "Content-Type": image.type, "Content-Length": String(image.bytes.length) } });
  } catch {
    return new Response(null, { status: 503, headers });
  }
}
