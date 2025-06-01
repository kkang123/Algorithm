function solution(myStr) {
    const res = myStr.replace(/[abc]/g, " " ).split(" ").filter(str => str.length)
    
    
    return res.length ? res : ["EMPTY"]
}
