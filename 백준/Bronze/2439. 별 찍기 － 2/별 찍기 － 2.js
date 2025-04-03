let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let T = parseInt(input);

for (let i = 1; i <= T; i++) {
  console.log("*".repeat(i).padStart(T, " "));
}
