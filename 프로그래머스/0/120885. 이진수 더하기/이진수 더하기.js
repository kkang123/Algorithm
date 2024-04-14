function solution(bin1, bin2) {
  const a1 = parseInt(bin1, 2);
  const a2 = parseInt(bin2, 2);
  const sum = a1 + a2;
  return sum.toString(2);
}