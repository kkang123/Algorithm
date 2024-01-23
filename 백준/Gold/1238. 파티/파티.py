# n m x (학생 수,  도로개수, 모일 마을)
# 단방향

import heapq

INF = float('inf')

def dijkstra_pq(graph, start):
    N = len(graph)
    dist = [INF] * N

    q = []
    heapq.heappush(q, (0, start))
    dist[start] = 0

    while q:
        acc, cur = heapq.heappop(q)

        if dist[cur] < acc:
            continue

        for adj, d in graph[cur]:
            cost = acc + d
            if cost < dist[adj]:
                dist[adj] = cost
                heapq.heappush(q, (cost, adj))

    return dist

N, M, X = map(int, input().split())
graph = [[] for _ in range(N + 1)]
reverse_graph = [[] for _ in range(N + 1)]

for _ in range(M):
    start, end, time = map(int, input().split())
    graph[start].append((end, time))
    reverse_graph[end].append((start, time))

to_party = dijkstra_pq(reverse_graph, X)
from_party = dijkstra_pq(graph, X)

max_time = 0
for i in range(1, N + 1):
    max_time = max(max_time, to_party[i] + from_party[i])

print(max_time)