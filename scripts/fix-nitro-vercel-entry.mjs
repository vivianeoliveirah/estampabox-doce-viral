import { readFile, writeFile } from "node:fs/promises";

const presetPath = "node_modules/nitro/dist/_presets.mjs";
const invalidEntry = 'entry: "./vercel/runtime/vercel.{format}"';
const fixedEntry = 'entry: "./vercel/runtime/vercel.node"';

const source = await readFile(presetPath, "utf8");
if (!source.includes(invalidEntry)) {
  if (source.includes(fixedEntry)) process.exit(0);
  throw new Error(`Nitro Vercel entry pattern not found in ${presetPath}`);
}

await writeFile(presetPath, source.replace(invalidEntry, fixedEntry));
