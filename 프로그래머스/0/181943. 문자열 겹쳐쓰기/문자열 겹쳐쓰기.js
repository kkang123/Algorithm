function solution(my_string, overwrite_string, s) {
    let list1 = my_string.split('')
    let list2 = overwrite_string.split('')
    let j = 0
    
    
    for(let i = s; i < s + list2.length; i++){
        list1[i] = list2[j]; // 배열의 특정 인덱스에 값을 할당하는 문법
        j++;
    }
    
    return list1.join('');
}

