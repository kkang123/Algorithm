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
