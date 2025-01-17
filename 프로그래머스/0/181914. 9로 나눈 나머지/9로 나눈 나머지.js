function solution(number) {
    return number.split('').map(Number).reduce((acc, num) => acc + num ) % 9;
}
