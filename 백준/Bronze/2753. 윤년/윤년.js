let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let res = parseInt(input);

console.log((res % 4 == 0 && res % 100 != 0) || res % 400 == 0 ? 1 : 0);
