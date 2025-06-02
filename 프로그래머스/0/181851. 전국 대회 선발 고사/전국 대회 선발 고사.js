function solution(rank, attendance) {
    return rank
        .map((r, i) => ({rank : r, idx : i}))
        .filter((student) => attendance[student.idx])
        .sort((a, b) => a.rank - b.rank)
        .slice(0, 3)
        .map((student) => student.idx)
        .reduce((acc, val, i) => acc + val * [10000, 100, 1][i], 0)
}
