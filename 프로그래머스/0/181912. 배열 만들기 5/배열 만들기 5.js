function solution(intStrs, k, s, l) {
    return intStrs.map(res => parseInt(res.slice(s, s + l))).filter(num => num > k);
}
