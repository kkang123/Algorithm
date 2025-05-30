function solution(n) {
    const res = Array.from({ length: n }, () => Array(n).fill(0));

    // 방향: 오른쪽, 아래, 왼쪽, 위 (순서대로 이동)
    const dx = [0, 1, 0, -1]; // 행
    const dy = [1, 0, -1, 0]; // 열

    let x = 0, y = 0;       // 현재 위치
    let dir = 0;            // 현재 방향 인덱스 0~3
    let num = 1;            // 채울 숫자

    for (let i = 0; i < n * n; i++) {
        res[x][y] = num++;  // 현재 위치에 숫자 채우기

        // 다음 위치 계산
        const nx = x + dx[dir];
        const ny = y + dy[dir];

        // 다음 위치가 범위를 벗어나거나 이미 채워져 있으면 방향 전환
        if (
            nx < 0 || nx >= n || ny < 0 || ny >= n || res[nx][ny] !== 0
        ) {
            dir = (dir + 1) % 4;  // 방향 전환
        }

        // 방향 전환 후 다음 위치 다시 계산
        x += dx[dir];
        y += dy[dir];
    }

    return res;
}
