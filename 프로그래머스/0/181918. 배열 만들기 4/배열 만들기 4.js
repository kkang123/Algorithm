function solution(arr) {
    let stk = [];
    
    arr.forEach((value) =>{
        while(stk.length > 0 && stk[stk.length - 1] >= value ){
            stk.pop();
        }
        stk.push(value);
    });
    
    return stk;
}
