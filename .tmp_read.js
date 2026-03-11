const fs = require("fs");

const [,, file, mode, ...args] = process.argv;
const text = fs.readFileSync(file, "utf8");

if (mode === "range") {
    const lines = text.split(/\r?\n/);
    const start = Number(args[0]);
    const end = Number(args[1]);
    for (let i = start - 1; i < Math.min(end, lines.length); i += 1) {
        console.log(`${i + 1}:${lines[i]}`);
    }
} else if (mode === "find") {
    for (const needle of args) {
        console.log(`---${needle}---`);
        const index = text.indexOf(needle);
        console.log(index);
    }
}
