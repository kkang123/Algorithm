# 집은 빨 초 파 중 하나로 색칠, 칠하는 비용 별개
# 1번 집은 2번 집과 색이 겹치지 않음
# N번 집은 N-1 집과 색이 겹치지 않음
# 앞 뒤 집과 색이 겹치면 안됨

from sys import stdin
input = stdin.readline

n = int(input())
arr = [0] * n

for i in range(n):
    arr[i] = list(map(int, input().split()))

for i in range(1, n):
    arr[i][0] = min(arr[i-1][1], arr[i-1][2]) + arr[i][0]
    arr[i][1] = min(arr[i-1][0], arr[i-1][2]) + arr[i][1]
    arr[i][2] = min(arr[i-1][0], arr[i-1][1]) + arr[i][2]
    
print(min(arr[n-1][0], arr[n-1][1], arr[n-1][2]))
    

