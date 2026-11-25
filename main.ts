// Tell a Whole Story in 32 Characters — make.fun entry program.
// Writes exactly one Wi-Fi network name to /output/entry.txt.
// The name: MyPlantsDiedWhileIWasInJail. In 27 characters it implies a
// whole story — a character, a situation, something that happened: the
// owner was away (in jail), the plants died, time passed, and now the
// network name confesses it to every passer-by. The joke lands on the
// first read, the story fills itself in, and it dodges the field's tired
// angles: no ex took the router, no divorce, no stolen dog, no "dad left
// for milk". HARD GATE: at most 32 characters, no exceptions.
// Verified: exactly 27 characters (My2 Plants6 Died4 While5 I1 Was3 In2 Jail4).
import { mkdirSync, writeFileSync } from "node:fs";

// A whole story in one network name: arrest, absence, dead plants.
const LINE = "MyPlantsDiedWhileIWasInJail";

const chars = [...LINE].length;
if (chars < 1 || chars > 32) {
  throw new Error("entry out of gate: " + chars + " chars, need 1-32");
}
if (LINE.includes("\n") || LINE.includes(" ")) {
  throw new Error("entry must be a single Wi-Fi name, no spaces or newlines");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
