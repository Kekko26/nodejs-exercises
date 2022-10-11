import * as fs from "node:fs";

fs.writeFile(
  "./PROVA.md",
  "FILE CONTENT EXAMPLE",
  { encoding: "utf-8" },
  (e) => {
    if (e) {
      console.log(new Error("errore rilevato"));
    }
  }
);
