import sys
input = sys.stdin.readline
from collections import deque

n = int(input())
arr = list(map(int, input().split()))
delete = int(input())

cnt = 0 # 리프 노드

def dfs(arr, delete):
    q = deque([delete])
    while q:
        node = q.popleft()
        arr[node] = -2
        for i in range(len(arr)):
            if arr[i] == node:
                q.append(i)

dfs(arr, delete)

for i in range(len(arr)):
    if arr[i] != -2 and i not in arr:
        cnt += 1

print(cnt)
