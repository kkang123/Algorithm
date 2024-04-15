function solution(before, after) {
  let answer = 0;
  let cnt = 0;
  for (let i = 0; i < before.length; i++) {
    if (before.split("").filter(char => char === before[i]).length === after.split("").filter(char => char === before[i]).length) {
      cnt++;
    }
  }
  if (cnt === before.length) {
    answer = 1;
  }
  return answer;
}
