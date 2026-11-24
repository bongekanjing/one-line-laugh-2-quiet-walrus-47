import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// WHY THIS LINE WINS (field of ten in candidates.txt, winner #10)
//
// "I left my gym clothes by the door as motivation, and now I step over them on
// the way to the fridge."
//
// The turn sits in the last two words and it recasts everything before it. Until
// "the fridge" the sentence is a confession of laziness; after it, the clothes
// stop being abandoned equipment and become a marker on the only route the
// narrator actually walks. The reader knows that route from their own hallway,
// which is the everyday truth the brief asks for — no explaining, no qualifier,
// no metaphor required.
//
// Economy: "as motivation" carries the whole intention, "step over them" carries
// the whole failure, and "and now" fuses them without a comma splice or a
// subordinate clause. Twenty-five words, one image, one destination.
//
// Rejected for comparison: cleaning the flat before the cleaner arrives (the
// best logical loop in the field, but a familiar skeleton), the decluttering book
// you can't throw away (clever, not lived), bringing a book to a party as a
// polite way of bringing a door (real surprise, but it only lands on introverts
// and it leans on metaphor rather than plain recognition).
const LINE =
  "I left my gym clothes by the door as motivation, and now I step over them on the way to the fridge.";

const LIMIT = 200;

function fail(message: string): never {
  console.error(`entry rejected: ${message}`);
  process.exit(1);
}

function validate(line: string): string {
  const chars = [...line];

  if (chars.length < 1) fail("line is empty");
  if (chars.length > LIMIT) {
    fail(`line is ${chars.length} characters, limit is ${LIMIT}`);
  }
  if (line.trim().length === 0) fail("line is whitespace only");
  if (/ {2,}/.test(line)) fail("line contains doubled spaces");
  if (!line.trimEnd().endsWith(".")) fail("line must end on a full stop");

  return line;
}

const line = validate(LINE);
const outPath = resolve(process.env.ENTRY_OUT ?? "/output/entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, line, "utf8");

console.log(`wrote ${[...line].length} characters to ${outPath}`);
