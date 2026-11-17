// Build a single offline HTML file: inlines SheetJS into src/template.html -> dist/anonymizer.html
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const tpl = readFileSync("src/template.html", "utf8");
const lib = readFileSync("node_modules/xlsx/dist/xlsx.full.min.js", "utf8");
if (!tpl.includes("/*__XLSX__*/")) throw new Error("placeholder /*__XLSX__*/ not found in template");
mkdirSync("dist", { recursive: true });
writeFileSync("dist/anonymizer.html", tpl.replace("/*__XLSX__*/", () => lib));
console.log("Built dist/anonymizer.html");
