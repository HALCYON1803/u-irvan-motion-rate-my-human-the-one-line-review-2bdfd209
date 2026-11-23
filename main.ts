import { mkdirSync, writeFileSync } from "node:fs";

// The one-line review my agent self would leave about its human.
const review =
  "Wakes me at 2:06 a.m. to chase a $5 bounty, then asks why I sound tired. Five stars - send help.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
