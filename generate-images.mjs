// generate-images.mjs
// Uses Wikipedia API (free, no key, returns relevant product images)
// Run:  node generate-images.mjs

import { mkdirSync, existsSync } from 'fs';
import { writeFile }             from 'fs/promises';
import { resolve, dirname }      from 'path';
import { fileURLToPath }         from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT       = resolve(__dirname, 'public/images/products');
const sleep     = ms => new Promise(r => setTimeout(r, ms));

// Wikipedia article title for each product → gives the article's main photo
const PRODUCTS = [
  { id:  1, wiki: 'Diamond' },
  { id:  2, wiki: 'Synthetic diamond' },
  { id:  3, wiki: 'Diamond cut' },
  { id:  4, wiki: 'Electrical grounding' },
  { id:  5, wiki: 'Brass' },
  { id:  6, wiki: 'Brass' },
  { id:  7, wiki: 'Brassware' },
  { id:  8, wiki: 'Seal (mechanical)' },
  { id:  9, wiki: 'JCB (company)' },
  { id: 10, wiki: 'Excavator' },
  { id: 11, wiki: 'Building material' },
  { id: 12, wiki: 'Active pharmaceutical ingredient' },
  { id: 13, wiki: 'Nutraceutical' },
  { id: 14, wiki: 'Pharmaceutical drug' },
  { id: 15, wiki: 'Blister pack' },
  { id: 16, wiki: 'Turmeric' },
  { id: 17, wiki: 'Turmeric' },
  { id: 18, wiki: 'Black pepper' },
  { id: 19, wiki: 'Cumin' },
  { id: 20, wiki: 'Cumin' },
  { id: 21, wiki: 'Coriander' },
  { id: 22, wiki: 'Chili pepper' },
  { id: 23, wiki: 'Amchoor' },
  { id: 24, wiki: 'Garam masala' },
  { id: 25, wiki: 'Cardamom' },
  { id: 26, wiki: 'Clove' },
  { id: 27, wiki: 'Fennel' },
  { id: 28, wiki: 'Sesame' },
  { id: 29, wiki: 'Oilseed' },
  { id: 30, wiki: 'Cereal' },
  { id: 31, wiki: 'Rice' },
  { id: 32, wiki: 'Millet' },
  { id: 33, wiki: 'Chia seed' },
  { id: 34, wiki: 'Quinoa' },
  { id: 35, wiki: 'Cashew' },
  { id: 36, wiki: 'Almond' },
  { id: 37, wiki: 'Raisin' },
  { id: 38, wiki: 'Tea' },
  { id: 39, wiki: 'Herbal tea' },
  { id: 40, wiki: 'Coffee' },
  { id: 41, wiki: 'Fruit' },
  { id: 42, wiki: 'Vegetable' },
  { id: 43, wiki: 'Onion' },
  { id: 44, wiki: 'Garlic' },
  { id: 45, wiki: 'Dried vegetable' },
  { id: 46, wiki: 'Dried fruit' },
  { id: 47, wiki: 'Moringa oleifera' },
  { id: 48, wiki: 'Moringa oleifera' },
  { id: 49, wiki: 'Millet' },
  { id: 50, wiki: 'Papadum' },
  { id: 51, wiki: 'Paratha' },
  { id: 52, wiki: 'Samosa' },
  { id: 53, wiki: 'Biryani' },
  { id: 54, wiki: 'Fried rice' },
  { id: 55, wiki: 'Ghee' },
  { id: 56, wiki: 'Dairy product' },
  { id: 57, wiki: 'Dairy product' },
  { id: 58, wiki: 'Animal feed' },
  { id: 59, wiki: 'Organic fertilizer' },
  { id: 60, wiki: 'Fertilizer' },
  { id: 61, wiki: 'Knitting' },
  { id: 62, wiki: 'Clothing' },
  { id: 63, wiki: 'Sock' },
  { id: 64, wiki: 'Towel' },
  { id: 65, wiki: 'Block printing' },
  { id: 66, wiki: 'Aluminium foil' },
  { id: 67, wiki: 'Packaging and labeling' },
  { id: 68, wiki: 'Corrugated fiberboard' },
  { id: 69, wiki: 'Blister pack' },
  { id: 70, wiki: 'Leaf plate' },
  { id: 71, wiki: 'Bauhinia racemosa' },
  { id: 72, wiki: 'Leaf plate' },
  { id: 73, wiki: 'Biodegradable plastic' },
  { id: 74, wiki: 'Stuffed toy' },
  { id: 75, wiki: 'Stuffed toy' },
  { id: 76, wiki: 'Shoe' },
  { id: 77, wiki: 'Leather' },
  { id: 78, wiki: 'Sneakers' },
  { id: 79, wiki: 'Mica' },
  { id: 80, wiki: 'Quartz' },
  { id: 81, wiki: 'Silicon dioxide' },
  { id: 82, wiki: 'Granite' },
  { id: 83, wiki: 'Sandstone' },
  { id: 84, wiki: 'Natural stone' },
];

// ── Fetch the main image URL from a Wikipedia article ─────────────────────
async function getWikiImageUrl(title) {
  const url = `https://en.wikipedia.org/w/api.php?` +
    `action=query&titles=${encodeURIComponent(title)}&prop=pageimages` +
    `&format=json&pithumbsize=800&redirects=1&origin=*`;

  const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
  if (!res.ok) throw new Error(`Wiki API ${res.status}`);

  const data  = await res.json();
  const pages = data?.query?.pages || {};
  const page  = Object.values(pages)[0];
  return page?.thumbnail?.source || null;
}

async function generate(product) {
  const dest = resolve(OUT, `${product.id}.jpg`);
  if (existsSync(dest)) {
    console.log(`⏭  [${String(product.id).padStart(2)}/84] already exists`);
    return true;
  }

  process.stdout.write(`🌐 [${String(product.id).padStart(2)}/84] "${product.wiki}"...`);

  // ── Try Wikipedia ──────────────────────────────────────────────────────
  try {
    const imgUrl = await getWikiImageUrl(product.wiki);
    if (!imgUrl) throw new Error('no thumbnail');

    const imgRes = await fetch(imgUrl, { signal: AbortSignal.timeout(20000) });
    if (!imgRes.ok) throw new Error(`img ${imgRes.status}`);

    const buf = await imgRes.arrayBuffer();
    if (buf.byteLength < 3000) throw new Error('too small');
    await writeFile(dest, Buffer.from(buf));
    console.log(` ✅ wikipedia (${(buf.byteLength/1024).toFixed(0)}KB)`);
    return true;
  } catch (e1) {
    process.stdout.write(` wiki failed (${e1.message}), trying picsum...`);
  }

  await sleep(200);

  // ── Fallback: Picsum (random, always works) ────────────────────────────
  try {
    const url    = `https://picsum.photos/seed/${product.id * 17}/800/600`;
    const imgRes = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15000) });
    if (!imgRes.ok) throw new Error(`picsum ${imgRes.status}`);

    const buf = await imgRes.arrayBuffer();
    await writeFile(dest, Buffer.from(buf));
    console.log(` ✅ picsum`);
    return true;
  } catch (e2) {
    console.log(` ❌ ${e2.message}`);
    return false;
  }
}

async function patchProductsJs(ok) {
  if (ok === 0) return;

  const lines   = PRODUCTS.map(p => `  ${p.id}: '/images/products/${p.id}.jpg',`).join('\n');
  const mapFile = resolve(__dirname, 'src/data/productImages.js');
  await writeFile(mapFile, `// Auto-generated\nexport const PRODUCT_IMAGES = {\n${lines}\n};\n`);
  console.log('\n📝 Wrote src/data/productImages.js');

  const { readFileSync, writeFileSync } = await import('fs');
  const prodFile = resolve(__dirname, 'src/data/products.js');
  let src = readFileSync(prodFile, 'utf8');

  if (!src.includes('productImages')) {
    src = `import { PRODUCT_IMAGES } from './productImages';\n` + src;
  }

  // Only patch if p() hasn't been patched yet
  if (src.includes('const p = (name, description, category, image = null, overrides = {}) => ({')) {
    src = src.replace(
      /const p = \(name, description, category, image = null, overrides = \{\}\) => \(\{[\s\S]*?\}\);/,
      `const p = (name, description, category, image = null, overrides = {}) => {
  const id = ++_id;
  return {
    id, name, description, category,
    image: PRODUCT_IMAGES[id] ?? image,
    origin: 'India', verified: true, hsCode: null,
    ...(CAT[category] || {}),
    ...overrides,
  };
};`
    );
    writeFileSync(prodFile, src, 'utf8');
    console.log('✅ Patched src/data/products.js');
  } else {
    console.log('ℹ️  products.js already patched');
  }
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  console.log('\n🚀 Fetching product images from Wikipedia (free, no key)\n');

  let ok = 0, fail = 0;
  for (const product of PRODUCTS) {
    const success = await generate(product);
    success ? ok++ : fail++;
    await sleep(300);
  }

  console.log(`\n📊 ${ok} ✅  ${fail} ❌`);
  await patchProductsJs(ok);
  console.log('\n🎉 Done! Run  npm run dev  to see the images.\n');
}

main().catch(err => { console.error(err); process.exit(1); });
