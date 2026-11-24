"use client";

import styles from "@/components/admin/admin.module.css";

import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { LoaderCircle } from "lucide-react";

export default function DeleteBlogDialog({ blog, pending, error, onClose, onConfirm }: { blog: { id: string; title: string } | null; pending: boolean; error: string; onClose: () => void; onConfirm: (id: string) => void }) {
  return <AlertDialog.Root open={Boolean(blog)} onOpenChange={open => { if (!open && !pending) onClose(); }}>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="fixed inset-0 z-50 bg-slate-950/40 " />
      <AlertDialog.Content className={styles.theme + " fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh_-_32px)] w-[calc(100%_-_32px)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-card p-4 shadow-xl focus:outline-none sm:p-8"}>
        <AlertDialog.Title className="text-xl font-bold text-primary">Delete blog?</AlertDialog.Title>
        <AlertDialog.Description className="mt-3 break-words text-sm leading-6 text-muted-foreground">Permanently delete “{blog?.title}” and its banner image from the database? This cannot be undone.</AlertDialog.Description>
        {error && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm leading-6 text-red-700">{error}</p>}
        <div className="mt-7 flex flex-wrap justify-end gap-3">
          <AlertDialog.Cancel disabled={pending} className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold hover:bg-muted/50 disabled:opacity-50">Cancel</AlertDialog.Cancel>
          <AlertDialog.Action disabled={pending} onClick={event => { event.preventDefault(); if (blog) onConfirm(blog.id); }} className="inline-flex items-center gap-2 rounded-lg bg-destructive px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-red-600 disabled:opacity-50">{pending && <LoaderCircle size={16} aria-hidden="true" className="animate-spin motion-reduce:animate-none" />}{pending ? "Deleting…" : "Delete blog"}</AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>;
}
