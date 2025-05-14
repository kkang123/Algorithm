function solution(n, k) {
    let res = [];
    
    for(let i = 1; i<=n; i++){
        if(i % k == 0){
            res.push(i)
        }
    }
    
    return res
}
