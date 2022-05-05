const solution = (s) => {
    let [[N], ...m] = s.toString().trim().split('\n');

    const grid = m.map((el) => el.split('').map((el) => +el));

    const checked = Array.from({ length: N }, () =>
        Array.from({ length: N }, () => 0)
    );

    const dx = [1, 0, -1, 0]; // delta X
    const dy = [0, 1, 0, -1]; // delta Y

    const solution = (i, j) => {
        for (let way = 0; way < 4; way++) {
            let ii = i + dx[way];
            let jj = j + dy[way];
            if (A[ii][jj] === 1) {
                dfs(ii, jj);
            }
        }
    };

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (A[i][j] === 1) {
                dfs(i, j);
            }
        }
    }
};

solution(`7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`);
