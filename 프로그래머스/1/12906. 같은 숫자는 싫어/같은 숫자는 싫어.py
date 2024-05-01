#  큐

from collections import deque

def solution(arr):
    q = deque() 
    q.append(arr[0])
    
    for i in range(1, len(arr)):
        if arr[i] != arr[i-1]:
            q.append(arr[i])
            
    return list(q)

# 스택

def solution(arr):
    stack = [arr[0]]

    for i in range(1, len(arr)):
        if arr[i] != arr[i-1]:
            stack.append(arr[i])
        
    
    return stack
