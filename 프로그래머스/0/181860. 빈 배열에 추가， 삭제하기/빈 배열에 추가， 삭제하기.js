function solution(arr, flag) {
    let res = []
    
    arr.forEach((num , i)=>{
        if(flag[i]){
            res.push(...Array(num * 2).fill(num))
        }else {
            for(let j = 0; j < num; j++){
                res.pop();
            }
        }
    });
    
    return res;
}
