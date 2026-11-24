import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import AdminShell from "@/components/admin/AdminShell";
import { Toaster } from "sonner";
import styles from "@/components/admin/admin.module.css";

export const metadata: Metadata = {
  title: { default: "Admin | Avolve Labs", template: "%s | Avolve Labs Admin" },
  robots: { index: false, follow: false, noarchive: true },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className={styles.theme}><Suspense fallback={<div className="min-h-dvh bg-muted/50" />}><AdminShell>{children}</AdminShell></Suspense><Toaster position="bottom-right" closeButton /></div>;
}
