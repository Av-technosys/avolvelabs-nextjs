import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogFormSkeleton({ editing = false }: { editing?: boolean }) {
  return <div aria-busy="true"><Link href="/admin/blogs" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft size={16} />Back to blogs</Link><h1 className="text-2xl font-bold sm:text-3xl text-primary">{editing ? "Edit blog" : "Add blog"}</h1><p className="mt-3 text-sm text-muted-foreground">{editing ? "Loading article details…" : "Preparing your new article…"}</p><div aria-hidden="true" className="mt-8 space-y-7 motion-safe:animate-pulse"><div className="space-y-6 rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8"><div className="h-6 w-32 rounded bg-muted" />{[0, 1, 2, 3].map(item => <div key={item} className="space-y-3"><div className="h-4 w-20 rounded bg-muted" /><div className="h-11 rounded-lg bg-muted" /></div>)}<div className="h-48 rounded-xl bg-muted" /></div><div className="h-[420px] rounded-2xl bg-card" /></div></div>;
}
