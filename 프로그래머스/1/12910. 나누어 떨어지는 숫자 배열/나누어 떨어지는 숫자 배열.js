function solution(arr, divisor) {
   const res = arr.filter(num => num % divisor === 0).sort((a, b) => a - b)
   return res.length > 0 ? res : [-1]
}
