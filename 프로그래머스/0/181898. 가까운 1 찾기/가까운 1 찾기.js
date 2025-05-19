function solution(arr, idx) {
    let res = 0
    
    for(let i = idx; i<arr.length; i++){
        if(arr[i] === 1){
            res = i
            break;
        }else{
           res = -1
        }
    }
    return res;
}
