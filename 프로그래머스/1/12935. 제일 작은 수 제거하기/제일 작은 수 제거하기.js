function solution(arr) {
    const res = arr.filter(num => num !== Math.min(...arr))
    return res.length > 0 ? res : [-1]
}
