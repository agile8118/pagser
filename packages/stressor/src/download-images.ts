import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SEED_IMAGES = path.join(__dirname, "../../server/public/seed-images");

function download(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const follow = (u: string) => {
      const mod = u.startsWith("https") ? https : http;
      mod
        .get(u, (res) => {
          if (res.statusCode === 301 || res.statusCode === 302) {
            follow(res.headers.location!);
            return;
          }
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP ${res.statusCode} for ${u}`));
            return;
          }
          const file = fs.createWriteStream(dest);
          res.pipe(file);
          file.on("finish", () => {
            file.close();
            resolve();
          });
          file.on("error", reject);
        })
        .on("error", reject);
    };
    follow(url);
  });
}

async function downloadSet(
  dir: string,
  count: number,
  width: number,
  height: number,
  seedPrefix: string,
) {
  fs.mkdirSync(dir, { recursive: true });
  for (let i = 1; i <= count; i++) {
    const url = `https://picsum.photos/seed/${seedPrefix}${i}/${width}/${height}`;
    const dest = path.join(dir, `${seedPrefix}${i}.jpg`);
    process.stdout.write(`  Downloading ${seedPrefix}${i}.jpg… `);
    await download(url, dest);
    console.log("done");
  }
}

console.log("Downloading 50 avatar images (400×400)…");
await downloadSet(path.join(SEED_IMAGES, "avatars"), 50, 400, 400, "avatar");

console.log("\nDownloading 50 page thumbnail images (1200×630)…");
await downloadSet(path.join(SEED_IMAGES, "pages"), 50, 1200, 630, "page");

console.log("\nAll images downloaded.");
