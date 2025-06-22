function solution(numbers) {
  const res = numbers
    .map(String) 
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join('');
    
    return res[0] === '0' ? "0" : res
}
