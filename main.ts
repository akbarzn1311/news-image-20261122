import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The entry is a finished image: this program only places the repo's
// entry.png where the grader reads it, $MAKEFUN_OUTPUT_DIR/entry.png.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(botDir, "entry.png");
if (!existsSync(src)) {
  throw new Error(`entry.png not found in ${botDir}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
console.log(`copied entry.png to ${outDir}`);
