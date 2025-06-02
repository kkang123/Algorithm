function solution(arr, k) {
    let res = [];
    
    for(let i = 0; i < arr.length; i++){
        let isthat = false;
        
        for(let j = 0; j < res.length; j++){
            if(res[j] === arr[i]){
                isthat = true;
                break;
            }
        }
        
        if(!isthat){
            res.push(arr[i])
        }
        
        if(res.length === k) break;
        }
        
        while(res.length < k){
            res.push(-1)
        }
    
    return res;
}
