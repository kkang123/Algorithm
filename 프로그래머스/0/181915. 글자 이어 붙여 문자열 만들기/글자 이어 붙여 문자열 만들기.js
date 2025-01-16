function solution(my_string, index_list) {
    let res = ""
    
    for(let i = 0; i < index_list.length; i++){
        let arr = index_list[i]
        res += my_string[arr];
    }
    
    
    return res;
}

