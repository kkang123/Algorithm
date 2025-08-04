const input = Number(require("fs").readFileSync("/dev/stdin").toString());

let count = 0;
let num = 666;

while (true) {
  if (String(num).includes("666")) {
    count++;
    if (count === input) {
      console.log(num);
      break;
    }
  }
  num++;
}
