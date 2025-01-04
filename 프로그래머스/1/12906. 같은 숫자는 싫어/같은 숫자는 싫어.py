#  큐

from collections import deque

def solution(arr):
    q = deque() 
    q.append(arr[0])
    
    for i in range(1, len(arr)):
        if arr[i] != arr[i-1]:
            q.append(arr[i])
            
    return list(q)
# rueturn q 가 아닌 이유는 deque는 다른 자료형이기 때문에 오류 발생

# 스택

# def solution(arr):
#     stack = [arr[0]]

#     for i in range(1, len(arr)):
#         if arr[i] != arr[i-1]:
#             stack.append(arr[i])
        
    
#     return stack
