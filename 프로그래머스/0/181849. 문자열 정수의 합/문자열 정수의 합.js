function solution(num_str) {
    return num_str.split("").reduce((acc, val) => acc + +val, 0)
}
