function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    const counts = {};

    // 주사위 숫자의 빈도를 계산
    dice.forEach(num => counts[num] = (counts[num] || 0) + 1);

    const uniqueValues = Object.keys(counts).map(Number);
    const frequencies = Object.values(counts);

    // 모든 주사위가 같은 경우
    if (frequencies.length === 1) {
        return 1111 * uniqueValues[0];
    }
    
    // 세 개의 주사위가 같고 하나가 다른 경우
    if (frequencies.includes(3)) {
        const p = uniqueValues[frequencies.indexOf(3)];
        const q = uniqueValues[frequencies.indexOf(1)];
        return Math.pow((10 * p + q), 2);
    }
    
    // 두 개씩 같은 경우
    if (frequencies.length === 2 && frequencies.every(freq => freq === 2)) {
        const p = uniqueValues[0];
        const q = uniqueValues[1];
        return (p + q) * Math.abs(p - q);
    }
    
    // 두 개가 같고 나머지 두 개가 다른 경우
    if (frequencies.includes(2)) {
        const p = uniqueValues[frequencies.indexOf(2)];
        const others = uniqueValues.filter(val => val !== p);
        return others[0] * others[1];
    }
    
    // 모든 숫자가 다른 경우
    return Math.min(...dice);
}
