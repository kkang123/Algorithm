function solution(order) {
    // 아메리카노 4500 카페라떼 5000
    return order.map(str => str.includes("latte") ? 5000 : 4500).reduce((acc, cur) => acc + cur , 0)   
}
