/**
 * This is a playground for testing sharp performance. It is not meant to be run in production.
 * Run this file and monitor CPU usage to see how sharp performs. Also, look inside node_modules/sharp/src to see the C++ code that powers sharp.
 * The final built binary is located at node_modules/@img/sharp-darwin-arm64/lib/sharp-darwin-arm64.node (on ARM Macs)
 * 
 * Sharp does NOT spawn a child process — libvips is loaded into the Node process via dlopen() and runs on threads inside the same process.
 * So Sharp uses C/C++ addons with Node-API.
 */

process.title = "node-img";

import sharp from "sharp";

const WIDTH = 16000;
const HEIGHT = 16000;
const ROUNDS = 20;

async function heavyRound(i) {
  console.time(`round ${i}`);

  const base = await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: { r: Math.floor(Math.random() * 255), g: 100, b: 180, alpha: 1 },
    },
  })
    .png()
    .toBuffer();

  await sharp(base)
    .blur(80)
    .blur(60)
    .blur(40)
    .rotate(37)
    .blur(30)
    .rotate(73)
    .resize(8000, 8000, { kernel: sharp.kernel.lanczos3 })
    .blur(20)
    .sharpen({ sigma: 3, m1: 2, m2: 4 })
    .blur(10)
    .jpeg({ quality: 95, mozjpeg: true })
    .toBuffer();

  console.timeEnd(`round ${i}`);
}

async function main() {
  console.log(`Starting ${ROUNDS} heavy rounds on ${WIDTH}x${HEIGHT} images (${(WIDTH * HEIGHT / 1e6).toFixed(0)}MP each)...`);
  console.log("PID:", process.pid);
  const start = Date.now();

  for (let i = 1; i <= ROUNDS; i++) {
    await heavyRound(i);
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`Done. Total: ${elapsed}s`);
}

main().catch(console.error);
