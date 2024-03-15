function solution(numer1, denom1, numer2, denom2) {
    const answer = [];
    
    // a 분자
    // b 분모
    const a = numer1 * denom2 + numer2 * denom1;
    const b = denom1 * denom2;
    
    // 나머지가 0이면 b를 반환
    // 0이 아니면 b % 나머지 값을 계산
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b ));
    
    answer[0] = a / gcd(a, b)
    answer[1] = b / gcd(a, b)
    return answer;
}