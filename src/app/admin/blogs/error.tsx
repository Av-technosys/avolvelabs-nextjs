"use client";

export default function BlogError({ reset }: { reset: () => void }) {
  return <section role="alert" className="rounded-2xl border bg-card p-6 sm:p-8"><h1 className="text-2xl font-bold text-primary">This page could not be loaded</h1><p className="mt-3 text-sm leading-6 text-muted-foreground">Your saved articles have not been changed. Please try again.</p><button type="button" onClick={reset} className="mt-6 min-h-11 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground">Retry</button></section>;
}
