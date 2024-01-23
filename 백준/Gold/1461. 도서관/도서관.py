# 최소 걸음 수
# 한 걸으에 좌표 1칸
# 책의 개수 N, 들 수 있는 M권의 책
# 가장 먼거리를 돌아오질 말 것
# -37 2 -6 -39 -29 11 -28 = {-39, -37}, {-29,-28}, {-6}, {2, 11}
# 29 * 2 + 6* 2 + 11* 2 + 39 = 131

from sys import stdin

input = stdin.readline

n, m = map(int, input().split())
distance = list(map(int, input().split()))

positive = []

for d in distance:
    if d > 0:
        positive.append(d)
        
positive.sort(reverse = True) # 멀리 있는 것부터 처리하는게 효율적

nagative = sorted([-d for d in distance if d < 0], reverse = True)

res = 0

for i in range(0, len(positive), m):
    res += positive[i] * 2

for i in range(0, len(nagative), m):
    res += nagative[i] * 2
    
if positive and nagative:
    res -= max(positive[0], nagative[0])
elif positive:
    res -= positive[0]
else:
    res -= nagative[0]
    
print(res)