const fs = require("fs");
const lines = fs.readFileSync("js/tree.js", "utf8").split(/\r?\n/);
const targets = ["function openModal", "function closeModal"];

lines.forEach((line, idx) => {
  if (targets.some((t) => line.includes(t))) {
    const start = Math.max(0, idx - 5);
    const end = Math.min(lines.length, idx + 40);
    for (let i = start; i < end; i++) {
      console.log(`${i + 1}: ${lines[i]}`);
    }
    console.log("----");
  }
});
