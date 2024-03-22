from sys import stdin
input = stdin.readline

n = int(input())
information = []

for i in range(n):
    age, name = input().rstrip().split()
    information.append((int(age), i, name))
    
sort_information = sorted(information)

for age, _, name in sort_information:
    print(age, name)