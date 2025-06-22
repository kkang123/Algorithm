function solution(numbers) {
  const digits = numbers.split('');
  const set = new Set();

  // 1. 순열 생성 함수 (DFS 방식)
  const getPermutations = (arr, prefix = '') => {
    if (prefix.length > 0) {
      set.add(Number(prefix)); // 숫자로 변환해서 Set에 저장
    }

    for (let i = 0; i < arr.length; i++) {
      const next = [...arr];
      next.splice(i, 1); // i번째 숫자를 제외한 배열
      getPermutations(next, prefix + arr[i]); // 재귀로 조합 확장
    }
  };

  getPermutations(digits);


  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  let count = 0;
  for (const num of set) {
    if (isPrime(num)) count++;
  }

  return count;
}
