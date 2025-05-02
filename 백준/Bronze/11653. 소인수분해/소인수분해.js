let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let i = 2;
while (N !== 1) {
  if (N % i === 0) {
    console.log(i);
    N = N / i;
  } else {
    i++;
  }
}
