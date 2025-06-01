function solution(arr) {
    const res = [];
    
    for(let i = 0; i < arr.length; i++){
        const num = arr[i];
        
        for(let j = 0; j < num; j++){
            res.push(num);
        }
    }
    return res   
}
