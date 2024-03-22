def LIS(arr):
    # LIS를 저장할 리스트 (최소값으로 시작)
    lis = [arr[0]]
    
    for i in range(1, len(arr)):
        # 현재 값이 lis의 마지막 값보다 크면 lis에 추가
        if arr[i] > lis[-1]:
            lis.append(arr[i])
        else:
            # 이진 탐색으로 현재 값이 들어갈 위치를 찾아 업데이트
            left, right = 0, len(lis) - 1
            while left <= right:
                mid = (left + right) // 2
                if lis[mid] < arr[i]:
                    left = mid + 1
                else:
                    right = mid - 1
            lis[left] = arr[i]
    return len(lis)

# 입력 받기
n = int(input())
arr = list(map(int, input().split()))

# 가장 긴 증가하는 부분 수열의 길이 출력
print(LIS(arr))