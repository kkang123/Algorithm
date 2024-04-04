# 투 포인터

# def solution(number):
#     answer = 0
#     number.sort() # 배열을 먼저 정렬합니다.
#     n = len(number)
    
#     for i in range(n-2): # 마지막 두 원소는 기준 원소가 될 수 없으므로 n-2까지 반복합니다.
#         if i > 0 and number[i] == number[i-1]: # 같은 값의 기준 원소를 건너뛰어 중복 제거
#             continue
        
#         left, right = i + 1, n - 1
#         while left < right: # 투 포인터 기법을 이용합니다.
#             sum = number[i] + number[left] + number[right]
#             if sum == 0:
#                 answer += 1
#                 while left < right and number[left] == number[left + 1]:
#                     left += 1 # 같은 값 건너뛰기
#                 while left < right and number[right] == number[right - 1]:
#                     right -= 1 # 같은 값 건너뛰기
#                 left += 1
#                 right -= 1
#             elif sum < 0:
#                 left += 1
#             else:
#                 right -= 1
                
#     return answer


# 3중 중첩

def solution(number):
    answer = 0
    n = len(number)
    
    for i in range(n):
        for j in range(i+1, n):
            for k in range(j+1, n):
                if number[i] + number[j] + number[k] == 0:
                    answer += 1
        

    return answer

