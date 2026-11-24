import { randomBytes, scryptSync } from "node:crypto";
import { readFile, writeFile, chmod } from "node:fs/promises";
import { createInterface } from "node:readline/promises";
import { Writable } from "node:stream";

if (!process.stdin.isTTY) throw new Error("Run this command in an interactive terminal.");

let hidden = false;
const output = new Writable({ write(chunk, encoding, done) {
  if (!hidden) process.stdout.write(chunk, encoding);
  done();
} });
const prompt = createInterface({ input: process.stdin, output, terminal: true });

try {
  const email = (await prompt.question("Admin email: ")).trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) throw new Error("Enter a valid email address.");
  process.stdout.write("Admin password (hidden, at least 12 characters): ");
  hidden = true;
  const password = await prompt.question("");
  hidden = false;
  process.stdout.write("\n");
  if (password.length < 12 || password.length > 256) throw new Error("Use a password between 12 and 256 characters.");
  process.stdout.write("Confirm password (hidden): ");
  hidden = true;
  const confirmation = await prompt.question("");
  hidden = false;
  process.stdout.write("\n");
  if (password !== confirmation) throw new Error("Passwords do not match.");
  const salt = randomBytes(32).toString("hex");
  const hash = scryptSync(password, salt, 64, { N: 32768, r: 8, p: 3, maxmem: 64 * 1024 * 1024 }).toString("hex");
  const values = { ADMIN_EMAIL: email, ADMIN_PASSWORD_HASH: `scrypt:${salt}:${hash}`, ADMIN_AUTH_SECRET: randomBytes(48).toString("base64url") };
  const path = new URL("../.env.local", import.meta.url);
  let previous = "";
  try { previous = await readFile(path, "utf8"); } catch (error) { if (error.code !== "ENOENT") throw error; }
  for (const [key, value] of Object.entries(values)) {
    const entry = `${key}=${JSON.stringify(value)}`;
    const pattern = new RegExp(`^${key}=.*$`, "m");
    previous = pattern.test(previous) ? previous.replace(pattern, entry) : `${previous.trimEnd()}\n${entry}\n`;
  }
  await writeFile(path, previous.trimStart(), { mode: 0o600 });
  await chmod(path, 0o600);
  console.log("Admin credentials saved to .env.local. Restart Next.js to use them.");
} finally {
  hidden = false;
  prompt.close();
}
