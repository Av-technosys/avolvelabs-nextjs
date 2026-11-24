import styles from "@/app/pages.module.css";

export default function BlogsLoading() {
  return <main aria-busy="true" aria-label="Loading articles" className="min-h-dvh bg-white pb-[72px] pt-36 font-sans sm:pt-44 md:pb-[88px]"><div className={`${styles.container} motion-safe:animate-pulse`}><div className="mx-auto h-4 w-40 rounded bg-[#e6efff]" /><div className="mt-6 mx-auto h-16 w-3/4 rounded-xl bg-[#e6efff]" /><div className="mx-auto mt-5 h-5 w-1/2 rounded bg-[#e6efff]" /><div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{[0, 1, 2].map(item => <div key={item} className="overflow-hidden rounded-[20px] border border-[#0a369d]/10"><div className="aspect-[16/10] bg-[#F0F8FF]" /><div className="space-y-4 p-6"><div className="h-4 w-24 rounded bg-[#e6efff]" /><div className="h-12 rounded bg-[#F0F8FF]" /><div className="h-16 rounded bg-[#F0F8FF]" /></div></div>)}</div></div></main>;
}
