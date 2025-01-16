function solution(my_string, index_list) {
    let res = ""
    
    for(let i = 0; i < index_list.length; i++){
        let arr = index_list[i]
        res += my_string[arr];
    }
    
    
    return res;
}

// map

function solution(my_string, index_list) {
    return index_list.map(i => my_string[i]).join('')
}

// reduce

function solution(my_string, index_list){
    return index_list.reduce((res, i) =>  res + my_string[i], '');
}
