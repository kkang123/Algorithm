function solution(common) {
    var one = common[0];
    var two = common[1];
    var three = common[2];

    var result;
    
    if (two - one === three - two) {
        result = common[common.length-1] + (two-one);
    } else if (Math.floor(two / one) === Math.floor(three / two)) {
        result = common[common.length-1] * Math.floor(two/one);
    }
    
    return result;
}

// 참고 문제 풀이

// function solution(common) {
//     let diff = common[1] - common[0];
//     let ratio = common[1] / common[0];
//     let isArithmetic = true;
//     let isGeometric = true;

//     common.forEach((value, index) => {
//         if (index < common.length - 1 && value + diff !== common[index + 1]) {
//             isArithmetic = false;
//         }
//         if (index < common.length - 1 && value * ratio !== common[index + 1]) {
//             isGeometric = false;
//         }
//     });

//     if (isArithmetic) return common[common.length - 1] + diff;
//     else if (isGeometric) return common[common.length - 1] * ratio;

//     return "Neither arithmetic nor geometric sequence";
// }