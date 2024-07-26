function solution(my_string, n) {
    let str = my_string.split('');
    
    let result = str.map(v=> v.repeat(n)).join("");
//     for(i = 0; i < my_string.length; i++){
//         my_string.repeat(n)
//     }
    
    
    
    return result;
}
