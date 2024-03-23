from sys import stdin
input = stdin.readline

n = int(input())
num_str = input().strip()

total = 0

for i in num_str:
    total += int(i)
    
print(total)