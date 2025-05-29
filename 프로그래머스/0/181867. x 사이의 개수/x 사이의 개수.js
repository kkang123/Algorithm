function solution(myString) {
    return myString.split("x").map(str => str.length);
}


// function solution(myString) {
//     const res = [];
//     let count = 0;

//     for (let i = 0; i < myString.length; i++) {
//         if (myString[i] === 'x') {
//             res.push(count);  
//             count = 0;        
//         } else {
//             count++;    
//         }
//     }

//     res.push(count);
    
//     return res;
// }
