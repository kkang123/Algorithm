const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

let point = Math.pow(2 ** input + 1, 2);

console.log(point);
