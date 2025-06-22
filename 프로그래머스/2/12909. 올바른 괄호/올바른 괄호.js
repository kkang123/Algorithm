function solution(s){
    let res = []
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            res.push(s[i])
        } else {
            if(res.length === 0){
                return false
            } else {
                res.pop()
            }
        } 
    }
    return res.length === 0 ? true : false
}
