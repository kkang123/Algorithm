function solution(s){
    
    let yCount = s.length - s.replace(/y/gi, '').length
    let pCount = s.length - s.replace(/p/gi, '').length
    
    return  yCount - pCount === 0 ? true : false
}



// p와 y의 개수를 비교했을 같으면 true 다르면 false
// replace
// 문자열 제거
