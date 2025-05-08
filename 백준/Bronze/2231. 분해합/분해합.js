const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let res = 0;

for (let i = 0; i < N; i++) {
  let sum = i
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  if (i + sum === N) {
    res = i;
    break;
  }
}

console.log(res);
