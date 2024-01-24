def solution(n):
    # 1
    # for i in range(0, n+1, 2): # 효율이 안좋음
        # answer += i
    
    # 2
    answer = 0
    answer = sum([i for i in range(0, n+1, 2)])
    return answer
    
    
    # 3 
    res = 0
    
    for i in range(0, n+1, 2):
        res += i
    return res
