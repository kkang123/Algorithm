const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let res = [];

for (let i = 1; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const part1 = input.slice(0, i).split("").reverse().join("");
    const part2 = input.slice(i, j).split("").reverse().join("");
    const part3 = input.slice(j).split("").reverse().join("");
    res.push(part1 + part2 + part3);
  }
}

res.sort((a, b) => a.localeCompare(b));
console.log(res[0]);
