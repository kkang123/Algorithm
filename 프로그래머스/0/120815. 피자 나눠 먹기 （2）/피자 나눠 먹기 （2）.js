function solution(n) {
    for( i = 1; i<= n; i++){
        if((6 * i) % n === 0)
            return i
    }
}

// i는 피자판수