function solution(n) {
  let x = 1;
  while (x * x <= n) {
    if (x * x === n) {
      return (x + 1) * (x + 1);
    }
    x++;
  }
  return -1;
}
