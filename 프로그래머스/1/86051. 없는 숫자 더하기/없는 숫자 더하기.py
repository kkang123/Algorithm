def solution(numbers):
    res = 45
    
    for i in range(len(numbers)):
        res -= numbers[i]
    
    
    return res

# 이렇게 풀어도 되는가? 다른 방법이 마땅히 떠오르지 않음..

# 1.
# return 45 - sum(numbers)

# 2. not in문 사용하기
# def solution(numbers):
#     answer=0
#     for i in range(1,10):
#         if i not in numbers:
#             answer += i
#     return answer
