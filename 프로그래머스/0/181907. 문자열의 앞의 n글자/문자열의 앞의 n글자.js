function solution(my_string, n) {
    let res = '';
    
    for(let i=0; i < n; i++){
        res += my_string[i];
    }
    
    return res;
}


// function solution(my_string, n) {
//     return my_string.slice(0, n);
// }

// function solution(my_string, n) {
//     return my_string.substring(0, n);
// }


