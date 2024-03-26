function solution(my_string) {
    const answer = my_string.split("");
    
    const answer_reverse = answer.reverse();
    return answer_reverse.join('');
}

// my_string을 거꾸로 뒤집은 문자열 