import { BANNER_MIME_TYPES, MAX_BANNER_UPLOAD_BYTES, MAX_COMPRESSED_BANNER_BYTES } from "./banner";

export async function compressBannerImage(file: File, signal: AbortSignal) {
  if (!BANNER_MIME_TYPES.includes(file.type)) throw new Error("Choose a JPG, PNG, WebP or GIF image.");
  if (!file.size || file.size > MAX_BANNER_UPLOAD_BYTES) throw new Error("Choose an image up to 10 MB.");
  const url = URL.createObjectURL(file);
  const image = new Image();
  try {
    image.src = url;
    await image.decode();
    signal.throwIfAborted();
    if (image.naturalWidth * image.naturalHeight > 40_000_000) throw new Error("Choose an image smaller than 40 megapixels.");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Image compression is unavailable in this browser.");
    for (const [edge, quality] of [[1920, .84], [1920, .72], [1600, .72], [1280, .68], [1024, .64], [800, .6], [640, .56], [400, .5]]) {
      signal.throwIfAborted();
      const scale = Math.min(1, edge / Math.max(image.naturalWidth, image.naturalHeight));
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error("This image could not be compressed.")), "image/webp", quality));
      signal.throwIfAborted();
      if (blob.type !== "image/webp") throw new Error("Use a browser that supports WebP image compression.");
      if (blob.size <= MAX_COMPRESSED_BANNER_BYTES) return new File([blob], `${file.name.replace(/\.[^.]+$/, "")}.webp`, { type: "image/webp" });
    }
    throw new Error("This image could not be reduced to 300 KB. Choose another image.");
  } finally { URL.revokeObjectURL(url); }
}
