function solution(citations) {
    citations.sort((a, b) => b - a)
    
    let h = 0;
    for(let i = 0; citations.length; i++){
        if(citations[i] >= i + 1){
            h++
        } else {
            break;
        }
    }
    return h
}
