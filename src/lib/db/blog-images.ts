import "server-only";

import sharp from "sharp";
import { BANNER_MIME_TYPES, MAX_BANNER_UPLOAD_BYTES, MAX_COMPRESSED_BANNER_BYTES, MAX_STORED_BANNER_BYTES } from "@/lib/images/banner";

function imageType(buffer: Buffer) {
  if (buffer.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) return "image/jpeg";
  if (buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) return "image/png";
  if (["GIF87a", "GIF89a"].includes(buffer.subarray(0, 6).toString("ascii"))) return "image/gif";
  if (buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP") return "image/webp";
  return null;
}

export async function encodeBannerImage(file: File) {
  if (!file.size || file.size > MAX_BANNER_UPLOAD_BYTES) return { error: "Choose an image up to 10 MB." };
  if (!BANNER_MIME_TYPES.includes(file.type)) return { error: "Choose a JPG, PNG, WebP or GIF image." };
  const buffer = Buffer.from(await file.arrayBuffer());
  if (buffer.length > MAX_BANNER_UPLOAD_BYTES || imageType(buffer) !== file.type) return { error: "This file is not a valid supported image." };
  try {
    for (const [edge, quality] of [[1920, 84], [1920, 72], [1600, 72], [1280, 68], [1024, 64], [800, 60], [640, 56], [400, 50]]) {
      const compressed = await sharp(buffer, { limitInputPixels: 40_000_000, failOn: "warning" }).rotate().resize({ width: edge, height: edge, fit: "inside", withoutEnlargement: true }).webp({ quality, effort: 4 }).toBuffer();
      if (compressed.length <= MAX_COMPRESSED_BANNER_BYTES) return { data: `data:image/webp;base64,${compressed.toString("base64")}` };
    }
    return { error: "This image could not be reduced to 300 KB. Choose another image." };
  } catch {
    return { error: "This image could not be processed. Choose a valid image smaller than 40 megapixels." };
  }
}

export function decodeBannerImage(value: string) {
  if (value.length > Math.ceil(MAX_STORED_BANNER_BYTES / 3) * 4 + 64) return null;
  const match = /^data:(image\/(?:jpeg|png|webp|gif));base64,([A-Za-z0-9+/]+={0,2})$/.exec(value);
  if (!match) return null;
  const bytes = Buffer.from(match[2], "base64");
  if (!bytes.length || bytes.length > MAX_STORED_BANNER_BYTES || bytes.toString("base64") !== match[2] || imageType(bytes) !== match[1]) return null;
  return { bytes, type: match[1] };
}
