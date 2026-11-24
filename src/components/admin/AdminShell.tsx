"use client";

import styles from "@/components/admin/admin.module.css";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import AdminSidebar from "./AdminSidebar";

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isLogin = pathname === "/admin/login";
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => { if (event.matches) setMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    const closeOnHistory = () => setMenuOpen(false);
    window.addEventListener("popstate", closeOnHistory);
    return () => { desktop.removeEventListener("change", closeOnDesktop); window.removeEventListener("popstate", closeOnHistory); };
  }, []);
  if (isLogin) return children;

  return <div className="flex h-dvh overflow-hidden bg-muted/50">
    <a href="#admin-content" className="sr-only z-50 rounded bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
    <div className="hidden h-full shrink-0 lg:block"><AdminSidebar /></div>
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
      <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <header className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-border bg-card px-4 sm:px-6 lg:hidden">
          <div className="flex min-w-0 items-center gap-3"><Image src="https://ik.imagekit.io/1vzspuubh/avolvelabslogo.webp" alt="" width={48} height={38} className="h-auto w-11 shrink-0" /><div className="min-w-0"><p className="truncate text-sm font-bold text-primary">Avolve Labs</p><p className="mt-0.5 text-[11px] text-muted-foreground">Admin panel</p></div></div>
          <Dialog.Trigger aria-label="Open admin menu" className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border text-primary hover:bg-secondary"><Menu size={22} /></Dialog.Trigger>
        </header>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/35 lg:hidden" />
          <Dialog.Content className={styles.theme + " fixed inset-y-0 left-0 z-50 w-[min(320px,calc(100vw_-_32px))] overflow-hidden bg-card shadow-xl outline-none lg:hidden"}>
            <Dialog.Title className="sr-only">Admin navigation</Dialog.Title>
            <Dialog.Description className="sr-only">Manage Avolve Labs articles.</Dialog.Description>
            <AdminSidebar onNavigate={() => setMenuOpen(false)} />
            <Dialog.Close aria-label="Close admin menu" className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary"><X size={18} /></Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <main id="admin-content" tabIndex={-1} className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain px-4 py-6 outline-none sm:p-6 lg:p-8 xl:p-10">
        <div className="mx-auto w-full min-w-0 max-w-[1200px] pb-4">{children}</div>
      </main>
    </div>
  </div>;
}
