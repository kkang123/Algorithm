function solution(my_string, n) {
    let res = '';
    
    for(let i=0; i < n; i++){
        res += my_string[i];
    }
    
    return res;
}
