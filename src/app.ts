//import * as sharp from 'sharp';
const sharp = require("sharp");

function toBuffer(d: { data: any }): Buffer {
  return Buffer.from(d.data);
}

async function mergeImages(background, top) {
  return sharp(background)
    .composite([{ input: await sharp(top).toBuffer() }])
    .resize(700, 394)
    .jpeg({ quality: 100 })
    .toBuffer()
}

async function main() {
  for (let i = 0; i < 1000000; i++ ) {
    const t = await mergeImages("one.png", "two.jpeg");
  }
};


main()
