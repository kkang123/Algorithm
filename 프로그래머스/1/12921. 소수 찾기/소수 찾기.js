function solution(n) {
    const isPrime = Array(n + 1).fill(true)
    isPrime[0] = isPrime[1] = false;
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(isPrime[i]){
            for(let j = i * i; j <= n; j += i){
                isPrime[j] = false;
            }
        }
    }
    
    return isPrime.filter(v => v).length;
}


// function solution(n) {
//     let count = 0;
    
//     for(let i = 2; i <= n; i++){
//         let isPrime = true;
        
//         for(let j = 2; j <= Math.sqrt(i); j++){
//             if(i % j === 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime) count++
//     }
    
//     return count;
// }
