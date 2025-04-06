const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let res = input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g, "a").length;

console.log(res);
