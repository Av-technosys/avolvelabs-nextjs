import Link from "next/link";

export default function BlogNotFound() {
  return <section className="rounded-2xl border bg-card p-8"><h1 className="text-2xl font-bold text-primary">Blog not found</h1><p className="mt-3 text-sm text-muted-foreground">This article may have been deleted.</p><Link className="mt-6 inline-block text-sm font-semibold text-primary underline" href="/admin/blogs">Back to blogs</Link></section>;
}
