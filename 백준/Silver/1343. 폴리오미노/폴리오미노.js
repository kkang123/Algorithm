const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let res = [];

const parts = input.split(".");

for (let part of parts) {
  if (part.length === 0) {
    res.push("");
    continue;
  }

  if (part.length % 2 !== 0) {
    console.log(-1);
    process.exit(0);
  }

  let tmp = "AAAA".repeat(Math.floor(part.length / 4));
  tmp += "BB".repeat((part.length % 4) / 2);

  res.push(tmp);
}

console.log(res.join("."));
