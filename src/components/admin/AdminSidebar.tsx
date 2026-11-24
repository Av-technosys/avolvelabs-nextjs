"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/helpers/admin/auth-actions";
import { LogOut, Newspaper, UserRound } from "lucide-react";

const navigation = [
  { label: "Blogs", href: "/admin/blogs", icon: Newspaper },
];

export default function AdminSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return <aside aria-label="Admin sidebar" className="flex h-full w-full shrink-0 flex-col overflow-hidden border-r border-border bg-card lg:w-60 xl:w-64">
    <div className="flex min-h-20 shrink-0 items-center justify-start gap-3 border-b border-border/60 px-5 pr-8">
      <Image src="https://ik.imagekit.io/1vzspuubh/avolvelabslogo.webp" alt="Avolve Labs" width={54} height={42} className="h-auto w-12 shrink-0" />
      <div className="block"><p className="text-sm font-bold leading-5 text-primary">Avolve Labs</p><p className="mt-1 text-xs text-muted-foreground">Admin panel</p></div>
    </div>
    <nav aria-label="Admin navigation" className="space-y-1 px-3 py-5">
      {navigation.map(({ label, href, icon: Icon }) => {
        const active = pathname === href || (href !== "/admin" && pathname.startsWith(`${href}/`));
        return <Link key={href} href={href} onClick={onNavigate} aria-current={active ? "page" : undefined} className={`flex min-h-11 items-center justify-start gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-primary"}`}>
          <Icon size={20} strokeWidth={1.8} aria-hidden="true" />{label}
        </Link>;
      })}
    </nav>
    <div className="mx-4 mt-auto flex shrink-0 items-center gap-3 border-t border-border/60 px-1 py-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><UserRound size={21} strokeWidth={1.8} aria-hidden="true" /></span>
      <p className="text-xs font-bold text-primary sm:text-sm">Admin</p>
      <form action={logoutAction} onSubmit={onNavigate} className="ml-auto"><button type="submit" aria-label="Sign out" title="Sign out" className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><LogOut size={20} strokeWidth={1.8} aria-hidden="true" /></button></form>
    </div>
  </aside>;
}
