function solution(spell, dic) {
    // spell 합치기
   let arr = spell.sort().join("")
   
   return dic.map(a => a.split("").sort().join("")).find(a=> a===arr) !== undefined ? 1: 2
}
