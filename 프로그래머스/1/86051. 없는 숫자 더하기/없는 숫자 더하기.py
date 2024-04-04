def solution(numbers):
    res = 45
    
    for i in range(len(numbers)):
        res -= numbers[i]
    
    
    return res