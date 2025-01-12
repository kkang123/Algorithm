function solution(arr, queries) {
    let res = [];

    for (let i = 0; i < queries.length; i++) {
        let [s, e, k] = queries[i]; // 구조분해할당
        
        let filtered = arr.slice(s, e + 1).filter(value => value > k); // 범위 설정 후 filter 메소드를 조건 추가하여 새로운 배열 반환
        
        // 최소 값
        if (filtered.length > 0) {
            res.push(Math.min(...filtered)); // 전개구문
        } else { 
            res.push(-1); // 예외 상황 
        }
    }

    return res;
}
