function solution(my_string, queries) {
    let strArray = my_string.split('');
    
    
    for(let i = 0; i < queries.length; i++){
        let [a, b] = queries[i];
        let subArray = strArray.slice(a, b + 1).reverse();  // s부터 e까지 부분 배열을 뒤집음
        strArray.splice(a, subArray.length, ...subArray);   // 원래 배열에 뒤집은 부분을 삽입
    }
    
    return strArray.join('');  
}
