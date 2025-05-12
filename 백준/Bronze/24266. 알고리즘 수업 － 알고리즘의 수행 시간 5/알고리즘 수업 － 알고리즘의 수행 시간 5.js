const n = BigInt(require("fs").readFileSync("/dev/stdin").toString().trim());

console.log((n ** 3n).toString());
console.log(3);
