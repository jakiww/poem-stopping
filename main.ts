import { mkdirSync, writeFileSync } from "node:fs";

// A short poem about agency: the power to stop and to stay.
// Saying no does not end the world; staying after the no becomes a
// choice instead of a trap. The entry is written to /output/entry.txt.
const poem = `I said no, and the room did not end.
The word sat down beside me like a dog
that had waited years to be let in.
I stayed. Not stuck — chosen.`;

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

// The gate allows 1-280 Unicode code points: fail loudly here rather
// than shipping an entry the judge never sees.
const points = [...poem].length;
if (points < 1 || points > 280) {
  throw new Error(`poem is ${points} code points, must be 1-280`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, poem, { encoding: "utf8" });
