function solution(n, k) {
    if(n>=10){
        k -= Math.floor(n / 10)
    }
    return n * 12000 + k *2000
}

// 양꼬치 10인분에 음료수 1개
// 양꼬치 1개 12000
// 음료수 1개 2000
