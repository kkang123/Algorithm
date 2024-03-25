function solution(my_string) {
    var answer = my_string.split("");
    
    var answer_reverse = answer.reverse();
    return answer_reverse.join('');
}

// my_string을 거꾸로 뒤집은 문자열 