function solution(brown, yellow) {
    let res = [];
    let S = brown + yellow;
    
    for(let i = 1; i < S; i++){
        if((S/i) % 1 == 0){
           let a = S / i;
            if(a >= i){
                if(2 * a + 2 * i == brown + 4){
                    return [a, i]
                }
            }
        }
    }
    
    return res;
}
