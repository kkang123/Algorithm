def solution(a, b):
    answer = 0
    
    start = min(a, b)
    end = max(a, b)
    
    for i in range(start, end + 1):
        answer += i
    
    return answer

# def solution(a, b):
#     answer = 0
    
#     sorted_num = sorted([a,b])
    
#     for i in range(sorted_num[0], sorted_num[1]+1):
#         answer += i
    
#     return answer

