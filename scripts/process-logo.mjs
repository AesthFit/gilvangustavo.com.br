import sharp from 'sharp'

const SRC = 'public/gilvan-gustavo-logo.png'

// 1. Trim the beige paper border, keeping only the artwork
const trimmed = await sharp(SRC).trim({ threshold: 24 }).toBuffer()
const { data, info } = await sharp(trimmed)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels } = info

// Estimate background luminance from the corners
function lum(i) {
  return 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
}
const corners = [
  0,
  (width - 1) * channels,
  (height - 1) * width * channels,
  ((height - 1) * width + (width - 1)) * channels,
]
const bgL = corners.reduce((s, i) => s + lum(i), 0) / corners.length

// 2. Convert lightness to transparency, preserving ink color (black + gold)
const dark = Buffer.alloc(data.length)
const light = Buffer.alloc(data.length)
for (let i = 0; i < data.length; i += channels) {
  const L = lum(i)
  let a = (bgL - L) / bgL
  a = Math.max(0, Math.min(1, a * 1.15)) // slight boost for crisp edges
  const alpha = Math.round(a * 255)

  // dark version: unpremultiply color so gold stays gold
  if (a > 0.02) {
    dark[i] = Math.min(255, Math.round(data[i] / Math.max(a, 0.35)))
    dark[i + 1] = Math.min(255, Math.round(data[i + 1] / Math.max(a, 0.35)))
    dark[i + 2] = Math.min(255, Math.round(data[i + 2] / Math.max(a, 0.35)))
  }
  dark[i + 3] = alpha

  // light version: cream monochrome for dark backgrounds
  light[i] = 245
  light[i + 1] = 240
  light[i + 2] = 232
  light[i + 3] = alpha
}

await sharp(dark, { raw: { width, height, channels: 4 } })
  .png()
  .toFile('public/logo-dark.png')
await sharp(light, { raw: { width, height, channels: 4 } })
  .png()
  .toFile('public/logo-light.png')

// 3. Crop just the signature (top portion) for the header — the artwork is
// signature + tagline + monogram stacked vertically. Signature occupies
// roughly the top 55% of the trimmed art.
const sigH = Math.round(height * 0.62)
await sharp(dark, { raw: { width, height, channels: 4 } })
  .extract({ left: 0, top: 0, width, height: sigH })
  .png()
  .toFile('public/logo-signature-dark.png')
await sharp(light, { raw: { width, height, channels: 4 } })
  .extract({ left: 0, top: 0, width, height: sigH })
  .png()
  .toFile('public/logo-signature-light.png')

console.log('done', width, height, 'bgL', bgL.toFixed(1))
