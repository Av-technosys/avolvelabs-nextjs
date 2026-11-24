"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowLeft, ImagePlus, LoaderCircle, Save, X } from "lucide-react";
import { toast } from "sonner";
import { compressBannerImage } from "@/lib/images/compress-banner";
import { saveBlogAction } from "@/helpers/admin/blog-actions";
import { emptyBlog, slugify, validateBlogFields, type AdminBlog, type BlogCategory, type BlogFields } from "./blog-fields";

const BlogEditor = dynamic(() => import("./BlogEditor"), { ssr: false, loading: () => <div aria-label="Loading editor" className="h-[420px] rounded-xl bg-muted motion-safe:animate-pulse" /> });

type FormErrors = Partial<Record<keyof BlogFields, string>>;

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return <div className="min-w-0">
    <label htmlFor={id} className="mb-2 block text-sm font-semibold">{label}<span aria-hidden="true" className="ml-1 text-red-600">*</span></label>
    {children}
    {error && <p id={`${id}-error`} role="alert" className="mt-2 text-xs leading-5 text-red-600">{error}</p>}
  </div>;
}

export default function BlogForm({ initialBlog, categories }: { initialBlog?: AdminBlog; categories: BlogCategory[] }) {
  const existing = initialBlog;
  const blogId = existing?.id;
  const [initial] = useState<BlogFields>(() => existing ? { title: existing.title, slug: existing.slug, categoryId: existing.categoryId, publishDate: existing.publishDate, mainBannerImage: existing.mainBannerImage, authorName: existing.authorName, metaTitle: existing.metaTitle, metaDescription: existing.metaDescription, content: existing.content, isDraft: existing.isDraft } : { ...emptyBlog });
  const [values, setValues] = useState<BlogFields>(initial);
  const [editorVersion, setEditorVersion] = useState(0);
  const [manualSlug, setManualSlug] = useState(Boolean(blogId));
  const [errors, setErrors] = useState<FormErrors>({});
  const [readingImage, setReadingImage] = useState(false);
  const [saving, setSaving] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const imageFile = useRef<File | null>(null);
  const savingRef = useRef(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const imageCompression = useRef<AbortController | null>(null);
  const [imageSize, setImageSize] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const allowNavigation = useRef(false);
  const router = useRouter();
  const dirty = readingImage || JSON.stringify(values) !== JSON.stringify(initial);

  useEffect(() => () => imageCompression.current?.abort(), []);

  useEffect(() => {
    if (!dirty && !saving) return;
    function beforeUnload(event: BeforeUnloadEvent) {
      if (allowNavigation.current) return;
      event.preventDefault(); event.returnValue = "";
    }
    function confirmLink(event: MouseEvent) {
      if (allowNavigation.current || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      if (savingRef.current) { event.preventDefault(); event.stopPropagation(); return; }
      if (anchor.href === window.location.href || (anchor.pathname === window.location.pathname && anchor.hash)) return;
      if (dirty && !window.confirm("Discard unsaved blog changes?")) { event.preventDefault(); event.stopPropagation(); }
      else allowNavigation.current = true;
    }
    function confirmSubmit(event: SubmitEvent) {
      if (event.target === form.current || allowNavigation.current) return;
      if (savingRef.current || (dirty && !window.confirm("Discard unsaved blog changes?"))) {
        event.preventDefault(); event.stopPropagation();
      } else allowNavigation.current = true;
    }
    const navigation = (window as Window & { navigation?: EventTarget }).navigation;
    function confirmHistory(event: Event) {
      const transition = event as Event & { navigationType?: string };
      if (transition.navigationType !== "traverse" || allowNavigation.current) return;
      if (savingRef.current || (dirty && !window.confirm("Discard unsaved blog changes?"))) event.preventDefault();
      else allowNavigation.current = true;
    }
    function confirmPop(event: PopStateEvent) {
      if (navigation || allowNavigation.current) return;
      if (savingRef.current || (dirty && !window.confirm("Discard unsaved blog changes?"))) {
        event.stopImmediatePropagation(); history.forward();
      } else allowNavigation.current = true;
    }
    navigation?.addEventListener("navigate", confirmHistory);
    window.addEventListener("popstate", confirmPop, true);
    document.addEventListener("submit", confirmSubmit, true);
    window.addEventListener("beforeunload", beforeUnload);
    document.addEventListener("click", confirmLink, true);
    return () => {
      navigation?.removeEventListener("navigate", confirmHistory);
      window.removeEventListener("popstate", confirmPop, true);
      document.removeEventListener("submit", confirmSubmit, true);
      window.removeEventListener("beforeunload", beforeUnload);
      document.removeEventListener("click", confirmLink, true);
    };
  }, [dirty, saving]);

  function update<K extends keyof BlogFields>(key: K, value: BlogFields[K]) {
    allowNavigation.current = false;
    setSubmitError("");
    setValues(current => ({ ...current, [key]: value, ...(key === "title" && !manualSlug ? { slug: slugify(String(value)) } : {}) }));
    setErrors(current => ({ ...current, [key]: undefined }));
  }

  function cancel() {
    if (saving) return;
    if (dirty && !window.confirm("Discard unsaved blog changes?")) return;
    allowNavigation.current = true;
    router.push("/admin/blogs");
  }

  async function selectImage(file?: File) {
    if (!file) return;
    imageCompression.current?.abort();
    const controller = new AbortController();
    imageCompression.current = controller;
    setReadingImage(true);
    try {
      const compressed = await compressBannerImage(file, controller.signal);
      const preview = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(new Error("The compressed image could not be read."));
        reader.readAsDataURL(compressed);
      });
      controller.signal.throwIfAborted();
      imageFile.current = compressed;
      update("mainBannerImage", preview);
      setImageSize(`${Math.ceil(compressed.size / 1000)} KB`);
      toast.success("Banner compressed and ready.", { id: "banner-image" });
    } catch (error) {
      if (controller.signal.aborted) return;
      const message = error instanceof Error ? error.message : "This image could not be compressed.";
      setErrors(current => ({ ...current, mainBannerImage: message }));
      toast.error(message);
    } finally {
      if (imageCompression.current === controller) setReadingImage(false);
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (savingRef.current || readingImage) return;
    const next = validateBlogFields(values);
    if (!categories.some(category => category.id === values.categoryId)) next.categoryId = "Choose an available category.";
    setErrors(next);
    setSubmitError("");
    if (Object.keys(next).length) {
      toast.error("Please check the highlighted fields.", { description: Object.values(next)[0], id: "blog-validation" });
      requestAnimationFrame(() => form.current?.querySelector<HTMLElement>('[aria-invalid="true"], [data-invalid="true"]')?.focus());
      return;
    }
    const data = new FormData();
    for (const [key, value] of Object.entries(values)) {
      if (key !== "mainBannerImage") data.set(key, String(value));
    }
    if (blogId) data.set("id", blogId);
    data.set("keepImage", String(Boolean(values.mainBannerImage)));
    if (imageFile.current) data.set("image", imageFile.current);
    savingRef.current = true;
    setSaving(true);
    try {
      const result = await saveBlogAction(data);
      if (!result.success) {
        setErrors(result.errors ?? {});
        setSubmitError(result.message);
        toast.error(result.message);
        requestAnimationFrame(() => form.current?.querySelector<HTMLElement>('[aria-invalid="true"], [data-invalid="true"], [data-save-error]')?.focus());
        return;
      }
      allowNavigation.current = true;
      toast.success(blogId ? "Blog updated." : "Blog created.");
      if (!blogId) {
        setValues({ ...emptyBlog });
        setManualSlug(false);
        setEditorVersion(value => value + 1);
        imageFile.current = null;
        form.current?.reset();
      }
      router.replace("/admin/blogs");
      router.refresh();
    } catch { setSubmitError("The connection was interrupted. Your details are still here. Please try again."); toast.error("The blog could not be saved. Your details are still here."); }
    finally { savingRef.current = false; setSaving(false); }
  }

  return <>
    <button type="button" onClick={cancel} disabled={saving} className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft size={16} aria-hidden="true" />Back to blogs</button>
    <h1 className="text-2xl font-bold tracking-[-.6px] text-primary sm:text-3xl">{blogId ? "Edit blog" : "Add blog"}</h1>
    <p className="mt-3 text-sm leading-6 text-muted-foreground">{blogId ? "Update the article details below." : "Fill in the details for your new article."} Fields marked * are required.</p>
    <form ref={form} autoComplete="off" noValidate onSubmit={submit} className="mt-6 min-w-0">
      <fieldset disabled={saving} className="min-w-0 space-y-5 sm:space-y-7">
      <legend className="sr-only">Blog form</legend>
      <section aria-labelledby="blog-details-heading" className="space-y-6 rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8">
        <h2 id="blog-details-heading" className="text-lg font-bold text-primary">Blog details</h2>
        <Field id="blog-title" label="Title" error={errors.title}><input id="blog-title" maxLength={300} required value={values.title} onChange={event => update("title", event.target.value)} aria-invalid={Boolean(errors.title)} aria-describedby={errors.title ? "blog-title-error" : undefined} className="h-11 w-full rounded-lg border border-border px-3 text-base sm:text-sm outline-none aria-invalid:border-red-400 focus:border-primary focus:ring-2 focus:ring-primary/10" /></Field>
        <Field id="blog-slug" label="Slug" error={errors.slug}><input id="blog-slug" maxLength={200} required value={values.slug} onChange={event => { setManualSlug(true); update("slug", event.target.value); }} aria-invalid={Boolean(errors.slug)} aria-describedby={`blog-slug-hint${errors.slug ? " blog-slug-error" : ""}`} className="h-11 w-full rounded-lg border border-border px-3 text-base sm:text-sm outline-none aria-invalid:border-red-400 focus:border-primary focus:ring-2 focus:ring-primary/10" /><p id="blog-slug-hint" className="mt-2 break-all text-xs text-muted-foreground">Article URL: /blogs/{values.slug || "your-blog-title"}</p></Field>
        <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <Field id="blog-category" label="Category" error={errors.categoryId}><select id="blog-category" required value={values.categoryId} onChange={event => update("categoryId", event.target.value)} aria-invalid={Boolean(errors.categoryId)} aria-describedby={errors.categoryId ? "blog-category-error" : undefined} className="h-11 w-full rounded-lg border border-border bg-card px-3 text-base sm:text-sm outline-none aria-invalid:border-red-400 focus:border-primary focus:ring-2 focus:ring-primary/10"><option value="">Select category</option>{categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}</select>{!categories.length && <p className="mt-2 text-xs text-muted-foreground">Add a category using Manage Categories on the Blogs page.</p>}</Field>
          <Field id="blog-author" label="Author name" error={errors.authorName}><input id="blog-author" maxLength={100} required value={values.authorName} onChange={event => update("authorName", event.target.value)} aria-invalid={Boolean(errors.authorName)} aria-describedby={errors.authorName ? "blog-author-error" : undefined} className="h-11 w-full rounded-lg border border-border px-3 text-base sm:text-sm outline-none aria-invalid:border-red-400 focus:border-primary focus:ring-2 focus:ring-primary/10" /></Field>
          <Field id="blog-date" label="Publish date" error={errors.publishDate}><input id="blog-date" type="date" required value={values.publishDate} onChange={event => update("publishDate", event.target.value)} aria-invalid={Boolean(errors.publishDate)} aria-describedby={errors.publishDate ? "blog-date-error" : undefined} className="h-11 w-full min-w-0 rounded-lg border border-border bg-card px-3 text-base sm:text-sm outline-none aria-invalid:border-red-400 focus:border-primary focus:ring-2 focus:ring-primary/10" /></Field>
        </div>
        <Field id="blog-banner" label="Main banner image" error={errors.mainBannerImage}>
          {values.mainBannerImage && <div className="relative mb-4 max-w-[720px] overflow-hidden rounded-xl border border-border/60"><Image src={values.mainBannerImage} alt="Blog banner preview" width={720} height={360} unoptimized className="max-h-72 w-full object-contain" /><button type="button" aria-label="Remove banner image" onClick={() => { imageCompression.current?.abort(); imageCompression.current = null; setImageSize(""); setReadingImage(false); imageFile.current = null; update("mainBannerImage", ""); if (fileInput.current) fileInput.current.value = ""; }} className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm hover:text-red-600"><X size={18} /></button></div>}
          <div className="flex flex-wrap items-center gap-3"><span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary"><ImagePlus size={21} aria-hidden="true" /></span><input ref={fileInput} id="blog-banner" type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={event => { selectImage(event.target.files?.[0]); event.target.value = ""; }} aria-invalid={Boolean(errors.mainBannerImage)} aria-describedby={`blog-banner-hint${errors.mainBannerImage ? " blog-banner-error" : ""}`} className="block min-w-0 max-w-full text-xs text-muted-foreground file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-secondary file:px-4 file:py-3 file:text-xs file:font-semibold file:text-primary" /></div>
          <p id="blog-banner-hint" className="mt-3 text-xs leading-5 text-muted-foreground">JPG, PNG, WebP or GIF, up to 10 MB. Automatically compressed to WebP, 300 KB or less, before saving. Animated images use the first frame.</p>
          {imageSize && !readingImage && <p role="status" className="mt-2 text-xs text-primary">Compressed image: {imageSize}</p>}
          {readingImage && <p role="status" className="mt-2 text-xs text-primary">Compressing image…</p>}
        </Field>
        <div className="space-y-6 border-t border-border/60 pt-6">
          <Field id="blog-meta-title" label="Meta title" error={errors.metaTitle}><input id="blog-meta-title" maxLength={300} required value={values.metaTitle} onChange={event => update("metaTitle", event.target.value)} aria-invalid={Boolean(errors.metaTitle)} aria-describedby={errors.metaTitle ? "blog-meta-title-error" : undefined} className="h-11 w-full rounded-lg border border-border px-3 text-base sm:text-sm outline-none aria-invalid:border-red-400 focus:border-primary focus:ring-2 focus:ring-primary/10" /><div className="mt-2 flex flex-wrap justify-between gap-2 text-xs leading-5 text-muted-foreground"><p>Browser and search title; not shown in the article.</p><span>{values.metaTitle.length} / 300 characters</span></div></Field>
          <Field id="blog-description" label="Meta description" error={errors.metaDescription}><textarea id="blog-description" maxLength={2000} required rows={3} value={values.metaDescription} onChange={event => update("metaDescription", event.target.value)} aria-invalid={Boolean(errors.metaDescription)} aria-describedby={errors.metaDescription ? "blog-description-error" : undefined} className="w-full resize-y rounded-lg border border-border px-3 py-3 text-base sm:text-sm leading-6 outline-none aria-invalid:border-red-400 focus:border-primary focus:ring-2 focus:ring-primary/10" /><div className="mt-2 flex flex-wrap justify-between gap-2 text-xs leading-5 text-muted-foreground"><p>A unique summary for search engines.</p><span>{values.metaDescription.length} / 2,000 characters</span></div></Field>
          <div aria-label="Search appearance preview" className="rounded-xl border border-border bg-muted/50 p-4 sm:p-5">
            <p className="mb-3 text-xs font-semibold text-muted-foreground">Search appearance preview</p>
            <p className="break-all text-xs text-muted-foreground">Avolve Labs · /blogs/{values.slug || "your-blog-title"}</p>
            <p className="mt-2 break-words text-lg font-semibold leading-7 text-primary">{values.metaTitle || values.title || "Your search title"}</p>
            <p className="mt-1 break-words text-sm leading-6 text-muted-foreground">{values.metaDescription || "Your meta description will appear here."}</p>
            <p className="mt-3 text-[11px] leading-5 text-muted-foreground">Preview only. Search engines may choose a different title or summary.</p>
          </div>
        </div>
      </section>
      <section aria-labelledby="blog-content-heading" className="rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8">
        <h2 id="blog-content-heading" className="mb-6 text-lg font-bold text-primary">Article content</h2>
        <div>
          <p id="blog-content-label" className="mb-3 text-sm font-semibold">Content <span aria-hidden="true" className="text-red-600">*</span></p>
          <BlogEditor key={`${blogId ?? "new"}-${editorVersion}`} id="blog-content" value={values.content} onChange={content => update("content", content)} disabled={saving} error={errors.content} />
          {errors.content && <p id="blog-content-error" role="alert" className="mt-2 text-xs leading-5 text-red-600">{errors.content}</p>}
        </div>
      </section>
      <section aria-labelledby="blog-status-heading" className="rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8">
        <h2 id="blog-status-heading" className="mb-4 text-lg font-bold text-primary">Status</h2>
        <label className="inline-flex cursor-pointer items-center gap-3 text-sm font-semibold"><input type="checkbox" checked={values.isDraft} onChange={event => update("isDraft", event.target.checked)} className="size-4 accent-primary" />Save as draft</label>
        <p className="mt-3 text-xs leading-5 text-muted-foreground">{values.isDraft ? "This blog will be saved as a draft." : "This blog will be marked as published in the database."}</p>
      </section>
      {submitError && <p data-save-error tabIndex={-1} role="alert" className="rounded-xl bg-red-50 p-4 text-sm leading-6 text-red-700 outline-none">{submitError}</p>}
      <div className="flex flex-col-reverse gap-3 pb-6 sm:flex-row sm:items-center sm:justify-end"><button type="button" onClick={cancel} className="min-h-11 rounded-xl border border-border bg-card px-5 text-sm font-semibold hover:bg-muted/50">Cancel</button><button type="submit" disabled={readingImage || saving} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:cursor-wait disabled:opacity-60">{saving || readingImage ? <LoaderCircle size={17} aria-hidden="true" className="animate-spin motion-reduce:animate-none" /> : <Save size={17} aria-hidden="true" />}{saving ? "Saving…" : readingImage ? "Compressing image…" : "Save blog"}</button></div>
      </fieldset>
    </form>
  </>;
}
