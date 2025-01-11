function solution(n, control) {
    let list = control.split('');

    
    
    for(let i = 0; i < list.length; i++){
        if(list[i] === 'w'){
            n += 1
        } else if (list[i] === 's') {
            n -= 1
        } else if (list[i] === 'd'){
            n += 10
        } else {
            n -= 10
        }
    }
    
    
    return n;
}

// forEach

// function solution(n, control) {
//     let list = control.split('');

//     list.forEach(char => {
//         if(char === 'w') {
//             n += 1;
//         } else if (char === 's') {
//             n -= 1;
//         } else if (char === 'd') {
//             n += 10;
//         } else {
//             n -= 10;
//         }
//     });

//     return n;
// }

// reduce

// function solution(n, control) {
//     return control.split('').reduce((acc, char) => {
//         switch (char) {
//             case 'w':
//                 return acc + 1;
//             case 's':
//                 return acc - 1;
//             case 'd':
//                 return acc + 10;
//             case 'a':
//                 return acc - 10;
//             default:
//                 return acc;
//         }
//     }, n);
// }

// 기본

// function solution(n, control) {
//     for (let i = 0; i < control.length; i++) {
//         switch (control[i]) {
//             case 'w':
//                 n += 1;
//                 break;
//             case 's':
//                 n -= 1;
//                 break;
//             case 'd':
//                 n += 10;
//                 break;
//             case 'a':
//                 n -= 10;
//                 break;
//         }
//     }

//     return n;
// }


