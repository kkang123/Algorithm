function solution(arr) {
    const rowCount = arr.length;
    const colCount = arr[0].length;
    
    if(rowCount > colCount){
        return arr.map(row => row.concat(Array(rowCount - colCount).fill(0)))
    }else {
        const rowAdd = Array(colCount).fill(0)
        for(let i = 0; i < colCount - rowCount; i++){
            arr.push(...[rowAdd]);
        }
    }
    return arr
}
