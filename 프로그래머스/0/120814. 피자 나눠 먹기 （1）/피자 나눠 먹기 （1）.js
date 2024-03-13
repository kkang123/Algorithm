function solution(n) {
   
   
    let a = Math.ceil(n / 7)
    return a
}


 // 한 조각씩 먹고 남은 조각이 0이면 ? 피자 판수
// return n % 7 === 0 ? parseInt(n / 7) : parseInt(n / 7) + 1