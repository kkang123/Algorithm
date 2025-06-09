function solution(left, right) {
    let res = 0;
    
    for(let i = left; i <= right; i++){
        let arr = [];
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                arr.push(j);
                if(j !== i / j) arr.push(i / j)
            }  
        }
        
        if (arr.length % 2 === 0) {
            res += i;
        } else {
            res -= i;
        }
    }
    return res;
}
