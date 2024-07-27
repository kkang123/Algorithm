function solution(my_string, letter) {

    
    let answer = my_string;
    
    
    let ReqExp_str = new RegExp(letter, "g");
    let replace_str = answer.replace(ReqExp_str, "");
    
    // let replace_str = answer.replaceAll(letter, '');
    return replace_str;
}




// 문자 제거는 replace
