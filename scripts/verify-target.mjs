import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const packageJsonPath = path.join(repoRoot, "package.json");
const packageJson = fs.readFileSync(packageJsonPath, "utf8");

if (!/"name"\s*:\s*"premium-trainer-site"/.test(packageJson)) {
  throw new Error("Guardrail failed: wrong project. Expected package name premium-trainer-site.");
}

const heroPath = path.join(repoRoot, "src", "components", "sections", "Hero.tsx");
if (!fs.existsSync(heroPath)) {
  throw new Error("Guardrail failed: Hero.tsx not found.");
}

const heroContent = fs.readFileSync(heroPath, "utf8");
if (!/Изящные\s+формы/.test(heroContent)) {
  throw new Error('Guardrail failed: baseline blue hero marker not found (expected "Изящные формы").');
}

console.log("Guardrail OK: premium-trainer-site with blue baseline is active.");
