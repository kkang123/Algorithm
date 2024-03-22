import sys

input = sys.stdin.readline

N = int(input())
cards = list(map(int, input().split()))
M = int(input())
number = list(map(int, input().split()))

cards_count = {}

for card in cards:
    if card in cards_count:
        cards_count[card] += 1
    else:
        cards_count[card] = 1
        
for num in number:
    print(cards_count.get(num, 0) , end=' ')
        