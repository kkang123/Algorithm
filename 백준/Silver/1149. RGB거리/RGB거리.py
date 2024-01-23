# 집은 빨 초 파 중 하나로 색칠, 칠하는 비용 별개
# 1번 집은 2번 집과 색이 겹치지 않음
# N번 집은 N-1 집과 색이 겹치지 않음
# 앞 뒤 집과 색이 겹치면 안됨

n = int(input())
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))

dp = [[0]*3 for _ in range(n)]
dp[0] = arr[0]

for i in range(1, n):
    dp[i][0] = min(dp[i-1][1], dp[i-1][2]) + arr[i][0]
    dp[i][1] = min(dp[i-1][0], dp[i-1][2]) + arr[i][1]
    dp[i][2] = min(dp[i-1][0], dp[i-1][1]) + arr[i][2]

print(min(dp[n-1]))
    

