function solution(my_string, m, c) {
    let result = "";
    for (let i = 0; i < my_string.length; i += m) {
        result += my_string[i + c - 1];  // c번째 열은 (c-1) 인덱스에 해당
    }
    return result;
}

// m 한 줄씩 잘라서
// c 2번 째 줄
