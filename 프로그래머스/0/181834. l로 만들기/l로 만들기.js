function solution(myString) {
    return myString
        .split('')
        .map(str => str.charCodeAt(0) < 'l'.charCodeAt(0) ? 'l' : str)
        .join('');
}
