// Tiny valid raw image buffers used as request bodies in upload tests.
// These are real images (decodable by Sharp) — Sharp runs unmocked, so we need real bytes.

// 1x1 white JPEG.
const TINY_JPEG_BASE64 =
  "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AL+AB//Z";

// 1x1 transparent PNG.
const TINY_PNG_BASE64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII=";

export function tinyJpeg(): Buffer {
  return Buffer.from(TINY_JPEG_BASE64, "base64");
}

export function tinyPng(): Buffer {
  return Buffer.from(TINY_PNG_BASE64, "base64");
}

// Anything that does NOT start with the JPEG (FF D8 FF) or PNG (89 50 4E 47) magic bytes.
export function notAnImage(): Buffer {
  return Buffer.from("hello world this is not an image at all", "utf8");
}
