function solution(chicken) {
  let answer = 0;
    
  while (chicken >= 10) {
    let div = Math.floor(chicken / 10);
    let mod = chicken % 10;
    answer += div;
    chicken = div + mod;
  }
  return answer;
}