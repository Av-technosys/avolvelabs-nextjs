export default function ArticleLoading() {
  return <main aria-busy="true" aria-label="Loading article" className="min-h-dvh bg-white pb-16 pt-32 font-sans md:pb-24 md:pt-40"><div className="mx-auto w-[min(900px,calc(100%-40px))] space-y-6 motion-safe:animate-pulse"><div className="h-5 w-36 rounded bg-[#e6efff]" /><div className="h-24 rounded-xl bg-[#F0F8FF]" /><div className="h-5 w-64 rounded bg-[#e6efff]" /><div className="aspect-[2/1] rounded-3xl bg-[#F0F8FF]" /><div className="mx-auto h-56 max-w-3xl rounded-xl bg-[#F0F8FF]" /></div></main>;
}
