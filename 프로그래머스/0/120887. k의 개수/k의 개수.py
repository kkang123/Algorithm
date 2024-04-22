def solution(i, j, k):
    a=''
    
    for i in range(i, j+1):
        a += str(i)
        
    return a.count(str(k))
