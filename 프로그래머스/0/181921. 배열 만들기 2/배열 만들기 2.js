function solution(l, r) {
    let answer = [];
    
    for(let i=l; i <= r; i++){
        if(/^[50]+$/.test(i.toString())) {   
            answer.push(i);
        }
    }
    
    return answer.length ? answer : [-1];
}


// // 이진수 문제

// // 숫자 5로 현혹시켰지만 사실 이건 이진수 문제임.
// function* gen50() {
//     let i = 1;

//     while(true) {
//         yield Number(Number(i).toString(2)) * 5;
//         i++;
//     }
// }
// function solution(l, r) {
//     const n = gen50();
//     let a = 0;
//     const arr = [];

//     while(a < l) { a = n.next().value; }
//     while(a <= r) { arr.push(a); a = n.next().value; }

//     return arr.length ? arr : [-1];
// }

// // 3

// function solution(l, r) {
//     const result = Array.from({length:r-l+1}, (_,i)=>i+l).filter(n=>!/[^05]/.test(n));
//     return result.length ? result : [-1];
// }
