function solution(s) {
    let count = 0;
    
    let isX = 0;
    let notX = 0;
    let x = ''

    for(let i = 0; i < s.length; i++){
        if(isX === 0){
            x = s[i]
            isX = 1;
            notX = 0;
           } else {
               if(s[i] === x){
                   isX++
               } else {
                   notX++
               }
               
               if(isX === notX){
                count++
                isX = 0;
                notX = 0;
               }
           }
    }
    if(isX !== 0 || notX !== 0) count++
    
    return count;
}
